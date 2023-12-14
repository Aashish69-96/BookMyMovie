
#include "movieRoute.h"

void MovieRoute::handle_request(const httplib::Request &req, httplib::Response &res) const
{
    if (req.method == "GET")
    {
        res.set_content("GET request for MovieRoute", "text/plain");
    }
    else if (req.method == "POST")
    {
        res.set_content("POST request for MovieRoute", "text/plain");
    }
}

void MovieRoute::setupRoute(httplib::Server &server) const
{

    server.Get("/api/movie", [&](const httplib::Request &req, httplib::Response &res)
               {
        set_common_headers(res);
        handle_request(req, res); });

    server.Post("/api/movie", [&](const httplib::Request &req, httplib::Response &res)
                {
        set_common_headers(res);
        handle_request(req, res); });

    server.Options("/api/movie", [&](const auto &, auto &res)
                   {
        set_common_headers(res);
        res.status = 200; });
}

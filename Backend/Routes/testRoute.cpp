#include "testRoute.h"

void TestRoute::handle_request(const httplib::Request &req, httplib::Response &res, int type) 
{
    if (req.method == "GET")
    {
        res.set_content("GET request", "text/plain");
    }
    else if (req.method == "POST")
    {
        res.set_content("POST request", "text/plain");
    }
}

void TestRoute::setupRoute(httplib::Server &server) 
{
    // test route custom endpoint setup
    server.Get("/custom/test", [&](const httplib::Request &req, httplib::Response &res)
               {
        set_common_headers(res);
        handle_request(req, res,0); });

    server.Post("/custom/test", [&](const httplib::Request &req, httplib::Response &res)
                {
        set_common_headers(res);
        handle_request(req, res,0); });

    server.Options("/custom/test", [&](const auto &, auto &res)
                   {
        set_common_headers(res);
        res.status = 200; });
}

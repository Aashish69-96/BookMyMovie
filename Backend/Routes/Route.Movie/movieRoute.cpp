#include "movieRoute.h"

void MovieRoute::handle_request(const httplib::Request &req, httplib::Response &res, int type) 
{
    if (type == 0)
    {
        // for getting individual movie detail
        auto user_id = req.path_params.at("id");
        std::cout << user_id << std::endl;
        res.set_content("Value Received at the end ", "text/plain");
    }
    else if (type == 1)
    {
        res.set_content("Get request for MovieRoute gets all the movie in list", "text/plain");
    }
}

void MovieRoute::setupRoute(httplib::Server &server) 
{
    server.Get("/api/movie/:id", [&](const httplib::Request &req, httplib::Response &res)
               {
        set_common_headers(res);
        handle_request(req, res,0); });

    server.Get("/api/movie/all", [&](const httplib::Request &req, httplib::Response &res)
               {
                   set_common_headers(res);
                   handle_request(req, res, 1); });

    server.Post("/api/movie/add", [&](const httplib::Request &req, httplib::Response &res)
                {
        set_common_headers(res);
        handle_request(req, res,2); });

    server.Post("/api/movie/delete/:id", [&](const httplib::Request &req, httplib::Response &res)
                {
        set_common_headers(res);
        handle_request(req, res,3); });

    server.Options("/api/movie", [&](const auto &, auto &res)
                   {
        set_common_headers(res);
        res.status = 200; });
}

#include "baseRoute.h"

// index routing
void BaseRoute::setupRoute(httplib::Server &server)
{
    server.Get("/", [&](const httplib::Request &req, httplib::Response &res)
               {
            set_common_headers(res);
            handle_request(req, res,0); });

    server.Post("/", [&](const httplib::Request &req, httplib::Response &res)
                {
            set_common_headers(res);
            handle_request(req, res,0); });

    server.Options("/", [&](const auto &, auto &res)
                   {
            set_common_headers(res);
            res.status = 200; });
}
// cors bypass for every route handlers
void BaseRoute::set_common_headers(httplib::Response &res)
{
    res.set_header("Access-Control-Allow-Origin", "*");
    res.set_header("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
    res.set_header("Access-Control-Allow-Headers", "Content-Type");
}

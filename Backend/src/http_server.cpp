#include <iostream>
#include "../includes/http_server.h"
#include "./routes/routers.movie.h"
HTTPServer::HTTPServer()
{
    server.Get("/", [](const httplib::Request &req, httplib::Response &res)
               { res.set_content("Hello, World!", "text/plain"); });
}

void HTTPServer::runServer()
{
    server.Get("/movies", handleRequest);
    server.listen("localhost", 1973);
    // std::thread serverThread([this]()
    //                          { server.listen("localhost", 1973); });
    // // serverThread.detach();
}

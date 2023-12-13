#include <iostream>
#include <string>
#include "../includes/httplib.h"

void handle_get(const httplib::Request& /*req*/, httplib::Response& res) {
    res.set_content("Hello, World! (GET)", "text/plain");
}

void handle_post(const httplib::Request& req, httplib::Response& res) {
    std::string username = req.get_param_value("username");
    res.set_content(username, "text/plain");
}

int main() {
    httplib::Server svr;

    svr.Get("/", handle_get);

    svr.Post("/echo", handle_post);

    svr.listen("localhost", 8080);

    return 0;
}


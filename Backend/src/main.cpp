#include <iostream>
#include <string>
#include "../includes/httplib.h"

void handle_get(const httplib::Request& /*req*/, httplib::Response& res) {
    res.set_content("Hello, World! (GET)", "text/plain");
}

void handle_post(const httplib::Request& req, httplib::Response& res) {
    auto json_data = req.body;

    res.set_header("Access-Control-Allow-Origin", "*");
    res.set_header("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
    res.set_header("Access-Control-Allow-Headers", "Content-Type");

    // You can parse the JSON data if needed
    // For simplicity, let's print the received JSON data
    std::cout << "Received JSON data: " << json_data << std::endl;

    // You can further process the JSON data as needed

    // Send a response back to the client
    res.set_content("Received JSON data", "text/plain");
}

int main() {
    httplib::Server svr;

    svr.Get("/", handle_get);

    svr.Post("/echo", handle_post);

    // Handle preflight requests (OPTIONS)
svr.Options("/echo", [](const auto& /*req*/, auto& res) {
        res.set_header("Access-Control-Allow-Origin", "*");
        res.set_header("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
        res.set_header("Access-Control-Allow-Headers", "Content-Type");
        res.status = 200;
    });

    svr.listen("localhost", 8080);
    return 0;
}

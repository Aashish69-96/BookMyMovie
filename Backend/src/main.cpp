#include <iostream>
#include "../includes/httplib.h"
#include "../include/Login.hpp"
#include "../include/Signup.hpp"

int main() {
    httplib::Server svr;
    Login log;
    Signup sign;

    svr.Post("/login", [&](const auto& req, auto& res) {
        log.handle_login(req, res);
    });


    svr.Post("/signup", [&](const auto& req, auto& res) {
        sign.handle_signup(req, res);
    });

    svr.Options("/login", [](const auto& /*req*/, auto& res) {
        res.set_header("Access-Control-Allow-Origin", "*");
        res.set_header("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
        res.set_header("Access-Control-Allow-Headers", "Content-Type");
        res.status = 200;
    });

    svr.Options("/signup", [](const auto& /*req*/, auto& res) {
        res.set_header("Access-Control-Allow-Origin", "*");
        res.set_header("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
        res.set_header("Access-Control-Allow-Headers", "Content-Type");
        res.status = 200;
    });

    svr.listen("localhost", 8080);
    return 0;}

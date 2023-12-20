#pragma once
#include "../../includes/httplib.h"
#include "../../includes/json.hpp"
#include "../../database/Database.hpp"
#include "../baseRoute.h"

class SignupRoute : public BaseRoute
{
private:
    std::string username;
    std::string email;
    std::string password;

public:
    void handle_request(const httplib::Request &req, httplib::Response &res, int type) override;
    void setupRoute(httplib::Server &server) override;
};

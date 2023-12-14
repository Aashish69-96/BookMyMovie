#pragma once
#include "baseRoute.h"

class TestRoute : public BaseRoute
{
public:
    void handle_request(const httplib::Request &req, httplib::Response &res) const override;
    void setupRoute(httplib::Server &server) const override;
};

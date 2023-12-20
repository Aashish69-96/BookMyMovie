
#pragma once
#include "../baseRoute.h"

class MovieRoute : public BaseRoute
{
public:
    void handle_request(const httplib::Request &req, httplib::Response &res, int type) override;
    void setupRoute(httplib::Server &server) override;
};

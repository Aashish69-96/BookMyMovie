
#pragma once
#include "../includes/httplib.h"

class BaseRoute
{
public:
    virtual void setupRoute(httplib::Server &server);
    virtual void handle_request(const httplib::Request &req, httplib::Response &res, int type) = 0;

protected:
    void set_common_headers(httplib::Response &res);
};

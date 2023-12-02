#ifndef HTTP_SERVER_H
#define HTTP_SERVER_H
#include "../includes/httplib.h"
#include <thread>
class HTTPServer
{
private:
    httplib::Server server;

public:
    HTTPServer();
    void runServer();
};
#endif // HTTP_SERVER_H
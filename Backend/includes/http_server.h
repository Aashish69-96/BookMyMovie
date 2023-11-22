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
// app.cpp
#include "../includes/httplib.h"
#include "../Routes/baseRoute.h"
#include "../Routes/testRoute.h"
#include "../Routes/Route.Movie/movieRoute.h"

class App
{
private:
    httplib::Server server;
    // prevents memory leaks no need to take care the deleting the pointer
    std::vector<std::unique_ptr<BaseRoute>> routes;

public:
    App()
    { // prefered than new avoids explicit memory management
        routes.push_back(std::make_unique<TestRoute>());
        routes.push_back(std::make_unique<MovieRoute>());
    }

    void run()
    {
        for (const auto &route : routes)
        {
            // use of pointer defined virtual function
            route->setupRoute(server);
        }

        server.listen("localhost", 8080);
    }
};

int main()
{
    App app;
    app.run();
    return 0;
}

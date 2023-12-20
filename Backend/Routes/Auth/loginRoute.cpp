#include "loginRoute.hpp"
using json = nlohmann::json;

void LoginRoute::handle_request(const httplib::Request &req, httplib::Response &res, int type)
{
    if (type == 0)
    {
        auto json_data = req.body;
        std::cout << "Received JSON data: " << json_data << std::endl;

        try
        {
            auto parsed_data = json::parse(json_data);
            Database tempdb;

            if (parsed_data.contains("email") && parsed_data.contains("password"))
            {
                this->email = parsed_data["email"];
                this->password = parsed_data["password"];

                tempdb.openDb("../../database/MovieBook.db");
                std::string checkQuery = "SELECT * FROM User WHERE email = '" + this->email + "' AND password = '" + this->password + "';";
                bool checked = tempdb.createQuery(checkQuery);
                if (checked)
                {
                    res.status = 200;
                    res.set_content("Found data", "text/plain");
                }
                else
                {
                    res.status = 404;
                    res.set_content("Not found", "text/plain");
                }

                std::cout << "Username: " << this->email << ", Password: " << this->password << std::endl;
            }
            else
            {
                res.set_content("Invalid JSON data", "text/plain");
                return;
            }
        }
        catch (const std::exception &e)
        {
            std::cerr << "JSON parsing error: " << e.what() << std::endl;
            res.set_content("Error parsing JSON data", "text/plain");
            return;
        }

        res.set_content("Received JSON data", "text/plain");
    }
}

void LoginRoute::setupRoute(httplib::Server &server)
{

    server.Post("/api/login", [&](const httplib::Request &req, httplib::Response &res)
                {
                    set_common_headers(res);
                    handle_request(req, res, 0); });

    server.Options("/api/login", [&](const auto &, auto &res)
                   {
        set_common_headers(res);
        res.status = 200; });
}

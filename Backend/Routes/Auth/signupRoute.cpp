#include "signupRoute.hpp"
using json = nlohmann::json;

void SignupRoute::handle_request(const httplib::Request &req, httplib::Response &res, int type)
{
    if (type == 0)
    {
        auto json_data = req.body;
        std::cout << "Received JSON data: " << json_data << std::endl;
        try
        {
            auto parsed_data = json::parse(json_data);
            Database tempdb;

            if (parsed_data.contains("name") && parsed_data.contains("email") && parsed_data.contains("password"))
            {
                this->username = parsed_data["name"].get<std::string>();
                this->email = parsed_data["email"].get<std::string>();
                this->password = parsed_data["password"].get<std::string>();

                tempdb.openDb("MovieBook.db");
                std::string insertQuery = "INSERT INTO User(username, email, password) VALUES ('" + this->username + "', '" + this->email + "', '" + this->password + "');";
                tempdb.createQuery(insertQuery);
                std::cout << "Username: " << this->username << ", Password: " << this->password << ",email" << this->email << std::endl;
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

void SignupRoute::setupRoute(httplib::Server &server)
{

    server.Post("/api/signup", [&](const httplib::Request &req, httplib::Response &res)
                {
                    set_common_headers(res);
                    handle_request(req, res, 0); });

    server.Options("/api/signup", [&](const auto &, auto &res)
                   {
        set_common_headers(res);
        res.status = 200; });
}

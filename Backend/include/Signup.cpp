#include "Signup.hpp"


using json = nlohmann::json;


void Signup::handle_signup(const httplib::Request& req, httplib::Response& res) {
    auto json_data = req.body;
    res.set_header("Access-Control-Allow-Origin", "*");
    res.set_header("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
    res.set_header("Access-Control-Allow-Headers", "Content-Type");

    std::cout << "Received JSON data: " << json_data << std::endl;

    try {
        auto parsed_data = json::parse(json_data);
        Database tempdb;

        if (parsed_data.contains("name") && parsed_data.contains("email") && parsed_data.contains("password")) {
          this->username = parsed_data["name"]; 
          this->email = parsed_data["email"];
          this->password = parsed_data["password"];
          
          tempdb.openDb("../database/MovieBook.db");
          std::string insertQuery = "INSERT INTO User(username, email, password) VALUES ('" + this->username + "', '" + this->email + "', '" + this->password + "');";
          tempdb.createQuery(insertQuery);

          std::cout << "Username: " << this->username << ", Password: " <<this->password <<",email"<<this->email<< std::endl;
        } 
        else {
            res.set_content("Invalid JSON data", "text/plain");
            return;
        }
    }
    catch (const std::exception& e) {
        std::cerr << "JSON parsing error: " << e.what() << std::endl;
        res.set_content("Error parsing JSON data", "text/plain");
        return;
    }

    res.set_content("Received JSON data", "text/plain");
}

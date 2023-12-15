#pragma once
#include "../includes/httplib.h"
#include "../includes/json.hpp"
#include "../database/Database.hpp"

#include <string>
class Signup{
  private:
    std::string username;
    std::string email;
    std::string password;
  public:
      void handle_signup(const httplib::Request& req, httplib::Response& res);
};
 

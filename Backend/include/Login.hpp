#pragma once
#include "../includes/httplib.h"
#include "../includes/json.hpp"
#include "../database/Database.hpp"

#include <string>

class Login{
  private:
    std::string email;
    std::string password;
  public:
      void handle_login(const httplib::Request& req, httplib::Response& res);
};


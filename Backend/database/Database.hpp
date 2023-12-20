#pragma once
#include <sqlite3.h>
#include <string>
#include <iostream>

class Database
{
public:
    Database();
    ~Database();

    bool openDb(const std::string &db);
    bool createQuery(const std::string &query);
    void stopDb();

private:
    sqlite3 *DB;
    int exit;
};
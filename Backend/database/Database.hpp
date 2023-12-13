// database.h
#ifndef DATABASE_H
#define DATABASE_H

#include <iostream>
#include <sqlite3.h>

class Database {
private:
    sqlite3* DB;
    int exit = 0;

public:
    void createDb(std::string db);
    void stopDb();
    void createQuery(std::string query);
    void insertData();
};

#endif

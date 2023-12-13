// database.cpp
#include "Database.hpp"

void Database::createDb(std::string db) {
    exit = sqlite3_open(db.c_str(), &DB);

    if (exit) {
        std::cerr << "Error open DB " << sqlite3_errmsg(DB) << std::endl;
    }
    else
        std::cout << "Opened Database Successfully!" << std::endl;
}

void Database::stopDb() {
    sqlite3_close(DB);
}

void Database::createQuery(std::string query) {
    std::string sql = query;
    char* messaggeError;
    exit = sqlite3_exec(DB, sql.c_str(), NULL, 0, &messaggeError);

    if (exit != SQLITE_OK) {
        std::cerr << "Error Create Table" << std::endl;
        sqlite3_free(messaggeError);
    }
    else
        std::cout << "Table created Successfully" << std::endl;
}

void Database::insertData() {
    // Implement your insertData functionality here
}

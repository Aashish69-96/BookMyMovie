#include "Database.hpp"

Database::Database() : DB(nullptr), exit(0) {}

Database::~Database() {
    if (DB) {
        sqlite3_close(DB);
    }
}

bool Database::openDb(const std::string& db) {
    exit = sqlite3_open(db.c_str(), &DB);

    if (exit != SQLITE_OK) {
        std::cerr << "Error open DB " << sqlite3_errmsg(DB) << std::endl;
        return false;
    } else {
        std::cout << "Opened Database Successfully!" << std::endl;
        return true;
    }
}

bool Database::createQuery(const std::string& query) {
    std::string sql = query;
    char* messaggeError;
    exit = sqlite3_exec(DB, sql.c_str(), NULL, 0, &messaggeError);

    if (exit != SQLITE_OK) {
        std::cerr << "Error: " << messaggeError << std::endl;
        sqlite3_free(messaggeError);
        return false;
    } else {
        std::cout << "Query successful" << std::endl;
        return true;
    }
}

void Database::stopDb() {
    sqlite3_close(DB);
}
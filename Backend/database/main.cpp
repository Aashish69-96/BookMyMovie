#include "Database.hpp"

int main() {
    Database myDatabase;

    std::string createTableQuery = "CREATE TABLE IF NOT EXISTS Movies ("
                                   "ID INTEGER PRIMARY KEY AUTOINCREMENT,"
                                   "Title TEXT NOT NULL,"
                                   "ReleaseYear INTEGER);";
    myDatabase.createQuery(createTableQuery);

    myDatabase.stopDb();

    return 0;
}

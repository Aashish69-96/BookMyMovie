CXX = g++
CXXFLAGS = -std=c++14
SRC_DIR = src
DB_DIR = database
ROUTE_DIR = Routes

my_app: $(SRC_DIR)/App.cpp $(ROUTE_DIR)/baseRoute.cpp $(ROUTE_DIR)/testRoute.cpp $(ROUTE_DIR)/Route.Movie/movieRoute.cpp $(ROUTE_DIR)/Auth/loginRoute.cpp $(ROUTE_DIR)/Auth/signupRoute.cpp $(DB_DIR)/Database.cpp -lsqlite3

	$(CXX) $(CXXFLAGS) -o $@ $^

run: my_app
	./my_app

clean:
	rm -f my_app

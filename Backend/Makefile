CXX = g++
CXXFLAGS = -std=c++14
SRC_DIR = src
ROUTE_DIR = Routes

my_app: $(SRC_DIR)/App.cpp $(ROUTE_DIR)/baseRoute.cpp $(ROUTE_DIR)/testRoute.cpp $(ROUTE_DIR)/Route.Movie/movieRoute.cpp
	$(CXX) $(CXXFLAGS) -o $@ $^

run: my_app
	./my_app

clean:
	rm -f my_app

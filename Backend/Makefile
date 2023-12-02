my_program: src/main.cpp src/http_server.cpp
	g++ -o my_server src/main.cpp src/http_server.cpp src/routes/routes.movie.cpp src/utilities/movielist.utils.cpp 

run: my_program
	./my_server


clean:
	rm -f my_server

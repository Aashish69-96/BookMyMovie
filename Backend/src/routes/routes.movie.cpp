#include "../../includes/Movie.h"
#include "./routers.movie.h"
void handleRequest(const httplib::Request &req, httplib::Response &res)
{
    std::vector<Movie> movieVector;
    movieVector.push_back({"1", "Movie1", {"Action", "Drama"}, 2000, 120, "English", "Director1", {"Actor1", "Actor2"}, "path/to/image1.jpg"});
    // Convert vector of Movie objects to JSON array
    std::string jsonArray = "[";
    for (size_t i = 0; i < movieVector.size(); ++i)
    {
        jsonArray += movieVector[i].toJson();
        if (i < movieVector.size() - 1)
        {
            jsonArray += ",";
        }
    }
    jsonArray += "]";
    // Set response content type to JSON
    res.set_content(jsonArray, "application/json");
}

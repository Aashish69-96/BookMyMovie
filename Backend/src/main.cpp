#include "../includes/http_server.h"
#include <fstream>
#include <string>
int main()
{
    HTTPServer server;

//     // reads the contenet of the service account and covnerts into string
//     std::ifstream serviceAccountFile("../database/bmmfbsdk.json");
//     // first arg represents the begining of the character sequence to be read from the file
//     // second arg represents the end of stream iterator indicating end of character sequence from the file
//     std::string serviceAccountJson((std::istreambuf_iterator<char>(serviceAccountFile)),
//                                    std::istreambuf_iterator<char>());
//  std::string databaseURL = "https://bookmymovie-756b8-default-rtdb.firebaseio.com/bdfdsa";
//     httplib::Client client(databaseURL.c_str());
//     httplib::Headers headers = {};

//     auto response = client.Get("/", headers);
//     if (response && response->status == 200) {
//         std::cout << response->body << std::endl;
//     } else {
//         std::cout << "Error: " << (response ? response->status : -1) << std::endl;
//     }

    //Need to run the server concurrently
    server.runServer();
    return 0;
}
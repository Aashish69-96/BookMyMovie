#include <string>
#include <vector>
class Movie
{
private:
    std::string m_id;
    std::string m_name;
    std::vector<std::string> m_genre;
    int m_releaseyear;
    int m_duration;
    std::string m_language;
    std::string m_director;
    std::vector<std::string> m_cast;
    std::string m_imagedata;

public:
    Movie(const std::string& id, const std::string& n, const std::vector<std::string>&g,const int year, const int dur, const std::string& lang,const std::string& dir, const std::vector<std::string>& c, const std::string& fs);
    std::string toJson() const;
};
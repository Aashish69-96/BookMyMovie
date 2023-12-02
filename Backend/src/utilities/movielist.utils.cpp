#include "../../includes/Movie.h"
#include <sstream>
// constructor implementation

Movie::Movie(const std::string &id, const std::string &n, const std::vector<std::string> &g, const int year, const int dur, const std::string &lang, const std::string &dir, const std::vector<std::string> &c, const std::string &fs)
    : m_id(id), m_name(n), m_genre(g), m_releaseyear(year), m_duration(dur), m_language(lang), m_director(dir), m_cast(c), m_imagedata(fs){};

std::string Movie::toJson() const
{
    std::stringstream ss;
    ss << "{ \"id\": \"" << m_id << "\", \"name\": \"" << m_name << "\", \"genre\": [";

    for (size_t i = 0; i < m_genre.size(); ++i)
    {
        ss << "\"" << m_genre[i] << "\"";
        if (i < m_genre.size() - 1)
        {
            ss << ",";
        }
    }
    ss << "], \"releaseYear\": " << m_releaseyear
       << ", \"duration\": " << m_duration << ", \"language\": \"" << m_language
       << "\", \"director\": \"" << m_director << "\", \"cast\": [";

    for (size_t i = 0; i < m_cast.size(); ++i)
    {
        ss << "\"" << m_cast[i] << "\"";
        if (i < m_cast.size() - 1)
        {
            ss << ",";
        }
    }

    ss << "], \"imageData\": \"" << m_imagedata << "\" }";
    return ss.str();
}



const Movie = require("../Models/movies.model");

const addMovie = async (req, res) => {
  try {
    let { name, image, category, duration, language, trailer } = req.body;
    const newMovie = new Movie({
      name: name,
      image: image,
      category: category,
      duration: duration,
      language: language,
      trailer: trailer,
    });

    const exisitingMovie = await Movie.findOne({ name });
    if (exisitingMovie) {
      return res.status(400).json({ error: "Movie already Exists!" });
    }
    const savedMovie = await newMovie.save();
    return res.status(201).json({ msg: `added movie ${savedMovie.name}` });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

module.exports = { addMovie };

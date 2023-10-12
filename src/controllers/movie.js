import { Movie } from "../database/mysql/index.js";

/**
 * add a new movie to db
 * @param {*} req
 * @param {*} res
 */
export const addMovie = async (req, res) => {
  try {
    const movie = await Movie.create({
      name: req.body.name ? req.body.name : null,
    });
    res.status(200).json(movie);
  } catch (error) {
    const customError = error.errors.map((error) => error.message);
    res.status(400).send(customError);
  }
};

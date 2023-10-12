import { Showtime } from "../database/mysql/index.js";

/**
 * add a new theater to db
 * @param {*} req
 * @param {*} res
 */
export const addShowtime = async (req, res) => {
  try {
    const showtime = await Showtime.create({
      date: req.body.date ? req.body.date : null,
      time: req.body.time ? req.body.time : null,
      movieId: req.body.movieId ? req.body.movieId : null,
      theaterId: req.body.theaterId ? req.body.theaterId : null,
    });
    res.status(200).json(showtime);
  } catch (error) {
    const customError = error.errors.map((error) => error.message);
    res.status(400).send(customError);
  }
};

import { Theater } from "../database/mysql/index.js";
import { Showtime } from "../database/mysql/index.js";
import { Movie } from "../database/mysql/index.js";

/**
 * add a new theater to db
 * @param {*} req
 * @param {*} res
 */
export const addTheater = async (req, res) => {
  try {
    const theater = await Theater.create({
      name: req.body.name ? req.body.name : null,
      cityId: req.body.cityId ? req.body.cityId : null,
    });
    res.status(200).json(theater);
  } catch (error) {
    const customError = error.errors.map((error) => error.message);
    res.status(400).send(customError);
  }
};

/**
 * returns all the showtimes for particular date
 * @param {*} req
 * @param {*} res
 */
export const getShowtimes = async (req, res) => {
  const theaterId = req.params.theaterId;
  const date = req.query.date;

  Theater.findByPk(theaterId, {
    include: [
      {
        model: Showtime,
        where: { date: date },
        attributes: ["id", "time"],
        include: { model: Movie, attributes: ["id", "name"] },
      },
    ],
  })
    .then((theater) => {
      if (theater) {
        const data = {};
        data.theaterId = theater.id;
        data.theaterName = theater.name;
        data.date = date;

        const movies = [];
        theater.Showtimes.forEach((showtime) => {
          const movie = movies.find((obj) => obj.movieId == showtime.Movie.id);
          if (movie) {
            movie.showtimes.push(showtime.time);
          } else {
            movies.push({
              movieId: showtime.Movie.id,
              movieName: showtime.Movie.name,
              showtimes: [showtime.time],
            });
          }
        });
        data.movies = movies;
        res.status(200).json(data);
      } else {
        res.status(404).send("Theater not found");
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(400).send(error);
    });
};

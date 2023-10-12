import { City } from "../database/mysql/index.js";
import { Theater } from "../database/mysql/index.js";

/**
 * return all the cities to client
 * @param {*} req
 * @param {*} res
 */
export const getCities = async (req, res) => {
  const cities = await City.findAll({ attributes: ["id", "name"] });

  res.status(200).json(cities);
};

/**
 * add a new city to db
 * @param {*} req
 * @param {*} res
 */
export const addCity = async (req, res) => {
  try {
    const city = await City.create({
      name: req.body.name ? req.body.name : null,
    });
    res.status(200).json(city);
  } catch (error) {
    const customError = error.errors.map((error) => error.message);
    res.status(400).send(customError);
  }
};

/**
 * fetch all theaters of particular city
 * @param {*} req
 * @param {*} res
 */
export const getTheatersOfCity = async (req, res) => {
  const cityId = req.params.cityId;
  City.findByPk(cityId, {
    attributes: ["id", "name"],
    include: {
      model: Theater,
      as: "theaters",
      attributes: ["id", "name"],
    },
  })
    .then((city) => {
      if (city) {
        res.status(200).json(city);
      } else {
        res.status(404).send("City not found");
      }
    })
    .catch((error) => {
      res.status(400).send(error);
    });
};

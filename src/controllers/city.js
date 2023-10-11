import { City } from "../database/mysql/index.js";

/**
 * return all the cities to client
 * @param {*} req
 * @param {*} res
 */
export const getCities = async (req, res) => {
  const cities = await City.findAll({ attributes: ["cityId", "cityName"] });

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
      cityName: req.body.cityName ? req.body.cityName : null,
    });
    res.status(200).json(city);
  } catch (error) {
    const customError = error.errors.map((error) =>
      error.message.replace("city_name", "cityName")
    );
    res.status(400).send(customError);
  }
};

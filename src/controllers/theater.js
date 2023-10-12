import { Theater } from "../database/mysql/index.js";

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

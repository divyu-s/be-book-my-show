import express from "express";
import { getCities } from "../controllers/city.js";
import { addCity } from "../controllers/city.js";
import { getTheatersOfCity } from "../controllers/city.js";

const cityRoutes = express.Router();

cityRoutes.get("/cities", getCities);
cityRoutes.post("/cities", addCity);
cityRoutes.get("/cities/:cityId/theaters", getTheatersOfCity);

export default cityRoutes;

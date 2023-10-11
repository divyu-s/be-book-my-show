import express from "express";
import { getCities } from "../controllers/city.js";
import { addCity } from "../controllers/city.js";

const cityRoutes = express.Router();

cityRoutes.get("/cities", getCities);
cityRoutes.post("/cities", addCity);

export default cityRoutes;

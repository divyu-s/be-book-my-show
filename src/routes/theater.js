import express from "express";
import { addTheater } from "../controllers/theater.js";
import { getShowtimes } from "../controllers/theater.js";

const theaterRoutes = express.Router();

theaterRoutes.post("/theaters", addTheater);
theaterRoutes.get("/theaters/:theaterId/movies", getShowtimes);

export default theaterRoutes;

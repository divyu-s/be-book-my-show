import express from "express";
import { addTheater } from "../controllers/theater.js";

const theaterRoutes = express.Router();

theaterRoutes.post("/theaters", addTheater);

export default theaterRoutes;

import express from "express";
import { addShowtime } from "../controllers/showtime.js";

const showtimeRoutes = express.Router();

showtimeRoutes.post("/showtimes", addShowtime);

export default showtimeRoutes;

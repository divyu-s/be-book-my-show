import express from "express";
import { addMovie } from "../controllers/movie.js";

const movieRoutes = express.Router();

movieRoutes.post("/movies", addMovie);

export default movieRoutes;

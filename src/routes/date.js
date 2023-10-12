import express from "express";
import { getDates } from "../controllers/date.js";

const dateRoutes = express.Router();

dateRoutes.get("/dates", getDates);

export default dateRoutes;

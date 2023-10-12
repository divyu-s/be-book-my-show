import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";

// db connection
import { connectToDb } from "./database/mysql/index.js";

// routes
import cityRoutes from "./routes/city.js";
import theaterRoutes from "./routes/theater.js";
import dateRoutes from "./routes/date.js";
import movieRoutes from "./routes/movie.js";

const PORT = 3000 | process.env.PORT;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(cityRoutes);
app.use(theaterRoutes);
app.use(dateRoutes);
app.use(movieRoutes);

app.listen(process.env.PORT | PORT, (err) => {
  if (!err) {
    console.log(`Server is listing on ${PORT}`);
    connectToDb();
  } else {
    console.log("some error occured");
  }
});

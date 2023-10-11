import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";
import { connectToDb } from "./database/mysql/index.js";
import cityRoutes from "./routes/city.js";

const PORT = 3000 | process.env.PORT;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(cityRoutes);

app.listen(process.env.PORT | PORT, (err) => {
  if (!err) {
    console.log(`Server is listing on ${PORT}`);
    connectToDb();
  } else {
    console.log("some error occured");
  }
});

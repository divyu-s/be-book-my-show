import Sequelize from "sequelize";
import { DataTypes } from "sequelize";
import { mySql } from "../../config.js";

// import all model function
import city from "./model/City.js";
import theater from "./model/Theater.js";
import movie from "./model/Movie.js";
import showtime from "./model/Showtime.js";

// Syntax for setting up a new connection
// Sequalize (database_name, user_name, password, {dialect: database, host: host})
export const sequelize = new Sequelize(mySql.name, mySql.user, mySql.password, {
  dialect: "mysql",
  host: mySql.host,
  port: mySql.port,
});

// Check the connection to database - calling authenticate method
export const connectToDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export const City = city(sequelize, DataTypes);
export const Theater = theater(sequelize, DataTypes);
export const Movie = movie(sequelize, DataTypes);
export const Showtime = showtime(sequelize, DataTypes);

// Associations
City.hasMany(Theater, { as: "theaters" });
Theater.belongsTo(City);

Movie.hasMany(Showtime);
Showtime.belongsTo(Movie);

Theater.hasMany(Showtime);
Showtime.belongsTo(Theater);

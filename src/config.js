export const mySql = {
  name: process.env.DB_SQL_NAME || "",
  host: process.env.DB_SQL_HOST || "",
  port: process.env.DB_SQL_PORT || "",
  user: process.env.DB_SQL_USER_NAME || "",
  password: process.env.DB_SQL_USER_PASSWORD || "",
};

require("dotenv").config();

const configuration = {
  user: process.env.user,
  host: process.env.host || 'localhost',
  database: process.env.database || "db",
  password: process.env.password,
  port: process.env.port || 5432,
};

module.exports = { configuration };
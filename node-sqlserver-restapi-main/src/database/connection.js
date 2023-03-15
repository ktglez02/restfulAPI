import sql from "mysql2";
import config from "../config.js";

var connection = sql.createPool({
  host: config.dbServer,
  user: config.dbUser,
  password: config.dbPassword,
  database: config.dbDatabase,
});

export const getConnection = async () => {
  try {
    const pool = await connection.promise();
    return pool;
  } catch (error) {
    console.error(error);
  }
};

export { sql };

const postgresql = require("pg");
const { Pool } = postgresql;
require("dotenv").config();

const pool = new Pool({
  user: "postgres",
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  host: "127.0.0.1",
  port: 5432,
});

const query = async (...args) => {
  const client = await pool.connect();
  try {
    const result = await client.query(...args);
    return result.rows;
  } finally {
    client.release();
  }
};
const initializeDatabase = async () => {
  try {
    // Create "users" table if not exists
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone_number BIGINT,

      )
    `);

    console.log("Database initialized successfully");
  } catch (error) {
    console.error("Error initializing database", error);
  }
};

module.exports = {
  pool,
  query,
  initializeDatabase,
};

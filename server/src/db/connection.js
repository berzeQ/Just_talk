const postgresql = require("pg");
const { Pool } = postgresql;

const pool = new Pool({
  user: "postgres",
  database: "postgres",
  password: "postgres",
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

module.exports = {
  pool,
  query,
};

const { Client, Pool } = require("pg");
require("dotenv").config();
console.log(process.env.DB_PASS);

// const config = {
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   database: "idr_foundation_job_task",
// };

const poolConfig = {
  max: 5,
  min: 2,
  idleTimeoutMillis: 6000,
};

const pool = new Pool({
  min: 2,
  max: 5,
  idleTimeoutMillis: 6000,
  connectionString: `postgres://sayel111:Qm0sIPm2x0JzUC6HGc2y3OAWNZipVzHW@dpg-cnr8eoect0pc73cqp150-a.oregon-postgres.render.com/idr_foundation_job_task`,
});

// const client = new Client(config);

module.exports = { pool };

const express = require("express");
const { initializeDatabase } = require("./db/connection");
require("dotenv").config();
const { sendEmail } = require("./nodemailer/index");
const cors = require("cors");
const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"], // Replace with your actual client origin
    credentials: true,
  })
);

const port = process.env.PORT;
const userRoute = require("./routes/users");
// initializeDatabase();
// sendEmail();
app.use(express.json());

app.use(userRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

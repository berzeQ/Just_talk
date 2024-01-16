const express = require("express");
const connect = require("./db/connection");
require("dotenv").config();

const app = express();
const port = process.env.PORT;
const userRoute = require("./routes/users");
app.use(express.json());

app.use(userRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

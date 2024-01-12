const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const userRoute = require("./routes/users");
app.use(express.json());

app.use(userRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

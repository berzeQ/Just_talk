const express = require("express");
const app = express();
const userController = require("../controllers/users");
const router = express.Router();

router.post("/register", userController.registerNewUser);

module.exports = router;

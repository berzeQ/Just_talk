const express = require("express");
const app = express();
const userController = require("../controllers/users");
const router = express.Router();

router.post("/register", userController.registerNewUser);
router.get("/books", userController.getAllData);
router.post("/books", userController.inputData);

module.exports = router;

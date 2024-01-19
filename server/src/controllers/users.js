const connection = require("../db/connection");
const express = require("express");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const registerNewUser = (req, res) => {
  res.json({ msg: "user registerd successfully" });
};

const getAllData = async (req, res) => {
  console.log("hello");
  try {
    const rows = await connection.query(
      "SELECT * FROM books ORDER BY title ASC"
    );
    res.json(rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const inputData = async (req, res) => {
  console.log(req.body);
  const { title, author } = req.body;
  try {
    const result = await connection.query(
      "INSERT INTO books (title, author) VALUES ($1, $2) RETURNING *",
      [title, author]
    );
    res.json({ msg: " data has been added" });
  } catch (error) {
    console.error("Error executing query", error);
    if (error.detail) {
      res.json({ msg: error.detail });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
};
const userRegister = async (req, res) => {
  console.log(req.body);
  const { username, password, email, phone_number } = req.body;
  const hashPW = await bcrypt.hash(password, saltRounds);
  console.log(username, password, email, phone_number);
  try {
    const result = await connection.query(
      "INSERT INTO users (username, password, email, phone_number) VALUES ($1, $2, $3, $4) RETURNING *",
      [username, hashPW, email, phone_number]
    );
    if (result) {
      res.status(200).json({ msg: " data has been added" });
    }
  } catch (error) {
    console.error("Error executing query", error);
    if (error.detail) {
      res.json({ msg: error.detail });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
};

module.exports = { registerNewUser, getAllData, inputData, userRegister };

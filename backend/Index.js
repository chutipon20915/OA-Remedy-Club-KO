const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const bcrypt = require("bcrypt");
const saltRounds = 10;
const secret = "Fullstack-Login";
const jwt = require("jsonwebtoken");
const PORT = 5000;
// const dotenv = require("dotenv");
// dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const connect = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "oa_xammp",
  // process.env.DATABASE_URL
  // host: process.env.DATABASE_HOST,
  // user: process.env.DATABASE_USERNAME,
  // password: process.env.DATABASE_PASSWORD,
  // database: process.env.DATABASE_NAME,
});

app.post("/register", jsonParser, (req, res, next) => {
  bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    connect.execute(
      "INSERT INTO ko (Fname, Lname, Age, Gender, Phase, Team, NamePt, Email, Password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        req.body.Fname,
        req.body.Lname,
        req.body.Age,
        req.body.Gender,
        req.body.Phase,
        req.body.Team,
        req.body.NamePt,
        req.body.Email,
        hash,
      ],
      function (err, results, fields) {
        if (err) {
          res.json({ status: "error", message: err });
          return;
        }
        res.json({ status: "ok" });
      }
    );
  });
});

app.post("/login", jsonParser, (req, res, next) => {
  connect.execute(
    "SELECT * FROM ko WHERE Email=?",
    [req.body.Email],
    function (err, pt, fields) {
      if (err) {
        res.json({ status: "error", message: err });
        return;
      }
      if (pt.length == 0) {
        res.json({ status: "error", message: "no user found" });
        return;
      }
      bcrypt.compare(
        req.body.Password,
        pt[0].Password,
        function (err, isLogin) {
          if (isLogin) {
            var token = jwt.sign({ Email: pt[0].Email }, secret, {
              expiresIn: "1h",
            });
            res.json({ status: "ok", message: "login api success", token });
          } else {
            res.json({ status: "error", message: "login failed" });
          }
        }
      );
    }
  );
});

app.post("/authen", jsonParser, function (req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    var decoded = jwt.verify(token, secret);
    res.json({ status: "ok", decoded });
  } catch (error) {
    res.json({ status: "error", message: error.message });
  }
});

app.post("/health", (req, res, next) => {
  connect.execute(
    "INSERT INTO health (Fname, Lname, Phase, Question1, Question2, Question3, Question4, Question5, Question6) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      req.body.Fname,
      req.body.Lname,
      req.body.Phase,
      req.body.Question1,
      req.body.Question2,
      req.body.Question3,
      req.body.Question4,
      req.body.Question5,
      req.body.Question6,
    ],
    function (err, results, fields) {
      if (err) {
        res.status(400).json({ status: "error", message: err });
        return;
      }
      res.status(200).json({ status: "ok" });
    }
  );
});

app.listen(PORT, function () {
  console.log(`Listening Localhost port ${PORT}..`);
});

const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const bcrypt = require("bcrypt");
const saltRounds = 10;
const secret = "Fullstack-Login";
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());
app.use(express.json());

const connect = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "oa_xammp",
});

app.post("/register", jsonParser, (req, res, next) => {
  bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    connect.execute(
      "INSERT INTO ko (fname, lname, age, gender, phase, team, namept, email, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        req.body.fname,
        req.body.lname,
        req.body.age,
        req.body.gender,
        req.body.phase,
        req.body.team,
        req.body.namept,
        req.body.email,
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
    "SELECT * FROM ko WHERE email=?",
    [req.body.email],
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
        req.body.password,
        pt[0].password,
        function (err, isLogin) {
          if (isLogin) {
            var token = jwt.sign({ email: pt[0].email }, secret, {
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
    "INSERT INTO health (fname, lname, phase, question1, question2, question3, question4, question5) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    [
      req.body.fname,
      req.body.lname,
      req.body.phase,
      req.body.question1,
      req.body.question2,
      req.body.question3,
      req.body.question4,
      req.body.question5,
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

app.listen(5000, () => {
  console.log("Listening Localhost port 5000...");
});

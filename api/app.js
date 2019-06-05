const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const watsonRoutes = require("./watson/watsonRoutes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use("/message", watsonRoutes);

app.use("/", (req, res, next) => {
  res.status(200).json({
    message: "server running"
  });
});

const port = process.env.PORT || 3001;

app.listen(port);

const express = require("express");
const { getRepository } = require("typeorm");

require("reflect-metadata");
require("./src/database");

app = express();

app.use(express.json());

app.listen(3333, () => {
  console.log("doiderassa");
});

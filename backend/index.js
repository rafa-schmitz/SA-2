const routes = require('./routes')
const express = require("express");



require("reflect-metadata");
require("./src/database");

app = express();

app.use(express.json());

app.use(routes)

app.listen(3333, () => {
  console.log("doiderassa");
});

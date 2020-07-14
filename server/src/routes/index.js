const express = require("express");
const studentsRouter = require("./students.routes.js");
const routes = express.Router();

routes.use("/students", studentsRouter);

module.exports = routes;

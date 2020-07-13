const express = require("express");
const studentsRouter = express.Router();

studentsRouter.get("/", async (request, response) => {
  return response.json({ message: "GrupoA Challenge" });
});

module.exports = studentsRouter;

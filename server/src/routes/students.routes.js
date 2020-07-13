const express = require("express");
const studentsRouter = express.Router();
const createStudentService = require("../services/CreateStudentService");
const CustomError = require("../utils/CustomError");

studentsRouter.get("/", async (request, response) => {
  return response.json({ message: "GrupoA Challenge" });
});

studentsRouter.post("/", async (request, response) => {
  let missingFields = [];

  const { ra = "", email = "", name = "", cpf = "" } = request.body;

  if (!ra.trim()) missingFields.push("ra");

  if (!name.trim()) missingFields.push("name");

  if (!email.trim()) missingFields.push("email");

  if (!cpf.trim()) missingFields.push("cpf");

  if (missingFields.length)
    return response.status(422).json({
      status: 422,
      errorCode: "missing-fields",
      errorDetail: missingFields,
    });

  try {
    const studentRA = await createStudentService.execute(name, email, cpf, ra);
    return response.status(201).json({
      status: 201,
      studentRA,
      message: `Aluno com RA ${studentRA} criado com sucesso.`,
    });
  } catch (err) {
    if (err instanceof CustomError) {
      return response.status(400).json({
        status: 422,
        errorCode: "invalid-fields",
        message: err.message,
      });
    } else {
      console.log(err.message);
      return response.status(500).json({
        status: 500,
        message: "Something went wrong.",
      });
    }
  }
});

studentsRouter.put("/edit/:id", (request, response) => {});

module.exports = studentsRouter;

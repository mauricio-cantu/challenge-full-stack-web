const express = require("express");
const studentsRouter = express.Router();
const createStudentService = require("../services/CreateStudentService");
const editStudentService = require("../services/EditStudentService");
const deleteStudentService = require("../services/DeleteStudentService");
const { MissingFieldsError } = require("../utils/CustomErrors");
const knexConn = require("../database/connection");

studentsRouter.get("/", async (request, response) => {
  try {
    const { page = 1, rows = 5 } = request.query;
    const [count] = await knexConn("students").count();

    const students = await knexConn("students")
      .limit(rows)
      .offset((page - 1) * rows)
      .select("*");

    response.header("X-Total-Count", count.count);

    return response.json(students);
  } catch (err) {
    next(err);
  }
});

studentsRouter.post("/", async (request, response, next) => {
  try {
    let missingFields = [];

    const { ra = "", email = "", name = "", cpf = "" } = request.body;

    if (!ra.trim()) missingFields.push("ra");

    if (!name.trim()) missingFields.push("name");

    if (!email.trim()) missingFields.push("email");

    if (!cpf.trim()) missingFields.push("cpf");

    if (missingFields.length) throw new MissingFieldsError(missingFields);

    const studentRA = await createStudentService.execute(name, email, cpf, ra);

    return response.status(201).json({
      status: 201,
      studentRA,
      message: `Aluno com RA ${studentRA} criado com sucesso.`,
    });
  } catch (err) {
    next(err);
  }
});

studentsRouter.put("/:ra", async (request, response, next) => {
  try {
    const { ra } = request.params;
    const { name = "", email = "" } = request.body;

    let missingFields = [];

    if (!name.trim()) missingFields.push("name");

    if (!email.trim()) missingFields.push("email");

    if (missingFields.length) throw new MissingFieldsError(missingFields);

    const studentRA = await editStudentService.execute(ra, name, email);

    return response.json({
      status: 200,
      studentRA,
      message: `Aluno com RA ${studentRA} alterado com sucesso.`,
    });
  } catch (err) {
    next(err);
  }
});

studentsRouter.delete("/:ra", async (request, response, next) => {
  try {
    const { ra: studentRA } = request.params;
    await deleteStudentService.execute(studentRA);
    return response.status(200).json({
      status: 200,
      studentRA,
      message: `RA ${studentRA} deletado com sucesso.`,
    });
  } catch (err) {
    next(err);
  }
});

module.exports = studentsRouter;

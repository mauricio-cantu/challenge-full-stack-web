const studentRepository = require("../repositories/StudentRepository");
const CustomError = require("../utils/CustomError");
const validateEmail = require("../utils/validateEmail");

const CreateStudentService = {
  async execute(name, email, cpf, ra) {
    let invalidFields = [];

    if (await studentRepository.verifyExistingRA(ra))
      invalidFields.push("RA já vinculado a outro aluno.");

    if (!validateEmail(email)) invalidFields.push("Email inválido.");

    if (invalidFields.length) {
      error = new CustomError();
      error.message = invalidFields;
      throw error;
    }

    const studentRA = await studentRepository.create(name, email, cpf, ra);

    return studentRA;
  },
};

module.exports = CreateStudentService;

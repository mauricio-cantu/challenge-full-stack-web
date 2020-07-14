const studentRepository = require("../repositories/StudentRepository");
const validateEmail = require("../utils/validateEmail");
const { InvalidFieldsError } = require("../utils/CustomErrors");

const CreateStudentService = {
  execute: async (name, email, cpf, ra) => {
    let invalidFields = [];

    if (await studentRepository.verifyExistingRA(ra))
      invalidFields.push("RA já vinculado a outro aluno.");

    if (ra.trim().length != 6) invalidFields.push("RA deve possuir 6 dígitos.");

    if (!validateEmail(email)) invalidFields.push("Email inválido.");

    if (invalidFields.length) {
      throw new InvalidFieldsError(invalidFields);
    }

    const studentRA = await studentRepository.create(name, email, cpf, ra);

    return studentRA;
  },
};

module.exports = CreateStudentService;

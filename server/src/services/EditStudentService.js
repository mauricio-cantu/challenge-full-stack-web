const studentRepository = require("../repositories/StudentRepository");
const { NotFoundError, InvalidFieldsError } = require("../utils/CustomErrors");
const validateEmail = require("../utils/validateEmail");

const EditStudentService = {
  async execute(ra, name, email) {
    let invalidFields = [];

    if (!(await studentRepository.verifyExistingRA(ra)))
      throw new NotFoundError("RA não encontrado.");

    if (!validateEmail(email)) invalidFields.push("Email inválido.");

    if (invalidFields.length) {
      throw new InvalidFieldsError(invalidFields);
    }

    const studentRA = await studentRepository.update(ra, name, email);

    return studentRA;
  },
};

module.exports = EditStudentService;

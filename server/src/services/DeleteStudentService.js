const studentRepository = require("../repositories/StudentRepository");
const { NotFoundError } = require("../utils/CustomErrors");

const DeleteStudentService = {
  execute: async (ra) => {
    if (!(await studentRepository.verifyExistingRA(ra)))
      throw new NotFoundError("RA não encontrado.");

    await studentRepository.delete(ra);
  },
};

module.exports = DeleteStudentService;

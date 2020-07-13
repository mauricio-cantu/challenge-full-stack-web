const knexConn = require("../database/connection");

const StudentRepository = {
  async create(name, email, cpf, ra) {
    const [studentRA] = await knexConn("students")
      .insert({
        name,
        email,
        cpf,
        ra,
      })
      .returning("ra");

    return studentRA;
  },

  async verifyExistingRA(ra) {
    const [countQuery] = await knexConn("students")
      .where("ra", ra)
      .count("* as total");

    return countQuery.total > 0;
  },
};

module.exports = StudentRepository;

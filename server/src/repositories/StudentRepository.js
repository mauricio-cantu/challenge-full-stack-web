const knexConn = require("../database/connection");

const StudentRepository = {
  create: async (name, email, cpf, ra) => {
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

  update: async (ra, name, email) => {
    await knexConn("students").where({ ra }).update({ name, email });
    return ra;
  },

  delete: async (ra) => {
    await knexConn("students").where({ ra }).delete();
  },

  verifyExistingRA: async (ra) => {
    const [countQuery] = await knexConn("students")
      .where("ra", ra)
      .count("* as total");

    return countQuery.total > 0;
  },
};

module.exports = StudentRepository;

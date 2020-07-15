<template>
  <section class="form">
    <v-form v-on:submit.prevent="updateStudent">
      <v-text-field v-model="student.name" label="Nome" required></v-text-field>
      <v-text-field
        v-model="student.email"
        label="E-mail"
        required
      ></v-text-field>
      <v-text-field
        v-model="student.ra"
        value=""
        disabled
        label="RA"
        required
      ></v-text-field>
      <v-text-field
        v-model="student.cpf"
        disabled
        label="CPF"
        required
      ></v-text-field>
      <v-btn color="success" type="submit">Concluir</v-btn>
      <v-btn class="btn-cancel" color="error" to="/">Cancelar</v-btn>
    </v-form>
  </section>
</template>
<script>
import api from "../services/api";

export default {
  data() {
    return {
      student: {},
    };
  },
  created: function() {
    this.getStudent();
  },

  methods: {
    updateStudent() {
      api
        .put(`students/${this.student.ra}`, this.student)
        .then((response) => {
          this.$swal({ text: "Aluno alterado com sucesso." });
          this.$router.push({ name: "Index" });
        })
        .catch((error) => {
          this.$swal({
            text: "Algo de errado aconteceu. Tente novamente.",
            icon: "error",
          });
        });
    },

    getStudent() {
      api.get(`students/${this.$route.params.ra}`).then((response) => {
        this.student = response.data;
      });
    },
  },
};
</script>

<style>
.form {
  width: 60%;
  box-shadow: 1px 2px 20px 0px #505050a3;
  padding: 20px;
}

.form .btn-cancel {
  float: right;
}

.form .v-input {
  margin-bottom: 20px;
}
</style>

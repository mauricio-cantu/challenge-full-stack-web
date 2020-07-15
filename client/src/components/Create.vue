<template>
  <section class="form">
    <v-form
      v-on:submit.prevent="createStudent"
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-text-field v-model="name" label="Nome" required></v-text-field>
      <v-text-field v-model="email" label="E-mail" required></v-text-field>
      <v-text-field v-model="ra" label="RA" required></v-text-field>
      <v-text-field v-model="cpf" label="CPF" required></v-text-field>
      <v-btn color="success" type="submit">Concluir</v-btn>
      <v-btn class="btn-cancel" color="error" to="/">Cancelar</v-btn>
    </v-form>
  </section>
</template>
<script>
export default {
  data() {
    return {
      student: {},
    };
  },
  methods: {
    createStudent() {
      let uri = "localhost:3333/students";
      try {
        this.axios.post(uri, this.student).then((response) => {
          alert("Aluno cadastrado com sucesso.");
          this.$router.push({ name: "index" });
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
.form {
  width: 60%;
}

.form .btn-cancel {
  float: right;
}

.form .v-input {
  margin-bottom: 20px;
}
</style>

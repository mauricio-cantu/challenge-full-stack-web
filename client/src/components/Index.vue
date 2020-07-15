<template>
  <div class="table-container">
    <div class="no-students-alert" v-if="!students.length">
      Nenhum aluno cadastrado.
    </div>
    <v-simple-table v-if="students.length" class="students-table">
      <thead>
        <tr>
          <td>Registro Acadêmico</td>
          <td>Nome</td>
          <td>CPF</td>
          <td>Ações</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" :key="student.ra">
          <td>{{ student.ra }}</td>
          <td>{{ student.name }}</td>
          <td>{{ student.cpf }}</td>
          <td class="action-buttons">
            <v-btn
              :to="{ name: 'Edit', params: { ra: student.ra } }"
              small
              title="Editar"
              color="primary"
            >
              <v-icon small>mdi-pen</v-icon>
            </v-btn>
            <v-btn
              @click="deleteStudent(student.ra)"
              small
              title="Excluir"
              color="error"
              class="btn-delete"
            >
              <v-icon small>mdi-delete</v-icon>
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>
<script>
import api from "../services/api";
export default {
  data() {
    return {
      students: [],
    };
  },

  created: function() {
    this.getStudents();
  },

  methods: {
    getStudents() {
      api.get("students").then((response) => {
        this.students = response.data;
      });
    },

    deleteStudent(ra) {
      try {
        api.delete(`students/${ra}`).then((response) => {
          this.getStudents();
          alert("Aluno deletado com sucesso.");
        });
      } catch (err) {
        alert("Algo de errado aconteceu.");
      }
    },
  },
};
</script>
<style>
.students-table {
  box-shadow: 1px 2px 20px 0px #505050a3;
  padding: 20px;
  margin-top: 20px;
}
.students-table thead {
  font-weight: bold;
}
.students-table .btn-delete {
  margin-left: 10px;
}
.table-container {
  width: 70%;
}
.no-students-alert {
  text-align: center;
  font-size: 30px;
  margin-top: 20px;
}
</style>

<template>
  <v-app>
    <v-app-bar app dark>
      <div class="d-flex align-center">
        <v-btn to="/" title="Início" class="mx-2" color="primary">
          <v-icon dark>mdi-home</v-icon> Início
        </v-btn>
        <v-btn to="/create" title="Cadastrar" class="mx-2" color="primary">
          <v-icon dark>mdi-plus</v-icon> Cadastrar
        </v-btn>
      </div>
    </v-app-bar>
    <v-main>
      <v-container fluid> <router-view></router-view></v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
}

.swal2-container {
  font-family: "Roboto", sans-serif;
}

.swal2-header {
  margin-right: 10px;
}
</style>

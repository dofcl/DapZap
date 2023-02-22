<template>
  <div id="app">
    <v-app>
      <v-main class="ma-6">
        <router-view/>
      </v-main>
    </v-app>
  </div>
</template>


<script>
export default {
  name: 'App',
  components: {}
}
</script>
<style>
.text-center {
  text-align: center;
}

.pa-2 {
  padding: 2px;
}

.pa-4 {
  padding: 4px;
}


.ma-2 {
  margin: 2px;
}

.ma-4 {
  margin: 4px;
}

.pt-8 {
  padding-top: 8px;
}

.dapzap-login-btn {
  float: right;
  margin: 10px;
}
</style>
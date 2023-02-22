<template>
  <div id="app">
    <router-view :key='$route.params'/>
  </div>
</template>


<script>
// Remove the Hello World import here
export default {
  name: 'App',
  components: {
    // And remove the Hello World component here
  }
}
</script>
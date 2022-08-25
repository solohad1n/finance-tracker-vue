<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from "@/components/Navbar/Navbar.vue";
export default { components: { Navbar } };
</script>

<style lang="scss">
@import "./assets/css/index.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

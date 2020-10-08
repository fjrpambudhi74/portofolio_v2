<template>
  <div id="app">
    <Navbar />
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: {
    Navbar,
  },
  watch: {
    $route: {
      handler: (to, from) => {
        document.title = to.meta.title;
      },
      immediate: true,
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  width: 100%;
  /* height: 500vh; */
  background: #05081f;
  color: #8892b0;
  font-family: "Roboto", sans-serif;
}
</style>

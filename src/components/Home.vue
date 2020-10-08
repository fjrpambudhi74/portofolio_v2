<template>
  <div>
    <Preloader />
    <div>
      <Landing />
      <About />
      <Portofolio />
      <Projects />
      <Contact />
      <Footer />
      <socialLink />
    </div>
  </div>
</template>

<script>
import Preloader from "./Preloader";
import Landing from "./Landing";
import About from "./About";
import Portofolio from "./Portofolio";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import socialLink from "./socialLink";

export default {
  components: {
    Preloader,
    Landing,
    About,
    Portofolio,
    Projects,
    Contact,
    Footer,
    socialLink,
  },
};
</script>

<style scoped>
@import "../assets/css/styles.css";
</style>


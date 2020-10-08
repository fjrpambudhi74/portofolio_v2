<template>
  <div>
    <a :href="link" class="link">
      <p class="footer">Built by Fajar Pambudhi | Made With Vuejs</p>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      link: "http://www.github.com/fjrpambudhi74",
    };
  },
};
</script>

<style>
@import "../assets/css/styles.css";
</style>
<template>
  <div class="container contact" id="contact">
    <div class="row">
      <div data-aos="fade-in" data-aos-duration="2000" class="col-md-12">
        <h2 class="title-contact">Get In Touch</h2>
        <p class="desc-contact">
          I'm currently looking for any new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I'll try my
          best to get back to you!
        </p>
        <a :href="'mailto:' + email" class="mail">
          <div class="glow-contact">Get In Touch</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "fjrpambudhi@hotmail.com",
    };
  },
};
</script>

<style>
@import "../assets/css/styles.css";
</style>
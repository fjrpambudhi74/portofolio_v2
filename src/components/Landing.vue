<template>
  <div class="container" id="landing">
    <div class="row">
      <div class="col-md-12 intro">
        <transition
          appear
          mode="in-out"
          enter-active-class="animated fadeInDown"
        >
          <p
            class="hello pl-1"
            style="animation-delay: 3s; animation-duration: 800ms"
          >
            Hi, my name is
          </p>
        </transition>
        <transition
          appear
          mode="in-out"
          enter-active-class="animated fadeInDown"
        >
          <h1 style="animation-delay: 3.1s; animation-duration: 800ms">
            Fajar Pambudhi.
          </h1>
        </transition>
        <transition
          appear
          mode="in-out"
          enter-active-class="animated fadeInDown"
        >
          <h2 style="animation-delay: 3.2s; animation-duration: 800ms">
            I Built Things For The Web.
          </h2>
        </transition>

        <transition
          appear
          mode="in-out"
          enter-active-class="animated fadeInDown"
        >
          <p
            class="desc-intro mt-4"
            style="animation-delay: 3.3s; animation-duration: 800ms"
          >
            I'm a Web Developer based in Serpong, Tangerang Selatan specializing
            in building exceptional websites, applications, and everything in
            between.
          </p>
        </transition>

        <transition
          appear
          mode="in-out"
          enter-active-class="animated fadeInDown"
        >
          <div
            class="glow"
            style="animation-delay: 3.4s; animation-duration: 800ms"
          >
            <a :href="'mailto:' + email">Get In Touch</a>
          </div>
        </transition>
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

<style scoped>
@import "../assets/css/styles.css";
</style>
<template>
  <div v-if="show" class="preloader">
    <div class="loader">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Preloader",
  data() {
    return {
      show: true,
    };
  },
  mounted() {
    if (Boolean(this.show)) this.showToggle();
  },
  methods: {
    showToggle() {
      setTimeout(() => {
        this.show = false;
      }, 2500);
    },
  },
};
</script>

<style scoped>
.preloader {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #05081f;
  z-index: 999;
}
/* body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #000;
} */

.loader {
  position: relative;
  width: 200px;
  height: 200px;
  overflow: hidden;
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
}

.loader span {
  position: absolute;
  display: block;
}

.loader span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 40px;
  background: linear-gradient(90deg, transparent, #03e9f4);
  animation: animate1 1s linear infinite;
  animation-delay: 0s;
}

@keyframes animate1 {
  0% {
    left: -100%;
  }

  100% {
    left: 100%;
  }
}

.loader span:nth-child(3) {
  bottom: 0;
  left: -100%;
  width: 100%;
  height: 40px;
  background: linear-gradient(270deg, transparent, #03e9f4);
  animation: animate3 1s linear infinite;
  animation-delay: 0s;
}

@keyframes animate3 {
  0% {
    left: 100%;
  }

  100% {
    left: -100%;
  }
}

.loader span:nth-child(2) {
  right: 0;
  top: -100%;
  width: 40px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #03e9f4);
  animation: animate2 1s linear infinite;
  animation-delay: 0.5s;
}

@keyframes animate2 {
  0% {
    top: -100%;
  }

  100% {
    top: 100%;
  }
}

.loader span:nth-child(4) {
  left: 0;
  top: 100%;
  width: 40px;
  height: 100%;
  background: linear-gradient(0deg, transparent, #03e9f4);
  animation: animate4 1s linear infinite;
  animation-delay: 0.5s;
}

@keyframes animate4 {
  0% {
    top: 100%;
  }

  100% {
    top: -100%;
  }
}
</style>


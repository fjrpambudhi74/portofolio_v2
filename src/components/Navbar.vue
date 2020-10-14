<template>
  <div>
    <div class="navbar" :class="{ 'hidden-navbar': !showNavbar }">
      <button
        class="navbar-toggler show-mobile"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggleExternalContent"
        aria-controls="navbarToggleExternalContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span>
          <font-awesome-icon :icon="['fas', 'bars']" class="social-link" />
        </span>
      </button>
      <a href="#landing" class="">
        <transition appear mode="in-out" enter-active-class="animated rollIn">
          <img
            style="animation-delay: 3.5s; animation-duration: 800ms"
            src="@/assets/logo_5.svg"
          />
        </transition>
      </a>
      <ul class="nav-link hide-mobile">
        <transition
          appear
          mode="in-out"
          enter-active-class="animated fadeInLeft"
        >
          <li
            style="animation-delay: 3.6s; animation-duration: 800ms"
            class="nav-item"
          >
            <a href="#about">About</a>
          </li>
        </transition>
        <transition
          appear
          mode="in-out"
          enter-active-class="animated fadeInLeft"
        >
          <li
            style="animation-delay: 3.7s; animation-duration: 800ms"
            class="nav-item"
          >
            <a href="#portofolio">Portofolio</a>
          </li>
        </transition>
        <transition
          appear
          mode="in-out"
          enter-active-class="animated fadeInLeft"
        >
          <li
            style="animation-delay: 3.8s; animation-duration: 800ms"
            class="nav-item"
          >
            <a href="#contact">Contact</a>
          </li>
        </transition>
        <transition
          appear
          mode="in-out"
          enter-active-class="animated fadeInLeft"
        >
          <li
            style="animation-delay: 3.9s; animation-duration: 800ms"
            class="button"
          >
            <a
              href="https://docs.google.com/viewer?srcid=1QxE-6_yKKtY1nR_oCa8viGIoOWT27xGM&pid=explorer&efh=false&a=v&chrome=false&embedded=true"
              target="_blank"
              >Resume</a
            >
          </li>
        </transition>
      </ul>
    </div>
    <div class="collapse" id="navbarToggleExternalContent">
      <div class="bg-mobile p-4">
        <ul class="nav-mb">
          <li class="nav-item-mb">
            <a href="#about">About</a>
          </li>
          <li class="nav-item-mb">
            <a href="#about">Portofolio</a>
          </li>
          <li class="nav-item-mb">
            <a href="#about">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
      scrollValue: 0,
    };
  },
  mounted() {
    this.lastScrollPosition = window.pageYOffset;
    window.addEventListener("scroll", this.onScroll);
    const viewportMeta = document.createElement("meta");
    viewportMeta.name = "viewport";
    viewportMeta.content = "width=device-width, initial-scale=1";
    document.head.appendChild(viewportMeta);
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      const OFFSET = 60;
      if (window.pageYOffset < 0) {
        return;
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
        return;
      }
      this.showNavbar = window.pageYOffset < this.lastScrollPosition;
      this.lastScrollPosition = window.pageYOffset;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500&display=swap");
@import "../assets/css/styles.css";
</style>
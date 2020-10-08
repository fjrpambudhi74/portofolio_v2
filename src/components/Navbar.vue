<template>
  <div>
    <div class="navbar" :class="{ 'hidden-navbar': !showNavbar }">
      <a href="#landing" class="">
        <transition appear mode="in-out" enter-active-class="animated rollIn">
          <img
            style="animation-delay: 3.5s; animation-duration: 800ms"
            src="@/assets/logo_5.svg"
          />
        </transition>
      </a>
      <ul class="nav-link">
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
            <a href="../static/RESUME.pdf" target="_blank">Resume</a>
          </li>
        </transition>
      </ul>
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

.button {
  position: relative;
  width: 100px;
  text-align: center;
  padding: 10px 20px;
  margin-left: 10px;
  font-size: 16px;
  font-weight: 300;
  font-family: "Fira Code", monospace;
  border: 1px solid#03e9f4;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.5s;
  text-decoration: none;
}
.button a {
  text-decoration: none;
  color: #03e9f4;
}

.button:hover {
  background: rgba(3, 232, 244, 0.2);
}

.navbar {
  height: 90px;
  width: 100vw;
  /* background: #05081f; */
  background: rgba(5, 8, 31, 0.95);
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-left: 50px;
  padding-right: 50px;
  transition: 0.1s all ease-out;
  z-index: 9999;
  /* box-shadow: 0 10px 30px -10px #070916; */
}

.nav-link {
  list-style: none;
  display: flex;
}

.nav-item a {
  display: inline-block;
  padding: 10px 15px;
  text-decoration: none;
  color: white;
  font-family: "Fira Code", monospace;
  font-size: 15px;
  font-weight: 300;
}

.nav-item::after {
  content: "";
  display: block;
  width: 0;
  height: 2px;
  background: #64ffda;
  transition: width 0.3s;
}

.nav-item:hover::after {
  width: 100%;
  transition: width 0.3s;
  color: #64ffda;
}

a:hover {
  color: #64ffda;
}

.logo img {
  width: 175px;
  vertical-align: middle;
}

.logo {
  display: inline-block;
}

.navbar.hidden-navbar {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
  transition: 0.3s;
}
</style>
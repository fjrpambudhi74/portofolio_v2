<template>
  <div>
    <div class="left-social-link hide-mobile">
      <transition appear mode="in-out" enter-active-class="animated slideInUp">
        <div
          class="vl-sl"
          style="animation-delay: 3.5s; animation-duration: 800ms"
        ></div>
      </transition>
      <ul class="social-l">
        <transition appear mode="in-out" enter-active-class="animated rollIn">
          <li style="animation-delay: 3.5s; animation-duration: 800ms">
            <span>
              <a :href="linkTo.github">
                <font-awesome-icon
                  :icon="['fab', 'github']"
                  class="social-link"
                />
              </a>
            </span>
          </li>
        </transition>
        <transition appear mode="in-out" enter-active-class="animated rollIn">
          <li style="animation-delay: 3.5s; animation-duration: 800ms">
            <span>
              <a :href="linkTo.linkedin">
                <font-awesome-icon
                  :icon="['fab', 'linkedin-in']"
                  class="social-link"
                />
              </a>
            </span>
          </li>
        </transition>
      </ul>
    </div>

    <div class="right-social-link hide-mobile">
      <transition appear mode="in-out" enter-active-class="animated slideInUp">
        <div
          class="vl-sr"
          style="animation-delay: 3.5s; animation-duration: 800ms"
        ></div>
      </transition>
      <transition appear mode="in-out" enter-active-class="animated fadeIn">
        <a
          :href="'mailto:' + linkTo.email"
          class="v-text rotate"
          style="animation-delay: 4s; animation-duration: 800ms"
        >
          fjrpambudhi@hotmail.com
        </a>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      linkTo: {
        github: "http://www.github.com/fjrpambudhi74",
        linkedin: "https://fjrpambudhi74.github.io/myportofolio/",
        email: "fjrpambudhi@hotmail.com",
      },
    };
  },
};
</script>

<style>
@import "../assets/css/styles.css";
</style>
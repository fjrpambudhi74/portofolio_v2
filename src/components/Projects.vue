<template>
  <div class="container project-section">
    <div class="row">
      <div class="col-md-12 text-center">
        <div data-aos="fade-left" class="vl1-project"></div>
        <div data-aos="fade-right" class="vl2-project"></div>
        <h3 data-aos="zoom-in" data-aos-duration="500" class="project-title">
          Other Projects
        </h3>
        <p data-aos="zoom-in" data-aos-duration="500" class="subtitle-project">
          View Archive
        </p>
      </div>
    </div>
    <div
      data-aos="fade-in"
      data-aos-duration="2000"
      class="row justify-content-center"
    >
      <div class="d-flex">
        <div class="item-project">
          <font-awesome-icon :icon="['far', 'folder']" class="project-icon" />
          <h5 class="title-project">21Cleanshoes</h5>
          <p class="desc-project">
            This is my job training project company profile. And this case i'm
            using framework Codeigniter for the Backend.
          </p>
          <ul class="stack-project">
            <li>PHP</li>
            <li>Codeigniter</li>
            <li>AdminLTE</li>
            <li>MySQL</li>
          </ul>
          <ul class="icon-project">
            <li>
              <a :href="linkTo.repoKP">
                <font-awesome-icon :icon="['fab', 'github']" class="icon-pro" />
              </a>
            </li>
            <li>
              <a :href="demo.nope">
                <font-awesome-icon
                  :icon="['fas', 'external-link-alt']"
                  class="icon-pro"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="d-flex">
        <div class="item-project">
          <font-awesome-icon :icon="['far', 'folder']" class="project-icon" />
          <h5 class="title-project">Weddingku</h5>
          <p class="desc-project">
            This is my project wedding website for coursework. And this project
            using framework Codeigniter and Database.
          </p>
          <ul class="stack-project">
            <li>PHP</li>
            <li>Codeigniter</li>
            <li>AdminLTE</li>
            <li>MySQL</li>
          </ul>
          <ul class="icon-project">
            <li>
              <a :href="linkTo.repoWeddingku">
                <font-awesome-icon :icon="['fab', 'github']" class="icon-pro" />
              </a>
            </li>
            <li>
              <a :href="demo.nope">
                <font-awesome-icon
                  :icon="['fas', 'external-link-alt']"
                  class="icon-pro"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div
      data-aos="fade-in"
      data-aos-duration="2000"
      class="row justify-content-center"
    >
      <div class="d-flex">
        <div class="item-project">
          <font-awesome-icon :icon="['far', 'folder']" class="project-icon" />
          <h5 class="title-project">Monster Slayer</h5>
          <p class="desc-project">
            This is simple logic game. Doing something fun by making simple game
            with Vue JS.
          </p>
          <ul class="stack-project">
            <li>Vue JS</li>
            <li>CSS</li>
            <li>Bootstrap</li>
          </ul>
          <ul class="icon-project">
            <li>
              <a :href="linkTo.repoGame">
                <font-awesome-icon :icon="['fab', 'github']" class="icon-pro" />
              </a>
            </li>
            <li>
              <a :href="demo.gameApp">
                <font-awesome-icon
                  :icon="['fas', 'external-link-alt']"
                  class="icon-pro"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="d-flex">
        <div class="item-project">
          <font-awesome-icon :icon="['far', 'folder']" class="project-icon" />
          <h5 class="title-project">Portofolio V1</h5>
          <p class="desc-project">
            My first portofolio website. Since then, I think my web development
            and design skills have improved immensely.
          </p>
          <ul class="stack-project">
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Vue JS</li>
          </ul>
          <ul class="icon-project">
            <li>
              <a :href="linkTo.repoV1">
                <font-awesome-icon :icon="['fab', 'github']" class="icon-pro" />
              </a>
            </li>
            <li>
              <a :href="demo.v1App">
                <font-awesome-icon
                  :icon="['fas', 'external-link-alt']"
                  class="icon-pro"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div
      data-aos="fade-in"
      data-aos-duration="2000"
      class="row justify-content-center"
    >
      <div class="d-flex">
        <div class="item-project">
          <font-awesome-icon :icon="['far', 'folder']" class="project-icon" />
          <h5 class="title-project">Vuetify Calendar</h5>
          <p class="desc-project">
            The Vuetify calendar demo utilizes general Vue.js + Firebase
            functions to enable creating, updating, and deleting
          </p>
          <ul class="stack-project">
            <li>Vue JS</li>
            <li>Vuetify</li>
            <li>Firestore</li>
          </ul>
          <ul class="icon-project">
            <li>
              <a :href="linkTo.repoCalendar">
                <font-awesome-icon :icon="['fab', 'github']" class="icon-pro" />
              </a>
            </li>
            <li>
              <a :href="demo.calApp">
                <font-awesome-icon
                  :icon="['fas', 'external-link-alt']"
                  class="icon-pro"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="d-flex">
        <div class="item-project">
          <font-awesome-icon :icon="['far', 'folder']" class="project-icon" />
          <h5 class="title-project">My Skillset App</h5>
          <p class="desc-project">
            This is My Skill Set app for my first Vue js app and in addition
            using Vuex and Vue Router. This case like the Todo List App.
          </p>
          <ul class="stack-project">
            <li>Vue JS</li>
            <li>Vercel</li>
          </ul>
          <ul class="icon-project">
            <li>
              <a :href="linkTo.repoSkillset">
                <font-awesome-icon :icon="['fab', 'github']" class="icon-pro" />
              </a>
            </li>
            <li>
              <a :href="demo.skilsetApp">
                <font-awesome-icon
                  :icon="['fas', 'external-link-alt']"
                  class="icon-pro"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      linkTo: {
        repoKP: "https://github.com/fjrpambudhi74/21cleanshoes",
        repoWeddingku: "https://github.com/fjrpambudhi74/weddingku",
        repoGame: "https://github.com/fjrpambudhi74/vue_simple_game",
        repoV1: "https://github.com/fjrpambudhi74/portofolio_v1",
        repoCalendar: "https://github.com/fjrpambudhi74/vuetify-calendar",
        repoSkillset: "https://github.com/fjrpambudhi74/vue-skillset",
      },
      demo: {
        nope: "http://www.github.com/fjrpambudhi74",
        v1App: "https://fjrpambudhi74.github.io/portofolio_v1/",
        gameApp: "http://monster-slayer-demo.herokuapp.com/",
        calApp: "https://vuetify-calendar-909d9.web.app/",
        skilsetApp: "https://fjrpambudhi-skillset.netlify.app/",
      },
    };
  },
};
</script>

<style>
@import "../assets/css/styles.css";
</style>
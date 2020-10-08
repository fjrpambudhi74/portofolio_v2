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
              <a :href="linkTo.github">
                <font-awesome-icon :icon="['fab', 'github']" class="icon-pro" />
              </a>
            </li>
            <li>
              <a :href="linkTo.demo">
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
            using framework Codeigniter and Database
          </p>
          <ul class="stack-project">
            <li>PHP</li>
            <li>Codeigniter</li>
            <li>AdminLTE</li>
            <li>MySQL</li>
          </ul>
          <ul class="icon-project">
            <li>
              <a :href="linkTo.github">
                <font-awesome-icon :icon="['fab', 'github']" class="icon-pro" />
              </a>
            </li>
            <li>
              <a :href="linkTo.github">
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
            with Vue JS
          </p>
          <ul class="stack-project">
            <li>Vue JS</li>
            <li>CSS</li>
            <li>Bootstrap</li>
          </ul>
          <ul class="icon-project">
            <li>
              <a :href="linkTo.github">
                <font-awesome-icon :icon="['fab', 'github']" class="icon-pro" />
              </a>
            </li>
            <li>
              <a :href="linkTo.github">
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
              <a :href="linkTo.github">
                <font-awesome-icon :icon="['fab', 'github']" class="icon-pro" />
              </a>
            </li>
            <li>
              <a :href="linkTo.github">
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
        github: "http://www.github.com/fjrpambudhi74",
        demo: "https://fjrpambudhi74.github.io/myportofolio/",
      },
    };
  },
};
</script>

<style>
@import "../assets/css/styles.css";
</style>
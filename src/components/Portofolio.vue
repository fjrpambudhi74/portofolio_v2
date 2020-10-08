<template>
  <div class="container portofolio" id="portofolio">
    <div class="row">
      <div class="col-md-12">
        <div data-aos="fade-left" class="vl-p"></div>
        <div>
          <h3 data-aos="zoom-in" data-aos-duration="500" class="porto-title">
            Something I've Built
          </h3>
          <div class="porto">
            <div class="row">
              <div data-aos="fade-in" data-aos-duration="1500" class="col-md-8">
                <div class="overlay-p"></div>
                <img class="hero" src="@/assets/porto.png" />
              </div>
              <div class="col-md-4 desc-porto">
                <p data-aos="fade-left" class="featured">Featured Project</p>
                <h3 data-aos="fade-left" class="name-porto">
                  Realtime Chat App
                </h3>
                <div data-aos="fade-left" class="block-card">
                  <p>
                    Realtime chat app project using Firebase Firestore with
                    nicer look. This personal project inspired by Whatsapp Web
                    Chat however not powerful and nicely as Whatsapp.
                  </p>
                </div>
                <ul data-aos="fade-left" class="stack">
                  <li>Vue Js</li>
                  <li>Firebase</li>
                  <li>Bootstrap</li>
                </ul>
                <ul data-aos="fade-left" class="item-porto">
                  <li>
                    <a :href="linkTo.demo">
                      <font-awesome-icon
                        :icon="['fas', 'external-link-alt']"
                        class="porto-icon"
                      />
                    </a>
                  </li>
                  <li>
                    <a :href="linkTo.github">
                      <font-awesome-icon
                        :icon="['fab', 'github']"
                        class="porto-icon"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12">
        <div>
          <div class="porto">
            <div class="row">
              <div data-aos="fade-in" data-aos-duration="1500" class="col-md-8">
                <div class="overlay-p"></div>
                <img class="hero" src="@/assets/porto.png" />
              </div>
              <div class="col-md-4 desc-porto">
                <p data-aos="fade-left" class="featured">Featured Project</p>
                <h3 data-aos="fade-left" class="name-porto">
                  Stock Trader App
                </h3>
                <div data-aos="fade-left" class="block-card">
                  <p>
                    Simple Stock Trader App using Vuex to make it easy manage
                    logic data in Javascript. I built this project certainly not
                    like other trading applications but I just tried to
                    implement the logic
                  </p>
                </div>
                <ul data-aos="fade-left" class="stack">
                  <li>Vue JS</li>
                  <li>Vuex</li>
                  <li>Animate CSS</li>
                </ul>
                <ul data-aos="fade-left" class="item-porto">
                  <li>
                    <a :href="linkTo.demo">
                      <font-awesome-icon
                        :icon="['fas', 'external-link-alt']"
                        class="porto-icon"
                      />
                    </a>
                  </li>
                  <li>
                    <a :href="linkTo.github">
                      <font-awesome-icon
                        :icon="['fab', 'github']"
                        class="porto-icon"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12">
        <div>
          <div class="porto">
            <div class="row">
              <div data-aos="fade-in" data-aos-duration="1500" class="col-md-8">
                <div class="overlay-p"></div>
                <img class="hero" src="@/assets/porto.png" />
              </div>
              <div class="col-md-4 desc-porto">
                <p data-aos="fade-left" class="featured">Featured Project</p>
                <h3 data-aos="fade-left" class="name-porto">
                  My Skillset Vue App
                </h3>
                <div data-aos="fade-left" class="block-card">
                  <p>
                    This is my first project built with Vue Js. In this case i'm
                    presents my own skillset and in additional this project can
                    add & delete the skills like todo list app. and also
                    calculate number of skills
                  </p>
                </div>
                <ul data-aos="fade-left" class="stack">
                  <li>Vue JS</li>
                  <li>Vuex</li>
                  <li>Animate CSS</li>
                </ul>
                <ul data-aos="fade-left" class="item-porto">
                  <li>
                    <a :href="linkTo.demo">
                      <font-awesome-icon
                        :icon="['fas', 'external-link-alt']"
                        class="porto-icon"
                      />
                    </a>
                  </li>
                  <li>
                    <a :href="linkTo.github">
                      <font-awesome-icon
                        :icon="['fab', 'github']"
                        class="porto-icon"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
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

<style >
@import "../assets/css/styles.css";
</style>
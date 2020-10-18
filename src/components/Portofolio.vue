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
              <div class="col-md-12">
                <div>
                  <div class="porto">
                    <div class="row">
                      <!-- Corona App -->
                      <div
                        data-aos="fade-in"
                        data-aos-duration="1500"
                        class="col-md-12 col-lg-8 hide-mobile"
                      >
                        <div class="overlay-p"></div>
                        <img class="hero" src="@/assets/porto-1.png" />
                      </div>
                      <div class="col-md-12 col-lg-4 desc-porto">
                        <p data-aos="fade-left" class="featured">
                          Featured Project
                        </p>
                        <h3 data-aos="fade-left" class="name-porto">
                          Corona Realtime Tracker
                        </h3>
                        <div data-aos="fade-left" class="block-card">
                          <p>
                            Corona Real-Time Tracker and this app contain simple
                            data monitoring for Covid19 using Vue JS, Vuetify,
                            and this Data API provided by Mathdroid.
                          </p>
                        </div>
                        <ul data-aos="fade-left" class="stack">
                          <li>VueJS</li>
                          <li>Vuetify</li>
                          <li>Axios</li>
                          <li>Mathdroid</li>
                        </ul>
                        <ul data-aos="fade-left" class="item-porto">
                          <li>
                            <a :href="demo.coronaApp">
                              <font-awesome-icon
                                :icon="['fas', 'external-link-alt']"
                                class="porto-icon"
                              />
                            </a>
                          </li>
                          <li>
                            <a :href="linkTo.repoCovid">
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
              <!-- Corona App -->

              <!-- Chat App -->
              <div
                data-aos="fade-in"
                data-aos-duration="1500"
                class="col-md-12 col-lg-8 hide-mobile"
              >
                <div class="overlay-p"></div>
                <img class="hero" src="@/assets/porto-2.png" />
              </div>
              <div class="col-md-12 col-lg-4 desc-porto">
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
                    <a :href="demo.chatApp">
                      <font-awesome-icon
                        :icon="['fas', 'external-link-alt']"
                        class="porto-icon"
                      />
                    </a>
                  </li>
                  <li>
                    <a :href="linkTo.repoChat">
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
      <!-- Chat App -->

      <!-- Stock Trader App -->
      <div class="col-md-12">
        <div>
          <div class="porto">
            <div class="row">
              <div
                data-aos="fade-in"
                data-aos-duration="1500"
                class="col-md-12 col-lg-8 hide-mobile"
              >
                <div class="overlay-p"></div>
                <img class="hero" src="@/assets/porto-3.png" />
              </div>
              <div class="col-md-12 col-lg-4 desc-porto">
                <p data-aos="fade-left" class="featured">Featured Project</p>
                <h3 data-aos="fade-left" class="name-porto">
                  Stock Trader App
                </h3>
                <div data-aos="fade-left" class="block-card">
                  <p>
                    Simple Stock Trader App using Vuex to make it easy manage
                    logic data in Javascript. I built this project certainly not
                    like other trading applications but I just tried to
                    implement the logic.
                  </p>
                </div>
                <ul data-aos="fade-left" class="stack">
                  <li>Vue JS</li>
                  <li>Vuex</li>
                  <li>Animate CSS</li>
                </ul>
                <ul data-aos="fade-left" class="item-porto">
                  <li>
                    <a :href="demo.stockApp">
                      <font-awesome-icon
                        :icon="['fas', 'external-link-alt']"
                        class="porto-icon"
                      />
                    </a>
                  </li>
                  <li>
                    <a :href="linkTo.repoStock">
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
      <!-- Stock Trader App -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      linkTo: {
        repoChat: "https://github.com/fjrpambudhi74/vue_chat_app",
        repoStock: "https://github.com/fjrpambudhi74/vue_stock_trader",
        repoSkillset: "https://github.com/fjrpambudhi74/vue-skillset",
        repoCovid: "https://github.com/fjrpambudhi74/vue-corona-info",
      },
      demo: {
        chatApp: "https://vue-chat-app-8e549.firebaseapp.com/",
        stockApp: "https://vue-stock-app.herokuapp.com/",
        coronaApp: "https://lookit-covid19.now.sh/",
      },
    };
  },
};
</script>

<style >
@import "../assets/css/styles.css";
</style>
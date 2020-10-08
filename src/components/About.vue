<template>
  <div class="container about" id="about">
    <div class="row">
      <div class="col-md-6 desc">
        <div data-aos="fade-left" class="vl"></div>
        <h3 data-aos="zoom-in" data-aos-duration="500" class="title-about">
          About Me
        </h3>
        <div data-aos="fade-right" data-aos-duration="1000">
          <p class="text-about">
            Hello! I'm Fajar Pambudhi, a software engineer based in Serpong,
            Tangerang Selatan.
          </p>
          <p class="text-about">
            I enjoy creating things that live on the internet, whether that be
            websites, applications, or anything in between. My goal is to always
            build products that provide pixel-perfect, performant experiences.
          </p>
          <p class="text-about">
            I'm studying Informatic Engineering at Institut Teknologi Indonesia,
            And now i'm work as a Web Developer and work on all kinds of
            interesting and meaningful projects every day.
          </p>
          <p class="text-about">
            Here are a few technologies I've been working with recently:
          </p>
        </div>

        <div class="row">
          <div class="col-md-6">
            <ul class="item">
              <li
                data-aos="fade-up"
                data-aos-duration="500"
                v-for="(skill1, index) in skills1"
                :key="index"
              >
                <font-awesome-icon
                  :icon="['fas', 'angle-right']"
                  class="mr-1 list-icon"
                />{{ skill1 }}
              </li>
            </ul>
          </div>
          <div class="col-md-6">
            <ul class="item">
              <li
                data-aos="fade-up"
                data-aos-duration="500"
                v-for="(skill1, index) in skills2"
                :key="index"
              >
                <font-awesome-icon
                  :icon="['fas', 'angle-right']"
                  class="mr-1 list-icon"
                />{{ skill1 }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div data-aos="fade-in" data-aos-duration="1500" class="col-md-6 bio">
        <div class="overlay"></div>
        <div class="box"></div>
        <img class="bio" src="@/assets/bio-bw.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills1: [
        "HTML & (S)CSS",
        "Javascript",
        "Vue JS",
        "Bootstrap",
        "Wordpress",
      ],
      skills2: ["PHP", "Codeigniter", "MySQL", "Firebase", "Others"],
    };
  },
};
</script>

<style>
@import "../assets/css/styles.css";
</style>

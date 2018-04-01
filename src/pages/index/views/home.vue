<template>
  <div class="home">
    <div class="nav">
      <div class="socialCircle-container">
        <div class="socialCircle-item">
          <router-link :to="{name: 'gallery'}">gallery<i class="fa fa-behance"></i></router-link>
        </div>
        <div class="socialCircle-item">
          <router-link :to="{name: 'contact'}">contact</router-link><i class="fa fa-facebook"></i>
        </div>
        <div class="socialCircle-item"><i class="fa fa-twitter"></i></div>
        <div class="socialCircle-item"><i class="fa fa-reddit"></i></div>
        <div class="socialCircle-center closed"><i class="fa fa-share-alt"></i></div>
      </div>
    </div>

    <!-- <div class="fullpage">
      <div class="section">
        <div class="slide"> Slide 1 </div>
        <div class="slide"> Slide 2 </div>
        <div class="slide"> Slide 3 </div>
        <div class="slide"> Slide 4 </div>
      </div>
      <div class="section">Some section2</div>
      <div class="section">Some section3</div>
      <div class="section">Some section4</div>
    </div> -->

    <div class="swiper-container home-fullpage">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(slide, index) in slides" :key="index">
          <!-- <img :src="slide.url" alt=""> -->
          <div class="bg-img" :style="{background: 'url(' + slide.url + ') no-repeat center/100%'}"></div>
        </div>
      </div>

      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <!-- <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div> -->
  
      <!-- 如果需要滚动条 -->
      <!-- <div class="swiper-scrollbar"></div> -->
    </div>
  </div>
</template>

<script>
require("../../../../static/js/socialCircle.js");
// import 'fullpage.js/dist/jquery.fullPage.css'
// import 'fullpage.js/dist/jquery.fullPage.js'

import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'

export default {
  name: "home",
  data() {
    return {
      slides: []
    }
  },
  mounted() {
    // $(document).ready(function() {
    //   $('.fullpage').fullpage();
    // });

    $(".socialCircle-center").socialCircle({
      rotate: 0,
      radius: 80,
      circleSize: 1,
      speed: 300
    });

    this.axios.post('/api/index').then(res => {
      this.slides = res.data.data.list
    })
  },
  updated() {
    this.swiperInit()
  },
  methods: {
    swiperInit() {
      let swiper = new Swiper('.home-fullpage', {
        direction: 'vertical',
        autoplay: true,
        loop: true,
  
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },

        // 如果需要前进后退按钮
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },

        // 如果需要滚动条
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
      })
    }
  }
};
</script>

<style lang="stylus" scoped>
.home
  width: 100%
  height: 100%
  .nav
    position: fixed
    z-index: 9
    .socialCircle-container {
      position: relative;
      width: 249px;
      height: 270px;
      margin: 0 auto;
      transform: rotate(-90deg);
      .socialCircle-item {
        width: 40px;
        height: 40px;
        position: absolute;
        background: #333;
        margin: 50%;
        text-align: center;
        color: #ffffff;
        font-size: 14px;
        cursor: pointer;
        transform: rotate(90deg);
      }
      .socialCircle-center {
        width: 60px;
        height: 60px;
        background: #35dbcd;
        margin: 50%;
        position: absolute;
        text-align: center;
        color: #ffffff;
        font-size: 60px;
        cursor: pointer;
      }
    }


.swiper-container
  width: 100%
  height: 100%
  .swiper-wrapper
    width: 100%
    height: 100%
    .swiper-slide
      position: relative
      width: 100%
      height: 100%
      img
        width: 100%
        height: 100%
      .bg-img
        width: 100%
        height: 100%
</style>

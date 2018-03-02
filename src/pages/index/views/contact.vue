<template>
  <div class="contact">
    <div class="swiper-container contact-fullpage">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(slide, index) in slides" :key="index">
          <!-- <img :src="slide.url" alt=""> -->
          <div class="bg-img" :style="{background: 'url(' + slide.url + ') no-repeat center/100%'}"></div>
        </div>
      </div>

      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
      
      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
      
      <!-- 如果需要滚动条 -->
      <div class="swiper-scrollbar"></div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'

export default {
  name: "contact",
  data() {
    return {
      slides: [
        {
          url: '../assets/img/contact1.jpg'
        },
        {
          url: '../assets/img/contact2.jpg'
        },
        {
          url: '../assets/img/contact3.jpg'
        }
      ]
    }
  },
  mounted() {
    // this.axios.post('/api/index').then(res => {
    //   this.slides = res.data.data.list
    // })
  },
  updated() {
    this.swiperInit()
  },
  methods: {
    swiperInit() {
      let swiper = new Swiper('.contact-fullpage', {
        autoplay: true,
        loop: true,
  
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },

        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        // 如果需要滚动条
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      })
    }
  }
};
</script>

<style lang="stylus" scoped>
.contact
  width: 100%
  height: 100%

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

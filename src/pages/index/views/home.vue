<template>
  <div class="home">
    <div class="nav">
      <div class="socialCircle-container">
        <div class="socialCircle-item">
          <router-link :to="{name: 'gallery'}">gallery<i class="fa fa-behance"></i></router-link>
        </div>
        <div class="socialCircle-item">
          <router-link :to="{name: 'waterfall'}">waterfall</router-link><i class="fa fa-github"></i>
        </div>
        <div class="socialCircle-item"><i class="fa fa-facebook"></i></div>
        <div class="socialCircle-item"><i class="fa fa-twitter"></i></div>
        <div class="socialCircle-item"><i class="fa fa-reddit"></i></div>
        <div class="socialCircle-center closed"><i class="fa fa-share-alt"></i></div>
      </div>
    </div>

    <div class="fullpage">
      <div class="section">
        <div class="slide"> Slide 1 </div>
        <div class="slide"> Slide 2 </div>
        <div class="slide"> Slide 3 </div>
        <div class="slide"> Slide 4 </div>
      </div>
      <div class="section">Some section2</div>
      <div class="section">Some section3</div>
      <div class="section">Some section4</div>
    </div>
  </div>
</template>

<script>
require("../../../../static/js/socialCircle.js");
import 'fullpage.js/dist/jquery.fullPage.css'
import 'fullpage.js/dist/jquery.fullPage.js'

export default {
  name: "home",
  mounted() {
    $(".socialCircle-center").socialCircle({
      rotate: 0,
      radius: 80,
      circleSize: 1,
      speed: 300
    });

    $(document).ready(function() {
      $('.fullpage').fullpage();
    });
  }
};
</script>

<style lang="stylus" scoped>
.home
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
</style>


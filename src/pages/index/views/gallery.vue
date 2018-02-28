<template>
  <div class="gallery">
    <ul class="clearfix" id="images">
			<li>
				<img src="../assets/img/g1.jpg" alt="">
			</li>
			<li>
				<img src="../assets/img/g2.jpg" alt="">
			</li>
			<li>
				<img src="../assets/img/g3.jpg" alt="">
			</li>
			<li>
				<img src="../assets/img/g4.jpg" alt="">
			</li>
			<li>
				<img src="../assets/img/g5.jpg" alt="">
			</li>
			<li>
				<img src="../assets/img/g6.jpg" alt="">
			</li>
			<li>
				<img src="../assets/img/g7.jpg" alt="">
			</li>

			<li>
				<img src="../assets/img/hy1.jpg" alt="">
			</li>
			<li>
				<img src="../assets/img/hy2.jpg" alt="">
			</li>
			<li>
				<img src="../assets/img/hy3.jpg" alt="">
			</li>
			<li>
				<img src="../assets/img/hy4.jpg" alt="">
			</li>
		</ul>
  </div>
</template>

<script>
import Viewer from 'viewerjs'
import 'viewerjs/dist/viewer.css'

export default {
	mounted() {
		// View some images
		var options = {};
		var viewer = new Viewer(document.getElementById('images'), options);
	}
};
</script>

<style lang="stylus" scoped>
ul, li
	list-style none
	padding 0
.gallery
	li
		float: left
		width: 30%
		margin: 5px
		img
			width: 100%
</style>

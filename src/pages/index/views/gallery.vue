<template>
  <div id="main">
		<div class="box">
			<div class="pic">
				<img src="../assets/img/g1.jpg" alt="">
			</div>
		</div>
		<div class="box">
			<div class="pic">
				<img src="../assets/img/g2.jpg" alt="">
			</div>
		</div>
		<div class="box">
			<div class="pic">
				<img src="../assets/img/g3.jpg" alt="">
			</div>
		</div>
		<div class="box">
			<div class="pic">
				<img src="../assets/img/g4.jpg" alt="">
			</div>
		</div>
		<div class="box">
			<div class="pic">
				<img src="../assets/img/g5.jpg" alt="">
			</div>
		</div>
		<div class="box">
			<div class="pic">
				<img src="../assets/img/g6.jpg" alt="">
			</div>
		</div>
		<div class="box">
			<div class="pic">
				<img src="../assets/img/g7.jpg" alt="">
			</div>
		</div>
		<div class="box">
			<div class="pic">
				<img src="../assets/img/hy1.jpg" alt="">
			</div>
		</div>
		<div class="box">
			<div class="pic">
				<img src="../assets/img/hy2.jpg" alt="">
			</div>
		</div>
		<div class="box">
			<div class="pic">
				<img src="../assets/img/hy3.jpg" alt="">
			</div>
		</div>
		<div class="box">
			<div class="pic">
				<img src="../assets/img/hy4.jpg" alt="">
			</div>
		</div>
	</div>
</template>

<script>
import Viewer from 'viewerjs'
import 'viewerjs/dist/viewer.css'

export default {
  mounted() {
	var viewer = new Viewer(document.getElementById('main'), {});

	var dataSrc = [
		{src: 'http://xfjr.ledaikuan.cn/kahuanwang/imgs/1.jpeg'},
		{src: 'http://xfjr.ledaikuan.cn/kahuanwang/imgs/2.jpeg'}
	];

    var oParent = document.getElementById('main');
    var oBoxs = getElesByClass(oParent, 'box');

    window.onload = function() {
		// 一定要在onload方法里面调用否则会有bug
		waterfall('main', 'box');
		loadMore();

		window.onscroll = function () {
			loadMore();
		}
    }

    function loadMore () {
		if (checkScroll()) {
			console.log('loading...');
			for (var i = 0; i < dataSrc.length; i++) {
				var oBox = document.createElement('div');
				oBox.className = 'box';
				oParent.appendChild(oBox);

				var oPic = document.createElement('div');
				oPic.className = 'pic';
				oBox.appendChild(oPic);

				var img = document.createElement('img');
				img.src = dataSrc[i].src;
				oPic.appendChild(img);
			}

			waterfall('main', 'box');

			viewer.update();
		}
    }
    function waterfall(parent, box) {
		// 取出#main所有的.box元素
		var oParent = document.getElementById(parent);
		var oBoxs = getElesByClass(oParent, box);

		// 计算整个页面显示的列数(页面宽/box宽)
		// oBoxW 202 = 165 + 10*2 + 1*2 + 15
		var oBoxW = oBoxs[0].offsetWidth;
		var cols = Math.floor(document.documentElement.clientWidth / oBoxW);
		// 设置main宽度
		oParent.style.cssText = 'width:' + oBoxW * cols + 'px;margin: 0 auto;';

		var hArr = []; // 存放每一行元素的高度
		for (var i = 0; i < oBoxs.length; i++) {
			if (i < cols) { // 第一行
				// hArr[i] = oBoxs[i].offsetHeight;
				hArr.push(oBoxs[i].offsetHeight);
			} else { // 大于第cols行的元素
				// 高度最小值
				var minH = Math.min.apply(null, hArr);
				console.log(minH);
				// 高度最小值在数组中的索引
				var index = getMinHIndex(hArr, minH);

				oBoxs[i].style.position = 'absolute';
				// oBoxs[i].style.top = oBoxs[index].offsetHeight + 'px';
				oBoxs[i].style.top = minH + 'px';
				// oBoxs[i].style.left = oBoxW * index + 'px';
				oBoxs[i].style.left = oBoxs[index].offsetLeft + 'px';

				hArr[index] += oBoxs[i].offsetHeight;
			}
		}
		console.log(hArr);
    }

    // 根据 class 取元素
    function getElesByClass(parent, clsName) {
		var arr = [],
			aElements = parent.getElementsByTagName('*');
		for (var i = 0; i < aElements.length; i++) {
			if (aElements[i].className === clsName) {
					arr.push(aElements[i]);
			}
		}
		return arr;
    }

    // 获取数组中某个值的索引
    function getMinHIndex(arr, val) {
		for (var i in arr) {
			if (arr[i] === val) {
				return i;
			}
		}
    }

    // 根据最后一个数据块判断是否满足加载条件
    function checkScroll() {
		var oParent = document.getElementById('main');
		var oBoxs = getElesByClass(oParent, 'box');
		var lastBox = oBoxs[oBoxs.length - 1];
		var lastBoxH = lastBox.offsetTop + Math.floor(lastBox.offsetHeight / 2);

		var clientH = document.documentElement.clientHeight || document.body.clientHeight;
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

		return (lastBoxH < clientH + scrollTop) ? true : false;
    }
	}
}
</script>

<style>
#main {
	position: relative;
}
#main .box {
	float: left;
	padding: 15px 0 0 15px;
}
#main .box .pic {
	padding: 10px;
	border: 1px solid #ccc;
	box-shadow: 0 0 5px #ccc;
}
#main .box .pic img {
	width: 165px;
	height: auto;
}
</style>

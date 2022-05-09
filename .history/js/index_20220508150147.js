var input = document.querySelector('#input')
var content = document.querySelectorAll('.content')
// 获取返回顶部的点击元素
var toTop = document.querySelector('.toTop')
// 获取轮播图的元素
var imgs = document.querySelector('.map').querySelectorAll('img')
var left = document.querySelector('.map').querySelector('.left')
var right = document.querySelector('.map').querySelector('.right')

// 添加新的图片
function addImage() {
  for (var m = 0; m < 4; m++) {
    for (var i = 1; i < 13; i++) {
      content[m].innerHTML = content[m].innerHTML + '<img src="./img/' + i + '.jpg" alt="" srcset="" class="img">'
    }
  }
}

addImage()

// 设置返回的时间
var timer = null
// 点击返回顶部事件
toTop.onclick = function () {
  cancelAnimationFrame(timer);
  timer = requestAnimationFrame(function fn() {
    var oTop = document.body.scrollTop || document.documentElement.scrollTop;
    if (oTop > 0) {
      document.body.scrollTop = document.documentElement.scrollTop = oTop - 50;
      timer = requestAnimationFrame(fn);
    } else {
      cancelAnimationFrame(timer);
    }
  })
}

var i = 0
// 轮播图
function changeImg() {
  // 自动滚动
  // setInterval(function () {
  //   if (i == imgs.length - 1) {
  //     setTimeout(() => {
  //       imgs[imgs.length - 1].style.opacity = '0'
  //     }, 1000);
  //     imgs[i].className = 'imgToLeft'
  //     i = 0
  //     imgs[i].style.opacity = '1'
  //     imgs[i].className = 'imgToRight'
  //   } else {
  //     i++
  //     setTimeout(() => {
  //       imgs[i - 1].style.opacity = '0'
  //     }, 1000);
  //     imgs[i - 1].className = 'imgToLeft'
  //     imgs[i].style.opacity = '1'
  //     imgs[i].className = 'imgToRight'
  //   }
  // }, 5000)
  // 手动选择向左滚动
  left.onclick = function () {
    if (i == 0) {
      setTimeout(() => {
        imgs[i].style.opacity = '0'
      }, 1000);
      imgs[i].className = 'imgForLeft'
      imgs[imgs.length - 1].style.opacity = '1'
      imgs[imgs.length - 1].className = 'imgForRight'
    } else {
      i--
      setTimeout(() => {
        imgs[i + 1].style.opacity = '0'
      }, 1000);
      imgs[i + 1].className = 'imgForRight'
      imgs[i].style.opacity = '1'
      imgs[i].className = 'imgForLeft'
    }

  }

  // 手动选择向右滚动
  right.onclick = function () {
    if (i == imgs.length - 1) {
      setTimeout(() => {
        imgs[imgs.length - 1].style.opacity = '0'
      }, 1000);
      imgs[i].className = 'imgToLeft'
      i = 0
      imgs[i].style.opacity = '1'
      imgs[i].className = 'imgToRight'
    } else {
      i++
      setTimeout(() => {
        imgs[i - 1].style.opacity = '0'
      }, 1000);
      imgs[i - 1].className = 'imgToLeft'
      imgs[i].style.opacity = '1'
      imgs[i].className = 'imgToRight'
    }
  }
}

changeImg()
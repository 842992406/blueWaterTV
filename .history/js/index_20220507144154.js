var input = document.querySelector('#input')
var content = document.querySelectorAll('.content')
// 获取返回顶部的点击元素
var toTop = document.querySelector('.toTop')
// 获取轮播图的元素
var imgs = document.querySelector('.map').querySelectorAll('img')

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

// 轮播图
function changeImg() {
  var i = 0
  setInterval(function () {
    if (i == imgs.length - 1) {
      i = 0
      imgs[i].style.opacity = '0'
      imgs[i].style.opacity = '1'
    } else {
      i++
      imgs[i - 1].style.opacity = '0'
      imgs[i].style.opacity = '1'
    }
  }, 2000)
}

changeImg()
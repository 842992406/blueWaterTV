var input = document.querySelector('#input')
var content = document.querySelectorAll('.content')
// 获取返回顶部的点击元素
var toTop = document.querySelector('.toTop')
// 获取轮播图的元素
var imgs = document.querySelector('.map').querySelectorAll('img')
var left = document.querySelector('.map').querySelector('.left')
var right = document.querySelector('.map').querySelector('.right')
var imgLi = document.querySelectorAll('.button')


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
var roll
// 轮播图
function changeImg() {
  timer()
  // 自动滚动
  function timer() {
    roll = setInterval(function () {
      if (i == imgs.length - 1) {
        setTimeout(() => {
          imgs[imgs.length - 1].style.opacity = '0'
        }, 1000);
        imgs[i].className = 'imgToLeft'
        i = 0
        imgs[i].style.opacity = '1'
        imgs[i].className = 'imgToRight'
        m = i
      } else {
        i++
        setTimeout(() => {
          imgs[i - 1].style.opacity = '0'
        }, 1000);
        imgs[i - 1].className = 'imgToLeft'
        imgs[i].style.opacity = '1'
        imgs[i].className = 'imgToRight'
        m = i
      }
    }, 5000)
  }
  // 手动选择向左滚动
  left.onclick = function () {
    clearInterval(roll)
    if (i == 0 || i == -1) {
      setTimeout(() => {
        imgs[0].style.opacity = '0'
      }, 1000);
      imgs[0].className = 'imgForRight'
      i = imgs.length - 1
      imgs[i].style.opacity = '1'
      imgs[i].className = 'imgForLeft'
      m = i
      timer()
    } else {
      i--
      setTimeout(() => {
        imgs[i + 1].style.opacity = '0'
      }, 1000);
      imgs[i + 1].className = 'imgForRight'
      imgs[i].style.opacity = '1'
      imgs[i].className = 'imgForLeft'
      m = i
      timer()
    }
  }

  // 手动选择向右滚动
  right.onclick = function () {
    clearInterval(roll)
    if (i == imgs.length - 1) {
      setTimeout(() => {
        imgs[imgs.length - 1].style.opacity = '0'
      }, 1000);
      imgs[i].className = 'imgToLeft'
      i = 0
      imgs[i].style.opacity = '1'
      imgs[i].className = 'imgToRight'
      m = i
      timer()
    } else {
      i++
      setTimeout(() => {
        imgs[i - 1].style.opacity = '0'
      }, 1000);
      imgs[i - 1].className = 'imgToLeft'
      imgs[i].style.opacity = '1'
      imgs[i].className = 'imgToRight'
      m = i
      timer()
    }
  }


  // // 右下角圆点选择
  imgLi.onclick = function () {
    alert(1)
  }

}

changeImg()

var input = document.querySelector('#input')
var content = document.querySelectorAll('.content')
// 获取返回顶部的点击元素
var toTop = document.querySelector('.toTop')
// 获取轮播图的元素
var imgs = document.querySelector('.map').querySelectorAll('img')
var left = document.querySelector('.map').querySelector('.left')
var right = document.querySelector('.map').querySelector('.right')
var imgLi = document.querySelector('.imgNum').querySelector('ul').querySelectorAll('li')

var movie = [
  { i: 1, movieName: '夏夜追风' },
  { i: 2, movieName: '摧毁' },
  { i: 3, movieName: '摧毁' },
  { i: 4, movieName: '摧毁' },
  { i: 5, movieName: '摧毁' },
  { i: 6, movieName: '重生之门' },
  { i: 7, movieName: '摧毁' },
  { i: 8, movieName: '摧毁' },
  { i: 9, movieName: '明天会更好' },
  { i: 10, movieName: '黑马' },
  { i: 11, movieName: '风起陇西' },
  { i: 12, movieName: '杠杆' },
  { i: 13, movieName: '摧毁' },
]

// 添加新的图片
function addImage() {
  for (var m = 0; m < 4; m++) {
    for (var i = 1; i < 13; i++) {
      content[m].innerHTML = content[m].innerHTML + '<div>' + '<img src="./img/' + movie[i].i + '.jpg" alt="" srcset="" class="img">' + '<li><a href="#">' + movie[i].movieName + '</a></li>' + '</div>'
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
        changeLi(i)
      } else {
        i++
        setTimeout(() => {
          imgs[i - 1].style.opacity = '0'
        }, 1000);
        imgs[i - 1].className = 'imgToLeft'
        imgs[i].style.opacity = '1'
        imgs[i].className = 'imgToRight'
        changeLi(i)
      }
    }, 5000)
  }

  function changeLi(f) {
    for (let m = 0; m < imgLi.length; m++) {
      imgLi[m].className = ''
      // 右下角圆点随着图片的变化而变化
      imgLi[f].className = 'changeBigLi'
    }
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
      changeLi(i)
      timer()
    } else {
      i--
      setTimeout(() => {
        imgs[i + 1].style.opacity = '0'
      }, 1000);
      imgs[i + 1].className = 'imgForRight'
      imgs[i].style.opacity = '1'
      imgs[i].className = 'imgForLeft'
      changeLi(i)
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
      changeLi(i)
      timer()
    } else {
      i++
      setTimeout(() => {
        imgs[i - 1].style.opacity = '0'
      }, 1000);
      imgs[i - 1].className = 'imgToLeft'
      imgs[i].style.opacity = '1'
      imgs[i].className = 'imgToRight'
      changeLi(i)
      timer()
    }
  }


  // 右下角圆点选择
  for (let m = 0; m < imgLi.length; m++) {
    // 点击圆点选择不同的图片
    imgLi[m].onclick = function () {
      clearInterval(roll)
      // m > i时，是向右边移动
      if (m > i) {
        setTimeout(() => {
          imgs[i].style.opacity = '1'
        }, 1000);
        imgs[i].className = 'imgToLeft'
        i = m
        imgs[m].style.opacity = '1'
        imgs[m].className = 'imgToRight'
        changeLi(m)
        timer()
      } else if (m < i) {  // m < i时，是向左边移动
        imgs[i].className = 'imgForRight'
        setTimeout(() => {
          imgs[i].style.opacity = '0'
          i = m
        }, 1000);
        imgs[m].style.opacity = '1'
        imgs[m].className = 'imgForLeft'
        changeLi(m)
        timer()
      } else {
        timer()
        return
      }
    }
  }


}

changeImg()

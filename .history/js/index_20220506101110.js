var input = document.querySelector('#input')
var content = document.querySelectorAll('.content')
// 获取返回顶部的点击元素
var toTop = document.querySelector('.toTop')

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
  var oTop = document.body.scrollTop || document.documentElement.scrollTop;
  function db() {
    if (oTop > 0) {
      document.body.scrollTop = document.documentElement.scrollTop = oTop - 50
    }
  }
}

window.setInterval(db, 100)
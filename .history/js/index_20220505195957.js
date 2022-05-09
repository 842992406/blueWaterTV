var input = document.querySelector('#input')
var content = document.querySelector('.content')

// 添加新的图片
function addImage() {
  for (var i = 0; i <= 12; i++) {
    content.innerHTML = content.innerHTML + '<img src="./img/' + i + '.jpg" alt="" srcset="" class="img">'
  }
}

addImage()
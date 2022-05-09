var input = document.querySelector('#input')
var content = document.querySelectorAll('.content')

// 添加新的图片
function addImage() {
  for (var m = 0; m < 4; m++) {
    for (var i = 1; i < 13; i++) {
      content[m].innerHTML = content[m].innerHTML + '<img src="./img/' + i + '.jpg" alt="" srcset="" class="img">'
    }
  }
}

addImage()
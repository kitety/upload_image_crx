

var $inp = $('#chrome_file')
$('#title').on('click', function () {
  $inp.click()
})
var imgObj = {}
$inp.on('change', function (e) {
  const files = e.target.files
  const file = files[0]
  var reader = new FileReader();
  if (file) {
    reader.readAsDataURL(file);
    //转换成功后
    reader.onloadend = function () {
      //将转换结果赋值给img标签
      //输出结果    
      imgObj = {
        base64: reader.result,
        size: Math.floor(file.size / 1024),
        file: file
      }
      var data = new FormData();
      data.append("smfile", file);
      data.append("file_id", 0);
      // $.ajax({
      //   type: "post",
      //   url: "https://sm.ms/api/v2/upload?inajax=1",
      //   data: data,
      //   contentType: false,
      //   //默认文件类型application/x-www-form-urlencoded  设置之后multipart/form-data
      //   processData: false,
      //   // 默认情况下会对发送的数据转化为对象 不需要转化的信息
      //   success: function (res) {
      //     console.log('res: ', JSON.parse(res).data.url);

      //   },
      // });
      // https://imgurl.org/
      // $.ajax({
      //   type: "post",
      //   url: "https://imgurl.org/upload/ftp",
      //   data: data,
      //   contentType: false,
      //   //默认文件类型application/x-www-form-urlencoded  设置之后multipart/form-data
      //   processData: false,
      //   // 默认情况下会对发送的数据转化为对象 不需要转化的信息
      //   success: function (res) {
      //     console.log('res: ', res.url);

      //   },
      // });
    }
  }
})
// 獲取粘貼的文件

$(document).on({
  dragenter: function (e) {
    e.preventDefault();
  },
  dragover: function (e) {
    e.preventDefault();
  },
  drop: function (e) {
    e.preventDefault();
    var files = e.originalEvent.dataTransfer.files; //获取文件
  },
  paste: function (e) {
    var event = e.originalEvent
    var items = event.clipboardData ? event.clipboardData.items : [];
    console.log('items: ', items);
    if (items && items.length) {
      var files = []
      // 检索剪切板items
      for (var i = 0; i < items.length; i++) {
        files.push(items[i].getAsFile())
      }
      console.log('files: ', files);
    }
  }
});
/**
 * 获取图片的base64
 * 支持传入file的数组
 * @param {*} file 
 */
function getBase64 (file) {
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = function () {
    return reader.result
  }
}

// 上传组件
function Upload () {

}
// 展示上传的文件
function Render () {

}





// // function add(num1,num2){
// //     document.write(num1,num2);
// //     document.write("<br/>");
// //     return num1+num2;
// //     document.write("100");
// // }

// // value = add(1,2);
// // document.write(value) ;

// // $(document).write



// // upload1js

// function fileSelected()
// var file = document.getElementById('fileToUpload').files[0];
// if (file) {
//   var fileSize = 0;
//   if (file.size > 1024 * 1024)
//     fileSize = (Math.round(file.size * 100 / (1024 * 1024)) / 100).toString() + 'MB';
//   else
//     fileSize = (Math.round(file.size * 100 / 1024) / 100).toString() + 'KB';

//   document.getElementById('fileName').innerHTML = 'Name: ' + file.name;
//   document.getElementById('fileSize').innerHTML = 'Size: ' + fileSize;
//   document.getElementById('fileType').innerHTML = 'Type: ' + file.type;
// }


// function uploadFile() {
//   var fd = new FormData();
//   fd.append("fileToUpload", document.getElementById('fileToUpload').files[0]);
//   var xhr = new XMLHttpRequest();
//   xhr.upload.addEventListener("progress", uploadProgress, false);
//   xhr.addEventListener("load", uploadComplete, false);
//   xhr.addEventListener("error", uploadFailed, false);
//   xhr.addEventListener("abort", uploadCanceled, false);
//   xhr.open("POST", "UploadMinimal.aspx");
//   xhr.send(fd);
// }

// function uploadProgress(evt) {
//   if (evt.lengthComputable) {
//     var percentComplete = Math.round(evt.loaded * 100 / evt.total);
//     document.getElementById('progressNumber').innerHTML = percentComplete.toString() + '%';
//   }
//   else {
//     document.getElementById('progressNumber').innerHTML = '無法計算';
//   }
// }

// function uploadComplete(evt) {
//   alert(evt.target.responseText);
// }

// function uploadFailed(evt) {
//   alert("上傳檔案發生了錯誤");
// }

// function uploadCanceled(evt) {
//   alert("上傳被使用者取消或者瀏覽器斷開連線");
// }
// // ajaxtest
// $(function () {
//   $('#btn').on('click', function () {
//     var file = $('#ipt')[0].files
//     if (file.length <= 0) {
//       return alert('請上傳檔案')
//     }
//     var fd = new FormData()
//     fd.append('avatar', file[0])
//     $.ajax({
//       type: 'post', url: 'http://www.liulongbin.top:3006/api/upload/avatar',
//       contentType: false,
//       processData: false, data: fd, beforeSend: function () {
//         $('#loading').show()
//       }, complete: function () {
//         $('#loading').hide()
//       }, success: function (res) {
//         if (res.status !== 200) {
//           return alert(reg.msg)
//         }
//         $('#img').attr('src', 'http://www.liulongbin.top:3006' + res['url']).css('display', 'block')

//       }, xhr: function xhr() {
//         var xhr = new XMLHttpRequest()
//         xhr.upload.onprogress = function (e) {
//           if (e.lengthComputable) {
//             var percentComplete = Math.ceil((e.loaded / e.total) * 100)
//             $('#progress').css('width', percentComplete)
//             $('#progress').html(percentComplete + 'px')
//           }
//         }
//         xhr.upload.onload = function () {
//           $('#progress').removeClass('progress-bar progress-bar-striped').addClass('progress-bar progress-bar-success')
//         }
//         return xhr
//       }
//     })
//   })
// })
// // test1jq


// $(document).ready(function () {
//   $('#test_a').click(function () {
//     $('#test_b').toggle();
//   });
//   $('#test_c').text('000000');
// });
// //ajax test


// const endpoint = 'https://data.kcg.gov.tw/dataset/a98754a3-3446-4c9a-abfc-58dc49f2158c/resource/48d4dfc4-a4b2-44a5-bdec-70f9558cd25d/download/yopendata1070622opendatajson-1070622.json';
//   $.ajax({
//     type: "GET",
//     url: endpoint,
//     dataType: "json",
//     success: function (response) {
//       const charge = [];
//       charge.push(...response);
//       createDomElement(charge);
//     },
//     error: function (thrownError) {
//       console.log(thrownError);
//     }
//   });

//   function createDomElement(charge) {
//     const domElements = charge.map( place => {
//       return `
//     <li>
//       <p class="location">位置： ${ place.Location }</p>
//       <p class="address">地址：${ place.Address }</p>
//     </li>
//   `;
//     }).join("");

//     const chargeList = document.querySelector('.charge-list');
//     chargeList.innerHTML = domElements;
//   };

  // var fam = {
  //   name: 'fam',
  //   members:{
  //     a:'1',
  //     b:'2',
  //     c:'3'
  //   },
  // };
  // var member = fam.members;
  // member = {
  //   c:'4'
  // };
  // console.log(member, fam,members);.

  //  let data = {}
//  console.log('start');
//  axiox.get('https://randomuser.me/api/').then(function(responce){
//    data = responce;
//  });
//  console.log(data);
//  then(function(){
//    data = responce;
//  })


// axios.get('https://jsonplaceholder.typicode.com/posts/1')
//   .then((res) => {
//   console.log(res);
// });
  
  function functionA() {
    console.log('test');
  }
  functionA();
  var functionB = function() {
    console.log('test');
  }
  functionB();
  //  var person = {
  //    name:'peter'
  //  };
  //  var person2 = person;
  //  person2.name = 'jay';
  //  console.log(person, person2);

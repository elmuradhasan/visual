// course constructor
function Course(title,isname,image) {
  this.title = title;
  this.isname = isname;
   this.image = image;
}
// UI constructor
function UI() {

    }
UI.prototype.addcoursetolist = function (course) {
  
  var govde = document.querySelector('#govde');

  govde.innerHTML += `
     <tr>
     <td align='center'><img src="${course.image}" width="50px" height="50px"></td>
     <td align='center'>${course.title}</td>
     <td align='center'>${course.isname}</td>
     <td align='center'"><button class="delete">delete</button></td>
     </tr>
  `
}

UI.prototype.clearcontrols = function () {
  var title = document.getElementById('iscourse').value = '';
  var isname  =  document.getElementById('isname').value ='';
var image =   document.getElementById('image').value = '';
}
UI.prototype.showalert = function(mesagge) {
  var html = `<div class='borr'>
           ${mesagge}
  </div>`
  document.querySelector('#demo').innerHTML += html;
setTimeout(() => {
  document.querySelector('.borr').remove();
}, 2000);
}
UI.prototype.deleteitem = function (element) {
  if (element.classList.contains('delete')) {
    element.parentElement.parentElement.remove();
  }

}
const form = document.getElementById('sign');
const ui = new UI();
form.addEventListener('submit', function(e) {
     var title = document.getElementById('iscourse').value;
     var isname  =  document.getElementById('isname').value;
   var image =   document.getElementById('image').value;
// create new course object
const course = new Course(title,isname,image);
        
// create ui

if (image === '' || isname === '' || title === '') {
   ui.showalert('please comlate the form');
}
else{
// add course to list
ui.addcoursetolist(course);
ui.showalert('course has been added');
}
//clear controls
ui.clearcontrols();
      e.preventDefault();
});

var govde = document.querySelector('#govde');
govde.addEventListener('click',function (e) {
   ui.deleteitem(e.target);
   ui.showalert('course success deleted');
});




//  var xhr =  new XMLHttpRequest();
//  xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if(xhr.status === 200){
//         document.write(xhr.responseText);
//       }
//       else if(xhr.status === 404){
// document.write('404 not found')
//       }
//     }
//  }
//  xhr.open('GET','massiv.html',true);
//    xhr.send();
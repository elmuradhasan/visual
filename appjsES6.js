// course class 
class Course{
    constructor(title,isname,image){
        this.title = title;
        this.isname = isname;
         this.image = image;
        this.Courseid = Math.floor(Math.random()*10000);
         
    } 
}
// ui class
class UI{

    addcoursetolist(course){
        var govde = document.querySelector('#govde');

        govde.innerHTML += `
           <tr>
           <td align='center'><img src="${course.image}" width="50px" height="50px"></td>
           <td align='center'>${course.title}</td>
           <td align='center'>${course.isname}</td>
           <td align='center'"><button data-id="${course.Courseid}" class="delete">delete</button></td>
           </tr>
        `

    }
    clearcontrols(){
        var title = document.getElementById('iscourse').value ='';
        var isname  =  document.getElementById('isname').value ='';
      var image =   document.getElementById('image').value = '';
    }

    showalert(mesagge){
            var html = `<div class='borr'>
            ${mesagge}
    </div>`
    document.querySelector('#demo').innerHTML += html;
    setTimeout(() => {
    document.querySelector('.borr').remove();
    }, 2000);
    }
    deleteitem(element){
        if (element.classList.contains('delete')) {
            element.parentElement.parentElement.remove();
          }
    }
}

class Storage{
static getCourses(){
    let courses;
if (localStorage.getItem('courses') === null) {
    courses = [];
}
else{
    courses = JSON.parse(localStorage.getItem('courses'));
}
    return courses;
}

static displayCourse(){
    const courses = Storage.getCourses();
     courses.forEach(course => {
    const ui = new UI();
    ui.addcoursetolist(course);
});

}

static addCourse(course){
const courses = Storage.getCourses();
   courses.push(course);
 
   localStorage.setItem('courses',JSON.stringify(courses));
}
static deletelocal(element){
    if (element.classList.contains('delete')) {
        const id = element.getAttribute('data-id');
        let courses = Storage.getCourses();
        courses.forEach(iten => {
            if (iten.Courseid == id) {
           
            }
        });
    }
}


}
document.addEventListener('DOMContentLoaded',Storage.displayCourse);


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

// save to localstorage
Storage.addCourse(course);

//clear controls
ui.clearcontrols();
ui.showalert('course has been added');
}
      
 e.preventDefault();
});

var govde = document.querySelector('#govde');
govde.addEventListener('click',function (e) {
   ui.deleteitem(e.target);
  Storage.deletelocal(e.target);
   ui.showalert('course success deleted');
});
var text = document.querySelector("#text");
var json = document.querySelector("#json");
var api = document.querySelector("#api");
// var demo = document.querySelector('#demo');
// api.addEventListener("click", getapifile);
 //json.addEventListener("click", getjsonfile);

/*
text.addEventListener("click",gettextfile);
function gettextfile() {
    fetch('salam.txt').then(function (response) {
    return  (response.text())
    }).then(function (data) {
       demo.innerHTML = data;
    })
}
*/
// function getjsonfile() {
//     fetch('employes.json').then(function (response) {
//     return  (response.json())
//     }).then(function (articles) {
// let output = "<ul>"
// articles.forEach(article => {
//     output+=`<li>${article.firstname} ${article.lastname} ${article.age}</li>`

// });
//     output += "</ul>"
//     demo.innerHTML = output;

//     });
// }
/*
function getapifile() {
    fetch('https://jsonplaceholder.typicode.com/users').then(function (response) {
    return  response.json()
    }).then(function (articles) {
let output = "<ul>"
articles.forEach(article => {
    output+=`<li>${article.name} ${article.phone} ${article.email}</li>`

});
    output += "</ul>"
    demo.innerHTML = output;

    });
}
*/
// async her zaman geri promise gonderir
// async function fn() {
//     return 'hello By Hasano'
// }
// fn().then(res=>{
//     console.log(res);
// });

// function getcatagory() {
// return new Promise(resolve=>{
//     setTimeout(() => {
//         resolve('telefon')
//     }, 1000);
// });
// }

// function getproducts(catagory) {
//     return new Promise(resolve=>{
//         setTimeout(() => {
//             resolve(`5 products find in ${catagory}`);
//         }, 1000);
       
//     });
// }

// getcatagory()
// .then(getproducts)
// .then(res =>{
//     console.log(res);
// });


var iserror =false;
 function getcatagory() {
    return new Promise((resolve,reject)=>{
        if (!iserror) {
            setTimeout(() => {
                resolve('telefon')
            }, 1000);
        }
        else{
           reject('error var')
        }
 
    });
    }
    
    function getproducts(catagory) {
        return new Promise(resolve=>{
            setTimeout(() => {
                resolve(`5 products find in ${catagory}`);
            }, 1000);
           
        });
    }

    async function getproduct() {
try {
    let catagory = await getcatagory();
    let result  = await getproducts(catagory);
        console.log(result)
} catch (err) {
    console.log(err);
}
    } 
    getproduct();




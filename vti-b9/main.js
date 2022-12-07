// console.log('run 1');

// setTimeout(function() {
//     console.log('run2')
// },3000);

// console.log('run3');


// var a = 10;
// let p = new Promise((resolve, reject)=>{
//     if(a===10) {
//         resolve()
//     }
//     else {
//         reject()
//     }

// })
// // console.log(p)
// p
// .then((res)=> {
//     console.log(res)
// })
// .then((data)=> {
//     return
// })
// .catch(() => {
//     throw new Error('Loi')
// })

let a = 10;
let p = new Promise((resolve, reject)=>{
    setTimeout(function() {
            console.log(1);
            resolve();
        },1000);
    }
)
p.then(() => {
    new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log(2);
            resolve();
        },2000);
    })
})
.then(() => {
     new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log(3);
             resolve();
        },3000);
    })
})
// console.log(p);

// setTimeout(()=>{
//     document.querySelector('body').style.background = 'red';
//     setTimeout(()=>{
//         document.querySelector('body').style.background = 'blue'
//     },1000)
// },5000);

// let r = new Promise((resolve, reject)=>{
//     setTimeout(function() {
//         document.querySelector('body').style.background = 'red';
//         resolve();
//         },3000);
//     }
// )
// r.then(() => {
//     new Promise((resolve, reject) => {
//        setTimeout(function() {
//         document.querySelector('body').style.background = 'blue';
//             resolve();
//         },5000);
//     })})

// console.log(r);

function changeColor (color, timer){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            document.querySelector('p').style.color = color;
            resolve();
        },timer)
    }) 
}
changeColor('red',1000)
.then(()=>{
    changeColor('blue',2000)
})
.then(()=>{
    changeColor('green',3000)
})
.catch(()=>{
    throw new Error('error123')
})
//============================
// var data = fetch('https://63778b1681a568fc2518b0a4.mockapi.io/mobilephone')
// .then((res)=>{
//     console.log(res)
//     if(res.status !== 200) {
//         throw Error('error link')
//     }
//     return res.json();
// })
// .then((data)=>{
//     console.log(data)
// })
// ===
var data2 = {
    name: 'bently',
    image: 'hihi',
    factory: 'mec',
    type: 'sedan'
}
fetch('https://63778b1681a568fc2518b0a4.mockapi.io/mobilephone', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data2),
})
.then((response) => response.json())
.then((data) => {
    console.log('Success:', data);
  })
.catch((error) => {
    console.error('Error:', error);
  });

const name = "Jesse";
const age = 40;
export {name, age};
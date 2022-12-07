// EX 5: 
// Viết hàm chuyển định dạng chữ từ camel case sang lower case
// Test case: 
// console.log(uncamecase('helloWorld')); => hello world
// console.log(uncamecase('helloWorld','-')); => hello-world
// console.log(uncamecase('helloWorld','_')); =>  hello_world

function uncame_case(str, sepa) {
    if(typeof(sepa) === 'undefined') {
        sepa = ' '
    }
    var str = str.replace(/[A-Z]/, function(letter){
        return sepa + letter.toLowerCase();
    })
    console.log(str)
}
uncame_case('helloWorld','_');

// EX 6 
// Viết một hàm để nối một chuỗi n lần (mặc định là 1).
// Test case: 
// console.log(repeat('Ha!')); => "Ha!"
// console.log(repeat('Ha!',2)); => "Ha!Ha!"
// console.log(repeat('Ha!',3)); => "Ha!Ha!Ha!"

function repeat(str, number = 1) {
    let text = '';  
    if (typeof(number) !== 'number' || typeof(number) === 'string' || number < 1 ) {
        number = 1;
        text = str;
    }
    else{
        for (i=0;i<number;i++) {
        text += str;
    }}
    
    console.log(text);
}
// repeat("ha!",-1)

//Ex7 Viết hàm lấy ra phần tử đầu tiên của mảng nếu không nhập tham số ‘n’. Nếu nhập tham số ‘n’ sẽ lấy ra phần tử ở vị trí thứ n của mảng
// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));
// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []

function first(arr,count) {
    if (typeof(count) == "undefined") {
        count = 1;
    }
    if (count > arr.length) {
        count = arr.length;
    }
    if (count < 0) {
        count = 0;
    }
    return console.log(arr.slice(0,count));
    
}
// first([7, 9, 0, -2],2);
// first([7, 9, 0, -2],3);

// EX 10: 
// Viết hàm để lấy các số nguyên trong phạm vi (x, y).
// (1,9) => 2,3,4,5,6,7,8

// function getNum(x,y) {
//     let arr = [];
    
//     for (i=x+1; i<y; i++) {
//          arr.push(i);
//     }
//     console.log(arr);
// }
// getNum(1,9);

var range = function(start_num, end_num) { // de quy
    if (end_num - start_num === 2) {
        console.log(start_num);
        console.log(end_num);
        return [start_num + 1];
    }
    else {
        var list = range(start_num, end_num - 1); 
        console.log(end_num);
        console.log(list);
        list.push(end_num - 1);
        return list;
    }
}
// console.log(range(-10,9));
range(1,9);

const person = {
    name: 'test',
    age: 10,
    getName: function() {
        console.log(this.name, this.age)
    }
}
document.querySelector('button').onclick = person.getName.bind(person);

// EX 8: 
// Viết hàm nhận một số làm đầu vào và chèn dấu gạch ngang (-) giữa mỗi số chẵn
// 025468 => 0-254-6-8

function getName(str) {
    let arr = str.split("");
    for (i=0; i< str.length; i++) {
        if (arr[i] % 2 === 0 && arr[i+1] % 2 ===0) {
            arr[i] = arr[i] + '-';
        }
    }
    return arr.join("");
}
console.log(getName("025468"))
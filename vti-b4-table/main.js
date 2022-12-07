// function getValue() {
//     let str = document.getElementById("input").value;
//     let num = str.length;
//     let arr = str.split("");
//     console.log(arr);
//     // console.log(arr[0]);
//     for (i=0; i < num; i++) { 
//         console.log(arr[i]);
//     }
// }

// function toSentence() {
//     let str = document.getElementById("input").value;
//     let num = str.length;
//     let arr = str.split("");
//     console.log(arr);
//     // console.log(arr[0]);
//     for (i=1; i < num; i++) { 
//         x = arr[0];
//         let newstr = [];
//         newstr = arr[i];
//         console.log(newstr);
//     }
// }
// function toLower() {
//     let str = document.getElementById("input").value;
//     let str2 = str.toLowerCase();
//     console.log(str2);
// }
// function toUpper() {
//     let str = document.getElementById("input").value;
//     let str2 = str.toUpperCase();
//     console.log(str2);
//     document.getElementById("input").innerHTML = str2;
// }

var arr = [
    {id:1,name:'test1',classItem:'a1'},
    {id:2,name:'test2',classItem:'a1'},
    {id:3,name:'test3',classItem:'a1'},
    {id:4,name:'test4',classItem:'a1'},
];

localStorage.setItem('test', JSON.stringify(arr));
var data = JSON.parse(localStorage.getItem('test'));
console.log(data);


console.log(arr.length);
function renderTable() {
    var html ='';
    for (const item of arr) {
        html += `<tr>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.classItem}</td>
        <td>
            <button class="btn btn-danger mx-3" onclick='deleteItem(${item.id})'>Delete</button>
            <button class="btn btn-info mx-3" onclick='Edit(${item.id})'>Edit</button>
        </td>
        </tr>`;
}  
var tbody = document.querySelector('table tbody');
tbody.innerHTML = html;
}
renderTable()

// function deleteItem(id) {
//     arr.splice(id-1,1);
//     console.log(id)
//     renderTable()
// }

function deleteItem(id) {
    var index = arr.findIndex((item) => {
        return item.id === id
    });
    console.log(index);
    arr.splice(index,1);
    renderTable()
}
function addNew() {
    var ip = document.getElementsByTagName('input');
    console.log(ip);
    var newObj = {
        id:arr.length +1,
        name:ip[0].value,
        classItem:ip[1].value,
    }
    arr.push(newObj);
    ip[0].value = `` ;
    ip[1].value = `` ;
    renderTable()
}
// function editItem(id) {
//     console.log(id);
//     console.log(arr[id-1].name);
//     console.log(arr[id-1].class);
//     var ip = document.getElementsByTagName('input');
//     ip[0].value = arr[id-1].name;
//     ip[1].value = arr[id-1].class;
// }
function Edit(id){
    var ip = document.getElementsByTagName('input');
    ip[2].setAttribute('value',id);
    var itemEdit = null;
    for (const item of arr) {
        if(item.id === id){
            itemEdit = item;
            break;
        }
    }
    var {name, classItem} = itemEdit;
    ip[0].value = name;
    ip[1].value = classItem;  
}

var btn_update = document.getElementById('btn-update');

btn_update.onclick = function() {
    var ip = document.getElementsByTagName('input');
    var id = ip[2].value;
}
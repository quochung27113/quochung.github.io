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

// var arr = [
//     {id:1,name:'test1',classItem:'a1'},
//     {id:2,name:'test2',classItem:'a1'},
//     {id:3,name:'test3',classItem:'a1'},
//     {id:4,name:'test4',classItem:'a1'},
// ];

// localStorage.setItem('test', JSON.stringify(arr));
// var data = JSON.parse(localStorage.getItem('test'));


// console.log(arr.length);
// function renderTable() {
//     var html ='';
//     for (const item of arr) {
//         html += `<tr>
//         <td>${item.id}</td>
//         <td>${item.name}</td>
//         <td>${item.classItem}</td>
//         <td>
//             <button class="btn btn-danger mx-3" onclick='deleteItem(${item.id})'>Delete</button>
//             <button class="btn btn-info mx-3" onclick='Edit(${item.id})'>Edit</button>
//         </td>
//         </tr>`;
// }  
// var tbody = document.querySelector('table tbody');
// tbody.innerHTML = html;
// }
// renderTable()

// function deleteItem(id) {
//     arr.splice(id-1,1);
//     console.log(id)
//     renderTable()
// }

// function deleteItem(id) {
//     var index = arr.findIndex((item) => {
//         return item.id === id
//     });
//     console.log(index);
//     arr.splice(index,1);
//     renderTable()
// }
// function addNew() {
//     var ip = document.getElementsByTagName('input');
//     console.log(ip);
//     var newObj = {
//         id:arr.length +1,
//         name:ip[0].value,
//         classItem:ip[1].value,
//     }
//     arr.push(newObj);
//     ip[0].value = `` ;
//     ip[1].value = `` ;
//     renderTable()
// }

// function editItem(id) {
//     console.log(id);
//     console.log(arr[id-1].name);
//     console.log(arr[id-1].class);
//     var ip = document.getElementsByTagName('input');
//     ip[0].value = arr[id-1].name;
//     ip[1].value = arr[id-1].class;
// }


// function Edit(id){
//     var ip = document.getElementsByTagName('input');
//     ip[2].setAttribute('value',id);
//     var itemEdit = null;
//     for (const item of arr) {
//         if(item.id === id){
//             itemEdit = item;
//             break;
//         }
//     }
//     var {name, classItem} = itemEdit;
//     ip[0].value = name;
//     ip[1].value = classItem;  
// }

// var btn_update = document.getElementById('btn-update');

// btn_update.onclick = function() {
//     var ip = document.getElementsByTagName('input');
//     var id = ip[2].value;
// }


const urlRoot = 'https://63778b1681a568fc2518b0a4.mockapi.io/mobilephone';

function renderTable() {
    $.ajax({
        url: `${urlRoot}`,
        type: "GET",
        dataType: "json",
        success: function(res) {
            let arr = res;
            console.log(arr);
            var html ='';
            for (const item of arr) {
                html += `<tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.image}</td>
                <td>${item.factory}</td>
                <td>${item.type}</td>
            <td>
                <button class="btn btn-danger mx-3" onclick='deleteItem(${item.id})'>Delete</button>
                <button class="btn btn-info mx-3" onclick='Edit(${item.id})'>Edit</button>
            </td>
            </tr>`;
        }  
        var tbody = document.querySelector('table tbody');
        tbody.innerHTML = html;
        }
    }) 
}
renderTable()

function deleteItem(id) {
    $.ajax({
        url: `${urlRoot}/${id}`,
        type: 'DELETE',
        dataType: 'json',
        success: function(res) {
            console.log(res);
            // var index = res.findIndex((item) => {return item.id === id});
            // console.log(index);
            // arr.splice(index,1);
            renderTable()
        }
    })
        
}

function addNew() {
    var ip = document.getElementsByTagName('input');
    let newObj = {
        name:ip[0].value,
        image:ip[1].value,
        factory:ip[2].value,
        type:ip[3].value,
    };
    console.log(newObj);
    $.ajax({
        url: `${urlRoot}`,
        type: 'POST',
        dataType: 'json',
        data: newObj,
        success: function(res) {
            console.log(res);
            ip[0].value = `` ;
             ip[1].value = `` ;
             ip[2].value = `` ;
             ip[3].value = `` ;
            renderTable();
        }
    })
}

function Edit(id) {
    var ip = document.getElementsByTagName('input');
        // ip[2].setAttribute('value',id);
        $.ajax({
            url: `${urlRoot}/${id}`,
            type: "GET",
            dataType: "json",
            success: function(res) {
                console.log(res);
                // var itemEdit = null;

            // for (const item of res) {
            //     if(item.id === id){
            //         itemEdit = item;
            //      break;
            //     }   
            // }    
        // var {name, image, factory, type} = itemEdit;
            ip[0].value = name;
            ip[1].value = image;  
            ip[2].value = factory;  
            ip[3].value = type;  
            renderTable();
        
        }});
        newObj2 = {
            name:ip[0].value,
            image:ip[1].value,
            factory:ip[2].value,
            type:ip[3].value,
        };
    $.ajax({
        url: `${urlRoot}/9`,
        type: "PUT",
        dataType: "json",
        data: newObj2,
        success: function(res) {
        console.log(res);
    }
    })
}


// $('#test').click(add);
// $('#test').click(deleteItem);
// $('#test').click(edit);


// function deleteItem(id) {
//     $.ajax({
//         url: `${urlRoot}/14`,
//         type: 'DELETE',
//         dataType: 'json',
//         success: function(res) {
//             console.log(res);
//         }
//     })
// }

// function getID() {
//     $.ajax({
//         url: `${urlRoot}/9`,
//          type: "GET",
//         dataType: "json",
//         success: function(res) {
//         console.log(res);
//     }
//     })
// }

// function edit() {
//     $.ajax({
//         url: `${urlRoot}/9`,
//         type: "PUT",
//         dataType: "json",
//         data: {
//             nameProduct:"product 999",
//             img:"anh so 9",
//             price:"90000",
//             link:"link 9",
//             id: 9,
//         },
//         success: function(res) {
//         console.log(res);
//     }
//     })
// }
// EX1:
// Viết hàm chuyển một chuỗi số thành 1 mảng. VD: chuyenso("123") => [1,2,3]
// function myToArr(arr) {
//     let x = Array.from(arr);
//     console.log(x);
// } 
// myToArr("123");
const value = str => [...`${str}`].map(item => parseInt(item));
console.log(value('123'));

// EX2:
// Viết hàm để lọc ra các giá trị được chỉ định từ một mảng cho sẵn. Trả về mảng ban đầu không có các giá trị được lọc.
// VD: let arr = [1, 2, 3, 1, 2, 3]; console.log (filter(arr, 1, 3)); => [2,2]
let arr = [1, 2, 3, 1, 2, 3];
const filter = (arr, ...rest) => {
    return arr.filter((item) => !rest.includes(item));
}
console.log(filter(arr, 1, 3));

// EX 3:
// Viết hàm để lấy mọi phần tử thứ n trong một mảng đã cho.
// VD: console.log(func([1, 2, 3, 4, 5, 6], 1)); => [1,2,3,4,5,6]
//         console.log(every_nth([1, 2, 3, 4, 5, 6], 3)); => [3,6]
const value2 = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1 );

console.log(value2([5,1,6,7,10,11,44],3)); //[6, 11]


// ex4
// Viết hàm để lọc ra các giá trị không phải là duy nhất trong một mảng.
// VD: console.log(filter_arr([1, 2, 2, 3, 4, 4, 5])) => [1,3,5]
const value3 = (arr3) => arr3.filter((i) => arr3.indexOf(i) === arr3.lastIndexOf(i));
console.log(value3([1, 2, 2, 3, 4, 4, 5]));


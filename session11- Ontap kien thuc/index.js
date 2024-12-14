// lấy ô input từ HTML (DOM Element)
let input = document.getElementById("fullname");
console.log("ô input ",input);

// lấy button
let btn = document.getElementById("btn");
// btn.addEventListener('click', function(){
//     // hien thi gia tri cua noi dung trong ô input
//     let content = input.value ; // lấy ra giá trị của ô input
//     console.log("content=>>> ",content);
    
// })

input.addEventListener('keypress',function(){
    let content = input.value ; // lấy ra giá trị của ô input
    console.log("content=>>> ",content);
})

if(1){
    // nếu đúng thì thực thi khối lệnh
    console.log("if có điều kiện là đúng : truthy");
    
}

let array = new Array(6);
array.push(100);
// array[0] = 100;
let array1 = [];
array1[100] = 100;
// array1.push(100);
console.log("kiểu dữ liệu empty =>>",typeof array[1]);

console.log("array =>>>", array);

console.log("array1 =>>>", array1);
console.log("độ dài mảng =>>>", array1.length);

// ví dụ về phương thưc khác xử lí các bài toán đặc trưng:

// biến đổi các số trong mảng array1
// thành bình phương của chính nó
array1 = [1,2,3,4,5,6];
let array2 = [];

// for (let i = 0; i < array1.length;i++){
//     array2[i] = array1[i] * array1[i];
// }

array2 = array1.map(function(index,number){
    return number*number;
})


// dùng Number() đề chuyển kiểu dữ liệu về number 
// dung Number.isInteger() để kiểm tra xem có phải số nguyên hay ko

// giải thuật : 
// b1 : lặp được qua lần lượt các phần tử mảng : for 
// kiểm tra có phải số hay ko : ép về số (Number)
// kiểm tra có phải số nguyên hay ko :(isInteger(number))
// b2 : tạo 1 biến cờ : flag = true;
// khi mà tìm đc 1 số là integer => dổi hướng cờ => false

// Bài toán  :
// 1 : Khai báo 1 mảng rỗng
// 2 : Yêu cầu người dùng nhập vào 1 số n (số lượng phần tử của mảng) và người dùng nhập lần lượt các giá trị cho từng phần tử mảng
// 3 : hiển thị lần lượt các giá trị mảng theo 1 hàng ngàng : 1 2 3 4 5 (tư duy)

//chưa bài









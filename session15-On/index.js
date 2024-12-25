// DOM 

// truy xuất phần tử
// truy xuất theo ID, CLass, Tagname
let box = document.getElementById("box"); // lấy về duy nhất 1 đối tượng HTMLElement
let h1Array = document.getElementsByClassName("title"); // HTMLCollection - danh sách
let pArray = document.getElementsByTagName("p"); // HTMLCollection - danh sách

// h1Array.forEach(function(element){
//     console.log(element);
    
// })

console.log("box", box);
console.log("h1Array", h1Array);
console.log("pArray trước", pArray);


console.log("pArray sau", pArray);
// truy xuất theo bộ chọn CSS
let boxNode = document.querySelector("#box") ; // Node
let boxList = document.querySelectorAll("p"); //nodeList
boxList.forEach(function(element){
    console.log(element); 
})



console.log("boxNode", boxNode);
console.log("boxList trước", boxList);

let newP = document.createElement("p");
newP.innerText = "Hunghx";
document.body.appendChild(newP);

console.log("boxList sau", boxList);


// sự kiện 
// chuột 
// bàn phím
// con lăn

// thông qua sự kiện thao tác của người dùng, chúng ta sử dụng 
// function trong JS để xây dựng, thiết kế tính năng cho ứng dung web

// lấy đối tượng thực hiện event 
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
// bắt và xử lý sự kiện trên đối tượng
// cách 1 : bắt sự kiện bên HTML và khai báo hàm xử lí tương ứng trong js

function handleBtn1(){
    console.log('Hello world!');
}

// function handleBtn2(){
//     console.log("Goodbye world!"); 
// }

// cách 2 : bắt sự kiện bằng event listener
// btn2.addEventListener('click', function(){
//     console.log("Goodbye world!"); 
// });

// cách 3 : sử dụng thuộc tính của đối tượng HTML element
btn2.onclick = function(){
    console.log("Goodbye world!");  // thay đổi cú pháp của thuộc tính onclick
}


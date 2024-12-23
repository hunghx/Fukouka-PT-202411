
// object document đại diện cho cây thư mục trong js

let element1 = document.getElementById('root'); // truy xuât thông qua id của thẻ html
console.log("element: " , element1); // typescript = javascript + type
let element2 = document.getElementsByTagName("li"); // danh sách element : HTML COLECCTION
console.log("elements: ", element2);
let element3 = document.getElementsByClassName('item');
console.log("elements: ", element3);

let node2 = document.querySelector("ul > .item");
let node1 = document.querySelectorAll("ul > .item"); //sử dụng bộ chọn CSS // danh sách
 
// element2.forEach(function(el) {
//     console.log("element: ", el);
// })

node1.forEach(function(el) {
    console.log("node: ", el);
})

console.log("node2: ", node2);

// chia các nhóm thẻ : hx, p, span, li, a, td, th, ... là các thẻ định nghĩa nội dung văn bản
// lấy ra nội dung thẻ:
let li = element2[0];
console.log("div", element1); // HTMLElement
console.log("textContent ", element1.textContent); // lấy nội dung văn bản có chứa css
console.log("text ", element1.innerText); // chỉ lấy nội dung nhwugn ko css
console.log("html ", element1.innerHTML); // lấy ra html dưới dạng text


// thay đổi CSS  của 1 phần 
li.style.fontSize = "50px";
li.style.color = "red";
Object.assign(li.style,{
    "color": "black",
    "background-color": "blue"
})

// DOM event : sự kiện trên dom

let input = document.getElementById("name");
input.addEventListener("input",function(e){
    console.log(input.value);
})

let form = document.getElementById("form");
form.addEventListener("submit",function(event){
    e.preventDefault(); // tạm dừng submit form
    console.log("submit form");
})

let btn = document.querySelector("button");
btn.addEventListener("mousemove", function(){
    alert("xin chao");
})


 let liParent = li.parentNode.parentNode;
 console.log("cha ",liParent);

 // tim hiểu các thuộc khác 

 // các thuộc tinh đăc trưng của thẻ : id, class, name ,
 // thẻ đặc biệt : a : href , img : src , form :  action và method

 let img = document.querySelector('img');
 img.src = "images/abc.jpg";
 
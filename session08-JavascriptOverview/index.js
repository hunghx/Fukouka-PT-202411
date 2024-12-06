
// window.confirm('Are you sure about that?');
//  KHAI BÁO BIẾN
// let a ;
const PI = 3.14; // khai báo hằng : các biến ko thể thay đổi giá trị và phải gán giá trị khi khai báo
let c;
c = 10; // gán c = 10;
let fullName = "Hồ Xuân Hùng";
let address = `Hồ Chí Minh City`;
let city = 'Hà Nội';
let check = false;
// var c;  // khai báo c;
// hiển thi ở màn hình console
city = 10;
// console.log("City = ",city);

// kiểm tra kiểu dữ liệu : toán tử typeof
// console.log("Kiểu dữ liệu của c :", typeof c);
// console.log("Kiểu dữ liệu của name:", typeof fullName);
// console.log("Kiểu dữ liệu của check :", typeof check);
let a = 15;
let b = "1";
// console.log("logic : ", a != b);
let condition1 = a%5==0; // a có chia hết cho 5 hay ko ?
let condition2 = a%3==0; // a có chia hết cho 3 hay ko ?

// a chia hết cho 3 và 5;
let condition3 = condition1 || condition2;
//console.log("condition3 : ",condition3); // true
// ví dụ về phép toán cơ bản

// coi c là số dư của a chia cho b : giả sử a chia b có phần nguyên là d thì a = b*d + c ; 100 = 200 * 0  + 100  
a = 100.234; // số thực sử dụng dấu . đển ngăn cách giữa phần nguyen và phần thấp phân
b = 200;
// tăng giảm giá trị 
// a = a + 1;
// a += 1; // cú pháp viết gọn của a = a + 1;
//a--; // toán tử ++ và -- là 2 toán tử dùng để tăng giảm giá trị của 1 biến đi 1 đơn vị
// b -= 10;

// console.log("Tổng của 2 số a + b = ", (a++) +b); // ? = 301 or 300 
// console.log("Giá trị của biến a = ", a);// 101

// bài toán ứng dụng :
// Khai báo biến lưu trữ các thông tin cá nhân sau : Họ tên, Ngày sinh, Quê quán, Giới tính 
// , số điện thoại, Cân nặng, Chiều cao
// Tính chỉ số BMI của cơ thể biết : BMI = cân nặng(kg) / chiều cao bình phương (mét)
// hiển thị thông tin cá nhận vừa khai báo , mỗi thông tin 1 dòng log 

let familyName = "Hồ Xuân Hùng";
let dateOfBirth = "11/11/2009";
let bornIn = "HCM city";
let sex = true;
let phoneNumber = "0987654321";
let weight = 75;
let height = 1.80;

// Tính BMI
let BMI = weight / (height*height);
// in ra các thông tin 
console.log("Họ tên : ",familyName);
console.log("Ngày sinh : ",dateOfBirth);
console.log("Quê quán : ",bornIn);
console.log("Số điện thoại: ",phoneNumber);
console.log("Giới tính : ",sex?"Nam":"Nữ"); 
// toán tử 3 ngôi : condition ? (giá trị nếu điều kiện true): (giá trị khi điều kiện nếu false)
console.log(b%2==0?"B chia hết cho 2":"B ko chia hết cho 2");

console.warn("Cân nặng : ",weight);
console.error("Chiều cao : ",height);
console.log("Chỉ số BMI  : ",BMI);
//  các cú pháp toán học đc hỗ trợ trong js : Math
console.log(Math.sign(100));

// WIn dow có các hàm dựng sẵn tạo ra hộp thoại : alert, confirm , prompt 

// let answer = prompt('Hãy nhập vào tên của bạn?');
// console.log("Answer : " + answer);


// Nối chuối : ghép 2 chuỗi lại với nhau : dùng phép toán +, hoặc dùng template literals

// alert(`Họ tên : ${familyName} \nNgày sinh : ${dateOfBirth}\nGiới tính: ${sex?"Nam":"Nữ"}`);
// let box = document.getElementById('box');
// sự kiện ấn vào 
// box.addEventListener('',function(){
//     box.innerText = "Hello JavaScript";
//     box.style.color = "red";
//     box.style.textTransform = "uppercase";
// })
//  thay đổi html

// box.innerText = "Hello JavaScript";

// thay đổi css
 a = 6;
let result = ++a + a + a++ + ++a + a;
console.log("result: " + result);














// let x = undefined; // undefined
// let y = null; 

//  let num = parseInt("hunghx"); // not a number / NaN
//  console.log("Number", num);

//  // IF
//  if(true){ // truthy - thông thường khối 
//     // lệnh điều kiện thường là các biểu thức trả về boolean
//     console.log(" Khối lệnh IF được thực thi");
//  }

//  // IF ... ELSE

// if(false){
//     // khối lệnh thực thi nếu điều kiện đúng
//     console.log("điều kiện đúng");
// }else{
//     // khối lệnh thực thi nếu điều kiện sai
//     console.log("điều kiện sai");
// }

// // biến thể của IF ELSE 
// // IF ELSE lồng nhau
// if(true){
//     if(false){

//     }else{

//     }
// }else{
//     if(false){

//     }else{

//     }
// }
// let dtb = 7.5;
// // IF ELSE bậc thang
// if(dtb < 5){
//     console.log("trung bình yếu");
// }else if(dtb < 7.5){
//     console.log("Khá");
// }else if(dtb < 8.5){
//     console.log("giỏi");
// }else{
//     console.log("xuất sắc");
// }
// let value = prompt("hãy nhap vao 1 chuỗi");
// // Switch case : có thể nhận các giá trị như sau : number , string, bool 
// switch(value){
//     case "Một": // trường hợp
//         console.log("Đây là phát âm của số 1");
//         break;
//     case "Hai": 
//         console.log("Đây là phát âm của số 2");
//         break; 
//     default:
//         // ko thỏa mãn bất cứ case nào
//         console.log("không tìm thấy giá trị này");
//         break;  
// }

// Thoát khỏi switch


// Câu lệnh Loop : Vòng lặp 

// Vòng lặp For i
for(let i = 0; i<10; i++){
    // thực thi câu lệnh console log 10 lần
    console.log("Giá trị của i = ", i);
}

 // tính tổng của 100 số nguyên dương đầu tiên ko dùng cú pháp toán học;
let tong = 0; // biến tích lũy
 for(let i = 1; i<= 100 ; i++){
    tong = tong + i; // tong += i;
 }

 console.log("Tong: " + tong);
 
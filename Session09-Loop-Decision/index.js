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
for (let i = 0; i < 10; i++) {
    // thực thi câu lệnh console log 10 lần
    console.log("Giá trị của i = ", i);
}

// tính tổng của 100 số nguyên dương đầu tiên ko dùng cú pháp toán học;
let tong = 0; // biến tích lũy
for (let i = 100; i >= 0; i--) {
    tong = tong + i; // tong += i;
}


console.log("Tong: ", tong);
// bài tập ứng dụng , in ra các số chia hết cho 7  từ 1 -> 1000


// Vòng lặp while 
// hãy cho người dùng nhập vào 1 số cho 
// tới khi nào người dùng nhập số 0 thì dừng chương trình
let number = -1;
// while (number != 0) {
//     number = +prompt("hãy nhập 1 số");
// }

// Vòng lặp do...while
// do{
//     // khối lệnh
//     number = +prompt("hãy nhập 1 số");
// }while(number != 0);


// câu lệnh nhảy: break, continue , return (hàm / function)

// nhảy tới vòng lặp tiếp theo 
// nhảy ra khỏi vòng lặp
// in các số < 100 và ko chia hết cho 5
// in ra số chia hết cho 5 đầu tiên  mà có 4 chữ số khác 1000;
// for(let i  = 1;i<100; i++){
//     if(i%5 ==0){
//         continue;
//     }
//     console.log(i);
//     console.log("Vong lap thu i = ",i)
// }
// let so = 1001;
// do{
//     if(so %5 ==0){
//         console.log(so);
//         break;
//     }
// so++;
// }while(true);

// Ví dụ về vòng lặp vô hạn 
// while(true){
//     console.log("Vòng lặp vô hạn");
//     // break; // để dừng vòng lặp
// }

// tạo menu cho chương trình chạy mãi mãi 
// tạo ra menu như sau :
/*
--------------MENU---------------
1. In ra tổng các số chính phương từ 1 -> 100
2. Kiểm tra 1 số nhập vào có phải số nguyên tố hay ko
3. Kiểm tra 1 số có phải số hoàn hảo hay ko
4. Thoát
*/

// Cách làm :
// while (true) {
//     let menu = "--------------------MENU---------------------\n" +
//         "1. In ra tổng các số chính phương từ 1 -> 100\n" + sử dụng while()
//         "2. Kiểm tra 1 số nhập vào có phải số nguyên tố hay ko\n" + for 
//         "3. Kiểm tra 1 số có phải số hoàn hảo hay ko\n" +  // for  , ví dụ số 6 = 3 + 2 + 1, 28 = 14 + 7 + 4 + 2 + 1;
//         "4. Thoát"
//     let choice = prompt(menu);
//     switch (choice) {
//         case "1":
//             alert("Đang thực hiện chức năng 1");
//             break;
//         case "2":
//             alert("Đang thực hiện chức năng 2");
//             break;
//         case "3":
//             alert("Đang thực hiện chức năng 3");
//             break;
//         case "4":
//             break;
//         default:
//             alert("Please enter a valid choice");
//             break;

//     }
//     if(choice == "4"){
//         break;
//     }
// }
let n = 10;
let tich = 1;
for(let i = 1; i<= 10  ; i++){
    tich = tich*i; // tích lũy phép nhân
}

console.log("Giai thừa của ", n, " là: ", tich);

console.log(1*2*3*4*5*6*7*8*9*10);

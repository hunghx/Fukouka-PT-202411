// khai báo mảng 
let array = [];
let n = +prompt('Nhập số lượng phần tử của mảng ');

// cho người dùng nhập lần lượt các giá trị 
for(let i = 0; i < 5 ;i++){
    let number = +prompt(`Nhập phần tử thứ ${i + 1}:`);
    array.push(number);
}

// in ra các phàn tử theo hàng ngang 
// 1 2 3 4 5  
// console.log(array.join(' '));// chuyển các phần tử trong 1 mảng thành chuỗi 

let string = "";
 // duyệt mảng và nối chuỗi
for(let i = 0; i < array.length ;i++){
    string += `${array[i]} `;
}

console.log(string);

// Nâng cao : nền tảng học Object
// tạo menu quản lí danh sách sinh viên : 
// 1. thêm sinh viên 
// 2. Sửa thông tin sinh viên
// 3. Xóa sinh viên
// 4. Hiển thị danh sách sinh viên 
// 5. thoát

// 1 sinh viên : Tên , Mã SV, ngày sinh, sdt , email => 1  mảng có 5 phần tử
// nhiều sinh viên : là 1 mảng các sinh viên 
let students = [
    ["Nguyen Van A", "S001", "11/11/2000","098767536","h@gmail.com"],
    ["Nguyen Van B", "S002", "11/11/2000","098767536","h@gmail.com"]
];



// cách tạo 1 đối tượng 
// ví dụ học sinh : Mã học sinh, tên , ngày sinh, số điện thoại
// phương thức : học, làm bài tập, điểm danh đầu giờ
let obj = {
    // các thuộc tính 
    "điểm toán" : 10,
    id : "SV001",
    name : "Hồ Xuân Hùng",
    birthDay : "11/11/2009",
    phoneNumber : "0987654321",
    // các phương thức
    learn : function(){
        console.log(this.name + " đang học");
    },
    doHomeWork : function(){
        console.log(this.name + " đang làm bài tập");
    }
}
// lớp Object
Object
// cách tạo class 
// tạo bằng function 
function Student(_id, _name, _birthday,_phoneNumber){
    this.id = _id,
    this.name = _name,
    this.birthDay = _birthday,
    this.phoneNumber = _phoneNumber,
    this.learn = function(){
        console.log(this.name + " đang học");
    },
    this.doHomeWork = function(){
        console.log(this.name + " đang làm bài tập");
    },
    this.toString = function(){
        return `Student[id=${this.id}, name=${this.name}, birthDay=${this.birthDay}, phoneNumber=${this.phoneNumber}]`;
    } 
}
// ES6 : từ khóa class - OOP 
class Student1{
    constructor(_id, _name, _birthday,_phoneNumber){ // hàm khởi tạo
        this.id = _id,
        this.name = _name,
        this.birthDay = _birthday,
        this.phoneNumber = _phoneNumber,
        this.learn = function(){
            console.log(this.name + " đang học");
        },
        this.doHomeWork = function(){
            console.log(this.name + " đang làm bài tập");
        },
        this.toString = function(){
            return `Student[id=${this.id}, name=${this.name}, birthDay=${this.birthDay}, phoneNumber=${this.phoneNumber}]`;
        } 
    }
}


// tạo đối tượng từ lớp : từ khóa new 
let obj1 = new Student("SV002","Nguyễn Văn A","11/11/2019","0974836534");
let obj2 = new Student1("SV003","Nguyễn Văn B","11/11/2018","0974836534");


// gọi phương thức và thuộc tính của đối tượng

console.log("name obj :",obj.name);
console.log("name :",obj1.name);
console.log("name :",obj2.name);

obj.name= "Nguyễn Nhật Linh";
console.log("name obj :",obj.name);

obj.sex = true;
console.log("sex obj :",obj.sex);
console.log("obj :",obj);
console.log("diem toan obj :",obj["điểm toán"]);


console.log(obj1.toString()); // ? có chạy ko


// bài toán cụ thể : quản lí danh sách sinh viên 
let arrStudents = [];

arrStudents.push(obj);

arrStudents.push(obj1);

arrStudents.push(obj2);

console.log("arrStudents: " + arrStudents);



// xây dựng lại bài quản lí sinh viên với menu chức năng sau :
// 1 đối tượng sinh viên gồm có 4 thông tin : id, name, phone, sex

// 1. Hiển thị danh sách sinh viên gồm các thông tin : mã sv, tên, số điện thoại
// 2. thêm mới sinh viên : nhập vào 4 thông tin và thêm vào mảng
// 3. Chỉnh sửa thông tin sinh viên : nhập vào id sv cần sửa và chỉ cho phép sửa các thông tin ngoại trừ id
// 4. Xóa sinh viên : nhập vào id của SV cần xóa và thực hiện xóa sinh viên đó
// 5. thoát





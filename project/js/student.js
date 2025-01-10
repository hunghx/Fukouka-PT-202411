let courseList = JSON.parse(localStorage.getItem("arrayCourses"))||[]; // đọc từ local về
console.log("array", courseList);

let studentsList = [];// [...1,2,3,4 , 5,6,7,8 ]
courseList.forEach(function(course){
    let classArray = course.arrayClass || [];
    classArray.forEach(function(classes){
        // them arrayStudent vao mảng studentList 
        // cú pháp destructoring của ES6
        studentsList = [...studentsList,...classes.arrayStudent]
    })
})

// Hàm hiển thị danh sách sinh viên
function showListStudent(students) {
    let html = "";
    students.forEach(function (student) {
        html += `<tr>
                    <td>${student.studentId}</td>
                    <td>${student.studentName}</td>
                    <td>${student.year}</td>
                    <td>${student.address}</td>
                    <td>${student.email}</td>
                    <td>${student.phone}</td>
                    <td>${student.sex ? "Nam" : "Nữ"}</td>
                    <td>${student.status}</td>
                                    
                    <td>
                        <button type="button" class="btn btn-warning">Edit</button>
                    </td>
                    <td>
                        <button type="button" class="btn btn-danger">Delete</button>
                        </td>
                    </tr>`;
    })
    // chèn vào thẻ tbody của table
    document.getElementById("tbody").innerHTML = html;
}

showListStudent(studentsList); // hiển thị lần đầu


// tạo hàm tiemf kiếm theo tên sinh viên
function searchByName(){
    // lấy ra từ khóa người dùng nhập vào ô input
    let keyword = document.getElementById("keyword").value;
    // lọc những sinh viên có tên chưa từ khóa
    let searchList = studentsList.filter(function(stu){
        return stu.studentName.toLowerCase().includes(keyword.toLowerCase());
    })
    showListStudent(searchList); // hiển thị kết quả tìm kiếm
}
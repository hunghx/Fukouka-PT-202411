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

// showListStudent(studentsList); // hiển thị lần đầu


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

// sắp xếp : kiểu cơ bản, number(>,<), string(localCompare)
// sắp xếp đối tượng : theo trường nào, theo thuộc tính nào
// Sắp xếp giảm dần theo năm sinh

// cách sắp xếp trong array : array.sort(function(a,b){return number})
function sortStudent(property , by){
    console.log("array ", studentsList);
    console.log(property , by);

    if(property == "year"){
        if(by == "DESC"){ // asending : tăng dần / descending : giảm dần
            // Giảm dần
            studentsList.sort((a,b)=> b.year - a.year);
        }else{
            // Tăng dần
            studentsList.sort((a,b)=>a.year - b.year);
        }
    }else  if(property == "name"){
        if(by == "DESC"){ // asending : tăng dần / descending : giảm dần
            // Giảm dần
            studentsList.sort((a,b)=> b.studentName.localeCompare(a.studentName));
        }else{
            // Tăng dần
            studentsList.sort((a,b)=> a.studentName.localeCompare(b.studentName));
        }
    }
    // hiển thị lại danh sách sau khi sắp xếp
    showListStudent(studentsList);
}

// Phân trang : dùng để tối ưu các trang web cần hiển thị nhiều thông tin 
// 1 trang nó bao gồm : số trang (vị trí của trang : 1), số phần tử trên 1 trang (kích thước : 5/10/15)

// để lọc các phần tử theo số trang và kích thước :
// Ví dụ : 100 sinh viên :
// lấy ra các sinh viên ở trang thứ 1 , lấy 10 phần tử (0-> 9)
// lấy ra các sinh viên ở trang thứ 2 , lấy 10 phần tử (10-> 19)
// lấy ra các sinh viên ở trang thứ n , lấy 10 phần tử ((n-1)*10 -> n*10 - 1 )

// hiển thị tổng số trang
// sử dụng Math.ceil() để làm tròn lên khi tính tông số trang 


function paginationStudentList(page, size){
    console.log("page", page);
    console.log("size", size);
    
    // lấy ra danh sách sinh viên thuộc trang đó 
    let start = (page-1)*size;
    let end = page*size;
    let studentPage = studentsList.slice(start, end);
    // if(end > studentsList.length-1){
    //     end = studentsList.length-1;
    // }
    // for(let i = start; i<= end; i++ ){
    //     studentPage.push(studentsList[i]);
    // }
//     <li class="page-item disabled">
//     <a class="page-link">Previous</a>
// </li>
// <li class="page-item active"><a class="page-link" href="#">1</a></li>
// <li class="page-item"><a class="page-link" href="#">2</a></li>
// <li class="page-item"><a class="page-link" href="#">3</a></li>
// <li class="page-item">
//     <a class="page-link" href="#">Next</a>
// </li>
    let totalPage = Math.ceil(studentsList.length/size);
    // hiển thi chân phần phân trang
    let html = ` <li class="page-item ${page == 1?'disabled':''}">
                    <a class="page-link" onclick="paginationStudentList(${page-1},${size})">Previous</a>
                </li>`;
    for(let i = 1; i<= totalPage; i++){
        html += `<li class="page-item ${i == page?'active':''}"><a class="page-link" onclick="paginationStudentList(${i},${size})" href="#">${i}</a></li>`
    }

    html+=` <li class="page-item ${page == totalPage?'disabled':''}">
                 <a class="page-link" href="#" onclick="paginationStudentList(${page+1},${size})">Next</a>
            </li>`
    document.getElementById("pagination").innerHTML = html;
    showListStudent(studentPage);
}

// Phân trang lần đầu
paginationStudentList(1,4);
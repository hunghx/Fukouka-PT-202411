let students = [
    { id: "SV001", name: "Nguyễn Văn A", phone: "0893846534", sex: true },
    { id: "SV002", name: "Nguyễn Văn B", phone: "0893435535", sex: false },
    { id: "SV003", name: "Nguyễn Văn C", phone: "0893845636", sex: true },
];

document.getElementById("formAdd").style.display = "none";// visibility
function showForm(){
    document.getElementById("formAdd").style.display = "block";
}
function deleteStudent(idDelete) {
    if (confirm("Are you sure want to delete this student")) {
        // xóa theo id nhập vào 
        let newStudents = [];
        for (let i = 0; i < students.length; i++) {
            if (students[i].id !== idDelete) {
                newStudents.push(students[i]);
            }
        }
        students = newStudents;
        showListStudent();
    }
}
let isAdd = true;

let form = document.getElementById("formAdd");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let male = document.getElementById("male");
    let sex = male.checked?true:false;
    if(isAdd){
        // tạo 1 dối tượng học sinh
        let newStudent = { id, name, phone, sex };
        // thêm sinh viên vào mảng
        students.push(newStudent);
        document.getElementById("id").value = "";
        document.getElementById("name").value = "";
        document.getElementById("phone").value = "";
    }else{
        // cập nhật
        students.forEach(function(stu){
            if(stu.id == id){
                stu.name = name;
                stu.phone = phone;
                stu.sex = sex;
            }
            }
        )
        isAdd = true;
        document.getElementById("btn").innerText = "Add";
        document.getElementById("id").value = "";
        document.getElementById("id").readOnly = false;
        document.getElementById("name").value = "";
        document.getElementById("phone").value = "";
    } 
    showListStudent();
})


function editStudent(idEdit) {
    //hiển thị thông tin cũ ở form
    students.forEach(function(stu){
        if(stu.id == idEdit){
            // hiển thi ra form 
            document.getElementById("id").value = stu.id;
            document.getElementById("id").readOnly = true;
            document.getElementById("name").value = stu.name;
            document.getElementById("phone").value = stu.phone;
            if(stu.sex){
                document.getElementById("male").checked = true;
            }else{
                document.getElementById("female").checked = true;
            }

            document.getElementById("btn").innerText = "Update";
            isAdd = false;
            return;
        }

    })
}


function showListStudent() {
    let tbody = document.getElementById("students");
    let html = "";
    students.forEach(function (stu) {
        html += `<tr>
            <th scope="row">${stu.id}</th>
            <td>${stu.name}</td>
            <td>${stu.phone}</td>
            <td>${stu.sex ? "nam" : "nữ"}</td>
            <td><button type="button" onclick="editStudent('${stu.id}')" class="btn btn-warning">Edit</button></td>
            <td><button onclick="deleteStudent('${stu.id}')" type="button" class="btn btn-danger">Delete</button></td>
          </tr>`;
    })

    tbody.innerHTML = html;

}

showListStudent();

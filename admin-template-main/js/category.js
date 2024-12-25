// quan lý danh mục của sản phẩm bao gồm các thông tin : id, name, description, createdAt

// tạo dữ liệu mẫu 
let categories = [
    { id: 1, name: "Tivi", description: "Mô tả về ti vi", createdAt: "25/12/2025" },
    { id: 2, name: "Điện thoại", description: "Mô tả về điện thoại", createdAt: "24/12/2025" },
    { id: 3, name: "Máy tính", description: "Mô tả về máy tính", createdAt: "20/12/2025" }
];


// 4 tính năng cơ bản và 1 tìm kiếm
// hiển thị danh sách danh mục 
function showListCategories(array) {
    // lấy ra thẻ tbody 
    let tbody = document.getElementById("categories");
    let html = "";
    // for(let i=0; i< categories.length; i++){
    //     let element = categories[i];
    // }
    array.forEach(function (element) {
        html += `<tr>
                        <td>${element.id}</td>
                        <td>${element.name}</td>
                        <td>
                        ${element.description}
                        </td>
                        <td>${element.createdAt}</td>
                        <td>
                            <button type="button" class="btn btn-warning"  data-bs-toggle="modal" data-bs-target="#editModal" onclick="showCategoryEdit(${element.id})">Edit</button>
                        </td>
                        <td>
                            <button type="button" onclick="deleteCategory(${element.id})" class="btn btn-danger">Delete</button>
                        </td>
                </tr> `
    })
    tbody.innerHTML = html;
}

document.body.onload = function(){
    showListCategories(categories);
}
// Thêm mới danh mục
function handleAddCategory(){
    // lấy thông tin 2 ô input
    let name = document.getElementById("category_name").value;
    let description = document.getElementById("description").value;
    // tạo id tự tăng
    let id = categories[categories.length-1].id + 1;
    let today = new Date(); // khởi tạo đối tượng Date
    let createdAt = today.getDate()+"/"+(today.getMonth()+1)+"/"+today.getFullYear();
    // tạo đối tượng category 
    let newCategory = {id,name,description,createdAt};
    // thêm vào mảng
    categories.push(newCategory);
    // hiển thị lại danh sách
    showListCategories(categories);
}

// Chỉnh sửa danh mục
// phàn 1 đổ ra thông tin cũ trong hộp thoại chỉnh sửa
function showCategoryEdit(id){
    // lấy ra thông tin của danh mục theo id
    // hiển thị ra modal edit

    categories.forEach(function(element){
        if(element.id == id){
            // phần tử cần sửa 
            document.getElementById("category_id").value = element.id;
            document.getElementById("category_name_edit").value = element.name;
            document.getElementById("description_edit").value = element.description;
            document.getElementById("createdDate").value = element.createdAt;
        }
    })
}
// phần 2 : thực hiện chỉnh sửa và cập nhật : giống thêm mới
function updateCategory(){
    // lấy thông tin tư form 
    let idEdit = document.getElementById("category_id").value;
    let nameUpdate = document.getElementById("category_name_edit").value;
    let descriptionUpdate = document.getElementById("description_edit").value;
    for (let i = 0; i < categories.length; i++) {
        if(categories[i].id == idEdit){
            categories[i].name = nameUpdate;
            categories[i].description = descriptionUpdate;
        }
    }
    showListCategories(categories);
}
// Xóa danh mục

function deleteCategory(id){
    // giải thuật để xóa
    // lọc các phàn tử ko trùng với id cần xóa
    // let updateArray= []; // mảng chứa các phần tử ko bị xóa
    // categories.forEach(function(element){
    //     if(element.id!= id){
    //         updateArray.push(element);
    //     }
    // })

    // sử dụng hàm filter để lọc mảng
    let updateArray = categories.filter(function(element){
        return element.id != id; // điều kiện để lọc, nếu đúng thì thêm phần tử vào mảng mới
    });
    categories = updateArray; // cập nhật lại danh sách sau khi xóa 
    showListCategories(categories); // hiển thị lại danh sách
}

// Tìm kiếm danh mục theo tên

function handleSearch(){
    // lấy ra chuỗi tìm kiếm
    let keyword = document.getElementById("search").value;
    // lọc danh sách các danh mục thỏa mãn chứa keyword 
    let arraySearch = [];
    categories.forEach(function(element){
        if(element.name.toLowerCase().includes(keyword.toLowerCase())){ // includes là kiểm tra chuỗi này có phải chuỗi con cảu chuỗi kia hay ko
            arraySearch.push(element);
        }
    })
    // hiển thị lại danh sách 
    showListCategories(arraySearch);
}
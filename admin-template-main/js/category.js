// quan lý danh mục của sản phẩm bao gồm các thông tin : id, name, description, createdAt

// tạo dữ liệu mẫu 
let categories = [
    { id: 1, name: "Tivi", description: "Mô tả về ti vi", createdAt: "25/12/2025" },
    { id: 2, name: "Điện thoại", description: "Mô tả về điện thoại", createdAt: "24/12/2025" },
    { id: 3, name: "Máy tính", description: "Mô tả về máy tính", createdAt: "20/12/2025" }
];


// 4 tính năng cơ bản và 1 tìm kiếm
// hiển thị danh sách danh mục 
function showListCategories() {
    // lấy ra thẻ tbody 
    let tbody = document.getElementById("categories");
    let html = "";
    // for(let i=0; i< categories.length; i++){
    //     let element = categories[i];
    // }
    categories.forEach(function (element) {
        html += `<tr>
                        <td>${element.id}</td>
                        <td>${element.name}</td>
                        <td>
                        ${element.description}
                        </td>
                        <td>${element.createdAt}</td>
                        <td>
                            <button type="button" class="btn btn-warning">Edit</button>
                        </td>
                        <td>
                            <button type="button" class="btn btn-danger">Delete</button>
                        </td>
                </tr> `
    })
    tbody.innerHTML = html;
}

document.body.onload = function(){
    showListCategories();
}
// Thêm mới danh mục

// Chỉnh sửa danh mục

// Xóa danh mục

// Tìm kiếm danh mục theo tên
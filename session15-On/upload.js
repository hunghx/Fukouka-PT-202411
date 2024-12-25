

function handleUpload(){
    // lấy ra file up load từ ô input 
    let fileInput = document.getElementById("image");
    // kiểm tra file đã chọn hay chưa
    let file = fileInput.files[0]; 
    if(file){
        // file có tồn tại và tiền hành xử lí up load 
        // cách 1 : sử dụng URL tạo đường dẫn truy cập
        // let url = URL.createObjectURL(file);// trả về đường dẫn truy cập 
        // let preview = document.getElementById("preview"); // thẻ img 
        // preview.src = url; 

        // cách 2 : chuyển đổi ảnh thành chuỗi base64
        let reader = new FileReader();
        reader.readAsDataURL(file); // đọc file upload 
        // lắng nghe sự kiện 
        reader.onload = function(){
            let url = reader.result; // lấy ra đường đãn sau khi mã hóa base64
            let preview = document.getElementById("preview"); // thẻ img 
            preview.src = url;
        }
    }
    
}
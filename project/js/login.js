//Tạo danh sách người dùng trong hệ thống
// let data = [
//     {email : "hunghx@gmail.com" , password:"123456", fullname:"Hồ Xuân Hùng", status: true},
//     {email : "sontx@gmail.com" , password:"123456", fullname:"Trần Xuân Sơn", status: true},
//     {email : "quangnd@gmail.com" , password:"123456", fullname:"Nguyễn Duy Quang", status: false},
//     {email : "minhng@gmail.com" , password:"123456", fullname:"Ngô Minh", status: true},
// ];
// lưu vào localStorage
// localStorage.setItem('UserSystems', JSON.stringify(data));

// thực hiện tính năng đăng nhập 
// lấy thông tin email + password và đối chiều với từng tài khoản
// Validate : xác thực dữ liệu : ko được bỏ trống 
// Lỗi đăng nhập : xác thực không thành công vì eamil hoặc mật khẩu sai
// Tài khoản bị khóa : thông báo lỗi


// Hàm kiểm tra đăng nhập
function handleLogin(){
    // lấy thông tin của người dùng: email và password 
    let email = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    console.log(username,password);

    if(email.trim()==""|| password.trim()==""){
        document.getElementById('error').innerText = "Không được để trống";
        return; // dừng hàm
    }

    // lấy danh sách người dùng trong local
    let dataUsers = JSON.parse(localStorage.getItem("UserSystems"))||[];
    // tiến hành đối chiếu 
    let userLogin = null;
    dataUsers.forEach(function(user){
        if(user.email == email&& user.password == password){
            userLogin = user;
            return; // dừng vòng lặp
        }
    });

    if(userLogin){
        // tồn tại tài khoản
        if(userLogin.status){
            // hơp le
            // lưu thông tin email vào local
            localStorage.setItem("UserLogin", userLogin.email);
            // chuyển trang tới địa chỉ tương ứng
            location.href = "/html/admin/dashboard.html";
        }else{
            document.getElementById('error').innerText = "Tài khoản này đang bị khóa !";
            return; // dừng hàm
        }
    }else{
        document.getElementById('error').innerText = "Thông tin đăng nhập không hợp lê!";
        return;
    }
}
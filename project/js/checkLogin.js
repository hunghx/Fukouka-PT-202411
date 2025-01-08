// Nếu đã đăng nhập thì có email trong local 
let userEmail = localStorage.getItem("UserLogin");

if(!userEmail){
    // ko ton tai, ddieu huong ve dang nhap
    location.href= "/html/authentication/login.html";
}
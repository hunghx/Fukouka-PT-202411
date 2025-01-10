// fix cứng dữ liệu mẫu
let studentArray = [
    {studentId:"SV001",studentName:"Nguyễn Văn A", year:2000, address: "Phú Thọ", email:"anv@gmail.com", phone:"09873246543", sex:true, status:"Đang học"},
    {studentId:"SV002",studentName:"Nguyễn Văn B", year:2004, address: "Phú Thọ", email:"bnv@gmail.com", phone:"09873246543", sex:true, status:"Đang học"},
    {studentId:"SV003",studentName:"Nguyễn Văn C", year:2005, address: "Phú Thọ", email:"cnv@gmail.com", phone:"09873246543", sex:true, status:"Đang học"},
    {studentId:"SV004",studentName:"Nguyễn Văn D", year:2002, address: "Phú Thọ", email:"dnv@gmail.com", phone:"09873246543", sex:true, status:"Đang học"},
    {studentId:"SV005",studentName:"Nguyễn Văn E", year:2001, address: "Phú Thọ", email:"env@gmail.com", phone:"09873246543", sex:true, status:"Đang học"},
    {studentId:"SV006",studentName:"Nguyễn Văn F", year:2007, address: "Phú Thọ", email:"fnv@gmail.com", phone:"09873246543", sex:true, status:"Đang học"}
]

let classArray = [
    {classId:"HN-01",className:"Java Full Stack 11",descriptions:"Hệ FullStack", totalNumber:6, lecturer:"Hồ Xuân Hùng", status:"Đang học", arrayStudent:studentArray}
];

let courseArray = [
    {courseId:"FS-PT", courseName:"Full stack Parttime", courseTime:80,status:true, arrayClass: classArray}
];

// chỉ thực hiện lưu mảng khóa học vào local
localStorage.setItem("arrayCourses", JSON.stringify(courseArray));
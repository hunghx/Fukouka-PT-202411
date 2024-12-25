// dung js đe tao giao diện

// tạo thẻ / tạo 1 phần tử trong dom 

let ul = document.createElement("ul");
for(let i=0; i< 3; i++){
    let li = document.createElement("li");
    li.textContent = `List item number ${i+1}`;
    ul.appendChild(li);
}
// đưa phan tu vua tạo hiển thj ra body
document.body.appendChild(ul);

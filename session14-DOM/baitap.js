// lây ra thẻ span 
let spans = document.querySelectorAll("span");
spans.forEach(function(span){
    console.log(span);
})

// thay đổi nội dung span 2
spans.item(1).innerText = "Nội Dung 4";

// thay đổi css thẻ p 
document.getElementsByTagName("p")[0].style.color = "red";
document.getElementsByTagName("p")[0].style.fontSize = "30px";

// sự kiên
spans.item(0).addEventListener("click", function(){
    spans.item(1).innerText = spans.item(0).innerText;
})
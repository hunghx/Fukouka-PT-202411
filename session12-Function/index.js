

// khai báo hàm 
// cách 1 : declaration function 
// function sum(a,b){
//     // khối lệnh thực thi
//     // trả về giá trị
//     let sum = a+b;
//     return sum;
//     // return a+b
// }

// cách 2 : expression function
// let sum = function(a,b){
//     return a+b;
// }

// cách 3 : arrow function ()=>{}
let sum = (a,b)=>a+b;
let square = a => a*a;
// gọi hàm 

let ketqua = sum(2,3);
console.log("ket qua: ",ketqua);
console.log("Bình phương cua 101: ",square(101));
// hàm dựng sẵn : prompt(), alert(), confirm() 

// Ứng dụng : tạo hàm giải phương trình bậc nhất (a,b) <=> ax +b = 0 , trả về nghiệm nếu có
// tạo hàm giải phương trình bậc 2 (a,b,c) <=>  ax^2 + bx +c =0 : hiển thị các trường hợp

function giaiPtBac1(a,b){
    if(a==0){
        if(b==0){
            return "Vô số nghiệm";
        }else{
            return "Vô nghiệm";
        }
    }else{
        return -b/a;
    }
}

console.log("Nghiệm của phương trình ax + b = 0 : x = ", giaiPtBac1(0, -2));

function giaiPtBac2(a,b,c){
    // 3 biến abc đc gọi là tham số và có phạm vi chỉ tồn tại trong hàm
    if(a == 0){
        return giaiPtBac1(b,c);
    }else{
        // tinh delta 
        let delta = b*b - 4*a*c;
        if(delta < 0){
            return "Vô nghiệm";
        } else if(delta == 0){
            return `x1 = x2 = ${-b/(2*a)}`;
        } else{
            return `x1 = ${(-b + Math.sqrt(delta))/(2*a)}, x2 = ${(-b - Math.sqrt(delta))/(2*a)}`;
        }
    }

}

console.log(`Phương trình ${0}x^2 + ${0}x + ${-5} = 0 : `, giaiPtBac2(0, 0, -5)); // 0, 0, -5 là các đối số


let x = 10,y = 15;

function changeXY(a,b){ // truyền tham trị : truyền giá trị : number , string, boolean
    a=100;
    b=1000;
}

changeXY(x,y);
console.log("x = ",x ,"| y = ",y); // x = 10 /| 100 , y = 15 | 1000


let array = [10,15];

function changeArray(arr){ // truyền tham chiếu : địa chỉ  : array , object, function
    arr[0] = 100;
    arr[1] = 1000;
}

changeArray(array);
console.log("array = ",array); // array = [100,1000]

// tạo hàm kiểm tra số nguyên tô 

function checkPrime(n){
    if(n < 2){
        return false; // dừng hàm và trả về giá trị 
    }

    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i == 0){ // đay là ước thử 3
            console.log(i);
            return false;
        }
    }

    return true;
}


console.log("137 có phải số nguyên tố hay ko ", checkPrime(137));

"hunghx".charAt(0); // "h"

//"amkdnsjckhvhbjnal;lsdjvhubew"
// kitu : 'a'
// output : 2

function countCharacter(string , character){
    let count = 0;
    for(let i=0; i<string.length; i++){
        if(string.charAt(i) == character){
            count++;
        }
    }
    return count;
}

console.log(countCharacter("bhascbhacabdkage","a"));

// các hàm làm việc vs mảng 

let numbers = [1,2,3,4,5];
let check = numbers.includes(7)  // tìm kiếm, kiểm tra sự tồn tại của 1 phần tử

console.log(check);

// lọc các số chia hêt cho 2 và lưu vào 1 mảng mới
let arrayMod2 = numbers.filter((value,index)=>value%2==0);
console.log(arrayMod2);

// biến đổi phần tử
let arraySquare = numbers.map((value, index)=>value * value)
console.log("arraySquare", arraySquare);







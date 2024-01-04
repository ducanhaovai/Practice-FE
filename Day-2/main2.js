//hàm có thể gon nhóm 1 đoạn code phục vụ cho 1 chắc năng nào đó.Được sử dụng lại và gọi ở nhiều nơi khác và có thể chia nhỏ code
var ageA= 0;

function tinhTuoi(year){
    //thao tac tinh toan
    return 2023 - year; 
}

function sualaiNamSinh(){
   ageA= 2003;
}

sualaiNamSinh(); //goi funticon ra

var age = tinhTuoi(ageA);
console.log("Tuoi cua A= ", age);

function printContent(fistName, job){
    switch(job){
        case 'IT':
            console.log(fistName + 'la IT');
            break;
        case 'CNTT':
            console.log(fistName +' la CNTT ');
            break;
        default:
            console.log(fistName+' khong lam gi ca');
            break;
    
        
    }
}

printContent("Anh","IT")
printContent("Anh","CNTT")
printContent("Anh","I")


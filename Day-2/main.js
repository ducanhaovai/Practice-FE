var job= 'IT'
var name= 'Duc Anh'
//co ban nay giong if else, la bieu thuc dieu kien duoc danh gia 1 lan
switch (job){
    case 'designer':
        console.log(name+ "la designer" );
        break;
    case 'worker':
        console.log(name + "la worker");
        break;
    default:
        console.log(name +"la co cong viec nao do");
        break;
}

//truly là những giá trị kiểu về boolean, bản thân của nó sẽ trả về giá trị là true khi dùng trong các biểu thức điều kiện. ngoài các giá trị falsy
//falsy là giá trị ép kiểu về boolean, thì bản thân nó sẽ trả về giá trị là flase khi dùng trong các điểu kiện nnhuw Null, undenfined, nah, 0,'',false
//dưới đây là ví dụ về truly và falsy
var height = 0;
if(height){
    console.log("height co gia tri");
}else{
    console.log("height khong co gia tri");
}


//có 2 so sánh là '===' và '=='
var height2 = 23;
if(height2 ===23){
    console.log("height chay vao day");
}else{
    console.log("height chay ra else");
}
//làm bài cơ bản 
//1. Tinhs điểm trung bình của mỗi đội
var diemJohn = (89+120+103)/3,
    diemMark = (116 + 94 + 123)/3,
    diemMary = (97 + 134 + 105)/3;
console.log("Diem John: ", diemJohn);
console.log("Diem Mark: ", diemMark);
console.log("Diem Mary: ", diemMary);
//2. đội thắng với điểm cao và in ra điểm đó 
if(diemJohn> diemMark&&diemJohn>diemMary){
    console.log("Doi thang co diem trung binh cao nhat la John:",diemJohn);
}
else if (diemMark > diemJohn&& diemMark>diemMary){
    console.log("Doi thang co diem trung binh cao nhat la Mark:",diemMark);
}
else{
    console.log("Doi thang co diem trung binh cao nhat la Marry:",diemMary);  
}
 
if(diemJohn===diemMark&&diemJohn===diemMary){
    console.log("Ba doi co so diem bang nhau",diemJohn)

}
else if(diemJohn===diemMary){
    console.log("Diem cua John va Mary bang nhau", diemJohn)
}
else if(diemJohn===diemMary){
    console.log("Diem cua John va Mary bang nhau", diemJohn)
}
else{
    console.log("Diem cua Mark va Mary bang nhau", diemMark)
}



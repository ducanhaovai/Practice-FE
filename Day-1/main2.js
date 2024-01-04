var age = 16;
var name = "Duc Anh"
console.log("age = ", age);
console.log("age >= ", age >= 20);
console.log("age < ", age < 30);
console.log("!(age <30) ", !age < 30);

console.log("age >= 20 && age < 30")

if(age < 13){
    console.log(name + "hoc sinh");
}
else if(age =>13 && age <= 18){
    console.log(name+"cau be")
}
else{
    console.log("Da truong thanh")
}
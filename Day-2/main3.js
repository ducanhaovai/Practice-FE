//Array
var arrStudent = [
    'Mai Duc A',
    'Mai Duc B',
    'Mai Duc C'
    
];

console.log("arrStudents= ", arrStudent);
console.log("arrStudents length= ", arrStudent.length);
console.log("arrStudents[0]= ", arrStudent[0]);
console.log("arrStudent[length - 1]= ", arrStudent[arrStudent.length -1]);

var arrStudent2 = new Array('MD A','MD B','MD C');
console.log("arrStudent2= ", arrStudent2);
console.log("arrStudent2[2]= ", arrStudent2);

//trong javascript ban chat cua array la 1 object


var arrDemo=[
    'Anh',
    'Thu',
    28,
    true
];

console.log("arrDemo= ", arrDemo);
//them phan tu o cuoi

console.log("push(123, 789)= ", arrDemo.push(123,789));
//them phan tu vao dau
console.log("unshift(456,678)= ", arrDemo.unshift(456,678));
console.log("arrDemo.shift() ", arrDemo.shift());
console.log("arrDemo.pop()", arrDemo.pop());

console.log("arr Demo= ", arrDemo);
console.log("arrDemo.indexOf('Anh')= ", arrDemo.indexOf('Anh'));//tim kiem du lieu dau tien trong array va bao ra vi tri neu ton tai, khong thi tra ve -1
console.log("arrDemo.lastindexOf('Anh')= ", arrDemo.indexOf('Anh'));//tim kiem du lieu cuoi cung trong array va bao ra vi tri neu ton tai, khong thi tra ve -1

//1. 1 mang chua thong tin cua bills
var bills= [
    124,
    48,
    268
];
console.log("Bills= ", bills);
//2. 1 funtion tinh tien tip
function Tip(bill){
    var percent;
    if(bill<50){
        percent = 0.2;//20%

    }
    else if(bill<=200){
        percent= 0.15;//15%

    }
    else{
        percent = 0.1//10%
    }
    return percent * bill;
}
var tips= [
    Tip(bills[0]),
    Tip(bills[1]),
    Tip(bills[2]),

]
console.log("tips= ",tips);

var tips2=[];
tips2.push(Tip(bills[0])); 
tips2.push(Tip(bills[1])); 
tips2.push(Tip(bills[2])); 
console.log("tips2= ", tips2);

var tips3= [];
tips3[tips3.length] = Tip(bills[0]);
tips3[tips3.length] = Tip(bills[1]);
tips3[tips3.length] = Tip(bills[2]);

var finalValues = [
    tips[0] + bills[0],
    tips[1] + bills[1],
    tips[2] + bills[2],
]
console.log("finalValues= ", finalValues);
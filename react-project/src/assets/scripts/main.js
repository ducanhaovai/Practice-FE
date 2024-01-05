//import { apikey } from "./main2";
//import { apikey, apikey2 as content } from "./main2"; co the dat ten cho no 
//import * as total from "./main2";

//console.log(total.apikey2)
//console.log(content);

//const userMessage= "Hello World";

//console.log(userMessage);

/*function Greeting (username, message= "Hello!"){
    return "Hi, I am " + username +" "+ message;

}

const greeting = Greeting("Duc Anh");
console.log(greeting);

const greeting2 = Greeting("Anh Thu", "Hello, What's sups?")
console.log(greeting2);
*/

/*export default (userName, message)=>{
    console.log("Hello");
    return userName + message;
}
*/
/*const user ={
    name:"Duc Anh",
    age: "34",
    greet(){
        console.log("Hello!");
        console.log(this.age);
    }

};

console.log(user);
user.greet();

class User{
    constructor(name, age){
        this.name= name;
        this.age= age;  
    }
    greet(){
        console.log("Hi!");
    }
}
const user1 = new User("Duc Anh1", 20);
console.log(user1);

user1.greet();
*/


/*const hobbies = [1, "b", "c"];

console.log(hobbies[0]);


const index = hobbies.findIndex((item)=>{
     return item === "a";
});

const index = hobbies.findIndex((item) => item === "a");
console.log(index);
const editedHobbies = hobbies.map((item)=>({val: item}));
console.log(editedHobbies);
*/
//(...) có thể lấy tất cả các cặp giá trị khóa từ đối tượng này và thêm chúng dưới dạng các cặp giá trị vào đối tuongj đó
/*const hobbies = ["a", "b"];
const {name: userName, age: a} ={
    name: "Duc Anh",
    age: 20

};
console.log(userName);
console.log(a);
const newA=["c"];
const meHobbies = [...hobbies,...newA];
console.log(meHobbies);
*/
//revisiting control structure
const password = prompt('Your Password');

if(password==="Hello"){
    console.log("Hello works");

}else if (password === "hello"){
    console.log("hello works");
}else{
    console.log("NOt");
}
const hobbies = ["a", "b","c"];
for (const hobby of hobbies){
    console.log(hobby);
}
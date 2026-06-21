// function greet() {
//     console.log("Yello");
// }
// greet();

// const { useInsertionEffect } = require("react");

// function showMessage() {
//     console.log("Learning functions");
// }
//  showMessage();

// function introduction () {
//     console.log("1234567890");
//     console.log("I was created in 1995");
//     console.log("I run in browsers");
// }

// introduction();

// function greetUser(name) {
//     console.log("Hello," +name +"!");
// }

// greetUser("alice");

// function calA(a,b,c){
//     let avg = (a+b+c)/256;
//     console.log(avg);
// }

// calA(10,20,30);

// function getPrice(x){ let tax = x*0.1;
//     let total = x+tax;
//     console.log(total);}
// getPrice(50);

// function getGreeating(name){
//     return "hello"+name;

// }

// console.WHAT THE FAAHlog(message);
// let mesWHAT THE FAAHsage = getGreeating("Alice");
// console.lWHAT THE FAAHog(message);
// if (x > 5) {
//   console.log(x);
// }

// function showScore(){
//     let score= 100;
//     console.log(score);
// }
// showScore()

// function func1(){
//     let x=10;
//     console.log(x);
// }
// function func2(){
//     let x=20;
//     console.log(x);
// }

// func1();
// func2();
// console.log(x);

// let x = 1;

// function outer() {
//     let x = 2;

//     function inner() {
//         console.log(x);
//     }

//     inner();
// }

// outer();

// function outer() {
//     let x=5;

//     function inner(){
//         console.log(x);
//     }
//     inner();
// }
// outer();

// function outer(){
//     function inner(){
//         let secret="Hidden";
//     }
//     inner();
//     console.log(secret);
// }

// outer();

// function greet(name){
//     function createMessage() {
//         return "Hello,"+ name+"💐💐💐💏💏💏🥰😍😍";
//     }

//     console.log(createMessage());
// }
// greet("Alice");

// const mul=function(a,b){
//   return a*b;
// }
// console.log(mul(3,4));

// const sayHi=function(name){
//     console.log("Hi, "+name+"!");
// }

// sayHi("Timi");

// const square = num => num * num;

// console.log(square(5));

// const add = function(a, b) {
// return a + b;
// };
// const subtract = function(a, b) {
// return a - b;
// };
// console.log(add(10, 5)); 
// console.log(subtract(10, 5));

// function vowCount(str){
//     let count = 0;
//     for (const char of str) {
//         if (
//             char === "a" || char==="e" || char=== "i"||char==="o" ||char === "u"
//         )
//           {count++}  
//     }
//     console.log(count);
// }
// function repeatTask(func,n) {
//     for (let i=0; i<n;i++){
//         func();
//     }
// }

// const alertUser = () => console.log("Alert!");

// repeatTask(alertUser, 3);

// const promptUser = () => console.log("I am a prompt");

// repeatTask(promptUser, 3);


// function applyDiscount(price, discountFunc){
//     return discountFunc(price);
// }

// const tenPercent = (price) => price*0.9;
// const twentyPercent = (price) => price*0.8;

// console.log(applyDiscount(100,tenPercent));
// console.log(applyDiscount(100, twentyPercent));

// function calculate(a,b,operation){
//     return operation(a,b);
// }


// const add = (x,y)=> x+y;
// const mul = (x,y)=> x*y;

// console.log(calculate(2,4,add));

// function processArray(arr, processor){
//     for (let i=0; i<arr.length;i++){
//         processor(arr[i]);
//     }
// }

// const pricedbl = (num) =>{
//     console.log(num*2);
// };

// processArray([1,2,3],pricedbl);


// const account={
//     balance: 1000,
//     deposit(amount){
//         this.balance = this.balance + amount;
//         console.log("New balance:"+this.balance);
//     },

//     withdraw(amount){
//         this.balance= this.balance-amount;
//         console.log("New balance:"+this.balance);
        
//     }
// }

// account.deposit(500);
// account.withdraw(200);

// const formatter  ={
//     toUpper(str){
//         return str.toUpperCase();
//     },
//     toLower(str){
//         return str.toLowerCase();
//     },
//     trim(str){
//         return str.trim();
//     }
// };

// console.log(formatter.trim("           hello"));

// const counter = {
//     count:0,
//     increment() {
//         this.count++;
//         console.log("Count:"+this.count);
//     },
//     reset(){
//         this.count=0;
//         console.log("Counter reset");
        
//     }
// };

// counter.increment();
// counter.increment(); // Output: Count: 1
// counter.increment(); // Output: Count: 2
// counter.reset(); // Output: Counter reset


    // for (let i = 0; i <= 5; i++) {
    //     let str = "";  
    //     for (let j = 0; j < i; j++) {
    //         str += "*";
    //     }
    //     console.log( str);
    // } 
for (let i = 5; i >=1; i--) {
 let str = "";
    for (let j = 0; j<=i; j++) {
        str += "*";
    }
    console.log(str);
}
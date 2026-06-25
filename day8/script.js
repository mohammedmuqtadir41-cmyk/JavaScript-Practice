// const students = {
//     name : "Ahmed",
//     eng :97,
//     maths : 86,
//     phy : 97,
//     chem : 97,
//     getAvg() {
//         let avg= (this.eng+this.maths+this.phy+this.chem)/4;
//         console.log(`${this.name} has got the avg marks ${avg}`)
//     }
// };

// students.getAvg();

// const account = {
//     holder : "Muqthadir",
//     balance: 5678,
//     deposit(amount){
//         this.balance += amount;
//         console.log(`$(this.holder) has deposited $$(amount). New balance$$(this.balance)`);
//     }
// };

// account.deposit(500);

// const car = {
//     brand: "Toyota",
//     model:2022,
//     price: 499,

//     displayInfo(){
//         console.log(`Brand:${this.brand},Model: ${this.model}, Price:${this.price}`)
//     },
//     applyDiscount(percentage) {
//        const finalPrice = this.price-(this.priceBeforeDiscount/100);
//         console.log(`New Price: ${finalPrice}`);
//     }
// };

// car.displayInfo();
// car.applyDiscount(10);


// const students = {
//     name: "Muqthadir",
//     subject: [
//     {
//         name:"English",
//         marks: 95,
//     },
//     {  
//      name: "Math",
//             marks: 93
//      },
//     {
//       name: "Physics",
//       marks: 97
//      }
//     ],

//     calcAvg(){
//         let total = 0;
//        total += this.subject[0].marks;
//        total += this.subject[1].marks;
//        total += this.subject[2].marks;

//        return total/this.subject.length;
//     },

//     displayReport(){
//         console.log(
//             `${this.name}got average marks = ${this.calcAvg()}`
//         );
//     }
// };
// students.displayReport();

// function divide(a,b){
//     try{
//         if(b===0){
//             throw"Cannot divide by zero!";
//         }
//         return a/b;
//     }catch(err){
//         console.log("Error".err);
//         return null;
//     }

// }
// console.log(divide(10,2))
// console.log(divide(10,2));

// function safeDivide(a,b){
//     try{
//         if(b===0){
//             throw"Cannot divide by  zero!"
//         }
//         return a/b;
//     }catch(err){
//         console.log("Error:".err)
//         return null;
//     }
// }

// console.log(safeDivide(8,2));

// function getElement(arr,index){
//     try{
//         if(index<0){
//             throw"Index cannot be negative!";
//         }
//         if(index>=arr.length){
//             throw"Array out of bounds!";
//         }
//         return arr[index];
//     }catch(err){
//         console.log("Error:",err)
//         return null;

//     }
// }
// console.log(getElement([2,3,,5,6,7,8],15));

// const calcTotal = (price,tax)=>{
//     let total = price+(price*tax);
//     return total;
// };
// console.log(calcTotal(100,0.1));


// const greet = (name) => {
//     return`Hello, ${name}!`;
// }
// console.log(greet("john"));

// setTimeout(() => {
//     console.log('this appears after 3 seconds')
// },3000);

// setTimeout(() => {
//     console.log('this is Ahmed in 5')
// },5000);

// function greetUser(name){
//     setTimeout(() => {
//         console.log(`Welcome back Yo! ${name}`);
//     },2000);
// }

// greetUser("Ahmed")


// let a = setTimeout(() => {
//     alert("yo we meet again....")
// }, 3000);

// let b = prompt("do you want a timeout?");
// if ("n" === b) {
//     clearTimeout(a);
// }else{
//     console.log(a);
// }

// setInterval(() => {
//     console.log("Hello Ahmed");
// }, 1000);

// setInterval(() => {
//     const now = new Date();
//     console.log(now.toLocaleTimeString());
// },1000);

// let count = 0;

// const id= setInterval(() =>{
//     count++;
//     console.log (`Count: ${count}`);

//     if(count===5){
//         clearInterval(id);
//         console.log("Counter stopped");
//     }
// },1000);

// let count = 10;
// id = setInterval(() => {
//     count--;
//     console.log(`Count:${count}`);

//     if(count ===0){
//         clearInterval(id);
//     }
// }, 1000);


// function animateText(text) {
//     for (let i = 0; i < text.length; i++) {
//          setTimeout(() => {
//             console.log(text[i]);            
//         },i*200);
//     }
// }

// animateText("Muqthadir");
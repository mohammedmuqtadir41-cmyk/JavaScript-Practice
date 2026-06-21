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


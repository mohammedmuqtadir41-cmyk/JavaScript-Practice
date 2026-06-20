// let numbers = [10, 20, 30, 40, 50, 60,70];

// let newarr1= numbers.slice(1,5);
// let newarr2 = numbers.slice(4);

// console.log(newarr1);
// console.log(newarr2);

// let  colors = ["red", "green", "blue", "yellow", "orange", "purple"];

// let colors1 = colors.splice(2,3);

// console.log(colors1);
// console.log(colors);

// let numbers = [1,2,3,7,8,9,10];

// let newarr= numbers.splice(3,0,4,5,6);

// console.log(numbers);


// let fruits = ["apple", "banana", "cherry", "date", "elderberry"];

// let newarr = fruits.sort((a,b) => a.localeCompare(b));

// console.log(fruits);

// let words = ["JavaScript", "is", "a", "powerful", "language"];

// let newarr= words.join(" ");

// console.log(newarr);

// for (let i=1; i<=10; i++){
//     console.log(i);
// }

// for (let i=2; i<=20; i+=2){
//     console.log(i);
// }

// for (let i=10; i>=1; i--){
//     console.log(i);
// }
// let sum = 0;
// for (let i=1; i<=20; i++){
//     sum += i;
//     console.log(sum);
// }

// let choice;
// do {
// console.log("Menu:");
// console.log("1. Play");
// console.log("2. Settings");
// console.log("3. Exit");
// choice = prompt("Enter your choice:");
// if (choice === "1") {
// console.log("Starting game...");
// } else if (choice === "2") {
// console.log("Opening settings...");
// }
// } while (choice !== "3");
// console.log("Goodbye!");

// // Dice Roll Until Six
// let roll;
// let attempts = 0;

// do{
//     roll= Math.floor(Math.random()*6)+1;
//     attempts++;
//     console.log(`Roll${attempts}:${roll}`);
// }while(roll !== 6);

// console.log(`Got a 6 after ${attempts} attempts!`);

//ATM Withdrawal

let balance = 1000;
let continueTransaction;

do{
    let amount = Number(prompt(`Balance:$${balance}. Enter the withdrawal amount;`));

    if (amount>0 && amount<= balance){
        balance -= amount;
        console.log(`Wthdrew $${amount}. New balance:$${balance}`);
    }else {
        console.log("Invalide amount.");
    }

    continueTransaction = prompt("Another transaction?(yes/no)").toLowerCase(); 
}while(continueTransaction === "yes" &&balance >0);

console.log(`Final balance:$${balance}. Thank you for using our ATM!`);
// // // // // // // // let num = 5;

// // // // // // // // if (num % 2 === 0) {
// // // // // // // //     console.log("positive number")
// // // // // // // // } else {
// // // // // // // //     console.log("negative number")
// // // // // // // // }

// // // // // // // let age =prompt("enter your age");

// // // // // // // if (age >= 18) {
// // // // // // //     console.log("you are eligible for a license")
// // // // // // // } else {
// // // // // // //     console.log("you are not eligible for a license ")
// // // // // // // }


// // // // // // let marks =prompt("enter your marks");
// // // // // // if (marks >= 90) {
// // // // // //     console.log("Grade A")
// // // // // // } else if (marks >= 80) {
// // // // // //     console.log("Grade B")
// // // // // // } else if (marks >= 70) {
// // // // // //     console.log("Grade C")
// // // // // // } else if (marks >= 60) {
// // // // // //     console.log("Grade D")
// // // // // // } else if ( marks <60) {
// // // // // //     console.log("Grade F")
// // // // // // }

// // // // // let username = prompt("enter your username");
// // // // // let password = prompt("enter your password");

// // // // // if (username === "admin" && password === "12345") {
// // // // //     console.log("login successful")
// // // // // }else {
// // // // //     console.log("Invalid credentials ")
// // // // // }

// // // // let day = prompt("enter the day of the week");
// // // // if (day === "Saturday" || day === "Sunday") {
// // // //     console.log("It's a weekend! 🥳")
// // // // } else {
// // // //     console.log("It's not a weekend.")
// // // // }

// // // let age = prompt("enter your age");
// // // if (age <12) {
// // //     console.log("movie ticket price is $5")
// // // } else if (age >=12 && age <60) {
// // //     console.log("movie ticket price is $8")
// // // }else if (age >=60) {
// // //     console.log("movie ticket price is $6")
// // // }

// // let orderTotal = 40;
// // let isPremium = true;

// // if (orderTotal >50 || isPremium) {
// //     console.log("You are eligible for free shipping!")
// // } else {
// //     console.log("You are not eligible for free shipping.")
// // }

// let marks = 80;
// if (marks >= 33) {
//     if (marks >= 80) {
//         console.log(" Pass with distinction")
//     } else {
//         console.log("Pass")
//     }
// } else {
//     console.log("Fail")
// }

// let dayNum = prompt("Enter a day number (1-7):");
// switch (dayNum) {
//     case "1":   
//         console.log("Monday");
//         break;
//     case "2":
//         console.log("Tuesday");
//         break;
//     case "3":
//         console.log("Wednesday");
//         break;
//     case "4":
//         console.log("Thursday");
//         break;
//     case "5":
//         console.log("Friday");
//         break;
//     case "6":
//         console.log("Saturday");
//         break;
//     case "7":
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid day number");  
// }

// let signal = prompt("Enter a traffic signal color (red, yellow, green):").toLowerCase();
// switch (signal) {
//     case "red": 
//         console.log("Stop");
//         break;
//     case "yellow":
//         console.log("Wait");
//         break;
//     case "green" :
//         console.log("Go");
//         break;
//     default:
//         console.log("Invalid signal color");
// }

// let month =prompt("Enter a month number (1-12) :");;
// switch (month) {
//     case "12":
//     case "1":
//     case "2":
//         console.log("Winter");
//         break;
//     case "3":
//     case "4":
//     case "5":
//         console.log("Spring");
//         break;
//     case "6":
//     case "7":
//     case "8":
//         console.log("Summer");
//         break;
//     case "9":
//     case "10":
//     case "11":
//         console.log("Fall");
//         break;
//     default:
//         console.log("Invalid month number");
// }

// let score = 1;
// if (score === true) {
//     console.log("truthy")
// } else {
//     console.log("No score yet")
// }

// let age = 20;
// let isCitizen = true;
// let hasVoted = false;

// if (age >=18 && isCitizen && !hasVoted) {
//     console.log("You are eligible to vote!")
// } else {
//     console.log("You are not eligible to vote.")
// }
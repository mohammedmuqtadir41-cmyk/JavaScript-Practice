// function checkVotingEligibility(age) {
//     return new Promise((resolve,reject) => {
//         if (age>=18){
//             resolve("You can vote!")
        
//         } else {
//             reject("you cannot vote!")
           
//         }
//     });
// }


// checkVotingEligibility(16)
// .then((res)=>{console.log(res);})
// .catch((failed)=>{console.log(failed);})

// function validateNumber(num) {
//     return new Promise((resolve,reject) => {
//         if(num>0){
//             resolve(`Positive number : ${num}`)
//         } else if(num <0){
//             reject(`Negative number :${num}`)
//         }else if(num === 0){
//             reject("Zero nhi use karna bh")
//         }
//     })
// }

// validateNumber(42)
// .then((res) => {console.log(res);})
// .catch((failed) => {console.log(failed);})

// validateNumber(-2)
// .then((res) => {console.log(res);})
// .catch((failed) => {console.log(failed);})

// validateNumber(0)
// .then((res) => {console.log(res);})
// .catch((failed) => {console.log(failed);})

// function checkPassword(password) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("tera code check karru");

//             if(password.length >= 8){
//             resolve("strong hai tera password")
//         }else{
//             reject("kaam ka nhi hai 8 characters rehna kam se kam")
//         }
//         }, 1000);

        
//     });
// }

// checkPassword("abc123")
// .then((res) => {console.log( "🫸",res);})
// .catch((failed) => {console.log("🔞",failed);})

// function checkEvenOdd(number) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("Checking your code bro")

//             if(number % 2 === 0){
//                 resolve(`${number} is even good`)
//             } else {
//                 reject(`${number}is odd `)
//             }
//         }, 500);
//     })
// }

// checkEvenOdd(90)
// .then((res) => {console.log( "🫸",res);})
// .catch((failed) => {console.log("🔞",failed);})

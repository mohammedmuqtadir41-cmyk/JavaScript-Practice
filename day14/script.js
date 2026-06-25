// function authenticateUser(username,password) {
//     return new Promise((resolve,reject) => {
//         console.log("Authenticate User....");

//         setTimeout(() => {
//             if(username=== "admin"  && password === "admin@3210"){
//                 resolve({
//                     username:username,
//                     token:"abc123xyz",
//                     message:"Authentication successfull"
//                 });
//             }else{
//                 reject("Invalid Username or password");
//             }
//         },2000);
//     });
// }



// async function loginUser() {
//     try{
//         console.log("Login attempt...");
//         const userData = await authenticateUser("admin","admin@3210");
//         console.log("Success", userData.message);
//         console.log("Token:",userData.token);
//         console.log("welcome", userData.username);
//     } catch(error) {
//         console.log("Authentication Failed",error);
//     }
// }

// loginUser();

// authenticateUseer("admin","admin@3210")
// .then((userData) => {
//     console.log("Sucess", userData.message);
//     console.log("token", userData.token);
//     console.log("welcome", userData.username);
// })
// .catch((error) => {
//     console.log("Authentication Failed",error);
// });

// function getUserId(username){
//     return new Promise((resolve,reject) => {
//         console.log(`Searching for user: ${username}`);
//         setTimeout(() => {
//             if (username === "john_doe") {
//                 resolve(101);
//             } else {
//              reject("user not found")   
//             }
//         },1000);
//     });
// }

// function getUserDetails(userId){
//     return new Promise((resolve,reject) => {
//         console.log(`fetching details for user Id:${userId}`);
//         setTimeout(() => {
//             if(userId==101){
//                 resolve({
//                     id:userId,
//                     name: "John Doe",
//                     email:"ahm@gmail.com"
//                 });
//             }else {
//                 reject("User detailes not found");
//             }
//         },1000);
//     });
// }

// getUserId("john_doe")
// .then((userId) => {
//     console.log("User Id found",userId);
//     return getUserDetails(userId);
// })
// .then((getUserDetails) => {
//     console.log("User details found:",getUserDetails);
// })
// .catch((error) => {
//     console.log("Error occured",error);
// })

function getUserName(userId) {
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            if(username == "Ahmed"){
                console.log(101);
            }else{
                console.log("username not found");
            }
        })
    })
}

function getUserDetails(username) {
    return new Promise((resolve,reject) => {
        console.log("Fetching User name")
        setTimeout(() => {
            if (101) {
                resolve({
                    id:'userid',
                    name:"username",
                    email:"user@example.com",
                });
            } else {reject("User details not found"); }
        },1000);
    })
}

async function getUserName(username) {
    
}

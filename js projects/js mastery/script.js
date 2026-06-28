// const taskinput = document.querySelector("#taskinput");
// const button = document.querySelector("#button");
// const tasklist = document.querySelector("#tasklist");

// window.addEventListener("load", loadTasks);

// button.addEventListener("click", addTask);

// taskinput.addEventListener("keypress", function(e){
//     if(e.key === "Enter"){
//         addTask();
//     }
// });

// function addTask(){

//     const input = taskinput.value.trim();

//     if(input === ""){
//         alert("Please enter a task");
//         return;
//     }

//     createTask(input,false);

//     saveTasks();

//     taskinput.value="";
// }

// function createTask(text,completed){

//     const li=document.createElement("li");

//     if(completed){
//         li.classList.add("completed");
//     }

//     const span=document.createElement("span");
//     span.textContent=text;

//     span.addEventListener("click",function(){

//         li.classList.toggle("completed");
//         saveTasks();

//     });

//     const delbtn=document.createElement("button");
//     delbtn.textContent="Delete";
//     delbtn.classList.add("delete");

//     delbtn.addEventListener("click",function(){

//         li.remove();
//         saveTasks();

//     });

//     li.appendChild(span);
//     li.appendChild(delbtn);

//     tasklist.appendChild(li);

// }

// function saveTasks(){

//     const tasks=[];

//     document.querySelectorAll("#tasklist li").forEach(function(li){

//         tasks.push({
//             text:li.querySelector("span").textContent,
//             completed:li.classList.contains("completed")
//         });

//     });

//     localStorage.setItem("tasks",JSON.stringify(tasks));

// }

// function loadTasks(){

//     const tasks=JSON.parse(localStorage.getItem("tasks")) || [];

//     tasks.forEach(function(task){

//         createTask(task.text,task.completed);

//     });

// }

// PROJECT - 1 :LIVE CLOCK WITH SET INTERVAL
// const time = document.querySelector("#time");

// function updateClock() {
//     const currentTime =  new Date();
// const formattedTime = currentTime.toLocaleTimeString();
// time.textContent = formattedTime;
// }
// updateClock();
// setInterval(updateClock, 1000);

// const saveBtn = document.querySelector("#saveBtn");
// const passwordBtn = document.querySelector("#passwordBtn");
const emailbtn = document.querySelector("#emailbtn");
// const toast = document.querySelector("#toast");

// let toastTimer;
// function showToast(message) {
//     clearTimeout(toastTimer);

//   toast.textContent = message;

//   toast.style.display = "block";

//   toastTimer = setTimeout(() => {
//     toast.style.display = "none";
//   }, 3000);
// }

// saveBtn.addEventListener("click", () => {
//     showToast("✔ Profile saved successfully!");
// });

// passwordBtn.addEventListener("click", () => {
//     showToast("🔒 Password Changed");
// });

// emailBtn.addEventListener("click", () => {
//     showToast("📧 Email Verified");
// });

//PROJECT - 3 : OTP PROJECTS WTIH SET INTERVAL
// const otpBtn = document.querySelector("#otpBtn");

// otpBtn.addEventListener("click", () => {
//   let seconds = 30;
//   otpBtn.disabled = true;
//   otpBtn.textContent = `Resend OTP in ${seconds}`;

//   let timer = setInterval(() => {
//     seconds--;
//     otpBtn.textContent = `Resend OTP in ${seconds}s`;

//     if (seconds === 0) {
//       clearInterval(timer);
//       otpBtn.disabled = false;
//       otpBtn.textContent = "Resend OTP";
//     }
//   }, 1000);
// });

//Project 4 — Fake Login System

// const username = document.querySelector("#username");
// const password = document.querySelector("#password");
// const loginBtn = document.querySelector("#loginBtn");
// const message = document.querySelector("#message");

// loginBtn.addEventListener("click", () => {
//   loginBtn.disabled = true;
//   message.textContent = "Logging in...";
//   authenticateUser()
//     .then((result) => {
//       message.textContent = result;
//       loginBtn.disabled = false;
//     })
//     .catch((error) => {
//       message.textContent = error;
//       loginBtn.disabled = false;
//     });
// });
// function authenticateUser() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (username.value === "admin" && password.value === "admin@3210") {
//         resolve("Welcome Admin 🤡");
//       } else {
//         reject("Invalid username or password");
//       }
//     }, 2000);
//   });
// }

// function downloadFile(fileName, fileSize) {
//   return new Promise((resolve) => {
//     const downloadTime = (fileSize / 10).toFixed(1);
//     setTimeout(() => {
//       resolve({
//         fileName,
//         fileSize,
//         downloadTime: `${downloadTime}s`,
//       });
//     }, 1000);
//   });
// }

// async function downloadManager(fileName, fileSize) {
//   try {
//     console.log("=== File Download Manager (Async) ===");
//     const result = await downloadFile(fileName, fileSize);
//     console.log("✓ Download Complete!");
//     console.log(`File: ${result.fileName}`);
//     console.log(`Size: ${result.fileSize}MB`);
//     console.log(`Time: ${result.downloadTime}`);
//   } catch (error) {
//     console.log("✗ Download Failed!");
//     console.log(`Error: ${error}`);
//   } finally {
//     console.log("=== Download process ended ===");
//   }
// }

// downloadManager("video.mp4", 150);

//Async await practise
// async function greet() {
//     return "Hello Ahmed";
// }
// console.log(greet());

// function authenticateUser() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//           resolve("login Successful")
//         }, 3000);
//     })
// }

// async function login() {
//     const result = await authenticateUser();

//     console.log(result);
// }

// login();

// function authenctiacteUser() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("Login Started");
//         }, 2000);
//     });
// }

// async function loginUser() {
//     console.log("Authentication has started");
//     const result = await authenctiacteUser();
//     console.log(result);
//     console.log("Welcome my hero");
// }
// console.log("Program Started");

// loginUser();

// authenticateUser()
//     .then((result) => {
//         console.log(result);
//     }).catch((error) => {
//         console.log(error);
//     });

// function authenticateUser() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             reject("Invalid email or password")
//         }, 2000);
//     });
// }

// async function logIn() {
//     try{
//     const result = await authenticateUser();
//     console.log(result);
//     } catch(err) {
//     console.log(err);
//     }
// }
// logIn();

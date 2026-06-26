// // const h1 = document.querySelector("#heading1");
// // const p1 = document.querySelector("#p1");
// // const all = document.querySelectorAll(".text");
// // const h2 = document.querySelector("#heading2");
// // const task = document.querySelector("#task");

// // console.log(h1);
// // console.log(p1);
// // all.forEach((item) => {
// //     console.log(item.textContent)
// // });

// // h2.textContent = "Learning Dom";
// // h2.innerHTML = "<b>Learning Dom</b>";

// // task.addEventListener("input", () => {
// //     console.log(task.value);
// // })
// // const btn = document.querySelector("#btn");

// // btn.addEventListener("click", () => {
// //   const input = document.querySelector("#name");
// //   let heading = document.querySelector("#heading");
// //   heading.style.color = "blue";
// //   heading.style.backgroundColor = "yellow";
// //   heading.textContent = input.value;
// //   console.log(input.value);

// //   input.value = "";

// //   input.focus();
// // });

// // const input = document.querySelector("#name");
// // const heading = document.querySelector("#heading");
// // const btn = document.querySelector("#btn");

// // btn.addEventListener("click", () => {
// //   input.addEventListener("click",() => {
// //     console.log(input.value);
// //   });
// //   heading.textContent = input.value;
// //   heading.style.color = "blue";

// //   heading.style.backgroundColor = "yellow";

// // });
// //   input.value = "";
// //   input.focus();

// // const input = document.querySelector("#name");
// // const heading = document.querySelector("#heading");
// // const btn = document.querySelector("#btn");
// // heading.textContent = "DOM MASTER";
// // heading.style.color = "red";
// // btn.addEventListener("click", () => {
// //   console.log(input.value);
// //   heading.textContent = input.value;
// //   input.value = "";
// // input.focus();
// // });

// // const btn = document.querySelector("#btn");
// // const heading = document.querySelector("#heading");
// // btn.addEventListener("click", () => {
// //   heading.style.color = "blue";
// // });

// const list = document.querySelector("#list");
// const btn = document.querySelector("#btn");

// const ul = document.createElement("#li");

// // btn.addEventListener("click", () => {
// //   ul.appendChild(listelem);
// // })
// // btn.addEventListener("dblclick", () => {
// //   ul.appendChild(listelem);
// // })

// const list = document.querySelector("#list");
// const btn = document.querySelector("#btn");
// let count = 1;

// btn.addEventListener("click", () => {
//   const li = document.createElement("li");
//   li.textContent = `Task ${count++}`;
//   list.appendChild(li)
// });

const input = document.querySelector("#task");
const btn = document.querySelector("#btn");
const list = document.querySelector("#list");

btn.addEventListener("click", () => {
  console.log(input.value);
  if (input.value.trim() === "") {
    console.log("task cannot be empty");
    return;
  }
  const li = document.createElement("li");
  li.textContent = input.value;
  list.appendChild(li);

  input.value = "";
  input.focus();
});

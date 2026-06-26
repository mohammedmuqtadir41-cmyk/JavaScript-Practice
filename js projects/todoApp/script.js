const input = document.querySelector("#task");
const btn = document.querySelector("#btn");
const list = document.querySelector("#list");
const count = document.querySelector("#count");

function updateCount() {
  count.textContent = `Tasks: ${list.children.length}`;
}

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    btn.click();
  }
});

btn.addEventListener("click", () => {
  if (input.value.trim() === "") {
    console.log("Task cannot be empty");
    return;
  }

  const li = document.createElement("li");
  li.textContent = input.value;
  list.appendChild(li);

  updateCount();

  


  const completebtn = document.createElement("button");
  completebtn.textContent = "Complete";
  li.appendChild(compltbtn);
 
  completebtn.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  const delbtn = document.createElement("button");
  delbtn.textContent = "Delete";

  li.appendChild(delbtn);


  delbtn.addEventListener("click", () => {
    li.remove();
    updateCount();
  });
  input.value = "";

  input.focus();
});

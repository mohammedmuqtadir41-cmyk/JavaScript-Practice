const taskinput = document.querySelector("#taskinput");
const button = document.querySelector("#button");
const tasklist = document.querySelector("#tasklist");

window.addEventListener("load", loadTasks);

button.addEventListener("click", addTask);

taskinput.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        addTask();
    }
});

function addTask(){

    const input = taskinput.value.trim();

    if(input === ""){
        alert("Please enter a task");
        return;
    }

    createTask(input,false);

    saveTasks();

    taskinput.value="";
}

function createTask(text,completed){

    const li=document.createElement("li");

    if(completed){
        li.classList.add("completed");
    }

    const span=document.createElement("span");
    span.textContent=text;

    span.addEventListener("click",function(){

        li.classList.toggle("completed");
        saveTasks();

    });

    const delbtn=document.createElement("button");
    delbtn.textContent="Delete";
    delbtn.classList.add("delete");

    delbtn.addEventListener("click",function(){

        li.remove();
        saveTasks();

    });

    li.appendChild(span);
    li.appendChild(delbtn);

    tasklist.appendChild(li);

}

function saveTasks(){

    const tasks=[];

    document.querySelectorAll("#tasklist li").forEach(function(li){

        tasks.push({
            text:li.querySelector("span").textContent,
            completed:li.classList.contains("completed")
        });

    });

    localStorage.setItem("tasks",JSON.stringify(tasks));

}

function loadTasks(){

    const tasks=JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(function(task){

        createTask(task.text,task.completed);

    });

}
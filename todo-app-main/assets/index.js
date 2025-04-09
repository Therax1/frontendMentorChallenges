
const dark = document.querySelector(".dark")
const light = document.querySelector(".light")
const circle = document.querySelector(".circle")
const circl = document.querySelector(".available-btn-completed")
const input = document.querySelector("#todo")

// Light Dark Mode
dark.addEventListener("click", () =>{
    dark.setAttribute("hidden", "hidden")
    light.removeAttribute("hidden", "hidden")
})

light.addEventListener("click", () =>{
    light.setAttribute("hidden", "hidden")
    dark.removeAttribute("hidden", "hidden")
})

circle.addEventListener("click", ()=>{
    document.querySelector(".the-circle").classList.toggle("gradient")
})

// circl.addEventListener("click", ()=>{
//     document.querySelector(".the-circle").classList.add("available-1")
//     document.querySelector(".the-circle").classList.toggle("gradient")
// })



// Keydown PRESS Enter && Creating Tasks 

const availableTodo = document.querySelector(".listing-available-todo")
input.addEventListener("keydown", (e)=>{
    if(e.code == "Enter" && input.value.trim() != ""){
        // Creating the circle to append it in the li/
        const li = document.createElement("li")
        li.classList.add("todo")
        li.setAttribute("draggable", "true")

        const todoCirclContainer = document.createElement("div")
        todoCirclContainer.classList.add("todo-circle")

        const todoCircleCreate = document.createElement("div")
        todoCircleCreate.classList.add("the-circle")

        const todoCircle = todoCirclContainer;
        todoCircle.appendChild(todoCircleCreate)
        
        li.appendChild(todoCircle)

        // Creating the task text content to append it un the li element
        const contentContainer = document.createElement("div")
        contentContainer.classList.add("content")
        
        const content = document.createElement("p")
        content.classList.add("todo-content")
        content.textContent = input.value;
        contentContainer.appendChild(content)

        contentContainer.appendChild(content);
        li.appendChild(contentContainer);

        // Creating the cross button to append it in the li element
        // const button = document.createElement("button")
        // button.classList.add("cross")
        const img = document.createElement("img")
        img.classList.add("cross")
        img.setAttribute("src", "./images/icon-cross.svg")
        img.setAttribute("alt", "Just a cross")
        // button.appendChild(img)
        
        li.appendChild(img)

        availableTodo.appendChild(li);

        input.value = "";
        taskCount()
    }
})

// Count Tasks 
function taskCount(){
    const taskcount = document.querySelectorAll(".todo").length
    document.querySelector(".count").textContent = taskcount;
}

// Delete a task
const container = document.querySelector(".listing-available-todo");

container.addEventListener("click", function (e) {
  if (e.target.tagName == "IMG") {
    e.target.parentElement.remove(); // supprime le <li> parent
    taskCount(); // mets à jour le compteur
  }
});

// Drag And Drop gon kill me naa


// let dragged = null;

// document.querySelectorAll(".todo").forEach(item => {
//   item.addEventListener("dragstart", (event) => {
//     dragged = event.target;
//     event.target.style.opacity = "0.5";
//   });

//   item.addEventListener("dragover", (event) => {
//     event.preventDefault(); // autoriser le drop
//   });

//   item.addEventListener("drop", (event) => {
//     event.preventDefault();
//     event.target.style.opacity = "1";
    
//     const parent = event.target.parentNode;
//     if (dragged !== event.target) {
//       // Insérer dragged AVANT la cible
//       parent.insertBefore(dragged, event.target);
//     }
//   });

//   item.addEventListener("dragend", () => {
//     dragged.style.opacity = "1";
//     dragged = null;
//   });
// });





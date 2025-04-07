
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



// Keydown PRESS Enter

const availableTodo = document.querySelector(".listing-available-todo")
input.addEventListener("keydown", (e)=>{
    if(e.code == "Enter" && input.value.trim() != ""){
        // Creating the circle to append it in the li/
        const li = document.createElement("li")
        li.classList.add("todo")

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
        const button = document.createElement("button")
        button.classList.add("cross")
        const img = document.createElement("img")
        img.setAttribute("src", "./images/icon-cross.svg")
        img.setAttribute("alt", "Just a cross")
        button.appendChild(img)
        
        li.appendChild(button)

        availableTodo.appendChild(li);

        input.value = "";
        taskCount()
    }
})

// Count Tasks 
function taskCount(){
    const taskscount = document.querySelectorAll(".todo").length
    document.querySelector(".count").textContent = taskscount;
}

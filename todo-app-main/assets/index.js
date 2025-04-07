
const dark = document.querySelector(".dark")
const light = document.querySelector(".light")
const circle = document.querySelector(".circle")
const circl = document.querySelector(".available-btn-completed")

dark.addEventListener("click", () =>{
    dark.setAttribute("hidden", "hidden")
    light.removeAttribute("hidden", "hidden")
})

light.addEventListener("click", () =>{
    light.setAttribute("hidden", "hidden")
    dark.removeAttribute("hidden", "hidden")
})

circle.addEventListener("click", ()=>{
    document.querySelector(".the-circle").style.background ='linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))'
})

circl.addEventListener("click", ()=>{
    document.querySelector(".the-circle").style.background ='linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))'
})
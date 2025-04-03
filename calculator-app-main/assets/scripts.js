const screen  = document.querySelector(".screen-display");
const Screen = document.querySelector(".screen")
const buttons  = document.querySelectorAll(".btn");
const reset  = document.querySelector(".reset");
const equal  = document.querySelector(".equal");
const deleted = document.querySelector(".del");
const themeChange = document.querySelector(".theme-changing")
const body = document.querySelector("body")
const green = document.querySelector(".green")
const keypad = document.querySelector(".numberpOp")
const up = document.querySelector(".up")


themeChange.addEventListener("click", ()=>{
        Screen.classList.toggle("screen-theme2")
        screen.classList.toggle("screen-display-theme2")
        body.classList.toggle("body-theme2")
        equal.classList.toggle("equal-theme2")
        green.classList.toggle("green-theme2")
        buttons.forEach(button => {
            button.classList.toggle("button-theme2")
        })
        keypad.classList.toggle("numberpOp-theme2")
        up.classList.toggle("up.theme2")

})


//FOnctionnalités de la calculatrice
buttons.forEach(button => {
    button.addEventListener("click", ()=>{
        const value = button.textContent;
        screen.textContent += value
    })
});

reset.addEventListener("click",  ()=>{
    screen.textContent = "";
});

deleted.addEventListener("click", ()=>{
    screen.textContent = screen.textContent.slice(0, -1)
});

equal.addEventListener("click", ()=>{
   try{
        let result = eval(screen.textContent);
        if(result == Infinity || result == undefined || isNaN(result)){
            screen.textContent = "Impossible";
        }else{
            screen.textContent = result;
        }
   } catch{
        screen.textContent = "Erreur"
   }
});




















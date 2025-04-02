const screen  = document.querySelector(".screen-display");
const buttons  = document.querySelectorAll(".btn");
const reset  = document.querySelector(".reset");
const equal  = document.querySelector(".equal");
const deleted = document.querySelector(".del");

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




















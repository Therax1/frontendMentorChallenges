const buttonclick = document.querySelector(".calculate");
const part2 = document.querySelector(".part2")
partCalc = document.querySelector(".part2-calculated")
const clearAll = document.querySelector(".clearAll")

document.querySelectorAll(".type").forEach(input => {
  input.addEventListener('change', function() {
    document.querySelectorAll('.option').forEach(div => {
      div.classList.remove('select-radio')
    })

    if(this.checked){
      this.parentElement.classList.add('select-radio')
    }
  })
});

document.querySelector('.clearAll').addEventListener("click", ()=>{
  
}) 

// buttonclick.addEventListener('click', ()=>{
//   part2.classList.toggle("none")
//   partCalc.classList.toggle("none")
// })
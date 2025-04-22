const buttonclick = document.querySelector(".calculate");
const part2 = document.querySelector(".part2")
partCalc = document.querySelector(".part2-calculated")

buttonclick.addEventListener('click', ()=>{
  part2.classList.toggle("none")
  partCalc.classList.toggle("none")
})
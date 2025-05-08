const btnRules = document.querySelector(".rules-btn");
const btnClose = document.querySelector(".close-btn");
const modalRules = document.querySelector(".modal");


// Show/Hide Rules
btnRules.addEventListener("click", () => {
  modalRules.classList.toggle("show-modal");
});
btnClose.addEventListener("click", () => {
  modalRules.classList.toggle("show-modal");
});


document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const amountInput = document.querySelector("#amt");
    const interestInput = document.querySelector("#rate");
    const yearsInput = document.querySelector("#term");
    const result = document.querySelector(".money");
    const errorBox = document.querySelector(".error-states");
    const partChange = document.querySelector(".part-2");
    const resultShow = document.querySelector(".part-2-calculated")
    const mortgageTypes  = document.querySelectorAll(".mortgage-type");
    const clearAll = document.querySelector(".text500");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      
      partChange.classList.add("none")
      resultShow.classList.remove("none")


      // On récupère les valeurs
      const amt = parseFloat(amountInput.value);
      const annualInterest = parseFloat(interestInput.value);
      const years = parseInt(yearsInput.value);
  
      // Validation
      if (isNaN(amt) || isNaN(annualInterest) || isNaN(years)) {
        showError("The Field is required");
        return;
      }
  
      // Calcul
      const monthlyInterest = annualInterest / 100 / 12;
      const numberOfPayments = years * 12;
  
      const monthly =
        (amt * monthlyInterest * Math.pow(1 + monthlyInterest, numberOfPayments)) /
        (Math.pow(1 + monthlyInterest, numberOfPayments) - 1);
  
      if (!isFinite(monthly)) {
        alery("Impossible de calculer. Vérifiez les valeurs.");
        return;
      }
  
      const total = monthly * numberOfPayments;
  
      result.textContent = monthly.toFixed(2);
      errorBox.textContent = ""; // Clear error
    });
  
    function showError(message) {
      errorBox.textContent = message;
      result.innerHTML = "";
    }

  mortgageTypes.forEach(input => {
    input.addEventListener("change", function(){
      document.querySelectorAll(".option").forEach(div => {
        div.classList.remove("yellow");
      })
      if(this.checked){
        this.parentElement.classList.add("yellow")
      }
    })
  })

  clearAll.addEventListener("click", ()=>{
    amountInput.value = "";
    interestInput.value = "";
    yearsInput.value = "";
    resultShow.value = "";
    
  })


})
  
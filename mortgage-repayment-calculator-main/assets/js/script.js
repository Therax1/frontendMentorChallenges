document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const amountInput = document.querySelector("#amt");
    const interestInput = document.querySelector("#rate");
    const yearsInput = document.querySelector("#term");
    const result = document.querySelector(".money");
    const errorBox = document.querySelector(".error-states");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
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
  
    // Permet de naviguer et soumettre au clavier
    [amountInput, interestInput, yearsInput].forEach(input => {
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          form.dispatchEvent(new Event("submit"));
        }
      });
    });
  
    function showError(message) {
      errorBox.textContent = message;
      result.innerHTML = "";
    }
  });
  
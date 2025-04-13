// Récupération des éléments du DOM
const form = document.querySelector("form");
const emailInput = document.querySelector("#email");
const message = document.querySelector(".error-state");
const Success = document.querySelector(".success-msg-container")
const strong = document.querySelector("strong")
const dimiss = document.querySelector(".dimiss-btn")

// Fonction de validation d'email (regex basique mais efficace)
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Gestionnaire de soumission du formulaire
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Empêche l'envoi par défaut

  const email = emailInput.value.trim(); // Nettoie les espaces

  if (email === "") {
    showError("Enter something");
  } else if (!isValidEmail(email)) {
    showError("Valid email required");
  } else {
    showSuccess();
  }
});

// Fonction pour afficher les erreurs
function showError(errorText) {
  message.textContent = errorText;
  message.style.color = "red";
  emailInput.style.backgroundColor = "#FF0000";
  emailInput.style.border = "2px solid red";
}

// Fonction pour afficher le succès
function showSuccess() {
  form.setAttribute("hidden", "hidden");
  Success.removeAttribute("hidden")
  strong.textContent = emailInput.value;
}

dimiss.addEventListener("click", ()=>{
    form.removeAttribute("hidden", "hidden");
    Success.setAttribute("hidden", "hidden")
    emailInput.value = "";
})

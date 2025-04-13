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
  message.style.color = "hsl(4, 100%, 67%)";
  emailInput.style.backgroundColor = "";
  emailInput.style.border = "2px solid hsl(4, 100%, 67%)";
}

// Fonction pour afficher le succès
function showSuccess() {
  form.classList.toggle("none");
  Success.classList.toggle("none");
  strong.textContent = emailInput.value;
}

dimiss.addEventListener("click", ()=>{
    form.classList.toggle("none");
    Success.classList.toggle("none");
    emailInput.value = "";

})

// Supprime l'erreur quand l'utilisateur recommence à taper
emailInput.addEventListener("input", () => {
  message.textContent = "";
  emailInput.style.border = ""; // Supprime la bordure rouge
});


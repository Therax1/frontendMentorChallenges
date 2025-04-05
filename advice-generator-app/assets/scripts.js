//Listes de Citations
let button = document.querySelector(".generated-btn");
let quotesDiv = document.querySelector("p.quotes");
let quoteNumber = document.querySelector("span.indexnumber");


const quotes = [
    "La vie est ce qui arrive quand on est occupé à faire d'autres projets. - John Lennon",
    "Ne pleure pas parce que c'est fini, souris parce que c'est arrivé. - Dr. Seuss",
    "Le succès est la somme de petits efforts répétés jour après jour. - Robert Collier",
    "N'attendez pas. Le temps ne sera jamais juste. - Napoleon Hill",
    "La seule façon de faire du bon travail est d'aimer ce que vous faites. - Steve Jobs"
];

button.addEventListener("click", () => {
    let indexgenerated = Math.floor(Math.random() * quotes.length);
    let selected = quotes[indexgenerated];
    quotesDiv.innerHTML = selected;
    quoteNumber.innerHTML = indexgenerated + 1;
});


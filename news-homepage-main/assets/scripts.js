const burgermenu = document.querySelector(".burger-menu");


window.addEventListener("resize", ()=>{
    if (window.innerWidth <= 375) {
        burgermenu.style.display = "block"; // Affiche le menu burger
    }else {
        burgermenu.style.display = "none"; // Cache le menu burger
    }
})

// burgermenu.addEventListener("click", () => {
//     burgermenu.style.display = block;
// })
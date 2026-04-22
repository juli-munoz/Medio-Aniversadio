function mostrarSorpresa() {
    document.getElementById("sorpresa").style.display = "block";
}

function crearCorazon() {
    const corazon = document.createElement("div");
    corazon.classList.add("corazon");
    corazon.innerHTML = "★";

    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.fontSize = (Math.random() * 15 + 10) + "px";

    document.body.appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 6000);
}

setInterval(crearCorazon, 800);
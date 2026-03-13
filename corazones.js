function crearCorazon(){
    const corazon = document.createElement("div");
    corazon.classList.add("corazon");
    corazon.innerHTML = "💗";

    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.fontSize = Math.random() * 20 + 20 + "px";

    document.body.appendChild(corazon);

    setTimeout(()=>{
        corazon.remove();
    },4000);
}

setInterval(crearCorazon, 300);
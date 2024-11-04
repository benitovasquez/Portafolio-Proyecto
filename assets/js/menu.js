document.addEventListener("DOMContentLoaded", (event) => {
    let button = document.querySelector(".layout__menu-toggle");
    let iconBars = document.querySelector(".layout__menu-toggle .fa-bars");
    let iconXmark = document.querySelector(".layout__menu-toggle .fa-xmark");
    let aside = document.querySelector(".layout__aside");

    // Recuperar el estado guardado del menú y aplicar la clase para transiciones
    if (localStorage.getItem("menuVisible") === "true") {
        aside.classList.add("layout__aside--visible");
        iconBars.style.opacity = 0;
        iconXmark.style.opacity = 1;
    }

    // Retrasar la activación de la transición para evitar efecto al cargar
    setTimeout(() => {
        aside.classList.add("transition-enabled");
    }, 100);  // 100 ms después de cargar la página

    button.addEventListener("click", (event) => {
        let isVisible = aside.classList.contains("layout__aside--visible");
        if (!isVisible) {
            aside.classList.add("layout__aside--visible");
            iconBars.style.opacity = 0;
            iconXmark.style.opacity = 1;
            localStorage.setItem("menuVisible", "true");
        } else {
            aside.classList.remove("layout__aside--visible");
            iconBars.style.opacity = 1;
            iconXmark.style.opacity = 0;
            localStorage.setItem("menuVisible", "false");
        }
    });

    window.addEventListener("resize", ()=>{
        let size = parseInt(document.body.clientWidth);
        if (size <= 1060) {
            aside.classList.remove("layout__aside--visible");
            iconBars.style.opacity = 1;
            iconXmark.style.opacity = 0;
            localStorage.setItem("menuVisible", "false");
        }
    });
});




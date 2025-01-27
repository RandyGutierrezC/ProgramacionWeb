document.addEventListener("DOMContentLoaded", () => {
    // Seleccionamos todos los botones con la clase "styled-button"
    const buttons = document.querySelectorAll(".styled-button");

    // Agregamos un evento click a cada botón
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            // Obtenemos el ID del destino desde el atributo data-target
            const targetId = button.getAttribute("data-target");
            const targetElement = document.getElementById(targetId);

            // Si el elemento objetivo existe, realizamos el desplazamiento
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth", // Suaviza el desplazamiento
                    block: "start" // Alinea al inicio de la sección
                });
            }
        });
    });

    // Botón para volver al principio
    const backToTopButton = document.getElementById("backToTop");

    // Mostrar/ocultar el botón dependiendo del desplazamiento
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    // Desplazarse al inicio al hacer clic en el botón
    backToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});



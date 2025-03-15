document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        let navbar = document.querySelector("nav");
        if (window.scrollY > 50) {
            navbar.classList.add("bg-primary", "shadow");
        } else {
            navbar.classList.remove("bg-primary", "shadow");
        }
    });
});


document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        let targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

function verificarRespuesta(respuesta) {
    let resultado = document.getElementById("respuesta");
    if (respuesta === "Grace Hopper") {
        resultado.innerText = "✅ ¡Correcto!";
        resultado.style.color = "green";
    } else {
        resultado.innerText = "❌ Incorrecto. Inténtalo de nuevo.";
        resultado.style.color = "red";
    }
}

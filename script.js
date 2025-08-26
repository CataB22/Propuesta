document.addEventListener("DOMContentLoaded", () => {
    const siBtn = document.getElementById("siBtn");
    const noBtn = document.getElementById("noBtn");
    const mensajeFinal = document.getElementById("mensajeFinal");
    const preguntaSection = document.querySelector(".question");

    // Acción del botón "Sí"
    siBtn.addEventListener("click", () => {
        // Animar el botón "Sí" para que rebote
        siBtn.classList.add("bounce-animation");
        setTimeout(() => {
            siBtn.classList.remove("bounce-animation");
        }, 700);

        // Mostrar mensaje final en la página
        mensajeFinal.textContent = "Cada día contigo es único, y ahora comienza nuestra nueva historia 💖 TE AMOOOOOOOOOOOOOOOOO";
        mensajeFinal.style.display = "block";

        // Ocultar los botones
        siBtn.style.display = "none";
        noBtn.style.display = "none";

        // Crear serpentinas
        crearSerpentinas();
    });

    // Hacer que el botón "No" escape del mouse solo dentro de la sección pregunta
    noBtn.addEventListener("mouseover", () => {
        const sectionRect = preguntaSection.getBoundingClientRect();
        const btnWidth = noBtn.offsetWidth;
        const btnHeight = noBtn.offsetHeight;

        const maxX = sectionRect.width - btnWidth;
        const maxY = sectionRect.height - btnHeight;

        const x = Math.floor(Math.random() * maxX);
        const y = Math.floor(Math.random() * maxY);

        noBtn.style.position = "absolute";
        noBtn.style.left = x + "px";
        noBtn.style.top = y + "px";
        noBtn.style.margin = "0";
    });

    // Función para crear serpentinas
    function crearSerpentinas() {
        const colors = ['#e75480', '#ff9eb5', '#ffc2d4', '#ff6b6b', '#ffa5a5', '#ff7b7b'];
        
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            
            // Posición aleatoria en la parte superior
            confetti.style.left = Math.random() * 100 + 'vw';
            
            // Color aleatorio
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            
            // Tamaño aleatorio
            const size = Math.random() * 10 + 5;
            confetti.style.width = size + 'px';
            confetti.style.height = size * 2 + 'px';
            
            // Duración aleatoria de la animación
            const duration = Math.random() * 3 + 2;
            confetti.style.animation = `fall ${duration}s linear forwards`;
            
            document.body.appendChild(confetti);
            
            // Eliminar la serpentina después de que termine la animación
            setTimeout(() => {
                confetti.remove();
            }, duration * 1000);
        }
    }
});
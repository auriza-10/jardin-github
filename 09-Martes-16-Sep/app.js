console.log("Jardín Github. Ejercicio 09: Rectángulo que se mueve al darle click)");

const canvas = document.getElementById("lienzo");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');

window.addEventListener("mousedown", function () {
    gsap.to(".rectangulo", {
        duration: 1,
        x: Math.random() * (window.innerWidth - 100), 
        y: Math.random() * (window.innerHeight - 100),                  
        ease: "power2.inOut"
    });
}
);
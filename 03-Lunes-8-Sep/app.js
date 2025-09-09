console.log("Jardín Github. Ejercicio 03: Autorretrato abstracto");

const canvas = document.getElementById("lienzo");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Definir contexto 2D
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.fillStyle = "#d0a466ff";
ctx.rect(600, 200, 200, 250);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "#d0a466ff";
ctx.rect(650, 300, 100, 200);
ctx.fill();
ctx.closePath();

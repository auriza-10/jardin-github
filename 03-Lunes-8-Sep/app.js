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

ctx.beginPath();
ctx.strokeStyle= "#000";
ctx.lineWidth = 5;
ctx.fillStyle = "#fff";
ctx.ellipse(650, 300, 20, 15, 0, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle= "#000";
ctx.ellipse(650, 300, 10, 14, 0, 0, 2 * Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle= "#000";
ctx.lineWidth = 5;
ctx.fillStyle = "#fff";
ctx.ellipse(750, 300, 30, 15, 0, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle= "#000";
ctx.ellipse(650, 300, 10, 14, 0, 0, 2 * Math.PI);
ctx.fill();
ctx.closePath();

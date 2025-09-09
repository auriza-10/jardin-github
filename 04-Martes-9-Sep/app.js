console.log("Jardín Github. Ejercicio 04: Composición de líneas");

const canvas = document.getElementById("lienzo");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Definir contexto 2D
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.strokeStyle= "#005b86ff";
ctx.lineWidth= 8;
ctx.moveTo(0, 1200);
ctx.lineTo(0, 0);
ctx.moveTo(20, 1200);
ctx.lineTo(20, 0);
ctx.moveTo(40, 1200);
ctx.lineTo(40, 0);
ctx.moveTo(60, 1200);
ctx.lineTo(60, 0);
ctx.stroke();
ctx.closePath();




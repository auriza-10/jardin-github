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

ctx.beginPath();
ctx.strokeStyle= "#38a8dcff";
ctx.lineWidth= 4;
ctx.moveTo(0, 5);
ctx.lineTo(150, 5);
ctx.moveTo(15, 15);
ctx.lineTo(150, 15);
ctx.moveTo(35, 25);
ctx.lineTo(150, 25);
ctx.moveTo(55, 35);
ctx.lineTo(150, 35);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle= "#00861bff";
ctx.lineWidth= 8;
ctx.moveTo(150, 1200);
ctx.lineTo(150, 0);
ctx.moveTo(170, 1200);
ctx.lineTo(170, 0);
ctx.moveTo(190, 1200);
ctx.lineTo(190, 0);
ctx.moveTo(210, 1200);
ctx.lineTo(210, 0);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle= "#5cdc38ff";
ctx.lineWidth= 4;
ctx.moveTo(145, 45);
ctx.lineTo(300, 45);
ctx.moveTo(165, 55);
ctx.lineTo(300, 55);
ctx.moveTo(185, 65);
ctx.lineTo(300, 65);
ctx.moveTo(205, 75);
ctx.lineTo(300, 75);
ctx.stroke();
ctx.closePath();




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

ctx.beginPath();
ctx.strokeStyle= "#be4200ff";
ctx.lineWidth= 8;
ctx.moveTo(300, 1200);
ctx.lineTo(300, 0);
ctx.moveTo(320, 1200);
ctx.lineTo(320, 0);
ctx.moveTo(340, 1200);
ctx.lineTo(340, 0);
ctx.moveTo(360, 1200);
ctx.lineTo(360, 0);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle= "#fc6500ff";
ctx.lineWidth= 4;
ctx.moveTo(295, 85);
ctx.lineTo(450, 85);
ctx.moveTo(315, 95);
ctx.lineTo(450, 95);
ctx.moveTo(335, 105);
ctx.lineTo(450, 105);
ctx.moveTo(355, 115);
ctx.lineTo(450, 115);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle= "#6e0042ff";
ctx.lineWidth= 8;
ctx.moveTo(450, 1200);
ctx.lineTo(450, 0);
ctx.moveTo(470, 1200);
ctx.lineTo(470, 0);
ctx.moveTo(490, 1200);
ctx.lineTo(490, 0);
ctx.moveTo(510, 1200);
ctx.lineTo(510, 0);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle= "#c900d7ff";
ctx.lineWidth= 4;
ctx.moveTo(445, 125);
ctx.lineTo(600, 125);
ctx.moveTo(465, 135);
ctx.lineTo(600, 135);
ctx.moveTo(485, 145);
ctx.lineTo(600, 145);
ctx.moveTo(505, 155);
ctx.lineTo(600, 155);
ctx.stroke();
ctx.closePath();




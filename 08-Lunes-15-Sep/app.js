console.log("Jardín Github. Ejercicio 08: Boomerang");

const canvas = document.getElementById("lienzo");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');

ctx.fillStyle = 'black';
ctx.lineWidth = 15;

for (let i = 0; i < 2; i++) {
  let dir = i === 0 ? -1 : 1;

  let x = 400 + dir * 50; // dir = dirección
  let y = 300 + 60;

  ctx.beginPath();
  ctx.ellipse(x, y, 70, 25, dir * Math.PI / 5, 0, 3 * Math.PI);
  ctx.fill();
}







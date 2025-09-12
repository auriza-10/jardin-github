console.log("Jardín Github. Ejercicio 06: Composición estilo OP ART");

const canvas = document.getElementById("lienzo");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');

const colorA = "#000";
const colorB = "#ffffffff";

// Patrón de los cuadrados
let espacio = 40;
for (let x = 0; x < canvas.width; x += espacio) {
  for (let y = 0; y < canvas.height; y += espacio) {
    let tamaño = Math.abs(Math.sin((x + y) * 0.01)) * espacio * 1.5;

    ctx.fillStyle = (x + y) % (espacio * 2) === 0 ? colorA : colorB;

    ctx.fillRect(
      x + espacio / 2 - tamaño / 2,
      y + espacio / 2 - tamaño / 2,
      tamaño,
      tamaño
    );
  }
}

// Patrón de los círculos
let centroX = canvas.width / 2;
let centroY = canvas.height / 2;
let radioMax = 300;
let paso = 20;

for (let r = radioMax; r > 0; r -= paso) {
  ctx.beginPath();
  ctx.fillStyle = r % (paso * 2) === 0 ? colorA : colorB;
  ctx.arc(centroX, centroY, r, 0, Math.PI * 2);
  ctx.fill();
}



console.log("Jardín Github. Ejercicio 12: Objeto 3D que al hacer click en el boton el mesh se anime y gire 720 grados.");
console.log(THREE);

const canvas = document.getElementById("lienzo");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight; 

const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  canvas: canvas,
});
renderer.setSize(window.innerWidth, window.innerHeight);
const camera = new THREE.PerspectiveCamera(45, canvas.width / canvas.height, 0.1, 1000);
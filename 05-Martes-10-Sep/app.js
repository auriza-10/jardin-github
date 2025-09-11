console.log("Jardín Github. Ejercicio 05: Creación de un árbol");
console.log(THREE);

//Configurar canvas
const canvas = document.getElementById("lienzo");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Escena, cámara y render
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, canvas.width / canvas.height, 0.1, 1000);
camera.position.z = 60;

const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(canvas.width, canvas.height);


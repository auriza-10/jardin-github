console.log("Jardín Github. Ejercicio 07: Objeto 3D que cambia de color cada que la ventana cambia de tamaño");
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

const geometry = new THREE.TorusKnotGeometry();

const material = new THREE.MeshBasicMaterial({ color: "#ff0000" }); 

const torusKnot = new THREE.Mesh(geometry, material);
scene.add(torusKnot);
torusKnot.position.z = -5;
torusKnot.rotation.x = 45;

function animate() {
    requestAnimationFrame(animate);
    torusKnot.rotation.x += 0.01;
    torusKnot.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

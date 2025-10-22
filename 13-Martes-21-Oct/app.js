console.log("Jardín Github. Ejercicio 13: Float the Mesh");
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

//Geometría para la esfera
const geometry = new THREE.SphereGeometry(5, 32, 16);
const material = new THREE.MeshBasicMaterial({ color: 0x40efff });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);
sphere.position.z = -10;

// Animación de levitación
let clock = new THREE.Clock();
function animate() {
  requestAnimationFrame(animate);
    let elapsed = clock.getElapsedTime();
    sphere.position.y = Math.sin(elapsed) * 10; 
  renderer.render(scene, camera);
}
animate();
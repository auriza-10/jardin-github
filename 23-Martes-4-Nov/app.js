console.log("Jardín Github ");
console.log(THREE);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('scene'), antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// Luces
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(10, 10, 10);
scene.add(ambientLight, pointLight);

// Material metálico
const material = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  metalness: 1,
  roughness: 0.2
});

// Geometrías
const torus = new THREE.Mesh(new THREE.TorusGeometry(0.8, 0.3, 16, 100), material);
const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.8, 32, 32), material);
const box = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.2, 1.2), material);

torus.position.x = -2;
box.position.x = 2;

scene.add(torus, sphere, box);

// Animación de rotación
function animate() {
  requestAnimationFrame(animate);
  torus.rotation.y += 0.01;
  sphere.rotation.y += 0.01;
  box.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

// Responsividad
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

console.log("Jardín Github ");
console.log(THREE);

const canvas = document.getElementById('scene');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Escena y cámara
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Renderer
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor(0x000000); 

// Luces
const ambientLight = new THREE.AmbientLight(0xffffff, 1.2); 
const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(5, 5, 5);
scene.add(ambientLight, pointLight);

// Material metálico visible
const material = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  metalness: 0.8,
  roughness: 0.1
});

// Geometrías
const torus = new THREE.Mesh(new THREE.TorusGeometry(0.8, 0.3, 16, 100), material);
const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.8, 32, 32), material);
const box = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.2, 1.2), material);

torus.position.x = -2;
box.position.x = 2;

scene.add(torus, sphere, box);

// Animación
function animate() {
  requestAnimationFrame(animate);
  torus.rotation.y += 0.01;
  sphere.rotation.y += 0.01;
  box.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

// Ajustar en resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

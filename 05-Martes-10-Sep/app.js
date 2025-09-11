console.log("Jardín Github. Ejercicio 05: Composición de líneas en 3d");

const canvas = document.getElementById("lienzo");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);

const canvas = document.getElementById('lienzo');
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  canvas: canvas,
});
renderer.setSize(window.innerWidth, window.innerHeight);


const cantidadBloques = 10;
const separacionX = 150;
const offsetLineas = [0, 20, 40, 60];
const offsetHorizontales = [0, 10, 20, 30];
const largoHorizontal = 150;


const altoBloque = Math.min(1200, window.innerHeight * 0.9);

const totalAncho = cantidadBloques * separacionX;
const totalAlto = altoBloque;
const centroX = totalAncho / 2;
const centroY = totalAlto / 2;


const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  5000
);

// Calcular distancia
const fovRadians = (camera.fov * Math.PI) / 180;
const visibleHeight = totalAlto;
const distance = visibleHeight / (2 * Math.tan(fovRadians / 2));

camera.position.set(centroX, centroY, distance + totalAncho / 2);
camera.lookAt(centroX, centroY, 0);

// Colores 
const colores = [
  ['#005b86', '#38a8dc'],
  ['#00861b', '#5cdc38'],
  ['#be4200', '#fc6500'],
  ['#6e0042', '#c900d7'],
  ['#ae9704', '#fff200'],
  ['#ae0404', '#ff0000'],
  ['#4504ae', '#8000ff'],
  ['#009d7b', '#00ffc3'],
  ['#9d0047', '#ff0055'],
  ['#000a9d', '#000dff'],
];

// Geometrías
const verticalWidth = 8;
const horizontalHeight = 4;
const verticalGeometry = new THREE.BoxGeometry(verticalWidth, altoBloque, 1);
const horizontalGeometry = new THREE.BoxGeometry(largoHorizontal, horizontalHeight, 1);

for (let bloque = 0; bloque < cantidadBloques; bloque++) {
  const baseX = bloque * separacionX;
  const [colorV, colorH] = colores[bloque];

  const materialV = new THREE.MeshBasicMaterial({ color: colorV });
  const materialH = new THREE.MeshBasicMaterial({ color: colorH });

  // Líneas verticales
  for (let i = 0; i < offsetLineas.length; i++) {
    const x = baseX + offsetLineas[i];
    const lineaV = new THREE.Mesh(verticalGeometry, materialV);
    lineaV.position.set(x, altoBloque / 2, 0);
    scene.add(lineaV);
  }

  // Líneas horizontales
  for (let i = 0; i < offsetHorizontales.length; i++) {
    const y = i * 10 + bloque * 40 + 5;
    const lineaH = new THREE.Mesh(horizontalGeometry, materialH);
    lineaH.position.set(baseX + largoHorizontal / 2, y, 0);
    scene.add(lineaH);
  }
}

// luces
const light = new THREE.AmbientLight(0xffffff, 1);
scene.add(light);


function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
  const newHeight = Math.min(1200, window.innerHeight * 0.9);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
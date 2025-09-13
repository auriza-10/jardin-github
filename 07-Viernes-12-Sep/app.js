console.log("Jardín Github. Ejercicio 07: Objeto 3D que cambia de color o material cada que la ventana cambia de tamaño");
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

//const geometry = new THREE.TorusKnotGeometry();
const geometry = new THREE.TorusGeometry();
//const geometry = new THREE.CylinderGeometry();

const materials = [
  new THREE.MeshBasicMaterial({ color: 0xff0000 }), 
  new THREE.MeshStandardMaterial({ color: 0x00ff00 }), 
  new THREE.MeshPhongMaterial({ color: 0x0000ff, shininess: 100 }), 
  new THREE.MeshNormalMaterial(),
];

//const material = new THREE.MeshBasicMaterial({ color: "#ff0000" }); 

let currentMaterialIndex = 0;

const torusKnot = new THREE.Mesh(geometry, materials[currentMaterialIndex]);
scene.add(torusKnot);
torusKnot.position.z = -5;
torusKnot.rotation.x = 45;

function animate() {
    requestAnimationFrame(animate);
    torusKnot.rotation.x += 0.01;
    torusKnot.rotation.y += 0.01;
    renderer.render(scene, camera);
}

// Luz
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);



animate();

// Resize cambiando de material.
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = canvas.width / canvas.height;
  camera.updateProjectionMatrix();
  currentMaterialIndex = (currentMaterialIndex + 1) % materials.length;
  torusKnot.material = materials[currentMaterialIndex];
});

// Rezise cambiando de  colores.
/*window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = canvas.width / canvas.height;
    camera.updateProjectionMatrix();
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    torusKnot.material.color.set('#' + randomColor);
    console.log('Ventana redimensionada. Nuevo color:', '#' + randomColor);
});*/




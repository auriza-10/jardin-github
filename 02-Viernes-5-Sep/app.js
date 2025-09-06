console.log("Sesion 05. Ejercicio 03: Matcaps");
console.log(THREE);

const canvas = document.getElementById("lienzo");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// escena, cámara y render
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, canvas.width / canvas.height, 0.1, 1000);
camera.position.z = 60;

const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(canvas.width, canvas.height);

// Geometría para el conjunto de esferas que simulan al árbol
const geometry = new THREE.SphereGeometry(10, 25, 10);

// Cargar la textura matcap
const textureLoader = new THREE.TextureLoader();
const matcapMap = textureLoader.load(
  './texturas/verdee.png',
  function (texture) {
    const matcapMaterial = new THREE.MeshMatcapMaterial({ matcap: texture });

    // constantes para el árbol
    const niveles = 4;           
    const separacionY = 12;      
    const radioBase = 4;         
    const offsetX = 12;          

    for (let nivel = 0; nivel < niveles; nivel++) {
      const cantidad = radioBase - nivel;

      for (let i = 0; i < cantidad; i++) {
        const esfera = new THREE.Mesh(geometry, matcapMaterial);
        const x = (i - (cantidad - 1) / 2) * offsetX;
        const y = nivel * separacionY;

        esfera.position.set(x, y, -10);
        scene.add(esfera);
      }
    }
}
);
    

// Animación
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

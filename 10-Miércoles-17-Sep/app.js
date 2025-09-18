console.log("Jardín Github. Ejercicio 10: Cambiar el tronco de color al darle click a un botón");
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

//Geometría para las esferas
const geometry = new THREE.SphereGeometry(5, 25, 10);

// Variable global para el tronco
let tronco;

//Cargar textura matcap
const textureLoader = new THREE.TextureLoader();
textureLoader.load(
  './texturas/verde.png',
  function (texture) {
    const matcapMaterial = new THREE.MeshMatcapMaterial({ matcap: texture });

    // Crear esferas para simular un árbol
    const niveles = 4;
    const separacionY = 6;
    const radioBase = 4;
    const offsetX = 6;

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

    // Cargar textura del tronco
    textureLoader.load(
      './texturas/tronco.png',
      function (textureTronco) {
        const troncoGeometry = new THREE.CylinderGeometry(2, 4, 12, 16);
        const troncoMatcap = new THREE.MeshMatcapMaterial({ matcap: textureTronco });
        tronco = new THREE.Mesh(troncoGeometry, troncoMatcap); // ahora usa la variable global
        tronco.position.set(0, -10, -10);
        scene.add(tronco);

        //activar animación luego de agregar el tronco
        animate();
      },
      undefined,
      function (error) {
        console.error("Error al cargar la textura del tronco", error);
      }
    );
  },
  undefined,
  function (error) {
    console.error("Error al cargar la textura de las hojas", error);
  }
);

// animación
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

// Cambiar el color del tronco al darle click a un botón
const botonCambiarColor = document.getElementById("boton");
botonCambiarColor.addEventListener("click", function () {
  if (tronco) { // aseguramos que ya exista
    const colores = [0x8B4513, 0xA0522D, 0xD2691E, 0xCD853F, 0xF4A460];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    tronco.material.color.setHex(colorAleatorio);
  }
});

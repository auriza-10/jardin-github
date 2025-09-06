console.log("Jardín Github. Ejercicio 02: Creación de un árbol");
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

//Cargar textura matcap
const textureLoader = new THREE.TextureLoader();
textureLoader.load(
  './texturas/verdee.png',
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

    textureLoader.load(
        './texturas/tronco.png',
        function (textureTronco) {
            const troncoGeometry = new THREE.CylinderGeometry(2, 4, 12, 16);
            const troncoMatcap = new THREE.MeshMatcapMaterial({ matcap : textureTronco })
            const tronco = new THREE.Mesh(troncoGeometry, troncoMatcap);
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


    // activar animación después de agregar las esferas
 
undefined,
function(error){
    console.error("Error al cargar la textura de las hojas", error);
  }
);

// animación
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
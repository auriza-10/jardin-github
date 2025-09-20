console.log("Jardín Github. Ejercicio 12: Objeto 3D que al hacer click en el boton el mesh se anime y gire 720 grados.");
console.log(THREE);

const canvas = document.getElementById("lienzo");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, canvas.width / canvas.height, 0.1, 1000);
const geometry = new THREE.TorusKnotGeometry();

const material = new THREE.MeshNormalMaterial({ flatShading: true,});
const textureLoader = new THREE.TextureLoader();
var matcapMaterial;
var mesh;
var matcapMap = textureLoader.load(
   './texturas/plateado.png',
   function (texture) {
       matcapMaterial = new THREE.MeshMatcapMaterial( { matcap: texture } );
       mesh = new THREE.Mesh( geometry, matcapMaterial );
       scene.add(mesh);
       mesh.position.z= -8;
       animate();
   },

   undefined,
   function (error) { console.error("Algo salió mal con la textura", error);}
);


const renderer = new THREE.WebGLRenderer({ canvas : canvas});
renderer.setSize(canvas.width, canvas.height);

renderer.render(scene, camera);


function animate() {
   requestAnimationFrame(animate);

   mesh.rotation.x += 0.01;
   mesh.rotation.y += 0.01;

   renderer.render(scene, camera);
}



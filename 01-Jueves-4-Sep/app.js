console.log("Jardín Github ");
console.log(THREE);
console.log(gsap);

const canvas = document.getElementById('lienzo');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Escena
const scene = new THREE.Scene();

// Cámara
const camera = new THREE.PerspectiveCamera(45, canvas.width / canvas.height, 0.1, 1000);
camera.position.z = 50;

// Geometría más pequeña
const geometry = new THREE.SphereGeometry(8, 32, 16);
const material = new THREE.MeshBasicMaterial({ color: 0xefff40 });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);
sphere.position.z = -8;

// Renderer
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(canvas.width, canvas.height);


// Animación de rotación
function animate() {
  requestAnimationFrame(animate);
  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

// Movimiento de puesta de sol
window.addEventListener("mousedown", function () {
  const extremoIzq = -canvas.width / 50;
  const extremoDer = canvas.width / 50;
  const alturaMax = 20;

  // Posición inicial del sol
  sphere.position.x = extremoIzq;
  sphere.position.y = 0;

  // Animación de la puesta de sol
  gsap.to(sphere.position, {
    x: 0,
    y: alturaMax,
    duration: 4,
    ease: "power2.inOut",
    onComplete: function () {
      gsap.to(sphere.position, {
        x: extremoDer,
        y: 0,
        duration: 4,
        ease: "power2.inOut"
      });
    }
  });

  // Cambio de color del sol
  gsap.to(sphere.material.color, {
    color: "#ca5100",
    duration: 4,
    onComplete: function () {
      gsap.to(sphere.material.color, {
        color: "#efff40",
        duration: 3,
      });
    }
  });

  // Cambio del fondo 
  let colorProxy = { value: "#87ceeb" }; 

  gsap.to(colorProxy, {
    value: "#ff7f50", 
    duration: 4,
    ease: "power1.inOut",
    onUpdate: () => {
      renderer.setClearColor(new THREE.Color(colorProxy.value));
    }
  });
});


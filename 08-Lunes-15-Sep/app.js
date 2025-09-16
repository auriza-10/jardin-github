console.log("Jardín Github. Ejercicio 08: Boomerang");

const canvas = document.getElementById("lienzo");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');

window.addEventListener("mousedown", function () {
  gsap.to(".boomerang", {
    rotation: 360,
    duration: 1,
    repeat: -1,
    ease: "linear"
  });
  gsap.to(".boomerang", {
    duration: 2,
    x: window.innerWidth / 2, 
    y: -200,                  
    ease: "power2.inOut",
    onComplete: () => {
      gsap.to(".boomerang", {
        duration: 2,
        x: window.innerWidth - 150, 
        y: 0,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.to(".boomerang", {
            duration: 2,
            x: window.innerWidth / 2,
            y: -200,
            ease: "power2.inOut",
            onComplete: () => {
              gsap.to(".boomerang", {
                duration: 2,
                x: 0,
                y: 0,
                ease: "power2.inOut",
              });
            }
          });
        }
      });
    }
  });
});


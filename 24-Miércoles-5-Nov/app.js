console.log("Jardín Github");

const titles = document.querySelectorAll('.titles span');
const mainImage = document.getElementById('main-image');

if (titles && mainImage) {
  titles.forEach(title => {
    title.addEventListener('mouseenter', () => {
      const newImg = title.getAttribute('data-img');
      mainImage.style.opacity = 0;
      setTimeout(() => {
        mainImage.src = newImg;
        mainImage.style.opacity = 1;
      }, 200);

      titles.forEach(t => t.classList.remove('active'));
      title.classList.add('active');
    });
  });
} else {
  console.error("No se encontró la imagen principal o los títulos en el DOM.");
}


const button = document.querySelector(".cta__button");
const swatches = Array.from(document.querySelectorAll('.swatch__item'));

button.style.backgroundColor = '#ddd';
button.disabled = true

swatches.forEach((swatch) => {
  swatch.addEventListener('click', (e) => {
    const id = e.target;
    console.log(id);

    button.style.backgroundColor = '#ec018c';
    button.disabled = false;
  });
})

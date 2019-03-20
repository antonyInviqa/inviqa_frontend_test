const selectionCard = document.querySelector('.selection-card');
const button = selectionCard.querySelector(".cta__button");
const swatches = Array.from(selectionCard.querySelectorAll('.swatch__item'));
const submitButton = selectionCard.querySelector('.cta__button');

button.style.backgroundColor = '#ddd';
button.disabled = true

swatches.forEach((swatch) => {
  swatch.addEventListener('click', (e) => {
    const id = e.target.id;
    console.log(id);

    button.style.backgroundColor = '#ec018c';
    button.style.cursor = 'pointer';
    button.disabled = false;
    button.classList.add('active');

    submitAction();
  });
})

function submitAction(){
  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    selectionCard.classList.add('js-flipped');
  });
}

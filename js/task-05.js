const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');


nameInput.addEventListener('input', event => {

  nameOutput.textContent = event.target.value;
  if(event.target.value.length > 0) {
    nameOutput.innerHTML = event.target.value;
    return;
  }
  nameOutput.innerHTML = 'Anonymous'
});


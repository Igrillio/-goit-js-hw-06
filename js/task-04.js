let counterValue = 0;
const valueSpan = document.querySelector('#value');
const buttonMinus = document.querySelector('button[data-action="decrement"]')
const buttonPlus = document.querySelector('button[data-action="increment"]')

const valueButtonPlus = () => {
    counterValue += 1;
 valueSpan.textContent = counterValue;
} 
buttonPlus.addEventListener("click", valueButtonPlus)

const valueButtonMinus = () => {
    counterValue -= 1;
valueSpan.textContent = counterValue;
} 
buttonMinus.addEventListener("click", valueButtonMinus)
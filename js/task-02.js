const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');


const el = ingredients.map(ingridient => {
  const item = document.createElement('li')
  item.className = 'item';
  item.textContent = ingridient;
  return item;
}) 

list.append(...el)
console.log(el)

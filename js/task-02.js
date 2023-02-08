const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const arrayOfDoneItems = []

// 1. 2. 3.

const itemsAddingValueAndClass = ingredients.forEach((ingredientsValue) => {
  const itemEl = document.createElement('li')
  itemEl.textContent = ingredientsValue
  itemEl.classList.add('item')
  arrayOfDoneItems.push(itemEl)
})

// 4.

const listEl = document.querySelector('#ingredients')
  
listEl.append(...arrayOfDoneItems)

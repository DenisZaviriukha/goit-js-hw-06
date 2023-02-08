const categories = document.querySelector('#categories')

// 1.

const categoriesItemsQuantity = categories.children.length

console.log(`Number of categories: ${categoriesItemsQuantity}`);

// 2.

const categoriesItems = document.querySelectorAll('li.item')

const categoriesItemsValues = categoriesItems.forEach((el) => {
    const categoriesHeaderText = el.firstElementChild.textContent
    const catigoriesListItemsQuantity = el.lastElementChild.querySelectorAll('li').length
    console.log(`Category: ${categoriesHeaderText}`)
    console.log(`Elements: ${catigoriesListItemsQuantity}`)
}
)

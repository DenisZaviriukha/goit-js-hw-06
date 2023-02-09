const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const doneArray = []

const listEl = document.querySelector('.gallery')

  listEl.classList.add('list_third')

const itemsAdding = images.map(element => {

  const itemEl = document.createElement('li')

    itemEl.classList.add('item_third')
  
  const imgEl = document.createElement('img')

    imgEl.classList.add('img_third')

    imgEl.src = element.url
    imgEl.alt = element.alt
    imgEl.width = 320;
  
  itemEl.insertAdjacentHTML('beforeend',`<img src=${imgEl.src} alt=${imgEl.alt} width=${imgEl.width}></img>`)

  doneArray.push(itemEl)

})

listEl.append(...doneArray)

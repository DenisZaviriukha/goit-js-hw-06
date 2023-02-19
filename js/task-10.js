function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector('[data-create]')
const destroyBtn = document.querySelector('[data-destroy]')
const boxesWrapper = document.querySelector('#boxes')
const amount = document.querySelector('#controls>input')
let boxesArr = []


const onCreateButton = () => { 
  const owo = boxesArr.length
  const uwu = Number(amount.value) + boxesArr.length
  for (let i = owo; i < uwu; i += 1) {
    const box = document.createElement("div")
    box.style.backgroundColor = getRandomHexColor()
    box.style.width = `${30 + (10 * i)}px`
    box.style.height = `${30 + (10 * i)}px`
    box.textContent = getRandomHexColor()
    if (box.style.backgroundColor){
      boxesArr.push(box)
    }
  }
  boxesWrapper.append(...boxesArr)
}

const onDestroyButton = () => {
  if (boxesWrapper.innerHTML) {
  boxesWrapper.innerHTML=''
  boxesArr = []
  }
  
}

createBtn.addEventListener('click', onCreateButton)
destroyBtn.addEventListener('click', onDestroyButton)
const counterDecrementButton = document.querySelector('[data-action=decrement]')
const counterIncrementButton = document.querySelector('[data-action=increment]')
const counterValue = document.querySelector('#value');

const onDecrementButton = () => {
    value.textContent-=1
}

const onIncrementButton = () => {
    value.textContent++
}

counterDecrementButton.addEventListener('click', onDecrementButton)

counterIncrementButton.addEventListener('click', onIncrementButton)


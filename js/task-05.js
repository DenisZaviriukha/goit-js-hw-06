const input = document.querySelector('#name-input')
const output = document.querySelector('#name-output')

const onPlaceholderInput = (event) => {
    if (event.currentTarget.value === '') {
        output.textContent = 'Anonymous'
        return
    }
    output.textContent = event.currentTarget.value.trim() 
}

input.addEventListener('input', onPlaceholderInput)


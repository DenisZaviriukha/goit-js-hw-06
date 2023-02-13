const input = document.querySelector('#validation-input')

const onInputBlur = (event) => {

    const inputLength = `${event.currentTarget.getAttribute("data-length")}`
    
    const dataLength = `${event.currentTarget.value.trim().length}`

    if (inputLength !== dataLength) {
        event.currentTarget.classList.add('invalid')
        return
    }    
    event.currentTarget.classList.add('valid')
}

input.addEventListener('blur', onInputBlur)
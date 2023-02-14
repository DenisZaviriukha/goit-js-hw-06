const input = document.querySelector('#validation-input')

const onInputBlur = (event) => {

    const inputLength = Number(event.currentTarget.getAttribute("data-length"))

    const dataLength = event.currentTarget.value.trim().length

    if (inputLength !== dataLength) {
        event.currentTarget.classList.remove('valid')
        event.currentTarget.classList.add('invalid')
        return
    }
    event.currentTarget.classList.remove('invalid')
    event.currentTarget.classList.add('valid')
}

input.addEventListener('blur', onInputBlur)
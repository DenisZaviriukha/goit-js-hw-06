const inputRange = document.querySelector('#font-size-control')
const inputText = document.querySelector('#text')

const onChangeRange = (event) =>{
    inputText.style.fontSize = `${event.currentTarget.value}px`
}

inputRange.addEventListener('input', onChangeRange)
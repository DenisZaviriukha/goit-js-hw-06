const form = document.querySelector('.login-form')

const formDataValues = {}

const onSubmitButton = (event) => {

    event.preventDefault()

    const emailValue = event.currentTarget.elements.email.value
    const passwordValue = event.currentTarget.elements.password.value

    if (emailValue === "" || passwordValue === "") {
        window.alert('Все поля должны быть заполнены')
    }
    else {
        formDataValues.email = emailValue
        formDataValues.password = passwordValue
        console.log(formDataValues)
        form.reset()
    }
}
form.addEventListener('submit', onSubmitButton) 


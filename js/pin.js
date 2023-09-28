function getPin() {
    const pin = generatePin();
    const pinString = pin + ''
    if (pinString.length === 4) {
        return pin
    } {
        return getPin()
    }
}


function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}

document.getElementById('pin-generate').addEventListener('click', function () {
    const pin = getPin()

    const displayPin = document.getElementById('pin-display')
    displayPin.value = pin;


})

document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText
    const typeNumberField = document.getElementById("type-input");
    const previousTypeNumber = typeNumberField.value;

    if (isNaN(number)) {
        if (number === 'C') {
            typeNumberField.value = ''
        }
        else if (number === '<') {
            const digits = previousTypeNumber.split('')
            digits.pop()
            const remainingDigits = digits.join('');
            typeNumberField.value = remainingDigits;
        }
    }
    else {

        const newTypeNumber = previousTypeNumber + number;
        typeNumberField.value = newTypeNumber
        console.log(newTypeNumber);
    }
})


document.getElementById('verify-pin').addEventListener('click', function () {
    const displayPin = document.getElementById('pin-display')
    const currentPinValue = displayPin.value;

    const typeNumberField = document.getElementById("type-input");
    const TypeNumberValue = typeNumberField.value;

    const pinSuccess = document.getElementById('pin-success')
    const pinError = document.getElementById('pin-error')

    if (currentPinValue === TypeNumberValue) {
        pinSuccess.style.display = 'block'
        pinError.style.display = 'none'

        typeNumberField.value = ''
        displayPin.value = ''

    }
    else {

        pinError.style.display = 'block'
        pinSuccess.style.display = 'none'
    }
})



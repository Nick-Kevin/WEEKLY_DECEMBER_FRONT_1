const TEXT = 'Your Whole Business Will Love'
let letterIndex = 0
let speed = 50

function typeWritter() {
    if (letterIndex < TEXT.length) {
        document.getElementById('crm-platform').innerHTML += TEXT.charAt(letterIndex)
        letterIndex++
        setTimeout(typeWritter, speed)
    }
}

document.addEventListener('load', typeWritter())

const header = document.querySelector('header')

window.addEventListener('scroll', () => {
    const windowTop = window.scrollY

    if (windowTop > 170) {
        header.classList.add('bg-white')
    } else {
        header.classList.remove('bg-white')
    }
})

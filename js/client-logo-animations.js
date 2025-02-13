const bottomLine = document.querySelectorAll('.bottom-line')
const borderRight = document.querySelectorAll('.client-logo-container.border-right')

const bottomLineObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting)
            entry.target.classList.add('fade-width')
        else
            entry.target.classList.remove('fade-width')
    })
})

const borderRightObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting)
            entry.target.classList.add('fade-height')
        else
            entry.target.classList.remove('fade-height')
    })
})

bottomLine.forEach(element => {bottomLineObserver.observe(element)})
borderRight.forEach(element => {borderRightObserver.observe(element)})

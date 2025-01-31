const hiddenElements = document.querySelectorAll('.hidden-animation')

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting)
            entry.target.classList.add('reveal')
        else
            entry.target.classList.remove('reveal')
    })
})

hiddenElements.forEach(element => {
    observer.observe(element)
})

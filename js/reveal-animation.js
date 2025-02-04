const hiddenElements = document.querySelectorAll('.hidden-animation')
const premiumFeaturesCards = document.querySelectorAll('.hidden-down, .icon-down')

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

premiumFeaturesCards.forEach(element => {
    observer.observe(element)
})

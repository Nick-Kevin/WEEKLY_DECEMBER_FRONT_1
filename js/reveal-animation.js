const hiddenElements = document.querySelectorAll('.hidden-animation')
const premiumFeaturesCards = document.querySelectorAll('.hidden-down, .icon-down')
const crmImage = document.querySelectorAll('.crm-image')

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting)
            entry.target.classList.add('reveal')
        else
            entry.target.classList.remove('reveal')
    })
})

const crmObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting)
            entry.target.classList.add('reveal-crm')
        else
        entry.target.classList.remove('reveal-crm')
    })
})

hiddenElements.forEach(element => {
    observer.observe(element)
})

premiumFeaturesCards.forEach(element => {
    observer.observe(element)
})

crmImage.forEach(element => {
    crmObserver.observe(element)
})

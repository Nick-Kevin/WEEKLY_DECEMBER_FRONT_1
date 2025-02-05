const progressBar = document.querySelectorAll('.progress-bar')

const barObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting)
            entry.target.classList.add('fade-width-bar')
        else
            entry.target.classList.remove('fade-width-bar')
    })
})

progressBar.forEach(element => barObserver.observe(element))

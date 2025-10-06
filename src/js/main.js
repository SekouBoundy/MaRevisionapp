// Import Alpine.js
import Alpine from 'alpinejs'

// Make Alpine available on window
window.Alpine = Alpine

// Start Alpine
Alpine.start()

// Smooth scroll for navigation links
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href^="#"]')
    window.scrollTo({
  top: target.offsetTop - 80,
  behavior: 'smooth'
})

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault()
            const target = document.querySelector(link.getAttribute('href'))
            if (target) {
            const y = target.getBoundingClientRect().top + window.pageYOffset - 80
            window.scrollTo({ top: y, behavior: 'smooth' })
            }

        })
    })
})
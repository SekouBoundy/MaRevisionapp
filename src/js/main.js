// Import Alpine.js
import Alpine from 'alpinejs'

// Make Alpine available on window
window.Alpine = Alpine

// Start Alpine
Alpine.start()

// Smooth scroll for navigation links
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href^="#"]')
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault()
            const target = document.querySelector(link.getAttribute('href'))
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
        })
    })
})
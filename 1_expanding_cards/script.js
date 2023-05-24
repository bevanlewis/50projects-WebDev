const panels = document.querySelectorAll('.panel') 
// Selects all the panels

panels.forEach((panel) => {
    // Checks for a click and then adds an active class to that panel
    // All panels will have the eventlistener added to them
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

// removes the active class from the panels
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
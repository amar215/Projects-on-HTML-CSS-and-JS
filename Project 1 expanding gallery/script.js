const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeClass();
        panel.classList.add('active');
    })
})

// function to remove the class
function removeClass() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}


const buttons = document.querySelectorAll('.ripple');

buttons.forEach((button) => {
    button.addEventListener('click', function (e) {
        // getting the position of click on browser window
        const x = e.clientX;
        const y = e.clientY;

        // making the points to start from 1 and so on if clicked inside the button
        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;

        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;

        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = yInside + 'px';
        circle.style.left = xInside + 'px';
        
        this.appendChild(circle);

        // this will create lot of span each time we click the button.
        // we have to remote it to clear DOM but after certain time like 500ms

        setTimeout(() => {
            circle.remove()
        }, 500);
    })
})
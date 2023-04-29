const image = document.querySelector('.image');
const times = document.querySelector('#times');

let clickTime = 0;
let timesClicked = 0;

image.addEventListener('dblclick', (e)=> {
    if (clickTime === 0) {
        clickTime = new Date().getTime();
    }else{
        if ((new Date().getTime() - clickTime) < 1000) {
            createHeart(e);
            clickTime = 0; 
        } else{
            clickTime = new Date().getTime();
        }
    }
});

const createHeart = (e)=> {
    const heart = document.createElement('i');
    heart.classList.add('fa-sharp');
    heart.classList.add('fa-heart');
    heart.classList.add('fa-solid');

    // making co-ordinates for giving position.
    const x = e.clientX;
    const y = e.clientY;

    const leftOffset = e.target.offsetLeft;
    const topOffset = e.target.offsetTop;

    const xInside = x - leftOffset;
    const yInside = y - topOffset;

    heart.style.top = `${yInside}px`;
    heart.style.left = `${xInside}px`;

    // adding heart to image when double clicked.
    image.appendChild(heart);

    // incrementing the counter.
    times.innerHTML = ++timesClicked;

    // removing the heart
    setTimeout(() => {
        heart.remove()
    }, 1100);
}


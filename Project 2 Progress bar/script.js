const progress = document.getElementById('progress');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const circles = document.querySelectorAll('.circle');


// Number of circles in active mode
let currentActive = 1;

next.addEventListener('click', ()=> {
    currentActive++;

    if(currentActive > circles.length){
        currentActive = circles.length;
    }

    // funtion to add or remove active class which gives color to circles.
    update();
})

prev.addEventListener('click', ()=> {
    currentActive--;

    if(currentActive < 1){
        currentActive = 1;
    }
    
    // funtion to add or remove active class which gives color to circles.
    update();
})


function update() {
    circles.forEach((circle, index)=> {
        if(index < currentActive) {
            circle.classList.add('active');
        }
        else{
            circle.classList.remove('active');
        }
    })


    // finding number of active circles to animate the bar.

    const actives = document.querySelectorAll('.active');

    // subtracting 1 from each length to get proper percentages i.e 33.33%, 66.66% and 100%. else it will give 50%, 75% and 100% which we do not want.
    progress.style.width = (actives.length - 1)/(circles.length - 1)*100 + '%';


    // active and disabled buttons. if 'active btn' is 1 then 'prev btn' is diabled and if 'active btn' is 4 then 'next btn' is disabled. else both are active.
    if(currentActive ===1){
        prev.disabled = true;
    }
    else if (currentActive === circles.length){
        next.disabled = true;
    }
    else {
        prev.disabled = false;
        next.disabled = false;
    }
}

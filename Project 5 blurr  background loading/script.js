const loadingText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
    load++
    if (load > 99) {
        clearInterval(int)
    }
    
    loadingText.innerText = `${load}%`

    // this will make the loading percentage fade out starting from 0 to 100
    loadingText.style.opacity = scale(load, 0, 100, 1, 0);

    bg.style.filter = `blur(${scale(load, 0, 100,20, 0)}px)`
}

// Mapping range of number to another range of number for opacity
// used mapping function from stackoverflow

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers


const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min; 
}


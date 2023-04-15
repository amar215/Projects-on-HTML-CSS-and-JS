const counters = document.querySelectorAll('.counter');


counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter= () => {
        // + converts the string value in number like Number() function
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        
        const increment = target / 300;

        if (count < target) {
            counter.innerText = `${Math.ceil(count + increment)}`;
            setTimeout(updateCounter, 1);
        } else {
            counter.innerText = target;
        }
    }

    updateCounter()
})
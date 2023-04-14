const jokeEl = document.getElementById('joke');
const button = document.getElementById('jokeBtn');

button.addEventListener('click', generateJoke)

generateJoke();

async function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }

    const res = await fetch('https://icanhazdadjoke.com', config)

    const data = await res.json();

    jokeEl.innerHTML = data.joke;

}

// Learned about API, async await, fetch and promises.

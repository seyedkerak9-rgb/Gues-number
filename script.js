const img = document.getElementById('img');
const p = document.getElementById('p');
const input = document.getElementById('guessInput');
const btn = document.getElementById('guessBtn');

const randomNumber = Math.floor(Math.random() * 100) + 1;
let userAttempts = 0;

btn.addEventListener('click', function () {

    const userGuess = Number(input.value);

    if (input.value.trim() === '') {
        alert('Please enter a number!');
        return;
    }

    if (userGuess < 1 || userGuess > 100) {
        alert('Enter a number between 1 and 100!');
        return;
    }

    userAttempts++;

    if (userGuess === randomNumber) {
        img.src = 'success the random number.png';
        p.textContent = 'Congratulations! You have won!';
        alert('You won in ' + userAttempts + ' attempts!');
        btn.disabled = true;

    } else if (userGuess > randomNumber) {
        p.textContent = 'Choose a smaller number!';

    } else {
        p.textContent = 'Choose a bigger number!';
    }
});

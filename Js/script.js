function startGame() {
    let low = 1;
    let high = 10;
    let correct_ans = Math.floor(Math.random() * (high - low + 1)) + low;
    let attempts = 3;

    for (let i = 0; i < attempts; i++) {
        let user_guess = parseInt(prompt(`Guess a number between ${low} and ${high}:`));

        if (user_guess === correct_ans) {
            alert("You Win!");
            document.getElementById('result').textContent = "Congratulations! You guessed the correct number.";
            document.getElementById('result').style.color = 'green';
            return;
        } else if (user_guess < correct_ans) {
            alert("Correct answer is greater!");
        } else {
            alert("Correct answer is smaller!");
        }
    }

    alert("You lose!");
    document.getElementById('result').textContent = `You lose! The correct answer was ${correct_ans}.`;
    document.getElementById('result').style.color = 'red';
}

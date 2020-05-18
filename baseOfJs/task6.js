const wordReverse = () => {
    const wordFromInput = document.getElementById('wordInput').value;
    const wordDiv = document.getElementById('word-reversed');

    const reversedWord = wordFromInput.split('').reverse().join('');

    wordDiv.innerText = reversedWord;
}
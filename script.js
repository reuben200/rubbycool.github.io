const display = document.querySelector('.screen');
const word = document.querySelector('.word');
const btn = document.querySelector('.btn-guess');


btn.addEventListener('click', ()=>{
    let w = word.value.toUpperCase();
    let splitWord = [];
    splitWord = w.split('');
    let letter = Math.floor(splitWord.length*Math.random());
    let final = splitWord[letter];
    display.textContent = final; 
});

'use strict';

const btn = document.getElementById('btn');
const rangeInput = document.getElementById('range');
const rangeSpan = document.getElementById('range-span');

const textInput = document.getElementById('text');
const square = document.getElementById('square');
const circle = document.getElementById('circle');
const eBtn = document.getElementById('e_btn');


btn.addEventListener('click', function() {  
    square.style.backgroundColor = textInput.value;
});

eBtn.style.display = 'none';

rangeInput.addEventListener('input', function() {
    rangeSpan.innerText = rangeInput.value;
    circle.style.height = 200*rangeInput.value/100+'px';
    circle.style.width = 200*rangeInput.value/100+'px';
});














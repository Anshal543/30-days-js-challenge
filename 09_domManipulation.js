// activity 1 selecting and manipulating element
// task 1
let title = document.getElementById('title');
title.textContent = 'New title';
// task 2
let titleBg = document.getElementsByClassName("titleBg");
// titleBg[0].style.backgroundColor = 'red';

// activity 2 creating and appending elements
// task 1
let newDiv = document.createElement('div');
newDiv.textContent = 'New div';
document.body.appendChild(newDiv);

// task 2
let ul = document.getElementById('list');
let newLi = document.createElement('li');
newLi.textContent = 'New li';
ul.appendChild(newLi);

// activity 3 removing elements
// task 1
// title.remove();
// task 2
// ul.removeChild(ul.lastElementChild);
ul.removeChild(newLi);

// activity 4 modifying attributes and classes
// task 1
let img = document.getElementById('img');
img.src = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
// task 2
let main = document.querySelector('.main');
main.classList.add('font_orange');
main.classList.remove('main');

// activity 5 
// task 1
let btn = document.getElementById('btn');
let para = document.getElementById('para');
btn.addEventListener('click', function() {
    para.textContent = 'Button clicked';
})

para.addEventListener('mouseover', function() {
    para.style.border = '1px solid red';
})



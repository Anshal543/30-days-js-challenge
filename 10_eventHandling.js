// activity 1 basic event handling
// task 1
let p = document.getElementById('p');
let button = document.getElementById('b');
button.addEventListener('click', function(){
    p.textContent = 'Button is clicked';
});

// task 2
let img = document.getElementById('image');
img.addEventListener('dblclick',function(){
// toggle image
img.style.display = img.style.display === 'none' ? 'block' : 'none';
})

// activity 2 mouse events
// task 1
let bgChange = document.getElementById('bgChange');
bgChange.addEventListener('mouseover', function(){
    bgChange.style.backgroundColor = 'red';
});
bgChange.addEventListener('mouseout', function(){
    bgChange.style.backgroundColor = 'white';
});

// activity 3 keyboard events
// task 1
let key = document.getElementById('keyPress');
key.addEventListener('keypress', function(e){
    console.log(e.key);
});

// task 2
let keyup = document.getElementById('keyUp');
let keyValue = document.getElementById('keyValue');
keyup.addEventListener('keyup', function(){
    keyValue.textContent =keyup.value ;
});

// activity 4 form events
// task 1
let form = document.getElementById('form');
form.addEventListener('submit', function(e){
    e.preventDefault();
    const formData = new FormData(form);
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });
    console.log(formObject);
});

// task 2
let select = document.getElementById('select');
let selectValue = document.getElementById('selectValue');
select.addEventListener('change', function(){
    selectValue.textContent = select.value;
});

// activity 5 event delegation
// task 1

const list = document.getElementById("list");
list.addEventListener("click", (event) => {
    console.log(event.target.tagName);
    console.log(event.target.innerHTML);
});

// task 2
const parent = document.getElementById('parent');
const addList = document.getElementById('addList');
const addItem = document.getElementById('addItem')

addItem.addEventListener('click', () => {
    const newListItem = document.createElement('li')
    newListItem.innerHTML = 'new Item'
    addList.appendChild(newListItem)
})

parent.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {

        console.log(event.target.innerHTML)
    }
})
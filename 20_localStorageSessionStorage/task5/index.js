let input = document.querySelector('#input');
let button = document.querySelector('#button');

button.addEventListener('click', () => {
    const inputValue = input.value;
    sessionStorage.setItem('inputValue', JSON.stringify(inputValue));
    input.value = '';
    const inputValueFromSessionStorage = JSON.parse(sessionStorage.getItem('inputValue'));
    console.log(inputValueFromSessionStorage);
})
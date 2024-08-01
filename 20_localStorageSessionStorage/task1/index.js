const button = document.getElementById('button');
const input = document.getElementById('input');

button.addEventListener('click',()=>{
    const value = input.value;
    // console.log(value);
    localStorage.setItem('value', value);
    input.value = '';
    const savedValue = localStorage.getItem('value');
    console.log(savedValue);
})

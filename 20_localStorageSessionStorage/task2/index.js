
const username = document.getElementById('username');
const email = document.getElementById('email');
const age = document.getElementById('age');

const submit = document.getElementById('button');

submit.addEventListener('click',()=>{
    const user = {
        username: username.value,
        email: email.value,
        age: age.value,
        id: Math.random()
    }

    localStorage.setItem('user', JSON.stringify(user));
    username.value = '';
    email.value = '';
    age.value = '';
    const savedUser = JSON.parse(localStorage.getItem('user'));
    console.log(savedUser);

})
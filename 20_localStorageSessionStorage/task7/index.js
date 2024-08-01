let form  = document.getElementById('form');
let username = document.getElementById('username');
let email   = document.getElementById('email');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let users = JSON.parse(sessionStorage.getItem('users')) || [];
    let user = {
        username: username.value,
        email: email.value,
        id: Math.random()
    }
    users.push(user);
    sessionStorage.setItem('users',JSON.stringify(users));
    form.reset();
    displayUsers();
})

function displayUsers(){
    let usersList = document.getElementById('usersList');
    let users = JSON.parse(sessionStorage.getItem('users')) || [];
    usersList.innerHTML = '';
    users.forEach(user => {
        let li = document.createElement('li');
        li.innerHTML = `${user.username} : ${user.email}`;
        console.log(sessionStorage);
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click',()=>{
            users = users.filter(u => u.id !== user.id);
            sessionStorage.setItem('users',JSON.stringify(users));
            displayUsers();
            console.log(sessionStorage);
        })
        li.appendChild(deleteButton);
        usersList.appendChild(li);
    }); 
}
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const user = {
        username: username.value,
        email: email.value,
        id: Math.random()
    }
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    username.value = '';
    email.value = '';
    displayUser();
})

function displayUser() {
    const userListDiv = document.getElementById('userList'); 
    userListDiv.innerHTML = '';
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.innerHTML = `
        <h3>${user.username}</h3>
        <p>${user.email}</p>
        `
        console.log(localStorage);
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            users = users.filter(u => u.id !== user.id);
            localStorage.setItem('users', JSON.stringify(users));
            displayUser();
            console.log(localStorage);
        })
        userDiv.appendChild(deleteButton);
        userListDiv.appendChild(userDiv);
    })
}

// Activity : 1 understanding promises

// Task: 1 create a promise that resolves with a message after a 2 seconds timeout and log the message to the console
const message = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise resolved after 2 seconds')
    }, 2000)
})
message.then(msg => console.log(msg))

// Task: 2
const messageReject = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise rejected after 2 seconds')
    }, 2000)
})
messageReject.catch(msg => console.log(msg))

// Activity: 2 chaining promises 
// Task: 3 create a sequence of promises that stimulate fetching data from server. chain the promises to the log message in a specfic order

function fetchUserData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("User data fetched"), 1000);
    });
}

function fetchPostsData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Posts data fetched"), 1000);
    });
}

function fetchCommentsData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Comments data fetched"), 1000);
    });
}

// fetchUserData()
//     .then((message) => {
//         console.log(message);
//         return fetchPostsData();
//     })
//     .then((message) => {
//         console.log(message);
//         return fetchCommentsData();
//     })
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((error) => {
//         console.error("An error occurred:", error);
//     });


// Activity: 3 using async await
// Task: 4 

async function fetchData() {
    try {
        const userData = await fetchUserData();
        console.log(userData);
        const postsData = await fetchPostsData();
        console.log(postsData);
        const commentsData = await fetchCommentsData();
        console.log(commentsData);

    } catch (error) {
        console.error("An error occurred:", error);
    }
}
// fetchData();

// Task: 5
async function rejectedPromise() {
    try {
        await messageReject;
    } catch (error) {
        console.error("An error occurred:", error);
    }
}
// rejectedPromise();

// Activity: 4 fetching data from an API
// Task: 6 
// fetch('https://dummyjson.com/products')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

// Task: 7
async function fetchDataFromAPI() {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("An error occurred:", error);
    }
}    
// fetchDataFromAPI();

// Activity: 5 concurrent promises
// Task: 8
// Promise.all([fetchUserData(), fetchPostsData(), fetchCommentsData()])
//     .then((messages) => {
//         messages.forEach((message) => console.log(message));
//     })
//     .catch((error) => {
//         console.error("An error occurred:", error);
//     });

// Task: 9
Promise.race([fetchUserData(), fetchPostsData(), fetchCommentsData()])
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    });    
    
const delay = (ms) => {
    return new Promise(resolve => setTimeout(() => resolve(), ms))
}

const url = "https://jsonplaceholder.typicode.com/todos/1";

// function fetchTodos() {
//     console.log("fetch todo started...")
//     return delay(2000)
//         .then(() => fetch(url))
//         .then(responce => responce.json());
// }
//
// fetchTodos()
//     .then(data => {
//         console.log("Data", data)
//     })
//     .catch(err => console.error(err));

async function fetchAsyncTodos() {
    try {
        console.log("fetch todo started...")
        await delay(2000);
        const responce = await fetch(url);
        const data = await responce.json();
        console.log("Data", data)
    } catch (err) {
        console.error(err);
    }
}

fetchAsyncTodos();

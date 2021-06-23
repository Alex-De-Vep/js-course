console.log("request data...");

// setTimeout(() => {
//     console.log("preparing data...")
//
//     const backendData = {
//         server: "aws",
//         port: 2000,
//         status: "working"
//     }
//
//     setTimeout(() => {
//         backendData.modefied = true;
//         console.log("Data received", backendData);
//     }, 2000);
// }, 2000);

// const p = new Promise(function (resolve, rejected) {
//     setTimeout(() => {
//         console.log("preparing data...")
//
//         const backendData = {
//             server: "aws",
//             port: 2000,
//             status: "working"
//         }
//         resolve(backendData);
//     }, 2000);
// });
//
// p.then((data) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modefied = true;
//             resolve(data);
//             // console.log("Data received", backendData);
//         }, 2000);
//     })
//
//     // p2.then(clientData => {
//     //     console.log("Data received", clientData);
//     // })
// })
//     .then(clientData => {
//         clientData.fromPromise = true;
//         return clientData;
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.error(err);
//     })
//     .finally(() => {
//         console.log("final")
//     });

const sleep = ms => new Promise(resolve => setTimeout(() => resolve(), ms));

const sleep1 = (ms) => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    });
}

// sleep(2000).then(() => console.log("after 2 sec"));
// sleep(3000).then(() => console.log("after 3 sec"));

Promise.all([sleep(2000), sleep(5000)])
    .then(() => {
        console.log("all promises")
    })

Promise.race([sleep(2000), sleep(5000)])
    .then(() => {
        console.log("race promises")
    })

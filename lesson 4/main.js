console.log("Start");

console.log("Start 2");

function timeout2seconds() {
    console.log("timeout2sec");
}

setTimeout(() =>  {
    console.log("Inside timeout, after 5000 seconds");
}, 5000);

setTimeout(timeout2seconds, 0);

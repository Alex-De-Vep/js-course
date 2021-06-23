function Hello() {
    console.log("Hello", this)
}

const Lena = {
    name: "Elena",
    age: 23,
}

const person = {
    name: "Alex",
    age: 25,
    sayHello: Hello,
    sayHelloWindow: Hello.bind(Lena),
    logInfo: function (job, phone) {
        console.group(`${this.name} info:`);
        console.log(`Name is ${this.name}`);
        console.log(`Age is ${this.age}`);
        console.log(`Job is ${job}`);
        console.log(`Phone is ${phone}`);
        console.groupEnd();
    }
}

// person.logInfo.bind(Lena, 'frontend', '8-999-123-12-23')();
// person.logInfo.call(Lena, 'frontend', '8-999-123-12-23');

person.logInfo.apply(Lena, ['frontend', '8-999-123-12-23']);

// Прикатика

const array = [1, 2, 3, 4, 5];

// function multBy(array, n) {
//     return array.map(function(i) {
//         return i * n;
//     });
// }

Array.prototype.multBy = function (n) {
    console.log('multBy', this)

    return this.map(function (i) {
        return i * n;
    });
}

console.log(array.multBy(2));

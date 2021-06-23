const person = new Object({
    name : "Maxim",
    age: 25,
    greet: function () {
        console.log("Greet !!!");
    }
});

Object.prototype.sayHello = function () {
    console.log("Hello");
}

const Lena = Object.create(person);
Lena.name = "Elena";

const str = new String('I am string');

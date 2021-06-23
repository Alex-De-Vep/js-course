const person = Object.create({
    calculateAge() {
        console.log("Age", new Date().getFullYear() - this.birthYear)
    }
}, {
    name: {
        value: "Alex",
        enumerable: true,
        writable: true,
        configurable: true,
    },
    birthYear: {
        value: 1993,
        enumerable: true,
        writable: true,
        configurable: true,
    },
    age: {
        get() {
            return new Date().getFullYear() - this.birthYear;
        },
        set(value) {
            document.body.style.background = "red";
            console.log("set age", value);
        }
    }
})

// const person = {
//     name: "alex",
//     age: 25
// }

// person.name = "Maxim";
//
// delete person.name;

for (let key in person) {
    console.log("Key", key, person[key]);

    if (person.hasOwnProperty(key)) {
        console.log("Key", key, person[key]);
    }
}


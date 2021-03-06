//Object
const person = {
    name: "alex",
    age: 25,
    job: "Fullstack"
}

const op = new Proxy(person, {
    get(target, prop) {
        // console.log(`Getting prop ${prop}`);

        if (!(prop in target)) {
            return prop.split('_').map(p => target[p]).join(' ');
        }
        return target[prop];
    },
    set(target, prop, value) {
        if (prop in target) {
            target[prop] = value
        } else {
            throw new Error("Error");
        }
    },
    has(target, prop) {
        return ['age', 'job'].includes(prop);
    },
    deleteProperty(target, prop) {
        console.log('Deleting', prop);
        delete target[prop];
        return true;
    }
});

// Function
const log = text => `Log: ${text}`;

const fp = new Proxy(log, {
    apply(target, thisArg, argArray) {
        console.log('Calling fn...');

        return target.apply(thisArg, argArray).toUpperCase();
    }
})

// Classes

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const PersonProxy = new Proxy(Person, {
    construct(target, argArray) {
        console.log('Construct...')

        return new Proxy(new target(...argArray), {
            get(t, prop) {
                console.log(`Getting prop ${prop}`);

                return t[prop];
            }
        })
    }
})

const p = new PersonProxy('Maxim', 30)


class Person {

    #height = 180; // private field

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static DNA = "HUMAN";

    static method() {
        console.log("static method");
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name}.`);
    }

    // getter 控制屬性存取
    get diameter() {
        return this.age * 2;
    }

    // setter 控制屬性存取
    set diameter(value) {
        this.age = value / 2;
    }
}

const person = new Person("Emma", 18);
console.log(person.diameter);
person.diameter = 40;
console.log(person.diameter);

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    // override
    sayHello() {
        super.sayHello(); // invoke parent method
    }

    study() {
        console.log(`${this.name} is studying.`);
    }
}

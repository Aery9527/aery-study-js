console.log("---------------------------------------- Object.prototype")
const obj = {};
console.log("obj.__proto__                       >>> " + obj.__proto__); // 物件自動有 __proto__ 屬性
console.log("obj.prototype                       >>> " + obj.prototype); // 物件不會有 prototype 屬性
console.log("obj.__proto__ === Object.prototype  >>> " + (obj.__proto__ === Object.prototype)); // true
console.log("Object.prototype.__proto__ === null >>> " + (Object.prototype.__proto__ === null)); // true



console.log("---------------------------------------- function prototype")

function Person(name) {
    this.name = name;
}

const aery = new Person('John');
console.log("Person.__proto__                        >>> " + Person.__proto__); // 函式自動有 __proto__ 屬性
console.log("Person.prototype                        >>> " + Person.prototype); // 函式自動有 prototype 屬性
console.log("Person.__proto__ === Function.prototype >>> " + (Person.__proto__ === Function.prototype)); // true
console.log("aery.__proto__   === Person.prototype   >>> " + (aery.__proto__ === Person.prototype)); // true



console.log("---------------------------------------- Customize Object")

const animal = {
    speak() {
        console.log('Animal makes a noise');
    }
};

const dog = {
    __proto__: animal, // 設定 dog 的原型是 animal
    bark() {
        console.log('Dog barks');
    }
};

console.log("animal.__proto__ >>> " + animal.__proto__);
console.log("dog.__proto__    >>> " + dog.__proto__);

dog.bark();
dog.speak();



console.log("---------------------------------------- 使用 Object.create 設定原型")

const cat = Object.create(animal); // 創建一個以 animal 為原型的物件
cat.meow = function () {
    console.log('Cat meows');
};

console.log("cat.__proto__    >>> " + cat.__proto__);
cat.speak();
cat.meow();

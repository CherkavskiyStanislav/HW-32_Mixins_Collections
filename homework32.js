// // Task 1
const mixin = {
    getPrice() {return this.price},
    taxVat() {return 'wrong options'},
    taxExciseDuty() {return 'wrong options'},
    taxSingle() {return 'wrong options'},
}

class Cola {
    constructor(brand, price) {
        this.brand = brand;
        this.price = price;
    }
}
Object.assign(Cola.prototype, mixin)
Cola.prototype.taxVat = function () {
    return this.withTax = this.price + this.price * 0.2;
}

class Whiskey {
    constructor(brand, price) {
        this.brand = brand;
        this.price = price;
    }   
}
Object.assign(Whiskey.prototype, mixin)
Whiskey.prototype.taxExciseDuty = function () {
    return this.withTax = this.price + this.price * 0.3 + 10; 
}

class Ice {
    constructor(price){
        this.price = price;
    }
}
Object.assign(Ice.prototype, mixin)
Ice.prototype.taxSingle = function () {
    return this.withTax = this.price + 1;
}

const cocaCola = new Cola('Coca-Cola', 10);
const jonhwalker = new Whiskey('jonh walker', 100);
const ice = new Ice(2);
console.log(cocaCola.taxVat());
console.log(jonhwalker.taxExciseDuty());
console.log(ice.taxSingle());

// // Task 2

const uniceString = (strings) => {
    const uniceArr = strings.split('; ');
    return new Set(uniceArr);
}
console.log(uniceString("cherry; orange; cherry; banana; banana"));

// // Task 3

const ul = document.querySelector('.shop-list');
const items = Array.from(ul.getElementsByTagName('li'));
const texts = items.map(item => item.innerText);
const uniqueTexts = [...new Set(texts)];
console.log(uniqueTexts);

// // Task 4

const mike = {
    name:'Mike', 
    age: 18,
}
const bob = {
    name:'Bob', 
    age: 25,
}
const nikola = {
    name: 'Nikola', 
    age: 32,
}

const userVisits = new Map();

function visitUser(user) {
    if (userVisits.has(user)) {
        userVisits.set(user, userVisits.get(user) + 1);
    } else {
        userVisits.set(user, 1);
    }
}

function mikeVisits(user) {
    visitUser(user);
}

function bobVisits(user) {
    visitUser(user);
}

function nikolaVisits(user) {
    visitUser(user);
}

mikeVisits(mike);
mikeVisits(mike);
mikeVisits(mike);
bobVisits(bob);
nikolaVisits(nikola);
nikolaVisits(nikola);
console.log(userVisits.get(mike));//3
console.log(userVisits.get(bob));//1
console.log(userVisits.get(nikola));//2
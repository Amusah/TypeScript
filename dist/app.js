"use strict";
let user1;
user1 = {
    id: +crypto.randomUUID().split("-")[0],
    name: "Henry Amusah",
    age: 30,
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    },
};
user1.greet("Hey y'all! this is");
class Person {
    constructor(n) {
        this.age = 30;
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + " " + this.name);
    }
}
let user2;
user2 = new Person("Max");
user2.greet("Hey y'all! this is");
let add;
add = (n1, n2) => {
    return n1 + n2;
};

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
user1.greet('Hey y\'all! this is');

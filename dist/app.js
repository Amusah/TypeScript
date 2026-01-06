"use strict";
class Department {
    constructor(n) {
        this.name = n;
    }
    description() {
        console.log(`Department: ${this.name}`);
    }
}
const accounting = new Department("Finance");
console.log(accounting);
accounting.description();
const accountingClone = { name: 'Henry', description: accounting.description };
accountingClone.description();

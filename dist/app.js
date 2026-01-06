"use strict";
class Department {
    constructor(n) {
        this.employees = [];
        this.name = n;
    }
    description() {
        console.log(`Department: ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department("Finance");
console.log(accounting);
accounting.description();
// accounting.employees[0] = 'Selassie';
accounting.addEmployee('Henry');
accounting.printEmployeeInformation();
// const accountingClone = { name: 'Henry', description: accounting.description }
// accountingClone.description();

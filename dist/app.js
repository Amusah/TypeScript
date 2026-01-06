"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // public name: string; // default tho
        // private readonly id: string;
        // private employees: string[] = [];
        this.employees = [];
        // this.name = n;
    }
    description() {
        console.log(`Department (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        // this.id = 'd2'
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = [];
        this.admins = admins;
    }
}
const IT = new ITDepartment("d2", ["Henry"]);
console.log(IT);
IT.description();
// IT.employees[0] = 'Selassie';
IT.addEmployee("Henry");
IT.printEmployeeInformation();
// const accountingClone = { name: 'Henry', description: accounting.description }
// accountingClone.description();
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
    }
    addEmployee(name) {
        if (name === 'Henry') {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push('text');
        console.log(text);
    }
    printReports() {
        console.log(this.reports);
    }
}
const accounting = new AccountingDepartment("d1", []);
console.log(accounting);
accounting.description();
accounting.addReport('we made it');
accounting.addEmployee('Henry');
accounting.addEmployee('Barbara');
// accounting.employees[0] = 'Selassie';
accounting.addEmployee("Henry");
accounting.printEmployeeInformation();
// const accountingClone = { name: 'Henry', description: accounting.description }
// accountingClone.description();

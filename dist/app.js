"use strict";
/************* Intersection types and type guard ***************/
const e1 = {
    name: "Henry",
    privileges: ["create-server"],
    startDate: new Date(),
};
const addfunc = (a, b) => {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
};
function printEmployeeInformation(emp) {
    console.log('Name ' + emp.name);
    if ('privileges' in emp)
        console.log('Privileges: ' + emp.privileges);
    if ('startDate' in emp)
        console.log('StartDate: ' + emp.startDate);
}
printEmployeeInformation(e1);
printEmployeeInformation({ name: 'Henry', startDate: new Date() });
class Car {
    drive() {
        console.log('Driving...');
    }
}
class Truck {
    drive() {
        console.log('Driving a truck...');
    }
    loadCargo(amount) {
        console.log('Loading cargo ...' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);

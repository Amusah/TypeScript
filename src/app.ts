/************* Intersection types and type guard ***************/

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Henry",
  privileges: ["create-server"],
  startDate: new Date(),
};

type combinable = string | number;
type Numeric = number | boolean;

type Universal = combinable & Numeric;

const addfunc = (a: combinable, b: combinable) => {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
};

type UnknownEmployee = Admin | Employee;

function printEmployeeInformation(emp: UnknownEmployee){
  console.log('Name ' + emp.name);
  if('privileges' in emp) console.log('Privileges: ' + emp.privileges);
  if('startDate' in emp) console.log('StartDate: ' + emp.startDate);
}

printEmployeeInformation(e1);
printEmployeeInformation({name: 'Henry', startDate: new Date()});

class Car {
  drive(){
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }

  loadCargo(amount: number){
    console.log('Loading cargo ...' + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle){
  vehicle.drive();
  if(vehicle instanceof Truck) {
    vehicle.loadCargo(1000)
  }
}

useVehicle(v1);
useVehicle(v2);
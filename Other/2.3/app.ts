import { Customer } from './classes/customer.js';
import { Employee } from './classes/employee.js';
import { Service } from './classes/service.js';

let service: Service<Customer> = new Service();
let cust = new Customer();
cust.id = 1;
cust.name = 'Vane';
cust.type = 'WebDeveloper';
console.log(service.saveObj(cust));

let serviceEmp: Service<Employee> = new Service();

let emp = new Employee();
emp.id = 2;
emp.name = 'Ocean';
emp.code = '001';
console.log(serviceEmp.saveObj(emp));

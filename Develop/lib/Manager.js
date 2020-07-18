// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./Employee");

const Manager = new Employee("testManager",34567,"testManager@email.com");
console.log(Manager);


// * officeNumber

// * getRole() // Overridden to return 'Manager'
// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./Employee");

const Intern = new Employee("testIntern",23456,"testIntern@email.com");
console.log(Intern);

// * school 

// * getSchool()

// * getRole() // Overridden to return 'Intern'

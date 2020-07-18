// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./Employee");

const Engineer = new Employee("testEngineer",12345,"testEngineer@email.com");
console.log(Engineer);

// * github  // GitHub username

// * getGithub()

// * getRole() // Overridden to return 'Engineer'

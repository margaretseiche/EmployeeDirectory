// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
let Employee = require("./Employee");

const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(firstname,lastname,id,email,office){
        super(firstname,lastname,id,email);
        this.office = office;
    };
    getRole() {
        return 'Manager';
    } 
};
console.log(Manager);

module.exports = Manager;
// TODO: Write code to define and export the Employee class
const fs = require("fs");
const inquirer = require("inquirer");

class Employee {
    constructor(firstname,lastname,id,email) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.id = id;
        this.email = email;
    }
    getName() {

    }
    getId() {

    }
    getEmail() {

    }
    getRole() {
    
    }    
//    return this.Employee;    
}

module.exports = Employee;
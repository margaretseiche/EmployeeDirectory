// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
let Employee = require("./Employee");

const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./Employee");

class Intern extends Employee{
    constructor(firstname,lastname,id,email,school){
        super(firstname,lastname,id,email);
        this.school = school;
    };
    getSchool(){
        return this.school;
    };
    getRole(){ 
        return 'Intern';
    }
};
console.log(Intern);

module.exports = Intern;

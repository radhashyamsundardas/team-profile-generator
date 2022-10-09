
// exporting employee.js values to intern.js
const Employee = require("../lib/Employee");

// making constructor for intern
class Intern extends Employee(){
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return "Intern";
    }
}

module.exports = Intern;
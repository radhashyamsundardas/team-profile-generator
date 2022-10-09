// exporting employee constructor from lib
const Employee = require("../lib/Employee");

class Manager extends Employee{
    constructor(name, id, email, officeNumber){

        this.officeNumber = officeNumber;
    }
    getRole(){
        return"Manager";
    }
}
module.exports = Manager;


const inquirer = require('inquirer');
 const fs = require('fs');
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");


const page = require('./src/page');
 

const empArray = [];
console.log(empArray);

//  creating array of questions to ask 

const askQuestions =[
    {
        type:'list',
        name:'role',
        message:'choose the role of the employee',
        choices:["Manager","Engineer","Intern"]
    },
    {
        type:'input',
        name:'name',
        message:'Please enter name of the employee?',
        validate: nameInput=>{
            if (nameInput){
                return true;
            } else{
                console.log("Enter name of the employee");
                return false;
            }
        }
    },
    {
        type:'input',
        name:'id',
        message:'Please enter the id number of the employee!',
        validate: idInput=>{
            if(idInput){
                return true;
            } else{
                console.log("Enter employee id number");
                return false;
            }
        }
    },
    {
        type:'input',
        name:'email',
        message:'Enter employee Email address',
        validate: emailInput => {
            if (emailInput.includes('@')){
                return true;
            } else {
                console.log('Please enter your email address');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter office number',
        validate: (officeNumber) => {
            if (officeNumber){
                return true;
            } else {
                console.log('Enter office number');
                return false;
            }
        }
    },
    {
        type:'input',
        name:'github',
        message: 'Enter employee github username',
        validate: (github) =>{
            if(github){
                return true;
            } else {
                console.log('Enter your github username');
                return false;
            }
      
        }
    },
    {
        type: 'input',
        name: 'school',
        message:'Enter intern school name',
        validate: (school) =>{
            if(school){
                return true;
        } else {
            console.log("Enter your school name");
            return false;
        }
    }
},
{
    type: 'confirm',
    name: 'confirm AddEmployee',
    message: 'Enter another employee',
    default: false
}
];
// creating new function to add new employee
const newEmployee = () => {
    console.log(`Add Employee`);

    return inquirer.prompt(askQuestions)
    .then(employeeData =>{
        let {name, id, email, github, role, school, officeNumber}= employeeData;
        let employee;
        if(role ==='Manager'){
            employee = new Manager(name, id, email, officeNumber);
        }
        if (role ==='Engineer'){
            employee = new Engineer(name, id, github, email)
        }
        if (role === 'intern'){
            employee = new Intern(name, school, id, email)
        }
        empArray.push(employee);
        if(employeeData.confirmAddEmployee){
            return newEmployee(empArray);
        } else {
            return empArray;
        }
    }
    )
};
// adding write file and attaching it to index.html
const writeFile = (fileName, empArray) => {
    fs.writeFile('./src/page.js', empArray, err => {
        if (err){
            console.log(err);
            return;
        } else {
            console.log ('File created');
        }
    });
};


newEmployee().then(empArray => {
    return page(empArray);
}).then(pageHtml => {
    return writeFile(pageHtml);
})
.catch(err => {
    console.log(err);
});

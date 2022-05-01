const connnection = require('./config/connection');
const mysql = require('mysql2');
const { viewDepartment } = require("./queries");
var inquirer = require('inquirer');

function startFunction() {
    inquirer.prompt([
        {
            type: "list",
            name: "userOptions",
            message: "What do you want to do?",
            choices: [
                "View all departments",
                "View all roles",
                "View all employees",
                "Add a department",
                "Add an Role",
                "Add an Employee",
                "Update an Employee Role",
            ],
        },
    ]).then(answers => {
        console.log(answers)
        //make if else change to check what the user choice was
        //run function inside the if statement
    })
};

function addDepartment() {
    return inquirer.prompt([
        {
            type: "list",
            name: "userChoice",
            message: "What department would you like to add?"

        }
    ])
};




// db.connect(err => {
//     if (err) throw err;
//     startFunction();
// })
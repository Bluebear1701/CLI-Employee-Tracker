const mysql = require('mysql2');
const { viewDepartment } = require("./queries");
const inquirer = require('inquirer');
require("dotenv");


function startFunction() {
    inquirer.prompt([
        {
            type: "list",
            name: "userChoice",
            message: "What do you want to do?",
            choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add an Role", "Add an Employee"]
        },
    ]).then(answers => {
        console.log(answers)
        //make if else change to check what the user choice was
        //run function inside the if statement
    })
}

function addDepartment = function() {
   return inquirer.prompt ([
       {
          type: "list",
          name: "userChoice",
          message: "What department would you like to add?" 
          
       }
   ])
}




db.connect(err => {
    if (err) throw err;
    startFunction();
})
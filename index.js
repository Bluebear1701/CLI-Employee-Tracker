const db = require('./config/connection');
var inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
db.connect((err) => {
    if(err) throw err;
    console.log ("database connected");
    startFunction();
});

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
       switch (answers.userOptions) {
           case "View all departments":
               viewAllDepartments(); 
               break;
           case "View all roles "    

       }
        //make if else change to check what the user choice was
        //run function inside the if statement
    })
};

function viewAllDepartments(){
    const sql = `SELECT * from department`;
    db.query(sql, (err, rows) => {
        if (err) throw err;
        console.table(rows);
        startFunction();
    })
};

function addDepartment() {
    return inquirer.prompt([
        {
            type: "input",
            name: "userChoice",
            message: "What department would you like to add?"

        }
    ])
};






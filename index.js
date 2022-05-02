const db = require('./config/connection');
var inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
db.connect((err) => {
    if (err) throw err;
    console.log("database connected");
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
            case "View all roles":
                viewAllRoles();
                break;
            case "View all employees":
                viewAllEmployees();
                break;
            case "Add a department":
                addADepartment();
                break;
            case "Add an Role":
                addAnRole();
                break;
            case "Add an Employee":
                addAnEmployee();
                break;
            case "Update an Employee Role":
                updateAnEmployeeRole();
                break;
            default:
                process.exit();


        }
    })
};

function viewAllDepartments() {
    const sql = `SELECT * from department`;
    db.query(sql, (err, rows) => {
        if (err) throw err;
        console.table(rows);
        startFunction();
    })
};

function viewAllRoles() {
    const sql =
        `SELECT role.*, department.name
    AS department_id
    FROM role
    LEFT JOIN department
    ON role.department_id = department.id`;
    db.query(sql, (err, rows) => {
        if (err) throw err;
        console.table(rows);
        startFunction();
    })
};

function viewAllEmployees() {
    const sql =
        `SELECT E.id, 
        E.first_name, 
        E.last_name,
        R.title, 
        D.name AS department, 
        R.salary, 
        CONCAT(M.first_name,' ',M.last_name) AS manager 
        FROM employee E 
        JOIN role R ON E.role_id = R.id 
        JOIN department D ON R.department_id = D.id 
        LEFT JOIN employee M ON E.manager_id = M.id;`
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






const mysql = require('mysql2');
const inquirer =require('inquirer');


// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username,
        user: 'root',
        // Your MySQL password
        password: '@Gypsy1701!mas',
        database: 'election'
    },
    console.log('Connected to the election database.')
);


function startFunction(){
inquirer.prompt([{
    type:"list",
name: "userChoice",
message:"What do you want to do?"
choices: []


}]).then(answers => {
    console.log(answers)
    //make if else change to check what the user choice was
    //run function inside the if statement
})
}

function addDepartment() {
    inquirer.prompt
}




db.connect(err => {
    if (err) throw err;
    startFunction();
})
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

}




db.connect(err => {
    if (err) throw err;
    startFunction();
})
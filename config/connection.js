// const { connect } = require('http2');
const { config } = require('dotenv');
const mysql = require('mysql2');
require("dotenv");

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username,
        user: 'root',
        // Your MySQL password
        password: '@Gypsy1701!mas',
        database: 'employee_tracker'
    },
    console.log('Connected to the employee_tracker database.')
);

db.connect(err => {
    if (err) throw err;
    startFunction();
});

module.exports = config
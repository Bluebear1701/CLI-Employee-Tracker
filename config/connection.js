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
        database: 'employeetracker'
    },
    console.log('Connected to the employeetracker database.')
);

db.connect(err => {
    if (err) throw err;
    startFunction();
});

module.exports = config
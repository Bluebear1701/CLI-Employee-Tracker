const db = require("./config/connection.js");

const viewDepartment = function(){
return db.query(
    "SELECT * from `department`;"
    )
}


module.exports = {viewDepartment}
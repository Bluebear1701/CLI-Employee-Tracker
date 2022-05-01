const db = require("./config/connection.js");

const viewDepartment = function () {
    //promise wrapper 
    return new Promise(function (resolve, reject) {
        db.query(
            "SELECT * from `department`;"
            , (error, res) => {
                resolve(res);
            })
    })
}


module.exports = { viewDepartment }
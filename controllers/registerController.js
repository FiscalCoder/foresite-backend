var database = require('../config/database');

exports.addUser = function (req, res) {
    if (!req.body) {
        return res.send({
            "code": 400,
            "failed": "All Fields are Mandatory"
        })
    } else {

        let sql = "INSERT INTO users SET ?"

        //property name should be the same as database columns name for the above query to work
        let data =
        {
            first_name: "Bhavani",
            last_name: "last name",
            email: "bhavani@gmail.com",
            password: "1234567890"
        }

        //substiute the below code if you got the values from frontend
        // database.query(sql, data, function (error, results, fields) {


        database.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
            if (error) {
                res.send({
                    "code": 400,
                    "message": "error ocurred " + error,
                    "type": "error"
                })
            } else {
                console.log(results)
                res.send({
                    "code": 200,
                    "message": "User is successfully added",
                    "type": "success",
                    "result": results

                });
            }
        });
    }
}
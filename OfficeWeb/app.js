const express = require('express');
const app = express();
const index = require('./routes/index');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(8080);

//Routing
app.get("/",index);

//Employees
const{showEmployees,addEmployees,addEmployeesSubmit,editEmployees,editEmployeesSubmit,deleteEmployees} = require('./routes/employees');
app.get("/:officeCode",showEmployees);
app.get("/addEmployees/:officeCode",addEmployees);
app.post("/addEmployees/:officeCode",addEmployeesSubmit);
app.get("/editEmployees/:officeCode/:employeeNumber",editEmployees);
app.post("/editEmployees/:officeCode/:employeeNumber",editEmployeesSubmit);
app.get("/deleteEmployees/:officeCode/:employeeNumber",deleteEmployees);



//Template Engine
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + "/views");
app.use(express.static(__dirname + "/public"));


//Conncet Database
const mysql = require('mysql');
const db = mysql.createConnection ({
   host: 'localhost',
   user: 'root',
   password: '123456',
   database: 'myoffice'
});
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
 });
 global.db = db;
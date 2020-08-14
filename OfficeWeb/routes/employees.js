const { query } = require("express");

module.exports ={
    showEmployees: function(req,res){

        let query = "SELECT * FROM `employees` WHERE `officeCode` ='"+ req.params.officeCode +"'";
        db.query (query, (err, results) => {
            //console.log(results);
            res.render('showEmployees', {title: 'Human Resource Management',name: 'Employees',employees: results});
        });       
    },
    addEmployees: function(req,res){       
        let query = "SELECT * FROM `employees` WHERE `officeCode` ='"+ req.params.officeCode +"'";
        db.query(query,(err,result) =>{
            //console.log(result);
            res.render('addEmployees', {title: 'Human Resource Management' ,name: 'Add Employees', employees: result});
        });
    },
    addEmployeesSubmit: function(req,res){
        let query = "Insert into `employees` values("
            +"'"+req.body.employeeNumber+"',"+"'"+req.body.lastname+"',"
            +"'"+req.body.firstname+"','"+req.body.extension+"',"
            +"'"+req.body.email+"','"+req.params.officeCode+"',"+req.body.reportsTo+",'"+req.body.jobTitle+"')";
        db.query(query,(err,result) =>{
            //console.log(result);
            res.redirect("/"+req.params.officeCode);
        });
    },
    editEmployees: function(req,res){
        let query = "SELECT * FROM `employees` WHERE `officeCode` ='"+ req.params.officeCode +"' AND `employeeNumber` ='"+req.params.employeeNumber+"'";
        db.query(query,(err,result) =>{
            //console.log(result);
            res.render('editEmployees', {title: 'Human Resource Management' ,name: 'Edit Employees', employees: result});
        });
    },
    editEmployeesSubmit: function(req,res){
        let query = "UPDATE `employees` SET `lastName`='"+req.body.lastName+"',"
        +"`firstName` = '"+req.body.firstName+"',`extension`='"+req.body.extension+"',`email`='"+req.body.email+"',"
        +"`reportsTo` = "+req.body.reportsTo+",`jobTitle`='"+req.body.jobTitle+"' WHERE `employeeNumber` ='"+req.params.employeeNumber+"'";
        db.query(query,(err,result) =>{
            console.log(query);
            res.redirect("/"+req.params.officeCode);
        });
    },
    deleteEmployees: function(req,res){
        let query = "Delete from `employees` where `employeeNumber` ='"+req.params.employeeNumber+"'";
        db.query(query,(err,result)=>{
           // console.log(req.params.employeeNumber);
            res.redirect("/"+req.params.officeCode);
        });
    }
}
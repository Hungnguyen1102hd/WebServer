module.exports =  function(req, res) {
    let query = "SELECT * FROM `offices`";
    db.query(query, (err, results) => {
        //console.log(results[0].officeCode);
        res.render('index', { title: 'Human Resource Management',name: 'Companies', offices:results});
    });
 };
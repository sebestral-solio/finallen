var express = require('express');

var jwt = require('jsonwebtoken');

var router = express.Router();

var database = require('../database');


router.get("/8", function(request, response, next){

	response.render('sample_data', {title : 'Class I To VIII'});

});
router.get("/9",  function(request, response, next){

	response.render('sample_data9', {title : 'Class IX To X'});

});

router.get("/11",  function(request, response, next){

	response.render('sample_data11', {title : 'Class XI To XII'});

});

router.get("/ellip", function(request, response, next){

	response.render('sample_ellip', {title : 'Bengaluru Employees'});

});

router.get("/ellips",  function(request, response, next){

	response.render('sample_ellips', {title : 'Singapore Employees'});

});

router.get("/proj", function(request, response, next){

	response.render('sample_proj', {title : 'Bengaluru Projects'});

});

router.get("/projs",  function(request, response, next){

	response.render('sample_projs', {title : 'Singapore Projects'});

});

router.get("/workon",  function(request, response, next){

	response.render('sample_workon', {title : 'Employees Working On Bengaluru Projects'});

});

router.get("/workons",  function(request, response, next){

	response.render('sample_workons', {title : 'Employees Working On Singapore Projects'});

});

//shetty
router.get('/index', (req, res, next) => {
    res.render('index');
});



router.get("/login",  function(request, response, next){
	response.render('login');
});

router.get("/signup",   function(request, response, next){
	response.render('signup');
});


router.get('/admindash', (req, res) => {
    res.render('admindash');
});

router.get('/preranaadmindash', (req, res) => {
    res.render('preranaadmindash');
});

router.get('/sellipsonic', (req, res) => {
    res.render('sellipsonic'); 
});

router.get('/startupuser', (req, res) => {
    res.render('startupuser');
});


router.get('/ellipsonicadmindash', (req, res) => {
    res.render('ellipsonicadmindash');
});

router.get('/bellipsonic', (req, res) => {
    res.render('bellipsonic');
});

router.get('/forgot',  (req, res) => {
    res.render('forgot');
});

router.get('/logout', (req,res) => {
	res.render('index');
})

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------


//8th student
router.post("/action", function(request, response, next){

	var action = request.body.action;

	if(action == 'fetch')
	{
		var query = "SELECT * FROM student ORDER BY id ASC";

		database.query(query, function(error, data){

			response.json({
				data:data
			});

		});
	}

	if(action == 'Add')
	{
		var id = request.body.id;

		var name = request.body.name;

		var classs = request.body.classs;

		var subjects = request.body.subjects;

		var timings = request.body.timings;

        var fee = request.body.fee;

        var status = request.body.status;

        var parent_name = request.body.parent_name;

        var parent_number = request.body.parent_number; 



		var query = `
		INSERT INTO student 
		(id,name, classs, subjects, timings, fee, status, parent_name, parent_number) 
		VALUES ("${id}","${name}", "${classs}", "${subjects}", "${timings}", "${fee}", "${status}", "${parent_name}", "${parent_number}")
		`;

		database.query(query, function(error, data){

			response.json({
				message : 'Data Added'
			});

		});
	}

	if(action == 'fetch_single')
	{
		var id = request.body.id;

		var query = `SELECT * FROM student WHERE id = "${id}"`;

		database.query(query, function(error, data){

			response.json(data[0]);

		});
	}

	if(action == 'Edit')
	{
		var id = request.body.id;

		var name = request.body.name;

		var classs = request.body.classs;

		var subjects = request.body.subjects;

		var timings = request.body.timings;

        var fee = request.body.fee;

        var status = request.body.status;

        var parent_name = request.body.parent_name;

        var parent_number = request.body.parent_number;

		var query = `
		UPDATE student 
		SET name = "${name}", 
		classs = "${classs}", 
		subjects = "${subjects}", 
		timings = "${timings}" ,
        fee = "${fee}",
        status = "${status}",
        parent_name = "${parent_name}",
        parent_number = "${parent_number}"
		WHERE id = "${id}"
		`;

		database.query(query, function(error, data){
			response.json({
				message : 'Data Edited'
			});
		});
	}

	if(action == 'delete')
	{
		var id = request.body.id;

		var query = `DELETE FROM student WHERE id = "${id}"`;

		database.query(query, function(error, data){

			response.json({
				message : 'Data Deleted'
			});

		});
	}

});

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

//9th student
router.post("/action9", function(request, response, next){

	var action = request.body.action;

	if(action == 'fetch')
	{
		var query = "SELECT * FROM student9 ORDER BY id ASC";

		database.query(query, function(error, data){

			response.json({
				data:data
			});

		});
	}

	if(action == 'Add')
	{
		var id = request.body.id;

		var name = request.body.name;

		var classs = request.body.classs;

		var subjects = request.body.subjects;

		var timings = request.body.timings;

        var fee = request.body.fee;

        var status = request.body.status;

        var parent_name = request.body.parent_name;

        var parent_number = request.body.parent_number; 



		var query = `
		INSERT INTO student9 
		(id,name, classs, subjects, timings, fee, status, parent_name, parent_number) 
		VALUES ("${id}","${name}", "${classs}", "${subjects}", "${timings}", "${fee}", "${status}", "${parent_name}", "${parent_number}")
		`;

		database.query(query, function(error, data){

			response.json({
				message : 'Data Added'
			});

		});
	}

	if(action == 'fetch_single')
	{
		var id = request.body.id;

		var query = `SELECT * FROM student9 WHERE id = "${id}"`;

		database.query(query, function(error, data){

			response.json(data[0]);

		});
	}

	if(action == 'Edit')
	{
		var id = request.body.id;

		var name = request.body.name;

		var classs = request.body.classs;

		var subjects = request.body.subjects;

		var timings = request.body.timings;

        var fee = request.body.fee;

        var status = request.body.status;

        var parent_name = request.body.parent_name;

        var parent_number = request.body.parent_number;

		var query = `
		UPDATE student9 
		SET name = "${name}", 
		classs = "${classs}", 
		subjects = "${subjects}", 
		timings = "${timings}" ,
        fee = "${fee}",
        status = "${status}",
        parent_name = "${parent_name}",
        parent_number = "${parent_number}"
		WHERE id = "${id}"
		`;

		database.query(query, function(error, data){
			response.json({
				message : 'Data Edited'
			});
		});
	}

	if(action == 'delete')
	{
		var id = request.body.id;

		var query = `DELETE FROM student9 WHERE id = "${id}"`;

		database.query(query, function(error, data){

			response.json({
				message : 'Data Deleted'
			});

		});
	}

});

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

//11th student

router.post("/action11", function(request, response, next){

	var action = request.body.action;

	if(action == 'fetch')
	{
		var query = "SELECT * FROM student11 ORDER BY id ASC";

		database.query(query, function(error, data){

			response.json({
				data:data
			});

		});
	}

	if(action == 'Add')
	{
		var id = request.body.id;

		var name = request.body.name;

		var classs = request.body.classs;

		var subjects = request.body.subjects;

		var timings = request.body.timings;

        var fee = request.body.fee;

        var status = request.body.status;

        var parent_name = request.body.parent_name;

        var parent_number = request.body.parent_number; 



		var query = `
		INSERT INTO student11 
		(id,name, classs, subjects, timings, fee, status, parent_name, parent_number) 
		VALUES ("${id}","${name}", "${classs}", "${subjects}", "${timings}", "${fee}", "${status}", "${parent_name}", "${parent_number}")
		`;

		database.query(query, function(error, data){

			response.json({
				message : 'Data Added'
			});

		});
	}

	if(action == 'fetch_single')
	{
		var id = request.body.id;

		var query = `SELECT * FROM student11 WHERE id = "${id}"`;

		database.query(query, function(error, data){

			response.json(data[0]);

		});
	}

	if(action == 'Edit')
	{
		var id = request.body.id;

		var name = request.body.name;

		var classs = request.body.classs;

		var subjects = request.body.subjects;

		var timings = request.body.timings;

        var fee = request.body.fee;

        var status = request.body.status;

        var parent_name = request.body.parent_name;

        var parent_number = request.body.parent_number;

		var query = `
		UPDATE student11 
		SET name = "${name}", 
		classs = "${classs}", 
		subjects = "${subjects}", 
		timings = "${timings}" ,
        fee = "${fee}",
        status = "${status}",
        parent_name = "${parent_name}",
        parent_number = "${parent_number}"
		WHERE id = "${id}"
		`;

		database.query(query, function(error, data){
			response.json({
				message : 'Data Edited'
			});
		});
	}

	if(action == 'delete')
	{
		var id = request.body.id;

		var query = `DELETE FROM student11 WHERE id = "${id}"`;

		database.query(query, function(error, data){

			response.json({
				message : 'Data Deleted'
			});

		});
	}

});

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

//ellips bengaluru

router.post("/actionellip", function(request, response, next){

	var action = request.body.action;

	if(action == 'fetch')
	{
		var query = "SELECT * FROM employee ORDER BY id ASC";

		database.query(query, function(error, data){

			response.json({
				data:data
			});

		});
	}

	if(action == 'Add')
	{
		var id = request.body.id;

		var name = request.body.name;

		var dob = request.body.dob;

		var gender = request.body.gender;

		var salary = request.body.salary;

        var designation = request.body.designation;

        var mail = request.body.mail;

        var phone_number = request.body.phone_number;



		var query = `
		INSERT INTO employee 
		(id,name, dob, gender, salary, designation, mail, phone_number) 
		VALUES ("${id}","${name}", "${dob}", "${gender}", "${salary}", "${designation}", "${mail}", "${phone_number}")
		`;

		database.query(query, function(error, data){

			response.json({
				message : 'Data Added'
			});

		});
	}

	if(action == 'fetch_single')
	{
		var id = request.body.id;

		var query = `SELECT * FROM employee WHERE id = "${id}"`;

		database.query(query, function(error, data){

			response.json(data[0]);

		});
	}

	if(action == 'Edit')
	{
		var id = request.body.id;

		var name = request.body.name;

		var dob = request.body.dob;

		var gender = request.body.gender;

		var salary = request.body.salary;

        var designation = request.body.designation;

        var mail = request.body.mail;

        var phone_number = request.body.phone_number;

        
		var query = `
		UPDATE employee 
		SET name = "${name}", 
		dob = "${dob}", 
		gender = "${gender}", 
		salary = "${salary}" ,
        designation = "${designation}",
        mail = "${mail}",
        phone_number = "${phone_number}"
		WHERE id = "${id}"
		`;

		database.query(query, function(error, data){
			response.json({
				message : 'Data Edited'
			});
		});
	}

	if(action == 'delete')
	{
		var id = request.body.id;

		var query = `DELETE FROM employee WHERE id = "${id}"`;

		database.query(query, function(error, data){

			response.json({
				message : 'Data Deleted'
			});

		});
	}

});

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------


//ellips singapore
router.post("/actionellips", function(request, response, next){

	var action = request.body.action;

	if(action == 'fetch')
	{
		var query = "SELECT * FROM semployee ORDER BY id ASC";

		database.query(query, function(error, data){

			response.json({
				data:data
			});

		});
	}

	if(action == 'Add')
	{
		var id = request.body.id;

		var name = request.body.name;

		var dob = request.body.dob;

		var gender = request.body.gender;

		var salary = request.body.salary;

        var designation = request.body.designation;

        var mail = request.body.mail;

        var phone_number = request.body.phone_number;



		var query = `
		INSERT INTO semployee 
		(id,name, dob, gender, salary, designation, mail, phone_number) 
		VALUES ("${id}","${name}", "${dob}", "${gender}", "${salary}", "${designation}", "${mail}", "${phone_number}")
		`;

		database.query(query, function(error, data){

			response.json({
				message : 'Data Added'
			});

		});
	}

	if(action == 'fetch_single')
	{
		var id = request.body.id;

		var query = `SELECT * FROM semployee WHERE id = "${id}"`;

		database.query(query, function(error, data){

			response.json(data[0]);

		});
	}

	if(action == 'Edit')
	{
		var id = request.body.id;

		var name = request.body.name;

		var dob = request.body.dob;

		var gender = request.body.gender;

		var salary = request.body.salary;

        var designation = request.body.designation;

        var mail = request.body.mail;

        var phone_number = request.body.phone_number;

        
		var query = `
		UPDATE semployee 
		SET name = "${name}", 
		dob = "${dob}", 
		gender = "${gender}", 
		salary = "${salary}" ,
        designation = "${designation}",
        mail = "${mail}",
        phone_number = "${phone_number}"
		WHERE id = "${id}"
		`;

		database.query(query, function(error, data){
			response.json({
				message : 'Data Edited'
			});
		});
	}

	if(action == 'delete')
	{
		var id = request.body.id;

		var query = `DELETE FROM semployee WHERE id = "${id}"`;

		database.query(query, function(error, data){

			response.json({
				message : 'Data Deleted'
			});

		});
	}

});
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

//bengaluru projects

router.post("/actionproj", function(request, response, next){

	var action = request.body.action;

	if(action == 'fetch')
	{
		var query = "SELECT * FROM projects ORDER BY id ASC";

		database.query(query, function(error, data){

			response.json({
				data:data
			});

		});
	}

	if(action == 'Add')
	{
		var id = request.body.id;
		var project_name = request.body.project_name;


		var query = `
		INSERT INTO projects 
		(id,project_name) 
		VALUES ("${id}","${project_name}")
		`;

		database.query(query, function(error, data){

			response.json({
				message : 'Data Added'
			});

		});
	}

	if(action == 'fetch_single')
	{
		var id = request.body.id;

		var query = `SELECT * FROM projects WHERE id = "${id}"`;

		database.query(query, function(error, data){

			response.json(data[0]);

		});
	}

	if(action == 'Edit')
	{
		var id = request.body.id;

		var project_name = request.body.project_name;

	

		var query = `
		UPDATE projects 
		SET  project_name = "${project_name}"
		 WHERE id = "${id}"
		`;

		database.query(query, function(error, data){
			response.json({
				message : 'Data Edited'
			});
		});
	}

	if(action == 'delete')
	{
		var id = request.body.id;

		var query = `DELETE FROM projects WHERE id = "${id}"`;

		database.query(query, function(error, data){

			response.json({
				message : 'Data Deleted'
			});

		});
	}

});

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

//singapore projects

router.post("/actionprojs", function(request, response, next){

	var action = request.body.action;

	if(action == 'fetch')
	{
		var query = "SELECT * FROM sprojects ORDER BY id ASC";

		database.query(query, function(error, data){

			response.json({
				data:data
			});

		});
	}

	if(action == 'Add')
	{
		var id = request.body.id;
		var project_name = request.body.project_name;


		var query = `
		INSERT INTO sprojects 
		(id,project_name) 
		VALUES ("${id}","${project_name}")
		`;

		database.query(query, function(error, data){

			response.json({
				message : 'Data Added'
			});

		});
	}

	if(action == 'fetch_single')
	{
		var id = request.body.id;

		var query = `SELECT * FROM sprojects WHERE id = "${id}"`;

		database.query(query, function(error, data){

			response.json(data[0]);

		});
	}

	if(action == 'Edit')
	{
		var id = request.body.id;

		var project_name = request.body.project_name;

	

		var query = `
		UPDATE sprojects 
		SET project_name = "${project_name}"
		 WHERE id = "${id}"
		`;

		database.query(query, function(error, data){
			response.json({
				message : 'Data Edited'
			});
		});
	}

	if(action == 'delete')
	{
		var id = request.body.id;

		var query = `DELETE FROM sprojects WHERE id = "${id}"`;

		database.query(query, function(error, data){

			response.json({
				message : 'Data Deleted'
			});

		});
	}

});

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

// works_on bengaluru
router.post("/actionworkon", function(request, response, next){

	var action = request.body.action;

	if(action == 'fetch')
	{
		var query = "SELECT w.id, e.name AS employee_name,p.project_name AS project_name,w.start_date AS start_date FROM employee e, projects p, works_on w WHERE e.id=w.employee_id and p.id=w.project_id order by w.id asc";

		database.query(query, function(error, data){

			response.json({
				data:data
			});

		});
	}

	if(action == 'Add')
	{
		var id=request.body.id;
		var employee_id = request.body.employee_id;
		var project_id = request.body.project_id;
		var start_date = request.body.start_date;


		var query = `
		INSERT INTO works_on 
		(id,employee_id,project_id,start_date) 
		VALUES ("${id}","${employee_id}","${project_id}","${start_date}")
		`;

		database.query(query, function(error, data){

			response.json({
				message : 'Data Added'
			});

		});
	}

	if(action == 'fetch_single')
	{
		var id = request.body.id;

		var query = `SELECT * FROM works_on WHERE id = "${id}"`;

		database.query(query, function(error, data){

			response.json(data[0]);

		});
	}

	if(action == 'Edit')
	{
		var employee_id = request.body.employee_id;

		var project_id = request.body.project_id;

		var start_date = request.body.start_date;

		var id = request.body.id;
	

		var query = `
		UPDATE works_on 
		SET  employee_id = "${employee_id}", project_id = "${project_id}",start_date= "${start_date}"
		 WHERE id = "${id}"
		`;

		database.query(query, function(error, data){
			response.json({
				message : 'Data Edited'
			});
		});
	}

	if(action == 'delete')
	{
		var id = request.body.id;

		var query = `DELETE FROM works_on WHERE id = "${id}"`;

		database.query(query,function(error, data){

			response.json({
				message : 'Data Deleted'
			});

		});
	}

});


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

// works_on singapore

router.post("/actionworkons", function(request, response, next){

	var action = request.body.action;

	if(action == 'fetch')
	{
		var query = "SELECT w.id,e.name AS employee_name,p.project_name AS project_name,w.start_date AS start_date FROM semployee e, sprojects p, sworks_on w WHERE e.id=w.employee_id and p.id=w.project_id  order by w.id asc";

		database.query(query, function(error, data){

			response.json({
				data:data
			});

		});
	}

	if(action == 'Add')
	{
		var id=request.body.id;
		var employee_id = request.body.employee_id;
		var project_id = request.body.project_id;
		var start_date = request.body.start_date;


		var query = `
		INSERT INTO sworks_on 
		(id,employee_id,project_id,start_date) 
		VALUES ("${id}","${employee_id}","${project_id}","${start_date}")
		`;

		database.query(query, function(error, data){

			response.json({
				message : 'Data Added'
			});

		});
	}

	if(action == 'fetch_single')
	{
		var id = request.body.id;

		var query = `SELECT * FROM sworks_on WHERE id = "${id}"`;

		database.query(query, function(error, data){

			response.json(data[0]);

		});
	}

	if(action == 'Edit')
	{
		var employee_id = request.body.employee_id;

		var project_id = request.body.project_id;

		var start_date = request.body.start_date;

		var id = request.body.id;
	

		var query = `
		UPDATE sworks_on 
		SET  employee_id = "${employee_id}", project_id = "${project_id}",start_date= "${start_date}"
		 WHERE id = "${id}"
		`;

		database.query(query, function(error, data){
			response.json({
				message : 'Data Edited'
			});
		});
	}

	if(action == 'delete')
	{
		var id = request.body.id;

		var query = `DELETE FROM sworks_on WHERE id = "${id}"`;

		database.query(query,function(error, data){

			response.json({
				message : 'Data Deleted'
			});

		});
	}

});

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

//signup page admin
router.post('/signup', (req, res) => {
	const username = req.body.username;
	const password1 = req.body.password;
	const phone ="+91"+ req.body.phone;
	const confirm_password = req.body.confirm_password;
	const email = req.body.email;

// encrypting
	const crypto = require('crypto');
	const ENC= 'bf3c199c2470cb477d907b1e0917c17b';
	const IV = "5183666c72eec9e4";
	const ALGO = "aes-256-cbc"
	
	const encrypt = ((text) => 
	{
	let cipher = crypto.createCipheriv(ALGO, ENC, IV);
	let encrypted = cipher.update(text, 'utf8', 'base64');
	encrypted += cipher.final('base64');
	return encrypted;
	});
	
	const encrypted_key = encrypt(password1);

	console.log("Post from HTML/EJS:",'||username:',username,'||email:',email,'||phone:',phone,'||password:',password1);

	if(password1==confirm_password){
	database.query("INSERT INTO login_demo (username,email,phone,password) VALUES (?, ?, ?, ?)", [username,email,phone, encrypted_key], (err, result) => {
		if (err){
			res.json({ message: err });
		}
		else{
			res.render('admindash');
			}
		}); 
	}
	else{
		res.send('Confirm password is not matching');
	}
});

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

//login page admin
router.post('/login', async (req, res) => {
	const username = req.body.username;
	const password1 = req.body.password;

	// encrypting
	const crypto = require('crypto');
	const ENC= 'bf3c199c2470cb477d907b1e0917c17b';
	const IV = "5183666c72eec9e4";
	const ALGO = "aes-256-cbc"

	const encrypt = ((text) => 
	{
	let cipher = crypto.createCipheriv(ALGO, ENC, IV);
	let encrypted = cipher.update(text, 'utf8', 'base64');
	encrypted += cipher.final('base64');
	return encrypted;
	});
	const encrypted_key = encrypt(password1);

	console.log("Post from HTML/EJS:",'||username',username, '||password',password1);

	database.query("SELECT * FROM login_demo WHERE username = ? AND password = ?", [username, encrypted_key], (err, result) => {
		if (err) throw err;
			console.log(result);
			if (result.length >0) {
				res.render('admindash');
			} else {
			 
				res.send('Invalid Username Or Password!!!');
			}
		});
	});

//--------------------------------------------FORGOT PASSWORD------------------------------------------------------------------------------------------

// const twilio = require('twilio');

// // Define Twilio credentials and verify service SID
// const accountSid = "ACecf0c667f0cfda12b85d28011461dfe7";
// const authToken = "5bde1942526aed92d3fed903236bac3c";
// const verifySid = "VA4ed805d28afaa72068afb67725de80b9";
// const client = twilio(accountSid, authToken);

// // Route for initiating password recovery
// router.post('/forgot', function(req, res) {
//     // Retrieve phone number from request body
//     const phone = "+91"+req.body.phone;

//     // Query database to check if phone number exists
//     database.query("SELECT * FROM login_demo WHERE phone = ?", [phone], (err, result) => {
//         if (err) {
//             console.error("Error querying database:", err);
//             return res.status(500).send("An error occurred. Please try again later.");
//         }

//         // If phone number exists, initiate OTP verification
//         if (result.length > 0) {
//             client.verify.services(verifySid)
//                 .verifications.create({ to: phone, channel: "sms" })
//                 .then((verification) => {
//                     console.log("OTP sent successfully:", verification);
//                     return res.render('otp', { phone: phone });
//                 })
//                 .catch((error) => {
//                     console.error("Error sending OTP:", error);
//                     return res.status(500).send("An error occurred. Please try again later.");
//                 });
//         } else {
//             // If phone number doesn't exist, send error message
//             return res.send("Invalid Phone Number!!");
//         }
//     });
// });


// // -----------------------------------------------------Route for verifying OTP-----------------------------------------------------------------
// router.post('/verify-otp', function(req, res) {
//     const otp = req.body.otp;
//     const phone = req.body.phone;

//     // Use Twilio's Verify API to verify OTP
//     client.verify.services(verifySid)
//         .verificationChecks.create({ to: '+917899238398', code: otp })
//         .then((verification_check) => {
//             if (verification_check.status === 'approved') {
//                 // If OTP is verified successfully, render admin dashboard
//                 return res.render('newpassword');
//             } else {
//                 // If OTP verification fails, send error message
//                 return res.send("Invalid OTP. Please try again.");
//             }
//         })
//         .catch((error) => {
//             console.error("Error verifying OTP:", error);
//             return res.status(500).send("An error occurred. Please try again later.");
//         });
// });


// // //------------------------------------------------sign number----------------------------------------
// router.get("/phone", function(request, response, next){

// 	response.render('phone');

// });
// // Route for initiating password recovery
// router.post('/phone', function(req, res) {
//     // Retrieve phone number from request body
//     const phone = "+91"+req.body.phone;

//     // Query database to check if phone number exists
//     database.query("SELECT * FROM login_demo WHERE phone = ?", [phone], (err, result) => {
//         if (err) {
//             console.error("Error querying database:", err);
//             return res.status(500).send("An error occurred. Please try again later.");
//         }

//         // If phone number exists, initiate OTP verification
//         if (result.length > 0) {
//             client.verify.services(verifySid)
//                 .verifications.create({ to: phone, channel: "sms" })
//                 .then((verification) => {
//                     console.log("OTP sent successfully:", verification);
//                     return res.render('sotp', { phone: phone });
//                 })
//                 .catch((error) => {
//                     console.error("Error sending OTP:", error);
//                     return res.status(500).send("An error occurred. Please try again later.");
//                 });
//         } else {
//             // If phone number doesn't exist, send error message
//             return res.send("Invalid Phone Number!!");
//         }
//     });
// });


// // //----------------------------------------------sign verify otp-------------------------------
// router.post('/sverify-otp', function(req, res) {
//     const otp = req.body.otp;
//     const phone ="+917899238398" 

//     // Use Twilio's Verify API to verify OTP
//     client.verify.services(verifySid)
//         .verificationChecks.create({ to: '+917899238398', code: otp })
//         .then((verification_check) => {
//             if (verification_check.status === 'approved') {
//                 // If OTP is verified successfully, render admin dashboard
//                 return res.render('admindash');
//             } else {
// 				database.query("DELETE FROM login_demo WHERE phone = ?", [phone], (err, result) => {
// 					if (err) {
// 						console.error("Error querying database:", err);
// 					}
// 					else{
// 						res.render('signup');
// 					}
// 				})
// 			}

//                 // If OTP verification fails, send error message
              
//             })
        
//         .catch((error) => {
//             console.error("Error verifying OTP:", error);
//             return res.status(500).send("An error occurred. Please try again later.");
//         });
// });




// // //--------------------------------------------setting new password----------------------------------------------------------

// // Route to render the set password form
// router.get('/newpassword', (req, res) => {
//     res.render('newpassword'); // Assuming you're using a templating engine like EJS
// });

// // Route to handle form submission and reset password
// router.post('/reset-password', (req, res) => {

// 	const phone = "+91"+req.body.phone;
//     const newPassword = req.body.password;
//     const confirmPassword = req.body.confirm_password;


// 	const crypto = require('crypto');
// 	const ENC= 'bf3c199c2470cb477d907b1e0917c17b';
// 	const IV = "5183666c72eec9e4";
// 	const ALGO = "aes-256-cbc"
	
// 	const encrypt = ((text) => 
// 	{
// 	let cipher = crypto.createCipheriv(ALGO, ENC, IV);
// 	let encrypted = cipher.update(text, 'utf8', 'base64');
// 	encrypted += cipher.final('base64');
// 	return encrypted;
// 	});
	
	

	
// 	const encrypted_key = encrypt(newPassword);
//     // Check if the passwords match
//     if (newPassword !== confirmPassword) {
//         return res.send('Passwords do not match. Please try again.');
//     }
// 	else {
// 		database.query("UPDATE login_demo SET password = ? where phone = ?", [encrypted_key,phone], (err, result) => {
// 			if (err){
// 				res.json({ message: err });
// 			}
// 			else{
// 				res.render('admindash');
// 				}
// 			}); 

// 	}
// console.log("new password:",newPassword)
// });


module.exports = router;


// const accountSid = "ACecf0c667f0cfda12b85d28011461dfe7";
// const authToken = "5bde1942526aed92d3fed903236bac3c";
// const verifySid = "VA4ed805d28afaa72068afb67725de80b9";
// const client = twilio(accountSid, authToken);


//disabling back button , insert in all ejs files 
/* <script type = "text/javascript">
    function preventBack(){
        window.history.forward();
    }
    setTimeout("preventBack()",0);

    window.onunload=function(){null};
    </script> */


	//npm run watch for running
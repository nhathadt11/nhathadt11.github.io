// JavaScript Document

function checkSignup(username, userEmail, password, repassword, userAgreement){	
	if (!username.match("^[\\w]{6,18}$")){
		customizeAlert("Invalid Username!","Your Username must have at least 6 and no more than 18 characters","#FFEB3B","black");
		showAlert();
		setTimeout('hideAlert()',3000);
		return false;
	}

	if (!userEmail.match("^[\\w]+[@][\\w]+[.][\\w]+([.][\\w]+){0,1}$")){
		customizeAlert("Invalid email!","name@example.abc","#FFEB3B","black");
		showAlert();
		setTimeout('hideAlert()',3000);
		return false;
	}

	if (!password.match("^[\\w]{8,16}$")){
		customizeAlert("Incorrect Password!","Your password must have at least 8 and no more than 16 characters","#FFEB3B","black");
		showAlert();
		setTimeout('hideAlert()',3000);
		return false;
	} else if (password!=repassword){
		customizeAlert("Warning!","Your repassword does not match.","#FFEB3B","black");
		showAlert();
		setTimeout('hideAlert()',3000);
		return false;
	}

	if (!userAgreement){
		customizeAlert("Sorry!","You must accept our terms & conditions.","#2196F3","white");
		showAlert();
		setTimeout('hideAlert()',3000);
		return false;
	}

	return true;	
}
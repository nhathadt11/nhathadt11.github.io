// JavaScript Document
var key = localStorage.getItem('total');
var signedinName = localStorage.getItem('signinStatus');
var signedin = false;

function searchUsername(username){
	for(var i = 1 ; i <= localStorage.getItem("total") ; i++)
	{
		var tmp = localStorage.getItem('usr' + i);
		{
			var arr = tmp.split(",");
			if(username == arr[0])
				return i;
		}
	}
	return -1;
}

function add(username,email,password){
	if(searchUsername(username)==-1)
	{
		key++;
		localStorage.setItem('usr' + key, username + "," + email + "," + password);
		localStorage.setItem('total',key);
		customizeAlert("Congrastulations!","Successfully registered!","#4CAF50","white");
		showAlert();
		hideSignupBox();
		showSigninBox();
		setTimeout('hideAlert()',3000);
	} else {
		customizeAlert("Fail!","This Username has been taken!","#F44336","white");
		showAlert();
		setTimeout('hideAlert()',3000);
	}
}

function signMeUp(){	
	var username = document.getElementById('signupUsername').value;
	var userEmail = document.getElementById('signupUserEmail').value;
	var password = document.getElementById('signupUserPassword').value;
	var repassword = document.getElementById('signupUserRepassword').value;
	var userAgreement = document.getElementById('userAgreement').checked;
	
	if(!checkSignup(username, userEmail, password, repassword, userAgreement))
		return false;
	
	add(username,userEmail,password);
		return true;	
}

function signMeIn(){
	var username = document.getElementById('signinUsername').value;
	var password = document.getElementById('signinUserPassword').value;

	var pos = searchUsername(username);
	if (pos != -1){
		var tmp = localStorage.getItem('usr' + pos);
		{
			var arr = tmp.split(",");
			if(password == arr[2]){
				customizeAlert("Success!","You have signed in as " + username + ".","#4CAF50","white");
				showAlert();
				changeSigninSignup(username, "Logout");
				localStorage.setItem('signinStatus',username);
				signedin = true;
				hideSigninBox();
				setTimeout('hideAlert()',3000);
				refreshReviewBox();
				return true;
			}
		}
	}
	customizeAlert("Fail!","Invalid Username or Password.","#F44336","white");
	showAlert();
	setTimeout('hideAlert()',3000);
	
	return false;
}

function signMeUpWKey(){
	var key = event.keyCode;
	if(key == 13)
		signMeUp();
	if(key == 27)
		hideSignupBox();
}

function signMeInWKey(){
	var key = event.keyCode;
	if(key == 13)
		signMeIn();
	if(key == 27)
		hideSigninBox();
}

function changeSigninSignup(str1, str2){
	document.getElementById('header-signin').innerHTML = str1;
	document.getElementById('header-signup').innerHTML = str2;
}

function checkSignIn(){
	var username = localStorage.getItem('signinStatus');
	if (username != "" && username != null){
		changeSigninSignup(username, "Logout");
		signedin = true;
	}	
}

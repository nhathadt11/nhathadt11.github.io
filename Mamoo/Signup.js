// JavaScript Document
function showSignupBox(){	
	if(signedin){
		changeSigninSignup("Sign in","Sign up");
		customizeAlert("Success!","You have successfully loged out","#4CAF50","white");
		showAlert();
		localStorage.setItem('signinStatus',"");
		signedin = false;
		setTimeout('hideAlert()',3000);
		refreshReviewBox();
		return;
	}	
	var login_tag = document.getElementById('signup-form');
	login_tag.style.opacity = 1;
	login_tag.style.transform = 'translateY(640px)';
	document.getElementById('signupUsername').focus();	
}

function hideSignupBox(){		
		var login_tag = document.getElementById('signup-form');
		login_tag.style.transform = 'translateY(-640px)';
		login_tag.style.opacity = 0;		
}

function hideSignupBoxWKey(){	
	if (event.keyCode == 27)
		hideSignupBox();
}
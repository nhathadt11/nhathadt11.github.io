// JavaScript Document

function showSigninBox(){	
	if(signedin) return;	
	var login_tag = document.getElementById('signin-form');
	login_tag.style.opacity = 1;
	login_tag.style.transform = 'translateY(500px)';
	document.getElementById('signinUsername').focus();
}

function hideSigninBox(){		
	var login_tag = document.getElementById('signin-form');
	login_tag.style.transform = 'translateY(-500px)';
	login_tag.style.opacity = 0;
}

function hideSigninBoxWKey(){	
	if (event.keyCode == 27)
		hideSigninBox();	
}
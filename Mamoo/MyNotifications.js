// JavaScript Document
function showAlert(){	
	var myAlert = document.getElementById('my-alert');
	myAlert.style.transform = "translateX(-385px)";
}

function hideAlert(){
	document.getElementById('my-alert').style.transform = "translateX(385px)";
}

function customizeAlert(name,content,bgcolor,color){	
	var myAlert = document.getElementById('my-alert');
	var alertName = document.getElementById('alert-name');
	var alertContent = document.getElementById('alert-content');
	
	myAlert.style.backgroundColor = bgcolor;
	myAlert.style.color = color;
	alertName.innerHTML = name;
	alertContent.innerHTML = content;
}
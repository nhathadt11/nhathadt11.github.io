// JavaScript Document
function checkSearchBox(){	
	var x = document.getElementById('search-box-input').value.length;
	if (x!=0) document.getElementById('search-box').style.backgroundColor = '#72CDBB';
	else document.getElementById('search-box').style.backgroundColor = 'black';
	setTimeout('checkSearchBox()',100);	
}
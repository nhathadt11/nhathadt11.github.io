// JavaScript Document

var i = 1;
var cur = 1;
var num = 4;

function playGallery(){
	cur = i;
	document.getElementById('header').style.zIndex = num;
	document.getElementById('img' + i).style.opacity = 1;
	document.getElementById('thumb' + i).style.opacity = 0.5;
	if (i == 1)
	{
		document.getElementById('img' + num).style.opacity = 0;
		document.getElementById('thumb' + num).style.opacity = 0;
	} else {
		document.getElementById('img' + (i-1)).style.opacity = 0;
		document.getElementById('thumb' + (i-1)).style.opacity = 0;
	}
	i++;
	if(i > num) i = 1;
	setTimeout('playGallery()',3000);
}

function nextImage(){
	document.getElementById('img' + cur).style.opacity = 0;
	document.getElementById('thumb' + cur).style.opacity = 0;
	if (cur == num)
	{	
		document.getElementById('img' + 1).style.opacity = 1;
		document.getElementById('thumb' + 1).style.opacity = 0.5;
		cur = 1;
	} else {	
		document.getElementById('img' + (cur + 1)).style.opacity = 1;
		document.getElementById('thumb' + (cur + 1)).style.opacity = 0.5;
		cur++;
	}
}

function backImage(){
	document.getElementById('img' + cur).style.opacity = 0;
	document.getElementById('thumb' + cur).style.opacity = 0;
	if (cur==1)
	{
		document.getElementById('img' + num).style.opacity = 1;
		document.getElementById('thumb' + num).style.opacity = 0.5;
		cur = num;
	} else {
		document.getElementById('img' + (cur - 1)).style.opacity = 1;
		document.getElementById('thumb' + (cur - 1)).style.opacity = 0.5;
		cur--;
	}
}

function showBackToTopButton(){
	var elmnt = document.getElementById("main-body");
	var backToTopButton = document.getElementById('back-to-top-button');
    var x = elmnt.scrollLeft;
    var y = elmnt.scrollTop;
	if (y >= 900) backToTopButton.style.display = "inline-block";
		else backToTopButton.style.display = "none";
}

function backToTop(){
	window.scrollTo(0, 0);
}
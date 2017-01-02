// JavaScript Document

var commentStr = "";

function submitComment(){
	var commentUsername;
	if (signedin){
		commentUsername = document.getElementById('header-signin').innerHTML;
		document.getElementById('comment-username').value = commentUsername;
	} else {
		commentUsername = document.getElementById('comment-username').value;
	}
	
	var commentContent = document.getElementById('comment-content').value;
	commentStr += "<br />" + new Date().toUTCString() + "<br />";
	commentStr += "<br /><span>" + commentUsername + "</span>&emsp;" + "<br />";
	commentStr += "<span>" + commentContent + "</span><br /><br /><div style='border-top:1px solid lightgrey'></div>";
	
	document.getElementById('dish-review').innerHTML = commentStr;
	refreshReviewBox();
	document.getElementById('comment-content').focus();
}

function submitCommentWKey(){
	var key = event.keyCode;
	if (event.keyCode == 13){
		submitComment();
	}
}

function refreshReviewBox(){
	var username = document.getElementById('comment-username');
	var comment = document.getElementById('comment-content');
	
	if (!signedin){
		username.value = "";
		username.disabled = false;
	}
	
	if (signedin){
		username.value = document.getElementById('header-signin').innerHTML; 
		username.disabled = true;
	}
	
	comment.value = "";
}

function openNewPage(pageUrl){
	location.assign(pageUrl + '.html');
}
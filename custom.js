// JavaScript Document
//First Hash Check//
var hash = false; 
checkHash();

//Cycle Hash Check//
function checkHash(){ 
    if(window.location.hash != hash) { 
        hash = window.location.hash; 
        processHash(hash); 
    } t=setTimeout("checkHash()",100); 
}

// If hashtag manually changed in url.. //
function processHash(hash){
if (hash == "#home") {
	$("#d10").show();
	    $("#d11").hide();
		$("#d12").hide();
		$("#d13").hide();
		$("#d14").hide();
		$("#d15").hide();
		$("#d16").hide();		
}
if (hash == "#members") {
	$("#d10").hide();
	    $("#d11").show();
		$("#d12").hide();
		$("#d13").hide();
		$("#d14").hide();
		$("#d15").hide();
		$("#d16").hide();
}
if (hash == "#research") {
	$("#d10").hide();
	    $("#d11").hide();
		$("#d12").show();
		$("#d13").hide();
		$("#d14").hide();
		$("#d15").hide();
		$("#d16").hide();		
}
if (hash == "#methods") {
	$("#d10").hide();
	    $("#d11").hide();
		$("#d12").hide();
		$("#d13").show();
		$("#d14").hide();
		$("#d15").hide();
		$("#d16").hide();		
}
if (hash == "#papers") {
	$("#d10").hide();
	    $("#d11").hide();
		$("#d12").hide();
		$("#d13").hide();
		$("#d14").show();
		$("#d15").hide();
		$("#d16").hide();		
}
if (hash == "#courses") {
	$("#d10").hide();
	    $("#d11").hide();
		$("#d12").hide();
		$("#d13").hide();
		$("#d14").hide();
		$("#d15").show();
		$("#d16").hide();		
}
if (hash == "#links") {
	$("#d10").hide();
	    $("#d11").hide();
		$("#d12").hide();
		$("#d13").hide();
		$("#d14").hide();
		$("#d15").hide();
		$("#d16").show();		
}
}


// If hashtag on page loadup.. //
$(function(){ // this will run when the document.ready event fires
if (hash == "#home") {
	$("#d10").show();
	    $("#d11").hide();
		$("#d12").hide();
		$("#d13").hide();
		$("#d14").hide();
		$("#d15").hide();
		$("#d16").hide();		
}
if (hash == "#members") {
	$("#d10").hide();
	    $("#d11").show();
		$("#d12").hide();
		$("#d13").hide();
		$("#d14").hide();
		$("#d15").hide();
		$("#d16").hide();
}
if (hash == "#research") {
	$("#d10").hide();
	    $("#d11").hide();
		$("#d12").show();
		$("#d13").hide();
		$("#d14").hide();
		$("#d15").hide();
		$("#d16").hide();		
}
if (hash == "#methods") {
	$("#d10").hide();
	    $("#d11").hide();
		$("#d12").hide();
		$("#d13").show();
		$("#d14").hide();
		$("#d15").hide();
		$("#d16").hide();		
}
if (hash == "#papers") {
	$("#d10").hide();
	    $("#d11").hide();
		$("#d12").hide();
		$("#d13").hide();
		$("#d14").show();
		$("#d15").hide();
		$("#d16").hide();		
}
if (hash == "#courses") {
	$("#d10").hide();
	    $("#d11").hide();
		$("#d12").hide();
		$("#d13").hide();
		$("#d14").hide();
		$("#d15").show();
		$("#d16").hide();		
}
if (hash == "#links") {
	$("#d10").hide();
	    $("#d11").hide();
		$("#d12").hide();
		$("#d13").hide();
		$("#d14").hide();
		$("#d15").hide();
		$("#d16").show();		
}
});



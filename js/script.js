$( document ).ready(function() {
	getPageSize();
});

$( window ).resize(function() {
	getPageSize();
});

function getPageSize() {
	var docWidth = $(document).width();
	var docHeight = $(document).height();
	$("#xScreen").text("X " + docWidth);
	$("#yScreen").text("Y " + docHeight);
	var pWidth = $("#xScreen").width();
	var pHeight = $("#yScreen").height();
	console.log("X: " + pWidth);
	console.log("Y: " + pHeight);
}
var daysE1= document.getElementById("days");
var hoursE1= document.getElementById("hours");
var minE1= document.getElementById("min");
var secE1= document.getElementById("sec");


var newYear= "1 Jan 2022";

function countdown() {
	var newYearDate= new Date(newYear);
	var currentDate= new Date();
	var totalSec= (newYearDate - currentDate) /1000;
	var days =Math.floor(totalSec / 3600 /24);
	var hours =Math.floor(totalSec / 3600 ) %24;
	var min =Math.floor(totalSec / 60) %60;
	var sec =Math.floor(totalSec) %60;

	daysE1.innerHTML =days;
	hoursE1.innerHTML =hours;
	minE1.innerHTML =min;
	secE1.innerHTML =sec;



}

countdown();
setInterval (countdown,1000);
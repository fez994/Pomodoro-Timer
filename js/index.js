// declare variables
var start = document.querySelector('#start-btn');
var min = document.querySelector('#minutes-session');
var sec = document.querySelector('#seconds-session');
var plus = document.querySelector('#plus');
var minus = document.querySelector('#minus');
var chill = document.querySelector('#break-btn');
var timerMin = document.querySelector('#minutes');
var timerSec = document.querySelector('#seconds');
var plusBreak = document.querySelector('#plus-break');
var minusBreak = document.querySelector('#minus-break');
var minuteBreak = document.querySelector('#minutes-break');


var counter;
var minutesBreak = eval(minuteBreak.innerHTML);
var minutes = eval(min.innerHTML);
var seconds = 60;

// our pomodoro function
function startPomodoro() {
	seconds--;

	if(seconds <= -1) {
		minutes--;
		seconds = 59;
	}
	
	if(minutes <= -1) {
		// when the pomodoro is finished, we will start the break function
		counter = clearInterval(counter);
		breakTime();

	}
	// displaying it to the dom
	timerSec.innerHTML = seconds;
	timerMin.innerHTML = minutes;

}


function breakTime() {
	alert("clicked");
}



////////////////////////////////
// buttons functions
////////////////////////////////

// start function
start.addEventListener("click", function() {
	// making the buttons disabled when the start button is clicked will help avoiding bugs
	start.disabled = true;
	minus.disabled = true;
	plus.disabled = true;

	minutes--;
	counter = setInterval(startPomodoro, 1000);
	startPomodoro();
});



plus.addEventListener("click", function() {
	minutes++;
	min.innerHTML = minutes;
	timerMin.innerHTML = minutes;
});



minus.addEventListener("click", function() {
	// if minutes are less then 0, we set them back to 0, because otherwise we will have -1 minutes, and that's not correct
	if(minutes <= 0) {
		minutes = 0;
	// if minutes are not less than 0, then we can subtract
	} else {
	minutes--;
	
	}
	// display data in the dom
	min.innerHTML = minutes;
	timerMin.innerHTML = minutes;
});	


////////////////////////////
////////////////////////////

chill.addEventListener("click", function() {
	minutes = 5;
	timerMin.innerHTML = minutes;
	chill.disabled = true;
});


plusBreak.addEventListener("click", function() {
	minutesBreak++;
	minuteBreak.innerHTML = minutesBreak;
});


minusBreak.addEventListener("click", function() {
	if(minutesBreak <= 0) {
		minusBreak = 0;
	} else {
		minutesBreak--;
	}
	
	minuteBreak.innerHTML = minutesBreak;
});





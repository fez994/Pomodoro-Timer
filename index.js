// declare variables
var start = document.querySelector('#start-btn');
var min = document.querySelector('#minutes-session');
var sec = document.querySelector('#seconds-session');
var plus = document.querySelector('#plus');
var minus = document.querySelector('#minus');
var timerMin = document.querySelector('#minutes');
var timerSec = document.querySelector('#seconds');
var plusBreak = document.querySelector('#plus-break');
var minusBreak = document.querySelector('#minus-break');
var minuteBreak = document.querySelector('#minutes-break');
var reset = document.querySelector('#reset-btn');
var audio = new Audio('beep.mp3');
var counter;
var minutesBreak = eval(minuteBreak.innerHTML);
var minutes = eval(min.innerHTML);
var seconds = 60;

// Pomodoro function
function startPomodoro() {
	reset.disabled = false;
	seconds--;

	if(seconds <= -1) {
		minutes--;
		seconds = 59;
	}
	
	if(minutes <= -1) {
		// when the pomodoro is finished, we will start the break function
		counter = clearInterval(counter);
		audio.play();
		counter = setInterval(breakTime, 1000);
		minutes = eval(minuteBreak.innerHTML) -1;
		seconds = 60;
		breakTime();

	}
	// displaying it to the dom
	timerSec.innerHTML = seconds;
	timerMin.innerHTML = minutes;

}


function breakTime() {
	// disabling button
	plusBreak.disabled = true;
	minusBreak.disabled = true;
	reset.disabled = true;
	start.disabled = true;

	seconds--;
	if(seconds <= -1) {
		minutes--;
		seconds = 59;
	}

	if(minutes <= -1) {
		counter = clearInterval(counter);
		audio.play();
		counter = setInterval(startPomodoro, 1000);
		minutes = eval(min.innerHTML) - 1;
		seconds = 60;
		startPomodoro();
	}
	
	timerMin.innerHTML = minutes;
	timerSec.innerHTML = seconds;

}



// start button 
start.addEventListener("click", function() {
	// making the buttons disabled when the start button is clicked will help avoiding bugs
	start.disabled = true;
	minus.disabled = true;
	plus.disabled = true;
	minutes--;
	counter = setInterval(startPomodoro, 1000);
	startPomodoro();
});



////////////////////////////
// Session length buttons
////////////////////////////


plus.addEventListener("click", function() {
	minutes++;
	min.innerHTML = minutes;
	timerMin.innerHTML = minutes;
});



minus.addEventListener("click", function() {
	// if minutes are less then 0, we set them back to 0, because otherwise we will have -1 minutes, and that's not correct
	if(minutes <= 1) {
		minutes = 1;
	// if minutes are not less than 0, then we can subtract
	} else {
	minutes--;
	
	}
	// display data in the dom
	min.innerHTML = minutes;
	timerMin.innerHTML = minutes;
});	



////////////////////////////
// break length buttons
////////////////////////////



plusBreak.addEventListener("click", function() {
	minutesBreak++;
	minuteBreak.innerHTML = minutesBreak;
});


minusBreak.addEventListener("click", function() {
	if(minutesBreak <= 1) {
		minusBreak = 1;
	} else {
		minutesBreak--;
	}
	
	minuteBreak.innerHTML = minutesBreak;
});



// Reset button
reset.addEventListener("click", function() {
	// when the reset button is clicked, we want to clear our interval
	counter = clearInterval(counter);
	counter = setInterval(startPomodoro, 1000);
	minutes = eval(min.innerHTML) - 1;
	seconds = 60;
	startPomodoro();
});
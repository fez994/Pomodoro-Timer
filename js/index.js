var start = document.querySelector('#start-btn');
var reset = document.querySelector('#reset-btn');
var rest = document.querySelector('#break-btn');
var timer;
var minutes = 25;
var seconds = 60;


var counter = setInterval(timer, 1000);

function timer() {
	seconds = seconds - 1;
	
	// if seconds are less or equal to zero, minutes -- 
	if(seconds <= -1) {
		minutes--;
		seconds = 10;
	}

	// else if minutes are less then 0, 
	if(minutes <= -1) {
		clearInterval(counter);
		// counter end
		minutes = 25;
		seconds = 60;

		return;
	}
	// showing numbers to the dom
	document.querySelector('.timer').innerHTML = minutes + ":" + seconds + " Secs";
	
}

 

function breakTime() {
	minutes = 10;
	seconds = 60;
	seconds = seconds -1;

	if(seconds <= -1) {
		minutes --;
		seconds = 60;
	}
}




// reset function 
function reset() {
	minutes = 25;
	seconds = 60;
	timer();
}




// start
start.addEventListener("click", function() {
	timer();

	
});




// reset function	
reset.addEventListener("click", function reset() {
	reset();
	
});


	
rest.addEventListener("click", function() {
	breakTime();
});
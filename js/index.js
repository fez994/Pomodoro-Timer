// declaring variables
var start = document.querySelector('#start-btn');
var reset = document.querySelector('#reset-btn');
var rest = document.querySelector('#break-btn');
var min = document.querySelector('#minutes');
var sec = document.querySelector('#seconds');
var plus = document.querySelector('#plus');
var minus = document.querySelector('#minus');
var isRunning = false;
var counter;

var minutes = eval(min.innerHTML);
var seconds = 60;



function timer() {
	
	seconds--;	
	// if seconds are less or equal to zero, minutes -- 
	if(seconds <= -1) {
		minutes--;
		seconds = 59;
	}

	// else if minutes are less then 0, i'll start the break function
	if(minutes <= -1) {
		// counter end
		clearInterval(counter);

		breakTime();
		counter = setInterval(breakTime, 1000);
		//breakTime();
		

		//return;
	}
	// showing numbers to the page
	min.innerHTML = minutes;
	sec.innerHTML = seconds;
	
}

 
// Break time function
function breakTime() {
	seconds = 59;
	seconds--;
	minutes = 4;
	
	
	if(seconds <= -1) {
		minutes--;
		seconds = 60;
	}

	min.innerHTML = minutes;
	sec.innerHTML = seconds;
}



// reset function 
function resetTimer() {
	minutes = 25;
	seconds = 59;
	minutes--;
	min.innerHTML = minutes;
	sec.innerHTML = seconds;
	var counter = setInterval(timer, 1000);
	

	if(seconds <= -1) {
		minutes --;
		seconds = 60;
	}
	
}




// start
start.addEventListener("click", function() {
	minutes--;
	counter = setInterval(timer, 1000);
	timer();
});



// reset function	
reset.addEventListener("click", function() {
	clearInterval(counter);
	minutes--;
	resetTimer();

	
});


// break function
rest.addEventListener("click", function() {
	breakTime();

});


// functions that adds minutes

plus.addEventListener("click", function() {
		minutes = minutes + 1;
		min.innerHTML = minutes;
		

});


// function that subtract minutes

minus.addEventListener("click", function() {
		minutes = minutes - 1;
		min.innerHTML = minutes;
});


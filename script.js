let hr = document.getElementById("hr");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");
let hours = 0;
let minutes = 0;
let seconds = 0;
var a;
function startStopwatch(e){
	 startButton.setAttribute('disabled', true);
updateStopwatch();
}
function updateStopwatch(){
	a = setInterval(()=>{
		seconds++;
		if(seconds >= 60){
			minutes++;
			if(minutes >= 60){
				hours++;
					minutes = minutes - minutes;
					min.innerHTML = "0" + minutes;
				}
				else{
					min.innerHTML = ((minutes<10) ? "0":"") + minutes;
				}
		
					hr.innerHTML = ((hours<10) ? "0":"") + hours;
			seconds = seconds - seconds;
			sec.innerHTML = "0" + seconds;
		}
		else{
			sec.innerHTML = ((seconds<10) ? "0":"") + seconds;
		}
},1000)
}
function stopStopwatch(){
	clearInterval(a);
	startButton.removeAttribute('disabled');
}
function resetStopwatch(){
	clearInterval(a);
	hr.innerHTML = "00";
	min.innerHTML = "00";
	sec.innerHTML = "00";
	hours = 0;
	minutes = 0;
	seconds = 0;
}

startButton.addEventListener("click",startStopwatch)
stopButton.addEventListener("click",stopStopwatch)
resetButton.addEventListener("click",resetStopwatch)


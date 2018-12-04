var playPauseKey = "Enter"; 
var timeFwdKey = "Equal";
var timeBckKey = "Minus";

playpause = document.getElementsByClassName("ytp-play-button")[0];
video = document.getElementsByTagName("video")[0];

document.addEventListener('keypress', (event) => {	
  readKeyEvent(event);  
});

function readKeyEvent(event)
{		
	const keyCode = event.code;
		if (keyCode == playPauseKey) 
			playpause.click();			
		if (keyCode == timeFwdKey)
			video.currentTime += parseInt(30);
		if (keyCode == timeBckKey)
			video.currentTime -= parseInt(30);
}
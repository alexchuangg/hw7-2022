var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector('#player1');
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to " + video.autoplay);
	console.log("Loop is set to " + video.loop);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play video");
	document.querySelector("#volume").innerHTML = video.volume * 100 + '%';
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow video by 10%");
	video.playbackRate *= 0.9;
	console.log("Video speed is " + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video by 10%");
	video.playbackRate /= 0.9;
	console.log("Video speed is " + video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead 10 seconds");
	if (video.currentTime + 10 > video.duration){
		video.currentTime = 0;
	}
	else{
		video.currentTime += 10;
	}
	console.log("Video time is " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == true){
		console.log("Unmute");
		this.innerHTML = "Mute";
		video.muted = false;
	}
	else{
		console.log("Mute");
		this.innerHTML = "Unmute";
		video.muted = true;
	}
});

document.querySelector("#slider").addEventListener("change", function() {
	video.volume = document.querySelector("#slider").value / 100;
	document.querySelector("#volume").innerHTML = document.querySelector("#slider").value + '%';
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add('oldSchool');
	console.log("Old school class");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove('oldSchool');
	console.log("Original version");
});
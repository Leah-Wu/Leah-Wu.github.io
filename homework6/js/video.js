var video;
var volume;
var speed;
var duration;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
	speed = video.playbackRate;
	duration = video.duration;
	volume = document.querySelector("#volumeSlider").value / 100;
	console.log(duration);
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	console.log("Play Video");
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
});

document.querySelector("#volumeSlider").addEventListener("click", function() {
	volume = document.querySelector("#volumeSlider").value;
	document.querySelector("#volume").innerHTML = volume + "%";
	volume = volume / 100;
	video.volume = volume;
});

document.querySelector("#mute").addEventListener("click", function() {
	var state = document.querySelector("#mute");
	if(state.innerHTML == 'Mute'){
		video.volume = 0;
		state.innerHTML = 'Unmute';
		console.log("muted");
	}else{
		video.volume = volume;
		state.innerHTML = 'Mute';
		console.log("unmuted");
	}
		
});

document.querySelector("#old").addEventListener("click", function() {
	video.className = 'oldTime';
});
document.querySelector("#original").addEventListener("click", function() {
	video.className = '';
});

document.querySelector("#slower").addEventListener("click", function() {
	speed *= 0.9;
	video.playbackRate = speed;
	console.log(speed);
});

document.querySelector("#faster").addEventListener("click", function() {
	speed /= 0.9;
	video.playbackRate = speed;
	console.log(speed);
});

document.querySelector("#skip").addEventListener("click", function() {
	let time = video.currentTime + 5;

	if(time > duration){
		time = 0;
	}
	console.log(time);
	video.currentTime = time;
	video.play();
});


var video;
var volume;
var speed;
var duration;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
	speed = video.playbackRate;
	duration = video.duration;
	console.log(duration);
	volume = document.querySelector("#volumeSlider").value;
	document.querySelector("#volume").innerHTML = volume + "%";
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
	video.volume = volume / 100;
});

document.querySelector("#mute").addEventListener("click", function() {
	volume = 0;
	video.volume = volume;
	document.querySelector("#volume").innerHTML = volume + "%";
	document.querySelector("#volumeSlider").value = volume;
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


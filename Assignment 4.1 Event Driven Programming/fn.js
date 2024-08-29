//start animation function
function start() {
	// puts document into fullscreen otherwise peters legs are missing
	document.documentElement.requestFullscreen()
	// triggers the running animation loop and changed peter into a running gif
	document.getElementById("peter").style.animation = 'peterAnim 10s infinite'
	document.getElementById("peter").style.backgroundImage = 'url("peter.gif")'
}
// stop animation function
function stop() {
	// pauses animation so it doesnt restart from the beginning when clicking start again
	document.getElementById("peter").style.animationPlayState = 'paused';
	// changes peter to a static image
	document.getElementById("peter").style.backgroundImage = 'url("peter.png")'
}
// inital document load fade in function
function load() {
	document.getElementById("load").style.animation = 'fade 1s'
	document.getElementById("load").style.filter = "opacity(100%)"
}
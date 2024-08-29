// used to change the project iframe and the source code href
function proChangePage(e) {
	document.getElementById("proFrame").src = e.dataset.page
	document.getElementById("proSource").href = e.dataset.src
}
// used to change the main iframe with the table buttons
function selectMainIframe(link) {
	document.getElementById("mainframe").src = link
	document.getElementById("mainframe").style.display = "none"
	$("#mainframe").fadeIn("slow");
	$(window).scrollTop(0);
}
// used to fade in the webpage when loading or refreshing to add a more natural feel
function load() {
	document.getElementById("load").style.display = "none"
	$("#load").fadeIn("slow");
}
// Joshua Blatnik
// palindrome check function
function checkPalindrome() {
	// text variable after typing a letter
	var text = document.getElementById("pal").value
	// changing text to all caps for better visual
	document.getElementById("pal").value = document.getElementById("pal").value.toUpperCase()
	// preclassifying that the word is going to be a palindrome
	isPal = true
	for (let i = 0; i < text.length; i++) {
		// had to use if isPal due to return function breaking loop badly
		if (isPal) {
			// checks the first and last letter and works towards the middle, if it doesnt match then it is classified as not a palindrome
			if ((text.charAt(0 + i).toUpperCase() != text.charAt(text.length - i - 1).toUpperCase() ) || text.length < 3) {
				isPal = false
			}
		}
	}
	// checks to see if text is a palindrome and sees if there is even text in the input tag
	if (isPal && text != "") {
		// changes the indicator color and text along with the input text
		document.getElementById("pc").textContent = "Is a Palindrome"
		document.getElementById("pc").style.color = "green"
		document.getElementById("pal").style.color = "green"
	} else {
		// changes the indicator color and text along with the input text
		document.getElementById("pc").textContent = "Not a Palindrome"
		document.getElementById("pc").style.color = "red"
		document.getElementById("pal").style.color = "black"
	}
}
function resetText() {
	// used for the reset button, just refreshes everything back to default. No text in the input and the indicator is set to not a palindrome
	document.getElementById("pal").value = ""
	document.getElementById("pc").textContent = "Not a Palindrome"
	document.getElementById("pc").style.color = "red"
}
function startup() {
	// startup fade effect for loading effect
    document.getElementById("everything").style.animation = "fadeIn 1.0s"
    document.getElementById("everything").style.filter = "opacity(100%)"
    document.getElementById("bg").style.animation = "fadeIn 3s"
    document.getElementById("bg").style.filter = "opacity(100%)"
}
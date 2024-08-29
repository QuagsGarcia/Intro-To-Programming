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
   document.getElementById("bg").style.animation = "fadeIn 3s"
   document.getElementById("bg").style.filter = "opacity(100%)"
   setTimeout(resetAll, 2000);
}

function verified() {
	// used in a delay to get rid of verified text and all the verification tabs
	document.getElementById("loginbox").style.animation = "fadeOut 1s"
    document.getElementById("loginbox").style.filter = "opacity(0%)"
    document.getElementById("verified").style.animation = "fadeOut 1s"
    document.getElementById("verified").style.filter = "opacity(0%)"
    startup()
}
function resetAll() {
	//used to make it so elements arent blocking input tags when invisible
	document.getElementById("verified").style.left = "500%"
	document.getElementById("loginbox").style.left = "1000vw"
}

function subm() {
	// first name checker, flags only if there is no length
	if (document.getElementById("first").value.length < 1) {
		document.getElementById("cred").textContent = "First name needs to be longer than 1 character."
		document.getElementById("cred").style.fontSize = "2vw"
		return false
	}
	// last name checker, flags only if there is no length
	if (document.getElementById("last").value.length < 1) {
		document.getElementById("cred").textContent = "Last name needs to be longer than 1 character."
		document.getElementById("cred").style.fontSize = "2vw"
		return false
	}
	// zip code checker, flags only if there isnt 5 digits typed
	if (document.getElementById("zip").value < 10000 || document.getElementById("zip").value > 99999) {
		document.getElementById("cred").textContent = "Zip code needs to be 5 digits long."
		document.getElementById("cred").style.fontSize = "2vw"
		return false
	}
	// used so there is no spamming button when pressed so there are no animation bugs
	document.getElementById("sub").disabled = true
	// puts verified text in correct position, blocking the palindrome checker
	document.getElementById("verified").style.left = "50%"
	// gets rid of the creditionals checker so the verifed text isnt clipping through it
	document.getElementById("cred").style.marginLeft = "500vw"
	// verified animation fade in
    document.getElementById("verified").style.animation = "fadeIn 1s"
    document.getElementById("verified").style.filter = "opacity(100%)"
    setTimeout(verified, 2000);
}
function fullLoad() {
	// used on inital body load to load background and verify box smoothly
	document.getElementById("loginbox").style.animation = "fadeIn 2.0s"
   document.getElementById("loginbox").style.filter = "opacity(100%)"
   document.getElementById("everything").style.animation = "fadeIn 1.0s"
   document.getElementById("everything").style.filter = "opacity(100%)"
}
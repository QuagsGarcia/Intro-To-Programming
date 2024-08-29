// player value
var player = "X"
// bot value
var bot = "O"
// turns passed for bot to decide which strategy to use.
var turnAmount = 0
// boolean whether the bot blocked the player or not. use to figure out if the bot can block the player
var blocked = false
// used if the player uses anything but the center move
var diagPlay = false
// boolean to display winning message
var won = false
// function for the player to select either x or o
function choose(v) {
	if (v == "X") {
		// clears board from xs and os
		clearBoard()
		player = "X"
		bot = "O"
		turnAmount = 0
		blocked = false
		diagPlay = false
		won = false
	} else if (v == "O") {
		// clears board from xs and os
		clearBoard()
		player = "O"
		bot = "X"
		turnAmount = 0
		blocked = false
		diagPlay = false
		won = false
		// used for the bot to select a square if the player chooses o since x always goes first
		document.getElementsByClassName("b1")[0].innerHTML = bot
	}
	// used to change the x and o indicator
	document.getElementById("pb1").innerHTML = "Player: (" + player + ")"
	document.getElementById("pb2").innerHTML = "Bot: (" + bot + ")"
}
// used to select a square and then the bot will go
function select(e) {
	// have to add not win otherwise the player can keep selecting if the game is over
		if (!won) {
			// isopen function checks to see if the square is open to be selected
			if (isOpen(e.innerHTML)) {
				// turns the square the player selected into their selected team
				e.innerHTML = player
				// adds a turn amount
				turnAmount = turnAmount + 1
				// check functions whether the bot and player had a draw or not
				if (bot == "O") {
					if (turnAmount == 9) {
						document.getElementById("winner").innerHTML = "Draw!"
					}
				} else {
					if (turnAmount == 8) {
						document.getElementById("winner").innerHTML = "Draw!"
					}
				}
				// runs the bot algorithms to either block the player or go for the win
				botTurn()
				// check functions whether the bot and player had a draw or not
				if (turnAmount == 9) {
						document.getElementById("winner").innerHTML = "Draw!"
					}
				if (bot == "O") {
					if (turnAmount == 9) {
						document.getElementById("winner").innerHTML = "Draw!"
					}
				} else {
					if (turnAmount == 8) {
						document.getElementById("winner").innerHTML = "Draw!"
					}
				}
			}
		}
}
// sets all the squares to blank indicating that the game has restarted
function clearBoard() {
	document.getElementsByClassName("b1")[0].innerHTML = ""
	document.getElementsByClassName("b2")[0].innerHTML = ""
	document.getElementsByClassName("b3")[0].innerHTML = ""
	document.getElementsByClassName("b4")[0].innerHTML = ""
	document.getElementsByClassName("b5")[0].innerHTML = ""
	document.getElementsByClassName("b6")[0].innerHTML = ""
	document.getElementsByClassName("b7")[0].innerHTML = ""
	document.getElementsByClassName("b8")[0].innerHTML = ""
	document.getElementsByClassName("b9")[0].innerHTML = ""
	document.getElementById("winner").innerHTML = ""
}
// a function that runs other functions to either go for the win or block the player. I use turn amounts as there is specific tasks you have to do in tictactoe turns to win or draw
function botTurn() {
	if (turnAmount == 1) {
		// checks if the player selected any of the corners
		checkCorners()
	} else if (turnAmount == 3) {
		// its possible to win on turn 4 so the bot checks for it
			checkwin()
			// if the bot did not win, they will try to block the player
			if (!won) {
				blocked = false
				checkBlock()
			}
	} else if (turnAmount == 5) {
			checkwin()
			if (!won) {
				blocked = false
				checkBlock()
			}
	} else if (turnAmount == 7) {
		checkwin()
		if (!won) {
			blocked = false
			checkBlock()
		}
	}
	// displays the bot win message
	if (won) {
		document.getElementById("winner").innerHTML = "Bot Wins!"
	}
}
// checks to see if any of the corners are blocked then selects a predetermined spot to make sure the bot either wins or ties
function checkCorners() {
	if (!isOpen(document.getElementsByClassName("b1")[0].innerHTML)) {
		if (isOpen(document.getElementsByClassName("b5")[0].innerHTML)) {
			document.getElementsByClassName("b5")[0].innerHTML = bot
			diagPlay = true
		} else {
			document.getElementsByClassName("b3")[0].innerHTML = bot
		}
	} else if (!isOpen(document.getElementsByClassName("b3")[0].innerHTML)) {
		if (isOpen(document.getElementsByClassName("b5")[0].innerHTML)) {
			document.getElementsByClassName("b5")[0].innerHTML = bot
			diagPlay = true
		} else {
			document.getElementsByClassName("b3")[0].innerHTML = bot
		}
	} else if (!isOpen(document.getElementsByClassName("b7")[0].innerHTML)) {
		if (isOpen(document.getElementsByClassName("b5")[0].innerHTML)) {
			document.getElementsByClassName("b5")[0].innerHTML = bot
			diagPlay = true
		} else {
			document.getElementsByClassName("b3")[0].innerHTML = bot
		}
	} else if (!isOpen(document.getElementsByClassName("b9")[0].innerHTML)) {
		if (isOpen(document.getElementsByClassName("b5")[0].innerHTML)) {
			document.getElementsByClassName("b5")[0].innerHTML = bot
			diagPlay = true
		} else {
			document.getElementsByClassName("b3")[0].innerHTML = bot
		}
	} else {
		checkPlus()
	}
	turnAmount = turnAmount + 1
}
// if the corners are not taken the bot will see if the player chose anything on the plus grid of the board. If they did then it will chose the middle square
function checkPlus() {
	if (playerUsed(document.getElementsByClassName("b2")[0].innerHTML) || playerUsed(document.getElementsByClassName("b4")[0].innerHTML) || playerUsed(document.getElementsByClassName("b6")[0].innerHTML) || playerUsed(document.getElementsByClassName("b8")[0].innerHTML)) {
			document.getElementsByClassName("b5")[0].innerHTML = bot
	} else {
		document.getElementsByClassName("b1")[0].innerHTML = bot
	}
	diagPlay = true
}
// this is used to run algorithms to see what the bot can block
function checkBlock() {
	corners()
	if (!blocked) {
		twos()
	}
	if (!blocked) {
		openplus()
	}
	if (!blocked) {
		pickopen()
	}
	turnAmount = turnAmount + 1
}
// checks to see if the selected square is open to choose
function isOpen(text) {
	if (text != "X" && text != "O") {
		return true
	} else {
		return false
	}
}
// checks to see if a player specifically used the square. This is used to make sure the player doesnt use the same square twice in the algorithm
function playerUsed(text) {
	if (text == player) {
		return true
	} else {
		return false
	}
}
// checks to see if a bot specifically used the square. This is used to make sure the bot doesnt use the same square twice
function botUsed(text) {
	if (text == bot) {
		return true
	} else {
		return false
	}
}
// checks if the player selected any of the corners then selects the correct blocking spot.
function corners() {
	if (playerUsed(document.getElementsByClassName("b1")[0].innerHTML) && playerUsed(document.getElementsByClassName("b3")[0].innerHTML)) {
		if (isOpen(document.getElementsByClassName("b2")[0].innerHTML)) {
			blocked = true
			document.getElementsByClassName("b2")[0].innerHTML = bot
			return
		}
	}
	if (playerUsed(document.getElementsByClassName("b3")[0].innerHTML) && playerUsed(document.getElementsByClassName("b9")[0].innerHTML)) {
		if (isOpen(document.getElementsByClassName("b6")[0].innerHTML)) {
			blocked = true
			document.getElementsByClassName("b6")[0].innerHTML = bot
			return
		}
	}
	if (playerUsed(document.getElementsByClassName("b7")[0].innerHTML) && playerUsed(document.getElementsByClassName("b9")[0].innerHTML)) {
		if (isOpen(document.getElementsByClassName("b8")[0].innerHTML)) {
			blocked = true
			document.getElementsByClassName("b8")[0].innerHTML = bot
			return
		}
	}
	if (playerUsed(document.getElementsByClassName("b1")[0].innerHTML) && playerUsed(document.getElementsByClassName("b7")[0].innerHTML)) {
		if (isOpen(document.getElementsByClassName("b4")[0].innerHTML)) {
			blocked = true
			document.getElementsByClassName("b4")[0].innerHTML = bot
			return
		}
	}
}
// checks to see if the player is trying to win by doing two in a row
function twos() {
	if (playerUsed(document.getElementsByClassName("b1")[0].innerHTML) && playerUsed(document.getElementsByClassName("b2")[0].innerHTML)) {
		if (isOpen(document.getElementsByClassName("b3")[0].innerHTML)) {
			blocked = true
			document.getElementsByClassName("b3")[0].innerHTML = bot
			return
		}
	}
	if (playerUsed(document.getElementsByClassName("b3")[0].innerHTML) && playerUsed(document.getElementsByClassName("b2")[0].innerHTML)) {
		if (isOpen(document.getElementsByClassName("b1")[0].innerHTML)) {
			blocked = true
			document.getElementsByClassName("b1")[0].innerHTML = bot
			return
		}
	}

	if (playerUsed(document.getElementsByClassName("b3")[0].innerHTML) && playerUsed(document.getElementsByClassName("b6")[0].innerHTML)) {
		if (isOpen(document.getElementsByClassName("b9")[0].innerHTML)) {
			blocked = true
			document.getElementsByClassName("b9")[0].innerHTML = bot
			return
		}
	}
	if (playerUsed(document.getElementsByClassName("b6")[0].innerHTML) && playerUsed(document.getElementsByClassName("b9")[0].innerHTML)) {
		if (isOpen(document.getElementsByClassName("b3")[0].innerHTML)) {
			blocked = true
			document.getElementsByClassName("b3")[0].innerHTML = bot
			return
		}
	}

	if (playerUsed(document.getElementsByClassName("b8")[0].innerHTML) && playerUsed(document.getElementsByClassName("b9")[0].innerHTML)) {
		if (isOpen(document.getElementsByClassName("b7")[0].innerHTML)) {
			blocked = true
			document.getElementsByClassName("b7")[0].innerHTML = bot
			return
		}
	}
	if (playerUsed(document.getElementsByClassName("b7")[0].innerHTML) && playerUsed(document.getElementsByClassName("b8")[0].innerHTML)) {
		if (isOpen(document.getElementsByClassName("b9")[0].innerHTML)) {
			blocked = true
			document.getElementsByClassName("b9")[0].innerHTML = bot
			return
		}
	}

	if (playerUsed(document.getElementsByClassName("b1")[0].innerHTML) && playerUsed(document.getElementsByClassName("b4")[0].innerHTML)) {
		if (isOpen(document.getElementsByClassName("b7")[0].innerHTML)) {
			blocked = true
			document.getElementsByClassName("b7")[0].innerHTML = bot
			return
		}
	}
	if (playerUsed(document.getElementsByClassName("b7")[0].innerHTML) && playerUsed(document.getElementsByClassName("b4")[0].innerHTML)) {
		if (isOpen(document.getElementsByClassName("b1")[0].innerHTML)) {
			blocked = true
			document.getElementsByClassName("b1")[0].innerHTML = bot
			return
		}
	}

	if (playerUsed(document.getElementsByClassName("b1")[0].innerHTML) && playerUsed(document.getElementsByClassName("b5")[0].innerHTML)) {
		if (isOpen(document.getElementsByClassName("b9")[0].innerHTML)) {
			blocked = true
			document.getElementsByClassName("b9")[0].innerHTML = bot
			return
		}
	}
	if (playerUsed(document.getElementsByClassName("b9")[0].innerHTML) && playerUsed(document.getElementsByClassName("b5")[0].innerHTML)) {
		if (isOpen(document.getElementsByClassName("b1")[0].innerHTML)) {
			blocked = true
			document.getElementsByClassName("b1")[0].innerHTML = bot
			return
		}
	}
	if (playerUsed(document.getElementsByClassName("b3")[0].innerHTML) && playerUsed(document.getElementsByClassName("b5")[0].innerHTML)) {
		if (isOpen(document.getElementsByClassName("b7")[0].innerHTML)) {
			blocked = true
			document.getElementsByClassName("b7")[0].innerHTML = bot
			return
		}
	}
	if (playerUsed(document.getElementsByClassName("b7")[0].innerHTML) && playerUsed(document.getElementsByClassName("b5")[0].innerHTML)) {
		if (isOpen(document.getElementsByClassName("b3")[0].innerHTML)) {
			blocked = true
			document.getElementsByClassName("b3")[0].innerHTML = bot
			return
		}
	}




	if (playerUsed(document.getElementsByClassName("b4")[0].innerHTML) && playerUsed(document.getElementsByClassName("b5")[0].innerHTML)) {
		if (isOpen(document.getElementsByClassName("b6")[0].innerHTML)) {
			blocked = true
			document.getElementsByClassName("b6")[0].innerHTML = bot
			return
		}
	}
	if (playerUsed(document.getElementsByClassName("b6")[0].innerHTML) && playerUsed(document.getElementsByClassName("b5")[0].innerHTML)) {
		if (isOpen(document.getElementsByClassName("b4")[0].innerHTML)) {
			blocked = true
			document.getElementsByClassName("b4")[0].innerHTML = bot
			return
		}
	}
	if (playerUsed(document.getElementsByClassName("b2")[0].innerHTML) && playerUsed(document.getElementsByClassName("b5")[0].innerHTML)) {
		if (isOpen(document.getElementsByClassName("b8")[0].innerHTML)) {
			blocked = true
			document.getElementsByClassName("b8")[0].innerHTML = bot
			return
		}
	}
	if (playerUsed(document.getElementsByClassName("b8")[0].innerHTML) && playerUsed(document.getElementsByClassName("b5")[0].innerHTML)) {
		if (isOpen(document.getElementsByClassName("b2")[0].innerHTML)) {
			blocked = true
			document.getElementsByClassName("b2")[0].innerHTML = bot
			return
		}
	}


	if (playerUsed(document.getElementsByClassName("b5")[0].innerHTML) && playerUsed(document.getElementsByClassName("b9")[0].innerHTML)) {
		if (isOpen(document.getElementsByClassName("b7")[0].innerHTML)) {
			blocked = true
			document.getElementsByClassName("b7")[0].innerHTML = bot
			return
		}
	}
}
// this is a random square pick if everything is blocked by the bot and the game just needs to end.
function pickopen() {
	if (isOpen(document.getElementsByClassName("b1")[0].innerHTML)) {
		document.getElementsByClassName("b1")[0].innerHTML = bot
		return
	}
	if (isOpen(document.getElementsByClassName("b2")[0].innerHTML)) {
		document.getElementsByClassName("b2")[0].innerHTML = bot
		return
	}
	if (isOpen(document.getElementsByClassName("b3")[0].innerHTML)) {
		document.getElementsByClassName("b3")[0].innerHTML = bot
		return
	}
	if (isOpen(document.getElementsByClassName("b4")[0].innerHTML)) {
		document.getElementsByClassName("b4")[0].innerHTML = bot
		return
	}
	if (isOpen(document.getElementsByClassName("b5")[0].innerHTML)) {
		document.getElementsByClassName("b5")[0].innerHTML = bot
		return
	}
	if (isOpen(document.getElementsByClassName("b6")[0].innerHTML)) {
		document.getElementsByClassName("b6")[0].innerHTML = bot
		return
	}
	if (isOpen(document.getElementsByClassName("b7")[0].innerHTML)) {
		document.getElementsByClassName("b7")[0].innerHTML = bot
		return
	}
	if (isOpen(document.getElementsByClassName("b8")[0].innerHTML)) {
		document.getElementsByClassName("b8")[0].innerHTML = bot
		return
	}
	if (isOpen(document.getElementsByClassName("b9")[0].innerHTML)) {
		document.getElementsByClassName("b9")[0].innerHTML = bot
		return
	}
}
// this is used to check if any spots are open on the plus area of the board. Used in check block function
function openplus() {
	if (isOpen(document.getElementsByClassName("b2")[0].innerHTML)) {
		document.getElementsByClassName("b2")[0].innerHTML = bot
		blocked = true
		return
	}
	if (isOpen(document.getElementsByClassName("b4")[0].innerHTML)) {
		document.getElementsByClassName("b4")[0].innerHTML = bot
		blocked = true
		return
	}
	if (isOpen(document.getElementsByClassName("b6")[0].innerHTML)) {
		document.getElementsByClassName("b6")[0].innerHTML = bot
		blocked = true
		return
	}
	if (isOpen(document.getElementsByClassName("b8")[0].innerHTML)) {
		document.getElementsByClassName("b8")[0].innerHTML = bot
		blocked = true
		return
	}
}
// used to see if the bot can make a winning move or not
function checkwin() {
	if (botUsed(document.getElementsByClassName("b2")[0].innerHTML) && botUsed(document.getElementsByClassName("b5")[0].innerHTML)) {
		if (isOpen(document.getElementsByClassName("b8")[0].innerHTML)) {
			document.getElementsByClassName("b8")[0].innerHTML = bot
			won = true
			return
		}
	}
	if (botUsed(document.getElementsByClassName("b8")[0].innerHTML) && botUsed(document.getElementsByClassName("b5")[0].innerHTML)) {
		if (isOpen(document.getElementsByClassName("b2")[0].innerHTML)) {
			document.getElementsByClassName("b2")[0].innerHTML = bot
			won = true
			return
		}
	}

	if (botUsed(document.getElementsByClassName("b4")[0].innerHTML) && botUsed(document.getElementsByClassName("b5")[0].innerHTML)) {
		if (isOpen(document.getElementsByClassName("b6")[0].innerHTML)) {
			document.getElementsByClassName("b6")[0].innerHTML = bot
			won = true
			return
		}
	}
	if (botUsed(document.getElementsByClassName("b6")[0].innerHTML) && botUsed(document.getElementsByClassName("b5")[0].innerHTML)) {
		if (isOpen(document.getElementsByClassName("b4")[0].innerHTML)) {
			document.getElementsByClassName("b4")[0].innerHTML = bot
			won = true
			return
		}
	}




	if (botUsed(document.getElementsByClassName("b1")[0].innerHTML) && botUsed(document.getElementsByClassName("b5")[0].innerHTML)) {
		if (isOpen(document.getElementsByClassName("b9")[0].innerHTML)) {
			document.getElementsByClassName("b9")[0].innerHTML = bot
			won = true
			return
		}
	}
	if (botUsed(document.getElementsByClassName("b9")[0].innerHTML) && botUsed(document.getElementsByClassName("b5")[0].innerHTML)) {
		if (isOpen(document.getElementsByClassName("b1")[0].innerHTML)) {
			document.getElementsByClassName("b1")[0].innerHTML = bot
			won = true
			return
		}
	}
	if (botUsed(document.getElementsByClassName("b7")[0].innerHTML) && botUsed(document.getElementsByClassName("b5")[0].innerHTML)) {
		if (isOpen(document.getElementsByClassName("b3")[0].innerHTML)) {
			document.getElementsByClassName("b3")[0].innerHTML = bot
			won = true
			return
		}
	}
	if (botUsed(document.getElementsByClassName("b3")[0].innerHTML) && botUsed(document.getElementsByClassName("b5")[0].innerHTML)) {
		if (isOpen(document.getElementsByClassName("b7")[0].innerHTML)) {
			document.getElementsByClassName("b7")[0].innerHTML = bot
			won = true
			return
		}
	}








	if (botUsed(document.getElementsByClassName("b1")[0].innerHTML) && botUsed(document.getElementsByClassName("b2")[0].innerHTML)) {
		if (isOpen(document.getElementsByClassName("b3")[0].innerHTML)) {
			document.getElementsByClassName("b3")[0].innerHTML = bot
			won = true
			return
		}
	}
	if (botUsed(document.getElementsByClassName("b3")[0].innerHTML) && botUsed(document.getElementsByClassName("b2")[0].innerHTML)) {
		if (isOpen(document.getElementsByClassName("b1")[0].innerHTML)) {
			document.getElementsByClassName("b1")[0].innerHTML = bot
			won = true
			return
		}
	}

	if (botUsed(document.getElementsByClassName("b3")[0].innerHTML) && botUsed(document.getElementsByClassName("b6")[0].innerHTML)) {
		if (isOpen(document.getElementsByClassName("b9")[0].innerHTML)) {
			document.getElementsByClassName("b9")[0].innerHTML = bot
			won = true
			return
		}
	}
	if (botUsed(document.getElementsByClassName("b9")[0].innerHTML) && botUsed(document.getElementsByClassName("b6")[0].innerHTML)) {
		if (isOpen(document.getElementsByClassName("b3")[0].innerHTML)) {
			document.getElementsByClassName("b3")[0].innerHTML = bot
			won = true
			return
		}
	}

	if (botUsed(document.getElementsByClassName("b7")[0].innerHTML) && botUsed(document.getElementsByClassName("b8")[0].innerHTML)) {
		if (isOpen(document.getElementsByClassName("b9")[0].innerHTML)) {
			document.getElementsByClassName("b9")[0].innerHTML = bot
			won = true
			return
		}
	}
	if (botUsed(document.getElementsByClassName("b9")[0].innerHTML) && botUsed(document.getElementsByClassName("b8")[0].innerHTML)) {
		if (isOpen(document.getElementsByClassName("b7")[0].innerHTML)) {
			document.getElementsByClassName("b7")[0].innerHTML = bot
			won = true
			return
		}
	}

	if (botUsed(document.getElementsByClassName("b1")[0].innerHTML) && botUsed(document.getElementsByClassName("b4")[0].innerHTML)) {
		if (isOpen(document.getElementsByClassName("b7")[0].innerHTML)) {
			document.getElementsByClassName("b7")[0].innerHTML = bot
			won = true
			return
		}
	}
	if (botUsed(document.getElementsByClassName("b7")[0].innerHTML) && botUsed(document.getElementsByClassName("b4")[0].innerHTML)) {
		if (isOpen(document.getElementsByClassName("b1")[0].innerHTML)) {
			document.getElementsByClassName("b1")[0].innerHTML = bot
			won = true
			return
		}
	}






	if (botUsed(document.getElementsByClassName("b1")[0].innerHTML) && botUsed(document.getElementsByClassName("b3")[0].innerHTML)) {
		if (isOpen(document.getElementsByClassName("b2")[0].innerHTML)) {
			document.getElementsByClassName("b2")[0].innerHTML = bot
			won = true
			return
		}
	}
	if (botUsed(document.getElementsByClassName("b3")[0].innerHTML) && botUsed(document.getElementsByClassName("b9")[0].innerHTML)) {
		if (isOpen(document.getElementsByClassName("b6")[0].innerHTML)) {
			document.getElementsByClassName("b6")[0].innerHTML = bot
			won = true
			return
		}
	}
	if (botUsed(document.getElementsByClassName("b9")[0].innerHTML) && botUsed(document.getElementsByClassName("b7")[0].innerHTML)) {
		if (isOpen(document.getElementsByClassName("b8")[0].innerHTML)) {
			document.getElementsByClassName("b8")[0].innerHTML = bot
			won = true
			return
		}
	}
	if (botUsed(document.getElementsByClassName("b1")[0].innerHTML) && botUsed(document.getElementsByClassName("b7")[0].innerHTML)) {
		if (isOpen(document.getElementsByClassName("b4")[0].innerHTML)) {
			document.getElementsByClassName("b4")[0].innerHTML = bot
			won = true
			return
		}
	}
}
// used to fade in the page to prevent flickering
function fadeInCont() {
    document.getElementById("everything").style.animation = "fadeIn 1.5s"
    document.getElementById("everything").style.filter = "opacity(100%)"
}
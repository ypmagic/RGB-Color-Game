var numOfSquares = 6
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var h1 = document.querySelector("h1");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
	// mode buttons event listeners
	setModeButtons();
	setUpSquares();
	reset();
}

function setModeButtons() {
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
			reset()
		})
	}
}

function setUpSquares() {
	for (var i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", function() {
			if (this.style.backgroundColor === pickedColor) {
				messageDisplay.textContent = "Correct!"
				changeColors(this.style.backgroundColor);
				h1.style.backgroundColor = this.style.backgroundColor;
				resetButton.textContent = "Play again?";
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again"
			}
		})
	}
}

function reset() {
	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function() {
	reset();
})

function changeColors(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	return colors[Math.floor(Math.random() * colors.length)];
}

function generateRandomColors(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	var number1 = Math.floor(Math.random()*256);
	var number2 = Math.floor(Math.random()*256);
	var number3 = Math.floor(Math.random()*256);
	return "rgb(" + number1 + ", " + number2 + ", " + number3 + ")";
}



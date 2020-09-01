
const turtle = document.querySelector('.turtle');

let x = 0;
let y = 0;
const speed = 25;
let flipped = false;
let rotate = 0;

function handleKeyDown(event) {

	// if not an arrow key, we ignore key press
	if(!event.key.includes('Arrow')) {
		return;
	}
	else { 
		console.log(event.key); 
	};

	switch(event.key) {
		case 'ArrowUp':
			rotate = -90;
			y = y - 1;
			break;
		case 'ArrowDown':
			rotate = 90;
			y = y + 1;
			break;
		case 'ArrowLeft':
			x = x - 1;
			rotate = 0;
			flipped = true;
			break;
		case 'ArrowRight':
			x = x + 1;
			rotate = 0;
			flipped = false;
			break;
		default: 
			console.log("That is not a valid move.");
	}

	turtle.setAttribute('style', `
		--rotateX: ${flipped ? '180deg' : '0'};
		--rotate: ${rotate}deg;
		--x: ${x * speed}px; 
		--y: ${y * speed}px;
	`);	
	console.log(x, y);
	isSafe(x, y);
}

function changeSafeZoneColor(event) {
	safeZone.style.backgroundColor = "black";
}

//this is pseudocode.  The .position method call is just something I made up
function isSafe(x, y) {
	if(x === 6 && y === 0) {
		safeZone.style.backgroundColor = "blue";
		console.log("Yes, you're safe!");
	} 
	else {
		safeZone.style.backgroundColor = null;
		console.log("You're in danger!")
	}

}

window.addEventListener('keydown', handleKeyDown);

var safeZone = document.querySelector('.safe-zone');
safeZone.addEventListener('mouseover', changeSafeZoneColor);
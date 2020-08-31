
const turtle = document.querySelector('.turtle');

let x = 0;
let y = 0;
const speed = 25;
let flipped = false;
let rotate = 0;

function handleKeyDown(event) {

	//if not an arrow key, we ignore key press
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

	// console.log(x, y);
}

window.addEventListener('keydown', handleKeyDown);


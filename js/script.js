function buyChocolates() {
	let firstName = prompt("What is your first name?");
	let age = prompt("What is your age?");
	let heading = document.querySelector("h1");
	if (age >= 18) {
	heading.innerHTML =
	"Hi " +
	firstName +
	"! Welcome to the chocolate world, enjoy shopping! 😋";
	} else {
	heading.innerHTML =
	"Sorry, " +
	firstName +
	". You can't buy liquor filled chocolates! 😢 ";
	}
	}
	let buyButton = document.querySelector("button");
	buyButton.addEventListener("click", buyChocolates);

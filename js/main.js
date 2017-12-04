console.log("Up and running!");
var card1 = 'queen';
var card2 = 'queen';
var card3 = 'king';
var card4 = 'king';
console.log('User flipped ' + card1);
console.log ('User flipped ' + card3);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}

var cardsInPlay = [];
var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"	
	}, {
		rank: "queen", 
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	}, {
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	}, {
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}
}

function flipCard(cardId) {
	checkForMatch();
	cardsInPlay.push(cards[cardId].rank);
	console.log(" User flipped" + cards[0].rank);
}

debugger;
console.log(cards[0].cardImage);
console.log(cards[0].suit);
console.log(cards[2].cardImage);
console.log(cards[2].suit);
console.log(flipCard(0));
console.log(flipCard(2));



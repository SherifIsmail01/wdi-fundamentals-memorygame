//console.log ("up and running");


var cards = [ {
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
var score = 0;
var cardsInPlay = [];
var cardElement;
function checkForMatch() {
	//cardElement.setAttribute('src', cards[0].cardImage);
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
			score += 1;
		} else {
			alert("Sorry, try again.");
			}
		cardsInPlay.pop();
		cardsInPlay.pop();
	}
}

function flipCard() {
	//var cardId = document.getElementById .getAttribute('data-id')
	var cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage)
	console.log ("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	checkForMatch();

	//var cardId = document.getElementById(cardElement).getAttribute('data-id') //document.getElementById('data-' + i);
	//console.log ("User flipped " + cards[i].rank);
	
	//cardsInPlay.push(cards[i].rank);
	checkForMatch();
	//console.log(cardsInPlay);

}
	

function createBoard() {
	for (i = 0; i < cards.length; i++) {
		cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		//document.getElementById('game-board').addEventListener('click', flipCard());
		document.getElementById('game-board').appendChild(cardElement);
		console.log(cards[i].cardImage);
 		console.log(cards[i].cardImage);
	}
	
}


// console.log(cards[0].suit);
// console.log(cards[2].suit);
createBoard();



function clear() {
	cardsInPlay.pop();
}










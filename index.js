let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlack = false
let isAlive = true
let message = ""

if (sum <= 20){
    message = "Do you to draw a new card?";
} else if (sum ===21) {
    message = "Whohoo! You've got BlackJack!";
    hasBlack = true
} else {
    message = "You're out of the game";
    isAlive = false
}

console.log(message)

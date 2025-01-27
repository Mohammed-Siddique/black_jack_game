let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let isAlive = true

if (sum <= 20){
    console.log("Do you to draw a new card?")
} else if (sum ===21) {
    console.log("Whohoo! You've got BlackJack!")
} else {
    console.log("You're out of the game")
    isAlive = false
}

let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById('message-el')
let sumEl = document.querySelector('#sum-el')
let cardEl = document.querySelector('#cards-el')

function startgame() {
    
    cardEl.textContent = "Cards: " + firstCard +" " + secondCard
    sumEl.textContent = "Sum: " + sum
    

    if (sum <= 20){
        message = "Do you to draw a new card?";
    } else if (sum ===21) {
        message = "Whohoo! You've got BlackJack!";
        hasBlack = true
    } else {
        message = "You're out of the game";
        isAlive = false
    }
    messageEl.textContent = message

    console.log(message)
}

function newCard() {
    console.log("Drawing a new card")
}



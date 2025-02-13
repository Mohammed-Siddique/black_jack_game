let cards = []
let sum = 0
let hasBlack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById('message-el')
let sumEl = document.querySelector('#sum-el')
let cardEl = document.querySelector('#cards-el')

function getRandomCard() {
    let randomNumber = Math.floor(Math.random()*13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
            return 11
    } else {
        return randomNumber
    }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    
    cardEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }

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
    if (isAlive === true && hasBlack === false) {
        let card = getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
    }
    
}

  


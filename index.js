
function change() {
    let message = document.getElementById("par")
    message.textContent = "Welcome to the Game!"
}
  
function change2() {
    let message2 = document.getElementById("par")
    message2.innerText = "Welcome to BlackJack!"
}
  

function random() {
    let ranum = Math.floor(Math.random()*13) + 1
    if (ranum === 1) {
        return 11
    } else if (ranum > 10) {
        return 10
    } else {
        return ranum
    }
}



function change_background() {

    let back = document.getElementById("main");

    if (back.style.backgroundImage == 'url("src/m.jpg")') {
        back.style.backgroundImage = 'url("src/o.gif")'
    } else if (back.style.backgroundImage == 'url("src/o.gif")') {
        back.style.backgroundImage = 'url("src/y.png")'
    } else if (back.style.backgroundImage == 'url("src/y.png")')  {
        back.style.backgroundImage = 'url("src/n.jpg")'
    } else {
        back.style.backgroundImage = 'url("src/m.jpg")'
    }



}
  


//Deck 1////////////////////////////////////////



let carda = 0
let cardb = 0
let cards = []

let prize = 0

let sum = 0

let alive = false
let haswon = false




function render() {
    alive = true
    haswon = false
    carda = random()
    cardb = random()
    cards = [carda, cardb]
    sum = carda + cardb
    main()
}

function reset() {
    prize = 0
    let mes = document.getElementById("prize")
    mes.textContent = prize
}



function main() {

    let button = document.getElementById("but2")
    button.style.opacity = "1"

    let newgame1 = document.getElementById("but1")
    let card1 = document.getElementById("card")
    let message1 = document.getElementById("upper")
    let sum1 = document.getElementById("sum")

    newgame1.textContent = "New Game"
    card1.textContent = "Cards: "
    sum1.textContent = "Sum: " + sum
    

      for (let i = 0; i < cards.length; i++) {
        card1.textContent += cards[i] + " "
    }


    if (sum <= 20) {
        message1.textContent = "Draw a new card"
        prize += 7
    } else if (sum === 21) {
        message1.textContent = "You Won!"
        haswon = true
        prize += 717


    } else {
        message1.textContent = "Game Over!"
        alive = false
        newgame1.textContent = "Start Game"


    }


    if (alive == false || haswon == true) {
        button.style.opacity = "0.26"
      
    }

    let mes = document.getElementById("prize")
    mes.textContent = prize

}

function newcard() {
  if (alive === true && haswon === false) {
      let card = random()
      sum += card
      cards.push(card)
      main()        
  }
}

function quit() {
    let button = document.getElementById("but2")
    button.style.opacity = "1"
    let newgame1 = document.getElementById("but1")
    let card1 = document.getElementById("card")
    let sum1 = document.getElementById("sum")
    let message1 = document.getElementById("upper")

    message1.textContent = "Play"
    newgame1.textContent = "Start Game"
    card1.textContent = "Cards: "
    sum1.textContent = "Sum: "
}



//Deck 2////////////////////////////










let carda2 = 0
let cardb2 = 0
let cards2 = []

let sum2 = 0

let alive2 = false
let haswon2 = false




function render2() {
    alive2 = true
    haswon2 = false
    carda2 = random()
    cardb2 = random()
    cards2 = [carda2, cardb2]
    sum2 = carda2 + cardb2
    main2()
}


function main2() {

    let button = document.getElementById("but5")
    button.style.opacity = "1"

    let newgame2 = document.getElementById("but4")
    let card2 = document.getElementById("card2")
    let message2 = document.getElementById("upper2")
    let sum22 = document.getElementById("sum2")

    newgame2.textContent = "New Game"
    card2.textContent = "Cards: "
    sum22.textContent = "Sum: " + sum2
    

      for (let i = 0; i < cards2.length; i++) {
        card2.textContent += cards2[i] + " "
    }


    if (sum2 <= 20) {
        message2.textContent = "Draw a new card"
        prize += 7
    } else if (sum2 === 21) {
        message2.textContent = "You Won!"
        haswon2 = true
        prize += 717


    } else {
        message2.textContent = "Game Over!"
        alive2 = false
        newgame2.textContent = "Start Game"


    }

    if (alive2 == false || haswon2 == true) {
        button.style.opacity = "0.26"
      
    }


    let mes = document.getElementById("prize")
    mes.textContent = prize
    

}

function newcard2() {
  if (alive2 === true && haswon2 === false) {
      let card222 = random()
      sum2 += card222
      cards2.push(card222)
      main2()        
  }
}

function quit2() {
    let button = document.getElementById("but5")
    button.style.opacity = "1"
    let newgame2 = document.getElementById("but4")
    let card2 = document.getElementById("card2")
    let sum2 = document.getElementById("sum2")
    let message2 = document.getElementById("upper2")

    message2.textContent = "Play"
    newgame2.textContent = "Start Game"
    card2.textContent = "Cards: "
    sum2.textContent = "Sum: "
}





//Deck 3///////////////////////////







let carda3 = 0
let cardb3 = 0
let cards3 = []

let sum3 = 0

let alive3 = false
let haswon3 = false




function render3() {
    alive3 = true
    haswon3 = false
    carda3 = random()
    cardb3 = random()
    cards3 = [carda3, cardb3]
    sum3 = carda3 + cardb3
    main3()
}


function main3() {

    let button = document.getElementById("but8")
    button.style.opacity = "1"

    let newgame3 = document.getElementById("but7")
    let card3 = document.getElementById("card3")
    let message3 = document.getElementById("upper3")
    let sum33 = document.getElementById("sum3")

    newgame3.textContent = "New Game"
    card3.textContent = "Cards: "
    sum33.textContent = "Sum: " + sum3
    

      for (let i = 0; i < cards3.length; i++) {
        card3.textContent += cards3[i] + " "
    }


    if (sum3 <= 20) {
        message3.textContent = "Draw a new card"
        prize += 7
    } else if (sum3 === 21) {
        message3.textContent = "You Won!"
        haswon3 = true
        prize += 717


    } else {
        message3.textContent = "Game Over!"
        alive3 = false
        newgame3.textContent = "Start Game"


    }

    if (alive3 == false || haswon3 == true) {
        button.style.opacity = "0.26"
      
    }


    let mes = document.getElementById("prize")
    mes.textContent = prize
    

}

function newcard3() {
  if (alive3 === true && haswon3 === false) {
      let card333 = random()
      sum3 += card333
      cards3.push(card333)
      main3()        
  }
}

function quit3() {

    let button = document.getElementById("but8")
    button.style.opacity = "1"
    let newgame3 = document.getElementById("but7")
    let card3 = document.getElementById("card3")
    let sum3 = document.getElementById("sum3")
    let message3 = document.getElementById("upper3")

    message3.textContent = "Play"
    newgame3.textContent = "Start Game"
    card3.textContent = "Cards: "
    sum3.textContent = "Sum: "
}








//VARIABELS

const pandaImg = document.querySelector('#panda')
const bambooImg = document.querySelector('#bamboo')
const redtshirtImg = document.querySelector('#red_tshirt')
var redtshirtOn = false

const naamInput = document.querySelector('#name_input')

const greetingText = document.querySelector('#greeting_text')

const textBox = document.querySelector('#food_thanks_text')

const foreGround = document.querySelector('#foreground')

const foreGroundText = document.querySelector('#foreground_text')

const tutorialButton = document.querySelector('#question_mark')

const tutorialText = document.querySelector('#tutorial')

const consoleLogStyle = 'font-weight: bold; font-size: 1.2em'

var standingTimer = false


// Hunger bar
const hungerBarsImg = ['hungerbar.png', 'hungerbar1.png', 'hungerbar2.png', 'hungerbar3.png', 'hungerbar4.png', 'hungerbar5.png', 'hungerbar6.png', 'hungerbar7.png', 'hungerbar8.png', 'hungerbar9.png', 'hungerbar10.png']
const hungerBar = document.querySelector('#hunger_bar')
var hungerPoints = 1
hungerBar.src = 'hungerbar.png' + hungerBarsImg[hungerPoints]
var hungerbarInterval = null
const eatingAudio = document.querySelector('#eating_audio')

//Happennis bar
const happennisBarsImg = ['happinessbar.png', 'happinessbar1.png', 'happinessbar2.png', 'happinessbar3.png', 'happinessbar4.png', 'happinessbar5.png', 'happinessbar6.png', 'happinessbar7.png', 'happinessbar8.png', 'happinessbar9.png', 'happinessbar10.png']
const happennisBar = document.querySelector('#happennis_bar')
var happennisPoints = 1
happennisBar.src = 'happinessbar.png' + happennisBarsImg[happennisPoints]
var happennisInterval = null

//FUNCTIONS

function addingtextbox() {
    textBox.classList.add("text_box")
    textBox.classList.remove("disappear")
}

function pandagreeting() {
    textBox.textContent = 'Welcome' + ' ' + naamInput.value + ' ' + '!';
    textBox.classList.add('text_box');
    pandaImg.src = 'catfull.png';
    naamInput.classList.add('disappear')
    setTimeout(pandastart, 1800)
    foreGround.classList.remove('foregroundstyle')
    foreGroundText.classList.add('disappear')
}

function changingtshirt() {
    redtshirtOn ^= true; //Bron: https://stackoverflow.com/questions/2479058/how-to-make-a-boolean-variable-switch-between-true-and-false-every-time-a-method/2479339
    if (redtshirtOn == true) {
        pandagettingnormal();
        redtshirtImg.src = 'sweater.png'
    } else {
        pandagettingnormal();
        redtshirtImg.src = 'sweater.png'
    }
}



function pandagettingnormal() {
    if (happennisPoints == 0 || hungerPoints == 0) { //Als hungerpoint en / of hungerpoint 0 is dan krijg je een sad panda)
        pandaissad();
    } else {
        if (redtshirtOn == true) {
            pandaImg.src = 'catsweater.png'
        } else {
            pandaImg.src = 'catfull.png';
        }
    }
}

function pandastart() {
    pandagettingnormal();
    textBox.classList.add('disappear')
}

//Function gerelateerd met de hunger bar//

function pandaeating() {
    hungerPoints = hungerPoints + 1
    if (hungerPoints > 10) {
        hungerPoints = hungerBarsImg.length - 1
        pandarefusingfood();
    } else {
        pandaImg.src = 'cateating.png';
        if (redtshirtOn == true) {
            pandaImg.src = 'cateatingsweater.png'
        }
        setTimeout(pandathankingfood, 1800)
        bambooImg.classList.add('disappear')
        setTimeout(showbamboo, 1800)
        eatingAudio.currentTime = 0;
        eatingAudio.play();
    }

    hungerBar.src = 'hungerbar.png' + hungerBarsImg[hungerPoints]

    if (hungerbarInterval == null) {
        hungerbarInterval = setInterval(() => {
            pandagettinghungry();
        }, 15000);
    }
}

function showbamboo() {
    bambooImg.classList.remove('disappear')
}

function pandagettinghungry() {
    hungerPoints = hungerPoints - 1
    if (hungerPoints < 0) {
        hungerPoints = 0;
    }
    if (hungerPoints == 0) {
        pandaishungry();
    }
    hungerBar.src = 'hungerbar.png' + hungerBarsImg[hungerPoints]
}

function pandathankingfood() {
    pandatalking();
    textBox.textContent = 'Thanks for the tuna' + ' ' + naamInput.value + ' ' + '!';
    addingtextbox();
    setTimeout(pandastoptalking, 3000)
}

function pandarefusingfood() {
    pandatalking();
    textBox.textContent = 'Im full' + ' ' + naamInput.value + ' ' + '!';
    addingtextbox();
    setTimeout(pandastoptalking, 3000)
}

//Function gerelateerd met de happenisbar//

function pandaemotionchange() {
    happennisPoints = happennisPoints + 1
    if (happennisPoints > 9) {
        happennisPoints = happennisBarsImg.length - 1
    }

    if (happennisInterval == null) {
        happennisInterval = setInterval(() => {
            pandagettingbored();
        }, 15000);
    }
    happennisBar.src = 'happinessbar.png' + happennisBarsImg[happennisPoints]
}

function pandagettingbored() {
    happennisPoints = happennisPoints - 1
    happennisBar.src = 'happinessbar.png' + happennisBarsImg[happennisPoints]
    if (happennisPoints < 0) {
        happennisPoints = 0;
        happennisBar.src = 'happinessbar.png' + happennisBarsImg[happennisPoints]
    }

    if (happennisPoints == 0) {
        pandaisbored();
    }
}

function pandajumping() {
    pandagoingtojump();
    setTimeout(() => pandagoingtostand(), 800);
    pandastanding();
    pandaImg.classList.add('jump')
    setTimeout(() => pandaImg.classList.remove('jump'), 800);
}


function pandatalking() {
    if (redtshirtOn == true) {
        pandaImg.src = 'catsweaterpng'
    } else {
        pandaImg.src = 'catfull.png'
    }
}

function pandastoptalking() {
    if (happennisPoints == 0) {
        pandaisbored();
    } else {
        pandagettingnormal();
        textBox.classList.add('disappear')
    }
}

//panda is...//

function pandaishungry() {
    textBox.textContent = 'I want some tuna' + ' ' + naamInput.value + '!'
    addingtextbox();
    pandaissad();
}

function pandaisbored() {
    textBox.textContent = 'Im bored' + ' ' + naamInput.value + '!'
    addingtextbox();
    pandaissad();
}

function pandaissad() {
    if (redtshirtOn == true) {
        pandaImg.src = 'catsweater.png'
    } else {
        pandaImg.src = 'fullcat.png'
    }
}

//panda going to...//

function pandagoingtostand() {
    if (redtshirtOn == true) {
        pandaImg.src = 'catsweater.png'
    } else {
        pandaImg.src = 'catfull.png'
    }
}

function pandagoingtojump() {
    if (redtshirtOn == true) {
        pandaImg.src = 'catsweater.png'
    } else {
        pandaImg.src = 'catjump.png';
    }
}

function pandastanding() {
    if (standingTimer == false) {
        standingTimer = true
        setTimeout(() => pandagettingnormal(), 8000);
        setTimeout(() => standingTimer = false, 8000);
    }
}

function showtutorial() {
    tutorialText.classList.toggle('disappear')
    if (tutorialButton.getAttribute('src') === "question_button.png") {
        tutorialButton.src = "close_button.png"
    } else {
        tutorialButton.src = "question_button.png"
    }
}

function keyevents(event) {
    var key = event.key;
    if (key == 'w') {
        if (hungerPoints == 0) {
            textBox.textContent = 'I have no energy!'
            pandaissad();
            addingtextbox();
        } else {
            pandajumping();
            pandaemotionchange();
            pandagettinghungry();
            if (redtshirtOn == true) {
                pandaImg.src = 'catsweater.png'
                console.log("keyevents")
            } else {
                pandaImg.src = 'catjump.png';
            }
        }
    }
    //KEYS OM DE BARS MANUAL TE VERANDEREN, niet zichtbaar voor gebruiker//
    if (key == 'o') {
        pandagettinghungry();
    }

    if (key == 'p') {
        pandaeating();
    }

    if (key == '=') {
        pandaemotionchange();
    }

    if (key == '-') {
        pandagettingbored();
    }
}

console.log("%c'o' = hungerbar -1 | 'p' = hungerbar +1 | '=' = hapennisbar +1 | '-' = happennisbar -1 ", consoleLogStyle)

//ADDEVENTLISTENER


naamInput.addEventListener('change', pandagreeting);

bambooImg.addEventListener('dragend', pandaeating);

document.addEventListener('keypress', keyevents)

tutorialButton.addEventListener('click', showtutorial)

redtshirtImg.addEventListener('click', changingtshirt)
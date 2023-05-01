
//VARIABELS

const catfullImg = document.querySelector('#cat')
const tunaImg = document.querySelector('#tuna')
const redtshirtImg = document.querySelector('#sweater')
var sweaterOn = false

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
hungerBar.src = './pictures/website_objects/hunger_bar/' + hungerBarsImg[hungerPoints]
var hungerbarInterval = null
const eatingAudio = document.querySelector('#eating_audio')

//happiness bar
const happennisBarsImg = ['happinessbar.png', 'happinessbar1.png', 'happinessbar2.png', 'happinessbar3.png', 'happinessbar4.png', 'happinessbar5.png', 'happinessbar6.png', 'happinessbar7.png', 'happinessbar8.png', 'happinessbar9.png', 'happinessbar10.png']
const happennisBar = document.querySelector('#happinessbar')
var happennisPoints = 1
happennisBar.src = './final/happinessbar.png/' + happennisBarsImg[happennisPoints]
var happennisInterval = null

//FUNCTIONS

function addingtextbox() {
    textBox.classList.add("text_box")
    textBox.classList.remove("disappear")
}

function pandagreeting() {
    textBox.textContent = 'Welkom' + ' ' + naamInput.value + ' ' + '!';
    textBox.classList.add('text_box');
    pandaImg.src = './animated/cat_waving.png';
    naamInput.classList.add('disappear')
    setTimeout(pandastart, 1800)
    foreGround.classList.remove('foregroundstyle')
    foreGroundText.classList.add('disappear')
}

function changingtshirt() {
    redtshirtOn ^= true; //Bron: https://stackoverflow.com/questions/2479058/how-to-make-a-boolean-variable-switch-between-true-and-false-every-time-a-method/2479339
    if (redtshirtOn == true) {
        pandagettingnormal();
        redtshirtImg.src = './final/cancelsweat.png'
    } else {
        pandagettingnormal();
        redtshirtImg.src = './final/sweater.png'
    }
}



function pandagettingnormal() {
    if (happennisPoints == 0 || hungerPoints == 0) { 
        pandaissad();
    } else {
        if (sweaterOn == true) {
            pandaImg.src = './final/sweater.png'
        } else {
            pandaImg.src = './final/catfull.png';
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
        pandaImg.src = './final/cateating.png';
        if (sweaterOn == true) {
            pandaImg.src = './final/cateatingsweater.png'
        }
        setTimeout(pandathankingfood, 1800)
        bambooImg.classList.add('disappear')
        setTimeout(showbamboo, 1800)
        eatingAudio.currentTime = 0;
        eatingAudio.play();
    }

    hungerBar.src = './final/hungerbar/' + hungerBarsImg[hungerPoints]

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
    hungerBar.src = './final/hungerbar/' + hungerBarsImg[hungerPoints]
}

function pandathankingfood() {
    pandatalking();
    textBox.textContent = 'thank you for the bamboo!' + ' ' + naamInput.value + ' ' + '!';
    addingtextbox();
    setTimeout(pandastoptalking, 3000)
}

function pandarefusingfood() {
    pandatalking();
    textBox.textContent = 'im full' + ' ' + naamInput.value + ' ' + '!';
    addingtextbox();
    setTimeout(pandastoptalking, 3000)
}


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
    happennisBar.src = './final/happinessbar/' + happennisBarsImg[happennisPoints]
}

function pandagettingbored() {
    happennisPoints = happennisPoints - 1
    happennisBar.src = './final/happinessbar/' + happennisBarsImg[happennisPoints]
    if (happennisPoints < 0) {
        happennisPoints = 0;
        happennisBar.src = './final/happinessbar/' + happennisBarsImg[happennisPoints]
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
        pandaImg.src = './final/catfull.png'
    } else {
        pandaImg.src = './final/catfull.png'
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

//cat is...//

function pandaishungry() {
    textBox.textContent = 'I want some tuna' + ' ' + naamInput.value + '!'
    addingtextbox();
    pandaissad();
}

function pandaisbored() {
    textBox.textContent = 'Ik verveel me' + ' ' + naamInput.value + '!'
    addingtextbox();
    pandaissad();
}

function pandaissad() {
    if (redtshirtOn == true) {
        pandaImg.src = './pictures/panda/panda_red_tshirt_sad.png'
    } else {
        pandaImg.src = './pictures/panda/panda_sad.png'
    }
}

//panda going to...//

function pandagoingtostand() {
    if (redtshirtOn == true) {
        pandaImg.src = './pictures/panda/panda_red_tshirt_standing.png'
    } else {
        pandaImg.src = './pictures/panda/panda_standing_default.png'
    }
}

function pandagoingtojump() {
    if (redtshirtOn == true) {
        pandaImg.src = './pictures/panda/panda_red_tshirt_jumping.png'
    } else {
        pandaImg.src = './pictures/panda/panda_jumping.png';
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
    if (tutorialButton.getAttribute('src') === "./pictures/website_objects/tutorial_button/question_button.png") {
        tutorialButton.src = "./pictures/website_objects/tutorial_button/close_button.png"
    } else {
        tutorialButton.src = "./pictures/website_objects/tutorial_button/question_button.png"
    }
}

function keyevents(event) {
    var key = event.key;
    if (key == 'w') {
        if (hungerPoints == 0) {
            textBox.textContent = 'Ik heb geen energie!'
            pandaissad();
            addingtextbox();
        } else {
            pandajumping();
            pandaemotionchange();
            pandagettinghungry();
            if (redtshirtOn == true) {
                pandaImg.src = './pictures/panda/panda_red_tshirt_jumping.png'
                console.log("keyevents")
            } else {
                pandaImg.src = './pictures/panda/panda_jumping.png';
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
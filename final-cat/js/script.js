const catImg = document.querySelector('#cat')
const tunaImg = document.querySelector('#tuna')
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


//Hunger bar
const hungerBarsImg = ['hunger_bar_0.png', 'hunger_bar_1.png', 'hunger_bar_2.png', 'hunger_bar_3.png', 'hunger_bar_4.png', 'hunger_bar_5.png', 'hunger_bar_6.png', 'hunger_bar_7.png', 'hunger_bar_8.png', 'hunger_bar_9.png', 'hunger_bar_10.png']
const hungerBar = document.querySelector('#hunger_bar')
var hungerPoints = 1
hungerBar.src = './pictures/website_objects/hunger_bar/' + hungerBarsImg[hungerPoints]
var hungerbarInterval = null
const eatingAudio = document.querySelector('#eating_audio')

//Happiness bar
const happennisBarsImg = ['happennis_bar_0.png', 'happennis_bar_1.png', 'happennis_bar_2.png', 'happennis_bar_3.png', 'happennis_bar_4.png', 'happennis_bar_5.png', 'happennis_bar_6.png', 'happennis_bar_7.png', 'happennis_bar_8.png', 'happennis_bar_9.png', 'happennis_bar_10.png']
const happennisBar = document.querySelector('#happennis_bar')
var happennisPoints = 1
happennisBar.src = './pictures/website_objects/happennis_bar/' + happennisBarsImg[happennisPoints]
var happennisInterval = null

//FUNCTIONS

function addingtextbox() {
    textBox.classList.add("text_box")
    textBox.classList.remove("disappear")
}

function catgreeting() {
    textBox.textContent = 'Welcome' + ' ' + naamInput.value + ' ' + '!';
    textBox.classList.add('text_box');
    catImg.src = './pictures/cat/cat_default.png';
    naamInput.classList.add('disappear')
    setTimeout(catstart, 1800)
    foreGround.classList.remove('foregroundstyle')
    foreGroundText.classList.add('disappear')
}

function changingtshirt() {
    redtshirtOn ^= true; // https://stackoverflow.com/questions/2479058/how-to-make-a-boolean-variable-switch-between-true-and-false-every-time-a-method/2479339
    if (redtshirtOn == true) {
        catgettingnormal();
        redtshirtImg.src = './pictures/clothing/cancel_red_tshirt.png'
    } else {
        catgettingnormal();
        redtshirtImg.src = './pictures/clothing/red_tshirt.png'
        ctx.mozImageSmoothingEnabled = true;
    }
}



function catgettingnormal() {
    if (happennisPoints == 0 || hungerPoints == 0) { 
        catissad();
    } else {
        if (redtshirtOn == true) {
            catImg.src = './pictures/cat/cat_red_tshirt.png'
        } else {
            catImg.src = './pictures/cat/cat_default.png';
        }
    }
}

function catstart() {
    catgettingnormal();
    textBox.classList.add('disappear')
}

//Function related to the hunger bar//

function cateating() {
    hungerPoints = hungerPoints + 1
    if (hungerPoints > 10) {
        hungerPoints = hungerBarsImg.length - 1
        catrefusingfood();
    } else {
        catImg.src = './pictures/cat/cat_eating.png';
        if (redtshirtOn == true) {
            catImg.src = './pictures/cat/cat_red_tshirt_eating.png'
        }
        setTimeout(catthankingfood, 1800)
        tunaImg.classList.add('disappear')
        setTimeout(showtuna, 1800)
        eatingAudio.currentTime = 0;
        eatingAudio.play();
    }

    hungerBar.src = './pictures/website_objects/hunger_bar/' + hungerBarsImg[hungerPoints]

    if (hungerbarInterval == null) {
        hungerbarInterval = setInterval(() => {
            catgettinghungry();
        }, 15000);
    }
}

function showtuna() {
    tunaImg.classList.remove('disappear')
}

function catgettinghungry() {
    hungerPoints = hungerPoints - 1
    if (hungerPoints < 0) {
        hungerPoints = 0;
    }
    if (hungerPoints == 0) {
        catishungry();
    }
    hungerBar.src = './pictures/website_objects/hunger_bar/' + hungerBarsImg[hungerPoints]
}

function catthankingfood() {
    cattalking();
    textBox.textContent = 'Thank you for the tuna' + ' ' + naamInput.value + ' ' + '!';
    addingtextbox();
    setTimeout(catstoptalking, 3000)
}

function catrefusingfood() {
    cattalking();
    textBox.textContent = 'I think Im full' + ' ' + naamInput.value + ' ' + '!';
    addingtextbox();
    setTimeout(catstoptalking, 3000)
}

//Functions related to happiness bar//

function catemotionchange() {
    happennisPoints = happennisPoints + 1
    if (happennisPoints > 9) {
        happennisPoints = happennisBarsImg.length - 1
    }

    if (happennisInterval == null) {
        happennisInterval = setInterval(() => {
            catgettingbored();
        }, 15000);
    }
    happennisBar.src = './pictures/website_objects/happennis_bar/' + happennisBarsImg[happennisPoints]
}

function catgettingbored() {
    happennisPoints = happennisPoints - 1
    happennisBar.src = './pictures/website_objects/happennis_bar/' + happennisBarsImg[happennisPoints]
    if (happennisPoints < 0) {
        happennisPoints = 0;
        happennisBar.src = './pictures/website_objects/happennis_bar/' + happennisBarsImg[happennisPoints]
    }

    if (happennisPoints == 0) {
        catisbored();
    }
}

function catjumping() {
    catgoingtojump();
    setTimeout(() => catgoingtostand(), 800);
    catstanding();
    catImg.classList.add('jump')
    setTimeout(() => catImg.classList.remove('jump'), 800);
}


function cattalking() {
    if (redtshirtOn == true) {
        catImg.src = './pictures/cat/cat_red_tshirt.png'
    } else {
        catImg.src = './pictures/cat/cat_default.png'
    }
}

function catstoptalking() {
    if (happennisPoints == 0) {
        catisbored();
    } else {
        catgettingnormal();
        textBox.classList.add('disappear')
    }
}

//cat is...//

function catishungry() {
    textBox.textContent = 'I want more tuna' + ' ' + naamInput.value + '!'
    addingtextbox();
    catissad();
}

function catisbored() {
    textBox.textContent = 'Play with me' + ' ' + naamInput.value + '!'
    addingtextbox();
    catissad();
}

function catissad() {
    if (redtshirtOn == true) {
        catImg.src = './pictures/cat/cat_red_tshirt_sad.png'
    } else {
        catImg.src = './pictures/cat/cat_sad.png'
    }
}

//cat going to...//

function catgoingtostand() {
    if (redtshirtOn == true) {
        catImg.src = './pictures/cat/cat_red_tshirt_standing.png'
    } else {
        catImg.src = './pictures/cat/cat_standing_default.png'
    }
}

function catgoingtojump() {
    if (redtshirtOn == true) {
        catImg.src = './pictures/cat/cat_red_tshirt_jumping.png'
    } else {
        catImg.src = './pictures/cat/cat_jumping.png';
    }
}

function catstanding() {
    if (standingTimer == false) {
        standingTimer = true
        setTimeout(() => catgettingnormal(), 8000);
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
            textBox.textContent = 'I have no energy!'
            catissad();
            addingtextbox();
        } else {
            catjumping();
            catemotionchange();
            catgettinghungry();
            if (redtshirtOn == true) {
                catImg.src = './pictures/cat/cat_red_tshirt_jumping.png'
                console.log("keyevents")
            } else {
                catImg.src = './pictures/cat/cat_jumping.png';
            }
        }
    }
    
    if (key == 'o') {
        catgettinghungry();
    }

    if (key == 'p') {
        cateating();
    }

    if (key == '=') {
        catemotionchange();
    }

    if (key == '-') {
        catgettingbored();
    }
}

console.log("%c'o' = hungerbar -1 | 'p' = hungerbar +1 | '=' = hapennisbar +1 | '-' = happennisbar -1 ", consoleLogStyle)

//ADDEVENTLISTENER


naamInput.addEventListener('change', catgreeting);

tunaImg.addEventListener('dragend', cateating);

document.addEventListener('keypress', keyevents)

tutorialButton.addEventListener('click', showtutorial)

redtshirtImg.addEventListener('click', changingtshirt)
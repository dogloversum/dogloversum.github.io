

var catImg, tunaImg
catImg = document.querySelector('#cat')
tunaImg = document.querySelector('#tuna')
redtshirtImg = document.querySelector('#red_tshirt')

var naamInput = document.querySelector('#name_input')

var greetingText = document.querySelector('#greeting_text')

var textBox = document.querySelector('#food_thanks_text')

var foreGround = document.querySelector('#foreground')

var tutorialButton = document.querySelector('#question_mark')

var tutorialText = document.querySelector('#tutorial')

var standingTimer = false


// Hunger bar
var hungerBarsImg = ['hunger_bar_0.png', 'hunger_bar_1.png', 'hunger_bar_2.png', 'hunger_bar_3.png', 'hunger_bar_4.png', 'hunger_bar_5.png', 'hunger_bar_6.png', 'hunger_bar_7.png', 'hunger_bar_8.png', 'hunger_bar_9.png', 'hunger_bar_10.png']
var hungerBar = document.querySelector('#hunger_bar')
var hungerPoints = 1
hungerBar.src = './pictures/website_objects/hunger_bar/' + hungerBarsImg[hungerPoints]
var hupText = document.querySelector('#hupoints')
var hungerbarInterval = null
var eatingAudio = document.querySelector('#eating_audio')

var happennisBarsImg = ['happennis_bar_0.png', 'happennis_bar_1.png', 'happennis_bar_2.png', 'happennis_bar_3.png', 'happennis_bar_4.png', 'happennis_bar_5.png', 'happennis_bar_6.png', 'happennis_bar_7.png', 'happennis_bar_8.png', 'happennis_bar_9.png', 'happennis_bar_10.png']
var happennisBar = document.querySelector('#happennis_bar')
var happennisPoints = 1
happennisBar.src = './pictures/website_objects/happennis_bar/' + happennisBarsImg[happennisPoints]
var hapText = document.querySelector('#hapoints')
var happennisInterval = null

//FUNCTIONS

function addingtextbox() {
    textBox.classList.add("text_box")
    textBox.classList.remove("disappear")
}

function cateating() {
    hungerPoints = hungerPoints + 1
    if (hungerPoints > 10) {
        hungerPoints = hungerBarsImg.length - 1
        catrefusingfood();
    } else {
        catImg.src = './pictures/cat/cat_eating.png';
        setTimeout(catthankingfood, 1800)
        tunaImg.classList.add ('disappear')
        setTimeout (showtuna, 1800)
        eatingAudio.currentTime = 0;
        eatingAudio.play();
        hupText.textContent = hungerPoints
    }

    hungerBar.src = './pictures/website_objects/hunger_bar/' + hungerBarsImg[hungerPoints]

    if (hungerbarInterval == null) {
        hungerbarInterval = setInterval(() => {
            catgettinghungry();
        }, 100000);
    }
}

function showtuna(){
    tunaImg.classList.remove ('disappear')
    setTimeout
}

function catgettinghungry() {
    hungerPoints = hungerPoints - 1
    if (hungerPoints < 0) {
        hungerPoints = 0
    }
    if (hungerPoints == 0) {
        textBox.textContent = 'I want more tuna' + ' ' + naamInput.value + '!'
        addingtextbox();
        catImg.src = './pictures/cat/cat_test.png'
    }
    hungerBar.src = './pictures/website_objects/hunger_bar/' + hungerBarsImg[hungerPoints]
    hupText.textContent = hungerPoints
}

function catthankingfood() {
    catImg.src = './pictures/cat/cat_default.png'
    textBox.textContent = 'Thanks voor de tuna' + ' ' + naamInput.value + ' ' + '!';
    addingtextbox();
    setTimeout(catstoptalking, 3000)
}

function catrefusingfood() {
    catImg.src = './pictures/cat/cat_default.png'
    textBox.textContent = 'Ik ben vol' + ' ' + naamInput.value + ' ' + '!';
    addingtextbox();
    setTimeout(catstoptalking, 3000)
}

function catstoptalking() {
    textBox.classList.add('disappear')
}

function catdefault() {
    catImg.src = './pictures/cat/cat_default.png';
    textBox.classList.add('disappear')
}

function catgreeting() {
    textBox.textContent = 'Hello' + ' ' + naamInput.value + ' ' + '!';
    textBox.classList.add('text_box');
    catImg.src = './animated/cat_waving.png';
    naamInput.classList.add('disappear')
    setTimeout(catdefault, 1800)
    foreGround.classList.remove('foregroundstyle')

}

function keyevents(event) {
    var key = event.key;
    if (key == 'w') {
        if (hungerPoints == 0) {
            textBox.textContent = 'I have no energy'
            addingtextbox();
        } else {
            catjumping();
            catgettinghappy();
            catgettinghungry();
            catImg.src = './pictures/cat/cat_jumping.png'
        }
    }
    //TIJDELIJK//
    if (key == '-') {
        catgettinghungry();
    }

    if (key == '=') {
        cateating();
    }

    if (key == 'p') {
        catgettinghappy();
    }

    if (key == 'o') {
        catgettingbored();
    }
}
//TIJDELIJK//

function catgettinghappy() {
    happennisPoints = happennisPoints + 1
    hapText.textContent = happennisPoints
    if (happennisPoints > 9) {
        happennisPoints = happennisBarsImg.length - 1
        console.log("test")
    }

    if (happennisInterval == null) {
        happennisInterval = setInterval(() => {
            catgettingbored();
        }, 100000);
    }
    happennisBar.src = './pictures/website_objects/happennis_bar/' + happennisBarsImg[happennisPoints]
}

function catgettingbored() {
    happennisPoints = happennisPoints - 1
    hapText.textContent = happennisPoints
    happennisBar.src = './pictures/website_objects/happennis_bar/' + happennisBarsImg[happennisPoints]
    if (happennisPoints < 0) {
        happennisPoints = 0
        happennisBar.src = './pictures/website_objects/happennis_bar/' + happennisBarsImg[happennisPoints]
    }

    if (happennisPoints == 0) {
        textBox.textContent = 'Play with me' + ' ' + naamInput.value + '!'
        addingtextbox();
        catImg.src = './pictures/cat/cat_test.png'
    }
}


function catjumping() {
    if (hungerPoints == 0) {
        catdefault();
    } else {
        catImg.src = './pictures/cat/cat_jumping.png';
        setTimeout(() => catImg.src = './pictures/cat/cat_standing_default.png', 800);
        catstanding();
        catImg.classList.add('jump')
        setTimeout(() => catImg.classList.remove('jump'), 800);
    }
}

function catstanding() {
    if (standingTimer == false) {
        standingTimer = true
        setTimeout(() => catImg.src = './pictures/cat/cat_default.png', 8000);
        setTimeout(() => standingTimer = false, 8000);
        console.log(standingTimer)
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

//ADDEVENTLISTENER

naamInput.addEventListener('change', catgreeting);

tunaImg.addEventListener('dragend', cateating);

document.addEventListener('keypress', keyevents)

tutorialButton.addEventListener('click', showtutorial)
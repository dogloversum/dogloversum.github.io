
var containerWidth = document.body.clientWidth;
var containerHeight = document.body.clientHeight;

// function check() 
// {
//     console.log('test');
// }

function submit() 
{
    alert('Your volume is now: ' + output.textContent);
}

function reset() 
{
    outputInt = 0;
    output.textContent = outputInt.toFixed(2);

    var resetButtonWidth = resetButton.offsetWidth;
    var resetButtonHeight = resetButton.offsetHeight;
  
    // Calculate a random position for the element
    var randomX = Math.floor(Math.random() * (containerWidth - resetButtonWidth));
    var randomY = Math.floor(Math.random() * (containerHeight - resetButtonHeight));
  
    // Set the new position of the element
    resetButton.style.position = "absolute";
    resetButton.style.left = randomX + "px";
    resetButton.style.top = randomY + "px";
}

function minus() 
{
    if (outputInt > 0) 
    {
    outputInt -=0.1;
    output.textContent = outputInt.toFixed(2); 
    }
    
    var minusButtonWidth = minusButton.offsetWidth;
    var minusButtonHeight = minusButton.offsetHeight;
  
    // Calculate a random position for the element
    var randomX = Math.floor(Math.random() * (containerWidth - minusButtonWidth));
    var randomY = Math.floor(Math.random() * (containerHeight - minusButtonHeight));
  
    // Set the new position of the element
    minusButton.style.position = "absolute";
    minusButton.style.left = randomX + "px";
    minusButton.style.top = randomY + "px";
}

function plus() 
{
    if (outputInt < 100) 
    {
    outputInt += 0.1;
    output.textContent = outputInt.toFixed(2);
    }

    var plusButtonWidth = plusButton.offsetWidth;
    var plusButtonHeight = plusButton.offsetHeight;
  
    // Calculate a random position for the element
    var randomX = Math.floor(Math.random() * (containerWidth - plusButtonWidth));
    var randomY = Math.floor(Math.random() * (containerHeight - plusButtonHeight));
  
    // Set the new position of the element
    plusButton.style.position = "absolute";
    plusButton.style.left = randomX + "px";
    plusButton.style.top = randomY + "px";
}

function random() 
{
    outputInt = randomNumber(0, 100);
    output.textContent = outputInt.toFixed(2);

    var randomButtonWidth = randomButton.offsetWidth;
    var randomButtonHeight = randomButton.offsetHeight;
  
    // Calculate a random position for the element
    var randomX = Math.floor(Math.random() * (containerWidth - randomButtonWidth));
    var randomY = Math.floor(Math.random() * (containerHeight - randomButtonHeight));
  
    // Set the new position of the element
    randomButton.style.position = "absolute";
    randomButton.style.left = randomX + "px";
    randomButton.style.top = randomY + "px";
}

function randomNumber(min, max) 
{
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

const output = document.querySelector('.output');
let outputInt = parseInt(output.textContent);
console.log(outputInt);

const minusButton = document.querySelector('.minus-button');
minusButton.addEventListener('click', minus);

const plusButton = document.querySelector('.plus-button');
plusButton.addEventListener('click', plus);

const resetButton = document.querySelector('.reset-button');
resetButton.addEventListener('click', reset);

const randomButton = document.querySelector('.random-button');
randomButton.addEventListener('click', random);

const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', submit);



/* const button = document.querySelector('.button');
const output = document.querySelector('.output');
let phone_content = document.querySelector('.phone');

button.addEventListener('click', updateOutput);

function updateOutput() {
    output.textContent = phone_content.value;
    alert(phone_content.value);
}
*/

// var slider = document.getElementById("myRange");
// var sliderSubmit = document.querySelector(".slider-submit-button").addEventListener('click', update);
// var sliderOutput = document.querySelector(".slider-output");


// Update the current slider value (each time you drag the slider handle)
// function update() {
//   sliderOutput.textContent = slider.value;
// }
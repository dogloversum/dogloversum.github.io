const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}


const storyText = 'It was 94 fahrenheit outside, so :insertx: went on the train. When they got to :inserty:, they began laughing a bit, then :insertz:. Tim saw something— :insertx: held a cat that weighs 300 pounds, and it was the perfect ending to a fun day.';
const insertX = ['Stuart', 'Saba', 'Erin'];
const insertY = ['the therapy office', 'Olive Garden', 'Portland, OR,'];
const insertZ = ['read Infinite Jest by DFW', 'pet a cat', 'cried a little'];



randomize.addEventListener('click', result);

function result() {

  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(':insertx:',xItem);
  newStory = newStory.replaceAll(':inserty:',yItem);
  newStory = newStory.replaceAll(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Tim', name);
  }

  if(document.getElementById("uk").checked) {
    const weight = `${Math.round(300/14)} stone`;
    const temperature =  `${Math.round((94-32)*5/9)} centigrade`;
    newStory = newStory.replaceAll('94 fahrenheit', temperature);
    newStory = newStory.replaceAll('300 pounds', weight);
}

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
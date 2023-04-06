
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const pictures = ['smudgo.jpg', 'borbos.JPG', 'blazerz.jpg', 'spwing.JPG', 'fresh.jpg'];

const altImgNames = ['my dog Smudge', 'my dog Boris', 'my first Portland Trail Blazers game', 'spring in Oregon', 'me post a fresh haircut'];

for (let i = 0; i < pictures.length; i++) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${pictures[i]}`);
  newImage.setAttribute('alt', altImgNames[i]);
  thumbBar.appendChild(newImage);  

  newImage.addEventListener('click', () => {
    displayedImage.setAttribute('src', `images/${pictures[i]}`);
    displayedImage.setAttribute('alt', altImgNames[i]);
  });
}

btn.addEventListener('click', () => {
  if (btn.getAttribute('class') === "dark") {
    console.log('true')
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
  }
});

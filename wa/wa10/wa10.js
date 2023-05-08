const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const pictures = ['./blazerz.jpg', './blazerz.jpg', './blazerz.jpg', './blazerz.jpg', './blazerz.jpg'];
/* Declaring the alternative text for each image file */
const alts = ['People laying on rocks', 'Ancient building ', 'Wheat Fields', 'Tropical Beach', 'Ice in Ocean']

function setDisplay(p, a) {
    displayedImage.setAttribute('src', p);
    displayedImage.setAttribute('alt', a);
}
/* Looping through images */

for (let i = 0; i < pics.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', pics[i]);
    newImage.setAttribute('alt',  alts[i]);
    newImage.addEventListener('click', () => setDisplay(pics[i], alts[i]));
    thumbBar.appendChild(newImage);
}

// displayedImage. need to set src and alt text to match thumbnail
/* Wiring up the Darken/Lighten button */
btn.setAttribute("class", "dark");
function change(){
    if (btn.className == "dark"){
        btn.className = "light"
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    }
    else{
        btn.className = "dark"
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
}
btn.addEventListener('click', change);



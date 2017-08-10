'use strict';

const body = document.querySelector('body');
const h = window.innerHeight;
const w = window.innerWidth;

const date = new Date();
let hr = date.getHours();
let timeOfDay = 'deep';

if (hr <= 4 || hr >= 22) {
  timeOfDay = 'midnight';
} else if (hr >= 4 && hr < 8) {
  timeOfDay = 'sunrise';
} else if (hr >= 8 && hr < 12) {
  timeOfDay = 'morning';
} else if (hr >= 12 && hr < 16) {
  timeOfDay = 'afternoon';
} else if (hr >= 16 && hr < 19) {
  timeOfDay = 'evening';
} else if (hr >= 19 && hr < 22) {
  timeOfDay = 'sunset';
}


const bg = `url("https://source.unsplash.com/${w}x${h}?${timeOfDay}")`;

window.addEventListener('load', function() {
  body.style.background = `
    linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.3)),
    ${bg}
    `;
  window.setTimeout(function() {body.style.opacity = 1}, 1000);
});

'use strict';

const body = document.body, h = innerHeight, w = innerWidth;
let hr = new Date().getHours(), bg;

if (hr <= 4 || hr >= 22) bg = 'midnight';
else if (hr > 4 && hr < 8) bg = 'sunrise';
else if (hr >= 8 && hr < 12) bg = 'morning';
else if (hr >= 12 && hr < 16) bg = 'ocean';
else if (hr >= 16 && hr < 19) bg = 'evening';
else bg = 'sunset';

window.addEventListener('load', function() {
  body.style.background = `url("https://source.unsplash.com/${w}x${h}?${bg}") center/cover`;
  setTimeout(function(){body.style.opacity = 1}, 1000);
});
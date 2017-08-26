'use strict';

const bg = document.querySelector('body').style,
img = 'https://source.unsplash.com/1280x680?',
date = new Date();
let hr = date.getHours(), timeQuery = updateClock();

bg.background = `#fff url("${img+timeQuery}") no-repeat fixed center`;
bg.backgroundSize = 'cover';
bg.opacity = 0;
setTimeout(function() {bg.transition = 'opacity 2s', bg.opacity = 1}, 1200);

'use strict';

// Clock
function updateClock() {
  let now = new Date(),
  time = [now.getHours(), now.getMinutes()/*, now.getSeconds()*/];
  time = time.map((unit) => unit = unit < 10 ? `0${unit}` : `${unit}`);

  let greeting = document.querySelector('#greeting');
  if (time[0] < 12/*noon*/ && time[0] > 3/*am*/) greeting.innerHTML = 'Good morning';
  else if (time[0] > 12/*noon*/ && time[0] < 16/*4 pm*/) greeting.innerHTML = 'Good afternoon';
  else greeting.innerHTML = 'Good evening';

  document.querySelector('#time').textContent = time.join(':');
  setTimeout(updateClock, 1000);
}
updateClock();

// Name
function setName() {
  if (!localStorage.name) localStorage.name = prompt('What is your name?');
  document.querySelector('#username').innerHTML = localStorage.name;
}
setName();

// Focus
var focusInput = document.querySelector('#focus-input'),
focusContainer = document.querySelector('#focusLi'),
focusLabel = document.querySelector('#focus-label');

$(document).ready(function() {
  if (localStorage.focus)
    focusContainer.style.display = 'inline-block',
    focusLabel.innerHTML = localStorage.focus + ' ';
  else focusInput.style.display = 'inline-block';
}),

document.querySelector('#focus-form').addEventListener('submit', function(e) {
  e.preventDefault();
  localStorage.focus = focusInput.value;
  focusLabel.innerHTML = localStorage.focus + ' ';

  focusInput.style.display = 'none';
  focusContainer.style.display = 'inline-block';
}),

document.querySelector('#close-button').addEventListener('click', function() {
  localStorage.focus = '';

  focusContainer.style.display = 'none';
  focusInput.style.display = 'inline-block';
});
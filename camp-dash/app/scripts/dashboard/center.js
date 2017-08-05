'use strict';

// Clock stuff
function updateClock() {
  let now = new Date(),
  time = [now.getHours(), now.getMinutes()/*, now.getSeconds()*/];
  time = time.map((unit) => unit = unit < 10 ? `0${unit}` : `${unit}`);

  let currentTime = time.join(':'),
  clockLocation = document.querySelector('#time'),

  greeting = document.querySelector('#greeting');
  if (time[0] < 12/*noon*/ && time[0] > 3/*am*/) {
    greeting.innerHTML = 'Good morning';
  } else if (time[0] > 12/*noon*/ && time[0] < 16/*4 pm*/) {
    greeting.innerHTML = 'Good afternoon';
  } else {
    greeting.innerHTML = 'Good evening'
  }

  clockLocation.innerText = currentTime;
  setTimeout(updateClock, 1000);
}
updateClock();

// Name stuff
function getName() {
  let name = localStorage.getItem('name');
  if (name == null) {
    /*This is where we will insert FCC API to add user name*/
    let myNameIs = prompt('What is your name?');
    localStorage.setItem('name', myNameIs);
    name = localStorage.getItem('name');
  }

  let nameLocation = document.querySelector('#username');
  nameLocation.innerHTML = name;
}
getName();

// Focus stuff
const focusForm = document.querySelector('#focus-form');
const focusInput = document.querySelector('#focus-input');
const focusContainer = document.querySelector('#focusLi');
const focusCheckbox = document.querySelector('#focusCheck');
const focusLabel = document.querySelector('#focus-label');
const focusClose = document.querySelector('#close-button');

$(document).ready(function() {
  let savedFocus = localStorage.getItem('focus');
  if (!(savedFocus == '' || savedFocus == null)) {
    focusContainer.style.display = 'inline-block';
    focusLabel.innerHTML = (savedFocus + ' ');

  } else {
    focusInput.style.display = 'inline-block';
  }
})

focusForm.addEventListener('submit', function(e) {
  e.preventDefault();
  localStorage.setItem('focus', focusInput.value);

  let focus = localStorage.getItem('focus');
  focusLabel.innerHTML = (focus + ' ');

  // change form
  focusInput.style.display = 'none';
  focusContainer.style.display = 'inline-block';
});

focusClose.addEventListener('click', function(e) {
  localStorage.setItem('focus', '');

  focusContainer.style.display = 'none';
  focusInput.style.display = 'inline-block';
});

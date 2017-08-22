'use strict';

// Clock
function updateClock() {
  let now = new Date(),
  time = [now.getHours(), now.getMinutes()/*, now.getSeconds()*/];
  time = time.map((unit) => unit = unit < 10 ? `0${unit}` : `${unit}`);

  let greeting = $('#greeting');
  if (time[0] < 12/*noon*/ && time[0] > 3/*am*/) greeting.html('Good morning');
  else if (time[0] > 12/*noon*/ && time[0] < 16/*4 pm*/) greeting.html('Good afternoon');
  else greeting.html('Good evening');

  $('#time').text(time.join(':'));
  setTimeout(updateClock, 1000);
}
updateClock();

// Name
function setName() {
  if (!localStorage.name) localStorage.name = prompt('What is your name?');
  $('#username').html(localStorage.name);
}
setName();

// Focus
var focusInput = $('#focus-input'), focusContainer = $('#focusLi'),
focusLabel = $('#focus-label');

$(document).ready(function() {
  if (localStorage.focus)
    focusContainer.css('display', 'inline-block'),
    focusLabel.html(localStorage.focus + ' ');
  else focusInput.css('display', 'inline-block');
}),

$('#focus-form').submit(function(e) {
  e.preventDefault();
  localStorage.focus = focusInput.val();
  focusLabel.html(localStorage.focus + ' ');

  focusInput.hide();
  focusContainer.css('display', 'inline-block');
}),

$('#close-button').click(function() {
  localStorage.focus = '';

  focusContainer.hide();
  focusInput.css('display', 'inline-block');
});
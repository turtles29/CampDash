'use strict';

// Clock stuff
function updateClock() {
  let now = new Date(),
  time = [now.getHours(), now.getMinutes(), now.getSeconds()],

  currentTime = time.join(':'),
  clockLocation = document.querySelector('#time'),

  greeting = document.querySelector('#greeting');
  if (time[0] < 12/*noon*/ && time[0] > 3/*am*/) {
    greeting.innerHTML = 'Good Morning';
  } else if (time[0] > 12/*noon*/ && time[0] < 16/*4 pm*/) {
    greeting.innerHTML = 'Good Afternoon';
  } else {
    greeting.innerHTML = 'Good Evening'
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
function focusLoad(target) {
  let oldFocus = localStorage.getItem('focus');
  if (!(oldFocus == '')) {
    target.innerHTML = `
    <input id='focusCheck' type='checkbox' autocomplete='off' />
    <label for='#focusCheck'>${oldFocus} <i class='fa fa-close' onclick='resetFocus()'></i></label>
    `;
  }
}
focusLoad(document.querySelector('#focus-form'));

function newFocus() {
  let focusSrc = document.querySelector('#focus-text'),
  myFocus = focusSrc.value;
  localStorage.setItem('focus', myFocus);
  myFocus = localStorage.getItem('focus');
  focusSrc.style.display = 'none';

  let target = document.querySelector('#focus-label');
  document.querySelector('#focusLi').style.display = 'inline-block';
  target.innerHTML = myFocus + ' <i class="fa fa-close" onclick="resetFocus()"></i></label>';
}

function resetFocus() {
  let target = document.querySelector('#focus-form');
  localStorage.setItem('focus', '');
  target.innerHTML = '<input type="text" id="focus-text"/>';

}

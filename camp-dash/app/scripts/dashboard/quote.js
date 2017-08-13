'use strict';
const quoteContainer = document.querySelector('#quote-container');
const quoteTar = document.querySelector('#quote');
const authorTar = document.querySelector('#author');
function loadQuote() {
  $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json&json=")
    .done(update)
    .fail(handleErr);
};

$('#quoteAJAX').click(function() {
  $.ajax({
      url: "https://api.forismatic.com/api/1.0/",
      dataType: "json",
      data: {
        method: "getQuote",
        format: "json"
      }
    })
    .done(update)
    .fail(handleErr);
});

function update(response) {
	const author = response["quoteAuthor"] != '' ? response["quoteAuthor"] : "Unknown";
  quoteTar.innerHTML = `"${response["quoteText"]}"`;
	authorTar.innerHTML = `- ${author}`;
}

function handleErr(jqxhr, textStatus, err) {
  console.log("Request Failed: " + textStatus + ", " + err);
}

loadQuote();

quoteContainer.addEventListener('mouseover', function() {
  quoteContainer.style.bottom = 0;
});

quoteContainer.addEventListener('mouseleave', function() {
  quoteContainer.style.bottom = '-30px';
});

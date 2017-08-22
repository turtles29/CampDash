'use strict';
var quoteContainer = $('#quote-container'), quoteTar = $('#quote'), authorTar = $('#author');
function loadQuote() {
  $.getJSON('https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json&json=')
    .done(update);
};

function update(response) {
  quoteTar.html(response['quoteText']),
	authorTar.html("- " + (response['quoteAuthor'] != '' ? response['quoteAuthor'] : 'Unknown'));
}

loadQuote();

quoteContainer.mouseover(function() {
  quoteTar.css('bottom', '5px');
  authorTar.css('bottom', '15px');
  authorTar.css('opacity', 1);
});

quoteContainer.mouseleave(function() {
  quoteTar.css('bottom', 0);
  authorTar.css('bottom', '35px');
  authorTar.css('opacity', 0);
});
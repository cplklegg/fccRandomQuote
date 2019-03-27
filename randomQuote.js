$(document).ready(function() {
  var randNum, randQuote, randAuth;
  getQuote();
  function getQuote() {
     var quote = ['Silence is one of the great arts of conversation.', 'Any person capable of angering you becomes your master.', 'When you arise in the morning, think of what a precious privilege it is to be alive - to breathe, to think, to enjoy, to love.', 'We become wiser by adversity; prosperity destroys our appreciation of the right.', 'Failure changes for the better, success for the worse.', 'Much effort, much prosperity.', 'Work while your strength and years permit you; crooked age will by-and-by come upon you with silent foot.', 'Love conquers all things.', 'He who is of a calm and happy nature, will hardly feel the pressure of age '];
      var author = ['Cicero', 'Epictetus', 'Marcus Aurelius', 'Seneca the younger', 'Senca the elder', 'Euripides', 'Ovid', 'Virgil', 'Plato'];
      randNum =         Math.floor((Math.random()*quote.length));
      randQuote = quote[randNum];
      randAuth = author[randNum];
    
      $('.quotes').text(randQuote);
      $('.author').text(randAuth);
  }
  
  $('#newQuote').on('click', function() {
    getQuote();
  });
  
  $('#tweet').on('click', function() {       
    window.open('https://twitter.com/intent/tweet?text='+ randQuote + ' ~ ' + randAuth);
  });
});

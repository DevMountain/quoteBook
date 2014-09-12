var app = angular.module('quoteBook');

app.factory('dataService', function(){
  var quotesAPI = {};

  var quotes = [
    { text: 'Life isn’t about getting and having, it’s about giving and being.', author: 'Kevin Kruse'},
    { text: 'Whatever the mind of man can conceive and believe, it can achieve', author: 'Napoleon Hill'},
    { text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein'},
    { text: 'Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.', author: 'Robert Frost'},
    { text: 'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart'},
    { text: 'Life is what happens to you while you’re busy making other plans.', author: 'John Lennon'},
    { text: 'What even is a jQuery?', author: 'Tyler McGinnis'},
  ];

  quotesAPI.getData = function(){
    return quotes;
  }

  quotesAPI.addData = function(dataObj){
    if(dataObj && dataObj.text && dataObj.author && Object.keys(dataObj).length === 2){
      quotes.push(dataObj);
    }
  }

  quotesAPI.removeData = function(title){
    for(var i = 0; i < quotes.length; i++){
      if(title === quotes[i].text){
        quotes.splice(i, 1);
      }
    }
  }

  return quotesAPI;
})
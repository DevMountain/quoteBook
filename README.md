<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250" align="right">

quoteBook
=========

## Objectives
### Overview
####
* Use Angular and services to create an application that manages famous quotes.
* Better understand services and how they can be used to separate and manage data for your controller

##### What you're building will look something like this
![alt text](https://github.com/DevMountain/quoteBook/blob/master/preview.png?raw=true, "Preview Image")

## Instructions

### Set up your Structure

####
Set up a basic angular app and a controller.  Test to make sure everything is working.

####
The first step whenever you're setting up an Angular App is to set up your foundation then check if your controller is tied to the view as it should be.
* Create an index.html and a style.css file
* Create a folder called js
* In the js folder, create an app.js, dataService.js, and a mainCtrl.js file
* Link your style.css sheet and your js files to your index.html page
* In your index.html file create the basic structure of your html
  - Bootstrap your app with ```ng-app="quoteBook"```.
  - Bind your controller to your body tag with ```ng-controller="mainCtrl"```.
* In your app.js file create your angular app. Call it 'quoteBook';
* In your mainCtrl.js file set up your first controller. Call it 'mainCtrl'.

####
__Code__

```javascript
angular.module('quoteBook', []);
```

```javascript
angular.module('quoteBook').controller('mainCtrl', function($scope){

});
```

### Test

* In your index.html file before the body tag closes include script tags which link to all your Angular files in the 'js' folder.
* Now that your app and controller are set up and they're linked in your html page, make a property called 'test' on your $scope object in your controller. Set it equal to any string you choose.
* Verify that it works with {{test}} in your html page.
* If you see whatever text you entered into $scope.test in your view, continue to the next step. If not, check your console for any errors.

### Set up your Angular Service
####
Set up a service that hides an array of data.  The service should then allow you to: get, add, and remove data from that array via exposed functions.

Sample data:
```javascript
  var quotes = [
    { text: 'Life isn\'t about getting and having, it\'s about giving and being.', author: 'Kevin Kruse'},
    { text: 'Whatever the mind of man can conceive and believe, it can achieve', author: 'Napoleon Hill'},
    { text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein'},
    { text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.', author: 'Robert Frost'},
    { text: 'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart'},
    { text: 'Life is what happens to you while you\'re busy making other plans.', author: 'John Lennon'},
    { text: 'What even is a jQuery?', author: 'Tyler S. McGinnis'}
  ];
```

####
 Head over to your dataService.js file, 'get' the quoteBook module, create a service as a part of your 'quoteBook' app.
* After you've created a new service or factory and made sure you included the file in your index.html file, add the Sample data above and place it in your service. Do not bind it to 'this'.



* Now that we have our data, let's set up ways to access that data.
* Create three methods on your service, using the 'this' keyword.
  - getQuotes - Returns the quotes array.
  - addData - Takes a data object as an argument, verifies the data object has all the right properties (text and author), and that they have defined values, pushes that object to the quotes array.
  - removeData - Takes in the text of a quote, loops through the quotes array, and removes the proper quote from the array.

*Note: By using the above methods, we can control access to the quotes array. The only way to modify the quotes array outside of our service is to use one of these methods.*

Once you finish those methods, this service should be complete. Now notice how all the heavy logic is contained in this one service which we can inject into any controller we create. This makes things very modular and testable.

####
__Code__

```javascript
angular.module("quoteBook").service('dataService', function(){

  var quotes = [
      { text: 'Life isn\'t about getting and having, it\'s about giving and being.', author: 'Kevin Kruse'},
      { text: 'Whatever the mind of man can conceive and believe, it can achieve', author: 'Napoleon Hill'},
      { text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein'},
      { text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.', author: 'Robert Frost'},
      { text: 'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart'},
      { text: 'Life is what happens to you while you\'re busy making other plans.', author: 'John Lennon'},
      { text: 'What even is a jQuery?', author: 'Tyler S. McGinnis'}
      ];
  }

  this.getQuotes = function(){
    return quotes;
  };

//Returns true on success.
  this.addData = function(newQuote){
    if(newQuote.text && newQuote.author){
      quotes.push(newQuote);
      return true;
    }
    return false;
  };

  this.removeData = function(textToRemove){
    for (var i=0;i<quotes.length;i++){
      if (quotes[i].text.toLowerCase() === textToRemove.toLowerCase()){
        quotes.splice(i--,1);
      }
    }
  };
});
```

### Add Data from your Service to your Controller and Display it
####
Get the data from your service to display in your view via the controller

####
Inject your service in to your controller then add that data to the scope of your controller, then display it in your view
* Inject your dataService into your mainCtrl
* Use dataService to get the quotes array then add it to your $scope object in your mainCtrl.
* Once the quotes data is on your scope, use ng-repeat to loop over that data in your index.html page and display it.

####
__Code__
```javascript
angular.module("quoteBook").controller("mainCtrl",function($scope, dataService){

$scope.quotes = dataService.getQuotes();
})
```

```html
  <p ng-repeat = "quote in quotes track by $index">
    <span class = 'text'>{{quote.text}}</span>
    <span class = 'author'> -- {{quote.author}}</span>
    <button ng-click = "deleteMe(quote.text)">Delete</button>
  </p>
```

### Add Options to Filter, Add, and Remove Items from your Quotes Array
####
Finish the project by allowing the user to add, remove, and filter quotes

####
* Create three text input fields. One for adding new quote text, another for adding a new quote author, and a third to filter the quotes list.
* Make a button to handle creating a new quote, using ng-click and dataService.
* Then create a button on each quote that allows you to delete individual quotes using ng-click and the dataService. *Remember: This should take in the text to remove as an argument.*

####
__code__
```html
 <input type="text" placeholder="Add new quote!" ng-model='newQuoteText'>
  <input type="text" placeholder="Quotes author!" ng-model='newQuoteAuthor'>
  <button ng-click="addQuote()">Add Quote</button>
  <div>
    Filter: <input type="text" ng-model='filterText'/>
  </div>
  ...
  <p ng-repeat = "quote in quotes | filter: filterText">...</p>
```

```javascript
//mainCtrl

$scope.deleteMe = function(textToDelete){
  dataService.removeData(textToDelete);
}

$scope.addQuote = function(){
  var newQuote = {
    text:$scope.newQuoteText,
    author:$scope.newQuoteAuthor
  }
  if(dataService.addData(newQuote))
  {
    $scope.newQuoteText = '';
    $scope.newQuoteAuthor= '';
  }
}
```

## Black Diamond
### Persist your Quotes using your browser's local storage
####
* Store the quotes object in your browser's local storage.

You can do this with one of a few ways. You could use [`localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage), which you can learn more about at [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API). Recognize that values will need to be stored as a string, so you may need to convert your data to and from a string with [`JSON.stringify`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) and [`JSON.parse`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse).

Or, you could use Angular's [$cookie service](https://docs.angularjs.org/api/ngCookies/service/$cookies) to store your quotes object. Be mindful to use the documentation version that correlates with the correct Angular version you are using. Angular's $cookie has had some changes between different Angular versions.

## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250">
</p>

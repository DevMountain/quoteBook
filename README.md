quoteBook
=========

##Objectives
Demonstrate the ability to outsource data to an Angular service and then consume and filter through that data.
Live Version Here http://tylermcginnis.com/quoteBook/

##Day 1

###Step 1: Set up your Structure
The first step whenever you're setting up an Angular App is to set up your foundation then check if your controller is tied to the view as it should be. 
* Create an index.html and a style.css file
* Create a folder called js
* In the js folder, create an app.js, dataService.js, and a mainCtrl.js file
* Link your style.css sheet to your index.html page
* In your index.html file create the basic structure of your html, be sure to include ng-app="quoteBook" and ng-controller="mainCtrl" to the appropriate places
* In your app.js file set up 'home' for your angular app like below. Take note how you're going to include the [] as the second parameter. This tells Angular that you want to create a new module rather than just use an existing one. In all other files, we won't be using the [] because we want to use the module which has already been set.
```javascript
var app = angular.module('quoteBook', []);
```
* Now in your mainCtrl.js file set up your first controller (mainCtrl). The code will look like this
```javascript
var app = angular.module('quoteBook');

app.controller('mainCtrl', function(){
  
});
```
Once again note we're 'getting' the quoteBook module rather than 'setting' ([]) it. Also, it's really important to remember that whenever you add a js file, you need to include those in your index.html file as scripts. 
* In your index.html file before the "</body>" tag closes include "<script> </script>" tags which link to all your Angular files in the 'js' folder.
* Now that your app and controller are set up and they're linked in your html page, add a test property to your scope object in your controller then verify that it works {{test}} in your html page. 
* If you see whatever text you entered into $scope.test in your view, continue to the next step. If not, check your console for any errors. 


###Step 2: Set up your Angular Service
The whole point of this repo is to get used to having your main data originating from a service and not a controller. Head over to your dataService.js file, 'get' the quoteBook module, then add a property of service (or factory) to the app. It's important to remember the differences between a 'factory' and 'service' in Angular because they don't behave the same. If you use app.factory() make sure you create an object, add properties to it, then return that object. If you use app.service(), you add properties to the 'this' keyword. More details here http://tylermcginnis.com/angularjs-factory-vs-service-vs-provider/
* After you've created a new service or factory and made sure you included the file in your index.html file, add the following data in your service.
```javascript
  var quotes = [
    { text: 'Life isn’t about getting and having, it’s about giving and being.', author: 'Kevin Kruse'},
    { text: 'Whatever the mind of man can conceive and believe, it can achieve', author: 'Napoleon Hill'},
    { text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein'},
    { text: 'Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.', author: 'Robert Frost'},
    { text: 'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart'},
    { text: 'Life is what happens to you while you’re busy making other plans.', author: 'John Lennon'},
    { text: 'What even is a jQuery?', author: 'Tyler McGinnis'},
  ];
```
Notice we didn't put our quotes array directly on 'this' or your object you're going to return. That's because we don't want this data to be directly accessed from outside of this service. Instead, we're going to create 'getter' and 'setter' methods in order to get, add to, or remove parts of the quotes array making the quotes array 'private' to this service.


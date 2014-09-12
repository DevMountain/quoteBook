var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, dataService){
  $scope.quote = {};
  $scope.quotes = dataService.getData();
  $scope.showAddQuote = false;
  $scope.showRemoveQuote = false;
  $scope.showFilterQuotes = false;

  $scope.toggleAddQuote = function(){
    $scope.showAddQuote = !$scope.showAddQuote;
    $scope.showRemoveQuote = false;
    $scope.showFilterQuotes = false;
  };

  $scope.toggleRemoveQuote = function(){
    $scope.showRemoveQuote = !$scope.showRemoveQuote;
    $scope.showAddQuote = false;
    $scope.showFilterQuotes = false;
  };

  $scope.toggleFilterQuotes = function(){
    $scope.showFilterQuotes = !$scope.showFilterQuotes;
    $scope.showAddQuote = false;
    $scope.showRemoveQuote = false;
  }

  $scope.addQuote = function(){
    dataService.addData($scope.quote);
    $scope.quotes = dataService.getData();
    $scope.showAddQuote = false;
    $scope.quote = {};
  };

  $scope.removeQuote = function(){
    dataService.removeData($scope.removeQuoteText);
    $scope.showRemoveQuote = false;
    $scope.removeQuoteText = '';
  }
})
var app3 = angular.module('app3', []);

app3.controller('gListCtrl', function($scope){

  $scope.groceries = [
    {item: "Tomatoes", purchased: false},
    {item: "Chiles", purchased: false},
    {item: "Cacahuates", purchased: false},
    {item: "Tortillas", purchased: false},
    {item: "Cilantro", purchased: false},
    {item: "Frijoles", purchased: false}
  ];

  $scope.getList = function(){
    return $scope.showList ? "grocerylist.html" : "olgrocerylist.html";
  }

});

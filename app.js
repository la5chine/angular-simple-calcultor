(function () {
'use strict';

  angular.module('calculator', [])

  .controller('calculatorcontroller', function ($scope) {
$scope.name = "";
$scope.totalValue = 0;
$scope.displayNumeric = function () {
  var totalNumValue = calculatenum($scope.name);//calculate the value !!
  $scope.totalValue = totalNumValue;
}

function calculatenum (string) {
  var totalStringValue = 0;
  for(var i=0;i<string.length;i++){
    totalStringValue += string.charCodeAt(i);
  }
  return totalStringValue;

}

});


}())

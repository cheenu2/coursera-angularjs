(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchItems = "";
  $scope.message = "";

  $scope.checkLunchItems = function () {
    var items = parseStringItems($scope.lunchItems, ",");
    if($scope.lunchItems.length == 0 || items.length == 0) {
      $scope.message = "Please enter data first";
    } else {
      if(items.length <= 3) {
        $scope.message = "Enjoy!";
      }  else {
        $scope.message = "Too much!"
      }
    }
  };

  function parseStringItems(str, separator) {
    var tokens = str.split(separator);
    var items = tokens.filter(function (token) {
      return token.trim().length != 0;
    });
    return items;
  };
}

})();

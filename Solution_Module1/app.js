(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
$scope.message;

$scope.displayMessage= function(){
  var stringMsg=calculateItems($scope.item);
  $scope.message=stringMsg;
}

function calculateItems(string){
  var msg;
  var count=0;
  if(!string){
    msg="Please enter data first!";
    return msg;
  }
  var itemList=string.split(',');
  for(var i=0;i<itemList.length;i++)
  {
    count++;
  }

  if(count <= 3){
    msg= "Enjoy!";
  }
  else {
      msg= "Too Much!"
    }
  return msg;
}


}


})();

(function(){
"use strict";

angular.module('public').
controller('InfoController',InfoController)

InfoController.$inject=['savedInfo','ApiPath']
function InfoController(savedInfo,ApiPath){

  var ctrl=this;
  if(angular.equals({},savedInfo))
  ctrl.message="Not Signed Up Yet. Sign up Now!";
ctrl.obj=savedInfo;
ctrl.basePath = ApiPath;

}

})();

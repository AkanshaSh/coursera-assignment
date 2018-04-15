(function() {
"use strict";

angular.module('public').
service('FormService',FormService)

FormService.$inject=['$http']
function FormService($http){
  var service=this;
service.obj ={};
service.getDish= function(shortName){
  var response = $http ({
    method: "GET",
    url : 'https://akanshash-course5.herokuapp.com/menu_items/' + shortName + '.json'
  }) ;
return response;
}

service.saveData=function(firstName,lastName,email,phoneNum,shortName,name, description,category_short_name){
  var sData = {
    fName : firstName,
    lName : lastName,
    em : email,
    phone : phoneNum,
    sName : shortName,
    title: name,
    desc : description,
    imgName : category_short_name
  }
  service.obj=sData;
}

service.retrieveData = function(){
  return service.obj;
}
}

})();

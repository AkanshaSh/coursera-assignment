(function() {
"use strict";

angular.module('public').
controller('FormController',FormController)

FormController.$inject=['FormService']
function FormController(FormService){
  var ctrl=this;
  ctrl.firstName="";
  ctrl.lastName="";
  ctrl.email="";
  ctrl.phone="";
  ctrl.message="";
  ctrl.dish="";

  ctrl.submit= function(shortName){
    FormService.getDish(shortName).then(function(result){
      FormService.saveData(ctrl.firstName,ctrl.lastName,ctrl.email,ctrl.phone,ctrl.dish,result.data.name,result.data.description,result.data.category_short_name);
     ctrl.message="Your information has been saved!";
    }

    ).catch(function(error){
        ctrl.message="No such menu number exists!";
    }

    )
  }
}

})();

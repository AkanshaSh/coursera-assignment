(function(){
  'use strict';
  angular.module('MenuApp')
  .component('categoryList',{
    templateUrl : 'templates/categoriesComp.template.html',
    bindings :{
        categories : '<'
    }
  });
})();

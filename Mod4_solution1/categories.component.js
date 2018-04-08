(function(){
  'use strict';
  angular.module('MenuApp')
  .component('categoryList',{
    templateUrl : 'categoriesComp.template.html',
    bindings :{
        categories : '<'
    }
  });
})();

(function(){
'use strict';
angular.module('Data').controller('CategoriesController',CategoriesController);
CategoriesController.$inject=['items']
  function CategoriesController(items){
    var categoriesCtrl =this;
    categoriesCtrl.categories=[];
    for(var i=0; i< items.length; i++){
        categoriesCtrl.categories.push({shortName : items[i].short_name,
          descr : items[i].name
        });

    }
  }
})();

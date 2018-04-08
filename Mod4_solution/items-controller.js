(function(){
'use strict';
angular.module('Data').controller('ItemsController',ItemsController);
ItemsController.$inject=['item']
  function ItemsController(item){
    var itemsCtrl =this;
    itemsCtrl.itemDetail=[];
    for(var i=0;i<item.data.menu_items.length;i++){
      itemsCtrl.itemDetail.push(item.data.menu_items[i].name);
    }

  }
})();

(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var toBuyController=this;
  toBuyController.shoppingList=ShoppingListCheckOffService.toBuyList();

toBuyController.toBuyList =function(itemName,quantity,index){
   ShoppingListCheckOffService.boughtItem(itemName,quantity,index);
 }
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var alreadyBoughtController=this;
alreadyBoughtController.alreadyBoughtList = ShoppingListCheckOffService.alreadyBoughtList();

}


function ShoppingListCheckOffService(){
var service=this;

var toBuyList =[
  {
    name : "Cookies",
    quantity : "10"
  },
  {
    name : "Coke",
    quantity : "5"
  },
  {
    name : "Chips",
    quantity : "3"
  },
  {
    name : "Water Bottles",
    quantity : "10"
  },
  {
    name : "Chocolates",
    quantity : "10"
  }
];
var alreadyBoughtList=[];

 service.boughtItem = function(itemName, quantity,index){
  var item ={
    name : itemName,
    quantity : quantity
  };
  alreadyBoughtList.push(item);
  toBuyList.splice(index,1);
};


service.alreadyBoughtList = function (){
  return alreadyBoughtList;
}

service.toBuyList = function(){
  return toBuyList;
}

}




})();

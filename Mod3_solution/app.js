(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController',NarrowItDownController)
.controller('NarrowItDownDirectiveController',NarrowItDownDirectiveController)
.service('MenuSearchService',MenuSearchService)
.directive('foundItems',FoundItemsDirective);

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
  var menu =this;
  menu.searchTerm="";
  menu.founditem =[];
  menu.message="";
  menu.wait=false;        // boolean to show or hide the loader image
  menu.getMatchedItem = function(searchTerm){
    menu.founditem =[];
    menu.message="";
    menu.wait=false;
    if(searchTerm==""){
      menu.message="Please enter a search criteria!";
      return;
    }
      menu.wait=true;
MenuSearchService.getMatchedMenuItems().then( function(result){
  if(result.data.menu_items.length===0){
    menu.message="Nothing found.Please search with different criteria!";
  }
    for(var i=0; i< result.data.menu_items.length; i++){
      if(result.data.menu_items[i].description.includes(searchTerm)){
        menu.founditem.push(result.data.menu_items[i].name + " ," + result.data.menu_items[i].description + " ," + result.data.menu_items[i].short_name);
      }
    }
    if(menu.founditem.length===0){
        menu.message="Nothing found.Please search with different criteria!";
    }
  } ).catch(function(error){
        menu.message ="Service is not running! Please try again after sometime..";
    }).finally(function(){
      menu.wait=false;
    });;
}
 menu.removeItem =  function (itemIndex) {
    menu.founditem.splice(itemIndex,1);
  }

}

function FoundItemsDirective(){
  var ddo ={
   templateUrl : 'foundItem.html',
   scope:{
     items :  '<',
     removeItem: '&'
   },
   controller :'NarrowItDownDirectiveController as dirCtrl',
   bindToController : true
 };
   return ddo;
}

function NarrowItDownDirectiveController(){
  var dirCtrl=this;
}

MenuSearchService.$inject=['$http'];
function MenuSearchService($http){
var service=this;
var foundItems = [];

service.getMatchedMenuItems = function () {
  var response = $http ({
    method: "GET",
    url : 'https://davids-restaurant.herokuapp.com/menu_items.json'
  }) ;
return response;
};
}


})();

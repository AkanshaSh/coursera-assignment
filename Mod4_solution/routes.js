(function(){
  angular.module('MenuApp')
          .config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider']
function RoutesConfig($stateProvider,$urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider.state('home',{
    url:'/',
    templateUrl: '/templates/home.templates.html'
  })
  .state('categories',{
    url : '/categories',
    templateUrl: '/templates/categories.template.html',
    controller : 'CategoriesController as categoriesCtrl',
    resolve : {
      items :['MenuDataService',function(MenuDataService){
    return  MenuDataService.getAllCategories().then(function(result){
      return result.data;});
      }]
    }
  })
  .state('categoryItem',{
    url:'/category-item/{shortName}',
    templateUrl:'templates/items.template.html',
    controller : 'ItemsController as itemsCtrl',
    resolve :{
    item:     ['$stateParams','MenuDataService',function ($stateParams,MenuDataService) {
              return MenuDataService.getItemsForCategory($stateParams.shortName)
                .then(function (itemCat) {
                  return itemCat;
                });
            }]
          }
  })
  ;
}
})();

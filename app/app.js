'use strict';

angular.module('myApp',['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/crossover")
      
      $stateProvider
        .state('portfolio', {
            url: "/portfolio",
            abstract:true ,
            templateUrl: "app/portfolio/views/portfolio.html",
            controller:'portfolioController'
        })
          .state('portfolio.a', {
              url: '',
              templateUrl: "app/portfolio/views/a.html",
              controller: function($scope){
              	$scope.list = angular.copy($scope.navList).slice(0, 1);
                  $scope.navigateTo = function(navigate){
                  	$state.go(navigate);
                  }
              }
          })
          .state('portfolio.b', {
              url: "/b",
              templateUrl: "app/portfolio/views/b.html",
              controller: function($scope){
                  $scope.list = angular.copy($scope.navList).slice(0, 2);
                  $scope.navigateTo = function(navigate){
                  	$state.go(navigate);
                  }
              }
          })
          .state('portfolio.c', {
              url: "/c",
              templateUrl: "app/portfolio/views/c.html",
              controller: function($scope){
                  $scope.list = angular.copy($scope.navList).slice(0, 3);
                  $scope.navigateTo = function(navigate){
                  	$state.go(navigate);
                  }
                }
          	})
          .state('portfolio.d', {
              url: "/d",
              templateUrl: "app/portfolio/views/d.html",
              controller: function($scope,$state){
                  $scope.list = angular.copy($scope.navList).slice(0, 4);
                  $scope.navigateTo = function(navigate){
                  	$state.go(navigate);
                  }
                }
          	})
          .state('crossover', {
            url: "/crossover",
            templateUrl: "app/crossover/views/crossover.html",
            controller:'crossoverController'
        })   
    });
/*.config(function($routeProvider){
	$routeProvider.
		when('/',{
			templateUrl: 'app/portfolio/views/portfolio.html',
			controller: ''
		}).
		when('/phonebook/',{
			templateUrl: 'app/phonebook/views/phonebook.html',
			controller: 'goCtrl'
		}).
		when('/dictionary',{
			templateUrl: 'app/dictionary/views/dictionary.html',
			controller: 'wordCtrl'
		}).
		when('/todo',{
			templateUrl: 'app/todo/views/todo.html',
			controller: 'todoCtrl'
		}).
		otherwise({
			redirectTo:'/'
		});
});*/
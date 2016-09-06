angular.module('myApp')
.controller('portfolioController',['$scope', '$location',function($scope,$location){
	$scope.navList = [
	{
		name:'a',
		uhref:'#'
	},
	{
		name:'b',
		uhref:'#/portfolio/b'
	},
	{
		name:'c',
		uhref:'#/portfolio/c'
	},
	{
		name:'d',
		uhref:'#/portfolio/d'
	}

	];
	
}]);
angular.module('myApp').
controller('goCtrl',['$scope,$location',function($scope,$location){
	$scope.go = function(x){
		$location.path(x);
	}
}]);
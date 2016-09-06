angular.module('myApp')
.controller('wordCtrl', ['$scope','$http','dictionaryFactory', function($scope,$http,dictionaryFactory){
	$scope.words = [];
	// $scope.means = [];
	$scope.searchTemplate = "app/search.html";

	dictionaryFactory.getData().then(function(data){
	    angular.forEach(data, function(value, key){
			$scope.words.push({word: key, meaning: value});
		});
	},function(data){
		console.log(data);
	});
}
]);



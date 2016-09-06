angular.module('myApp').
controller('phoneCtrl',['$scope','phoneFactory',function($scope,phoneFactory){
	$scope.contacts = [{
	"name": "pruthvi",
	"phone": "8978271001",
	"birthday": "Dec 12, 1991"
},
{
	"name": "harish",
	"phone": "2347189101",
	"birthday": "July 24, 1991"
},
{
	"name": "rohit",
	"phone": "9030057522",
	"birthday": "Mar 26, 1992"
}];

	// addContact
	$scope.addContact = function(){
		if($scope.addForm.$valid){
				$scope.contacts.push({name: $scope.inputName, phone: $scope.inputNumber, birthday: $scope.inputDate});
				$scope.inputName = "";
				$scope.inputNumber = "";
				$scope.inputDate = "";
			}
		}

	phoneFactory.getData().then(function(data){
		angular.forEach(data, function(value, key){ //doubt
			$scope.contacts.push({name:value, phone:value, birthday: value});
		},function(data){
			console.log(data);
		});
	});
}]);
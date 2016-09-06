'use strict';

angular.module('myApp').
controller('todoCtrl',['$scope','$filter', function($scope, $filter){
	//Initial Tasks
	$scope.tasks = [{'todoText':'Homework','done':false}];

	//add tasks
	$scope.addTask = function(){
		$scope.tasks.push({todoText:$scope.todoInput, done:false});
		$scope.todoInput = "";
	}

	//Delete tasks 
	$scope.deleteTask = function(task){
		$scope.tasks.splice(task,1);
	}

	//remove checked tasks
	$scope.removeSelected = function(){
		var checkList = $scope.tasks;
		$scope.tasks = [];
		angular.forEach(checkList,function(task){
			if(!task.done)
				$scope.tasks.push(task);
		})
	}

	//clear all tasks
	$scope.clearAll = function(){
		$scope.tasks = [];
	}

	//Status: whether task is checked?
	$scope.ifChecked = function(){
		var checkStatus = $filter("filter")($scope.tasks,{done:true});
		$scope.taskLength = checkStatus.length;
		return $scope.taskLength;
	}
}]);
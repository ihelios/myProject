angular.module('myApp').factory('dictionaryFactory', function($http, $q){
    return {
        getData: function(text){
        	var def = $q.defer();

            $http.get("assets/data/demo.json")
            .success(function(data){
            	def.resolve(data);
			})
			.error(function(data) {
                def.reject(data);
            });

            return def.promise;
        }
    }
});











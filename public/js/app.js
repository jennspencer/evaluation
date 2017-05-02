(function(){
	var app = angular.module('libraryFetcherApp', []);
		
	var projects;

	app.controller('ProjectController', function($scope, $http) {
        
        $scope.searchProjects = function() {
            $scope.url = 'https://libraries.io/api/search?q=' + $scope.searchString + '&api_key=7fb8f1e564967350609950bb3d913b4a';
		    $http.get($scope.url).then(function(response) {
        	    projects = response.data;
        	    $scope.projects = projects;
    	    }).catch(function(error){
    		    console.log(error);
    	    });
	    };
    }); 

})();
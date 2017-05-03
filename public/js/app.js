(function(){
    var app = angular.module('libraryFetcherApp', []);

    var projects;

    app.controller('ProjectController', function($scope, $http) {

        $scope.searchProjects = function() {
            
            url = 'https://libraries.io/api/search?q=' + $scope.searchString + '&api_key=7fb8f1e564967350609950bb3d913b4a';
            
            if (!!$scope.searchString) {
                $http.get(url).then(function(response) {
                    projects = response.data;
                    projects = _.filter(projects, { platform: 'NPM' });
                    _.forEach(projects, function(project) {
                        if (project.versions.length === 0) {
                            project.versions.push({
                                number: project.latest_release_number,
                                published_at: project.latest_release_published_at,
                            });
                        }
                    });
                    $scope.projects = projects;
                }).catch(function(error){
                    console.log(error);
                });
            }
        };

        $scope.versionLimit = 5;

    }); 

})();
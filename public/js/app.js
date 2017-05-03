(function(){
    var app = angular.module('libraryFetcherApp', []);

    var projects;

    app.controller('ProjectController', function($scope, $http) {

        $scope.searchProjects = function() {
            $scope.projects = [];
            url = 'https://libraries.io/api/search?q=' + $scope.searchString + '&api_key=7fb8f1e564967350609950bb3d913b4a';
            $scope.errorMessage = false;

            if (!!$scope.searchString) {
                $scope.thinking = true;
                $http.get(url).then(function(response) {
                    projects = response.data;
                    if (projects.length === 0) $scope.errorMessage = true;
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
                    $scope.thinking = false;
                }).catch(function(error){
                    console.log(error);
                });
            }
        };

        $scope.versionLimit = 5;

    }); 

})();
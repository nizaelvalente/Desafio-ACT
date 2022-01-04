
app.controller("charactersController", function ($scope,characters, marvelApi) {
    $scope.characters = characters.data.data.results
    $scope.searchName = function (name) {
        marvelApi.getcharacterName(name).then(function(resolve){
            $scope.characters = resolve.data.data.results
        })
    }
});

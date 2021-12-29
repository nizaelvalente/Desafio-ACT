
angular.module('marvelCharacters').controller("charactersController", function ($scope, $http) {
    $http.get("https://gateway.marvel.com/v1/public/characters?ts=1&apikey=5a237863b3cc2061003cbbc4fe20dc06&hash=bd4b447a65ef5d6b174f87cf9db6d2db&limit=100").then(function (data) {
        $scope.characters = data.data.data.results
    });

    $scope.searchName = function (name) {
        let url = "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=5a237863b3cc2061003cbbc4fe20dc06&hash=bd4b447a65ef5d6b174f87cf9db6d2db"
        if (name) {
            url += '&nameStartsWith=' + name;
        }
        $http.get(url).then(function (data) {
            $scope.characters = data.data.data.results
        });
    }
});

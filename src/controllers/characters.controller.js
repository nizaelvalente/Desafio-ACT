
angular.module('marvelCharacters').controller("charactersController", function ($scope, $http) {
    $http.get("https://gateway.marvel.com/v1/public/characters?ts=1640814676774&apikey=9de9e3ed3e077ed85e20ad50e3e21d2d&hash=64b2185466d6dfd048f6726f3299cc32&limit=100").then(function (data) {
        $scope.characters = data.data.data.results
    });

    $scope.searchName = function (name) {
        let url = "https://gateway.marvel.com/v1/public/characters?ts=1640814676774&apikey=9de9e3ed3e077ed85e20ad50e3e21d2d&hash=64b2185466d6dfd048f6726f3299cc32"
        if (name) {
            url += '&nameStartsWith=' + name;
        }
        $http.get(url).then(function (data) {
            $scope.characters = data.data.data.results
        });
    }
});

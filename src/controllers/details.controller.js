angular.module('marvelCharacters').controller("detailsController", function ($scope, $http, $route) {
    $http.get(`https://gateway.marvel.com:443/v1/public/characters/${$route.current.params.id}?ts=1&apikey=5a237863b3cc2061003cbbc4fe20dc06&hash=bd4b447a65ef5d6b174f87cf9db6d2db`).then(function (data) {
        $scope.characterId =  data.data.data.results[0].comics.items
        $scope.characterName =  data.data.data.results[0].name
        $scope.characterImg =  data.data.data.results[0].thumbnail.path+'.'+data.data.data.results[0].thumbnail.extension
    });
});


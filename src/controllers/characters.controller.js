
angular.module('marvelCharacters').controller("charactersController", function ($scope, $http) {
    $http.get("https://gateway.marvel.com/v1/public/characters?ts=1&apikey=5a237863b3cc2061003cbbc4fe20dc06&hash=bd4b447a65ef5d6b174f87cf9db6d2db").then(function (data) {
        $scope.characters = data.data.data.results
        
    });
    $scope.searchName = function(name){
        $http.get("https://gateway.marvel.com/v1/public/characters?nameStartsWith="+name+"&ts=1&apikey=5a237863b3cc2061003cbbc4fe20dc06&hash=bd4b447a65ef5d6b174f87cf9db6d2db").then(function (data) {
            console.log(data)
            // return data.data.data.results
            $scope.characters = data.data.data.results
    
        });
      }

});

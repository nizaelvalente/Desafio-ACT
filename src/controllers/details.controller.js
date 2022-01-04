app.controller("detailsController", function ($scope, character) {
    $scope.characterId =  character.data.data.results[0].comics.items
    $scope.characterName =  character.data.data.results[0].name
    $scope.characterImg =  character.data.data.results[0].thumbnail.path+'.'+character.data.data.results[0].thumbnail.extension
    // $http.get(`https://gateway.marvel.com:443/v1/public/characters/${$route.current.params.id}?ts=1640814676774&apikey=9de9e3ed3e077ed85e20ad50e3e21d2d&hash=64b2185466d6dfd048f6726f3299cc32`).then(function (data) {
    // });
});


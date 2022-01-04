app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "components/main.html",
            controller: "charactersController",
            resolve:{
                characters: function(marvelApi){
                    return marvelApi.getcharacters()
                }
            }

        })

    $routeProvider
        .when("/details/:id", {
            templateUrl: "components/details.html",
            controller: "detailsController",
            resolve:{
                character: function(marvelApi,$route){
                    return marvelApi.getcharacterId($route.current.params.id)
                }
            }
        });
});
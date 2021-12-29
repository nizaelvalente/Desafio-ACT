angular.module("marvelCharacters").config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "components/main.html",
            controller: "charactersController"

        })

    $routeProvider
        .when("/details/:id", {
            templateUrl: "components/details.html",
            controller: "detailsController",
        });
});
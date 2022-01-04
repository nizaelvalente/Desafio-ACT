app.factory('marvelApi', function($http, apiConfig){

    let getcharacters = function(){
        return $http.get(`${apiConfig.url}?ts=${apiConfig.ts}&apikey=${apiConfig.apikey}&hash=${apiConfig.hash}&limit=100`)
    }
    let getcharacterId = function(id){
        return $http.get(`${apiConfig.url}/${id}?ts=${apiConfig.ts}&apikey=${apiConfig.apikey}&hash=${apiConfig.hash}`)
    }

    let getcharacterName = function(name){
        return $http.get(`${apiConfig.url}?ts=${apiConfig.ts}&apikey=${apiConfig.apikey}&hash=${apiConfig.hash}&nameStartsWith=${name}`)
    }

    
    return{getcharacters, getcharacterId, getcharacterName}
})
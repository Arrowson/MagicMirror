/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('weatherModule', [])

.factory('DSWeatherService', ['$sce', '$http', function($sce, $http){
    
    var dsweatherService = {};
    
    dsweatherService.getCurrentConditions = function(){
        var url = "https://api.darksky.net/forecast/7566d5595a5d7cfecae9a0b7812a1fea/28.3781200,-81.4928780?callback=JSON_CALLBACK";
        return $http.jsonp(url);
    };
    
    return dsweatherService;
}])
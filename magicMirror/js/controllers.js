angular.module('app.controllers', [])
  
.controller('page1Ctrl', ['$scope', '$stateParams', '$interval', 'DSWeatherService', '$ionicLoading', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $interval, DSWeatherService, $ionicLoading) {
    
    var wc = this;
    
    var age = Date.now();
    var first = true;
    
    wc.clock = "loading clock...";
    $scope.temp = 0;
    $scope.precipitation = 0;
    $scope.summary;
    
    $scope.counter = 1;
    
    $scope.startListening = function(){
        $scope.voiceContent = "This is a test";
    }
    
    wc.getWeather = function(){
        age = Date.now();

        $ionicLoading.show();
            DSWeatherService.getCurrentConditions()
            .then(function(res){
                console.log(res);
                $scope.temp = res.data.currently.apparentTemperature;
                $scope.precipitation = res.data.currently.precipProbability;
                $scope.summary = res.data.currently.summary;
                console.log($scope.temp);
                console.log($scope.precipitation);
            })
            .catch(function(err){
                $ionicLoading.show({
                    template: 'Could not load Weather. Try again later.',
                    duration: 3000
                });
                $ionicLoading.hide();
            });
        $ionicLoading.hide();
    }
    
    var tick = function(){
        $scope.clock = Date.now();
    }
    tick();
    $interval(tick, 1000);


    wc.getWeather();
    $interval(wc.getWeather,600000);
    
    
    
}

])
 
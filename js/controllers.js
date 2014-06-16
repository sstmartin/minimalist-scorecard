'use strict';

myApp.controller('HoleController',['$scope','$rootScope','CountService','RoundService',function($scope,$rootScope,CountService,RoundService) {
	var nexthole = CountService.getHole();
	var twnum = "Hole #" + nexthole;

	$scope.buttonMessage = 'Next Hole!'
	$scope.players = RoundService.getPlayers();

	if(nexthole === 6) {
		$scope.buttonMessage = 'Countinue';
	}

	$scope.nextHole = function() {
		if(nexthole === 6) {
			$rootScope.ons.navigator.pushPage('page5.html', {title: 'End of Round'});
		}
		else {
			$rootScope.ons.navigator.pushPage('page4.html', {title: twnum});
		}
	};



	//$scope.nexthole = "ons.navigator.pushPage('page4.html', { title: 'Hole # {{ nexthole }}' })";
}]);

myApp.controller('NewController',['$scope','HelpfulService','DbService','RoundService',function($scope,HelpfulService, DbService,RoundService) {

	$scope.hidden = false;

	$scope.add = function(name) {
		if(HelpfulService.arrayIndexOf($scope.players,name) === -1){
			$scope.errorMsg = '';
			RoundService.addPlayer(name);
		}
		else{
			$scope.errorMsg = 'Player already exists!';
		}
	}

	$scope.players = RoundService.getPlayers();

    var storage = window.localStorage;
    //storage.setItem("key", "number");
    //storage.setItem("key2","value2");
    storage.setItem('key','{"name":"Scott","hscore":"56"}');
    storage.setItem('keyName','0');
    var rawdata = storage.getItem('key');
    $scope.dbcode = JSON.parse(rawdata).name;

}]);
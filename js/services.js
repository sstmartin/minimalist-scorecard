'use strict';


myApp.service('HelpfulService', function() {
	this.arrayIndexOf = function(arr,obj) {
		for(var i=0; i < arr.length; i++){
			if(angular.equals(arr[i],obj)) {
				return i;
			}
		}
		return -1;
	};
})/

myApp.service('CountService', function() {
	var holenum = 1;

	this.getHole = function() {
		holenum = holenum + 1;
		return holenum;
	};
});


myApp.service('DbService', function() {

});

myApp.service('RoundService', function(CountService) {
	
	var players =['Default'];
	
	this.addPlayer = function(name) {
		players.push(name);
	}; 

	this.getPlayers = function() {
		return players;
	};

});
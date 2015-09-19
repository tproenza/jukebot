app.controller('JukeQueueCtrl', function ($scope, $http, jukeQueue, controlPanel) {
	
	$scope.connect = controlPanel.connect;
	$scope.playSong = controlPanel.playSong;
	$scope.stopSong = controlPanel.stopSong;
	$scope.msgFromScope = "...And I'm a message from the HomeController scope, just so you know that I work!";

});
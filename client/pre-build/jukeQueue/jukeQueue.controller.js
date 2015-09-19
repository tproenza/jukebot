app.controller('JukeQueueCtrl', function ($scope, $http, jukeQueue) {
	
	$scope.connect = jukeQueue.initSession;
	$scope.msgFromScope = "...And I'm a message from the HomeController scope, just so you know that I work!";

});
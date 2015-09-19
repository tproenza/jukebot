app.controller('JukeQueueCtrl', function($scope, ControlFac) {
  
  $scope.songList = ControlFac.songQueue

});
app.controller('MediaCtrl', function($scope, ControlFac) {

	// () => {
	// 	ControlFac.getSongs()
	// 	.then(function(songs){
	// 		$scope.songList = songs;
	// 	})
	// }

	$scope.songList = [
		{
			uri: 'http://www.stephaniequinn.com/Music/Allegro%20from%20Duet%20in%20C%20Major.mp3',
			title: 'randomn song'
		},
		{
			uri: 'http://www.stephaniequinn.com/Music/Canon.mp3',
			title: 'another randomn song'
		}
	]

  $scope.inputSong = function(newSong){
  	$scope.songList.push(newSong)
  	$scope.newSong = null;
  }
  $scope.playSong = function(song){
  	ControlFac.songQueue.push(song);
  }
  
});
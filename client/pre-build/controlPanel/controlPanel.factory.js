app.factory('ControlFac', function($http){
	var songQueue = [
		{
			uri: 'http://www.stephaniequinn.com/Music/Allegro%20from%20Duet%20in%20C%20Major.mp3',
			title: 'randomn song'
		}
	]

	return {
		songQueue: songQueue,
		getSongs: function(){
			$http.get('/songs')
		},
		addSong: function(newSong){
			// return $http.put()
		}
	}
})
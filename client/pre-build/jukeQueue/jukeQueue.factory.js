app.factory('jukeQueue', function ($http, controlPanel) {

	var factory = {};
	// var currentJuke = controlPanel.currentJuke;

	var playSong = function () {
		// var songToPlay = currentJuke.songQueue.shift();
		var songURI = songToPlay.uri;
		//more here
	};

	factory.playSong = playSong;

	return factory;
});

/*
var req = {
 method: 'POST',
 url: 'http://example.com',
 headers: {
   'Content-Type': undefined
 },
 data: { test: 'test' }
}
*/
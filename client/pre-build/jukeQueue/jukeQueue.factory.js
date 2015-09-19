app.factory('jukeQueue', function ($http, controlPanel) {

	var factory = {};
	var currentHubSession = controlPanel.currentJuke;

	var playSong = function () {
		var songToPlay = factory.currentJuke.songQueue.shift();
		var songURI = songToPlay.uri;
		//more here
	};

	factory.playSong = playSong;

	return factory;
});
// .run();

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
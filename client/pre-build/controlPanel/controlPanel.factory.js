app.factory('controlPanel', function ($http) {

	var factory = {};
	var harmonHubIp = 'http://10.0.1.4:8080';
	var currentHubSession = {};
	
	var getJuke = function (id) {
		var url = id ? '/api/juke/' + id : '/api/juke';

		return $http.get(url).then(function (response){
			var juke = response.data;
			factory.currentJuke = juke;
			return juke;
		});
	};

	var initSession = function () {
		var initSessionURL = harmonHubIp + "/v1/init_session";

		return $http.get(initSessionURL).then(function (response){
			console.log('init_session factory',response.data);
			return currentHubSession.SessionID = response.data.SessionID;
		});
	};

	factory.getJuke = getJuke;
	factory.currentJuke = {};
	factory.initSession = initSession;

	return factory;
});
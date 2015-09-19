app.factory('controlPanel', function ($http, $q) {

	var factory = {};
	var harmonHubIp = 'http://10.0.1.4:8080';
	var currentHubSession = {};

	function getRandomInt(min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
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

			console.log('got seshId', response.data.SessionID);
			return currentHubSession.SessionID = response.data.SessionID;
		});
	};

	var getAvailableDevices = function (sessionID) {
		var getDevicesURL = harmonHubIp + '/v1/device_list?SessionID=' + sessionID;
		
		return $http.get(getDevicesURL).then(function (response){
			console.log('device_list', response.data);
			return currentHubSession.availableDevices = response.data.DeviceList;
		});
	};

	var connect = function () {
		initSession().then(function (seshId){
			return getAvailableDevices(seshId);
		})
		.then(function (availDevices) {
			var useable = availDevices.filter(function (device) {
				return device.Active; //&& !device.IsPlaying;
			});

			var idx = getRandomInt(0, useable.length);

			var deviceToUse = useable[idx];

			console.log('to use', deviceToUse);

			currentHubSession.currentSpeaker = deviceToUse;

			var addDeviceToSessionURL = harmonHubIp + '/v1/add_device_to_session?SessionID='+ currentHubSession.SessionID +'&DeviceID=' + deviceToUse.DeviceID;

			return $http.get(addDeviceToSessionURL);
		})
		.then(function (response) {
			var speakerAdded = response.data.Result;

			console.log('device added succesfully?', speakerAdded);

			if (!speakerAdded) {
				console.log('failed to add speaker');
				return $q.when(speakerAdded);
			} else {
				console.log('Added speaker: ' + speakerAdded.GroupName);
				return $q.when(speakerAdded);
			}
		})
		.catch(console.warn);
	};

	factory.getJuke = getJuke;
	factory.currentJuke = {};
	factory.connect = connect;

	return factory;
});

/*
Active: true
DeviceID: "2586126661808"
DeviceName: "Omni 10"
GroupID: "2586126661"
GroupName: "shower"
IPAddress: "10.0.1.24"
IsPlaying: true
MacAddress: "b0:38:29:21:5a:02"
ModelName: "Omni 10"
Port: 44055
Role: 21
Version: "0.1.6.2"
Volume: 14
WifiSignalStrength: -50
*/

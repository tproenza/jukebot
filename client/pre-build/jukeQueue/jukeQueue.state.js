app.config(function($stateProvider) {
    $stateProvider.state('jukeQueue', {
        url: '/jukeQueue',
        templateUrl: '/pre-build/jukeQueue/jukeQueue.html',
        controller: 'JukeQueueCtrl'
    });
});
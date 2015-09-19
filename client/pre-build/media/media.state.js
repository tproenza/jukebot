app.config(function ($stateProvider) {
    $stateProvider.state('media', {
        url: '/media',
        templateUrl: '/pre-build/media/media.html',
        controller: 'MediaCtrl'
    });
});
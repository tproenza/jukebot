app.config(function ($stateProvider) {
    $stateProvider.state('media', {
        url: '/media',
        // views: {
        // 	"media": {template: "media.media"}
        // }
        templateUrl: '/pre-build/media/media.html',
        controller: 'MediaCtrl'
    });
});
var app = angular.module('JukeBot', ['ui.router', 'ngMaterial']);

app.config(function ($urlRouterProvider, $locationProvider, $mdIconProvider) {
   // This turns off hashbang urls (/#about) and changes it to something normal (/about)
   $locationProvider.html5Mode(true);
   // If we go to a URL that ui-router doesn't have registered, go to the "/" url.
   $urlRouterProvider.otherwise('/jukeQueue');

   $mdIconProvider
       .iconSet('social', 'img/icons/sets/social-icons.svg', 24)
       .iconSet('device', 'img/icons/sets/device-icons.svg', 24)
       .iconSet('communication', 'img/icons/sets/communication-icons.svg', 24)
       .defaultIconSet('img/icons/sets/core-icons.svg', 24);
});


var homeModule = angular.module('homeModule', ['ngRoute', 'ngSanitize', 'ui.bootstrap', 'ngAnimate'])
  .config(function ($routeProvider, $locationProvider) {
      $routeProvider.when('/Home', { templateUrl: './App/Home/Views/Home.html', controller: 'rootViewModel' });
      $routeProvider.otherwise({ redirectTo: '/Home' });
      $locationProvider.html5Mode(true);
  });


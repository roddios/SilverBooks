

var homeModule = angular.module('homeModule', ['ngRoute', 'ngSanitize', 'ui.bootstrap', 'ngAnimate'])
  .config(function ($routeProvider, $locationProvider) {
      $routeProvider.when('/Home', { templateUrl: './App/Home/Views/Home.html', controller: 'rootViewModel' });
      $routeProvider.when('/Home/Summary', { templateUrl: './App/Home/Views/Summary.html', controller: 'summaryViewModel' });

      $routeProvider.otherwise({ redirectTo: '/Home' });
      $locationProvider.html5Mode(true);
  });

homeModule.factory('HomeService', HomeService);
homeModule.factory('helper', function ($http, $q, $window, $location, $rootScope) { return MyApp.helper($http, $q, $window, $location, $rootScope); });


homeModule.filter('highlight', function($sce) {
    return function (text, phrase) {
        if (phrase) text = text.replace(new RegExp('(' + phrase + ')', 'gi'),
          '<span class="highlighted">$1</span>')

        return $sce.trustAsHtml(text)
    };
});



homeModule.directive("rotateFlip", function () {
    var first = true;
    return {
        restrict: "A",
        scope: {
            flag: "=rotateFlip"
        },
        link: function (scope, element) {
            scope.$watch("flag", function () {
                _toggle(scope, element, !first);
                first = false;
            });

            function _toggle(scope, element) {
                element.toggleClass("rotated", scope.flag);
            }
        }
    }
});

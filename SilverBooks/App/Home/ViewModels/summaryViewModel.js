
homeModule.controller("summaryViewModel", function ($scope, $http, $q, $routeParams, $window, $location, HomeService, helper) {

    $scope.selectedBook = null;
    $scope.HomeService = HomeService;

    var initialize = function () {

        if (HomeService.selectedBook != null)
            $scope.selectedBook = HomeService.selectedBook;
  
      

    }
    $scope.goBack = function () {
        helper.navigate('Home');
    }
  

    initialize();
});
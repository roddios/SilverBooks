
homeModule.controller("summaryViewModel", function ($scope, HomeService, helper) {

    $scope.selectedBook = null;
    $scope.HomeService = HomeService;
  

    var initialize = function () {

        $scope.title = "This is the Summary view";

        if (HomeService.selectedBook != null)
            $scope.selectedBook = HomeService.selectedBook;
    }

    initialize();

    $scope.goBack = function () {
        helper.navigate('Home');
    }

});
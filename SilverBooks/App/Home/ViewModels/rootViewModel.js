
homeModule.controller("rootViewModel", function ($scope, $http, $q, $routeParams, $window, $location, HomeService, helper) {

    $scope.pageHeading = '';
    $scope.books = [];
    $scope.HomeService = HomeService;

    var initialize = function () {

        $scope.heading = "Welcome to SilverBooks. We sell rare books and comics";
        $scope.title = "You are at Home";
        $scope.rotated = false;

        getBooks(); // calls the api to get list of books
    }

    initialize();

    $scope.rotate = function () {
        $scope.rotated = !$scope.rotated;
    };

    $scope.goToSummary = function (book) {
        HomeService.selectedBook = book;
        helper.navigate('Home/Summary');
    }

    $scope.addToCart = function (book) {
        // add to cart TODO:
        alert(book.Name + ' is added to the cart!');
    }


    function getBooks() {
        debugger;
        HomeService.getBooks(0, function (result) {
            // on success
            $scope.books = result;
        }, function (error) {
            // failed
            alert(error);
        })
    }

});
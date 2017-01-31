
homeModule.controller("rootViewModel", function ($scope, $http, $q, $routeParams, $window, $location, HomeService, helper) {

    $scope.pageHeading = '';
    $scope.books = [];
    $scope.HomeService = HomeService;

    var initialize = function () {

        $scope.pageHeading = "Welcome to SilverBooks. We sell rare books and comics";

        $scope.addToCart = function (book) {
            // add to cart TODO:
            alert(book.name + ' is added to the cart!');
        }

        $scope.goToSummary = function (book) {
            HomeService.selectedBook = book;
            helper.navigate('Home/Summary');
        }

        $scope.rotated = false;

        $scope.rotate = function () {
            $scope.rotated = !$scope.rotated;
        };

        getBooks();
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

    initialize();
});
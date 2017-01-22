
homeModule.controller("rootViewModel", function ($scope, $http, $q, $routeParams, $window, $location) {

    $scope.pageHeading = '';
    $scope.books = null;

    var initialize = function () {

        $scope.pageHeading = "Welcome to SilverBooks. We sell rare books and comics";

        $scope.books = [
              { name: 'The Winter Over', img: 'https://images-na.ssl-images-amazon.com/images/I/51G4yhDlZKL.jpg', price: 30 },
              { name: 'In the Shadow of Lakecrest', img: 'https://images-na.ssl-images-amazon.com/images/I/51OZyWIGZrL.jpg', price: 25 },
              { name: 'Tools of Titans', img: 'https://images-na.ssl-images-amazon.com/images/I/51M-tW14QgL._SX387_BO1,204,203,200_.jpg', price: 14 }
        ];


        $scope.addToCart = function(book)
        {
            // add to cart TODO:
            alert(book.name + ' is added to the cart!');
        }
    }

    initialize();
});
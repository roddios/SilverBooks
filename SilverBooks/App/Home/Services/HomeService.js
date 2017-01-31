'user strict';

var HomeService = function (helper) {

    var factory = {};
    factory.selectedBook = null;

    var _getBooks = function (bookId, success, failure) {

        if (bookId == null || bookId == undefined)
            bookId = 0;

        var data = null;

        if (bookId != null) {
            return helper.apiGet('api/v1/books/' + bookId, data,
              function (result) {
                  success(result.data);
              },
              function (responseError) {
                  return failure(responseError);
              });
        }
    }

    factory.getBooks = _getBooks;

    return factory;
};

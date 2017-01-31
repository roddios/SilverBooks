
/* Helper function to be shared across */
(function (myApp) {

    var helper = function ($http, $q, $window, $location, $rootScope) {

        var self = this;

        var serviceBase = "http://localhost:55742/";

        self.apiGet = function (uri, data, success, failure, always) {
            self.modelIsValid = true;
            var randomUri = uri + '?hash_id=' + Math.random();

            $http.get(serviceBase + randomUri, data)
                .then(function (result) {
                    success(result);
                    if (always != null)
                        always();

                }, function (result) {
                    if (failure != null) {
                        failure(result);
                    }
                    else {
                        var errorMessage = result.status + ':' + result.statusText;
                        if (result.data != null && result.data.Message != null)
                            errorMessage += ' - ' + result.data.Message;
                        self.modelErrors = [errorMessage];
                        self.modelIsValid = false;
                    }
                    if (always != null)
                        always();
                });
        }

        self.apiPost = function (uri, data, success, failure, always) {
            self.modelIsValid = true;
            $http.post(serviceBase + uri, data)
                .then(function (result) {
                    success(result);
                    if (always != null)
                        always();
                }, function (result) {
                    if (failure != null) {
                        failure(result);
                    }
                    else {
                        var errorMessage = result.status + ':' + result.statusText;
                        if (result.data != null && result.data.Message != null)
                            errorMessage += ' - ' + result.data.Message;
                        self.modelErrors = [errorMessage];
                        self.modelIsValid = false;
                    }
                    if (always != null)
                        always();
                });
        }

        self.apiJsonPost = function (uri, data, success, failure, always) {
            $http({
                url: serviceBase + uri,
                method: "POST",
                data: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' }
            }).then(function (result) {
                success(result);
                if (always != null)
                    always();
            }, function (result) {
                if (failure != null) {
                    failure(result);
                }
                else {
                    var errorMessage = result.status + ':' + result.statusText;
                    if (result.data != null && result.data.Message != null)
                        errorMessage += ' - ' + result.data.Message;
                    self.modelErrors = [errorMessage];
                    self.modelIsValid = false;
                }
                if (always != null)
                    always();
            });
        }

        self.goBack = function () {
            $window.history.back();
        }

        self.navigateTo = function (path) {
            $location.path(MyApp.rootPath + path);
        }

        self.navigate = function (path) {
            $location.path(path);
        }

        self.refreshPage = function (path) {
            $window.location.href = MyApp.rootPath + path;
        }

        self.reloadPage = function () {
            $window.location.reload();
        }

        self.isEmptyObject = function (obj) {
            for (var prop in obj) {
                if (obj.hasOwnProperty(prop))
                    return false;
            }
            return true;
        }

        self.isNumeric = function (n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        }

        self.arrayContains = function (needle, arrhaystack) {
            return (arrhaystack.indexOf(needle) > -1);
        }

        self.getWebVersion = function () {
            var version = configSettings.webVersion;
            return version;
        }

        return this;
    };

    myApp.helper = helper;

}(window.MyApp));

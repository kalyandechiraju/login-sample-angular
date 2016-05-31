(function() {
    var app = angular.module('loginapp', []);

    app.controller('LoginController', function($scope) {
        $scope.isLoggedIn = false;
        //this.username = email.
        $scope.loginUser = function() {
            $scope.isLoggedIn = true;
            $scope.username = $scope.email;
        };

        $scope.logoutUser = function() {
            $scope.isLoggedIn = false;
            $scope.email = null;
            $scope.password = null;
        };
    });
})();

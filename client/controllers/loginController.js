/**
 * Created by Vijay on 2/2/16.
 */

(function(){
    var loginController = function($scope) {
        $scope.loginWithFacebook = function(){
            console.log("Logging in with Facebook");
        };

    };

    loginController.$inject = ['$scope'];
    angular.module('loginApp').controller('loginController',loginController);
})();
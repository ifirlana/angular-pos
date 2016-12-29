/**
 * Created by ikhlasfirlana on 12/29/16.
 */
"use strict";

angular
    .module("App.login_controller", [])
    .controller("App.login_controller.Login", [
        "$scope",
        "Login",
        function ($scope, Login) {
            $scope.title = "Login";
            $scope.button_login = function () {
                new Login("200", "404");
            };
        }
    ]);
"use strict";

// Declare app level module which depends on views, and components
angular.module("App", [
    "ngRoute",
    "ui.router",
    // Dependency Controller
    "App.login_controller",
    "App.firebase_factory"
])
    .config([
        "$urlRouterProvider",
        "$stateProvider",
        function ($urlRouterProvider, $stateProvider) {
            $urlRouterProvider
                .otherwise(function ($injector, $location) {
                    var state = $injector.get("$state");
                    state.go("login");
                    return $location.path();
                });
            // Route URL and Display template
            $stateProvider
                .state("200", {
                    "url": "/200",
                    "templateUrl": "view/view_200.html"
                })
                .state("404", {
                    "url": "/404",
                    "templateUrl": "view/view_404.html"
                })
                // Loading
                // for all checking and load data
                .state("loading", {
                    "url": "/loading"
                })
                // Login
                // Button click login
                .state("login", {
                    "url": "/login",
                    "controller": "App.login_controller.Login",
                    "templateUrl": "components/login/login_view.html",
                    "resolve": {
                        "Login": "App.firebase_factory.SignInGoogle"
                    }
                });
        }
    ])
    // <head>
    // create custom load header
    .controller("App.head_controller", [
        "$scope",
        function ($scope) {
            $scope.title = "AngularJs";
            $scope.description = "";
            console.log("-header-");
        }
    ]);
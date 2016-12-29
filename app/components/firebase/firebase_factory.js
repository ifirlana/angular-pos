/**
 * Created by ikhlasfirlana on 12/29/16.
 */
"use strict";

firebase.initializeApp(Config);
angular
    .module("App.firebase_factory", [
        "ngRoute",
        "ui.router",
        "firebase"
    ])
    .constant("Db", Database)
    .factory("App.firebase_factory.SignInGoogle", [
        "$firebaseAuth",
        "$state",
        function ($firebaseAuth, $state) {
            return function (state_success, state_error) {
                var auth = $firebaseAuth();
                auth.$signInWithPopup("google")
                    .then(function (user) {
                        console.log("Verified");
                        console.log(user);
                        // $location.url(go_direct);
                        $state.go(state_success);
                    })
                    .catch(function (error) {
                        console.log("error");
                        console.log(error);
                        // $location.url(go_direct);
                        $state.go(state_error);
                    });
            };
        }
    ]);
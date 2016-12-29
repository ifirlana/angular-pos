/**
 * Created by ikhlasfirlana on 12/28/16.
 */
var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    storageBucket: ""
};
firebase.initializeApp(config);
angular
    .module("App.config_firebase", ["firebase"])
    .constant("Db", {});
'use strict';


var card = require("pages/card/card");
// var content = require("pages/content/content");
// var eventlog = require("pages/eventlog/eventlog");
// var camera = require("pages/camera/camera");
// var reader = require("pages/reader/reader");
// var location = require("pages/location/location");
// var imgs = require("pages/imgs/imgs");

/**
 * Route configuration for the RDash module.
 */
var app = angular.module('RDash');
app.config(function ($stateProvider, $urlRouterProvider,$controllerProvider) {

    // For unmatched routes
    $urlRouterProvider.otherwise('/card');

    // Application routes
    $stateProvider
        .state('card', card);
        // .state('content', content)
        // .state('eventlog', eventlog)
        // .state('reader', reader)
        // .state('camera', camera)
        // .state('location', location)

        // .state('imgs', imgs)
    app.register = {
        controller: $controllerProvider.register
    };
});
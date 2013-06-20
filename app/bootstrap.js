/*global requirejs*/

// This is the bootstrap file
// It contains the loader configuration as well as the application bootstrap

// Loader configuration
requirejs.config({
    baseUrl: './dev/src',
    paths: {
        // Vendors
        'mout': '../vendor/mout/src',
        'events-emitter': '../vendor/events-emitter/src',
        'address': '../vendor/address/src',
        'jquery': '../vendor/jquery/jquery',
        'doT': '../vendor/doT/doT',
        'bootstrap': '../vendor/bootstrap/js/bootstrap',
        'text': '../vendor/requirejs-text/text',
        'has': '../vendor/has/has',

        // App & config
        'app': '../app',
        'app-config': '../app/config/config_dev',

        // Services
        'services/broadcaster': '../vendor/spoon.js/src/core/Broadcaster/BroadcasterFactory',
        'services/address': '../vendor/spoon.js/src/core/Address/AddressFactory',
        'services/state': '../vendor/spoon.js/src/core/StateRegistry/StateRegistryFactory'
    },
    shim: {
        'handlebars': {
            exports: 'Handlebars'
        }
    },
    packages: [
        // css plugin
        {
            name: 'css',
            location: '../vendor/curl-css',
            main: 'index'
        },
        // spoon
        {
            name: 'spoon',
            location: '../vendor/spoon.js/src'
        }
    ],
    urlArgs: (new Date()).getTime()    // Fix cache issues
});

// Application bootstrap
require([
    'Application/ApplicationController',
    'services/state',
    'jquery'
], function (ApplicationController, stateRegistry, $) {

    'use strict';

    $(document).ready(function () {
        // Initialize the Application controller
        var appController = new ApplicationController();

        // Listen to the state change event
        stateRegistry.on('change', appController.setState, appController);

        // Call parse() to make the state registry read the address value
        stateRegistry.parse();
    });
});
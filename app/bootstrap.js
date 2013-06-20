/*global requirejs*/

// This is the bootstrap file
// It contains the loader configuration as well as the application bootstrap

// Loader configuration
requirejs.config({
    baseUrl: './dev/src',
    paths: {
        // Components
        'mout': '../components/mout/src',
        'events-emitter': '../components/events-emitter/src',
        'address': '../components/address/src',
        'jquery': '../components/jquery/jquery',
        'doT': '../components/doT/doT',
        'bootstrap': '../components/bootstrap/js/bootstrap',
        'text': '../components/requirejs-text/text',
        'has': '../components/has/has',

        // App & config
        'app': '../app',
        'app-config': '../app/config/config_dev'
    },
    shim: {
        'handlebars': {
            exports: 'Handlebars'
        }
    },
    map: {
        '*': {
            // Spoon
            'spoon': '../components/spoon.js/src/index',

            // Spoon aliases
            'spoon/Controller': '../components/spoon.js/src/core/Controller',
            'spoon/View': '../components/spoon.js/src/core/View',

            // Spoon services
            'services/broadcaster': '../components/spoon.js/src/core/Broadcaster/BroadcasterFactory',
            'services/address': '../components/spoon.js/src/core/Address/AddressFactory',
            'services/state': '../components/spoon.js/src/core/StateRegistry/StateRegistryFactory'
        }
    },
    packages: [
        // CSS plugin
        {
            name: 'css',
            location: '../components/curl-css',
            main: 'index'
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
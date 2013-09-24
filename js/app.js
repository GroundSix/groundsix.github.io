requirejs.config({
    'baseUrl': 'js/libs',
    'paths': {
    	jquery: '../vendor/jquery',
    	zepto: '../vendor/zepto',
        googlemaps: 'google.map',
        typekit: 'http://use.typekit.net/xpw2mtu',
        foundation: "foundation/foundation",
        "foundation.alerts": "foundation/foundation.alerts",
        "foundation.clearing": "foundation/foundation.clearing",
        "foundation.cookie": "foundation/foundation.cookie",
        "foundation.dropdown": "foundation/foundation.dropdown",
        "foundation.forms": "foundation/foundation.forms",
        "foundation.joyride": "foundation/foundation.joyride",
        "foundation.magellan": "foundation/foundation.magellan",
        "foundation.orbit": "foundation/foundation.orbit",
        "foundation.placeholder": "foundation/foundation.placeholder",
        "foundation.topbar": "foundation/foundation.topbar",
        "foundation.reveal": "foundation/foundation.reveal",
        "foundation.section": "foundation/foundation.section",
        "foundation.tooltips": "foundation/foundation.tooltips",
        "foundation.topbar": "foundation/foundation.topbar"
    },
    'shim': {
    	'waypoints.min': ['jquery'],
    	'scrollto': ['jquery'],
    	foundation: {
            deps: ["jquery"]
        },
        "foundation.alerts": {
            deps: ["foundation"]
        },
        "foundation.clearing": {
            deps: ["foundation"]
        },
        "foundation.cookie": {
            deps: ["foundation"]
        },
        "foundation.dropdown": {
            deps: ["foundation"]
        },
        "foundation.forms": {
            deps: ["foundation"]
        },
        "foundation.joyride": {
            deps: ["foundation"]
        },
        "foundation.magellan": {
            deps: ["foundation"]
        },
        "foundation.orbit": {
            deps: ["foundation"]
        },
        "foundation.placeholder": {
            deps: ["foundation"]
        },
        "foundation.reveal": {
            deps: ["foundation"]
        },
        "foundation.section": {
            deps: ["foundation"]
        },
        "foundation.tooltips": {
            deps: ["foundation"]
        },
        "foundation.topbar": {
            deps: ["foundation"]
        }
    }
});

// Load in foundation and call it on $(document).
requirejs(['jquery',
        "foundation.alerts",
        "foundation.clearing",
        "foundation.cookie",
        "foundation.dropdown",
        "foundation.forms",
        "foundation.joyride",
        "foundation.magellan",
        "foundation.orbit",
        "foundation.placeholder",
        "foundation.topbar",
        "foundation.reveal",
        "foundation.section",
        "foundation.tooltips",
        "foundation.topbar",
], function ($) {
    $(document).foundation();
});

// Not the most elegant way, but Google don't allow async loading :(
requirejs(['googlemaps']);

// Load the main module.
requirejs(['../main']);
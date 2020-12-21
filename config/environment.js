'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'lib-app',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },
    
    firebase: {
      apiKey: "AIzaSyCDGuhDI8EdiDJdwEPGkYtI5AJS0H3AMHA",
      authDomain: "ember-lib-app-d6a92.firebaseapp.com",
      databaseURL: "https://ember-lib-app-d6a92-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "ember-lib-app-d6a92",
      storageBucket: "ember-lib-app-d6a92.appspot.com",
      messagingSenderId: "594248948924",
      appId: "1:594248948924:web:dd2c20d7b1cddc6020c4b9",
      measurementId: "G-BTH0CSTH0K"
    },
  
  
    // if using ember-cli-content-security-policy
    contentSecurityPolicy: {
      'script-src': "'self' 'unsafe-eval' apis.google.com",
      'frame-src': "'self' https://*.firebaseapp.com",
      'connect-src': "'self' wss://*.firebaseio.com https://*.googleapis.com"
    },
  
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};

/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'car-searcher',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };


  ENV.contentSecurityPolicy = {
    'default-src': '\'none\'',
    'script-src': '\'self\' \'unsafe-eval\' \'unsafe-inline\' http://www.cartrawler.com',
    'font-src': '\'self\' data:  ',
    'connect-src': '\'self\' http://www.cartrawler.com',
    'img-src': '\'self\'data: https://cdn.cartrawler.com/',
    'style-src': '\'self\' \'unsafe-inline\'',
    'media-src': '\'self\' http://www.cartrawler.com ',
    'child-src': 'http://www.cartrawler.com'
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
  }

  if (environment === 'production') {

  }

  return ENV;
};

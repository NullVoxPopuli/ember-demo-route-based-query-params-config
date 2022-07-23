import EmberRouter from '@ember/routing/router';
import config from 'ember-demo-route-based-query-params-config/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {});

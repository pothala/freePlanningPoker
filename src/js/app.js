'use strict';
import angular from 'angular';

import constants  from './config/app.constants';
import appConfig  from './config/app.config';
import 'angular-ui-router';
import 'angular-smart-table';
import 'angular-resource';
import 'angular-ui-bootstrap';
import './config/app.templates';
import './layout';
import './components';
import './home';
import './services';

const requires = [
  'ui.router',
  'ui.bootstrap',
  'smart-table',
  'ngResource',
  'templates',
  'app.layout',
  'app.components',
  'app.services',
  'app.home'
];

window.app = angular.module('app', requires);

angular.module('app').constant('AppConstants', constants);

angular.module('app').config(appConfig);

angular.bootstrap(document, ['app'], {
  strictDi: true
});


import angular from 'angular';

let servicesModule = angular.module('app.services', []);

import TrialService from './trial.service';

servicesModule.service('Trial', TrialService);

export default servicesModule;


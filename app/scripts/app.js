'use strict';

angular.module('pwFeatureToggle', [
  'ngRoute'
])
.constant('FEATURES_URL', 'data/features.json')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }])
.run(['featureToggle', function(featureToggle) {
	featureToggle.load();
}]);

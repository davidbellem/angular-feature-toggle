'use strict';

angular.module('angularFeatureToggleApp', [
  'ngRoute'
])
.constant("FEATURES_URL", "data/features.json")
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

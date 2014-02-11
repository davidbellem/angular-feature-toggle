'use strict';

angular.module('angularFeatureToggleApp')
  .factory('featureToggle', ['$rootScope', '$http', 'FEATURES_URL', function ($rootScope, $http, FEATURES_URL) {
  	var availableFeatures = {};
    var hasBeenLoaded = false;
  	var load = function() {
  		return $http.get(FEATURES_URL)
                            .success(function(features) {
                                features.forEach(function(feature) {
                                	if(feature.enabled === true) {
	                            		availableFeatures[feature.key]=true;
	                            	}
                                });
                                hasBeenLoaded = true;
                            });
  	};
  	var isEnabled = function(feature) {
        if(!hasBeenLoaded) {
            load();
        }
  		return availableFeatures[feature] === true;
  	};
  	return {
  		isEnabled: isEnabled,
  		load: load
  	}
  }]);

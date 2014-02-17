'use strict';

angular.module('pwFeatureToggle')
.factory('featureToggle', ['$rootScope', '$http', 'FEATURES_URL', function ($rootScope, $http, FEATURES_URL) {
	var availableFeatures = {}, hasBeenLoaded = false;
	var load = function () {
		return $http.get(FEATURES_URL).success(function (features) {
			features.forEach(function (feature) {
				if (feature.enabled === true) {
					availableFeatures[feature.key] = true;
				}
			});
			hasBeenLoaded = true;
		});
	};
	var isEnabled = function (feature) {
		if (!hasBeenLoaded) {
			load();
		}
		return availableFeatures[feature] === true;
	};

	var hasBeenLoadedCheck = function () {
		return hasBeenLoaded;
	};
	return {
		isEnabled: isEnabled,
		load: load,
		hasBeenLoaded: hasBeenLoadedCheck
	};
}]);

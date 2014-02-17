'use strict';

angular.module('pwFeatureToggle')
.directive('pwFeatureToggle', ['$compile', 'featureToggle', function ($compile, featureToggle) {
	return {
		restrict: 'A',
		link: function postLink($scope, element, attrs) {
			element.hide();
			$scope.$watch(function () {
				return featureToggle.hasBeenLoaded();
			}, function(hasBeenLoaded) {
				if (hasBeenLoaded) {
					if (featureToggle.isEnabled(attrs.pwFeatureToggle) === false) {
						element.remove();
					} else {
						element.show();
					}
				}
			});
		}
	};
}]);

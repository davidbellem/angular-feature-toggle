'use strict';

angular.module('angularFeatureToggleApp')
  .directive('pwFeatureToggle', ['$compile', 'featureToggle', function ($compile, featureToggle) {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        if(featureToggle.isEnabled(attrs['pwFeatureToggle']) === false) {
        	element.remove();
        }
      }
    };
  }]);

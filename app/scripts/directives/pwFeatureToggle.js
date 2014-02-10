'use strict';

angular.module('angularFeatureToggleApp')
  .directive('pwFeatureToggle', ['$compile', function ($compile) {
    return {
      template: '<div></div>',
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        element.text('This can be toggled');
        console.log(attrs);
        //console.log(FeatureToggle.isEnabled(attrs))
      }
    };
  }]);

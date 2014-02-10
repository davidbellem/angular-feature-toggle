'use strict';

describe('Service: Featuretoggle', function () {

  // load the service's module
  beforeEach(module('angularFeatureToggleApp'));

  // instantiate service
  var Featuretoggle;
  beforeEach(inject(function (_Featuretoggle_) {
    Featuretoggle = _Featuretoggle_;
  }));

  it('should do something', function () {
    expect(!!Featuretoggle).toBe(true);
  });

});

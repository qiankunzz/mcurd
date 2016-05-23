'use strict';

describe('Controller: UnitCtrl', function () {

  // load the controller's module
  beforeEach(module('crudApp'));

  var UnitCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UnitCtrl = $controller('UnitCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

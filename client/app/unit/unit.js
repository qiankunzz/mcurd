'use strict';

angular.module('crudApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('unit', {
        url: '/unit',
        templateUrl: 'app/unit/unit.html',
        controller: 'UnitCtrl',
        authenticate: true,
        title: 'units Database'
      });
  });

'use strict';

angular.module('crudApp')
  .controller('UnitCtrl', function ($scope) {
    $scope.options = [
      {field: 'image', title: 'Profile Image', dataType: 'image'},
      {field: 'name', heading: 'Title', dataType: 'text'},
      {field: 'price', dataType: 'currency'},
      {field: 'unittype', title: 'Unit Type', dataType: 'select', options: ['Studio', '1 Bedroom', '2 Bedroom', '3+ Bedroom'], noSort: true},
      {field: 'stars', title: 'Street Address', dataTypes:'text'},
      {field: 'language', title: 'City', dataType: 'select', options: ['Boston', 'Cambridge', 'New York']},
      {field: 'releaseDate', title: 'Installtion Date', dataType: 'date'},
      {field: 'active', heading: 'Status', dataType: 'boolean'}
    ];
  });

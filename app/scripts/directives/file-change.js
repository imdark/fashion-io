'use strict';

angular.module('DrassieApp')
  .directive('fileChange', function () {
    return {
  		require: 'fileModel',
  		link: function($scope, $element, $attr, $ctrl) {
  			$ctrl.$filesLoadedListeners.push(function() {
  				$scope.$eval($attr.fileChange);
  			});
    	}
  	};
  });

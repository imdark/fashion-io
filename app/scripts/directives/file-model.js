'use strict';

angular.module('DrassieApp')
  .directive('fileModel', function () {
    return {
    	controller: function($parse, $element, $attrs, $scope){
	      	var exp = $parse($attrs.fileModel);
	      	var $filesLoadedListeners = [];
	      	this.$filesLoadedListeners = $filesLoadedListeners;

	      	$element.on('change', function(){
	        	exp.assign($scope, this.files);
	        	$filesLoadedListeners.forEach(function(listener) {
	        		listener();
	        	});

	        	$scope.$apply();
	      	});
      	}
    }
  });

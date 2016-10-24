'use strict';

angular.module('DrassieApp')
  .controller('UploadCtrl', function ($scope) {
  	this.imageFile = {};
    
    $scope.image = {
  			originalUrl: '', 
  			uploaded: false,
	  		imageFilters: []
  		};
      
    $scope.loadImageToCanvas = function (imageFileList) {
	    this.imageFile = imageFileList.item(0);
	  }
  });

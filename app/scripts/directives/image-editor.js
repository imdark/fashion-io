'use strict';

angular.module('DrassieApp')
  .directive('imageEditor', function () {
    return {
      template: 
            '<div class="drawingPadContainer">' +
              '<img src="" alt="" class="drawingPad">' +
              // '<canvas class="drawingPad" width="{{canvasWidth}}" height="{{canvasHeight}}"></canvas>' +
            '</div>' +
      			'<div class="filter-panel">' + 
      				'<ol class="filters">' + 
      					'<li class="add-filter"><a href="" data-ng-click="addNewFilter()">+</a></li>' +
      					'<li data-ng-repeat="filter in imageFilters" class="filter">'+
      						'<select data-ng-model="filter.name" ng-options="name as name for (name, filter) in imageFilterTypes"></select>' +
      						'<input type="range" data-ng-model="filter.parameters[0]"/>' +
      					'</li>' +
  					'</ol>' +
            '<button data-ng-click="saveImageAs()">Save image</button>' +
				'</div>',
      restrict: 'C',
      scope: { imageFile: '=', imageFilters: '=', canvasWidth: '@', canvasHeight: '@'},
      link: function postLink($scope, $element, $attrs) {

      	var $drawingPad = $element.find('.drawingPad');

      	var filterToNativeFilter = function(filter) {
          return {
            name: filterTypes[filter.name].nativeName,
            value: filter.parameters.map(function (parameter) {
              return parameter + filterTypes[filter.name].parameterTypes[0].postfix 
            }).join() 
          }
        };

        $scope.saveImageAs = function () {
          var imageSvg = 'data:image/svg+xml,' +
           '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">' +
             '<foreignObject width="100%" height="100%">' +
               '<div xmlns="http://www.w3.org/1999/xhtml">' +
                  $drawingPad.parent().html() +
                  '</img>' +
               '</div>' +
             '</foreignObject>' +
           '</svg>';

           window.open(imageSvg);
        } 

    		$scope.$watch('imageFilters', function(updatedFilters) {
    			if (updatedFilters) {
    				$drawingPad.imageFilter(
    					updatedFilters
    					.filter(function (filter) {return filter.active === true })
    					.map(filterToNativeFilter));				
    			}
    		}, true);

      	$scope.$watch('imageFile', function (newImage) {
      		var drawingPad = $drawingPad[0];

	      	if (newImage)
	      	{
      			var fileReader = new FileReader();

	      		fileReader.onload= function(e)
	      		{
	      			var imageElement = $('.drawingPad')[0];

	      	// 		imageElement.onload = function() {
	      				
	      	// 			if (!$scope.canvasWidth) {
				  		// 	$scope.canvasWidth = 300;
				  		// };

				  		// if (!$scope.canvasHight) {
				  		// 	$scope.canvasHight = 150;
				  		// };

      		// 			drawingPad.getContext('2d').drawImage(imageElement, 0,0, $scope.canvasWidth, $scope.canvasHight);
	      	// 		}

	      			imageElement.src = e.target.result;
              $drawingPad.append(imageElement);
      			};

	      		fileReader.readAsDataURL(newImage);
	      	}

      	});
      },
      controller: function($parse, $element, $attrs, $scope){
      	$scope.imageFilterTypes = filterTypes;

  	  	$scope.addNewFilter = function (){
  	  		$scope.imageFilters.unshift({
    				name: 'hue-rotate',
    				active: true,
    				parameters: ['0']
    			});
  	  	}	
      }
    };
  });

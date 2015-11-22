'use strict';

(function($, _) {
	var imageFilterAttributeName = 'webkitFilter';
	var cssFunctionRegex = /[^\s()]+\s*\([^)]*\)/g;
	var cssFunctionNameRegex = /^[^\s()]+/g;
	var cssFunctionBrackets = /\(\)/;
	var cssFunctionParameterSeparatorRegex = /[,\s]+/g
	var filterDeliminator = ' ';
	var filterToString = 
		function(filter) {
			return filter.name + '(' + filter.value + ')';
		};

	$.fn.extend({
		addImageFilter: function(filters) {
			var filterString = filters.map(filterToString);
			filterString;
		},

		imageFilter: function(filters) {
			var elem = this[0];

			if (typeof(filters) === 'undefined') {
				var elementFilterString = window.getComputedStyle(elem).getPropertyValue(imageFilterAttributeName);
				var filtersStringValues = elementFilterString.match(cssFunctionRegex);
				var filterObjects = filtersStringValues.map(function(functionString) {
					var functionNameMatch = cssFunctionNameRegex.exec(functionString);
					var functionName = functionNameMatch[0];
					var functionParametersStartIndex = functionNameMatch.index + functionName.length;
					var functionAllParametersString = functionString.substring(functionParametersStartIndex);
					var AllParametersBracketlessString = functionAllParametersString.replace(cssFunctionBrackets, '');
					var functionParameterStrings = AllParametersBracketlessString.split(cssFunctionParameterSeparatorRegex);

					return {
						name: functionName,
						value: functionParameterStrings
					};
				});

				return filterObjects;
			} else {
				var filterString = filters.map(filterToString).join(filterDeliminator);

				elem.style[imageFilterAttributeName] = filterString;

				return filterString;
			}
		}
	});

})(jQuery, _);


filterTypes = {
	'grayscale': {
		nativeName: 'grayscale',
		displayName: 'grayscale',
		parameterTypes: [{
			name: 'percentage',
			type: 'number',
			maxValue: '100',
			postfix: '%'
		}]
	}, 
	'sepia': {
		nativeName: 'sepia',
		displayName: 'sepia',
		parameterTypes: [{
			name: 'percentage',
			type: 'number',
			maxValue: '100',
			postfix: '%'
 		}]
	},
	'saturate': {
		nativeName: 'saturate',
		displayName: 'saturate',
		parameterTypes: [{
			name: 'percentage',
			type: 'number',
			maxValue: '100',
			postfix: '%'
	 	}]
	},
	'hue-rotate': {
		nativeName: 'hue-rotate',
		displayName: 'hue-rotate',
		parameterTypes: [{
			name: 'angle',
			type: 'number',
			maxValue: '360',
			postfix: 'deg'
	 	}]
	},
	'invert': {
		nativeName: 'invert',
		displayName: 'invert',
		parameterTypes: [{
			name: 'percentage',
			type: 'number',
			maxValue: '100',
			postfix: '%'
	 	}]
	},
	'opacity': {
		nativeName: 'opacity',
		displayName: 'opacity',
		parameterTypes: [{
			name: 'percentage',
			type: 'number',
			maxValue: '100',
			postfix: '%'
	 	}]
	},
	'brightness': {
		nativeName: 'brightness',
		displayName: 'brightness',
		parameterTypes: [{
			name: 'percentage',
			type: 'number',
			maxValue: '100',
			postfix: '%'
	 	}]
	},
	'contrast': {
		nativeName: 'contrast',
		displayName: 'contrast',
		parameterTypes: [{
			name: 'percentage',
			type: 'number',
			maxValue: '100',
			postfix: '%'
 		}]
	}/* , {
	nativeName: 'custom',
	name: 'custom',
	parameterTypes: [{
		name: 'percentage',
		type: 'number',
		maxValue: '100',
		postfix: '%'
 	}]
}*/};
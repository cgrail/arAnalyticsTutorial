sap.ui.define([], function () {
	"use strict";

	const fioriColors = ["#91c8f6", "#FF8888", "#FABD64", "#ABE2AB", "#D3D7D9"];
	var currentColor = 0;

	return {
		getNextColor() {
			const color = fioriColors[currentColor % fioriColors.length];
			currentColor += 1;
			return color;
		}
	};

});
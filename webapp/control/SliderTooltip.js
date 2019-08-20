sap.ui.define([
    "sap/m/SliderTooltipBase",
    "sap/m/SliderTooltipBaseRenderer"
], function (SliderTooltipBase, SliderTooltipBaseRenderer) {
    "use strict";

    return SliderTooltipBase.extend("webxr-ui5.control.SliderTooltip", {
        metadata: {
            properties: {
                sliderValue: {
                    type: "int",
                    defaultValue: 0
                },
                toolTips: {
                    type: "string[]"
                }
            }
        },

        renderer: {
            //apiVersion: 2, currently not yet supported by SliderTooltipBaseRenderer
            renderTooltipContent: function (oRm, oControl) {
                const labels = oControl.getToolTips() || [];
                const label = labels[oControl.getSliderValue()];
                if (label) {
                    oRm.openStart("div", oControl)
                        .style("height", "auto")
                        .style("width", "4rem")
                        .style("padding", "0.5rem")
                        .class(SliderTooltipBaseRenderer.CSS_CLASS).openEnd()
                        .text(label)
                        .close("div");
                }

            }
        },

        sliderValueChanged(iValue) {
            return this.setSliderValue(iValue);
        }

    });
});
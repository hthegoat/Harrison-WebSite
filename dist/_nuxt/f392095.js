/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{347:function(t,e,r){"use strict";var o,n,h;h=function(t){var e=t?t._modules:{};function r(t,path,e,r){t.hasOwnProperty(path)||(t[path]=r.apply(null,e))}r(e,"Extensions/StaticScale.js",[e["Core/Axis/Axis.js"],e["Core/Chart/Chart.js"],e["Core/Utilities.js"]],(function(t,e,r){var o=r.addEvent,n=r.defined,h=r.isNumber,c=r.pick;o(t,"afterSetOptions",(function(){var t=this.chart.options.chart;!this.horiz&&h(this.options.staticScale)&&(!t.height||t.scrollablePlotArea&&t.scrollablePlotArea.minHeight)&&(this.staticScale=this.options.staticScale)})),e.prototype.adjustHeight=function(){"adjustHeight"!==this.redrawTrigger&&((this.axes||[]).forEach((function(t){var e,r,o=t.chart,animate=!!o.initiatedScale&&o.options.animation,h=t.options.staticScale;t.staticScale&&n(t.min)&&(e=c(t.brokenAxis&&t.brokenAxis.unitLength,t.max+t.tickInterval-t.min)*h,r=(e=Math.max(e,h))-o.plotHeight,!o.scrollablePixelsY&&Math.abs(r)>=1&&(o.plotHeight=e,o.redrawTrigger="adjustHeight",o.setSize(void 0,o.chartHeight+r,animate)),t.series.forEach((function(t){var e=t.sharedClipKey&&o.sharedClips[t.sharedClipKey];e&&e.attr(o.inverted?{width:o.plotHeight}:{height:o.plotHeight})})))})),this.initiatedScale=!0),this.redrawTrigger=null},o(e,"render",e.prototype.adjustHeight)})),r(e,"masters/modules/static-scale.src.js",[],(function(){}))},t.exports?(h.default=h,t.exports=h):(o=[r(129)],void 0===(n=function(t){return h(t),h.Highcharts=t,h}.apply(e,o))||(t.exports=n))}}]);
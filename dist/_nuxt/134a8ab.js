/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{290:function(e,n,t){"use strict";var r,o,l;l=function(e){var n=e?e._modules:{};function t(e,path,n,t){e.hasOwnProperty(path)||(e[path]=t.apply(null,n))}t(n,"Extensions/FullScreen.js",[n["Core/Chart/Chart.js"],n["Core/Globals.js"],n["Core/Renderer/HTML/AST.js"],n["Core/Utilities.js"]],(function(e,n,t,r){n.doc;var o=r.addEvent,l=function(){function e(e){this.chart=e,this.isOpen=!1;var n=e.renderTo;this.browserProps||("function"==typeof n.requestFullscreen?this.browserProps={fullscreenChange:"fullscreenchange",requestFullscreen:"requestFullscreen",exitFullscreen:"exitFullscreen"}:n.mozRequestFullScreen?this.browserProps={fullscreenChange:"mozfullscreenchange",requestFullscreen:"mozRequestFullScreen",exitFullscreen:"mozCancelFullScreen"}:n.webkitRequestFullScreen?this.browserProps={fullscreenChange:"webkitfullscreenchange",requestFullscreen:"webkitRequestFullScreen",exitFullscreen:"webkitExitFullscreen"}:n.msRequestFullscreen&&(this.browserProps={fullscreenChange:"MSFullscreenChange",requestFullscreen:"msRequestFullscreen",exitFullscreen:"msExitFullscreen"}))}return e.prototype.close=function(){var e=this,n=e.chart,t=n.options.chart;e.isOpen&&e.browserProps&&n.container.ownerDocument instanceof Document&&n.container.ownerDocument[e.browserProps.exitFullscreen](),e.unbindFullscreenEvent&&(e.unbindFullscreenEvent=e.unbindFullscreenEvent()),n.setSize(e.origWidth,e.origHeight,!1),e.origWidth=void 0,e.origHeight=void 0,t.width=e.origWidthOption,t.height=e.origHeightOption,e.origWidthOption=void 0,e.origHeightOption=void 0,e.isOpen=!1,e.setButtonText()},e.prototype.open=function(){var e=this,n=e.chart,t=n.options.chart;if(t&&(e.origWidthOption=t.width,e.origHeightOption=t.height),e.origWidth=n.chartWidth,e.origHeight=n.chartHeight,e.browserProps){var r=o(n.container.ownerDocument,e.browserProps.fullscreenChange,(function(){e.isOpen?(e.isOpen=!1,e.close()):(n.setSize(null,null,!1),e.isOpen=!0,e.setButtonText())})),l=o(n,"destroy",r);e.unbindFullscreenEvent=function(){r(),l()};var c=n.renderTo[e.browserProps.requestFullscreen]();c&&c.catch((function(){alert("Full screen is not supported inside a frame.")}))}},e.prototype.setButtonText=function(){var e=this.chart,n=e.exportDivElements,r=e.options.exporting,o=r&&r.buttons&&r.buttons.contextButton.menuItems,l=e.options.lang;if(r&&r.menuItemDefinitions&&l&&l.exitFullscreen&&l.viewFullscreen&&o&&n){var c=n[o.indexOf("viewFullscreen")];c&&t.setElementHTML(c,this.isOpen?l.exitFullscreen:r.menuItemDefinitions.viewFullscreen.text||l.viewFullscreen)}},e.prototype.toggle=function(){var e=this;e.isOpen?e.close():e.open()},e}();return n.Fullscreen=l,o(e,"beforeRender",(function(){this.fullscreen=new n.Fullscreen(this)})),n.Fullscreen})),t(n,"masters/modules/full-screen.src.js",[],(function(){}))},e.exports?(l.default=l,e.exports=l):(r=[t(129)],void 0===(o=function(e){return l(e),l.Highcharts=e,l}.apply(n,r))||(e.exports=o))}}]);
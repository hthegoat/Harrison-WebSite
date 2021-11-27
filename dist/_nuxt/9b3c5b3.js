/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{260:function(n,t,r){"use strict";var e,o,f;f=function(n){var t=n?n._modules:{};function r(n,path,t,r){n.hasOwnProperty(path)||(n[path]=r.apply(null,t))}r(t,"Core/Axis/BrokenAxis.js",[t["Extensions/Stacking.js"],t["Core/Utilities.js"]],(function(n,t){var r,e=t.addEvent,o=t.find,f=t.fireEvent,c=t.isArray,k=t.isNumber,l=t.pick;return function(t){var r=[];function h(){void 0!==this.brokenAxis&&this.brokenAxis.setBreaks(this.options.breaks,!1)}function v(){var n=this;n.brokenAxis&&n.brokenAxis.hasBreaks&&(n.options.ordinal=!1)}function x(){var n=this,t=n.brokenAxis;if(t&&t.hasBreaks){for(var r=n.tickPositions,e=n.tickPositions.info,o=[],i=0;i<r.length;i++)t.isInAnyBreak(r[i])||o.push(r[i]);n.tickPositions=o,n.tickPositions.info=e}}function A(){var n=this;n.brokenAxis||(n.brokenAxis=new P(n))}function m(){var n=this,t=n.isDirty,r=n.options.connectNulls,e=n.points,o=n.xAxis,f=n.yAxis;if(t)for(var i=e.length;i--;){var c=e[i],k=!(null===c.y&&!1===r)&&(o&&o.brokenAxis&&o.brokenAxis.isInAnyBreak(c.x,!0)||f&&f.brokenAxis&&f.brokenAxis.isInAnyBreak(c.y,!0));c.visible=!k&&!1!==c.options.visible}}function d(){this.drawBreaks(this.xAxis,["x"]),this.drawBreaks(this.yAxis,l(this.pointArrayMap,["y"]))}function B(n,t){var r,e,o,c,h=this,v=h.points;if(n&&n.brokenAxis&&n.brokenAxis.hasBreaks){var x=n.brokenAxis;t.forEach((function(t){r=x&&x.breakArray||[],e=n.isXAxis?n.min:l(h.options.threshold,n.min),v.forEach((function(h){c=l(h["stack"+t.toUpperCase()],h[t]),r.forEach((function(t){k(e)&&k(c)&&(o=!1,e<t.from&&c>t.to||e>t.from&&c<t.from?o="pointBreak":(e<t.from&&c>t.from&&c<t.to||e>t.from&&c>t.to&&c<t.from)&&(o="pointInBreak"),o&&f(n,o,{point:h,brk:t}))}))}))}))}}function y(){var t=this.currentDataGrouping,r=t&&t.gapSize,e=this.points.slice(),o=this.yAxis,f=this.options.gapSize,i=e.length-1;if(f&&i>0){"value"!==this.options.gapUnit&&(f*=this.basePointRange),r&&r>f&&r>=this.basePointRange&&(f=r);for(var c=void 0,k=void 0;i--;)if(k&&!1!==k.visible||(k=e[i+1]),c=e[i],!1!==k.visible&&!1!==c.visible){if(k.x-c.x>f){var l=(c.x+k.x)/2;e.splice(i+1,0,{isNull:!0,x:l}),o.stacking&&this.options.stacking&&((o.stacking.stacks[this.stackKey][l]=new n(o,o.options.stackLabels,!1,l,this.stack)).total=0)}k=c}}return this.getGraphPath(e)}t.compose=function(n,t){if(-1===r.indexOf(n)&&(r.push(n),n.keepProps.push("brokenAxis"),e(n,"init",A),e(n,"afterInit",h),e(n,"afterSetTickPositions",x),e(n,"afterSetOptions",v)),-1===r.indexOf(t)){r.push(t);var o=t.prototype;o.drawBreaks=B,o.gappedPath=y,e(t,"afterGeneratePoints",m),e(t,"afterRender",d)}return n};var P=function(){function n(n){this.hasBreaks=!1,this.axis=n}return n.isInBreak=function(n,t){var r=n.repeat||1/0,e=n.from,o=n.to-n.from,f=t>=e?(t-e)%r:r-(e-t)%r;return n.inclusive?f<=o:f<o&&0!==f},n.lin2Val=function(t){var r=this.brokenAxis,e=r&&r.breakArray;if(!e||!k(t))return t;var o,i,f=t;for(i=0;i<e.length&&!((o=e[i]).from>=f);i++)(o.to<f||n.isInBreak(o,f))&&(f+=o.len);return f},n.val2Lin=function(t){var r=this.brokenAxis,e=r&&r.breakArray;if(!e||!k(t))return t;var o,i,f=t;for(i=0;i<e.length;i++)if((o=e[i]).to<=t)f-=o.len;else{if(o.from>=t)break;if(n.isInBreak(o,t)){f-=t-o.from;break}}return f},n.prototype.findBreakAt=function(n,t){return o(t,(function(b){return b.from<n&&n<b.to}))},n.prototype.isInAnyBreak=function(t,r){var e,o,f,c=this.axis,h=c.options.breaks||[],i=h.length;if(i&&k(t)){for(;i--;)n.isInBreak(h[i],t)&&(e=!0,o||(o=l(h[i].showPoints,!c.isXAxis)));f=e&&r?e&&!o:e}return f},n.prototype.setBreaks=function(t,r){var e=this,o=e.axis,h=c(t)&&!!t.length;o.isDirty=e.hasBreaks!==h,e.hasBreaks=h,o.options.breaks=o.userOptions.breaks=t,o.forceRedraw=!0,o.series.forEach((function(n){n.isDirty=!0})),h||o.val2lin!==n.val2Lin||(delete o.val2lin,delete o.lin2val),h&&(o.userOptions.ordinal=!1,o.lin2val=n.lin2Val,o.val2lin=n.val2Lin,o.setExtremes=function(n,t,r,f,c){if(e.hasBreaks){for(var k=this.options.breaks||[],l=void 0;l=e.findBreakAt(n,k);)n=l.to;for(;l=e.findBreakAt(t,k);)t=l.from;t<n&&(t=n)}o.constructor.prototype.setExtremes.call(this,n,t,r,f,c)},o.setAxisTranslation=function(){if(o.constructor.prototype.setAxisTranslation.call(this),e.unitLength=void 0,e.hasBreaks){var t,r,c,h,v=o.options.breaks||[],x=[],A=[],m=l(o.pointRangePadding,0),d=0,B=o.userMin||o.min,y=o.userMax||o.max;v.forEach((function(t){r=t.repeat||1/0,k(B)&&k(y)&&(n.isInBreak(t,B)&&(B+=t.to%r-B%r),n.isInBreak(t,y)&&(y-=y%r-t.from%r))})),v.forEach((function(n){if(c=n.from,r=n.repeat||1/0,k(B)&&k(y)){for(;c-r>B;)c-=r;for(;c<B;)c+=r;for(h=c;h<y;h+=r)x.push({value:h,move:"in"}),x.push({value:h+n.to-n.from,move:"out",size:n.breakSize})}})),x.sort((function(a,b){return a.value===b.value?("in"===a.move?0:1)-("in"===b.move?0:1):a.value-b.value})),t=0,c=B,x.forEach((function(n){1===(t+="in"===n.move?1:-1)&&"in"===n.move&&(c=n.value),0===t&&k(c)&&(A.push({from:c,to:n.value,len:n.value-c-(n.size||0)}),d+=n.value-c-(n.size||0))})),e.breakArray=A,k(B)&&k(y)&&k(o.min)&&(e.unitLength=y-B-d+m,f(o,"afterBreaks"),o.staticScale?o.transA=o.staticScale:e.unitLength&&(o.transA*=(y-o.min+m)/e.unitLength),m&&(o.minPixelPadding=o.transA*(o.minPointOffset||0)),o.min=B,o.max=y)}}),l(r,!0)&&o.chart.redraw()},n}();t.Additions=P}(r||(r={})),r})),r(t,"masters/modules/broken-axis.src.js",[t["Core/Globals.js"],t["Core/Axis/BrokenAxis.js"]],(function(n,t){var r=n;t.compose(r.Axis,r.Series)}))},n.exports?(f.default=f,n.exports=f):(e=[r(129)],void 0===(o=function(n){return f(n),f.Highcharts=n,f}.apply(t,e))||(n.exports=o))}}]);
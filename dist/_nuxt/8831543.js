/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{277:function(t,e,o){"use strict";var r,n,c;c=function(t){var e=t?t._modules:{};function o(t,path,e,o){t.hasOwnProperty(path)||(t[path]=o.apply(null,e))}o(e,"Series/DotPlot/DotPlotSeries.js",[e["Series/Column/ColumnSeries.js"],e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],(function(t,e,o){var r,n=this&&this.__extends||(r=function(t,b){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])},r(t,b)},function(t,b){function e(){this.constructor=t}r(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}),c=o.extend,d=o.merge,l=o.objectEach,h=o.pick,y=function(e){function o(){var t=null!==e&&e.apply(this,arguments)||this;return t.data=void 0,t.options=void 0,t.points=void 0,t}return n(o,e),o.prototype.drawPoints=function(){var t=this,e=t.chart.renderer,o=this.options.marker,r=this.yAxis.transA*t.options.itemPadding,n=this.borderWidth%2?.5:1;this.points.forEach((function(d){var y,f,m,v,A,w,_,k,x,P=d.marker||{},symbol=P.symbol||o.symbol,j=h(P.radius,o.radius),O="rect"!==symbol;if(d.graphics=m=d.graphics||{},delete(A=d.pointAttr?d.pointAttr[d.selected?"selected":""]||t.pointAttr[""]:t.pointAttribs(d,d.selected&&"select")).r,t.chart.styledMode&&(delete A.stroke,delete A["stroke-width"]),null!==d.y)for(d.graphic||(d.graphic=e.g("point").add(t.group)),v=d.y,_=h(d.stackY,d.y),w=Math.min(d.pointWidth,t.yAxis.transA-r),y=_;y>_-d.y;y--)k=d.barX+(O?d.pointWidth/2-w/2:0),x=t.yAxis.toPixels(y,!0)+r/2,t.options.crisp&&(k=Math.round(k)-n,x=Math.round(x)+n),f={x:k,y:x,width:Math.round(O?w:d.pointWidth),height:Math.round(w),r:j},m[v]?m[v].animate(f):m[v]=e.symbol(symbol).attr(c(f,A)).add(d.graphic),m[v].isActive=!0,v--;l(m,(function(t,e){t.isActive?t.isActive=!1:(t.destroy(),delete t[e])}))}))},o.defaultOptions=d(t.defaultOptions,{itemPadding:.2,marker:{symbol:"circle",states:{hover:{},select:{}}}}),o}(t);return c(y.prototype,{markerAttribs:void 0}),e.registerSeriesType("dotplot",y),y})),o(e,"masters/modules/dotplot.src.js",[],(function(){}))},t.exports?(c.default=c,t.exports=c):(r=[o(129)],void 0===(n=function(t){return c(t),c.Highcharts=t,c}.apply(e,r))||(t.exports=n))}}]);
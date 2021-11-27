/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{376:function(t,o,e){"use strict";var r,n,l;l=function(t){var o=t?t._modules:{};function e(t,path,o,e){t.hasOwnProperty(path)||(t[path]=e.apply(null,o))}e(o,"Series/XRange/XRangePoint.js",[o["Core/Series/Point.js"],o["Core/Series/SeriesRegistry.js"],o["Core/Utilities.js"]],(function(t,o,e){var r,n=this&&this.__extends||(r=function(t,b){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])},r(t,b)},function(t,b){function o(){this.constructor=t}r(t,b),t.prototype=null===b?Object.create(b):(o.prototype=b.prototype,new o)}),l=o.seriesTypes.column,c=e.extend,h=function(o){function e(){var t=null!==o&&o.apply(this,arguments)||this;return t.options=void 0,t.series=void 0,t}return n(e,o),e.getColorByCategory=function(t,o){var e=t.options.colors||t.chart.options.colors,r=e?e.length:t.chart.options.chart.colorCount,n=o.y%r;return{colorIndex:n,color:e&&e[n]}},e.prototype.resolveColor=function(){var t,o=this.series;o.options.colorByPoint&&!this.options.color?(t=e.getColorByCategory(o,this),o.chart.styledMode||(this.color=t.color),this.options.colorIndex||(this.colorIndex=t.colorIndex)):this.color||(this.color=o.color)},e.prototype.init=function(){return t.prototype.init.apply(this,arguments),this.y||(this.y=0),this},e.prototype.setState=function(){t.prototype.setState.apply(this,arguments),this.series.drawPoint(this,this.series.getAnimationVerb())},e.prototype.getLabelConfig=function(){var o=this,e=t.prototype.getLabelConfig.call(o),r=o.series.yAxis.categories;return e.x2=o.x2,e.yCategory=o.yCategory=r&&r[o.y],e},e.prototype.isValid=function(){return"number"==typeof this.x&&"number"==typeof this.x2},e}(l.prototype.pointClass);return c(h.prototype,{ttBelow:!1,tooltipDateKeys:["x","x2"]}),h})),e(o,"Series/XRange/XRangeComposition.js",[o["Core/Axis/Axis.js"],o["Core/Utilities.js"]],(function(t,o){var e=o.addEvent,r=o.pick;e(t,"afterGetSeriesExtremes",(function(){var t,o,e=this,n=e.series;e.isXAxis&&(t=r(e.dataMax,-Number.MAX_VALUE),n.forEach((function(e){e.x2Data&&e.x2Data.forEach((function(e){e>t&&(t=e,o=!0)}))})),o&&(e.dataMax=t))}))})),e(o,"Series/XRange/XRangeSeries.js",[o["Core/Globals.js"],o["Core/Color/Color.js"],o["Core/Series/SeriesRegistry.js"],o["Core/Utilities.js"],o["Series/XRange/XRangePoint.js"]],(function(t,o,e,r,n){var l,c=this&&this.__extends||(l=function(t,b){return l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])},l(t,b)},function(t,b){function o(){this.constructor=t}l(t,b),t.prototype=null===b?Object.create(b):(o.prototype=b.prototype,new o)}),h=o.parse,d=e.series,y=e.seriesTypes.column,f=y.prototype,x=r.clamp,m=r.correctFloat,v=r.defined,C=r.extend,w=r.find,A=r.isNumber,P=r.isObject,R=r.merge,M=r.pick,_=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.data=void 0,o.options=void 0,o.points=void 0,o}return c(o,t),o.prototype.init=function(){y.prototype.init.apply(this,arguments),this.options.stacking=void 0},o.prototype.getColumnMetrics=function(){var t,o=this.chart;function e(){o.series.forEach((function(s){var t=s.xAxis;s.xAxis=s.yAxis,s.yAxis=t}))}return e(),t=f.getColumnMetrics.call(this),e(),t},o.prototype.cropData=function(t,o,e,r){var n=d.prototype.cropData.call(this,this.x2Data,o,e,r);return n.xData=t.slice(n.start,n.end),n},o.prototype.findPointIndex=function(t){var o,e,r=this,n=r.cropped,l=r.cropStart,c=r.points,h=t.id;return h&&(o=(e=w(c,(function(t){return t.id===h})))?e.index:void 0),void 0===o&&(o=(e=w(c,(function(o){return o.x===t.x&&o.x2===t.x2&&!o.touched})))?e.index:void 0),n&&A(o)&&A(l)&&o>=l&&(o-=l),o},o.prototype.translatePoint=function(t){var o,e,r,n,l,c,h,d=this,y=d.xAxis,f=d.yAxis,m=d.columnMetrics,C=d.options,w=C.minPointLength||0,_=(t.shapeArgs&&t.shapeArgs.width||0)/2,j=d.pointXOffset=m.offset,S=t.plotX,X=M(t.x2,t.x+(t.len||0)),O=y.translate(X,0,0,0,1),E=Math.abs(O-S),F=this.chart.inverted,D=M(C.borderWidth,1)%2/2,I=m.offset,B=Math.round(m.width);w&&((o=w-E)<0&&(o=0),S-=o/2,O+=o/2),S=Math.max(S,-10),O=x(O,-10,y.len+10),v(t.options.pointWidth)&&(I-=(Math.ceil(t.options.pointWidth)-B)/2,B=Math.ceil(t.options.pointWidth)),C.pointPlacement&&A(t.plotY)&&f.categories&&(t.plotY=f.translate(t.y,0,1,0,1,C.pointPlacement));var k=Math.floor(Math.min(S,O))+D,L=Math.floor(Math.max(S,O))+D,N={x:k,y:Math.floor(t.plotY+I)+D,width:L-k,height:B,r:d.options.borderRadius};t.shapeArgs=N,F?t.tooltipPos[1]+=j+_:t.tooltipPos[0]-=_+j-N.width/2,n=(r=N.x)+N.width,r<0||n>y.len?(r=x(r,0,y.len),l=(n=x(n,0,y.len))-r,t.dlBox=R(N,{x:r,width:n-r,centerX:l?l/2:null})):t.dlBox=null;var T=t.tooltipPos,V=F?1:0,U=F?0:1;h=d.columnMetrics?d.columnMetrics.offset:-m.width/2,T[V]+=F?N.width/2:(y.reversed?-1:0)*N.width,T[U]=x(T[U]+(F?-1:1)*h,0,f.len-1),(e=t.partialFill)&&(P(e)&&(e=e.amount),A(e)||(e=0),t.partShapeArgs=R(N,{r:d.options.borderRadius}),c=Math.max(Math.round(E*e+t.plotX-S),0),t.clipRectArgs={x:y.reversed?N.x+E-c:N.x,y:N.y,width:c,height:N.height})},o.prototype.translate=function(){f.translate.apply(this,arguments),this.points.forEach((function(t){this.translatePoint(t)}),this)},o.prototype.drawPoint=function(t,o){var e,r=this,n=r.options,l=r.chart.renderer,c=t.graphic,d=t.shapeType,y=t.shapeArgs,f=t.partShapeArgs,x=t.clipRectArgs,m=t.partialFill,v=n.stacking&&!n.borderRadius,C=t.state,w=n.states[C||"normal"]||{},A=void 0===C?"attr":o,_=r.pointAttribs(t,C),j=M(r.chart.options.chart.animation,w.animation);t.isNull||!1===t.visible?c&&(t.graphic=c.destroy()):(c?c.rect[o](y):(t.graphic=c=l.g("point").addClass(t.getClassName()).add(t.group||r.group),c.rect=l[d](R(y)).addClass(t.getClassName()).addClass("highcharts-partfill-original").add(c)),f&&(c.partRect?(c.partRect[o](R(f)),c.partialClipRect[o](R(x))):(c.partialClipRect=l.clipRect(x.x,x.y,x.width,x.height),c.partRect=l[d](f).addClass("highcharts-partfill-overlay").add(c).clip(c.partialClipRect))),r.chart.styledMode||(c.rect[o](_,j).shadow(n.shadow,null,v),f&&(P(m)||(m={}),P(n.partialFill)&&(m=R(n.partialFill,m)),e=m.fill||h(_.fill).brighten(-.3).get()||h(t.color||r.color).brighten(-.3).get(),_.fill=e,c.partRect[A](_,j).shadow(n.shadow,null,v))))},o.prototype.drawPoints=function(){var t=this,o=t.getAnimationVerb();t.points.forEach((function(e){t.drawPoint(e,o)}))},o.prototype.getAnimationVerb=function(){return this.chart.pointCount<(this.options.animationLimit||250)?"animate":"attr"},o.prototype.isPointInside=function(o){var e=o.shapeArgs,r=o.plotX,n=o.plotY;if(!e)return t.prototype.isPointInside.apply(this,arguments);var l=void 0!==r&&void 0!==n&&n>=0&&n<=this.yAxis.len&&(e.x||0)+(e.width||0)>=0&&r<=this.xAxis.len;return l},o.defaultOptions=R(y.defaultOptions,{colorByPoint:!0,dataLabels:{formatter:function(){var t=this.point.partialFill;if(P(t)&&(t=t.amount),A(t)&&t>0)return m(100*t)+"%"},inside:!0,verticalAlign:"middle"},tooltip:{headerFormat:'<span style="font-size: 10px">{point.x} - {point.x2}</span><br/>',pointFormat:'<span style="color:{point.color}">●</span> {series.name}: <b>{point.yCategory}</b><br/>'},borderRadius:3,pointRange:0}),o}(y);return C(_.prototype,{type:"xrange",parallelArrays:["x","x2","y"],requireSorting:!1,animate:d.prototype.animate,cropShoulder:1,getExtremesFromAll:!0,autoIncrement:t.noop,buildKDTree:t.noop,pointClass:n}),e.registerSeriesType("xrange",_),_})),e(o,"masters/modules/xrange.src.js",[],(function(){}))},t.exports?(l.default=l,t.exports=l):(r=[e(129)],void 0===(n=function(t){return l(t),l.Highcharts=t,l}.apply(o,r))||(t.exports=n))}}]);
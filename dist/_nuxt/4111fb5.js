(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{263:function(t,o,e){"use strict";var r,n,l;l=function(t){function o(t,o,e,p){t.hasOwnProperty(o)||(t[o]=p.apply(null,e))}o(t=t?t._modules:{},"Core/Axis/Color/ColorAxisComposition.js",[t["Core/Color/Color.js"],t["Core/Utilities.js"]],(function(t,o){var u,e=t.parse,p=o.addEvent,r=o.extend,n=o.merge,l=o.pick,h=o.splat;return function(t){function o(){var b=this,a=this.options;this.colorAxis=[],a.colorAxis&&(a.colorAxis=h(a.colorAxis),a.colorAxis.forEach((function(a,t){a.index=t,new v(b,a)})))}function u(a){var g,t,b=this,o=function(t){-1!==(t=a.allItems.indexOf(t))&&(b.destroyItem(a.allItems[t]),a.allItems.splice(t,1))},e=[];for((this.chart.colorAxis||[]).forEach((function(a){(g=a.options)&&g.showInLegend&&(g.dataClasses&&g.visible?e=e.concat(a.getDataClassLegendSymbols()):g.visible&&e.push(a),a.series.forEach((function(a){a.options.showInLegend&&!g.dataClasses||("point"===a.options.legendType?a.points.forEach((function(a){o(a)})):o(a))})))})),t=e.length;t--;)a.allItems.unshift(e[t])}function c(a){a.visible&&a.item.legendColor&&a.item.legendSymbol.attr({fill:a.item.legendColor})}function d(){var a=this.chart.colorAxis;a&&a.forEach((function(a,t,b){a.update({},b)}))}function f(){(this.chart.colorAxis&&this.chart.colorAxis.length||this.colorAttribs)&&this.translateColors()}function q(){var a=this.axisTypes;a?-1===a.indexOf("colorAxis")&&a.push("colorAxis"):this.axisTypes=["colorAxis"]}function y(a){var t=this,b=a?"show":"hide";t.visible=t.options.visible=!!a,["graphic","dataLabel"].forEach((function(a){t[a]&&t[a][b]()})),this.series.buildKDTree()}function m(){var a=this,t=this.options.nullColor,b=this.colorAxis,o=this.colorKey;(this.data.length?this.data:this.points).forEach((function(e){var g=e.getNestedProperty(o);(g=e.options.color||(e.isNull||null===e.value?t:b&&void 0!==g?b.toColor(g,e):e.color||a.color))&&e.color!==g&&(e.color=g,"point"===a.options.legendType&&e.legendItem&&a.chart.legend.colorizeItem(e,e.visible))}))}function x(){this.elem.attr("fill",e(this.start).tweenTo(e(this.end),this.pos),void 0,!0)}function C(){this.elem.attr("stroke",e(this.start).tweenTo(e(this.end),this.pos),void 0,!0)}var v,a=[];t.compose=function(g,t,e,h,A){v||(v=g),-1===a.indexOf(t)&&(a.push(t),(g=t.prototype).collectionsWithUpdate.push("colorAxis"),g.collectionsWithInit.colorAxis=[g.addColorAxis],p(t,"afterGetAxes",o),function(a){var t=a.prototype.createAxis;a.prototype.createAxis=function(a,b){if("colorAxis"!==a)return t.apply(this,arguments);var o=new v(this,n(b.axis,{index:this[a].length,isX:!1}));return this.isDirtyLegend=!0,this.axes.forEach((function(a){a.series=[]})),this.series.forEach((function(a){a.bindAxes(),a.isDirtyData=!0})),l(b.redraw,!0)&&this.redraw(b.animation),o}}(t)),-1===a.indexOf(e)&&(a.push(e),(t=e.prototype).fillSetter=x,t.strokeSetter=C),-1===a.indexOf(h)&&(a.push(h),p(h,"afterGetAllItems",u),p(h,"afterColorizeItem",c),p(h,"afterUpdate",d)),-1===a.indexOf(A)&&(a.push(A),r(A.prototype,{optionalAxis:"colorAxis",translateColors:m}),r(A.prototype.pointClass.prototype,{setVisible:y}),p(A,"afterTranslate",f),p(A,"bindAxes",q))},t.pointSetVisible=y}(u||(u={})),u})),o(t,"Core/Axis/Color/ColorAxisDefaults.js",[],(function(){return{lineWidth:0,minPadding:0,maxPadding:0,gridLineWidth:1,tickPixelInterval:72,startOnTick:!0,endOnTick:!0,offset:0,marker:{animation:{duration:50},width:.01,color:"#999999"},labels:{overflow:"justify",rotation:0},minColor:"#e6ebf5",maxColor:"#003399",tickLength:5,showInLegend:!0}})),o(t,"Core/Axis/Color/ColorAxis.js",[t["Core/Axis/Axis.js"],t["Core/Color/Color.js"],t["Core/Axis/Color/ColorAxisComposition.js"],t["Core/Axis/Color/ColorAxisDefaults.js"],t["Core/Globals.js"],t["Core/Legend/LegendSymbol.js"],t["Core/Series/SeriesRegistry.js"],t["Core/Utilities.js"]],(function(t,o,e,p,r,n,l,h){var c=this&&this.__extends||function(){var t=function(o,b){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(b,t){for(var a in t)t.hasOwnProperty(a)&&(b[a]=t[a])},t(o,b)};return function(o,b){function e(){this.constructor=o}t(o,b),o.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}}(),d=o.parse,f=r.noop,y=l.series,m=h.extend,x=h.isNumber,C=h.merge,q=h.pick;return o=function(t){function o(b,o){var e=t.call(this,b,o)||this;return e.beforePadding=!1,e.chart=void 0,e.coll="colorAxis",e.dataClasses=void 0,e.legendItem=void 0,e.legendItems=void 0,e.name="",e.options=void 0,e.stops=void 0,e.visible=!0,e.init(b,o),e}return c(o,t),o.compose=function(b,t,r,a){e.compose(o,b,t,r,a)},o.prototype.init=function(b,e){var r=b.options.legend||{},a=e.layout?"vertical"!==e.layout:"vertical"!==r.layout,n=e.visible;r=C(o.defaultColorAxisOptions,e,{showEmpty:!1,title:null,visible:r.enabled&&!1!==n}),this.coll="colorAxis",this.side=e.side||a?2:1,this.reversed=e.reversed||!a,this.opposite=!a,t.prototype.init.call(this,b,r),this.userOptions.visible=n,e.dataClasses&&this.initDataClasses(e),this.initStops(),this.horiz=a,this.zoomEnabled=!1},o.prototype.initDataClasses=function(b){var t,o=this.chart,e=this.options,a=b.dataClasses.length,r=0,n=o.options.chart.colorCount;this.dataClasses=t=[],this.legendItems=[],(b.dataClasses||[]).forEach((function(b,g){b=C(b),t.push(b),!o.styledMode&&b.color||("category"===e.dataClassColor?(o.styledMode||(g=o.options.colors,n=g.length,b.color=g[r]),b.colorIndex=r,++r===n&&(r=0)):b.color=d(e.minColor).tweenTo(d(e.maxColor),2>a?.5:g/(a-1)))}))},o.prototype.hasData=function(){return!!(this.tickPositions||[]).length},o.prototype.setTickPositions=function(){if(!this.dataClasses)return t.prototype.setTickPositions.call(this)},o.prototype.initStops=function(){this.stops=this.options.stops||[[0,this.options.minColor],[1,this.options.maxColor]],this.stops.forEach((function(b){b.color=d(b[1])}))},o.prototype.setOptions=function(b){t.prototype.setOptions.call(this,b),this.options.crosshair=this.options.marker},o.prototype.setAxisSize=function(){var a,t,b=this.legendSymbol,e=this.chart,r=e.options.legend||{};b?(this.left=r=b.attr("x"),this.top=a=b.attr("y"),this.width=t=b.attr("width"),this.height=b=b.attr("height"),this.right=e.chartWidth-r-t,this.bottom=e.chartHeight-a-b,this.len=this.horiz?t:b,this.pos=this.horiz?r:a):this.len=(this.horiz?r.symbolWidth:r.symbolHeight)||o.defaultLegendLength},o.prototype.normalizedValue=function(b){return this.logarithmic&&(b=this.logarithmic.log2lin(b)),1-(this.max-b)/(this.max-this.min||1)},o.prototype.toColor=function(b,t){var o,e=this.dataClasses,a=this.stops;if(e)for(o=e.length;o--;){var r=e[o],n=r.from;if(a=r.to,(void 0===n||b>=n)&&(void 0===a||b<=a)){var l=r.color;t&&(t.dataClass=o,t.colorIndex=r.colorIndex);break}}else{for(b=this.normalizedValue(b),o=a.length;o--&&!(b>a[o][0]););n=a[o]||a[o+1],b=1-((a=a[o+1]||n)[0]-b)/(a[0]-n[0]||1),l=n.color.tweenTo(a.color,b)}return l},o.prototype.getOffset=function(){var b=this.legendGroup,o=this.chart.axisOffset[this.side];b&&(this.axisParent=b,t.prototype.getOffset.call(this),this.added||(this.added=!0,this.labelLeft=0,this.labelRight=this.width),this.chart.axisOffset[this.side]=o)},o.prototype.setLegendColor=function(){var b=this.reversed,t=b?1:0;b=b?0:1,t=this.horiz?[t,0,b,0]:[0,b,0,t],this.legendColor={linearGradient:{x1:t[0],y1:t[1],x2:t[2],y2:t[3]},stops:this.stops}},o.prototype.drawLegendSymbol=function(b,t){var e=b.padding,a=b.options,r=this.horiz,g=q(a.symbolWidth,r?o.defaultLegendLength:12),n=q(a.symbolHeight,r?12:o.defaultLegendLength),l=q(a.labelPadding,r?16:30);a=q(a.itemDistance,10),this.setLegendColor(),t.legendSymbol=this.chart.renderer.rect(0,b.baseline-11,g,n).attr({zIndex:1}).add(t.legendGroup),this.legendItemWidth=g+e+(r?a:l),this.legendItemHeight=n+e+(r?l:0)},o.prototype.setState=function(b){this.series.forEach((function(t){t.setState(b)}))},o.prototype.setVisible=function(){},o.prototype.getSeriesExtremes=function(){var t,b=this.series,o=b.length;for(this.dataMin=1/0,this.dataMax=-1/0;o--;){var a=b[o],e=a.colorKey=q(a.options.colorKey,a.colorKey,a.pointValKey,a.zoneAxis,"y"),g=a.pointArrayMap,r=a[e+"Min"]&&a[e+"Max"];if(a[e+"Data"])var n=a[e+"Data"];else if(g){n=[],g=g.indexOf(e);var l=a.yData;if(0<=g&&l)for(t=0;t<l.length;t++)n.push(q(l[t][g],l[t]))}else n=a.yData;r?(a.minColorValue=a[e+"Min"],a.maxColorValue=a[e+"Max"]):(n=y.prototype.getExtremes.call(a,n),a.minColorValue=n.dataMin,a.maxColorValue=n.dataMax),void 0!==a.minColorValue&&(this.dataMin=Math.min(this.dataMin,a.minColorValue),this.dataMax=Math.max(this.dataMax,a.maxColorValue)),r||y.prototype.applyExtremes.call(a)}},o.prototype.drawCrosshair=function(b,o){var e=o&&o.plotX,a=o&&o.plotY,r=this.pos,g=this.len;if(o){var n=this.toPixels(o.getNestedProperty(o.series.colorKey));n<r?n=r-2:n>r+g&&(n=r+g+2),o.plotX=n,o.plotY=this.len-n,t.prototype.drawCrosshair.call(this,b,o),o.plotX=e,o.plotY=a,this.cross&&!this.cross.addedToColorAxis&&this.legendGroup&&(this.cross.addClass("highcharts-coloraxis-marker").add(this.legendGroup),this.cross.addedToColorAxis=!0,this.chart.styledMode||"object"!=typeof this.crosshair||this.cross.attr({fill:this.crosshair.color}))}},o.prototype.getPlotLinePath=function(b){var o=this.left,e=b.translatedValue,a=this.top;return x(e)?this.horiz?[["M",e-4,a-6],["L",e+4,a-6],["L",e,a],["Z"]]:[["M",o,e],["L",o-6,e+6],["L",o-6,e-6],["Z"]]:t.prototype.getPlotLinePath.call(this,b)},o.prototype.update=function(b,o){var e=this.chart.legend;this.series.forEach((function(a){a.isDirtyData=!0})),(b.dataClasses&&e.allItems||this.dataClasses)&&this.destroyItems(),t.prototype.update.call(this,b,o),this.legendItem&&(this.setLegendColor(),e.colorizeItem(this,!0))},o.prototype.destroyItems=function(){var b=this.chart;this.legendItem?b.legend.destroyItem(this):this.legendItems&&this.legendItems.forEach((function(t){b.legend.destroyItem(t)})),b.isDirtyLegend=!0},o.prototype.destroy=function(){this.chart.isDirtyLegend=!0,this.destroyItems(),t.prototype.destroy.apply(this,[].slice.call(arguments))},o.prototype.remove=function(b){this.destroyItems(),t.prototype.remove.call(this,b)},o.prototype.getDataClassLegendSymbols=function(){var t,b=this,o=b.chart,e=b.legendItems,a=o.options.legend,r=a.valueDecimals,g=a.valueSuffix||"";return e.length||b.dataClasses.forEach((function(a,l){var h=a.from,c=a.to,d=o.numberFormatter,y=!0;t="",void 0===h?t="< ":void 0===c&&(t="> "),void 0!==h&&(t+=d(h,r)+g),void 0!==h&&void 0!==c&&(t+=" - "),void 0!==c&&(t+=d(c,r)+g),e.push(m({chart:o,name:t,options:{},drawLegendSymbol:n.drawRectangle,visible:!0,setState:f,isDataClass:!0,setVisible:function(){y=b.visible=!y,b.series.forEach((function(a){a.points.forEach((function(a){a.dataClass===l&&a.setVisible(y)}))})),o.legend.colorizeItem(this,y)}},a))})),e},o.defaultColorAxisOptions=p,o.defaultLegendLength=200,o.keepProps=["legendGroup","legendItemHeight","legendItemWidth","legendItem","legendSymbol"],o}(t),Array.prototype.push.apply(t.keepProps,o.keepProps),o})),o(t,"masters/modules/coloraxis.src.js",[t["Core/Globals.js"],t["Core/Axis/Color/ColorAxis.js"]],(function(t,o){t.ColorAxis=o,o.compose(t.Chart,t.Fx,t.Legend,t.Series)}))},t.exports?(l.default=l,t.exports=l):(r=[e(129)],void 0===(n=function(t){return l(t),l.Highcharts=t,l}.apply(o,r))||(t.exports=n))}}]);
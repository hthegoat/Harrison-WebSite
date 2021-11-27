/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{299:function(t,o,e){"use strict";var r,n,l;l=function(t){var o=t?t._modules:{};function e(t,path,o,e){t.hasOwnProperty(path)||(t[path]=e.apply(null,o))}e(o,"Core/Axis/Color/ColorAxisComposition.js",[o["Core/Color/Color.js"],o["Core/Utilities.js"]],(function(t,o){var e,r=t.parse,n=o.addEvent,l=o.extend,h=o.merge,c=o.pick,d=o.splat;return function(t){var o,e=[];function f(){var t=this,e=this.options;this.colorAxis=[],e.colorAxis&&(e.colorAxis=d(e.colorAxis),e.colorAxis.forEach((function(e,i){e.index=i,new o(t,e)})))}function y(t){var o,i,e=this,r=this.chart.colorAxis||[],n=function(o){var i=t.allItems.indexOf(o);-1!==i&&(e.destroyItem(t.allItems[i]),t.allItems.splice(i,1))},l=[];for(r.forEach((function(t){(o=t.options)&&o.showInLegend&&(o.dataClasses&&o.visible?l=l.concat(t.getDataClassLegendSymbols()):o.visible&&l.push(t),t.series.forEach((function(t){t.options.showInLegend&&!o.dataClasses||("point"===t.options.legendType?t.points.forEach((function(t){n(t)})):n(t))})))})),i=l.length;i--;)t.allItems.unshift(l[i])}function m(t){t.visible&&t.item.legendColor&&t.item.legendSymbol.attr({fill:t.item.legendColor})}function x(){var t=this.chart.colorAxis;t&&t.forEach((function(t){t.update({},arguments[2])}))}function v(){(this.chart.colorAxis&&this.chart.colorAxis.length||this.colorAttribs)&&this.translateColors()}function C(){var t=this.axisTypes;t?-1===t.indexOf("colorAxis")&&t.push("colorAxis"):this.axisTypes=["colorAxis"]}function A(t){var o=this,e=t?"show":"hide";o.visible=o.options.visible=Boolean(t),["graphic","dataLabel"].forEach((function(t){o[t]&&o[t][e]()})),this.series.buildKDTree()}function w(){var t=this,o=this.data.length?this.data:this.points,e=this.options.nullColor,r=this.colorAxis,n=this.colorKey;o.forEach((function(o){var l=o.getNestedProperty(n),h=o.options.color||(o.isNull||null===o.value?e:r&&void 0!==l?r.toColor(l,o):o.color||t.color);h&&o.color!==h&&(o.color=h,"point"===t.options.legendType&&o.legendItem&&t.chart.legend.colorizeItem(o,o.visible))}))}function M(){this.elem.attr("fill",r(this.start).tweenTo(r(this.end),this.pos),void 0,!0)}function k(){this.elem.attr("stroke",r(this.start).tweenTo(r(this.end),this.pos),void 0,!0)}t.compose=function(t,r,d,O,L){if(o||(o=t),-1===e.indexOf(r)){e.push(r);var P=r.prototype;P.collectionsWithUpdate.push("colorAxis"),P.collectionsWithInit.colorAxis=[P.addColorAxis],n(r,"afterGetAxes",f),function(t){var e=t.prototype.createAxis;t.prototype.createAxis=function(t,r){if("colorAxis"!==t)return e.apply(this,arguments);var n=new o(this,h(r.axis,{index:this[t].length,isX:!1}));return this.isDirtyLegend=!0,this.axes.forEach((function(t){t.series=[]})),this.series.forEach((function(t){t.bindAxes(),t.isDirtyData=!0})),c(r.redraw,!0)&&this.redraw(r.animation),n}}(r)}if(-1===e.indexOf(d)){e.push(d);var I=d.prototype;I.fillSetter=M,I.strokeSetter=k}-1===e.indexOf(O)&&(e.push(O),n(O,"afterGetAllItems",y),n(O,"afterColorizeItem",m),n(O,"afterUpdate",x)),-1===e.indexOf(L)&&(e.push(L),l(L.prototype,{optionalAxis:"colorAxis",translateColors:w}),l(L.prototype.pointClass.prototype,{setVisible:A}),n(L,"afterTranslate",v),n(L,"bindAxes",C))},t.pointSetVisible=A}(e||(e={})),e})),e(o,"Core/Axis/Color/ColorAxisDefaults.js",[],(function(){return{lineWidth:0,minPadding:0,maxPadding:0,gridLineWidth:1,tickPixelInterval:72,startOnTick:!0,endOnTick:!0,offset:0,marker:{animation:{duration:50},width:.01,color:"#999999"},labels:{overflow:"justify",rotation:0},minColor:"#e6ebf5",maxColor:"#003399",tickLength:5,showInLegend:!0}})),e(o,"Core/Axis/Color/ColorAxis.js",[o["Core/Axis/Axis.js"],o["Core/Color/Color.js"],o["Core/Axis/Color/ColorAxisComposition.js"],o["Core/Axis/Color/ColorAxisDefaults.js"],o["Core/Globals.js"],o["Core/Legend/LegendSymbol.js"],o["Core/Series/SeriesRegistry.js"],o["Core/Utilities.js"]],(function(t,o,e,r,n,l,h,c){var d,f=this&&this.__extends||(d=function(t,b){return d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])},d(t,b)},function(t,b){function o(){this.constructor=t}d(t,b),t.prototype=null===b?Object.create(b):(o.prototype=b.prototype,new o)}),y=o.parse,m=n.noop,x=h.series,v=c.extend,C=c.isNumber,A=c.merge,w=c.pick,M=function(t){function o(o,e){var r=t.call(this,o,e)||this;return r.beforePadding=!1,r.chart=void 0,r.coll="colorAxis",r.dataClasses=void 0,r.legendItem=void 0,r.legendItems=void 0,r.name="",r.options=void 0,r.stops=void 0,r.visible=!0,r.init(o,e),r}return f(o,t),o.compose=function(t,r,n,l){e.compose(o,t,r,n,l)},o.prototype.init=function(e,r){var n=this,legend=e.options.legend||{},l=r.layout?"vertical"!==r.layout:"vertical"!==legend.layout,h=r.visible,c=A(o.defaultColorAxisOptions,r,{showEmpty:!1,title:null,visible:legend.enabled&&!1!==h});n.coll="colorAxis",n.side=r.side||l?2:1,n.reversed=r.reversed||!l,n.opposite=!l,t.prototype.init.call(this,e,c),n.userOptions.visible=h,r.dataClasses&&n.initDataClasses(r),n.initStops(),n.horiz=l,n.zoomEnabled=!1},o.prototype.initDataClasses=function(t){var o,e=this,r=e.chart,n=e.options,l=t.dataClasses.length,h=0,c=r.options.chart.colorCount;e.dataClasses=o=[],e.legendItems=[],(t.dataClasses||[]).forEach((function(t,i){var e;t=A(t),o.push(t),!r.styledMode&&t.color||("category"===n.dataClassColor?(r.styledMode||(e=r.options.colors,c=e.length,t.color=e[h]),t.colorIndex=h,++h===c&&(h=0)):t.color=y(n.minColor).tweenTo(y(n.maxColor),l<2?.5:i/(l-1)))}))},o.prototype.hasData=function(){return!!(this.tickPositions||[]).length},o.prototype.setTickPositions=function(){if(!this.dataClasses)return t.prototype.setTickPositions.call(this)},o.prototype.initStops=function(){var t=this;t.stops=t.options.stops||[[0,t.options.minColor],[1,t.options.maxColor]],t.stops.forEach((function(t){t.color=y(t[1])}))},o.prototype.setOptions=function(o){t.prototype.setOptions.call(this,o),this.options.crosshair=this.options.marker},o.prototype.setAxisSize=function(){var t,e,r,n,symbol=this.legendSymbol,l=this.chart,h=l.options.legend||{};symbol?(this.left=t=symbol.attr("x"),this.top=e=symbol.attr("y"),this.width=r=symbol.attr("width"),this.height=n=symbol.attr("height"),this.right=l.chartWidth-t-r,this.bottom=l.chartHeight-e-n,this.len=this.horiz?r:n,this.pos=this.horiz?t:e):this.len=(this.horiz?h.symbolWidth:h.symbolHeight)||o.defaultLegendLength},o.prototype.normalizedValue=function(t){var o=this;return o.logarithmic&&(t=o.logarithmic.log2lin(t)),1-(o.max-t)/(o.max-o.min||1)},o.prototype.toColor=function(t,o){var e,r,n,l,h,i,c=this,d=c.dataClasses,f=c.stops;if(d){for(i=d.length;i--;)if(r=(h=d[i]).from,n=h.to,(void 0===r||t>=r)&&(void 0===n||t<=n)){l=h.color,o&&(o.dataClass=i,o.colorIndex=h.colorIndex);break}}else{for(e=c.normalizedValue(t),i=f.length;i--&&!(e>f[i][0]););r=f[i]||f[i+1],e=1-((n=f[i+1]||r)[0]-e)/(n[0]-r[0]||1),l=r.color.tweenTo(n.color,e)}return l},o.prototype.getOffset=function(){var o=this,e=o.legendGroup,r=o.chart.axisOffset[o.side];e&&(o.axisParent=e,t.prototype.getOffset.call(this),o.added||(o.added=!0,o.labelLeft=0,o.labelRight=o.width),o.chart.axisOffset[o.side]=r)},o.prototype.setLegendColor=function(){var t=this,o=t.horiz,e=t.reversed,r=e?1:0,n=e?0:1,l=o?[r,0,n,0]:[0,n,0,r];t.legendColor={linearGradient:{x1:l[0],y1:l[1],x2:l[2],y2:l[3]},stops:t.stops}},o.prototype.drawLegendSymbol=function(legend,t){var e=this,r=legend.padding,n=legend.options,l=e.horiz,h=w(n.symbolWidth,l?o.defaultLegendLength:12),c=w(n.symbolHeight,l?12:o.defaultLegendLength),d=w(n.labelPadding,l?16:30),f=w(n.itemDistance,10);this.setLegendColor(),t.legendSymbol=this.chart.renderer.rect(0,legend.baseline-11,h,c).attr({zIndex:1}).add(t.legendGroup),e.legendItemWidth=h+r+(l?f:d),e.legendItemHeight=c+r+(l?d:0)},o.prototype.setState=function(t){this.series.forEach((function(o){o.setState(t)}))},o.prototype.setVisible=function(){},o.prototype.getSeriesExtremes=function(){var t,o,e,r,n,l,h,c,d=this.series,i=d.length;for(this.dataMin=1/0,this.dataMax=-1/0;i--;){if(o=(l=d[i]).colorKey=w(l.options.colorKey,l.colorKey,l.pointValKey,l.zoneAxis,"y"),r=l.pointArrayMap,n=l[o+"Min"]&&l[o+"Max"],l[o+"Data"])t=l[o+"Data"];else if(r){if(t=[],e=r.indexOf(o),h=l.yData,e>=0&&h)for(c=0;c<h.length;c++)t.push(w(h[c][e],h[c]))}else t=l.yData;if(n)l.minColorValue=l[o+"Min"],l.maxColorValue=l[o+"Max"];else{var f=x.prototype.getExtremes.call(l,t);l.minColorValue=f.dataMin,l.maxColorValue=f.dataMax}void 0!==l.minColorValue&&(this.dataMin=Math.min(this.dataMin,l.minColorValue),this.dataMax=Math.max(this.dataMax,l.maxColorValue)),n||x.prototype.applyExtremes.call(l)}},o.prototype.drawCrosshair=function(o,e){var r,n=this,l=e&&e.plotX,h=e&&e.plotY,c=n.pos,d=n.len;e&&((r=n.toPixels(e.getNestedProperty(e.series.colorKey)))<c?r=c-2:r>c+d&&(r=c+d+2),e.plotX=r,e.plotY=n.len-r,t.prototype.drawCrosshair.call(this,o,e),e.plotX=l,e.plotY=h,n.cross&&!n.cross.addedToColorAxis&&n.legendGroup&&(n.cross.addClass("highcharts-coloraxis-marker").add(n.legendGroup),n.cross.addedToColorAxis=!0,n.chart.styledMode||"object"!=typeof n.crosshair||n.cross.attr({fill:n.crosshair.color})))},o.prototype.getPlotLinePath=function(o){var e=this,r=e.left,n=o.translatedValue,l=e.top;return C(n)?e.horiz?[["M",n-4,l-6],["L",n+4,l-6],["L",n,l],["Z"]]:[["M",r,n],["L",r-6,n+6],["L",r-6,n-6],["Z"]]:t.prototype.getPlotLinePath.call(this,o)},o.prototype.update=function(o,e){var r=this,legend=r.chart.legend;this.series.forEach((function(t){t.isDirtyData=!0})),(o.dataClasses&&legend.allItems||r.dataClasses)&&r.destroyItems(),t.prototype.update.call(this,o,e),r.legendItem&&(r.setLegendColor(),legend.colorizeItem(this,!0))},o.prototype.destroyItems=function(){var t=this,o=t.chart;t.legendItem?o.legend.destroyItem(t):t.legendItems&&t.legendItems.forEach((function(t){o.legend.destroyItem(t)})),o.isDirtyLegend=!0},o.prototype.destroy=function(){this.chart.isDirtyLegend=!0,this.destroyItems(),t.prototype.destroy.apply(this,[].slice.call(arguments))},o.prototype.remove=function(o){this.destroyItems(),t.prototype.remove.call(this,o)},o.prototype.getDataClassLegendSymbols=function(){var t,o=this,e=o.chart,r=o.legendItems,n=e.options.legend,h=n.valueDecimals,c=n.valueSuffix||"";return r.length||o.dataClasses.forEach((function(n,i){var d=n.from,f=n.to,y=e.numberFormatter,x=!0;t="",void 0===d?t="< ":void 0===f&&(t="> "),void 0!==d&&(t+=y(d,h)+c),void 0!==d&&void 0!==f&&(t+=" - "),void 0!==f&&(t+=y(f,h)+c),r.push(v({chart:e,name:t,options:{},drawLegendSymbol:l.drawRectangle,visible:!0,setState:m,isDataClass:!0,setVisible:function(){x=o.visible=!x,o.series.forEach((function(t){t.points.forEach((function(t){t.dataClass===i&&t.setVisible(x)}))})),e.legend.colorizeItem(this,x)}},n))})),r},o.defaultColorAxisOptions=r,o.defaultLegendLength=200,o.keepProps=["legendGroup","legendItemHeight","legendItemWidth","legendItem","legendSymbol"],o}(t);return Array.prototype.push.apply(t.keepProps,M.keepProps),M})),e(o,"Series/ColorMapComposition.js",[o["Core/Utilities.js"]],(function(t){var o,e=t.defined,r=t.wrap,n={pointArrayMap:["value"],axisTypes:["xAxis","yAxis","colorAxis"],trackerGroups:["group","markerGroup","dataLabelsGroup"],parallelArrays:["x","y","value"],colorKey:"value"};return function(t){t.colorMapSeriesMixin=n;var o=[];function l(){return null!==this.value&&this.value!==1/0&&this.value!==-1/0}function h(t){var o={};return!e(t.color)||t.state&&"normal"!==t.state||(o[this.colorProp||"fill"]=t.color),o}function c(t,o,e){var r=t.call(this,o,e);return o.moveToTopOnHover&&(r.zIndex="hover"===e?1:0),r}t.compose=function(t,e){if(e&&-1===o.indexOf(e)){o.push(e);var n=e.prototype;n.dataLabelOnNull=!0,n.moveToTopOnHover=!0,n.isValid=l}if(-1===o.indexOf(t)){o.push(t);var d=t.prototype;d.colorAttribs=h,r(d,"pointAttribs",c)}return t},t.seriesColorAttribs=h}(o||(o={})),o})),e(o,"Series/Heatmap/HeatmapPoint.js",[o["Core/Series/SeriesRegistry.js"],o["Core/Utilities.js"]],(function(t,o){var e,r=this&&this.__extends||(e=function(t,b){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])},e(t,b)},function(t,b){function o(){this.constructor=t}e(t,b),t.prototype=null===b?Object.create(b):(o.prototype=b.prototype,new o)}),n=t.seriesTypes.scatter.prototype.pointClass,l=o.clamp,h=o.extend,c=o.pick,d=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.options=void 0,o.series=void 0,o.value=void 0,o.x=void 0,o.y=void 0,o}return r(o,t),o.prototype.applyOptions=function(o,e){var r=t.prototype.applyOptions.call(this,o,e);return r.formatPrefix=r.isNull||null===r.value?"null":"point",r},o.prototype.getCellAttributes=function(){var t=this,o=t.series,e=o.options,r=(e.colsize||1)/2,n=(e.rowsize||1)/2,h=o.xAxis,d=o.yAxis,f=t.options.marker||o.options.marker,y=o.pointPlacementToXValue(),m=c(t.pointPadding,e.pointPadding,0),x={x1:l(Math.round(h.len-(h.translate(t.x-r,!1,!0,!1,!0,-y)||0)),-h.len,2*h.len),x2:l(Math.round(h.len-(h.translate(t.x+r,!1,!0,!1,!0,-y)||0)),-h.len,2*h.len),y1:l(Math.round(d.translate(t.y-n,!1,!0,!1,!0)||0),-d.len,2*d.len),y2:l(Math.round(d.translate(t.y+n,!1,!0,!1,!0)||0),-d.len,2*d.len)};return[["width","x"],["height","y"]].forEach((function(t){var o=t[0],e=t[1],r=e+"1",n=e+"2",l=Math.abs(x[r]-x[n]),h=f&&f.lineWidth||0,c=Math.abs(x[r]+x[n])/2;f[o]&&f[o]<l&&(x[r]=c-f[o]/2-h/2,x[n]=c+f[o]/2+h/2),m&&("y"===e&&(r=n,n=e+"1"),x[r]+=m,x[n]-=m)})),x},o.prototype.haloPath=function(t){if(!t)return[];var rect=this.shapeArgs;return["M",rect.x-t,rect.y-t,"L",rect.x-t,rect.y+rect.height+t,rect.x+rect.width+t,rect.y+rect.height+t,rect.x+rect.width+t,rect.y-t,"Z"]},o.prototype.isValid=function(){return this.value!==1/0&&this.value!==-1/0},o}(n);return h(d.prototype,{dataLabelOnNull:!0,moveToTopOnHover:!0,ttBelow:!1}),d})),e(o,"Series/Heatmap/HeatmapSeries.js",[o["Core/Color/Color.js"],o["Series/ColorMapComposition.js"],o["Series/Heatmap/HeatmapPoint.js"],o["Core/Legend/LegendSymbol.js"],o["Core/Series/SeriesRegistry.js"],o["Core/Renderer/SVG/SVGRenderer.js"],o["Core/Utilities.js"]],(function(t,o,e,r,n,l,h){var c,d=this&&this.__extends||(c=function(t,b){return c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])},c(t,b)},function(t,b){function o(){this.constructor=t}c(t,b),t.prototype=null===b?Object.create(b):(o.prototype=b.prototype,new o)}),f=o.colorMapSeriesMixin,y=n.series,m=n.seriesTypes,x=m.column,v=m.scatter,C=l.prototype.symbols,A=h.extend,w=h.fireEvent,M=h.isNumber,k=h.merge,O=h.pick,L=function(o){function e(){var t=null!==o&&o.apply(this,arguments)||this;return t.colorAxis=void 0,t.data=void 0,t.options=void 0,t.points=void 0,t.valueMax=NaN,t.valueMin=NaN,t}return d(e,o),e.prototype.drawPoints=function(){var t=this;((this.options.marker||{}).enabled||this._hasPointMarkers)&&(y.prototype.drawPoints.call(this),this.points.forEach((function(o){o.graphic&&(o.graphic[t.chart.styledMode?"css":"animate"](t.colorAttribs(o)),t.options.borderRadius&&o.graphic.attr({r:t.options.borderRadius}),(o.shapeArgs||{}).r=t.options.borderRadius,(o.shapeArgs||{}).d=o.graphic.pathArray,null===o.value&&o.graphic.addClass("highcharts-null-point"))})))},e.prototype.getExtremes=function(){var t=y.prototype.getExtremes.call(this,this.valueData),o=t.dataMin,e=t.dataMax;return M(o)&&(this.valueMin=o),M(e)&&(this.valueMax=e),y.prototype.getExtremes.call(this)},e.prototype.getValidPoints=function(t,o){return y.prototype.getValidPoints.call(this,t,o,!0)},e.prototype.hasData=function(){return!!this.processedXData.length},e.prototype.init=function(){var t;y.prototype.init.apply(this,arguments),(t=this.options).pointRange=O(t.pointRange,t.colsize||1),this.yAxis.axisPointRange=t.rowsize||1,C.ellipse=C.circle},e.prototype.markerAttribs=function(t,o){var e,r,n=t.marker||{},l=this.options.marker||{},h=t.shapeArgs||{},c=t.hasImage,d={};return c?{x:t.plotX,y:t.plotY}:(o&&(e=l.states[o]||{},r=n.states&&n.states[o]||{},[["width","x"],["height","y"]].forEach((function(t){d[t[0]]=(r[t[0]]||e[t[0]]||h[t[0]])+(r[t[0]+"Plus"]||e[t[0]+"Plus"]||0),d[t[1]]=h[t[1]]+(h[t[0]]-d[t[0]])/2}))),o?d:h)},e.prototype.pointAttribs=function(o,e){var r,n,l=this,h=y.prototype.pointAttribs.call(l,o,e),c=l.options||{},d=l.chart.options.plotOptions||{},f=d.series||{},m=d.heatmap||{},x=o&&o.options.borderColor||c.borderColor||m.borderColor||f.borderColor,v=o&&o.options.borderWidth||c.borderWidth||m.borderWidth||f.borderWidth||h["stroke-width"];return h.stroke=o&&o.marker&&o.marker.lineColor||c.marker&&c.marker.lineColor||x||this.color,h["stroke-width"]=v,e&&(n=(r=k(c.states[e],c.marker&&c.marker.states[e],o&&o.options.states&&o.options.states[e]||{})).brightness,h.fill=r.color||t.parse(h.fill).brighten(n||0).get(),h.stroke=r.lineColor),h},e.prototype.setClip=function(t){var o=this,e=o.chart;y.prototype.setClip.apply(o,arguments),(!1!==o.options.clip||t)&&o.markerGroup.clip((t||o.clipBox)&&o.sharedClipKey?e.sharedClips[o.sharedClipKey]:e.clipRect)},e.prototype.translate=function(){var t=this,o=t.options,symbol=o.marker&&o.marker.symbol||"rect",e=C[symbol]?symbol:"rect",r=-1!==["circle","square"].indexOf(e);t.generatePoints(),t.points.forEach((function(t){var o,n,l,h=t.getCellAttributes(),c={};c.x=Math.min(h.x1,h.x2),c.y=Math.min(h.y1,h.y2),c.width=Math.max(Math.abs(h.x2-h.x1),0),c.height=Math.max(Math.abs(h.y2-h.y1),0),l=t.hasImage=0===(t.marker&&t.marker.symbol||symbol||"").indexOf("url"),r&&(n=Math.abs(c.width-c.height),c.x=Math.min(h.x1,h.x2)+(c.width<c.height?0:n/2),c.y=Math.min(h.y1,h.y2)+(c.width<c.height?n/2:0),c.width=c.height=Math.min(c.width,c.height)),o={plotX:(h.x1+h.x2)/2,plotY:(h.y1+h.y2)/2,clientX:(h.x1+h.x2)/2,shapeType:"path",shapeArgs:k(!0,c,{d:C[e](c.x,c.y,c.width,c.height)})},l&&(t.marker={width:c.width,height:c.height}),A(t,o)})),w(t,"afterTranslate")},e.defaultOptions=k(v.defaultOptions,{animation:!1,borderRadius:0,borderWidth:0,nullColor:"#f7f7f7",dataLabels:{formatter:function(){var t=this.series.chart.numberFormatter,o=this.point.value;return M(o)?t(o,-1):""},inside:!0,verticalAlign:"middle",crop:!1,overflow:!1,padding:0},marker:{symbol:"rect",radius:0,lineColor:void 0,states:{hover:{lineWidthPlus:0},select:{}}},clip:!0,pointRange:null,tooltip:{pointFormat:"{point.x}, {point.y}: {point.value}<br/>"},states:{hover:{halo:!1,brightness:.2}}}),e}(v);return A(L.prototype,{alignDataLabel:x.prototype.alignDataLabel,axisTypes:f.axisTypes,colorKey:"value",directTouch:!0,drawLegendSymbol:r.drawRectangle,getExtremesFromAll:!0,getSymbol:y.prototype.getSymbol,parallelArrays:f.parallelArrays,pointArrayMap:["y","value"],pointClass:e,trackerGroups:f.trackerGroups}),o.compose(L),n.registerSeriesType("heatmap",L),L})),e(o,"masters/modules/heatmap.src.js",[o["Core/Globals.js"],o["Core/Axis/Color/ColorAxis.js"]],(function(t,o){var e=t;e.ColorAxis=o,o.compose(e.Chart,e.Fx,e.Legend,e.Series)}))},t.exports?(l.default=l,t.exports=l):(r=[e(129)],void 0===(n=function(t){return l(t),l.Highcharts=t,l}.apply(o,r))||(t.exports=n))}}]);
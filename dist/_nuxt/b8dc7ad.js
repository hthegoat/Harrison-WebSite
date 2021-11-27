(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{280:function(e,r,t){"use strict";var o,n,d;d=function(e){function r(e,r,t,o){e.hasOwnProperty(r)||(e[r]=o.apply(null,t))}r(e=e?e._modules:{},"Extensions/DraggablePoints.js",[e["Core/Animation/AnimationUtilities.js"],e["Core/Chart/Chart.js"],e["Core/Globals.js"],e["Core/Series/Point.js"],e["Core/Series/Series.js"],e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],(function(e,r,t,o,n,d,p){function l(a){return{left:"right",right:"left",top:"bottom",bottom:"top"}[a]}function h(a){var e,b=["draggableX","draggableY"];for(F(a.dragDropProps,(function(a){a.optionName&&b.push(a.optionName)})),e=b.length;e--;)if(a.options.dragDrop[b[e]])return!0}function c(a,b){return void 0===a.chartX||void 0===a.chartY?b.pointer.normalize(a):a}function m(a,b,e,r){var t=b.map((function(b){return A(a,b,e,r)}));return function(){t.forEach((function(a){a()}))}}function x(a,b,e){var r={chartX:a.chartX,chartY:a.chartY,guideBox:e&&{x:e.attr("x"),y:e.attr("y"),width:e.attr("width"),height:e.attr("height")},points:{}};return b.forEach((function(b){var e={};F(b.series.dragDropProps,(function(r,t){r=b.series[r.axis+"Axis"],e[t]=b[t],e[t+"Offset"]=r.toPixels(b[t])-(r.horiz?a.chartX:a.chartY)})),e.point=b,r.points[b.id]=e})),r}function f(a,b){var e,r=function(a){var b=a.series,e=[],r=b.options.dragDrop.groupBy;return b.isSeriesBoosting?b.options.data.forEach((function(a,r){e.push((new b.pointClass).init(b,a)),e[e.length-1].index=r})):e=b.points,a.options[r]?e.filter((function(b){return b.options[r]===a.options[r]})):[a]}(b),t=b.series,o=t.chart;M(t.options.dragDrop&&t.options.dragDrop.liveRedraw,!0)||(o.dragGuideBox=e=t.getGuideBox(r),o.setGuideBoxState("default",t.options.dragDrop.guideBox).add(t.group)),o.dragDropData={origin:x(a,r,e),point:b,groupedPoints:r,isDragging:!0}}function v(a,b){var e=a.dragDropData.newPoints;b=S(b),a.isDragDropAnimating=!0,F(e,(function(a){a.point.update(a.newValues,!1)})),a.redraw(b),setTimeout((function(){delete a.isDragDropAnimating,a.hoverPoint&&!a.dragHandles&&a.hoverPoint.showDragHandles()}),b.duration)}function y(a){var b=a.series&&a.series.chart,e=b&&b.dragDropData;!b||!b.dragHandles||e&&(e.isDragging&&e.draggedPastSensitivity||e.isHoveringHandle===a.id)||b.hideDragHandles()}function D(a){var e,b=0;for(e in a)Object.hasOwnProperty.call(a,e)&&b++;return b}function P(a){for(var b in a)if(Object.hasOwnProperty.call(a,b))return a[b]}function w(a,b){if(!b.zoomOrPanKeyPressed(a)){var e=b.dragDropData,r=0;if(e&&e.isDragging&&e.point.series){var t=e.point;r=t.series.options.dragDrop,a.preventDefault(),e.draggedPastSensitivity||(e.draggedPastSensitivity=function(a,b,e){var r=b.dragDropData.origin;b=r.chartX,r=r.chartY;var t=a.chartX;return a=a.chartY,Math.sqrt((t-b)*(t-b)+(a-r)*(a-r))>e}(a,b,M(t.options.dragDrop&&t.options.dragDrop.dragSensitivity,r&&r.dragSensitivity,2))),e.draggedPastSensitivity&&(e.newPoints=function(a,b){var e=a.point,r=q(e.series.options.dragDrop,e.options.dragDrop),t={},o=a.updateProp,n={};return F(e.series.dragDropProps,(function(a,b){o&&(o!==b||!a.resize||a.optionName&&!1===r[a.optionName])||(o||a.move&&("x"===a.axis&&r.draggableX||"y"===a.axis&&r.draggableY))&&(t[b]=a)})),(o?[e]:a.groupedPoints).forEach((function(e){n[e.id]={point:e,newValues:e.getDropValues(a.origin,b,t)}})),n}(e,a),b=1===(r=D(b=e.newPoints))?P(b):null,t.firePointEvent("drag",{origin:e.origin,newPoints:e.newPoints,newPoint:b&&b.newValues,newPointId:b&&b.point.id,numNewPoints:r,chartX:a.chartX,chartY:a.chartY},(function(){var b=t.series,e=b.chart,r=e.dragDropData,o=q(b.options.dragDrop,t.options.dragDrop),g=o.draggableX,n=o.draggableY;b=r.origin;var d=a.chartX-b.chartX,h=a.chartY-b.chartY,u=d;if(r=r.updateProp,e.inverted&&(d=-h,h=-u),M(o.liveRedraw,!0))v(e,!1),t.showDragHandles();else if(r){g=d,e=h,r=(n=(u=t.series).chart).dragDropData,o=u.dragDropProps[r.updateProp];var c=r.newPoints[t.id].newValues,p="function"==typeof o.resizeSide?o.resizeSide(c,t):o.resizeSide;switch(o.beforeResize&&o.beforeResize(n.dragGuideBox,c,t),n=n.dragGuideBox,u="x"===o.axis&&u.xAxis.reversed||"y"===o.axis&&u.yAxis.reversed?l(p):p,g="x"===o.axis?g-(r.origin.prevdX||0):0,e="y"===o.axis?e-(r.origin.prevdY||0):0,u){case"left":var m={x:n.attr("x")+g,width:Math.max(1,n.attr("width")-g)};break;case"right":m={width:Math.max(1,n.attr("width")+g)};break;case"top":m={y:n.attr("y")+e,height:Math.max(1,n.attr("height")-e)};break;case"bottom":m={height:Math.max(1,n.attr("height")+e)}}n.attr(m)}else e.dragGuideBox.translate(g?d:0,n?h:0);b.prevdX=d,b.prevdY=h})))}}}function z(a,b){var e=b.dragDropData;if(e&&e.isDragging&&e.draggedPastSensitivity&&e.point.series){var r=e.point,t=e.newPoints,o=D(t),g=1===o?P(t):null;b.dragHandles&&b.hideDragHandles(),a.preventDefault(),b.cancelClick=!0,r.firePointEvent("drop",{origin:e.origin,chartX:a.chartX,chartY:a.chartY,newPoints:t,numNewPoints:o,newPoint:g&&g.newValues,newPointId:g&&g.point.id},(function(){v(b)}))}delete b.dragDropData,b.dragGuideBox&&(b.dragGuideBox.destroy(),delete b.dragGuideBox)}function H(a){var b=a.container,e=t.doc;(function(a){var b=a.series?a.series.length:0;if(a.hasCartesianSeries&&!a.polar)for(;b--;)if(a.series[b].options.dragDrop&&h(a.series[b]))return!0})(a)&&(m(b,["mousedown","touchstart"],(function(b){b=c(b,a);var e=a.hoverPoint,r=q(e&&e.series.options.dragDrop,e&&e.options.dragDrop),t=r.draggableX||!1;r=r.draggableY||!1,a.cancelClick=!1,!t&&!r||a.zoomOrPanKeyPressed(b)||a.hasDraggedAnnotation||(a.dragDropData&&a.dragDropData.isDragging?z(b,a):e&&function(a){var e,r,b=a.series,t=b.options.dragDrop||{};return a=a.options&&a.options.dragDrop,F(b.dragDropProps,(function(a){"x"===a.axis&&a.move?e=!0:"y"===a.axis&&a.move&&(r=!0)})),(t.draggableX&&e||t.draggableY&&r)&&!(a&&!1===a.draggableX&&!1===a.draggableY)&&b.yAxis&&b.xAxis}(e)&&(a.mouseIsDown=!1,f(b,e),e.firePointEvent("dragStart",b)))})),m(b,["mousemove","touchmove"],(function(b){w(c(b,a),a)}),{passive:!1}),A(b,"mouseleave",(function(b){z(c(b,a),a)})),a.unbindDragDropMouseUp=m(e,["mouseup","touchend"],(function(b){z(c(b,a),a)}),{passive:!1}),a.hasAddedDragDropEvents=!0,A(a,"destroy",(function(){a.unbindDragDropMouseUp&&a.unbindDragDropMouseUp()})))}var S=e.animObject,g=d.seriesTypes,A=p.addEvent,B=p.clamp,N=p.isNumber,q=p.merge,F=p.objectEach,M=p.pick;e=function(a){var b=(a=a.shapeArgs||a.graphic.getBBox()).r||0,e=a.height/2;return[["M",0,b],["L",0,e-5],["A",1,1,0,0,0,0,e+5],["A",1,1,0,0,0,0,e-5],["M",0,e+5],["L",0,a.height-b]]},d=n.prototype.dragDropProps={x:{axis:"x",move:!0},y:{axis:"y",move:!0}},g.flags&&(g.flags.prototype.dragDropProps=d);var V=g.column.prototype.dragDropProps={x:{axis:"x",move:!0},y:{axis:"y",move:!1,resize:!0,beforeResize:function(a,b,e){var r=e.series.translatedThreshold,t=a.attr("y");b.y>=e.series.options.threshold?(b=a.attr("height"),a.attr({height:Math.max(0,Math.round(b+(r?r-(t+b):0)))})):a.attr({y:Math.round(t+(r?r-t:0))})},resizeSide:function(a,b){var e=b.series.chart.dragHandles;return e[b=l(a=a.y>=(b.series.options.threshold||0)?"top":"bottom")]&&(e[b].destroy(),delete e[b]),a},handlePositioner:function(a){var b=a.shapeArgs||a.graphic&&a.graphic.getBBox()||{},e=a.series.yAxis.reversed,r=a.series.options.threshold||0;return a=a.y||0,{x:b.x||0,y:!e&&a>=r||e&&a<r?b.y||0:(b.y||0)+(b.height||0)}},handleFormatter:function(a){var b=a.shapeArgs||{};a=b.r||0;var e=(b=b.width||0)/2;return[["M",a,0],["L",e-5,0],["A",1,1,0,0,0,e+5,0],["A",1,1,0,0,0,e-5,0],["M",e+5,0],["L",b-a,0]]}}};if(g.bullet&&(g.bullet.prototype.dragDropProps={x:V.x,y:V.y,target:{optionName:"draggableTarget",axis:"y",move:!0,resize:!0,resizeSide:"top",handlePositioner:function(a){var b=a.targetGraphic.getBBox();return{x:a.barX,y:b.y+b.height/2}},handleFormatter:V.y.handleFormatter}}),g.columnrange&&(g.columnrange.prototype.dragDropProps={x:{axis:"x",move:!0},low:{optionName:"draggableLow",axis:"y",move:!0,resize:!0,resizeSide:"bottom",handlePositioner:function(a){return{x:(a=a.shapeArgs||a.graphic.getBBox()).x||0,y:(a.y||0)+(a.height||0)}},handleFormatter:V.y.handleFormatter,propValidate:function(a,b){return a<=b.high}},high:{optionName:"draggableHigh",axis:"y",move:!0,resize:!0,resizeSide:"top",handlePositioner:function(a){return{x:(a=a.shapeArgs||a.graphic.getBBox()).x||0,y:a.y||0}},handleFormatter:V.y.handleFormatter,propValidate:function(a,b){return a>=b.low}}}),g.boxplot&&(g.boxplot.prototype.dragDropProps={x:V.x,low:{optionName:"draggableLow",axis:"y",move:!0,resize:!0,resizeSide:"bottom",handlePositioner:function(a){return{x:a.shapeArgs.x||0,y:a.lowPlot}},handleFormatter:V.y.handleFormatter,propValidate:function(a,b){return a<=b.q1}},q1:{optionName:"draggableQ1",axis:"y",move:!0,resize:!0,resizeSide:"bottom",handlePositioner:function(a){return{x:a.shapeArgs.x||0,y:a.q1Plot}},handleFormatter:V.y.handleFormatter,propValidate:function(a,b){return a<=b.median&&a>=b.low}},median:{axis:"y",move:!0},q3:{optionName:"draggableQ3",axis:"y",move:!0,resize:!0,resizeSide:"top",handlePositioner:function(a){return{x:a.shapeArgs.x||0,y:a.q3Plot}},handleFormatter:V.y.handleFormatter,propValidate:function(a,b){return a<=b.high&&a>=b.median}},high:{optionName:"draggableHigh",axis:"y",move:!0,resize:!0,resizeSide:"top",handlePositioner:function(a){return{x:a.shapeArgs.x||0,y:a.highPlot}},handleFormatter:V.y.handleFormatter,propValidate:function(a,b){return a>=b.q3}}}),g.ohlc&&(g.ohlc.prototype.dragDropProps={x:V.x,low:{optionName:"draggableLow",axis:"y",move:!0,resize:!0,resizeSide:"bottom",handlePositioner:function(a){return{x:a.shapeArgs.x,y:a.plotLow}},handleFormatter:V.y.handleFormatter,propValidate:function(a,b){return a<=b.open&&a<=b.close}},high:{optionName:"draggableHigh",axis:"y",move:!0,resize:!0,resizeSide:"top",handlePositioner:function(a){return{x:a.shapeArgs.x,y:a.plotHigh}},handleFormatter:V.y.handleFormatter,propValidate:function(a,b){return a>=b.open&&a>=b.close}},open:{optionName:"draggableOpen",axis:"y",move:!0,resize:!0,resizeSide:function(a){return a.open>=a.close?"top":"bottom"},handlePositioner:function(a){return{x:a.shapeArgs.x,y:a.plotOpen}},handleFormatter:V.y.handleFormatter,propValidate:function(a,b){return a<=b.high&&a>=b.low}},close:{optionName:"draggableClose",axis:"y",move:!0,resize:!0,resizeSide:function(a){return a.open>=a.close?"bottom":"top"},handlePositioner:function(a){return{x:a.shapeArgs.x,y:a.plotClose}},handleFormatter:V.y.handleFormatter,propValidate:function(a,b){return a<=b.high&&a>=b.low}}}),g.arearange&&(d=g.columnrange.prototype.dragDropProps,p=function(a){return[["M",0-(a=a.graphic?a.graphic.getBBox().width/2+1:4),0],["a",a,a,0,1,0,2*a,0],["a",a,a,0,1,0,-2*a,0]]},g.arearange.prototype.dragDropProps={x:d.x,low:{optionName:"draggableLow",axis:"y",move:!0,resize:!0,resizeSide:"bottom",handlePositioner:function(a){return(a=a.lowerGraphic&&a.lowerGraphic.getBBox())?{x:a.x+a.width/2,y:a.y+a.height/2}:{x:-999,y:-999}},handleFormatter:p,propValidate:d.low.propValidate},high:{optionName:"draggableHigh",axis:"y",move:!0,resize:!0,resizeSide:"top",handlePositioner:function(a){return(a=a.upperGraphic&&a.upperGraphic.getBBox())?{x:a.x+a.width/2,y:a.y+a.height/2}:{x:-999,y:-999}},handleFormatter:p,propValidate:d.high.propValidate}}),g.waterfall&&(g.waterfall.prototype.dragDropProps={x:V.x,y:q(V.y,{handleFormatter:function(a){return a.isSum||a.isIntermediateSum?null:V.y.handleFormatter(a)}})}),g.xrange){var X=function(a,b){var e=a.series,r=e.xAxis,t=e.yAxis,o=e.chart.inverted;b=r.toPixels(a[b],!0);var g=t.toPixels(a.y,!0);return a=e.columnMetrics?e.columnMetrics.offset:-a.shapeArgs.height/2,o&&(b=r.len-b,g=t.len-g),{x:Math.round(b),y:Math.round(g+a)}};e=g.xrange.prototype.dragDropProps={y:{axis:"y",move:!0},x:{optionName:"draggableX1",axis:"x",move:!0,resize:!0,resizeSide:"left",handlePositioner:function(a){return X(a,"x")},handleFormatter:e,propValidate:function(a,b){return a<=b.x2}},x2:{optionName:"draggableX2",axis:"x",move:!0,resize:!0,resizeSide:"right",handlePositioner:function(a){return X(a,"x2")},handleFormatter:e,propValidate:function(a,b){return a>=b.x}}},g.gantt&&(g.gantt.prototype.dragDropProps={y:e.y,start:q(e.x,{optionName:"draggableStart",validateIndividualDrag:function(a){return!a.milestone}}),end:q(e.x2,{optionName:"draggableEnd",validateIndividualDrag:function(a){return!a.milestone}})})}"gauge pie sunburst wordcloud sankey histogram pareto vector windbarb treemap bellcurve sma map mapline".split(" ").forEach((function(a){g[a]&&(g[a].prototype.dragDropProps=null)}));var C={default:{className:"highcharts-drag-box-default",lineWidth:1,lineColor:"#888",color:"rgba(0, 0, 0, 0.1)",cursor:"move",zIndex:900}},Y={className:"highcharts-drag-handle",color:"#fff",lineColor:"rgba(0, 0, 0, 0.6)",lineWidth:1,zIndex:901};r.prototype.setGuideBoxState=function(a,b){var e=this.dragGuideBox;return b=q(C,b),a=q(b.default,b[a]),e.attr({className:a.className,stroke:a.lineColor,strokeWidth:a.lineWidth,fill:a.color,cursor:a.cursor,zIndex:a.zIndex}).css({pointerEvents:"none"})},o.prototype.getDropValues=function(a,b,e){var r,t=this,o=t.series,n=q(o.options.dragDrop,t.options.dragDrop),g={},d=a.points[t.id];for(r in e)if(Object.hasOwnProperty.call(e,r)){if(void 0!==l){var l=!1;break}l=!0}return F(e,(function(a,e){var r=d[e],h=o[a.axis+"Axis"];h=h.toValue((h.horiz?b.chartX:b.chartY)+d[e+"Offset"]);var c=a.axis.toUpperCase(),m=o[c.toLowerCase()+"Axis"].categories?1:0;m=M(n["dragPrecision"+c],m);var x=M(n["dragMin"+c],-1/0);c=M(n["dragMax"+c],1/0),m&&(h=Math.round(h/m)*m),h=B(h,x,c),l&&a.propValidate&&!a.propValidate(h,t)||void 0===r||(g[e]=h)})),g},n.prototype.getGuideBox=function(a){var e,b=this.chart,r=1/0,t=-1/0,o=1/0,g=-1/0;return a.forEach((function(a){var b=a.graphic&&a.graphic.getBBox()||a.shapeArgs;if(b){var n=void 0,d=a.x2;N(d)&&(n=a.series.xAxis.translate(d,!1,!1,!1,!0)),d=!(b.width||b.height||b.x||b.y),e=!0,r=Math.min(a.plotX||0,n||0,d?1/0:b.x||0,r),t=Math.max(a.plotX||0,n||0,(b.x||0)+(b.width||0),t),o=Math.min(a.plotY||0,d?1/0:b.y||0,o),g=Math.max((b.y||0)+(b.height||0),g)}})),e?b.renderer.rect(r,o,t-r,g-o):b.renderer.g()},o.prototype.showDragHandles=function(){var a=this,b=a.series,e=b.chart,r=e.renderer,t=q(b.options.dragDrop,a.options.dragDrop);F(b.dragDropProps,(function(o,g){var n=q(Y,o.handleOptions,t.dragHandle),d={class:n.className,"stroke-width":n.lineWidth,fill:n.color,stroke:n.lineColor},l=n.pathFormatter||o.handleFormatter,h=o.handlePositioner,x=!o.validateIndividualDrag||o.validateIndividualDrag(a);o.resize&&x&&o.resizeSide&&l&&(t["draggable"+o.axis.toUpperCase()]||t[o.optionName])&&!1!==t[o.optionName]&&(e.dragHandles||(e.dragHandles={group:r.g("drag-drop-handles").add(b.markerGroup||b.group)}),e.dragHandles.point=a.id,h=h(a),d.d=l=l(a),!l||0>h.x||0>h.y||(d.cursor=n.cursor||"x"===o.axis!=!!e.inverted?"ew-resize":"ns-resize",(n=e.dragHandles[o.optionName])||(n=e.dragHandles[o.optionName]=r.path().add(e.dragHandles.group)),n.translate(h.x,h.y).attr(d),m(n.element,["touchstart","mousedown"],(function(b){b=c(b,e);var r=a.series.chart;r.zoomOrPanKeyPressed(b)||(r.mouseIsDown=!1,f(b,a),r.dragDropData.updateProp=b.updateProp=g,a.firePointEvent("dragStart",b),b.stopPropagation(),b.preventDefault())}),{passive:!1}),A(e.dragHandles.group.element,"mouseover",(function(){e.dragDropData=e.dragDropData||{},e.dragDropData.isHoveringHandle=a.id})),m(e.dragHandles.group.element,["touchend","mouseout"],(function(){var b=a.series.chart;b.dragDropData&&a.id===b.dragDropData.isHoveringHandle&&delete b.dragDropData.isHoveringHandle,b.hoverPoint||y(a)}))))}))},r.prototype.hideDragHandles=function(){this.dragHandles&&(F(this.dragHandles,(function(a,b){"group"!==b&&a.destroy&&a.destroy()})),this.dragHandles.group&&this.dragHandles.group.destroy&&this.dragHandles.group.destroy(),delete this.dragHandles)},A(o,"mouseOver",(function(){var a=this;setTimeout((function(){var b=a.series,e=b&&b.chart,r=e&&e.dragDropData,t=e&&e.is3d&&e.is3d();!e||r&&r.isDragging&&r.draggedPastSensitivity||e.isDragDropAnimating||!b.options.dragDrop||t||(e.dragHandles&&e.hideDragHandles(),a.showDragHandles())}),12)})),A(o,"mouseOut",(function(){var a=this;setTimeout((function(){a.series&&y(a)}),10)})),A(o,"remove",(function(){var a=this.series.chart,b=a.dragHandles;b&&b.point===this.id&&a.hideDragHandles()})),r.prototype.zoomOrPanKeyPressed=function(a){var b=this.userOptions.chart||{},e=b.panKey&&b.panKey+"Key";return a[b.zoomKey&&b.zoomKey+"Key"]||a[e]},A(r,"render",(function(){this.hasAddedDragDropEvents||H(this)}))})),r(e,"masters/modules/draggable-points.src.js",[],(function(){}))},e.exports?(d.default=d,e.exports=d):(o=[t(129)],void 0===(n=function(e){return d(e),d.Highcharts=e,d}.apply(r,o))||(e.exports=n))}}]);
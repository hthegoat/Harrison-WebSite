(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{327:function(t,e,o){"use strict";var r,l,b;b=function(b){function g(b,t,g,e){b.hasOwnProperty(t)||(b[t]=e.apply(null,g))}g(b=b?b._modules:{},"Extensions/ParallelCoordinates.js",[b["Core/Axis/Axis.js"],b["Core/Chart/Chart.js"],b["Core/FormatUtilities.js"],b["Core/Globals.js"],b["Core/DefaultOptions.js"],b["Core/Series/Series.js"],b["Core/Utilities.js"]],(function(b,g,q,t,e,o,r){function l(a){var t,e=this.series&&this.series.chart,b=a.apply(this,Array.prototype.slice.call(arguments,1));if(e&&e.hasParallelCoordinates&&!d(b.formattedValue)){var o=e.yAxis[this.x],r=o.options;e=(t=u(r.tooltipValueFormat,r.labels.format))?n(t,y(this,{value:this.y}),e):o.dateTime?e.time.dateFormat(e.time.resolveDTLFormat(r.dateTimeLabelFormats[o.tickPositions.info.unitName]).main,this.y):r.categories?r.categories[this.y]:this.y,b.formattedValue=b.point.formattedValue=e}return b}var n=q.format;q=e.setOptions;var h=r.addEvent,c=r.arrayMax,f=r.arrayMin,d=r.defined,x=r.erase,y=r.extend,v=r.merge,u=r.pick,A=r.splat,C=r.wrap;r=g.prototype;var m={lineWidth:0,tickLength:0,opposite:!0,type:"category"};q({chart:{parallelCoordinates:!1,parallelAxes:{lineWidth:1,title:{text:"",reserveSpace:!1},labels:{x:0,y:4,align:"center",reserveSpace:!1},offset:0}}}),h(g,"init",(function(a){a=a.args[0];var t=A(a.yAxis||{}),b=[],e=t.length;if(this.hasParallelCoordinates=a.chart&&a.chart.parallelCoordinates){for(this.setParallelInfo(a);e<=this.parallelInfo.counter;e++)b.push({});a.legend||(a.legend={}),void 0===a.legend.enabled&&(a.legend.enabled=!1),v(!0,a,{boost:{seriesThreshold:Number.MAX_VALUE},plotOptions:{series:{boostThreshold:Number.MAX_VALUE}}}),a.yAxis=t.concat(b),a.xAxis=v(m,A(a.xAxis||{})[0])}})),h(g,"update",(function(a){(a=a.options).chart&&(d(a.chart.parallelCoordinates)&&(this.hasParallelCoordinates=a.chart.parallelCoordinates),this.options.chart.parallelAxes=v(this.options.chart.parallelAxes,a.chart.parallelAxes)),this.hasParallelCoordinates&&(a.series&&this.setParallelInfo(a),this.yAxis.forEach((function(a){a.update({},!1)})))})),y(r,{setParallelInfo:function(a){var t=this;a=a.series,t.parallelInfo={counter:0},a.forEach((function(a){a.data&&(t.parallelInfo.counter=Math.max(t.parallelInfo.counter,a.data.length-1))}))}}),h(o,"bindAxes",(function(a){if(this.chart.hasParallelCoordinates){var t=this;this.chart.axes.forEach((function(a){t.insert(a.series),a.isDirty=!0})),t.xAxis=this.chart.xAxis[0],t.yAxis=this.chart.yAxis[0],a.preventDefault()}})),h(o,"afterTranslate",(function(){var t,a=this.chart,e=this.points,b=e&&e.length,o=Number.MAX_VALUE;if(this.chart.hasParallelCoordinates){for(t=0;t<b;t++){var r=e[t];if(d(r.y)){r.plotX=a.polar?a.yAxis[t].angleRad||0:a.inverted?a.plotHeight-a.yAxis[t].top+a.plotTop:a.yAxis[t].left-a.plotLeft,r.clientX=r.plotX,r.plotY=a.yAxis[t].translate(r.y,!1,!0,null,!0),void 0!==l&&(o=Math.min(o,Math.abs(r.plotX-l)));var l=r.plotX;r.isInside=a.isInsidePlot(r.plotX,r.plotY,{inverted:a.inverted})}else r.isNull=!0}this.closestPointRangePx=o}}),{order:1}),h(o,"destroy",(function(){this.chart.hasParallelCoordinates&&(this.chart.axes||[]).forEach((function(a){a&&a.series&&(x(a.series,this),a.isDirty=a.forceRedraw=!0)}),this)})),["line","spline"].forEach((function(a){C(t.seriesTypes[a].prototype.pointClass.prototype,"getLabelConfig",l)}));var p,P=function(){function a(a){this.axis=a}return a.prototype.setPosition=function(a,b){var t=this.axis,e=t.chart,o=((this.position||0)+.5)/(e.parallelInfo.counter+1);e.polar?b.angle=360*o:(b[a[0]]=100*o+"%",t[a[1]]=b[a[1]]=0,t[a[2]]=b[a[2]]=null,t[a[3]]=b[a[3]]=null)},a}();return function(a){function b(a){var b=this.chart,t=this.parallelCoordinates,e=["left","width","height","top"];if(b.hasParallelCoordinates)if(b.inverted&&(e=e.reverse()),this.isXAxis)this.options=v(this.options,m,a.userOptions);else{var o=b.yAxis.indexOf(this);this.options=v(this.options,this.chart.options.chart.parallelAxes,a.userOptions),t.position=u(t.position,0<=o?o:b.yAxis.length),t.setPosition(e,this.options)}}function t(a){var b=this.chart,t=this.parallelCoordinates;if(t&&b&&b.hasParallelCoordinates&&!this.isXAxis){var e=t.position,o=[];this.series.forEach((function(a){a.visible&&d(a.yData[e])&&o.push(a.yData[e])})),this.dataMin=f(o),this.dataMax=c(o),a.preventDefault()}}function g(){this.parallelCoordinates||(this.parallelCoordinates=new P(this))}a.compose=function(a){a.keepProps.push("parallel"),h(a,"init",g),h(a,"afterSetOptions",b),h(a,"getSeriesExtremes",t)}}(p||(p={})),p.compose(b),p})),g(b,"masters/modules/parallel-coordinates.src.js",[],(function(){}))},t.exports?(b.default=b,t.exports=b):(r=[o(129)],void 0===(l=function(g){return b(g),b.Highcharts=g,b}.apply(e,r))||(t.exports=l))}}]);
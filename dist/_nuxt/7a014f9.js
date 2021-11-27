/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{332:function(t,n,r){"use strict";var e,o,h;h=function(t){var n=t?t._modules:{};function r(t,path,n,r){t.hasOwnProperty(path)||(t[path]=r.apply(null,n))}r(n,"Extensions/ArrowSymbols.js",[n["Core/Renderer/SVG/SVGRenderer.js"]],(function(t){var n=t.prototype.symbols;function r(t,n,r,e){return[["M",t,n+e/2],["L",t+r,n],["L",t,n+e/2],["L",t+r,n+e]]}function e(t,n,r,e){return[["M",t+r,n],["L",t,n+e/2],["L",t+r,n+e],["Z"]]}function o(t,n,r,o){return e(t,n,r/2,o)}return n.arrow=r,n["arrow-filled"]=e,n["arrow-filled-half"]=o,n["arrow-half"]=function(t,n,e,o){return r(t,n,e/2,o)},n["triangle-left"]=e,n["triangle-left-half"]=o,n})),r(n,"Gantt/Connection.js",[n["Core/Globals.js"],n["Core/DefaultOptions.js"],n["Core/Series/Point.js"],n["Core/Utilities.js"]],(function(t,n,r,e){var o=n.defaultOptions,h=(e.addEvent,e.defined),c=e.error,x=e.extend,M=e.merge,d=e.objectEach,y=(e.pick,e.splat,t.deg2rad),l=Math.max,f=Math.min;function v(t){var n,r=t.shapeArgs;return r?{xMin:r.x||0,xMax:(r.x||0)+(r.width||0),yMin:r.y||0,yMax:(r.y||0)+(r.height||0)}:(n=t.graphic&&t.graphic.getBBox())?{xMin:t.plotX-n.width/2,xMax:t.plotX+n.width/2,yMin:t.plotY-n.height/2,yMax:t.plotY+n.height/2}:null}x(o,{connectors:{type:"straight",lineWidth:1,marker:{enabled:!1,align:"center",verticalAlign:"middle",inside:!1,lineWidth:1},startMarker:{symbol:"diamond"},endMarker:{symbol:"arrow-filled"}}});var m=function(){function t(t,n,r){this.chart=void 0,this.fromPoint=void 0,this.graphics=void 0,this.pathfinder=void 0,this.toPoint=void 0,this.init(t,n,r)}return t.prototype.init=function(t,n,r){this.fromPoint=t,this.toPoint=n,this.options=r,this.chart=t.series.chart,this.pathfinder=this.chart.pathfinder},t.prototype.renderPath=function(path,t,n){var r,e=this.chart,o=e.styledMode,h=e.pathfinder,animate=!e.options.chart.forExport&&!1!==n,c=this.graphics&&this.graphics.path;h.group||(h.group=e.renderer.g().addClass("highcharts-pathfinder-group").attr({zIndex:-1}).add(e.seriesGroup)),h.group.translate(e.plotLeft,e.plotTop),c&&c.renderer||(c=e.renderer.path().add(h.group),o||c.attr({opacity:0})),c.attr(t),r={d:path},o||(r.opacity=1),c[animate?"animate":"attr"](r,n),this.graphics=this.graphics||{},this.graphics.path=c},t.prototype.addMarker=function(t,n,path){var r,e,o,h,c,x,M,d,l=this,f=l.fromPoint.series.chart,v=f.pathfinder,m=f.renderer,P="start"===t?l.fromPoint:l.toPoint,k=P.getPathfinderAnchorPoint(n);n.enabled&&((d="start"===t?path[1]:path[path.length-2])&&"M"===d[0]||"L"===d[0])&&(M={x:d[1],y:d[2]},e=P.getRadiansToVector(M,k),r=P.getMarkerVector(e,n.radius,k),o=-e/y,n.width&&n.height?(c=n.width,x=n.height):c=x=2*n.radius,l.graphics=l.graphics||{},h={x:r.x-c/2,y:r.y-x/2,width:c,height:x,rotation:o,rotationOriginX:r.x,rotationOriginY:r.y},l.graphics[t]?l.graphics[t].animate(h):(l.graphics[t]=m.symbol(n.symbol).addClass("highcharts-point-connecting-path-"+t+"-marker").attr(h).add(v.group),m.styledMode||l.graphics[t].attr({fill:n.color||l.fromPoint.color,stroke:n.lineColor,"stroke-width":n.lineWidth,opacity:0}).animate({opacity:1},P.series.options.animation)))},t.prototype.getPath=function(t){var n=this.pathfinder,r=this.chart,e=n.algorithms[t.type],o=n.chartObstacles;return"function"!=typeof e?(c('"'+t.type+'" is not a Pathfinder algorithm.'),{path:[],obstacles:[]}):(e.requiresObstacles&&!o&&(o=n.chartObstacles=n.getChartObstacles(t),r.options.connectors.algorithmMargin=t.algorithmMargin,n.chartObstacleMetrics=n.getObstacleMetrics(o)),e(this.fromPoint.getPathfinderAnchorPoint(t.startMarker),this.toPoint.getPathfinderAnchorPoint(t.endMarker),M({chartObstacles:o,lineObstacles:n.lineObstacles||[],obstacleMetrics:n.chartObstacleMetrics,hardBounds:{xMin:0,xMax:r.plotWidth,yMin:0,yMax:r.plotHeight},obstacleOptions:{margin:t.algorithmMargin},startDirectionX:n.getAlgorithmStartDirection(t.startMarker)},t)))},t.prototype.render=function(){var t,path,n=this,r=n.fromPoint,e=r.series,o=e.chart,c=o.pathfinder,x=M(o.options.connectors,e.options.connectors,r.options.connectors,n.options),d={};o.styledMode||(d.stroke=x.lineColor||r.color,d["stroke-width"]=x.lineWidth,x.dashStyle&&(d.dashstyle=x.dashStyle)),d.class="highcharts-point-connecting-path highcharts-color-"+r.colorIndex,x=M(d,x),h(x.marker.radius)||(x.marker.radius=f(l(Math.ceil((x.algorithmMargin||8)/2)-1,1),5)),path=(t=n.getPath(x)).path,t.obstacles&&(c.lineObstacles=c.lineObstacles||[],c.lineObstacles=c.lineObstacles.concat(t.obstacles)),n.renderPath(path,d,e.options.animation),n.addMarker("start",M(x.marker,x.startMarker),path),n.addMarker("end",M(x.marker,x.endMarker),path)},t.prototype.destroy=function(){this.graphics&&(d(this.graphics,(function(t){t.destroy()})),delete this.graphics)},t}();return t.Connection=m,x(r.prototype,{getPathfinderAnchorPoint:function(t){var n,r,e=v(this);switch(t.align){case"right":n="xMax";break;case"left":n="xMin"}switch(t.verticalAlign){case"top":r="yMin";break;case"bottom":r="yMax"}return{x:n?e[n]:(e.xMin+e.xMax)/2,y:r?e[r]:(e.yMin+e.yMax)/2}},getRadiansToVector:function(t,n){var r;return h(n)||(r=v(this))&&(n={x:(r.xMin+r.xMax)/2,y:(r.yMin+r.yMax)/2}),Math.atan2(n.y-t.y,t.x-n.x)},getMarkerVector:function(t,n,r){for(var e,o=2*Math.PI,h=t,c=v(this),x=c.xMax-c.xMin,M=c.yMax-c.yMin,d=Math.atan2(M,x),y=!1,l=x/2,f=M/2,m=c.xMin+l,P=c.yMin+f,k={x:m,y:P},O=1,w=1;h<-Math.PI;)h+=o;for(;h>Math.PI;)h-=o;return e=Math.tan(h),h>-d&&h<=d?(w=-1,y=!0):h>d&&h<=Math.PI-d?w=-1:h>Math.PI-d||h<=-(Math.PI-d)?(O=-1,y=!0):O=-1,y?(k.x+=O*l,k.y+=w*l*e):(k.x+=O*(M/(2*e)),k.y+=w*f),r.x!==m&&(k.x=r.x),r.y!==P&&(k.y=r.y),{x:k.x+n*Math.cos(h),y:k.y-n*Math.sin(h)}}}),m})),r(n,"Gantt/PathfinderAlgorithms.js",[n["Core/Utilities.js"]],(function(t){t.extend;var n=t.pick,r=Math.min,e=Math.max,o=Math.abs;function h(t,n,r){for(var cursor,e,o=r||0,h=t.length-1,c=n-1e-7;o<=h;)if((e=c-t[cursor=h+o>>1].xMin)>0)o=cursor+1;else{if(!(e<0))return cursor;h=cursor-1}return o>0?o-1:0}function c(t,n){return n.x<=t.xMax&&n.x>=t.xMin&&n.y<=t.yMax&&n.y>=t.yMin}function x(t,n){for(var i=h(t,n.x+1)+1;i--;)if(t[i].xMax>=n.x&&c(t[i],n))return i;return-1}function M(t){var path=[];if(t.length){path.push(["M",t[0].start.x,t[0].start.y]);for(var i=0;i<t.length;++i)path.push(["L",t[i].end.x,t[i].end.y])}return path}function d(t,n){t.yMin=e(t.yMin,n.yMin),t.yMax=r(t.yMax,n.yMax),t.xMin=e(t.xMin,n.xMin),t.xMax=r(t.xMax,n.xMax)}var y=function(t,r,e){var h,c,d,y,l,f,v,m=[],P=n(e.startDirectionX,o(r.x-t.x)>o(r.y-t.y))?"x":"y",k=e.chartObstacles,O=x(k,t),w=x(k,r);function C(t,n,r,e,o){var h={x:t.x,y:t.y};return h[n]=r[e||n]+(o||0),h}function A(t,n,r){var e=o(n[r]-t[r+"Min"])>o(n[r]-t[r+"Max"]);return C(n,r,t,r+(e?"Max":"Min"),e?1:-1)}return w>-1?(h={start:y=A(k[w],r,P),end:r},v=y):v=r,O>-1&&(y=A(c=k[O],t,P),m.push({start:t,end:y}),y[P]>=t[P]==y[P]>=v[P]&&(f=t[P="y"===P?"x":"y"]<r[P],m.push({start:y,end:C(y,P,c,P+(f?"Max":"Min"),f?1:-1)}),P="y"===P?"x":"y")),y=C(d=m.length?m[m.length-1].end:t,P,v),m.push({start:d,end:y}),l=C(y,P="y"===P?"x":"y",v),m.push({start:y,end:l}),m.push(h),{path:M(m),obstacles:m}};y.requiresObstacles=!0;var l=function(t,c,y){var l,f,v,m=n(y.startDirectionX,o(c.x-t.x)>o(c.y-t.y)),P=m?"x":"y",k=[],O=!1,w=y.obstacleMetrics,C=r(t.x,c.x)-w.maxWidth-10,A=e(t.x,c.x)+w.maxWidth+10,j=r(t.y,c.y)-w.maxHeight-10,I=e(t.y,c.y)+w.maxHeight+10,E=y.chartObstacles,R=h(E,C),B=h(E,A);function G(t,n,e){var o,c,x,M,i,d=t.x<n.x?1:-1;for(t.x<n.x?(o=t,c=n):(o=n,c=t),t.y<n.y?(M=t,x=n):(M=n,x=t),i=d<0?r(h(E,c.x),E.length-1):0;E[i]&&(d>0&&E[i].xMin<=c.x||d<0&&E[i].xMax>=o.x);){if(E[i].xMin<=c.x&&E[i].xMax>=o.x&&E[i].yMin<=x.y&&E[i].yMax>=M.y)return e?{y:t.y,x:t.x<n.x?E[i].xMin-1:E[i].xMax+1,obstacle:E[i]}:{x:t.x,y:t.y<n.y?E[i].yMin-1:E[i].yMax+1,obstacle:E[i]};i+=d}return n}function W(t,n,r,e,h){var c,x,M=h.soft,d=h.hard,y=e?"x":"y",l={x:n.x,y:n.y},f={x:n.x,y:n.y},v=t[y+"Max"]>=M[y+"Max"],m=t[y+"Min"]<=M[y+"Min"],P=t[y+"Max"]>=d[y+"Max"],k=t[y+"Min"]<=d[y+"Min"],O=o(t[y+"Min"]-n[y]),w=o(t[y+"Max"]-n[y]),C=o(O-w)<10?n[y]<r[y]:w<O;return f[y]=t[y+"Min"],l[y]=t[y+"Max"],c=G(n,f,e)[y]!==f[y],x=G(n,l,e)[y]!==l[y],C=c?!x||C:!x&&C,C=m?!v||C:!v&&C,C=k?!P||C:!P&&C}for((B=x(E=E.slice(R,B+1),c))>-1&&(v=function(t,n,e){var o=r(t.xMax-n.x,n.x-t.xMin)<r(t.yMax-n.y,n.y-t.yMin),h=W(t,n,e,o,{soft:y.hardBounds,hard:y.hardBounds});return o?{y:n.y,x:t[h?"xMax":"xMin"]+(h?1:-1)}:{x:n.x,y:t[h?"yMax":"yMin"]+(h?1:-1)}}(E[B],c,t),k.push({end:c,start:v}),c=v);(B=x(E,c))>-1;)f=c[P]-t[P]<0,(v={x:c.x,y:c.y})[P]=E[B][f?P+"Max":P+"Min"]+(f?1:-1),k.push({end:c,start:v}),c=v;return l=function t(n,o,h){if(n.x===o.x&&n.y===o.y)return[];var c,M,l,f,v,m,P,k=h?"x":"y",w=y.obstacleOptions.margin,R={soft:{xMin:C,xMax:A,yMin:j,yMax:I},hard:y.hardBounds};return(v=x(E,n))>-1?(f=W(v=E[v],n,o,h,R),d(v,y.hardBounds),P=h?{y:n.y,x:v[f?"xMax":"xMin"]+(f?1:-1)}:{x:n.x,y:v[f?"yMax":"yMin"]+(f?1:-1)},(m=x(E,P))>-1&&(d(m=E[m],y.hardBounds),P[k]=f?e(v[k+"Max"]-w+1,(m[k+"Min"]+v[k+"Max"])/2):r(v[k+"Min"]+w-1,(m[k+"Max"]+v[k+"Min"])/2),n.x===P.x&&n.y===P.y?(O&&(P[k]=f?e(v[k+"Max"],m[k+"Max"])+1:r(v[k+"Min"],m[k+"Min"])-1),O=!O):O=!1),M=[{start:n,end:P}]):(M=[{start:n,end:{x:(c=G(n,{x:h?o.x:n.x,y:h?n.y:o.y},h)).x,y:c.y}}],c[h?"x":"y"]!==o[h?"x":"y"]&&(f=W(c.obstacle,c,o,!h,R),d(c.obstacle,y.hardBounds),l={x:h?c.x:c.obstacle[f?"xMax":"xMin"]+(f?1:-1),y:h?c.obstacle[f?"yMax":"yMin"]+(f?1:-1):c.y},h=!h,M=M.concat(t({x:c.x,y:c.y},l,h)))),M=M.concat(t(M[M.length-1].end,o,!h))}(t,c,m),{path:M(l=l.concat(k.reverse())),obstacles:l}};return l.requiresObstacles=!0,{fastAvoid:l,straight:function(t,n){return{path:[["M",t.x,t.y],["L",n.x,n.y]],obstacles:[{start:t,end:n}]}},simpleConnect:y}})),r(n,"Gantt/Pathfinder.js",[n["Gantt/Connection.js"],n["Core/Chart/Chart.js"],n["Core/Globals.js"],n["Core/DefaultOptions.js"],n["Core/Series/Point.js"],n["Core/Utilities.js"],n["Gantt/PathfinderAlgorithms.js"]],(function(t,n,r,e,o,h,c){var x=e.defaultOptions,M=h.addEvent,d=h.defined,y=h.error,l=h.extend,f=h.merge,v=(h.objectEach,h.pick),m=h.splat,P=(r.deg2rad,Math.max),k=Math.min;function O(t){var n,r=t.shapeArgs;return r?{xMin:r.x||0,xMax:(r.x||0)+(r.width||0),yMin:r.y||0,yMax:(r.y||0)+(r.height||0)}:(n=t.graphic&&t.graphic.getBBox())?{xMin:t.plotX-n.width/2,xMax:t.plotX+n.width/2,yMin:t.plotY-n.height/2,yMax:t.plotY+n.height/2}:null}l(x,{connectors:{type:"straight",lineWidth:1,marker:{enabled:!1,align:"center",verticalAlign:"middle",inside:!1,lineWidth:1},startMarker:{symbol:"diamond"},endMarker:{symbol:"arrow-filled"}}});var w=function(){function n(t){this.chart=void 0,this.chartObstacles=void 0,this.chartObstacleMetrics=void 0,this.connections=void 0,this.group=void 0,this.lineObstacles=void 0,this.init(t)}return n.prototype.init=function(t){this.chart=t,this.connections=[],M(t,"redraw",(function(){this.pathfinder.update()}))},n.prototype.update=function(n){var r=this.chart,e=this,h=e.connections;e.connections=[],r.series.forEach((function(n){n.visible&&!n.options.isInternal&&n.points.forEach((function(n){var h=n.options;h&&h.dependency&&(h.connect=h.dependency);var c,x=n.options&&n.options.connect&&m(n.options.connect);n.visible&&!1!==n.isInside&&x&&x.forEach((function(h){(c=r.get("string"==typeof h?h:h.to))instanceof o&&c.series.visible&&c.visible&&!1!==c.isInside&&e.connections.push(new t(n,c,"string"==typeof h?{}:h))}))}))}));for(var c=0,x=void 0,M=void 0,d=h.length,y=e.connections.length;c<d;++c){for(M=!1,x=0;x<y;++x)if(h[c].fromPoint===e.connections[x].fromPoint&&h[c].toPoint===e.connections[x].toPoint){e.connections[x].graphics=h[c].graphics,M=!0;break}M||h[c].destroy()}delete this.chartObstacles,delete this.lineObstacles,e.renderConnections(n)},n.prototype.renderConnections=function(t){t?this.chart.series.forEach((function(t){var n=function(){var n=t.chart.pathfinder;(n&&n.connections||[]).forEach((function(n){n.fromPoint&&n.fromPoint.series===t&&n.render()})),t.pathfinderRemoveRenderEvent&&(t.pathfinderRemoveRenderEvent(),delete t.pathfinderRemoveRenderEvent)};!1===t.options.animation?n():t.pathfinderRemoveRenderEvent=M(t,"afterAnimate",n)})):this.connections.forEach((function(t){t.render()}))},n.prototype.getChartObstacles=function(t){for(var n,r=[],e=this.chart.series,o=v(t.algorithmMargin,0),i=0,h=e.length;i<h;++i)if(e[i].visible&&!e[i].options.isInternal)for(var c=0,x=e[i].points.length,M=void 0,y=void 0;c<x;++c)(y=e[i].points[c]).visible&&(M=O(y))&&r.push({xMin:M.xMin-o,xMax:M.xMax+o,yMin:M.yMin-o,yMax:M.yMax+o});return r=r.sort((function(a,b){return a.xMin-b.xMin})),d(t.algorithmMargin)||(n=t.algorithmMargin=function(t){for(var n,r,e=t.length,i=0,o=[],h=function(a,b,t){var n=v(t,10),r=a.yMax+n>b.yMin-n&&a.yMin-n<b.yMax+n,e=a.xMax+n>b.xMin-n&&a.xMin-n<b.xMax+n,o=r?a.xMin>b.xMax?a.xMin-b.xMax:b.xMin-a.xMax:1/0,c=e?a.yMin>b.yMax?a.yMin-b.yMax:b.yMin-a.yMax:1/0;return e&&r?n?h(a,b,Math.floor(n/2)):1/0:k(o,c)};i<e;++i)for(n=i+1;n<e;++n)(r=h(t[i],t[n]))<80&&o.push(r);return o.push(80),P(Math.floor(o.sort((function(a,b){return a-b}))[Math.floor(o.length/10)]/2-1),1)}(r),r.forEach((function(t){t.xMin-=n,t.xMax+=n,t.yMin-=n,t.yMax+=n}))),r},n.prototype.getObstacleMetrics=function(t){for(var n,r,e=0,o=0,i=t.length;i--;)e<(n=t[i].xMax-t[i].xMin)&&(e=n),o<(r=t[i].yMax-t[i].yMin)&&(o=r);return{maxHeight:o,maxWidth:e}},n.prototype.getAlgorithmStartDirection=function(t){var n,r="left"!==t.align&&"right"!==t.align,e="top"!==t.verticalAlign&&"bottom"!==t.verticalAlign;return r?!!e&&n:!!e||n},n}();return w.prototype.algorithms=c,r.Pathfinder=w,l(o.prototype,{getPathfinderAnchorPoint:function(t){var n,r,e=O(this);switch(t.align){case"right":n="xMax";break;case"left":n="xMin"}switch(t.verticalAlign){case"top":r="yMin";break;case"bottom":r="yMax"}return{x:n?e[n]:(e.xMin+e.xMax)/2,y:r?e[r]:(e.yMin+e.yMax)/2}},getRadiansToVector:function(t,n){var r;return d(n)||(r=O(this))&&(n={x:(r.xMin+r.xMax)/2,y:(r.yMin+r.yMax)/2}),Math.atan2(n.y-t.y,t.x-n.x)},getMarkerVector:function(t,n,r){for(var e,o=2*Math.PI,h=t,c=O(this),x=c.xMax-c.xMin,M=c.yMax-c.yMin,d=Math.atan2(M,x),y=!1,l=x/2,f=M/2,v=c.xMin+l,m=c.yMin+f,P={x:v,y:m},k=1,w=1;h<-Math.PI;)h+=o;for(;h>Math.PI;)h-=o;return e=Math.tan(h),h>-d&&h<=d?(w=-1,y=!0):h>d&&h<=Math.PI-d?w=-1:h>Math.PI-d||h<=-(Math.PI-d)?(k=-1,y=!0):k=-1,y?(P.x+=k*l,P.y+=w*l*e):(P.x+=k*(M/(2*e)),P.y+=w*f),r.x!==v&&(P.x=r.x),r.y!==m&&(P.y=r.y),{x:P.x+n*Math.cos(h),y:P.y-n*Math.sin(h)}}}),n.prototype.callbacks.push((function(t){!1!==t.options.connectors.enabled&&(function(t){(t.options.pathfinder||t.series.reduce((function(t,n){return n.options&&f(!0,n.options.connectors=n.options.connectors||{},n.options.pathfinder),t||n.options&&n.options.pathfinder}),!1))&&(f(!0,t.options.connectors=t.options.connectors||{},t.options.pathfinder),y('WARNING: Pathfinder options have been renamed. Use "chart.connectors" or "series.connectors" instead.'))}(t),this.pathfinder=new w(this),this.pathfinder.update(!0))})),w})),r(n,"masters/modules/pathfinder.src.js",[],(function(){}))},t.exports?(h.default=h,t.exports=h):(e=[r(129)],void 0===(o=function(t){return h(t),h.Highcharts=t,h}.apply(n,e))||(t.exports=o))}}]);
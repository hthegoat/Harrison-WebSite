(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{321:function(t,e,r){"use strict";var n,o,l;l=function(t){function p(t,e,r,n){t.hasOwnProperty(e)||(t[e]=n.apply(null,r))}p(t=t?t._modules:{},"Extensions/Oldie/VMLAxis3D.js",[t["Core/Utilities.js"]],(function(t){var e=t.addEvent,r=function(t){this.axis=t};return function(){function t(){}return t.compose=function(r){r.keepProps.push("vml"),e(r,"destroy",t.onDestroy),e(r,"init",t.onInit),e(r,"render",t.onRender)},t.onDestroy=function(){var t,e=this.vml;e&&["backFrame","bottomFrame","sideFrame"].forEach((function(r){(t=e[r])&&(e[r]=t.destroy())}),this)},t.onInit=function(){this.vml||(this.vml=new r(this))},t.onRender=function(){var t=this.vml;t.sideFrame&&(t.sideFrame.css({zIndex:0}),t.sideFrame.front.attr({fill:t.sideFrame.color})),t.bottomFrame&&(t.bottomFrame.css({zIndex:1}),t.bottomFrame.front.attr({fill:t.bottomFrame.color})),t.backFrame&&(t.backFrame.css({zIndex:0}),t.backFrame.front.attr({fill:t.backFrame.color}))},t}()})),p(t,"Extensions/Oldie/VMLRenderer3D.js",[t["Core/Axis/Axis.js"],t["Core/DefaultOptions.js"],t["Extensions/Oldie/VMLAxis3D.js"]],(function(t,e,r){var n=e.setOptions;return function(){function e(){}return e.compose=function(g,e){var o=e.prototype;g=g.prototype,n({animate:!1}),g.face3d=o.face3d,g.polyhedron=o.polyhedron,g.elements3d=o.elements3d,g.element3d=o.element3d,g.cuboid=o.cuboid,g.cuboidPath=o.cuboidPath,g.toLinePath=o.toLinePath,g.toLineSegments=o.toLineSegments,g.arc3d=function(t){return(t=o.arc3d.call(this,t)).css({zIndex:t.zIndex}),t},g.arc3dPath=o.arc3dPath,r.compose(t)},e}()})),p(t,"Extensions/Oldie/Oldie.js",[t["Core/Chart/Chart.js"],t["Core/Color/Color.js"],t["Core/Globals.js"],t["Core/DefaultOptions.js"],t["Core/Pointer.js"],t["Core/Renderer/RendererRegistry.js"],t["Core/Renderer/SVG/SVGElement.js"],t["Core/Renderer/SVG/SVGRenderer.js"],t["Core/Utilities.js"],t["Extensions/Oldie/VMLRenderer3D.js"]],(function(t,e,r,p,n,g,o,l,h,c){var d=e.parse,u=r.deg2rad,f=r.doc;e=r.noop;var m=r.svg,y=r.win,v=p.getOptions,x=h.addEvent,M=h.createElement,E=h.css,S=h.defined,C=h.discardElement,w=h.erase,L=h.extend;p=h.extendClass;var V=h.isArray,j=h.isNumber,k=h.isObject,A=h.pick,I=h.pInt,R=h.uniqueKey;v().global.VMLRadialGradientURL="http://code.highcharts.com/9.3.1/gfx/vml-radial-gradient.png",f&&!f.defaultView&&(r.getStyle=h.getStyle=function q(b,t){var e={width:"clientWidth",height:"clientHeight"}[t];return b.style[t]?I(b.style[t]):("opacity"===t&&(t="filter"),e?(b.style.zoom=1,Math.max(b[e]-2*q(b,"padding"),0)):(b=b.currentStyle[t.replace(/\-(\w)/g,(function(b,t){return t.toUpperCase()}))],"filter"===t&&(b=b.replace(/alpha\(opacity=([0-9]+)\)/,(function(b,t){return t/100}))),""===b?1:I(b)))}),m||(x(o,"afterInit",(function(){"text"===this.element.nodeName&&this.css({position:"absolute"})})),n.prototype.normalize=function(a,b){return(a=a||y.event).target||(a.target=a.srcElement),b||(this.chartPosition=b=this.getChartPosition()),L(a,{chartX:Math.round(Math.max(a.x,a.clientX-b.left)),chartY:Math.round(a.y)})},t.prototype.ieSanitizeSVG=function(a){return a.replace(/<IMG /g,"<image ").replace(/<(\/?)TITLE>/g,"<$1title>").replace(/height=([^" ]+)/g,'height="$1"').replace(/width=([^" ]+)/g,'width="$1"').replace(/hc-svg-href="([^"]+)">/g,'xlink:href="$1"/>').replace(/ id=([^" >]+)/g,' id="$1"').replace(/class=([^" >]+)/g,'class="$1"').replace(/ transform /g," ").replace(/:(path|rect)/g,"$1").replace(/style="([^"]+)"/g,(function(a){return a.toLowerCase()}))},t.prototype.isReadyToRender=function(){var a=this;return!(!m&&y==y.top&&"complete"!==f.readyState&&(f.attachEvent("onreadystatechange",(function(){f.detachEvent("onreadystatechange",a.firstRender),"complete"===f.readyState&&a.firstRender()})),1))},f.createElementNS||(f.createElementNS=function(a,b){return f.createElement(b)}),r.addEventListenerPolyfill=function(a,b){function t(a){a.target=a.srcElement||y,b.call(e,a)}var e=this;e.attachEvent&&(e.hcEventsIE||(e.hcEventsIE={}),b.hcKey||(b.hcKey=R()),e.hcEventsIE[b.hcKey]=t,e.attachEvent("on"+a,t))},r.removeEventListenerPolyfill=function(a,b){this.detachEvent&&(b=this.hcEventsIE[b.hcKey],this.detachEvent("on"+a,b))},t={docMode8:f&&8===f.documentMode,init:function(a,b){var t=["<",b,' filled="f" stroked="f"'],e=["position: ","absolute",";"],r="div"===b;("shape"===b||r)&&e.push("left:0;top:0;width:1px;height:1px;"),e.push("visibility: ",r?"hidden":"visible"),t.push(' style="',e.join(""),'"/>'),b&&(t=r||"span"===b||"img"===b?t.join(""):a.prepVML(t),this.element=M(t)),this.renderer=a},add:function(a){var b=this.renderer,t=this.element,e=b.box,r=a&&a.inverted;return e=a?a.element||a:e,a&&(this.parentGroup=a),r&&b.invertChild(t,e),e.appendChild(t),this.added=!0,this.alignOnAdd&&!this.deferUpdateTransform&&this.updateTransform(),this.onAdd&&this.onAdd(),this.className&&this.attr("class",this.className),this},updateTransform:o.prototype.htmlUpdateTransform,setSpanRotation:function(){var a=this.rotation,b=Math.cos(a*u),t=Math.sin(a*u);E(this.element,{filter:a?["progid:DXImageTransform.Microsoft.Matrix(M11=",b,", M12=",-t,", M21=",t,", M22=",b,", sizingMethod='auto expand')"].join(""):"none"})},getSpanCorrection:function(a,b,t,e,r){var q=e?Math.cos(e*u):1,n=e?Math.sin(e*u):0,o=A(this.elemHeight,this.element.offsetHeight);this.xCorr=0>q&&-a,this.yCorr=0>n&&-o;var l=0>q*n;this.xCorr+=n*b*(l?1-t:t),this.yCorr-=q*b*(e?l?t:1-t:1),r&&"left"!==r&&(this.xCorr-=a*t*(0>q?-1:1),e&&(this.yCorr-=o*t*(0>n?-1:1)),E(this.element,{textAlign:r}))},pathToVML:function(a){for(var b=a.length,t=[];b--;)j(a[b])?t[b]=Math.round(10*a[b])-5:"Z"===a[b]?t[b]="x":(t[b]=a[b],!a.isArc||"wa"!==a[b]&&"at"!==a[b]||(t[b+5]===t[b+7]&&(t[b+7]+=a[b+7]>a[b+5]?1:-1),t[b+6]===t[b+8]&&(t[b+8]+=a[b+8]>a[b+6]?1:-1)));return t.join(" ")||"x"},clip:function(a){var b=this;if(a){var t=a.members;w(t,b),t.push(b),b.destroyClip=function(){w(t,b)},a=a.getCSS(b)}else b.destroyClip&&b.destroyClip(),a={clip:b.docMode8?"inherit":"rect(auto)"};return b.css(a)},css:o.prototype.htmlCss,safeRemoveChild:function(a){a.parentNode&&C(a)},destroy:function(){return this.destroyClip&&this.destroyClip(),o.prototype.destroy.apply(this)},on:function(a,b){return this.element["on"+a]=function(){var a=y.event;a.target=a.srcElement,b(a)},this},cutOffPath:function(a,b){var t=(a=a.split(/[ ,]/)).length;return 9!==t&&11!==t||(a[t-4]=a[t-2]=I(a[t-2])-10*b),a.join(" ")},shadow:function(a,b,t){var e,r=[],n=this.element,o=this.renderer,l=n.style,h=n.path;h&&"string"!=typeof h.value&&(h="x");var c=h;if(a){var d=A(a.width,3),f=(a.opacity||.15)/d;for(e=1;3>=e;e++){var m=2*d+1-2*e;t&&(c=this.cutOffPath(h.value,m+.5));var y=['<shape isShadow="true" strokeweight="',m,'" filled="false" path="',c,'" coordsize="10 10" style="',n.style.cssText,'" />'],g=M(o.prepVML(y),null,{left:I(l.left)+A(a.offsetX,1)+"px",top:I(l.top)+A(a.offsetY,1)+"px"});t&&(g.cutOff=m+1),y=['<stroke color="',a.color||"#000000",'" opacity="',f*e,'"/>'],M(o.prepVML(y),null,null,g),b?b.element.appendChild(g):n.parentNode.insertBefore(g,n),r.push(g)}this.shadows=r}return this},updateShadows:e,setAttr:function(a,b){this.docMode8?this.element[a]=b:this.element.setAttribute(a,b)},getAttr:function(a){return this.docMode8?this.element[a]:this.element.getAttribute(a)},classSetter:function(a){(this.added?this.element:this).className=a},dashstyleSetter:function(a,b,t){(t.getElementsByTagName("stroke")[0]||M(this.renderer.prepVML(["<stroke/>"]),null,null,t))[b]=a||"solid",this[b]=a},dSetter:function(a,b,t){var e=this.shadows;if(a=a||[],this.d=a.join&&a.join(" "),t.path=a=this.pathToVML(a),e)for(t=e.length;t--;)e[t].path=e[t].cutOff?this.cutOffPath(a,e[t].cutOff):a;this.setAttr(b,a)},fillSetter:function(a,b,t){var e=t.nodeName;"SPAN"===e?t.style.color=a:"IMG"!==e&&(t.filled="none"!==a,this.setAttr("fillcolor",this.renderer.color(a,t,b,this)))},"fill-opacitySetter":function(a,b,t){M(this.renderer.prepVML(["<",b.split("-")[0],' opacity="',a,'"/>']),null,null,t)},opacitySetter:e,rotationSetter:function(a,b,t){t=t.style,this[b]=t[b]=a,t.left=-Math.round(Math.sin(a*u)+1)+"px",t.top=Math.round(Math.cos(a*u))+"px"},strokeSetter:function(a,b,t){this.setAttr("strokecolor",this.renderer.color(a,t,b,this))},"stroke-widthSetter":function(a,b,t){t.stroked=!!a,this[b]=a,j(a)&&(a+="px"),this.setAttr("strokeweight",a)},titleSetter:function(a,b){this.setAttr(b,a)},visibilitySetter:function(a,b,t){"inherit"===a&&(a="visible"),this.shadows&&this.shadows.forEach((function(t){t.style[b]=a})),"DIV"===t.nodeName&&(a="hidden"===a?"-999em":0,this.docMode8||(t.style[b]=a?"visible":"hidden"),b="top"),t.style[b]=a},xSetter:function(a,b,t){this[b]=a,"x"===b?b="left":"y"===b&&(b="top"),this.updateClipping?(this[b]=a,this.updateClipping()):t.style[b]=a},zIndexSetter:function(a,b,t){t.style[b]=a},fillGetter:function(){return this.getAttr("fillcolor")||""},strokeGetter:function(){return this.getAttr("strokecolor")||""},classGetter:function(){return this.getAttr("className")||""}},t["stroke-opacitySetter"]=t["fill-opacitySetter"],r.VMLElement=t=p(o,t),t.prototype.ySetter=t.prototype.widthSetter=t.prototype.heightSetter=t.prototype.xSetter,t={Element:t,isIE8:-1<y.navigator.userAgent.indexOf("MSIE 8.0"),init:function(a,b,t){this.crispPolyLine=l.prototype.crispPolyLine,this.alignedObjects=[];var e=this.createElement("div").css({position:"relative"}),r=e.element;if(a.appendChild(e.element),this.isVML=!0,this.box=r,this.boxWrapper=e,this.gradients={},this.cache={},this.cacheKeys=[],this.imgCount=0,this.setSize(b,t,!1),!f.namespaces.hcv){f.namespaces.add("hcv","urn:schemas-microsoft-com:vml");try{f.createStyleSheet().cssText="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}catch(t){f.styleSheets[0].cssText+="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}}},isHidden:function(){return!this.box.offsetWidth},clipRect:function(a,b,t,e){var r=this.createElement(),n=k(a);return L(r,{members:[],count:0,left:(n?a.x:a)+1,top:(n?a.y:b)+1,width:(n?a.width:t)-1,height:(n?a.height:e)-1,getCSS:function(a){var b=a.element,t=b.nodeName,e=a.inverted,r=this.top-("shape"===t?b.offsetTop:0),n=this.left;b=n+this.width;var q=r+this.height;return r={clip:"rect("+Math.round(e?n:r)+"px,"+Math.round(e?q:b)+"px,"+Math.round(e?b:q)+"px,"+Math.round(e?r:n)+"px)"},!e&&a.docMode8&&"DIV"===t&&L(r,{width:b+"px",height:q+"px"}),r},updateClipping:function(){r.members.forEach((function(a){a.element&&a.css(r.getCSS(a))}))}})},color:function(a,b,t,e){var q,r,n=this,o=/^rgba/,l="none";if(a&&a.linearGradient?r="gradient":a&&a.radialGradient&&(r="pattern"),r){var g,h,u,c,f,m,y=a.linearGradient||a.radialGradient,x=void 0,p=void 0,E=void 0,S=void 0,C="";a=a.stops,p=x=void 0;var w=[],L=function(){q=['<fill colors="'+w.join(",")+'" opacity="',c,'" o:opacity2="',u,'" type="',r,'" ',C,'focus="100%" method="any" />'],M(n.prepVML(q),null,null,b)};if(x=a[0],p=a[a.length-1],0<x[0]&&a.unshift([0,x[1]]),1>p[0]&&a.push([1,p[1]]),a.forEach((function(a,b){o.test(a[1])?(O=d(a[1]),g=O.get("rgb"),h=O.get("a")):(g=a[1],h=1),w.push(100*a[0]+"% "+g),b?(c=h,f=g):(u=h,m=g)})),"fill"===t)if("gradient"===r)x=y.x1||y[0]||0,p=y.y1||y[1]||0,E=y.x2||y[2]||0,S=y.y2||y[3]||0,C='angle="'+(90-180*Math.atan((S-p)/(E-x))/Math.PI)+'"',L();else{var V,j=2*(t=y.r),k=2*t,A=y.cx,I=y.cy,R=b.radialReference;y=function(){R&&(V=e.getBBox(),A+=(R[0]-V.x)/V.width-.5,I+=(R[1]-V.y)/V.height-.5,j*=R[2]/V.width,k*=R[2]/V.height),C='src="'+v().global.VMLRadialGradientURL+'" size="'+j+","+k+'" origin="0.5,0.5" position="'+A+","+I+'" color2="'+m+'" ',L()},e.added?y():e.onAdd=y,l=f}else l=g}else if(o.test(a)&&"IMG"!==b.tagName){var O=d(a);e[t+"-opacitySetter"](O.get("a"),t,b),l=O.get("rgb")}else(y=b.getElementsByTagName(t)).length&&(y[0].opacity=1,y[0].type="solid"),l=a;return l},prepVML:function(a){var b=this.isIE8;return a=a.join(""),a=b?-1===(a=a.replace("/>",' xmlns="urn:schemas-microsoft-com:vml" />')).indexOf('style="')?a.replace("/>",' style="display:inline-block;behavior:url(#default#VML);" />'):a.replace('style="','style="display:inline-block;behavior:url(#default#VML);'):a.replace("<","<hcv:")},text:l.prototype.html,path:function(a){var b={coordsize:"10 10"};return V(a)?b.d=a:k(a)&&L(b,a),this.createElement("shape").attr(b)},circle:function(a,b,t){var e=this.symbol("circle");return k(a)&&(t=a.r,b=a.y,a=a.x),e.isCircle=!0,e.r=t,e.attr({x:a,y:b})},g:function(a){var b;return a&&(b={className:"highcharts-"+a,class:"highcharts-"+a}),this.createElement("div").attr(b)},image:function(a,b,t,e,r){var n=this.createElement("img").attr({src:a});return 1<arguments.length&&n.attr({x:b,y:t,width:e,height:r}),n},createElement:function(a){return"rect"===a?this.symbol(a):l.prototype.createElement.call(this,a)},invertChild:function(a,b){var t=this;b=b.style;var e="IMG"===a.tagName&&a.style;E(a,{flip:"x",left:I(b.width)-(e?I(e.top):1)+"px",top:I(b.height)-(e?I(e.left):1)+"px",rotation:-90}),[].forEach.call(a.childNodes,(function(b){t.invertChild(b,a)}))},symbols:{arc:function(a,b,t,e,r){var n=r.start,o=r.end,g=r.r||t||e;t=r.innerR,e=Math.cos(n);var l=Math.sin(n),h=Math.cos(o),c=Math.sin(o);return 0==o-n?["x"]:(n=["wa",a-g,b-g,a+g,b+g,a+g*e,b+g*l,a+g*h,b+g*c],r.open&&!t&&n.push("e","M",a,b),n.push("at",a-t,b-t,a+t,b+t,a+t*h,b+t*c,a+t*e,b+t*l,"x","e"),n.isArc=!0,n)},circle:function(a,b,t,e,r){return r&&S(r.r)&&(t=e=2*r.r),r&&r.isCircle&&(a-=t/2,b-=e/2),["wa",a,b,a+t,b+e,a+t,b+e/2,a+t,b+e/2,"e"]},rect:function(a,b,t,e,r){return l.prototype.symbols[S(r)&&r.r?"callout":"square"].call(0,a,b,t,e,r)}}},r.VMLRenderer=r=function(){this.init.apply(this,arguments)},L(r.prototype,l.prototype),L(r.prototype,t),g.registerRendererType("VMLRenderer",r,!0),c.compose(r,l)),l.prototype.getSpanWidth=function(a,b){var t=a.getBBox(!0).width;return!m&&this.forExport&&(t=this.measureSpanWidth(b.firstChild.data,a.styles)),t},l.prototype.measureSpanWidth=function(a,b){var t=f.createElement("span");return a=f.createTextNode(a),t.appendChild(a),E(t,b),this.box.appendChild(t),b=t.offsetWidth,C(t),b}})),p(t,"masters/modules/oldie.src.js",[],(function(){}))},t.exports?(l.default=l,t.exports=l):(n=[r(129)],void 0===(o=function(p){return l(p),l.Highcharts=p,l}.apply(e,n))||(t.exports=o))}}]);
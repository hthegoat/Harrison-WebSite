(window.webpackJsonp=window.webpackJsonp||[]).push([[36,79],{244:function(e,t,n){"use strict";var o,r,a;a=function(a){function g(a,e,t,n){a.hasOwnProperty(e)||(a[e]=n.apply(null,t))}g(a=a?a._modules:{},"Extensions/FullScreen.js",[a["Core/Chart/Chart.js"],a["Core/Globals.js"],a["Core/Renderer/HTML/AST.js"],a["Core/Utilities.js"]],(function(a,e,t,n){var o=n.addEvent;return n=function(){function a(e){this.chart=e,this.isOpen=!1,e=e.renderTo,this.browserProps||("function"==typeof e.requestFullscreen?this.browserProps={fullscreenChange:"fullscreenchange",requestFullscreen:"requestFullscreen",exitFullscreen:"exitFullscreen"}:e.mozRequestFullScreen?this.browserProps={fullscreenChange:"mozfullscreenchange",requestFullscreen:"mozRequestFullScreen",exitFullscreen:"mozCancelFullScreen"}:e.webkitRequestFullScreen?this.browserProps={fullscreenChange:"webkitfullscreenchange",requestFullscreen:"webkitRequestFullScreen",exitFullscreen:"webkitExitFullscreen"}:e.msRequestFullscreen&&(this.browserProps={fullscreenChange:"MSFullscreenChange",requestFullscreen:"msRequestFullscreen",exitFullscreen:"msExitFullscreen"}))}return a.prototype.close=function(){var e=this.chart,a=e.options.chart;this.isOpen&&this.browserProps&&e.container.ownerDocument instanceof Document&&e.container.ownerDocument[this.browserProps.exitFullscreen](),this.unbindFullscreenEvent&&(this.unbindFullscreenEvent=this.unbindFullscreenEvent()),e.setSize(this.origWidth,this.origHeight,!1),this.origHeight=this.origWidth=void 0,a.width=this.origWidthOption,a.height=this.origHeightOption,this.origHeightOption=this.origWidthOption=void 0,this.isOpen=!1,this.setButtonText()},a.prototype.open=function(){var e=this,a=e.chart,b=a.options.chart;if(b&&(e.origWidthOption=b.width,e.origHeightOption=b.height),e.origWidth=a.chartWidth,e.origHeight=a.chartHeight,e.browserProps){var t=o(a.container.ownerDocument,e.browserProps.fullscreenChange,(function(){e.isOpen?(e.isOpen=!1,e.close()):(a.setSize(null,null,!1),e.isOpen=!0,e.setButtonText())})),n=o(a,"destroy",t);e.unbindFullscreenEvent=function(){t(),n()},(b=a.renderTo[e.browserProps.requestFullscreen]())&&b.catch((function(){alert("Full screen is not supported inside a frame.")}))}},a.prototype.setButtonText=function(){var e=this.chart,a=e.exportDivElements,b=e.options.exporting,n=b&&b.buttons&&b.buttons.contextButton.menuItems;e=e.options.lang,b&&b.menuItemDefinitions&&e&&e.exitFullscreen&&e.viewFullscreen&&n&&a&&(a=a[n.indexOf("viewFullscreen")])&&t.setElementHTML(a,this.isOpen?e.exitFullscreen:b.menuItemDefinitions.viewFullscreen.text||e.viewFullscreen)},a.prototype.toggle=function(){this.isOpen?this.close():this.open()},a}(),e.Fullscreen=n,o(a,"beforeRender",(function(){this.fullscreen=new e.Fullscreen(this)})),e.Fullscreen})),g(a,"Core/Chart/ChartNavigationComposition.js",[],(function(){var a;return function(a){a.compose=function(a){return a.navigation||(a.navigation=new e(a)),a};var e=function(){function a(a){this.updates=[],this.chart=a}return a.prototype.addUpdate=function(a){this.chart.navigation.updates.push(a)},a.prototype.update=function(a,e){var t=this;this.updates.forEach((function(n){n.call(t.chart,a,e)}))},a}();a.Additions=e}(a||(a={})),a})),g(a,"Extensions/Exporting/ExportingDefaults.js",[a["Core/Globals.js"]],(function(a){return{exporting:{type:"image/png",url:"https://export.highcharts.com/",printMaxWidth:780,scale:2,buttons:{contextButton:{className:"highcharts-contextbutton",menuClassName:"highcharts-contextmenu",symbol:"menu",titleKey:"contextButtonTitle",menuItems:"viewFullscreen printChart separator downloadPNG downloadJPEG downloadPDF downloadSVG".split(" ")}},menuItemDefinitions:{viewFullscreen:{textKey:"viewFullscreen",onclick:function(){this.fullscreen.toggle()}},printChart:{textKey:"printChart",onclick:function(){this.print()}},separator:{separator:!0},downloadPNG:{textKey:"downloadPNG",onclick:function(){this.exportChart()}},downloadJPEG:{textKey:"downloadJPEG",onclick:function(){this.exportChart({type:"image/jpeg"})}},downloadPDF:{textKey:"downloadPDF",onclick:function(){this.exportChart({type:"application/pdf"})}},downloadSVG:{textKey:"downloadSVG",onclick:function(){this.exportChart({type:"image/svg+xml"})}}}},lang:{viewFullscreen:"View in full screen",exitFullscreen:"Exit from full screen",printChart:"Print chart",downloadPNG:"Download PNG image",downloadJPEG:"Download JPEG image",downloadPDF:"Download PDF document",downloadSVG:"Download SVG vector image",contextButtonTitle:"Chart context menu"},navigation:{buttonOptions:{symbolSize:14,symbolX:12.5,symbolY:10.5,align:"right",buttonSpacing:3,height:22,verticalAlign:"top",width:24,symbolFill:"#666666",symbolStroke:"#666666",symbolStrokeWidth:3,theme:{padding:5}},menuStyle:{border:"1px solid #999999",background:"#ffffff",padding:"5px 0"},menuItemStyle:{padding:"0.5em 1em",color:"#333333",background:"none",fontSize:a.isTouchDevice?"14px":"11px",transition:"background 250ms, color 250ms"},menuItemHoverStyle:{background:"#335cad",color:"#ffffff"}}}})),g(a,"Extensions/Exporting/ExportingSymbols.js",[],(function(){var a;return function(a){function e(a,e,t,b){return[["M",a,e+2.5],["L",a+t,e+2.5],["M",a,e+b/2+.5],["L",a+t,e+b/2+.5],["M",a,e+b-1.5],["L",a+t,e+b-1.5]]}function t(a,e,t,b){return a=b/3-2,(b=[]).concat(this.circle(t-a,e,a,a),this.circle(t-a,e+a+4,a,a),this.circle(t-a,e+2*(a+4),a,a))}var g=[];a.compose=function(a){-1===g.indexOf(a)&&(g.push(a),(a=a.prototype.symbols).menu=e,a.menuball=t.bind(a))}}(a||(a={})),a})),g(a,"Core/HttpUtilities.js",[a["Core/Globals.js"],a["Core/Utilities.js"]],(function(a,e){var t=a.doc,g=e.createElement,n=e.discardElement,o=e.merge,r=e.objectEach,l={ajax:function(a){var b=o(!0,{url:!1,type:"get",dataType:"json",success:!1,error:!1,data:!1,headers:{}},a);a={json:"application/json",xml:"application/xml",text:"text/plain",octet:"application/octet-stream"};var e=new XMLHttpRequest;if(!b.url)return!1;e.open(b.type.toUpperCase(),b.url,!0),b.headers["Content-Type"]||e.setRequestHeader("Content-Type",a[b.dataType]||a.text),r(b.headers,(function(a,t){e.setRequestHeader(t,a)})),e.onreadystatechange=function(){if(4===e.readyState){if(200===e.status){var a=e.responseText;if("json"===b.dataType)try{a=JSON.parse(a)}catch(t){return void(b.error&&b.error(e,t))}return b.success&&b.success(a)}b.error&&b.error(e,e.responseText)}};try{b.data=JSON.stringify(b.data)}catch(e){}e.send(b.data||!0)},getJSON:function(a,e){l.ajax({url:a,success:e,dataType:"json",headers:{"Content-Type":"text/plain"}})},post:function(a,e,l){var b=g("form",o({method:"post",action:a,enctype:"multipart/form-data"},l),{display:"none"},t.body);r(e,(function(a,e){g("input",{type:"hidden",name:e,value:a},null,b)})),b.submit(),n(b)}};return l})),g(a,"Extensions/Exporting/Exporting.js",[a["Core/Renderer/HTML/AST.js"],a["Core/Chart/Chart.js"],a["Core/Chart/ChartNavigationComposition.js"],a["Core/DefaultOptions.js"],a["Extensions/Exporting/ExportingDefaults.js"],a["Extensions/Exporting/ExportingSymbols.js"],a["Core/Globals.js"],a["Core/HttpUtilities.js"],a["Core/Utilities.js"]],(function(a,e,g,t,n,o,r,l,b){e=t.defaultOptions;var c,h=r.doc,d=r.win,f=b.addEvent,q=b.css,m=b.createElement,x=b.discardElement,v=b.extend,y=b.find,w=b.fireEvent,E=b.isObject,C=b.merge,S=b.objectEach,O=b.pick,j=b.removeEvent,T=b.uniqueKey;return function(e){function t(a){var e=this,t=e.renderer,b=C(e.options.navigation.buttonOptions,a),n=b.onclick,o=b.menuItems,r=b.symbolSize||12;if(e.btnCount||(e.btnCount=0),e.exportDivElements||(e.exportDivElements=[],e.exportSVGElements=[]),!1!==b.enabled&&b.theme){var l,c=b.theme,h=c.states,d=h&&h.hover;h=h&&h.select,e.styledMode||(c.fill=O(c.fill,"#ffffff"),c.stroke=O(c.stroke,"none")),delete c.states,n?l=function(a){a&&a.stopPropagation(),n.call(e,a)}:o&&(l=function(a){a&&a.stopPropagation(),e.contextMenu(p.menuClassName,o,p.translateX,p.translateY,p.width,p.height,p),p.setState(2)}),b.text&&b.symbol?c.paddingLeft=O(c.paddingLeft,30):b.text||v(c,{width:b.width,height:b.height,padding:0}),e.styledMode||(c["stroke-linecap"]="round",c.fill=O(c.fill,"#ffffff"),c.stroke=O(c.stroke,"none"));var p=t.button(b.text,0,0,l,c,d,h).addClass(a.className).attr({title:O(e.options.lang[b._titleKey||b.titleKey],"")});if(p.menuClassName=a.menuClassName||"highcharts-menu-"+e.btnCount++,b.symbol){var g=t.symbol(b.symbol,b.symbolX-r/2,b.symbolY-r/2,r,r,{width:r,height:r}).addClass("highcharts-button-symbol").attr({zIndex:1}).add(p);e.styledMode||g.attr({stroke:b.symbolStroke,fill:b.symbolFill,"stroke-width":b.symbolStrokeWidth||1})}p.add(e.exportingGroup).align(v(b,{width:p.width,x:O(b.x,e.buttonOffset)}),!0,"spacingBox"),e.buttonOffset+=(p.width+b.buttonSpacing)*("right"===b.align?-1:1),e.exportSVGElements.push(p,g)}}function n(){if(this.printReverseInfo){var a=this.printReverseInfo,b=a.childNodes,e=a.origDisplay;a=a.resetParams,this.moveContainers(this.renderTo),[].forEach.call(b,(function(a,t){1===a.nodeType&&(a.style.display=e[t]||"")})),this.isPrinting=!1,a&&this.setSize.apply(this,a),delete this.printReverseInfo,$=void 0,w(this,"afterPrint")}}function c(){var a=h.body,b=this.options.exporting.printMaxWidth,e={childNodes:a.childNodes,origDisplay:[],resetParams:void 0};this.isPrinting=!0,this.pointer.reset(null,0),w(this,"beforePrint"),b&&this.chartWidth>b&&(e.resetParams=[this.options.chart.width,void 0,!1],this.setSize(b,void 0,!1)),[].forEach.call(e.childNodes,(function(a,t){1===a.nodeType&&(e.origDisplay[t]=a.style.display,a.style.display="none")})),this.moveContainers(a),this.printReverseInfo=e}function F(a){a.renderExporting(),f(a,"redraw",a.renderExporting),f(a,"destroy",a.destroyExport)}function G(e,t,n,o,g,r,l){var c=this,u=c.options.navigation,x=c.chartWidth,y=c.chartHeight,p="cache-"+e,C=Math.max(g,r),S=c[p];if(!S){c.exportContextMenu=c[p]=S=m("div",{className:e},{position:"absolute",zIndex:1e3,padding:C+"px",pointerEvents:"auto"},c.fixedDiv||c.container);var O=m("ul",{className:"highcharts-menu"},{listStyle:"none",margin:0,padding:0},S);c.styledMode||q(O,v({MozBoxShadow:"3px 3px 10px #888",WebkitBoxShadow:"3px 3px 10px #888",boxShadow:"3px 3px 10px #888"},u.menuStyle)),S.hideMenu=function(){q(S,{display:"none"}),l&&l.setState(0),c.openMenu=!1,q(c.renderTo,{overflow:"hidden"}),q(c.container,{overflow:"hidden"}),b.clearTimeout(S.hideTimer),w(c,"exportMenuHidden")},c.exportEvents.push(f(S,"mouseleave",(function(){S.hideTimer=d.setTimeout(S.hideMenu,500)})),f(S,"mouseenter",(function(){b.clearTimeout(S.hideTimer)})),f(h,"mouseup",(function(a){c.pointer.inClass(a.target,e)||S.hideMenu()})),f(S,"click",(function(){c.openMenu&&S.hideMenu()}))),t.forEach((function(e){if("string"==typeof e&&(e=c.options.exporting.menuItemDefinitions[e]),E(e,!0)){var b=void 0;e.separator?b=m("hr",void 0,void 0,O):("viewData"===e.textKey&&c.isDataTableVisible&&(e.textKey="hideData"),b=m("li",{className:"highcharts-menu-item",onclick:function(a){a&&a.stopPropagation(),S.hideMenu(),e.onclick&&e.onclick.apply(c,arguments)}},void 0,O),a.setElementHTML(b,e.text||c.options.lang[e.textKey]),c.styledMode||(b.onmouseover=function(){q(this,u.menuItemHoverStyle)},b.onmouseout=function(){q(this,u.menuItemStyle)},q(b,v({cursor:"pointer"},u.menuItemStyle)))),c.exportDivElements.push(b)}})),c.exportDivElements.push(O,S),c.exportMenuWidth=S.offsetWidth,c.exportMenuHeight=S.offsetHeight}t={display:"block"},n+c.exportMenuWidth>x?t.right=x-n-g-C+"px":t.left=n-C+"px",o+r+c.exportMenuHeight>y&&"top"!==l.alignOptions.verticalAlign?t.bottom=y-o-C+"px":t.top=o+r-C+"px",q(S,t),q(c.renderTo,{overflow:""}),q(c.container,{overflow:""}),c.openMenu=!0,w(c,"exportMenuShown")}function k(a){var g,e=a?a.target:this,t=e.exportSVGElements,n=e.exportDivElements;a=e.exportEvents,t&&(t.forEach((function(a,b){a&&(a.onclick=a.ontouchstart=null,g="cache-"+a.menuClassName,e[g]&&delete e[g],t[b]=a.destroy())})),t.length=0),e.exportingGroup&&(e.exportingGroup.destroy(),delete e.exportingGroup),n&&(n.forEach((function(a,e){a&&(b.clearTimeout(a.hideTimer),j(a,"mouseleave"),n[e]=a.onmouseout=a.onmouseover=a.ontouchstart=a.onclick=null,x(a))})),n.length=0),a&&(a.forEach((function(a){a()})),a.length=0)}function D(a,b){b=this.getSVGForExport(a,b),a=C(this.options.exporting,a),l.post(a.url,{filename:a.filename?a.filename.replace(/\//g,"-"):this.getFilename(),type:a.type,width:a.width||0,scale:a.scale,svg:b},a.formAttributes)}function N(){return this.styledMode&&this.inlineStyles(),this.container.innerHTML}function L(){var a=this.userOptions.title&&this.userOptions.title.text,b=this.options.exporting.filename;return b?b.replace(/\//g,"-"):("string"==typeof a&&(b=a.toLowerCase().replace(/<\/?[^>]+(>|$)/g,"").replace(/[\s_]+/g,"-").replace(/[^a-z0-9\-]/g,"").replace(/^[\-]+/g,"").replace(/[\-]+/g,"-").substr(0,24).replace(/[\-]+$/g,"")),(!b||5>b.length)&&(b="chart"),b)}function P(a){var b,e=C(this.options,a);e.plotOptions=C(this.userOptions.plotOptions,a&&a.plotOptions),e.time=C(this.userOptions.time,a&&a.time);var t=m("div",null,{position:"absolute",top:"-9999em",width:this.chartWidth+"px",height:this.chartHeight+"px"},h.body),n=this.renderTo.style.width,g=this.renderTo.style.height;n=e.exporting.sourceWidth||e.chart.width||/px$/.test(n)&&parseInt(n,10)||(e.isGantt?800:600),g=e.exporting.sourceHeight||e.chart.height||/px$/.test(g)&&parseInt(g,10)||400,v(e.chart,{animation:!1,renderTo:t,forExport:!0,renderer:"SVGRenderer",width:n,height:g}),e.exporting.enabled=!1,delete e.data,e.series=[],this.series.forEach((function(a){(b=C(a.userOptions,{animation:!1,enableMouseTracking:!1,showCheckbox:!1,visible:a.visible})).isInternal||e.series.push(b)}));var o={};this.axes.forEach((function(a){a.userOptions.internalKey||(a.userOptions.internalKey=T()),a.options.isInternal||(o[a.coll]||(o[a.coll]=!0,e[a.coll]=[]),e[a.coll].push(C(a.userOptions,{visible:a.visible})))}));var r=new this.constructor(e,this.callback);return a&&["xAxis","yAxis","series"].forEach((function(e){var b={};a[e]&&(b[e]=a[e],r.update(b))})),this.axes.forEach((function(a){var e=y(r.axes,(function(e){return e.options.internalKey===a.userOptions.internalKey})),b=a.getExtremes(),t=b.userMin;b=b.userMax,e&&(void 0!==t&&t!==e.min||void 0!==b&&b!==e.max)&&e.setExtremes(t,b,!0,!1)})),g=r.getChartHTML(),w(this,"getSVG",{chartCopy:r}),g=this.sanitizeSVG(g,e),e=null,r.destroy(),x(t),g}function M(a,b){var e=this.options.exporting;return this.getSVG(C({chart:{borderRadius:0}},e.chartOptions,b,{exporting:{sourceWidth:a&&a.sourceWidth||e.sourceWidth,sourceHeight:a&&a.sourceHeight||e.sourceHeight}}))}function R(a){return a.replace(/([A-Z])/g,(function(a,e){return"-"+e.toLowerCase()}))}function H(){var t,b=z,g=e.inlineWhitelist,n={},o=h.createElement("iframe");q(o,{width:"1px",height:"1px",visibility:"hidden"}),h.body.appendChild(o);var l=o.contentWindow.document;l.open(),l.write('<svg xmlns="http://www.w3.org/2000/svg"></svg>'),l.close(),function a(e){function o(a,t){if(u=c=!1,g.length){for(h=g.length;h--&&!c;)c=g[h].test(t);u=!c}for("transform"===t&&"none"===a&&(u=!0),h=b.length;h--&&!u;)u=b[h].test(t)||"function"==typeof a;u||q[t]===a&&"svg"!==e.nodeName||n[e.nodeName][t]===a||(K&&-1===K.indexOf(t)?f+=R(t)+":"+a+";":a&&e.setAttribute(R(t),a))}var u,c,h,f="";if(1===e.nodeType&&-1===J.indexOf(e.nodeName)){var m=d.getComputedStyle(e,null),q="svg"===e.nodeName?{}:d.getComputedStyle(e.parentNode,null);if(!n[e.nodeName]){t=l.getElementsByTagName("svg")[0];var x=l.createElementNS(e.namespaceURI,e.nodeName);t.appendChild(x),n[e.nodeName]=C(d.getComputedStyle(x,null)),"text"===e.nodeName&&delete n.text.fill,t.removeChild(x)}if(r.isFirefox||r.isMS)for(var v in m)o(m[v],v);else S(m,o);f&&(m=e.getAttribute("style"),e.setAttribute("style",(m?m+";":"")+f)),"svg"===e.nodeName&&e.setAttribute("stroke-width","1px"),"text"!==e.nodeName&&[].forEach.call(e.children||e.childNodes,a)}}(this.container.querySelector("svg")),t.parentNode.removeChild(t),o.parentNode.removeChild(o)}function U(a){(this.fixedDiv?[this.fixedDiv,this.scrollingContainer]:[this.container]).forEach((function(e){a.appendChild(e)}))}function V(){var a=this;a.exporting={update:function(e,b){a.isDirtyExporting=!0,C(!0,a.options.exporting,e),O(b,!0)&&a.redraw()}},g.compose(a).navigation.addUpdate((function(e,b){a.isDirtyExporting=!0,C(!0,a.options.navigation,e),O(b,!0)&&a.redraw()}))}function A(){var a=this;a.isPrinting||($=a,r.isSafari||a.beforePrint(),setTimeout((function(){d.focus(),d.print(),r.isSafari||setTimeout((function(){a.afterPrint()}),1e3)}),1))}function B(){var a=this,b=a.options.exporting,e=b.buttons,t=a.isDirtyExporting||!a.exportSVGElements;a.buttonOffset=0,a.isDirtyExporting&&a.destroyExport(),t&&!1!==b.enabled&&(a.exportEvents=[],a.exportingGroup=a.exportingGroup||a.renderer.g("exporting-group").attr({zIndex:3}).add(),S(e,(function(b){a.addButton(b)})),a.isDirtyExporting=!1)}function I(a,b){var e=a.indexOf("</svg>")+6,t=a.substr(e);return a=a.substr(0,e),b&&b.exporting&&b.exporting.allowHTML&&t&&(t='<foreignObject x="0" y="0" width="'+b.chart.width+'" height="'+b.chart.height+'"><body xmlns="http://www.w3.org/1999/xhtml">'+t.replace(/(<(?:img|br).*?(?=>))>/g,"$1 />")+"</body></foreignObject>",a=a.replace("</svg>",t+"</svg>")),a=a.replace(/zIndex="[^"]+"/g,"").replace(/symbolName="[^"]+"/g,"").replace(/jQuery[0-9]+="[^"]+"/g,"").replace(/url\(("|&quot;)(.*?)("|&quot;);?\)/g,"url($2)").replace(/url\([^#]+#/g,"url(#").replace(/<svg /,'<svg xmlns:xlink="http://www.w3.org/1999/xlink" ').replace(/ (|NS[0-9]+:)href=/g," xlink:href=").replace(/\n/," ").replace(/(fill|stroke)="rgba\(([ 0-9]+,[ 0-9]+,[ 0-9]+),([ 0-9\.]+)\)"/g,'$1="rgb($2)" $1-opacity="$3"').replace(/&nbsp;/g," ").replace(/&shy;/g,"­"),this.ieSanitizeSVG&&(a=this.ieSanitizeSVG(a)),a}var W=[],z=[/-/,/^(clipPath|cssText|d|height|width)$/,/^font$/,/[lL]ogical(Width|Height)$/,/perspective/,/TapHighlightColor/,/^transition/,/^length$/],K="fill stroke strokeLinecap strokeLinejoin strokeWidth textAnchor x y".split(" ");e.inlineWhitelist=[];var $,J=["clipPath","defs","desc"];e.compose=function(a,b){o.compose(b),-1===W.indexOf(a)&&(W.push(a),(b=a.prototype).afterPrint=n,b.exportChart=D,b.inlineStyles=H,b.print=A,b.sanitizeSVG=I,b.getChartHTML=N,b.getSVG=P,b.getSVGForExport=M,b.getFilename=L,b.moveContainers=U,b.beforePrint=c,b.contextMenu=G,b.addButton=t,b.destroyExport=k,b.renderExporting=B,b.callbacks.push(F),f(a,"init",V),r.isSafari&&r.win.matchMedia("print").addListener((function(a){$&&(a.matches?$.beforePrint():$.afterPrint())})))}}(c||(c={})),e.exporting=C(n.exporting,e.exporting),e.lang=C(n.lang,e.lang),e.navigation=C(n.navigation,e.navigation),c})),g(a,"masters/modules/exporting.src.js",[a["Core/Globals.js"],a["Extensions/Exporting/Exporting.js"],a["Core/HttpUtilities.js"]],(function(a,e,g){a.HttpUtilities=g,a.ajax=g.ajax,a.getJSON=g.getJSON,a.post=g.post,e.compose(a.Chart,a.Renderer)}))},e.exports?(a.default=a,e.exports=a):(o=[n(129)],void 0===(r=function(g){return a(g),a.Highcharts=g,a}.apply(t,o))||(e.exports=r))},317:function(e,t,n){"use strict";var o,r,a;a=function(a){function e(a,e,t,n){a.hasOwnProperty(e)||(a[e]=n.apply(null,t))}e(a=a?a._modules:{},"Extensions/DownloadURL.js",[a["Core/Globals.js"]],(function(a){var e=a.isSafari,t=a.win,n=t.document,o=t.URL||t.webkitURL||t,r=a.dataURLtoBlob=function(a){if((a=a.replace(/filename=.*;/,"").match(/data:([^;]*)(;base64)?,([0-9A-Za-z+/]+)/))&&3<a.length&&t.atob&&t.ArrayBuffer&&t.Uint8Array&&t.Blob&&o.createObjectURL){var e=t.atob(a[3]),n=new t.ArrayBuffer(e.length);n=new t.Uint8Array(n);for(var b=0;b<n.length;++b)n[b]=e.charCodeAt(b);return a=new t.Blob([n],{type:a[1]}),o.createObjectURL(a)}};return a=a.downloadURL=function(a,o){var l=t.navigator,b=n.createElement("a");if("string"==typeof a||a instanceof String||!l.msSaveOrOpenBlob){if(a=""+a,l=/Edge\/\d+/.test(l.userAgent),(e&&"string"==typeof a&&0===a.indexOf("data:application/pdf")||l||2e6<a.length)&&!(a=r(a)||""))throw Error("Failed to convert to blob");if(void 0!==b.download)b.href=a,b.download=o,n.body.appendChild(b),b.click(),n.body.removeChild(b);else try{var c=t.open(a,"chart");if(null==c)throw Error("Failed to open window")}catch(e){t.location.href=a}}else l.msSaveOrOpenBlob(a,o)},{dataURLtoBlob:r,downloadURL:a}})),e(a,"Extensions/OfflineExporting/OfflineExportingDefaults.js",[],(function(){return{libURL:"https://code.highcharts.com/9.3.1/lib/",menuItemDefinitions:{downloadPNG:{textKey:"downloadPNG",onclick:function(){this.exportChartLocal()}},downloadJPEG:{textKey:"downloadJPEG",onclick:function(){this.exportChartLocal({type:"image/jpeg"})}},downloadSVG:{textKey:"downloadSVG",onclick:function(){this.exportChartLocal({type:"image/svg+xml"})}},downloadPDF:{textKey:"downloadPDF",onclick:function(){this.exportChartLocal({type:"application/pdf"})}}}}})),e(a,"Extensions/OfflineExporting/OfflineExporting.js",[a["Core/Chart/Chart.js"],a["Core/DefaultOptions.js"],a["Extensions/DownloadURL.js"],a["Extensions/Exporting/Exporting.js"],a["Core/Globals.js"],a["Extensions/OfflineExporting/OfflineExportingDefaults.js"],a["Core/Utilities.js"]],(function(a,e,t,n,o,r,l){var c,h=e.defaultOptions,d=t.downloadURL,b=o.win,f=o.doc,m=l.addEvent,x=l.error,v=l.extend,y=l.fireEvent,w=l.merge,E=[];return function(a){function e(g,e){var t=this,r=w(t.options.exporting,g),b=function(a){!1===r.fallbackToExportServer?r.error?r.error(r,a):x(28,!0):t.exportChart(r)};g=function(){return[].some.call(t.container.getElementsByTagName("image"),(function(a){return""!==(a=a.getAttribute("href"))&&0!==a.indexOf("data:")}))},o.isMS&&t.styledMode&&!n.inlineWhitelist.length&&n.inlineWhitelist.push(/^blockSize/,/^border/,/^caretColor/,/^color/,/^columnRule/,/^columnRuleColor/,/^cssFloat/,/^cursor/,/^fill$/,/^fillOpacity/,/^font/,/^inlineSize/,/^length/,/^lineHeight/,/^opacity/,/^outline/,/^parentRule/,/^rx$/,/^ry$/,/^stroke/,/^textAlign/,/^textAnchor/,/^textDecoration/,/^transform/,/^vectorEffect/,/^visibility/,/^x$/,/^y$/),o.isMS&&("application/pdf"===r.type||t.container.getElementsByTagName("image").length&&"image/svg+xml"!==r.type)||"application/pdf"===r.type&&g()?b("Image type not supported for this chart/browser."):t.getSVGForLocalExport(r,e||{},b,(function(g){-1<g.indexOf("<foreignObject")&&"image/svg+xml"!==r.type&&(o.isMS||"application/pdf"===r.type)?b("Image type not supportedfor charts with embedded HTML"):a.downloadSVGLocal(g,v({filename:t.getFilename()},r),b,(function(){return y(t,"exportChartLocalSuccess")}))}))}function t(a,e){var g=f.getElementsByTagName("head")[0],t=f.createElement("script");t.type="text/javascript",t.src=a,t.onload=e,t.onerror=function(){x("Error loading script "+a)},g.appendChild(t)}function l(g,e,t,n){var o,p,r,b=this,l=function(){r&&q===d&&n(b.sanitizeSVG(o.innerHTML,p))},c=function(a,g,e){++q,e.imageElement.setAttributeNS("http://www.w3.org/1999/xlink","href",a),l()},h=null,d=0,q=0;b.unbindGetSVG=m(b,"getSVG",(function(a){p=a.chartCopy.options,r=(o=a.chartCopy.container.cloneNode(!0))&&o.getElementsByTagName("image")||[],d=r.length})),b.getSVGForExport(g,e);try{if(!r||!r.length)return void n(b.sanitizeSVG(o.innerHTML,p));for(e=0;e<r.length;e++){var u=r[e];(h=u.getAttributeNS("http://www.w3.org/1999/xlink","href"))?a.imageToDataUrl(h,"image/png",{imageElement:u},g.scale,c,t,t,t):(q++,u.parentNode.removeChild(u),e--,l())}}catch(e){t(e)}b.unbindGetSVG()}function c(g,e,t,n,o,r,l,c,p){var h=new b.Image,d=function(){setTimeout((function(){var a=f.createElement("canvas"),b=a.getContext&&a.getContext("2d");try{if(b){a.height=h.height*n,a.width=h.width*n,b.drawImage(h,0,0,a.width,a.height);try{var r=a.toDataURL(e);o(r,e,t,n)}catch(o){q(g,e,t,n)}}else l(g,e,t,n)}finally{p&&p(g,e,t,n)}}),a.loadEventDeferDelay)},m=function(){c(g,e,t,n),p&&p(g,e,t,n)},q=function(){h=new b.Image,q=r,h.crossOrigin="Anonymous",h.onload=d,h.onerror=m,h.src=g};h.onload=d,h.onerror=m,h.src=g}function C(g){var e=b.navigator.userAgent;e=-1<e.indexOf("WebKit")&&0>e.indexOf("Chrome");try{if(!e&&-1===g.indexOf("<foreignObject"))return a.domurl.createObjectURL(new b.Blob([g],{type:"image/svg+xml;charset-utf-16"}))}catch(e){}return"data:image/svg+xml;charset=UTF-8,"+encodeURIComponent(g)}function S(a,e){var g=a.width.baseVal.value+2*e;e=a.height.baseVal.value+2*e,g=new b.jsPDF(e>g?"p":"l","pt",[g,e]),[].forEach.call(a.querySelectorAll('*[visibility="hidden"]'),(function(a){a.parentNode.removeChild(a)})),e=a.querySelectorAll("linearGradient");for(var t=0;t<e.length;t++)for(var n=e[t].querySelectorAll("stop"),o=0;o<n.length&&"0"===n[o].getAttribute("offset")&&"0"===n[o+1].getAttribute("offset");)n[o].remove(),o++;return[].forEach.call(a.querySelectorAll("tspan"),(function(a){"​"===a.textContent&&(a.textContent=" ",a.setAttribute("dx",-5))})),b.svg2pdf(a,g,{removeInvalid:!0}),g.output("datauristring")}a.CanVGRenderer={},a.domurl=b.URL||b.webkitURL||b,a.loadEventDeferDelay=o.isMS?150:0,a.compose=function(a){if(-1===E.indexOf(a)){E.push(a);var b=a.prototype;b.getSVGForLocalExport=l,b.exportChartLocal=e,w(!0,h.exporting,r)}return a},a.downloadSVGLocal=function(g,e,n,o){var r=f.createElement("div"),l=e.type||"image/png",m=(e.filename||"chart")+"."+("image/svg+xml"===l?"svg":l.split("/")[1]),x=e.scale||1,p=e.libURL||h.exporting.libURL,v=!0;p="/"!==p.slice(-1)?p+"/":p;var y=function(){r.innerHTML=g;var b,a=r.getElementsByTagName("text");[].forEach.call(a,(function(a){["font-family","font-size"].forEach((function(b){for(var e=a;e&&e!==r;){if(e.style[b]){a.style[b]=e.style[b];break}e=e.parentNode}})),a.style["font-family"]=a.style["font-family"]&&a.style["font-family"].split(" ").splice(-1),b=a.getElementsByTagName("title"),[].forEach.call(b,(function(b){a.removeChild(b)}))})),a=S(r.firstChild,0);try{d(a,m),o&&o()}catch(e){n(e)}};if("image/svg+xml"===l)try{if(void 0!==b.navigator.msSaveOrOpenBlob){var w=new MSBlobBuilder;w.append(g);var q=w.getBlob("image/svg+xml")}else q=C(g);d(q,m),o&&o()}catch(e){n(e)}else if("application/pdf"===l)b.jsPDF&&b.svg2pdf?y():(v=!0,t(p+"jspdf.js",(function(){t(p+"svg2pdf.js",(function(){y()}))})));else{q=C(g);var u=function(){try{a.domurl.revokeObjectURL(q)}catch(e){}};c(q,l,{},x,(function(a){try{d(a,m),o&&o()}catch(e){n(e)}}),(function(){var a=f.createElement("canvas"),e=a.getContext("2d"),r=g.match(/^<svg[^>]*width\s*=\s*"?(\d+)"?[^>]*>/)[1]*x,q=g.match(/^<svg[^>]*height\s*=\s*"?(\d+)"?[^>]*>/)[1]*x,c=function(){b.canvg.Canvg.fromString(e,g).start();try{d(b.navigator.msSaveOrOpenBlob?a.msToBlob():a.toDataURL(l),m),o&&o()}catch(e){n(e)}finally{u()}};a.width=r,a.height=q,b.canvg?c():(v=!0,t(p+"canvg.js",(function(){c()})))}),n,n,(function(){v&&u()}))}},a.getScript=t,a.imageToDataUrl=c,a.svgToDataUrl=C,a.svgToPdf=S}(c||(c={})),c})),e(a,"masters/modules/offline-exporting.src.js",[a["Core/Globals.js"],a["Extensions/OfflineExporting/OfflineExporting.js"]],(function(a,e){a.downloadSVGLocal=e.downloadSVGLocal,e.compose(a.Chart)}))},e.exports?(a.default=a,e.exports=a):(o=[n(129),n(244)],void 0===(r=function(e){return a(e),a.Highcharts=e,a}.apply(t,o))||(e.exports=r))}}]);
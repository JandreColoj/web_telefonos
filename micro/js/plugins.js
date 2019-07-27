/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.3",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b="length"in a&&a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;

return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function aa(){return!0}function ba(){return!1}function ca(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ca()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ca()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?aa:ba):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=aa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=aa,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=aa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=ba;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=ba),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function da(a){var b=ea.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var ea="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fa=/ jQuery\d+="(?:null|\d+)"/g,ga=new RegExp("<(?:"+ea+")[\\s/>]","i"),ha=/^\s+/,ia=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ja=/<([\w:]+)/,ka=/<tbody/i,la=/<|&#?\w+;/,ma=/<(?:script|style|link)/i,na=/checked\s*(?:[^=]|=\s*.checked.)/i,oa=/^$|\/(?:java|ecma)script/i,pa=/^true\/(.*)/,qa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ra={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sa=da(y),ta=sa.appendChild(y.createElement("div"));ra.optgroup=ra.option,ra.tbody=ra.tfoot=ra.colgroup=ra.caption=ra.thead,ra.th=ra.td;function ua(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ua(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function va(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wa(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xa(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function ya(a){var b=pa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function za(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Aa(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Ba(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xa(b).text=a.text,ya(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!ga.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ta.innerHTML=a.outerHTML,ta.removeChild(f=ta.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ua(f),h=ua(a),g=0;null!=(e=h[g]);++g)d[g]&&Ba(e,d[g]);if(b)if(c)for(h=h||ua(a),d=d||ua(f),g=0;null!=(e=h[g]);g++)Aa(e,d[g]);else Aa(a,f);return d=ua(f,"script"),d.length>0&&za(d,!i&&ua(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=da(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(la.test(f)){h=h||o.appendChild(b.createElement("div")),i=(ja.exec(f)||["",""])[1].toLowerCase(),l=ra[i]||ra._default,h.innerHTML=l[1]+f.replace(ia,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&ha.test(f)&&p.push(b.createTextNode(ha.exec(f)[0])),!k.tbody){f="table"!==i||ka.test(f)?"<table>"!==l[1]||ka.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ua(p,"input"),va),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ua(o.appendChild(f),"script"),g&&za(h),c)){e=0;while(f=h[e++])oa.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ua(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&za(ua(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ua(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fa,""):void 0;if(!("string"!=typeof a||ma.test(a)||!k.htmlSerialize&&ga.test(a)||!k.leadingWhitespace&&ha.test(a)||ra[(ja.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ia,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ua(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ua(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&na.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ua(i,"script"),xa),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ua(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,ya),j=0;f>j;j++)d=g[j],oa.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qa,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Ca,Da={};function Ea(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fa(a){var b=y,c=Da[a];return c||(c=Ea(a,b),"none"!==c&&c||(Ca=(Ca||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ca[0].contentWindow||Ca[0].contentDocument).document,b.write(),b.close(),c=Ea(a,b),Ca.detach()),Da[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Ga=/^margin/,Ha=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ia,Ja,Ka=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ia=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Ha.test(g)&&Ga.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ia=function(a){return a.currentStyle},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ha.test(g)&&!Ka.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function La(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight),b.removeChild(i)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Ma=/alpha\([^)]*\)/i,Na=/opacity\s*=\s*([^)]*)/,Oa=/^(none|table(?!-c[ea]).+)/,Pa=new RegExp("^("+S+")(.*)$","i"),Qa=new RegExp("^([+-])=("+S+")","i"),Ra={position:"absolute",visibility:"hidden",display:"block"},Sa={letterSpacing:"0",fontWeight:"400"},Ta=["Webkit","O","Moz","ms"];function Ua(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ta.length;while(e--)if(b=Ta[e]+c,b in a)return b;return d}function Va(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fa(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wa(a,b,c){var d=Pa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Ya(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ia(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Ja(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ha.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xa(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ja(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ua(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qa.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ua(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Ja(a,b,d)),"normal"===f&&b in Sa&&(f=Sa[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Oa.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Ra,function(){return Ya(a,b,d)}):Ya(a,b,d):void 0},set:function(a,c,d){var e=d&&Ia(a);return Wa(a,c,d?Xa(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Na.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Ma,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Ma.test(f)?f.replace(Ma,e):f+" "+e)}}),m.cssHooks.marginRight=La(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Ja,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Ga.test(a)||(m.cssHooks[a+b].set=Wa)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ia(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Va(this,!0)},hide:function(){return Va(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Za(a,b,c,d,e){
return new Za.prototype.init(a,b,c,d,e)}m.Tween=Za,Za.prototype={constructor:Za,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")},cur:function(){var a=Za.propHooks[this.prop];return a&&a.get?a.get(this):Za.propHooks._default.get(this)},run:function(a){var b,c=Za.propHooks[this.prop];return this.options.duration?this.pos=b=m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Za.propHooks._default.set(this),this}},Za.prototype.init.prototype=Za.prototype,Za.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Za.propHooks.scrollTop=Za.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Za.prototype.init,m.fx.step={};var $a,_a,ab=/^(?:toggle|show|hide)$/,bb=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cb=/queueHooks$/,db=[ib],eb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bb.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bb.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fb(){return setTimeout(function(){$a=void 0}),$a=m.now()}function gb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hb(a,b,c){for(var d,e=(eb[b]||[]).concat(eb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fa(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fa(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ab.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fa(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hb(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=db.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$a||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$a||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);g>f;f++)if(d=db[f].call(j,a,k,j.opts))return d;return m.map(k,hb,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kb,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],eb[c]=eb[c]||[],eb[c].unshift(b)},prefilter:function(a,b){b?db.unshift(a):db.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kb(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),m.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($a=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$a=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_a||(_a=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_a),_a=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lb=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lb,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mb,nb,ob=m.expr.attrHandle,pb=/^(?:checked|selected)$/i,qb=k.getSetAttribute,rb=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nb:mb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rb&&qb||!pb.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qb?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nb={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rb&&qb||!pb.test(c)?a.setAttribute(!qb&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ob[b]||m.find.attr;ob[b]=rb&&qb||!pb.test(b)?function(a,b,d){var e,f;return d||(f=ob[b],ob[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,ob[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rb&&qb||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mb&&mb.set(a,b,c)}}),qb||(mb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},ob.id=ob.name=ob.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mb.set},m.attrHooks.contenteditable={set:function(a,b,c){mb.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sb=/^(?:input|select|textarea|button|object)$/i,tb=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sb.test(a.nodeName)||tb.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var ub=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ub," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vb=m.now(),wb=/\?/,xb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yb,zb,Ab=/#.*$/,Bb=/([?&])_=[^&]*/,Cb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Db=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Eb=/^(?:GET|HEAD)$/,Fb=/^\/\//,Gb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hb={},Ib={},Jb="*/".concat("*");try{zb=location.href}catch(Kb){zb=y.createElement("a"),zb.href="",zb=zb.href}yb=Gb.exec(zb.toLowerCase())||[];function Lb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mb(a,b,c,d){var e={},f=a===Ib;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nb(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Ob(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zb,type:"GET",isLocal:Db.test(yb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nb(Nb(a,m.ajaxSettings),b):Nb(m.ajaxSettings,a)},ajaxPrefilter:Lb(Hb),ajaxTransport:Lb(Ib),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cb.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zb)+"").replace(Ab,"").replace(Fb,yb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gb.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yb[1]&&c[2]===yb[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yb[3]||("http:"===yb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mb(Hb,k,b,v),2===t)return v;h=m.event&&k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Eb.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wb.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bb.test(e)?e.replace(Bb,"$1_="+vb++):e+(wb.test(e)?"&":"?")+"_="+vb++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jb+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mb(Ib,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Ob(k,v,c)),u=Pb(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qb=/%20/g,Rb=/\[\]$/,Sb=/\r?\n/g,Tb=/^(?:submit|button|image|reset|file)$/i,Ub=/^(?:input|select|textarea|keygen)/i;function Vb(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rb.test(a)?d(a,e):Vb(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vb(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vb(c,a[c],b,e);return d.join("&").replace(Qb,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Ub.test(this.nodeName)&&!Tb.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sb,"\r\n")}}):{name:b.name,value:c.replace(Sb,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zb()||$b()}:Zb;var Wb=0,Xb={},Yb=m.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Xb)Xb[a](void 0,!0)}),k.cors=!!Yb&&"withCredentials"in Yb,Yb=k.ajax=!!Yb,Yb&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xb[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xb[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zb(){try{return new a.XMLHttpRequest}catch(b){}}function $b(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _b=[],ac=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_b.pop()||m.expando+"_"+vb++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ac.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ac.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ac,"$1"+e):b.jsonp!==!1&&(b.url+=(wb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_b.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bc=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bc)return bc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cc=a.document.documentElement;function dc(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cc;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cc})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=La(k.pixelPosition,function(a,c){return c?(c=Ja(a,b),Ha.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ec=a.jQuery,fc=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fc),b&&a.jQuery===m&&(a.jQuery=ec),m},typeof b===K&&(a.jQuery=a.$=m),m});
//# sourceMappingURL=jquery.min.map
/*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.6",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.6",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.6",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.6",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.6",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.6",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");
d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.6",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
/**
 * Owl carousel
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
;(function($, window, document, undefined) {

	var drag, state, e;

	/**
	 * Template for status information about drag and touch events.
	 * @private
	 */
	drag = {
		start: 0,
		startX: 0,
		startY: 0,
		current: 0,
		currentX: 0,
		currentY: 0,
		offsetX: 0,
		offsetY: 0,
		distance: null,
		startTime: 0,
		endTime: 0,
		updatedX: 0,
		targetEl: null
	};

	/**
	 * Template for some status informations.
	 * @private
	 */
	state = {
		isTouch: false,
		isScrolling: false,
		isSwiping: false,
		direction: false,
		inMotion: false
	};

	/**
	 * Event functions references.
	 * @private
	 */
	e = {
		_onDragStart: null,
		_onDragMove: null,
		_onDragEnd: null,
		_transitionEnd: null,
		_resizer: null,
		_responsiveCall: null,
		_goToLoop: null,
		_checkVisibile: null
	};

	/**
	 * Creates a carousel.
	 * @class The Owl Carousel.
	 * @public
	 * @param {HTMLElement|jQuery} element - The element to create the carousel for.
	 * @param {Object} [options] - The options
	 */
	function Owl(element, options) {

		/**
		 * Current settings for the carousel.
		 * @public
		 */
		this.settings = null;

		/**
		 * Current options set by the caller including defaults.
		 * @public
		 */
		this.options = $.extend({}, Owl.Defaults, options);

		/**
		 * Plugin element.
		 * @public
		 */
		this.$element = $(element);

		/**
		 * Caches informations about drag and touch events.
		 */
		this.drag = $.extend({}, drag);

		/**
		 * Caches some status informations.
		 * @protected
		 */
		this.state = $.extend({}, state);

		/**
		 * @protected
		 * @todo Must be documented
		 */
		this.e = $.extend({}, e);

		/**
		 * References to the running plugins of this carousel.
		 * @protected
		 */
		this._plugins = {};

		/**
		 * Currently suppressed events to prevent them from beeing retriggered.
		 * @protected
		 */
		this._supress = {};

		/**
		 * Absolute current position.
		 * @protected
		 */
		this._current = null;

		/**
		 * Animation speed in milliseconds.
		 * @protected
		 */
		this._speed = null;

		/**
		 * Coordinates of all items in pixel.
		 * @todo The name of this member is missleading.
		 * @protected
		 */
		this._coordinates = [];

		/**
		 * Current breakpoint.
		 * @todo Real media queries would be nice.
		 * @protected
		 */
		this._breakpoint = null;

		/**
		 * Current width of the plugin element.
		 */
		this._width = null;

		/**
		 * All real items.
		 * @protected
		 */
		this._items = [];

		/**
		 * All cloned items.
		 * @protected
		 */
		this._clones = [];

		/**
		 * Merge values of all items.
		 * @todo Maybe this could be part of a plugin.
		 * @protected
		 */
		this._mergers = [];

		/**
		 * Invalidated parts within the update process.
		 * @protected
		 */
		this._invalidated = {};

		/**
		 * Ordered list of workers for the update process.
		 * @protected
		 */
		this._pipe = [];

		$.each(Owl.Plugins, $.proxy(function(key, plugin) {
			this._plugins[key[0].toLowerCase() + key.slice(1)]
				= new plugin(this);
		}, this));

		$.each(Owl.Pipe, $.proxy(function(priority, worker) {
			this._pipe.push({
				'filter': worker.filter,
				'run': $.proxy(worker.run, this)
			});
		}, this));

		this.setup();
		this.initialize();
	}

	/**
	 * Default options for the carousel.
	 * @public
	 */
	Owl.Defaults = {
		items: 3,
		loop: false,
		center: false,

		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,

		margin: 0,
		stagePadding: 0,

		merge: false,
		mergeFit: true,
		autoWidth: false,

		startPosition: 0,
		rtl: false,

		smartSpeed: 250,
		fluidSpeed: false,
		dragEndSpeed: false,

		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: window,
		responsiveClass: false,

		fallbackEasing: 'swing',

		info: false,

		nestedItemSelector: false,
		itemElement: 'div',
		stageElement: 'div',

		// Classes and Names
		themeClass: 'owl-theme',
		baseClass: 'owl-carousel',
		itemClass: 'owl-item',
		centerClass: 'center',
		activeClass: 'active'
	};

	/**
	 * Enumeration for width.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Width = {
		Default: 'default',
		Inner: 'inner',
		Outer: 'outer'
	};

	/**
	 * Contains all registered plugins.
	 * @public
	 */
	Owl.Plugins = {};

	/**
	 * Update pipe.
	 */
	Owl.Pipe = [ {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = this._items && this._items[this.relative(this._current)];
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			var cached = this._clones,
				clones = this.$stage.children('.cloned');

			if (clones.length !== cached.length || (!this.settings.loop && cached.length > 0)) {
				this.$stage.children('.cloned').remove();
				this._clones = [];
			}
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			var i, n,
				clones = this._clones,
				items = this._items,
				delta = this.settings.loop ? clones.length - Math.max(this.settings.items * 2, 4) : 0;

			for (i = 0, n = Math.abs(delta / 2); i < n; i++) {
				if (delta > 0) {
					this.$stage.children().eq(items.length + clones.length - 1).remove();
					clones.pop();
					this.$stage.children().eq(0).remove();
					clones.pop();
				} else {
					clones.push(clones.length / 2);
					this.$stage.append(items[clones[clones.length - 1]].clone().addClass('cloned'));
					clones.push(items.length - 1 - (clones.length - 1) / 2);
					this.$stage.prepend(items[clones[clones.length - 1]].clone().addClass('cloned'));
				}
			}
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var rtl = (this.settings.rtl ? 1 : -1),
				width = (this.width() / this.settings.items).toFixed(3),
				coordinate = 0, merge, i, n;

			this._coordinates = [];
			for (i = 0, n = this._clones.length + this._items.length; i < n; i++) {
				merge = this._mergers[this.relative(i)];
				merge = (this.settings.mergeFit && Math.min(merge, this.settings.items)) || merge;
				coordinate += (this.settings.autoWidth ? this._items[this.relative(i)].width() + this.settings.margin : width * merge) * rtl;

				this._coordinates.push(coordinate);
			}
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var i, n, width = (this.width() / this.settings.items).toFixed(3), css = {
				'width': Math.abs(this._coordinates[this._coordinates.length - 1]) + this.settings.stagePadding * 2,
				'padding-left': this.settings.stagePadding || '',
				'padding-right': this.settings.stagePadding || ''
			};

			this.$stage.css(css);

			css = { 'width': this.settings.autoWidth ? 'auto' : width - this.settings.margin };
			css[this.settings.rtl ? 'margin-left' : 'margin-right'] = this.settings.margin;

			if (!this.settings.autoWidth && $.grep(this._mergers, function(v) { return v > 1 }).length > 0) {
				for (i = 0, n = this._coordinates.length; i < n; i++) {
					css.width = Math.abs(this._coordinates[i]) - Math.abs(this._coordinates[i - 1] || 0) - this.settings.margin;
					this.$stage.children().eq(i).css(css);
				}
			} else {
				this.$stage.children().css(css);
			}
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current && this.reset(this.$stage.children().index(cache.current));
		}
	}, {
		filter: [ 'position' ],
		run: function() {
			this.animate(this.coordinates(this._current));
		}
	}, {
		filter: [ 'width', 'position', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				padding = this.settings.stagePadding * 2,
				begin = this.coordinates(this.current()) + padding,
				end = begin + this.width() * rtl,
				inner, outer, matches = [], i, n;

			for (i = 0, n = this._coordinates.length; i < n; i++) {
				inner = this._coordinates[i - 1] || 0;
				outer = Math.abs(this._coordinates[i]) + padding * rtl;

				if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
					|| (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
					matches.push(i);
				}
			}

			this.$stage.children('.' + this.settings.activeClass).removeClass(this.settings.activeClass);
			this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass(this.settings.activeClass);

			if (this.settings.center) {
				this.$stage.children('.' + this.settings.centerClass).removeClass(this.settings.centerClass);
				this.$stage.children().eq(this.current()).addClass(this.settings.centerClass);
			}
		}
	} ];

	/**
	 * Initializes the carousel.
	 * @protected
	 */
	Owl.prototype.initialize = function() {
		this.trigger('initialize');

		this.$element
			.addClass(this.settings.baseClass)
			.addClass(this.settings.themeClass)
			.toggleClass('owl-rtl', this.settings.rtl);

		// check support
		this.browserSupport();

		if (this.settings.autoWidth && this.state.imagesLoaded !== true) {
			var imgs, nestedSelector, width;
			imgs = this.$element.find('img');
			nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
			width = this.$element.children(nestedSelector).width();

			if (imgs.length && width <= 0) {
				this.preloadAutoWidthImages(imgs);
				return false;
			}
		}

		this.$element.addClass('owl-loading');

		// create stage
		this.$stage = $('<' + this.settings.stageElement + ' class="owl-stage"/>')
			.wrap('<div class="owl-stage-outer">');

		// append stage
		this.$element.append(this.$stage.parent());

		// append content
		this.replace(this.$element.children().not(this.$stage.parent()));

		// set view width
		this._width = this.$element.width();

		// update view
		this.refresh();

		this.$element.removeClass('owl-loading').addClass('owl-loaded');

		// attach generic events
		this.eventsCall();

		// attach generic events
		this.internalEvents();

		// attach custom control events
		this.addTriggerableEvents();

		this.trigger('initialized');
	};

	/**
	 * Setups the current settings.
	 * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
	 * @todo Support for media queries by using `matchMedia` would be nice.
	 * @public
	 */
	Owl.prototype.setup = function() {
		var viewport = this.viewport(),
			overwrites = this.options.responsive,
			match = -1,
			settings = null;

		if (!overwrites) {
			settings = $.extend({}, this.options);
		} else {
			$.each(overwrites, function(breakpoint) {
				if (breakpoint <= viewport && breakpoint > match) {
					match = Number(breakpoint);
				}
			});

			settings = $.extend({}, this.options, overwrites[match]);
			delete settings.responsive;

			// responsive class
			if (settings.responsiveClass) {
				this.$element.attr('class', function(i, c) {
					return c.replace(/\b owl-responsive-\S+/g, '');
				}).addClass('owl-responsive-' + match);
			}
		}

		if (this.settings === null || this._breakpoint !== match) {
			this.trigger('change', { property: { name: 'settings', value: settings } });
			this._breakpoint = match;
			this.settings = settings;
			this.invalidate('settings');
			this.trigger('changed', { property: { name: 'settings', value: this.settings } });
		}
	};

	/**
	 * Updates option logic if necessery.
	 * @protected
	 */
	Owl.prototype.optionsLogic = function() {
		// Toggle Center class
		this.$element.toggleClass('owl-center', this.settings.center);

		// if items number is less than in body
		if (this.settings.loop && this._items.length < this.settings.items) {
			this.settings.loop = false;
		}

		if (this.settings.autoWidth) {
			this.settings.stagePadding = false;
			this.settings.merge = false;
		}
	};

	/**
	 * Prepares an item before add.
	 * @todo Rename event parameter `content` to `item`.
	 * @protected
	 * @returns {jQuery|HTMLElement} - The item container.
	 */
	Owl.prototype.prepare = function(item) {
		var event = this.trigger('prepare', { content: item });

		if (!event.data) {
			event.data = $('<' + this.settings.itemElement + '/>')
				.addClass(this.settings.itemClass).append(item)
		}

		this.trigger('prepared', { content: event.data });

		return event.data;
	};

	/**
	 * Updates the view.
	 * @public
	 */
	Owl.prototype.update = function() {
		var i = 0,
			n = this._pipe.length,
			filter = $.proxy(function(p) { return this[p] }, this._invalidated),
			cache = {};

		while (i < n) {
			if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
				this._pipe[i].run(cache);
			}
			i++;
		}

		this._invalidated = {};
	};

	/**
	 * Gets the width of the view.
	 * @public
	 * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
	 * @returns {Number} - The width of the view in pixel.
	 */
	Owl.prototype.width = function(dimension) {
		dimension = dimension || Owl.Width.Default;
		switch (dimension) {
			case Owl.Width.Inner:
			case Owl.Width.Outer:
				return this._width;
			default:
				return this._width - this.settings.stagePadding * 2 + this.settings.margin;
		}
	};

	/**
	 * Refreshes the carousel primarily for adaptive purposes.
	 * @public
	 */
	Owl.prototype.refresh = function() {
		if (this._items.length === 0) {
			return false;
		}

		var start = new Date().getTime();

		this.trigger('refresh');

		this.setup();

		this.optionsLogic();

		// hide and show methods helps here to set a proper widths,
		// this prevents scrollbar to be calculated in stage width
		this.$stage.addClass('owl-refresh');

		this.update();

		this.$stage.removeClass('owl-refresh');

		this.state.orientation = window.orientation;

		this.watchVisibility();

		this.trigger('refreshed');
	};

	/**
	 * Save internal event references and add event based functions.
	 * @protected
	 */
	Owl.prototype.eventsCall = function() {
		// Save events references
		this.e._onDragStart = $.proxy(function(e) {
			this.onDragStart(e);
		}, this);
		this.e._onDragMove = $.proxy(function(e) {
			this.onDragMove(e);
		}, this);
		this.e._onDragEnd = $.proxy(function(e) {
			this.onDragEnd(e);
		}, this);
		this.e._onResize = $.proxy(function(e) {
			this.onResize(e);
		}, this);
		this.e._transitionEnd = $.proxy(function(e) {
			this.transitionEnd(e);
		}, this);
		this.e._preventClick = $.proxy(function(e) {
			this.preventClick(e);
		}, this);
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onThrottledResize = function() {
		window.clearTimeout(this.resizeTimer);
		this.resizeTimer = window.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate);
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onResize = function() {
		if (!this._items.length) {
			return false;
		}

		if (this._width === this.$element.width()) {
			return false;
		}

		if (this.trigger('resize').isDefaultPrevented()) {
			return false;
		}

		this._width = this.$element.width();

		this.invalidate('width');

		this.refresh();

		this.trigger('resized');
	};

	/**
	 * Checks for touch/mouse drag event type and add run event handlers.
	 * @protected
	 */
	Owl.prototype.eventsRouter = function(event) {
		var type = event.type;

		if (type === "mousedown" || type === "touchstart") {
			this.onDragStart(event);
		} else if (type === "mousemove" || type === "touchmove") {
			this.onDragMove(event);
		} else if (type === "mouseup" || type === "touchend") {
			this.onDragEnd(event);
		} else if (type === "touchcancel") {
			this.onDragEnd(event);
		}
	};

	/**
	 * Checks for touch/mouse drag options and add necessery event handlers.
	 * @protected
	 */
	Owl.prototype.internalEvents = function() {
		var isTouch = isTouchSupport(),
			isTouchIE = isTouchSupportIE();

		if (this.settings.mouseDrag){
			this.$stage.on('mousedown', $.proxy(function(event) { this.eventsRouter(event) }, this));
			this.$stage.on('dragstart', function() { return false });
			this.$stage.get(0).onselectstart = function() { return false };
		} else {
			this.$element.addClass('owl-text-select-on');
		}

		if (this.settings.touchDrag && !isTouchIE){
			this.$stage.on('touchstart touchcancel', $.proxy(function(event) { this.eventsRouter(event) }, this));
		}

		// catch transitionEnd event
		if (this.transitionEndVendor) {
			this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, false);
		}

		// responsive
		if (this.settings.responsive !== false) {
			this.on(window, 'resize', $.proxy(this.onThrottledResize, this));
		}
	};

	/**
	 * Handles touchstart/mousedown event.
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragStart = function(event) {
		var ev, isTouchEvent, pageX, pageY, animatedPos;

		ev = event.originalEvent || event || window.event;

		// prevent right click
		if (ev.which === 3 || this.state.isTouch) {
			return false;
		}

		if (ev.type === 'mousedown') {
			this.$stage.addClass('owl-grab');
		}

		this.trigger('drag');
		this.drag.startTime = new Date().getTime();
		this.speed(0);
		this.state.isTouch = true;
		this.state.isScrolling = false;
		this.state.isSwiping = false;
		this.drag.distance = 0;

		pageX = getTouches(ev).x;
		pageY = getTouches(ev).y;

		// get stage position left
		this.drag.offsetX = this.$stage.position().left;
		this.drag.offsetY = this.$stage.position().top;

		if (this.settings.rtl) {
			this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width()
				+ this.settings.margin;
		}

		// catch position // ie to fix
		if (this.state.inMotion && this.support3d) {
			animatedPos = this.getTransformProperty();
			this.drag.offsetX = animatedPos;
			this.animate(animatedPos);
			this.state.inMotion = true;
		} else if (this.state.inMotion && !this.support3d) {
			this.state.inMotion = false;
			return false;
		}

		this.drag.startX = pageX - this.drag.offsetX;
		this.drag.startY = pageY - this.drag.offsetY;

		this.drag.start = pageX - this.drag.startX;
		this.drag.targetEl = ev.target || ev.srcElement;
		this.drag.updatedX = this.drag.start;

		// to do/check
		// prevent links and images dragging;
		if (this.drag.targetEl.tagName === "IMG" || this.drag.targetEl.tagName === "A") {
			this.drag.targetEl.draggable = false;
		}

		$(document).on('mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents', $.proxy(function(event) {this.eventsRouter(event)},this));
	};

	/**
	 * Handles the touchmove/mousemove events.
	 * @todo Simplify
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragMove = function(event) {
		var ev, isTouchEvent, pageX, pageY, minValue, maxValue, pull;

		if (!this.state.isTouch) {
			return;
		}

		if (this.state.isScrolling) {
			return;
		}

		ev = event.originalEvent || event || window.event;

		pageX = getTouches(ev).x;
		pageY = getTouches(ev).y;

		// Drag Direction
		this.drag.currentX = pageX - this.drag.startX;
		this.drag.currentY = pageY - this.drag.startY;
		this.drag.distance = this.drag.currentX - this.drag.offsetX;

		// Check move direction
		if (this.drag.distance < 0) {
			this.state.direction = this.settings.rtl ? 'right' : 'left';
		} else if (this.drag.distance > 0) {
			this.state.direction = this.settings.rtl ? 'left' : 'right';
		}
		// Loop
		if (this.settings.loop) {
			if (this.op(this.drag.currentX, '>', this.coordinates(this.minimum())) && this.state.direction === 'right') {
				this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length);
			} else if (this.op(this.drag.currentX, '<', this.coordinates(this.maximum())) && this.state.direction === 'left') {
				this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length);
			}
		} else {
			// pull
			minValue = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
			maxValue = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
			pull = this.settings.pullDrag ? this.drag.distance / 5 : 0;
			this.drag.currentX = Math.max(Math.min(this.drag.currentX, minValue + pull), maxValue + pull);
		}

		// Lock browser if swiping horizontal

		if ((this.drag.distance > 8 || this.drag.distance < -8)) {
			if (ev.preventDefault !== undefined) {
				ev.preventDefault();
			} else {
				ev.returnValue = false;
			}
			this.state.isSwiping = true;
		}

		this.drag.updatedX = this.drag.currentX;

		// Lock Owl if scrolling
		if ((this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === false) {
			this.state.isScrolling = true;
			this.drag.updatedX = this.drag.start;
		}

		this.animate(this.drag.updatedX);
	};

	/**
	 * Handles the touchend/mouseup events.
	 * @protected
	 */
	Owl.prototype.onDragEnd = function(event) {
		var compareTimes, distanceAbs, closest;

		if (!this.state.isTouch) {
			return;
		}

		if (event.type === 'mouseup') {
			this.$stage.removeClass('owl-grab');
		}

		this.trigger('dragged');

		// prevent links and images dragging;
		this.drag.targetEl.removeAttribute("draggable");

		// remove drag event listeners

		this.state.isTouch = false;
		this.state.isScrolling = false;
		this.state.isSwiping = false;

		// to check
		if (this.drag.distance === 0 && this.state.inMotion !== true) {
			this.state.inMotion = false;
			return false;
		}

		// prevent clicks while scrolling

		this.drag.endTime = new Date().getTime();
		compareTimes = this.drag.endTime - this.drag.startTime;
		distanceAbs = Math.abs(this.drag.distance);

		// to test
		if (distanceAbs > 3 || compareTimes > 300) {
			this.removeClick(this.drag.targetEl);
		}

		closest = this.closest(this.drag.updatedX);

		this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
		this.current(closest);
		this.invalidate('position');
		this.update();

		// if pullDrag is off then fire transitionEnd event manually when stick
		// to border
		if (!this.settings.pullDrag && this.drag.updatedX === this.coordinates(closest)) {
			this.transitionEnd();
		}

		this.drag.distance = 0;

		$(document).off('.owl.dragEvents');
	};

	/**
	 * Attaches `preventClick` to disable link while swipping.
	 * @protected
	 * @param {HTMLElement} [target] - The target of the `click` event.
	 */
	Owl.prototype.removeClick = function(target) {
		this.drag.targetEl = target;
		$(target).on('click.preventClick', this.e._preventClick);
		// to make sure click is removed:
		window.setTimeout(function() {
			$(target).off('click.preventClick');
		}, 300);
	};

	/**
	 * Suppresses click event.
	 * @protected
	 * @param {Event} ev - The event arguments.
	 */
	Owl.prototype.preventClick = function(ev) {
		if (ev.preventDefault) {
			ev.preventDefault();
		} else {
			ev.returnValue = false;
		}
		if (ev.stopPropagation) {
			ev.stopPropagation();
		}
		$(ev.target).off('click.preventClick');
	};

	/**
	 * Catches stage position while animate (only CSS3).
	 * @protected
	 * @returns
	 */
	Owl.prototype.getTransformProperty = function() {
		var transform, matrix3d;

		transform = window.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + 'transform');
		// var transform = this.$stage.css(this.vendorName + 'transform')
		transform = transform.replace(/matrix(3d)?\(|\)/g, '').split(',');
		matrix3d = transform.length === 16;

		return matrix3d !== true ? transform[4] : transform[12];
	};

	/**
	 * Gets absolute position of the closest item for a coordinate.
	 * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
	 * @protected
	 * @param {Number} coordinate - The coordinate in pixel.
	 * @return {Number} - The absolute position of the closest item.
	 */
	Owl.prototype.closest = function(coordinate) {
		var position = -1, pull = 30, width = this.width(), coordinates = this.coordinates();

		if (!this.settings.freeDrag) {
			// check closest item
			$.each(coordinates, $.proxy(function(index, value) {
				if (coordinate > value - pull && coordinate < value + pull) {
					position = index;
				} else if (this.op(coordinate, '<', value)
					&& this.op(coordinate, '>', coordinates[index + 1] || value - width)) {
					position = this.state.direction === 'left' ? index + 1 : index;
				}
				return position === -1;
			}, this));
		}

		if (!this.settings.loop) {
			// non loop boundries
			if (this.op(coordinate, '>', coordinates[this.minimum()])) {
				position = coordinate = this.minimum();
			} else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
				position = coordinate = this.maximum();
			}
		}

		return position;
	};

	/**
	 * Animates the stage.
	 * @public
	 * @param {Number} coordinate - The coordinate in pixels.
	 */
	Owl.prototype.animate = function(coordinate) {
		this.trigger('translate');
		this.state.inMotion = this.speed() > 0;

		if (this.support3d) {
			this.$stage.css({
				transform: 'translate3d(' + coordinate + 'px' + ',0px, 0px)',
				transition: (this.speed() / 1000) + 's'
			});
		} else if (this.state.isTouch) {
			this.$stage.css({
				left: coordinate + 'px'
			});
		} else {
			this.$stage.animate({
				left: coordinate
			}, this.speed() / 1000, this.settings.fallbackEasing, $.proxy(function() {
				if (this.state.inMotion) {
					this.transitionEnd();
				}
			}, this));
		}
	};

	/**
	 * Sets the absolute position of the current item.
	 * @public
	 * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
	 * @returns {Number} - The absolute position of the current item.
	 */
	Owl.prototype.current = function(position) {
		if (position === undefined) {
			return this._current;
		}

		if (this._items.length === 0) {
			return undefined;
		}

		position = this.normalize(position);

		if (this._current !== position) {
			var event = this.trigger('change', { property: { name: 'position', value: position } });

			if (event.data !== undefined) {
				position = this.normalize(event.data);
			}

			this._current = position;

			this.invalidate('position');

			this.trigger('changed', { property: { name: 'position', value: this._current } });
		}

		return this._current;
	};

	/**
	 * Invalidates the given part of the update routine.
	 * @param {String} part - The part to invalidate.
	 */
	Owl.prototype.invalidate = function(part) {
		this._invalidated[part] = true;
	}

	/**
	 * Resets the absolute position of the current item.
	 * @public
	 * @param {Number} position - The absolute position of the new item.
	 */
	Owl.prototype.reset = function(position) {
		position = this.normalize(position);

		if (position === undefined) {
			return;
		}

		this._speed = 0;
		this._current = position;

		this.suppress([ 'translate', 'translated' ]);

		this.animate(this.coordinates(position));

		this.release([ 'translate', 'translated' ]);
	};

	/**
	 * Normalizes an absolute or a relative position for an item.
	 * @public
	 * @param {Number} position - The absolute or relative position to normalize.
	 * @param {Boolean} [relative=false] - Whether the given position is relative or not.
	 * @returns {Number} - The normalized position.
	 */
	Owl.prototype.normalize = function(position, relative) {
		var n = (relative ? this._items.length : this._items.length + this._clones.length);

		if (!$.isNumeric(position) || n < 1) {
			return undefined;
		}

		if (this._clones.length) {
			position = ((position % n) + n) % n;
		} else {
			position = Math.max(this.minimum(relative), Math.min(this.maximum(relative), position));
		}

		return position;
	};

	/**
	 * Converts an absolute position for an item into a relative position.
	 * @public
	 * @param {Number} position - The absolute position to convert.
	 * @returns {Number} - The converted position.
	 */
	Owl.prototype.relative = function(position) {
		position = this.normalize(position);
		position = position - this._clones.length / 2;
		return this.normalize(position, true);
	};

	/**
	 * Gets the maximum position for an item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.maximum = function(relative) {
		var maximum, width, i = 0, coordinate,
			settings = this.settings;

		if (relative) {
			return this._items.length - 1;
		}

		if (!settings.loop && settings.center) {
			maximum = this._items.length - 1;
		} else if (!settings.loop && !settings.center) {
			maximum = this._items.length - settings.items;
		} else if (settings.loop || settings.center) {
			maximum = this._items.length + settings.items;
		} else if (settings.autoWidth || settings.merge) {
			revert = settings.rtl ? 1 : -1;
			width = this.$stage.width() - this.$element.width();
			while (coordinate = this.coordinates(i)) {
				if (coordinate * revert >= width) {
					break;
				}
				maximum = ++i;
			}
		} else {
			throw 'Can not detect maximum absolute position.'
		}

		return maximum;
	};

	/**
	 * Gets the minimum position for an item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.minimum = function(relative) {
		if (relative) {
			return 0;
		}

		return this._clones.length / 2;
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.items = function(position) {
		if (position === undefined) {
			return this._items.slice();
		}

		position = this.normalize(position, true);
		return this._items[position];
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.mergers = function(position) {
		if (position === undefined) {
			return this._mergers.slice();
		}

		position = this.normalize(position, true);
		return this._mergers[position];
	};

	/**
	 * Gets the absolute positions of clones for an item.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
	 */
	Owl.prototype.clones = function(position) {
		var odd = this._clones.length / 2,
			even = odd + this._items.length,
			map = function(index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };

		if (position === undefined) {
			return $.map(this._clones, function(v, i) { return map(i) });
		}

		return $.map(this._clones, function(v, i) { return v === position ? map(i) : null });
	};

	/**
	 * Sets the current animation speed.
	 * @public
	 * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
	 * @returns {Number} - The current animation speed in milliseconds.
	 */
	Owl.prototype.speed = function(speed) {
		if (speed !== undefined) {
			this._speed = speed;
		}

		return this._speed;
	};

	/**
	 * Gets the coordinate of an item.
	 * @todo The name of this method is missleanding.
	 * @public
	 * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
	 * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
	 */
	Owl.prototype.coordinates = function(position) {
		var coordinate = null;

		if (position === undefined) {
			return $.map(this._coordinates, $.proxy(function(coordinate, index) {
				return this.coordinates(index);
			}, this));
		}

		if (this.settings.center) {
			coordinate = this._coordinates[position];
			coordinate += (this.width() - coordinate + (this._coordinates[position - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1);
		} else {
			coordinate = this._coordinates[position - 1] || 0;
		}

		return coordinate;
	};

	/**
	 * Calculates the speed for a translation.
	 * @protected
	 * @param {Number} from - The absolute position of the start item.
	 * @param {Number} to - The absolute position of the target item.
	 * @param {Number} [factor=undefined] - The time factor in milliseconds.
	 * @returns {Number} - The time in milliseconds for the translation.
	 */
	Owl.prototype.duration = function(from, to, factor) {
		return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
	};

	/**
	 * Slides to the specified item.
	 * @public
	 * @param {Number} position - The position of the item.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.to = function(position, speed) {
		if (this.settings.loop) {
			var distance = position - this.relative(this.current()),
				revert = this.current(),
				before = this.current(),
				after = this.current() + distance,
				direction = before - after < 0 ? true : false,
				items = this._clones.length + this._items.length;

			if (after < this.settings.items && direction === false) {
				revert = before + this._items.length;
				this.reset(revert);
			} else if (after >= items - this.settings.items && direction === true) {
				revert = before - this._items.length;
				this.reset(revert);
			}
			window.clearTimeout(this.e._goToLoop);
			this.e._goToLoop = window.setTimeout($.proxy(function() {
				this.speed(this.duration(this.current(), revert + distance, speed));
				this.current(revert + distance);
				this.update();
			}, this), 30);
		} else {
			this.speed(this.duration(this.current(), position, speed));
			this.current(position);
			this.update();
		}
	};

	/**
	 * Slides to the next item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.next = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) + 1, speed);
	};

	/**
	 * Slides to the previous item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.prev = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) - 1, speed);
	};

	/**
	 * Handles the end of an animation.
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.transitionEnd = function(event) {

		// if css2 animation then event object is undefined
		if (event !== undefined) {
			event.stopPropagation();

			// Catch only owl-stage transitionEnd event
			if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
				return false;
			}
		}

		this.state.inMotion = false;
		this.trigger('translated');
	};

	/**
	 * Gets viewport width.
	 * @protected
	 * @return {Number} - The width in pixel.
	 */
	Owl.prototype.viewport = function() {
		var width;
		if (this.options.responsiveBaseElement !== window) {
			width = $(this.options.responsiveBaseElement).width();
		} else if (window.innerWidth) {
			width = window.innerWidth;
		} else if (document.documentElement && document.documentElement.clientWidth) {
			width = document.documentElement.clientWidth;
		} else {
			throw 'Can not detect viewport width.';
		}
		return width;
	};

	/**
	 * Replaces the current content.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The new content.
	 */
	Owl.prototype.replace = function(content) {
		this.$stage.empty();
		this._items = [];

		if (content) {
			content = (content instanceof jQuery) ? content : $(content);
		}

		if (this.settings.nestedItemSelector) {
			content = content.find('.' + this.settings.nestedItemSelector);
		}

		content.filter(function() {
			return this.nodeType === 1;
		}).each($.proxy(function(index, item) {
			item = this.prepare(item);
			this.$stage.append(item);
			this._items.push(item);
			this._mergers.push(item.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
		}, this));

		this.reset($.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);

		this.invalidate('items');
	};

	/**
	 * Adds an item.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The item content to add.
	 * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
	 */
	Owl.prototype.add = function(content, position) {
		position = position === undefined ? this._items.length : this.normalize(position, true);

		this.trigger('add', { content: content, position: position });

		if (this._items.length === 0 || position === this._items.length) {
			this.$stage.append(content);
			this._items.push(content);
			this._mergers.push(content.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
		} else {
			this._items[position].before(content);
			this._items.splice(position, 0, content);
			this._mergers.splice(position, 0, content.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
		}

		this.invalidate('items');

		this.trigger('added', { content: content, position: position });
	};

	/**
	 * Removes an item by its position.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {Number} position - The relative position of the item to remove.
	 */
	Owl.prototype.remove = function(position) {
		position = this.normalize(position, true);

		if (position === undefined) {
			return;
		}

		this.trigger('remove', { content: this._items[position], position: position });

		this._items[position].remove();
		this._items.splice(position, 1);
		this._mergers.splice(position, 1);

		this.invalidate('items');

		this.trigger('removed', { content: null, position: position });
	};

	/**
	 * Adds triggerable events.
	 * @protected
	 */
	Owl.prototype.addTriggerableEvents = function() {
		var handler = $.proxy(function(callback, event) {
			return $.proxy(function(e) {
				if (e.relatedTarget !== this) {
					this.suppress([ event ]);
					callback.apply(this, [].slice.call(arguments, 1));
					this.release([ event ]);
				}
			}, this);
		}, this);

		$.each({
			'next': this.next,
			'prev': this.prev,
			'to': this.to,
			'destroy': this.destroy,
			'refresh': this.refresh,
			'replace': this.replace,
			'add': this.add,
			'remove': this.remove
		}, $.proxy(function(event, callback) {
			this.$element.on(event + '.owl.carousel', handler(callback, event + '.owl.carousel'));
		}, this));

	};

	/**
	 * Watches the visibility of the carousel element.
	 * @protected
	 */
	Owl.prototype.watchVisibility = function() {

		// test on zepto
		if (!isElVisible(this.$element.get(0))) {
			this.$element.addClass('owl-hidden');
			window.clearInterval(this.e._checkVisibile);
			this.e._checkVisibile = window.setInterval($.proxy(checkVisible, this), 500);
		}

		function isElVisible(el) {
			return el.offsetWidth > 0 && el.offsetHeight > 0;
		}

		function checkVisible() {
			if (isElVisible(this.$element.get(0))) {
				this.$element.removeClass('owl-hidden');
				this.refresh();
				window.clearInterval(this.e._checkVisibile);
			}
		}
	};

	/**
	 * Preloads images with auto width.
	 * @protected
	 * @todo Still to test
	 */
	Owl.prototype.preloadAutoWidthImages = function(imgs) {
		var loaded, that, $el, img;

		loaded = 0;
		that = this;
		imgs.each(function(i, el) {
			$el = $(el);
			img = new Image();

			img.onload = function() {
				loaded++;
				$el.attr('src', img.src);
				$el.css('opacity', 1);
				if (loaded >= imgs.length) {
					that.state.imagesLoaded = true;
					that.initialize();
				}
			};

			img.src = $el.attr('src') || $el.attr('data-src') || $el.attr('data-src-retina');
		});
	};

	/**
	 * Destroys the carousel.
	 * @public
	 */
	Owl.prototype.destroy = function() {

		if (this.$element.hasClass(this.settings.themeClass)) {
			this.$element.removeClass(this.settings.themeClass);
		}

		if (this.settings.responsive !== false) {
			$(window).off('resize.owl.carousel');
		}

		if (this.transitionEndVendor) {
			this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
		}

		for ( var i in this._plugins) {
			this._plugins[i].destroy();
		}

		if (this.settings.mouseDrag || this.settings.touchDrag) {
			this.$stage.off('mousedown touchstart touchcancel');
			$(document).off('.owl.dragEvents');
			this.$stage.get(0).onselectstart = function() {};
			this.$stage.off('dragstart', function() { return false });
		}

		// remove event handlers in the ".owl.carousel" namespace
		this.$element.off('.owl');

		this.$stage.children('.cloned').remove();
		this.e = null;
		this.$element.removeData('owlCarousel');

		this.$stage.children().contents().unwrap();
		this.$stage.children().unwrap();
		this.$stage.unwrap();
	};

	/**
	 * Operators to calculate right-to-left and left-to-right.
	 * @protected
	 * @param {Number} [a] - The left side operand.
	 * @param {String} [o] - The operator.
	 * @param {Number} [b] - The right side operand.
	 */
	Owl.prototype.op = function(a, o, b) {
		var rtl = this.settings.rtl;
		switch (o) {
			case '<':
				return rtl ? a > b : a < b;
			case '>':
				return rtl ? a < b : a > b;
			case '>=':
				return rtl ? a <= b : a >= b;
			case '<=':
				return rtl ? a >= b : a <= b;
			default:
				break;
		}
	};

	/**
	 * Attaches to an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The event handler to attach.
	 * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
	 */
	Owl.prototype.on = function(element, event, listener, capture) {
		if (element.addEventListener) {
			element.addEventListener(event, listener, capture);
		} else if (element.attachEvent) {
			element.attachEvent('on' + event, listener);
		}
	};

	/**
	 * Detaches from an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The attached event handler to detach.
	 * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
	 */
	Owl.prototype.off = function(element, event, listener, capture) {
		if (element.removeEventListener) {
			element.removeEventListener(event, listener, capture);
		} else if (element.detachEvent) {
			element.detachEvent('on' + event, listener);
		}
	};

	/**
	 * Triggers an public event.
	 * @protected
	 * @param {String} name - The event name.
	 * @param {*} [data=null] - The event data.
	 * @param {String} [namespace=.owl.carousel] - The event namespace.
	 * @returns {Event} - The event arguments.
	 */
	Owl.prototype.trigger = function(name, data, namespace) {
		var status = {
			item: { count: this._items.length, index: this.current() }
		}, handler = $.camelCase(
			$.grep([ 'on', name, namespace ], function(v) { return v })
				.join('-').toLowerCase()
		), event = $.Event(
			[ name, 'owl', namespace || 'carousel' ].join('.').toLowerCase(),
			$.extend({ relatedTarget: this }, status, data)
		);

		if (!this._supress[name]) {
			$.each(this._plugins, function(name, plugin) {
				if (plugin.onTrigger) {
					plugin.onTrigger(event);
				}
			});

			this.$element.trigger(event);

			if (this.settings && typeof this.settings[handler] === 'function') {
				this.settings[handler].apply(this, event);
			}
		}

		return event;
	};

	/**
	 * Suppresses events.
	 * @protected
	 * @param {Array.<String>} events - The events to suppress.
	 */
	Owl.prototype.suppress = function(events) {
		$.each(events, $.proxy(function(index, event) {
			this._supress[event] = true;
		}, this));
	}

	/**
	 * Releases suppressed events.
	 * @protected
	 * @param {Array.<String>} events - The events to release.
	 */
	Owl.prototype.release = function(events) {
		$.each(events, $.proxy(function(index, event) {
			delete this._supress[event];
		}, this));
	}

	/**
	 * Checks the availability of some browser features.
	 * @protected
	 */
	Owl.prototype.browserSupport = function() {
		this.support3d = isPerspective();

		if (this.support3d) {
			this.transformVendor = isTransform();

			// take transitionend event name by detecting transition
			var endVendors = [ 'transitionend', 'webkitTransitionEnd', 'transitionend', 'oTransitionEnd' ];
			this.transitionEndVendor = endVendors[isTransition()];

			// take vendor name from transform name
			this.vendorName = this.transformVendor.replace(/Transform/i, '');
			this.vendorName = this.vendorName !== '' ? '-' + this.vendorName.toLowerCase() + '-' : '';
		}

		this.state.orientation = window.orientation;
	};

	/**
	 * Get touch/drag coordinats.
	 * @private
	 * @param {event} - mousedown/touchstart event
	 * @returns {object} - Contains X and Y of current mouse/touch position
	 */

	function getTouches(event) {
		if (event.touches !== undefined) {
			return {
				x: event.touches[0].pageX,
				y: event.touches[0].pageY
			};
		}

		if (event.touches === undefined) {
			if (event.pageX !== undefined) {
				return {
					x: event.pageX,
					y: event.pageY
				};
			}

		if (event.pageX === undefined) {
			return {
					x: event.clientX,
					y: event.clientY
				};
			}
		}
	}

	/**
	 * Checks for CSS support.
	 * @private
	 * @param {Array} array - The CSS properties to check for.
	 * @returns {Array} - Contains the supported CSS property name and its index or `false`.
	 */
	function isStyleSupported(array) {
		var p, s, fake = document.createElement('div'), list = array;
		for (p in list) {
			s = list[p];
			if (typeof fake.style[s] !== 'undefined') {
				fake = null;
				return [ s, p ];
			}
		}
		return [ false ];
	}

	/**
	 * Checks for CSS transition support.
	 * @private
	 * @todo Realy bad design
	 * @returns {Number}
	 */
	function isTransition() {
		return isStyleSupported([ 'transition', 'WebkitTransition', 'MozTransition', 'OTransition' ])[1];
	}

	/**
	 * Checks for CSS transform support.
	 * @private
	 * @returns {String} The supported property name or false.
	 */
	function isTransform() {
		return isStyleSupported([ 'transform', 'WebkitTransform', 'MozTransform', 'OTransform', 'msTransform' ])[0];
	}

	/**
	 * Checks for CSS perspective support.
	 * @private
	 * @returns {String} The supported property name or false.
	 */
	function isPerspective() {
		return isStyleSupported([ 'perspective', 'webkitPerspective', 'MozPerspective', 'OPerspective', 'MsPerspective' ])[0];
	}

	/**
	 * Checks wether touch is supported or not.
	 * @private
	 * @returns {Boolean}
	 */
	function isTouchSupport() {
		return 'ontouchstart' in window || !!(navigator.msMaxTouchPoints);
	}

	/**
	 * Checks wether touch is supported or not for IE.
	 * @private
	 * @returns {Boolean}
	 */
	function isTouchSupportIE() {
		return window.navigator.msPointerEnabled;
	}

	/**
	 * The jQuery Plugin for the Owl Carousel
	 * @public
	 */
	$.fn.owlCarousel = function(options) {
		return this.each(function() {
			if (!$(this).data('owlCarousel')) {
				$(this).data('owlCarousel', new Owl(this, options));
			}
		});
	};

	/**
	 * The constructor for the jQuery Plugin
	 * @public
	 */
	$.fn.owlCarousel.Constructor = Owl;

})(window.Zepto || window.jQuery, window, document);

/**
 * Lazy Plugin
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the lazy plugin.
	 * @class The Lazy Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Lazy = function(carousel) {

		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Already loaded items.
		 * @protected
		 * @type {Array.<jQuery>}
		 */
		this._loaded = [];

		/**
		 * Event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel change.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}

				if (!this._core.settings || !this._core.settings.lazyLoad) {
					return;
				}

				if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
					var settings = this._core.settings,
						n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
						i = ((settings.center && n * -1) || 0),
						position = ((e.property && e.property.value) || this._core.current()) + i,
						clones = this._core.clones().length,
						load = $.proxy(function(i, v) { this.load(v) }, this);

					while (i++ < n) {
						this.load(clones / 2 + this._core.relative(position));
						clones && $.each(this._core.clones(this._core.relative(position++)), load);
					}
				}
			}, this)
		};

		// set the default options
		this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

		// register event handler
		this._core.$element.on(this._handlers);
	}

	/**
	 * Default options.
	 * @public
	 */
	Lazy.Defaults = {
		lazyLoad: false
	}

	/**
	 * Loads all resources of an item at the specified position.
	 * @param {Number} position - The absolute position of the item.
	 * @protected
	 */
	Lazy.prototype.load = function(position) {
		var $item = this._core.$stage.children().eq(position),
			$elements = $item && $item.find('.owl-lazy');

		if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
			return;
		}

		$elements.each($.proxy(function(index, element) {
			var $element = $(element), image,
				url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src');

			this._core.trigger('load', { element: $element, url: url }, 'lazy');

			if ($element.is('img')) {
				$element.one('load.owl.lazy', $.proxy(function() {
					$element.css('opacity', 1);
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this)).attr('src', url);
			} else {
				image = new Image();
				image.onload = $.proxy(function() {
					$element.css({
						'background-image': 'url(' + url + ')',
						'opacity': '1'
					});
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this);
				image.src = url;
			}
		}, this));

		this._loaded.push($item.get(0));
	}

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Lazy.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this._core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	}

	$.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoHeight Plugin
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the auto height plugin.
	 * @class The Auto Height Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoHeight = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function() {
				if (this._core.settings.autoHeight) {
					this.update();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (this._core.settings.autoHeight && e.property.name == 'position'){
					this.update();
				}
			}, this),
			'loaded.owl.lazy': $.proxy(function(e) {
				if (this._core.settings.autoHeight && e.element.closest('.' + this._core.settings.itemClass)
					=== this._core.$stage.children().eq(this._core.current())) {
					this.update();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	AutoHeight.Defaults = {
		autoHeight: false,
		autoHeightClass: 'owl-height'
	};

	/**
	 * Updates the view.
	 */
	AutoHeight.prototype.update = function() {
		this._core.$stage.parent()
			.height(this._core.$stage.children().eq(this._core.current()).height())
			.addClass(this._core.settings.autoHeightClass);
	};

	AutoHeight.prototype.destroy = function() {
		var handler, property;

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;

})(window.Zepto || window.jQuery, window, document);

/**
 * Video Plugin
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the video plugin.
	 * @class The Video Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Video = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Cache all video URLs.
		 * @protected
		 * @type {Object}
		 */
		this._videos = {};

		/**
		 * Current playing item.
		 * @protected
		 * @type {jQuery}
		 */
		this._playing = null;

		/**
		 * Whether this is in fullscreen or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._fullscreen = false;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'resize.owl.carousel': $.proxy(function(e) {
				if (this._core.settings.video && !this.isInFullScreen()) {
					e.preventDefault();
				}
			}, this),
			'refresh.owl.carousel changed.owl.carousel': $.proxy(function(e) {
				if (this._playing) {
					this.stop();
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				var $element = $(e.content).find('.owl-video');
				if ($element.length) {
					$element.css('display', 'none');
					this.fetch($element, $(e.content));
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Video.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);

		this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
			this.play(e);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Video.Defaults = {
		video: false,
		videoHeight: false,
		videoWidth: false
	};

	/**
	 * Gets the video ID and the type (YouTube/Vimeo only).
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {jQuery} item - The item containing the video.
	 */
	Video.prototype.fetch = function(target, item) {

		var type = target.attr('data-vimeo-id') ? 'vimeo' : 'youtube',
			id = target.attr('data-vimeo-id') || target.attr('data-youtube-id'),
			width = target.attr('data-width') || this._core.settings.videoWidth,
			height = target.attr('data-height') || this._core.settings.videoHeight,
			url = target.attr('href');

		if (url) {
			id = url.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

			if (id[3].indexOf('youtu') > -1) {
				type = 'youtube';
			} else if (id[3].indexOf('vimeo') > -1) {
				type = 'vimeo';
			} else {
				throw new Error('Video URL not supported.');
			}
			id = id[6];
		} else {
			throw new Error('Missing video URL.');
		}

		this._videos[url] = {
			type: type,
			id: id,
			width: width,
			height: height
		};

		item.attr('data-video', url);

		this.thumbnail(target, this._videos[url]);
	};

	/**
	 * Creates video thumbnail.
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {Object} info - The video info object.
	 * @see `fetch`
	 */
	Video.prototype.thumbnail = function(target, video) {

		var tnLink,
			icon,
			path,
			dimensions = video.width && video.height ? 'style="width:' + video.width + 'px;height:' + video.height + 'px;"' : '',
			customTn = target.find('img'),
			srcType = 'src',
			lazyClass = '',
			settings = this._core.settings,
			create = function(path) {
				icon = '<div class="owl-video-play-icon"></div>';

				if (settings.lazyLoad) {
					tnLink = '<div class="owl-video-tn ' + lazyClass + '" ' + srcType + '="' + path + '"></div>';
				} else {
					tnLink = '<div class="owl-video-tn" style="opacity:1;background-image:url(' + path + ')"></div>';
				}
				target.after(tnLink);
				target.after(icon);
			};

		// wrap video content into owl-video-wrapper div
		target.wrap('<div class="owl-video-wrapper"' + dimensions + '></div>');

		if (this._core.settings.lazyLoad) {
			srcType = 'data-src';
			lazyClass = 'owl-lazy';
		}

		// custom thumbnail
		if (customTn.length) {
			create(customTn.attr(srcType));
			customTn.remove();
			return false;
		}

		if (video.type === 'youtube') {
			path = "http://img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
			create(path);
		} else if (video.type === 'vimeo') {
			$.ajax({
				type: 'GET',
				url: 'http://vimeo.com/api/v2/video/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data[0].thumbnail_large;
					create(path);
				}
			});
		}
	};

	/**
	 * Stops the current video.
	 * @public
	 */
	Video.prototype.stop = function() {
		this._core.trigger('stop', null, 'video');
		this._playing.find('.owl-video-frame').remove();
		this._playing.removeClass('owl-video-playing');
		this._playing = null;
	};

	/**
	 * Starts the current video.
	 * @public
	 * @param {Event} ev - The event arguments.
	 */
	Video.prototype.play = function(ev) {
		this._core.trigger('play', null, 'video');

		if (this._playing) {
			this.stop();
		}

		var target = $(ev.target || ev.srcElement),
			item = target.closest('.' + this._core.settings.itemClass),
			video = this._videos[item.attr('data-video')],
			width = video.width || '100%',
			height = video.height || this._core.$stage.height(),
			html, wrap;

		if (video.type === 'youtube') {
			html = '<iframe width="' + width + '" height="' + height + '" src="http://www.youtube.com/embed/'
				+ video.id + '?autoplay=1&v=' + video.id + '" frameborder="0" allowfullscreen></iframe>';
		} else if (video.type === 'vimeo') {
			html = '<iframe src="http://player.vimeo.com/video/' + video.id + '?autoplay=1" width="' + width
				+ '" height="' + height
				+ '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
		}

		item.addClass('owl-video-playing');
		this._playing = item;

		wrap = $('<div style="height:' + height + 'px; width:' + width + 'px" class="owl-video-frame">'
			+ html + '</div>');
		target.after(wrap);
	};

	/**
	 * Checks whether an video is currently in full screen mode or not.
	 * @todo Bad style because looks like a readonly method but changes members.
	 * @protected
	 * @returns {Boolean}
	 */
	Video.prototype.isInFullScreen = function() {

		// if Vimeo Fullscreen mode
		var element = document.fullscreenElement || document.mozFullScreenElement
			|| document.webkitFullscreenElement;

		if (element && $(element).parent().hasClass('owl-video-frame')) {
			this._core.speed(0);
			this._fullscreen = true;
		}

		if (element && this._fullscreen && this._playing) {
			return false;
		}

		// comming back from fullscreen
		if (this._fullscreen) {
			this._fullscreen = false;
			return false;
		}

		// check full screen mode and window orientation
		if (this._playing) {
			if (this._core.state.orientation !== window.orientation) {
				this._core.state.orientation = window.orientation;
				return false;
			}
		}

		return true;
	};

	/**
	 * Destroys the plugin.
	 */
	Video.prototype.destroy = function() {
		var handler, property;

		this._core.$element.off('click.owl.video');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Video = Video;

})(window.Zepto || window.jQuery, window, document);

/**
 * Animate Plugin
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the animate plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Animate = function(scope) {
		this.core = scope;
		this.core.options = $.extend({}, Animate.Defaults, this.core.options);
		this.swapping = true;
		this.previous = undefined;
		this.next = undefined;

		this.handlers = {
			'change.owl.carousel': $.proxy(function(e) {
				if (e.property.name == 'position') {
					this.previous = this.core.current();
					this.next = e.property.value;
				}
			}, this),
			'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
				this.swapping = e.type == 'translated';
			}, this),
			'translate.owl.carousel': $.proxy(function(e) {
				if (this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
					this.swap();
				}
			}, this)
		};

		this.core.$element.on(this.handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Animate.Defaults = {
		animateOut: false,
		animateIn: false
	};

	/**
	 * Toggles the animation classes whenever an translations starts.
	 * @protected
	 * @returns {Boolean|undefined}
	 */
	Animate.prototype.swap = function() {

		if (this.core.settings.items !== 1 || !this.core.support3d) {
			return;
		}

		this.core.speed(0);

		var left,
			clear = $.proxy(this.clear, this),
			previous = this.core.$stage.children().eq(this.previous),
			next = this.core.$stage.children().eq(this.next),
			incoming = this.core.settings.animateIn,
			outgoing = this.core.settings.animateOut;

		if (this.core.current() === this.previous) {
			return;
		}

		if (outgoing) {
			left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
			previous.css( { 'left': left + 'px' } )
				.addClass('animated owl-animated-out')
				.addClass(outgoing)
				.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', clear);
		}

		if (incoming) {
			next.addClass('animated owl-animated-in')
				.addClass(incoming)
				.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', clear);
		}
	};

	Animate.prototype.clear = function(e) {
		$(e.target).css( { 'left': '' } )
			.removeClass('animated owl-animated-out owl-animated-in')
			.removeClass(this.core.settings.animateIn)
			.removeClass(this.core.settings.animateOut);
		this.core.transitionEnd();
	}

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Animate.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this.core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Animate = Animate;

})(window.Zepto || window.jQuery, window, document);

/**
 * Autoplay Plugin
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the autoplay plugin.
	 * @class The Autoplay Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Autoplay = function(scope) {
		this.core = scope;
		this.core.options = $.extend({}, Autoplay.Defaults, this.core.options);

		this.handlers = {
			'translated.owl.carousel refreshed.owl.carousel': $.proxy(function() {
				this.autoplay();
			}, this),
			'play.owl.autoplay': $.proxy(function(e, t, s) {
				this.play(t, s);
			}, this),
			'stop.owl.autoplay': $.proxy(function() {
				this.stop();
			}, this),
			'mouseover.owl.autoplay': $.proxy(function() {
				if (this.core.settings.autoplayHoverPause) {
					this.pause();
				}
			}, this),
			'mouseleave.owl.autoplay': $.proxy(function() {
				if (this.core.settings.autoplayHoverPause) {
					this.autoplay();
				}
			}, this)
		};

		this.core.$element.on(this.handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Autoplay.Defaults = {
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		autoplaySpeed: false
	};

	/**
	 * @protected
	 * @todo Must be documented.
	 */
	Autoplay.prototype.autoplay = function() {
		if (this.core.settings.autoplay && !this.core.state.videoPlay) {
			window.clearInterval(this.interval);

			this.interval = window.setInterval($.proxy(function() {
				this.play();
			}, this), this.core.settings.autoplayTimeout);
		} else {
			window.clearInterval(this.interval);
		}
	};

	/**
	 * Starts the autoplay.
	 * @public
	 * @param {Number} [timeout] - ...
	 * @param {Number} [speed] - ...
	 * @returns {Boolean|undefined} - ...
	 * @todo Must be documented.
	 */
	Autoplay.prototype.play = function(timeout, speed) {
		// if tab is inactive - doesnt work in <IE10
		if (document.hidden === true) {
			return;
		}

		if (this.core.state.isTouch || this.core.state.isScrolling
			|| this.core.state.isSwiping || this.core.state.inMotion) {
			return;
		}

		if (this.core.settings.autoplay === false) {
			window.clearInterval(this.interval);
			return;
		}

		this.core.next(this.core.settings.autoplaySpeed);
	};

	/**
	 * Stops the autoplay.
	 * @public
	 */
	Autoplay.prototype.stop = function() {
		window.clearInterval(this.interval);
	};

	/**
	 * Pauses the autoplay.
	 * @public
	 */
	Autoplay.prototype.pause = function() {
		window.clearInterval(this.interval);
	};

	/**
	 * Destroys the plugin.
	 */
	Autoplay.prototype.destroy = function() {
		var handler, property;

		window.clearInterval(this.interval);

		for (handler in this.handlers) {
			this.core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;

})(window.Zepto || window.jQuery, window, document);

/**
 * Navigation Plugin
 * @version 2.0.0
 * @author Artus Kolanowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the navigation plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} carousel - The Owl Carousel.
	 */
	var Navigation = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Indicates whether the plugin is initialized or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._initialized = false;

		/**
		 * The current paging indexes.
		 * @protected
		 * @type {Array}
		 */
		this._pages = [];

		/**
		 * All DOM elements of the user interface.
		 * @protected
		 * @type {Object}
		 */
		this._controls = {};

		/**
		 * Markup for an indicator.
		 * @protected
		 * @type {Array.<String>}
		 */
		this._templates = [];

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * Overridden methods of the carousel.
		 * @protected
		 * @type {Object}
		 */
		this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		};

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'prepared.owl.carousel': $.proxy(function(e) {
				if (this._core.settings.dotsData) {
					this._templates.push($(e.content).find('[data-dot]').andSelf('[data-dot]').attr('data-dot'));
				}
			}, this),
			'add.owl.carousel': $.proxy(function(e) {
				if (this._core.settings.dotsData) {
					this._templates.splice(e.position, 0, $(e.content).find('[data-dot]').andSelf('[data-dot]').attr('data-dot'));
				}
			}, this),
			'remove.owl.carousel prepared.owl.carousel': $.proxy(function(e) {
				if (this._core.settings.dotsData) {
					this._templates.splice(e.position, 1);
				}
			}, this),
			'change.owl.carousel': $.proxy(function(e) {
				if (e.property.name == 'position') {
					if (!this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
						var current = this._core.current(),
							maximum = this._core.maximum(),
							minimum = this._core.minimum();
						e.data = e.property.value > maximum
							? current >= maximum ? minimum : maximum
							: e.property.value < minimum ? maximum : e.property.value;
					}
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.property.name == 'position') {
					this.draw();
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function() {
				if (!this._initialized) {
					this.initialize();
					this._initialized = true;
				}
				this._core.trigger('refresh', null, 'navigation');
				this.update();
				this.draw();
				this._core.trigger('refreshed', null, 'navigation');
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Navigation.Defaults, this._core.options);

		// register event handlers
		this.$element.on(this._handlers);
	}

	/**
	 * Default options.
	 * @public
	 * @todo Rename `slideBy` to `navBy`
	 */
	Navigation.Defaults = {
		nav: false,
		navRewind: true,
		navText: [ '<span></span>', '<span></span>' ],
		navSpeed: false,
		navElement: 'div',
		navContainer: false,
		navContainerClass: 'owl-nav',
		navClass: [ 'owl-prev', 'owl-next' ],
		slideBy: 1,
		dotClass: 'owl-dot',
		dotsClass: 'owl-dots',
		dots: true,
		dotsEach: false,
		dotData: false,
		dotsSpeed: false,
		dotsContainer: false,
		controlsClass: 'owl-controls'
	}

	/**
	 * Initializes the layout of the plugin and extends the carousel.
	 * @protected
	 */
	Navigation.prototype.initialize = function() {
		var $container, override,
			options = this._core.settings;

		// create the indicator template
		if (!options.dotsData) {
			this._templates = [ $('<div>')
				.addClass(options.dotClass)
				.append($('<span>'))
				.prop('outerHTML') ];
		}

		// create controls container if needed
		if (!options.navContainer || !options.dotsContainer) {
			this._controls.$container = $('<div>')
				.addClass(options.controlsClass)
				.appendTo(this.$element);
		}

		// create DOM structure for absolute navigation
		this._controls.$indicators = options.dotsContainer ? $(options.dotsContainer)
			: $('<div>').hide().addClass(options.dotsClass).appendTo(this._controls.$container);

		this._controls.$indicators.on('click', 'div', $.proxy(function(e) {
			var index = $(e.target).parent().is(this._controls.$indicators)
				? $(e.target).index() : $(e.target).parent().index();

			e.preventDefault();

			this.to(index, options.dotsSpeed);
		}, this));

		// create DOM structure for relative navigation
		$container = options.navContainer ? $(options.navContainer)
			: $('<div>').addClass(options.navContainerClass).prependTo(this._controls.$container);

		this._controls.$next = $('<' + options.navElement + '>');
		this._controls.$previous = this._controls.$next.clone();

		this._controls.$previous
			.addClass(options.navClass[0])
			.html(options.navText[0])
			.hide()
			.prependTo($container)
			.on('click', $.proxy(function(e) {
				this.prev(options.navSpeed);
			}, this));
		this._controls.$next
			.addClass(options.navClass[1])
			.html(options.navText[1])
			.hide()
			.appendTo($container)
			.on('click', $.proxy(function(e) {
				this.next(options.navSpeed);
			}, this));

		// override public methods of the carousel
		for (override in this._overrides) {
			this._core[override] = $.proxy(this[override], this);
		}
	}

	/**
	 * Destroys the plugin.
	 * @protected
	 */
	Navigation.prototype.destroy = function() {
		var handler, control, property, override;

		for (handler in this._handlers) {
			this.$element.off(handler, this._handlers[handler]);
		}
		for (control in this._controls) {
			this._controls[control].remove();
		}
		for (override in this.overides) {
			this._core[override] = this._overrides[override];
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	}

	/**
	 * Updates the internal state.
	 * @protected
	 */
	Navigation.prototype.update = function() {
		var i, j, k,
			options = this._core.settings,
			lower = this._core.clones().length / 2,
			upper = lower + this._core.items().length,
			size = options.center || options.autoWidth || options.dotData
				? 1 : options.dotsEach || options.items;

		if (options.slideBy !== 'page') {
			options.slideBy = Math.min(options.slideBy, options.items);
		}

		if (options.dots || options.slideBy == 'page') {
			this._pages = [];

			for (i = lower, j = 0, k = 0; i < upper; i++) {
				if (j >= size || j === 0) {
					this._pages.push({
						start: i - lower,
						end: i - lower + size - 1
					});
					j = 0, ++k;
				}
				j += this._core.mergers(this._core.relative(i));
			}
		}
	}

	/**
	 * Draws the user interface.
	 * @todo The option `dotData` wont work.
	 * @protected
	 */
	Navigation.prototype.draw = function() {
		var difference, i, html = '',
			options = this._core.settings,
			$items = this._core.$stage.children(),
			index = this._core.relative(this._core.current());

		if (options.nav && !options.loop && !options.navRewind) {
			this._controls.$previous.toggleClass('disabled', index <= 0);
			this._controls.$next.toggleClass('disabled', index >= this._core.maximum());
		}

		this._controls.$previous.toggle(options.nav);
		this._controls.$next.toggle(options.nav);

		if (options.dots) {
			difference = this._pages.length - this._controls.$indicators.children().length;

			if (options.dotData && difference !== 0) {
				for (i = 0; i < this._controls.$indicators.children().length; i++) {
					html += this._templates[this._core.relative(i)];
				}
				this._controls.$indicators.html(html);
			} else if (difference > 0) {
				html = new Array(difference + 1).join(this._templates[0]);
				this._controls.$indicators.append(html);
			} else if (difference < 0) {
				this._controls.$indicators.children().slice(difference).remove();
			}

			this._controls.$indicators.find('.active').removeClass('active');
			this._controls.$indicators.children().eq($.inArray(this.current(), this._pages)).addClass('active');
		}

		this._controls.$indicators.toggle(options.dots);
	}

	/**
	 * Extends event data.
	 * @protected
	 * @param {Event} event - The event object which gets thrown.
	 */
	Navigation.prototype.onTrigger = function(event) {
		var settings = this._core.settings;

		event.page = {
			index: $.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: settings && (settings.center || settings.autoWidth || settings.dotData
				? 1 : settings.dotsEach || settings.items)
		};
	}

	/**
	 * Gets the current page position of the carousel.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.current = function() {
		var index = this._core.relative(this._core.current());
		return $.grep(this._pages, function(o) {
			return o.start <= index && o.end >= index;
		}).pop();
	}

	/**
	 * Gets the current succesor/predecessor position.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.getPosition = function(successor) {
		var position, length,
			options = this._core.settings;

		if (options.slideBy == 'page') {
			position = $.inArray(this.current(), this._pages);
			length = this._pages.length;
			successor ? ++position : --position;
			position = this._pages[((position % length) + length) % length].start;
		} else {
			position = this._core.relative(this._core.current());
			length = this._core.items().length;
			successor ? position += options.slideBy : position -= options.slideBy;
		}
		return position;
	}

	/**
	 * Slides to the next item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.next = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
	}

	/**
	 * Slides to the previous item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.prev = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
	}

	/**
	 * Slides to the specified item or page.
	 * @public
	 * @param {Number} position - The position of the item or page.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
	 */
	Navigation.prototype.to = function(position, speed, standard) {
		var length;

		if (!standard) {
			length = this._pages.length;
			$.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
		} else {
			$.proxy(this._overrides.to, this._core)(position, speed);
		}
	}

	$.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;

})(window.Zepto || window.jQuery, window, document);

/**
 * Hash Plugin
 * @version 2.0.0
 * @author Artus Kolanowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the hash plugin.
	 * @class The Hash Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Hash = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Hash table for the hashes.
		 * @protected
		 * @type {Object}
		 */
		this._hashes = {};

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function() {
				if (this._core.settings.startPosition == 'URLHash') {
					$(window).trigger('hashchange.owl.navigation');
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				var hash = $(e.content).find('[data-hash]').andSelf('[data-hash]').attr('data-hash');
				this._hashes[hash] = e.content;
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Hash.Defaults, this._core.options);

		// register the event handlers
		this.$element.on(this._handlers);

		// register event listener for hash navigation
		$(window).on('hashchange.owl.navigation', $.proxy(function() {
			var hash = window.location.hash.substring(1),
				items = this._core.$stage.children(),
				position = this._hashes[hash] && items.index(this._hashes[hash]) || 0;

			if (!hash) {
				return false;
			}

			this._core.to(position, false, true);
		}, this));
	}

	/**
	 * Default options.
	 * @public
	 */
	Hash.Defaults = {
		URLhashListener: false
	}

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Hash.prototype.destroy = function() {
		var handler, property;

		$(window).off('hashchange.owl.navigation');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	}

	$.fn.owlCarousel.Constructor.Plugins.Hash = Hash;

})(window.Zepto || window.jQuery, window, document);

/*!
 * Master Slider – Responsive Touch Swipe Slider
 * Copyright © 2016 All Rights Reserved.
 *
 * @author Averta [www.averta.net]
 * @version 2.50.0
 * @date Aug 2016
 */


/* ================== bin-debug/js/pro/tools/base.js =================== */
window.averta = {};

;(function($){

	//"use strict";

	window.package = function(name){
		if(!window[name]) window[name] = {};
	};

	var extend = function(target , object){
		for(var key in object)	target[key] = object[key];
	};

	Function.prototype.extend = function(superclass){
		if(typeof superclass.prototype.constructor === "function"){
			extend(this.prototype , superclass.prototype);
			this.prototype.constructor = this;
		}else{
			this.prototype.extend(superclass);
			this.prototype.constructor = this;
		}
	};

	// Converts JS prefix to CSS prefix
	var trans = {
		'Moz'    : '-moz-',
		'Webkit' : '-webkit-',
		'Khtml'  : '-khtml-' ,
		'O'		 : '-o-',
		'ms'	 : '-ms-',
		'Icab'   : '-icab-'
	};

	window._mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
	window._touch  = 'ontouchstart' in document;
	$(document).ready(function(){
		window._jcsspfx 		= getVendorPrefix();	   // JS CSS VendorPrefix
		window._csspfx 			= trans[window._jcsspfx];  // CSS VendorPrefix
		window._cssanim 		= supportsTransitions();
		window._css3d   		= supports3DTransforms();
		window._css2d   		= supportsTransforms();
	});


	// Thanks to LEA VEROU
	// http://lea.verou.me/2009/02/find-the-vendor-prefix-of-the-current-browser/
	function getVendorPrefix() {

		if('result' in arguments.callee) return arguments.callee.result;

		var regex = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/;

		var someScript = document.getElementsByTagName('script')[0];

		for(var prop in someScript.style){
			if(regex.test(prop)){
				return arguments.callee.result = prop.match(regex)[0];
			}
		}

		if('WebkitOpacity' in someScript.style) return arguments.callee.result = 'Webkit';
		if('KhtmlOpacity' in someScript.style) return arguments.callee.result = 'Khtml';

		return arguments.callee.result = '';
	}


	// Thanks to Steven Benner.
	// http://stevenbenner.com/2010/03/javascript-regex-trick-parse-a-query-string-into-an-object/
	window.parseQueryString = function(url){
		var queryString = {};
		url.replace(
		    new RegExp("([^?=&]+)(=([^&]*))?", "g"),
		    function($0, $1, $2, $3) { queryString[$1] = $3; }
		);

		return queryString;
	};

	function checkStyleValue(prop){
		 var b = document.body || document.documentElement;
	    var s = b.style;
	    var p = prop;
	    if(typeof s[p] == 'string') {return true; }

	    // Tests for vendor specific prop
	    v = ['Moz', 'Webkit', 'Khtml', 'O', 'ms'],
	    p = p.charAt(0).toUpperCase() + p.substr(1);
	    for(var i=0; i<v.length; i++) {
	      if(typeof s[v[i] + p] == 'string') { return true; }
	    }
	    return false;
	}

	function supportsTransitions() {
	   return checkStyleValue('transition');
	}

	function supportsTransforms(){
	   return checkStyleValue('transform');
	}

	function supports3DTransforms(){
		if(!supportsTransforms()) return false;
	    var el = document.createElement('i'),
	    has3d,
	    transforms = {
	        'WebkitTransform':'-webkit-transform',
	        'OTransform':'-o-transform',
	        'MSTransform':'-ms-transform',
	        'msTransform':'-ms-transform',
	        'MozTransform':'-moz-transform',
	        'Transform':'transform',
	        'transform':'transform'
	    };

		el.style.display = 'block';

	    // Add it to the body to get the computed style
	    document.body.insertBefore(el, null);

	    for(var t in transforms){
	        if( el.style[t] !== undefined ){
	            el.style[t] = 'translate3d(1px,1px,1px)';
	            has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
	        }
	    }

	    document.body.removeChild(el);

	    return (has3d != null && has3d.length > 0 && has3d !== "none");
	}

	/**
	 * Provides requestAnimationFrame in a cross browser way.
	 * @author paulirish / http://paulirish.com/
	 */
	var fps60 = 50/3;

	if ( !window.requestAnimationFrame ) {

		window.requestAnimationFrame = ( function() {

			return window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element ) {

				window.setTimeout( callback, fps60 );

			};

		} )();

	}

	if (!window.getComputedStyle) {
	    window.getComputedStyle = function(el, pseudo) {
	        this.el = el;
	        this.getPropertyValue = function(prop) {
	            var re = /(\-([a-z]){1})/g;
	            if (prop == 'float') prop = 'styleFloat';
	            if (re.test(prop)) {
	                prop = prop.replace(re, function () {
	                    return arguments[2].toUpperCase();
	                });
	            }
	            return el.currentStyle[prop] ? el.currentStyle[prop] : null;
	        };
	        return el.currentStyle;
	    };
	}

	// IE8 Array indexOf fix
	if (!Array.prototype.indexOf) {
	  Array.prototype.indexOf = function(elt /*, from*/) {
	    var len = this.length >>> 0;

	    var from = Number(arguments[1]) || 0;
	    from = (from < 0)
	         ? Math.ceil(from)
	         : Math.floor(from);
	    if (from < 0)
	      from += len;

	    for (; from < len; from++)
	    {
	      if (from in this &&
	          this[from] === elt)
	        return from;
	    }
	    return -1;
	  };
	}


	/**
	 * check ie browser
	 * @param  {Number | string}  version
	 * @return {Boolean}
	 */
	window.isMSIE = function ( version ) {
		if ( !$.browser.msie ) {
			return false;
		} else if ( !version ) {
			return true;
		}
		var ieVer = $.browser.version.slice(0 , $.browser.version.indexOf('.'));
		if ( typeof version === 'string' ) {
			if ( version.indexOf('<') !== -1  || version.indexOf('>') !== -1) {
				return eval( ieVer + version );
			} else {
				return eval( version + '==' + ieVer );
			}
		} else {
			return version == ieVer;
		}
	}

	$.removeDataAttrs = function($target, exclude) {
	    var i,
	        attrName,
	        dataAttrsToDelete = [],
	        dataAttrs = $target[0].attributes,
	        dataAttrsLen = dataAttrs.length;

	    exclude = exclude || [];

	    // loop through attributes and make a list of those
	    // that begin with 'data-'
	    for (i=0; i<dataAttrsLen; i++) {
	    	attrName = dataAttrs[i].name;
	        if ( 'data-' === attrName.substring(0,5) && exclude.indexOf(attrName) === -1 ) {
	            // Why don't you just delete the attributes here?
	            // Deleting an attribute changes the indices of the
	            // others wreaking havoc on the loop we are inside
	            // b/c dataAttrs is a NamedNodeMap (not an array or obj)
	            dataAttrsToDelete.push(dataAttrs[i].name);
	        }
	    }
	    // delete each of the attributes we found above
	    // i.e. those that start with "data-"
	    $.each( dataAttrsToDelete, function( index, attrName ) {
	        $target.removeAttr( attrName );
	    })
	};

	if(jQuery){
		$.jqLoadFix = function(){
			if(this.complete){
				var that = this;
				setTimeout(function(){$(that).load();} , 1);
			}
		};

		jQuery.uaMatch = jQuery.uaMatch || function( ua ) {
			ua = ua.toLowerCase();

			var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
				/(webkit)[ \/]([\w.]+)/.exec( ua ) ||
				/(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
				/(msie) ([\w.]+)/.exec( ua ) ||
				ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
				[];

			return {
				browser: match[ 1 ] || "",
				version: match[ 2 ] || "0"
			};
		};

		// Don't clobber any existing jQuery.browser in case it's different
		//if ( !jQuery.browser ) {
			matched = jQuery.uaMatch( navigator.userAgent );
			browser = {};

			if ( matched.browser ) {
				browser[ matched.browser ] = true;
				browser.version = matched.version;
			}

			// Chrome is Webkit, but Webkit is also Safari.
			if ( browser.chrome ) {
				browser.webkit = true;
			} else if ( browser.webkit ) {
				browser.safari = true;
			}

			// hofix for IE11 detection
			var isIE11 = !!navigator.userAgent.match(/Trident\/7\./);
			if (isIE11) {
				browser.msie = "true";
				delete browser.mozilla;
			}

			jQuery.browser = browser;

		//}

		$.fn.preloadImg = function(src , _event){
			this.each(function(){
				var $this = $(this);
				var self  = this;
				var img = new Image();
				img.onload = function(event){
					if(event == null) event = {}; // IE8
					$this.attr('src' , src);
					event.width = img.width;
					event.height = img.height;
					$this.data('width', img.width);
					$this.data('height', img.height);
					setTimeout(function(){_event.call(self , event);},50);
					img = null;
				};
				img.src = src;
			});
			return this;
		};
	}
})(jQuery);

/* ================== bin-debug/js/pro/tools/EventDispatcher.js =================== */
;(function(){

	"use strict";

	averta.EventDispatcher = function(){
		this.listeners = {};
	};

	averta.EventDispatcher.extend = function(_proto){
		var instance = new averta.EventDispatcher();
		for(var key in instance)
			if(key != 'constructor') _proto[key] =  averta.EventDispatcher.prototype[key];
	};

	averta.EventDispatcher.prototype = {

		constructor : averta.EventDispatcher,

		addEventListener : function(event , listener , ref){
			if(!this.listeners[event]) this.listeners[event] = [];
			this.listeners[event].push({listener:listener , ref:ref});

		},

		removeEventListener : function(event , listener , ref){
			if(this.listeners[event]){

				for(var i = 0; i < this.listeners[event].length ; ++i){

					if(listener === this.listeners[event][i].listener && ref === this.listeners[event][i].ref){
						this.listeners[event].splice(i--,1);
					}
				}

				if (this.listeners[event].length === 0){
					this.listeners[event] = null;
				}
			}
		},

		dispatchEvent : function (event) {
			event.target = this;
			if(this.listeners[event.type]){
				for(var i = 0 , l = this.listeners[event.type].length; i < l ; ++i){
					this.listeners[event.type][i].listener.call(this.listeners[event.type][i].ref , event);
				}
			}
		}
	};

})();

/* ================== bin-debug/js/pro/tools/TouchSwipe.js =================== */
;(function($){

    "use strict";

    var isTouch     = 'ontouchstart' in document,
        isPointer   = window.navigator.pointerEnabled,
        isMSPoiner  = !isPointer && window.navigator.msPointerEnabled,
        usePointer  = isPointer || isMSPoiner,
    // Events
        ev_start  = (isPointer ? 'pointerdown ' : '' ) + (isMSPoiner ? 'MSPointerDown ' : '' ) + (isTouch ? 'touchstart ' : '' ) + 'mousedown',
        ev_move   = (isPointer ? 'pointermove ' : '' ) + (isMSPoiner ? 'MSPointerMove ' : '' ) + (isTouch ? 'touchmove '  : '' ) + 'mousemove',
        ev_end    = (isPointer ? 'pointerup '   : '' ) + (isMSPoiner ? 'MSPointerUp '   : '' ) + (isTouch ? 'touchend '   : '' ) + 'mouseup',
        ev_cancel = (isPointer ? 'pointercancel '   : '' ) + (isMSPoiner ? 'MSPointerCancel ': '' ) + 'touchcancel';


    averta.TouchSwipe = function($element){
        this.$element = $element;
        this.enabled = true;

        $element.bind(ev_start  , {target: this} , this.__touchStart);

        $element[0].swipe = this;

        this.onSwipe    = null;
        this.swipeType  = 'horizontal';
        this.noSwipeSelector = 'input, textarea, button, .no-swipe, .ms-no-swipe';

        this.lastStatus = {};

    };

    var p = averta.TouchSwipe.prototype;

    /*-------------- METHODS --------------*/

    p.getDirection = function(new_x , new_y){
        switch(this.swipeType){
            case 'horizontal':
                return new_x <= this.start_x ? 'left' : 'right';
            break;
            case 'vertical':
                return new_y <= this.start_y ? 'up' : 'down';
            break;
            case 'all':
                if(Math.abs(new_x - this.start_x) > Math.abs(new_y - this.start_y))
                    return new_x <= this.start_x ? 'left' : 'right';
                else
                    return new_y <= this.start_y ? 'up' : 'down';
            break;
        }
    };

    p.priventDefultEvent = function(new_x , new_y){
        //if(this.priventEvt != null) return this.priventEvt;
        var dx = Math.abs(new_x - this.start_x);
        var dy = Math.abs(new_y - this.start_y);

        var horiz =  dx > dy;

        return (this.swipeType === 'horizontal' && horiz) ||
               (this.swipeType === 'vertical' && !horiz);

        //return this.priventEvt;
    };

    p.createStatusObject = function(evt){
        var status_data = {} , temp_x , temp_y;

        temp_x = this.lastStatus.distanceX || 0;
        temp_y = this.lastStatus.distanceY || 0;

        status_data.distanceX = evt.pageX - this.start_x;
        status_data.distanceY = evt.pageY - this.start_y;
        status_data.moveX = status_data.distanceX - temp_x;
        status_data.moveY = status_data.distanceY - temp_y;

        status_data.distance  = parseInt( Math.sqrt(Math.pow(status_data.distanceX , 2) + Math.pow(status_data.distanceY , 2)) );

        status_data.duration  = new Date().getTime() - this.start_time;
        status_data.direction = this.getDirection(evt.pageX , evt.pageY);

        return status_data;
    };


    p.__reset = function(event , jqevt){
        this.reset = false;
        this.lastStatus = {};
        this.start_time = new Date().getTime();

        var point = this.__getPoint( event, jqevt );
        this.start_x = point.pageX;
        this.start_y = point.pageY;
    };

    p.__touchStart = function(event){

        var swipe = event.data.target;
        var jqevt = event;
        if(!swipe.enabled) return;

        if ( $(event.target).closest(swipe.noSwipeSelector, swipe.$element).length > 0 ) {
            return;
        }

        event = event.originalEvent;

        if( usePointer ) {
            $(this).css('-ms-touch-action', swipe.swipeType === 'horizontal' ? 'pan-y' : 'pan-x');
        }

        if(!swipe.onSwipe) {
            $.error('Swipe listener is undefined');
            return;
        }

        // don't catch the touch start again, also don't go further if the delay between touchstart and mousedown is small
        // if ( swipe.touchStarted ) {
        if ( swipe.touchStarted || isTouch && swipe.start_time && event.type === 'mousedown' &&  new Date().getTime() - swipe.start_time < 600 ) {
            return;
        }

        var point = swipe.__getPoint( event, jqevt );
        swipe.start_x = point.pageX;
        swipe.start_y = point.pageY;

        swipe.start_time = new Date().getTime();

        $(document).bind(ev_end    , {target: swipe} , swipe.__touchEnd).
                    bind(ev_move   , {target: swipe} , swipe.__touchMove).
                    bind(ev_cancel , {target: swipe} , swipe.__touchCancel);

        var status = swipe.createStatusObject(point);
        status.phase = 'start';

        swipe.onSwipe.call(null , status);

        if(!isTouch)
            jqevt.preventDefault();

        swipe.lastStatus = status;
        swipe.touchStarted = true;
    };

    p.__touchMove = function(event){
        var swipe = event.data.target;
        var jqevt = event;
        event = event.originalEvent;

        if(!swipe.touchStarted) return;

        clearTimeout(swipe.timo);
        swipe.timo = setTimeout(function(){swipe.__reset(event , jqevt);} , 60);

        var point = swipe.__getPoint( event, jqevt );

        var status = swipe.createStatusObject(point);

        if(swipe.priventDefultEvent(point.pageX , point.pageY))
            jqevt.preventDefault();

        status.phase = 'move';

        //if(swipe.lastStatus.direction !== status.direction) swipe.__reset(event , jqevt);

        swipe.lastStatus = status;

        swipe.onSwipe.call(null , status);
    };

    p.__touchEnd = function(event){

        var swipe = event.data.target;
        var jqevt = event;
        event = event.originalEvent;

        clearTimeout(swipe.timo);

        var status = swipe.lastStatus;

        if(!isTouch)
            jqevt.preventDefault();

        status.phase = 'end';

        swipe.touchStarted = false;
        swipe.priventEvt   = null;

        $(document).unbind(ev_end     , swipe.__touchEnd).
                    unbind(ev_move    , swipe.__touchMove).
                    unbind(ev_cancel  , swipe.__touchCancel);

        status.speed = status.distance / status.duration;

        swipe.onSwipe.call(null , status);

    };

    p.__touchCancel = function(event){
        var swipe = event.data.target;
        swipe.__touchEnd(event);
    };

    p.__getPoint = function( event, jqEvent ) {
        if ( isTouch && event.type.indexOf('mouse') === -1 ) {
            return event.touches[0];
        } else if ( usePointer ) {
            return event;
        } else {
            return jqEvent;
        }
    };

    p.enable = function(){
        if(this.enabled) return;
        this.enabled = true;
    };

    p.disable = function(){
        if(!this.enabled) return;
        this.enabled = false;
    };

})(jQuery);

/* ================== bin-debug/js/pro/tools/Timer.js =================== */
/**
 * 	Ticker Class
 * 	Author: Averta Ltd
 */

;(function(){
	"use strict";

	averta.Ticker = function(){};

	var st = averta.Ticker,
		list = [],
		len = 0,
		__stopped = true;

	st.add = function (listener , ref){
		list.push([listener , ref]);

		if(list.length === 1) st.start();
		len = list.length;
		return len;
	};

	st.remove = function (listener , ref) {
		for(var i = 0 , l = list.length ; i<l ; ++i){
			if(list[i] && list[i][0] === listener && list[i][1] === ref){
				list.splice(i , 1);
			}
		}

		len = list.length;

		if( len === 0 ){
			st.stop();
		}
	};

	st.start = function (){
		if(!__stopped) return;
		__stopped = false;
		__tick();
	};

	st.stop = function (){
		__stopped = true;
	};

	var __tick = function () {
		if(st.__stopped) return;
		var item;
		for(var i = 0; i!==len; i++){
			item = list[i];
			item[0].call(item[1]);
		}

		requestAnimationFrame(__tick);
	};

})();

/**
 * 	Timer Class
 * 	Author: Averta Ltd
 */
;(function(){
	"use strict";

	if(!Date.now){
		Date.now = function(){
			return new Date().getTime();
		};
	}

	averta.Timer = function(delay , autoStart) {
		this.delay = delay;
		this.currentCount = 0;
		this.paused = false;
		this.onTimer = null;
		this.refrence = null;

		if(autoStart) this.start();

	};

	averta.Timer.prototype = {

		constructor : averta.Timer,

		start : function(){
			this.paused = false;
			this.lastTime = Date.now();
			averta.Ticker.add(this.update , this);
		},

		stop : function(){
			this.paused = true;
			averta.Ticker.remove(this.update , this);
		},

		reset : function(){
			this.currentCount = 0;
			this.paused = true;
			this.lastTime = Date.now();
		},

		update : function(){
			if(this.paused || Date.now() - this.lastTime < this.delay) return;
			this.currentCount ++;
			this.lastTime = Date.now();
			if(this.onTimer)
				this.onTimer.call(this.refrence , this.getTime());

		} ,

		getTime : function(){
			return this.delay * this.currentCount;
		}

	};
})();

/* ================== bin-debug/js/pro/tools/CSSTweener.js =================== */
;(function(){

	"use strict";

	var evt = null;

	window.CSSTween = function(element , duration , delay , ease){

		this.$element 	= element;
		this.duration 	= duration  || 1000;
		this.delay 		= delay 	|| 0;
		this.ease 		= ease 		|| 'linear';

		/*if(!evt){
			if(window._jcsspfx === 'O')
				evt = 'otransitionend';
			else if(window._jcsspfx == 'Webkit')
				evt = 'webkitTransitionEnd';
			else
				evt = 'transitionend' ;
		}*/

	};

	var p = CSSTween.prototype;

	/*-------------- METHODS --------------*/

	p.to = function(callback , target){
		this.to_cb 			= callback;
		this.to_cb_target 	= target;

		return this;
	};

	p.from = function(callback , target ){
		this.fr_cb 			= callback;
		this.fr_cb_target 	= target;

		return this;
	};

	p.onComplete = function(callback ,target){
		this.oc_fb 			= callback;
		this.oc_fb_target 	= target;

		return this;
	};

	p.chain = function(csstween){
		this.chained_tween = csstween;
		return this;
	};

	p.reset = function(){
		//element.removeEventListener(evt , this.onTransComplete , true);
		clearTimeout(this.start_to);
		clearTimeout(this.end_to);
	};

	p.start = function(){
		var element = this.$element[0];

		clearTimeout(this.start_to);
		clearTimeout(this.end_to);

		this.fresh = true;

		if(this.fr_cb){
			element.style[window._jcsspfx + 'TransitionDuration'] = '0ms';
			this.fr_cb.call(this.fr_cb_target);
		}

		var that = this;

		this.onTransComplete = function(event){

			if(!that.fresh) return;

			//that.$element[0].removeEventListener(evt , this.onTransComplete, true);
			//event.stopPropagation();


			that.reset();

			element.style[window._jcsspfx + 'TransitionDuration'] = '';
			element.style[window._jcsspfx + 'TransitionProperty'] = '';
			element.style[window._jcsspfx + 'TransitionTimingFunction'] = '';
			element.style[window._jcsspfx + 'TransitionDelay'] = '';

			that.fresh = false;
			if(that.chained_tween) that.chained_tween.start();
			if(that.oc_fb)	that.oc_fb.call(that.oc_fb_target);

		};

		this.start_to = setTimeout(function(){
			if ( !that.$element ) return;
			element.style[window._jcsspfx + 'TransitionDuration'] = that.duration + 'ms';
			element.style[window._jcsspfx + 'TransitionProperty'] = that.transProperty || 'all';

			if(that.delay > 0)	element.style[window._jcsspfx + 'TransitionDelay'] = that.delay + 'ms';
			else				element.style[window._jcsspfx + 'TransitionDelay'] = '';

			element.style[window._jcsspfx + 'TransitionTimingFunction'] = that.ease;

			if(that.to_cb)	that.to_cb.call(that.to_cb_target);

			//that.$element[0].addEventListener(evt , that.onTransComplete , true );

			that.end_to = setTimeout(function(){that.onTransComplete();} , that.duration + (that.delay || 0));
		} , 1);

		return this;
	};

})();

/**
 *	Cross Tween Class
 */
;(function(){

	"use strict";

	var _cssanim = null;
	window.CTween = {};

	function transPos(element, properties){
		if(properties.x !== undefined || properties.y !== undefined){
			if(_cssanim){
				var trans = window._jcsspfx+"Transform";
				if(properties.x !== undefined){
					properties[trans] = (properties[trans] || '') + ' translateX('+properties.x+'px)';
					delete properties.x;
				}

				if(properties.y !== undefined){
					properties[trans] = (properties[trans] || '') + ' translateY('+properties.y+'px)';
					delete properties.y;
				}
			}else{
				if(properties.x !== undefined){
					var posx = element.css('right') !== 'auto' ? 'right' : 'left';
					//if(!element[0].bx) element[0].bx = parseInt(element.css(posx));
					properties[posx] = /*element[0].bx + */properties.x + 'px';
					delete properties.x;
				}

				if(properties.y !== undefined){
					var posy = element.css('bottom') !== 'auto' ? 'bottom' : 'top';
					//if(!element[0].by) element[0].by = parseInt(element.css(posy));
					properties[posy] = /*element[0].by + */properties.y + 'px';
					delete properties.y;
				}
			}
		}
		return properties;
	}

	CTween.setPos = function(element , pos){
		element.css(transPos(element , pos));
	};

	CTween.animate = function(element , duration , properties , options){
		if(_cssanim == null) _cssanim = window._cssanim;

		options = options || {};

		transPos(element , properties);

		if(_cssanim){
			var tween = new CSSTween(element , duration , options.delay , EaseDic[options.ease]);
			if ( options.transProperty ) {
				tween.transProperty = options.transProperty;
			}
			tween.to(function(){ element.css(properties);});
			if(options.complete) tween.onComplete(options.complete , options.target);
			tween.start();
			tween.stop = tween.reset;
			return tween;
		}

		var onCl;

		if(options.delay) element.delay(options.delay);
		if(options.complete)
			onCl = function(){
				options.complete.call(options.target);
			};

		element.stop(true).animate(properties , duration , options.ease || 'linear' , onCl);

		return element;
	};

	CTween.fadeOut = function(target , duration , remove) {
		var options = {};
		if(remove === true) {
			options.complete = function(){target.remove();};
		} else if ( remove === 2 ) {
			options.complete = function(){target.css('display', 'none');};
		}

		CTween.animate(target , duration || 1000 , {opacity : 0} , options);
	};

	CTween.fadeIn = function(target , duration, reset){
		if( reset !== false ) {
			target.css('opacity' , 0).css('display', '');
		}

		CTween.animate(target , duration || 1000 , {opacity : 1});
	};

})();

;(function(){

	// Thanks to matthewlein
	// https://github.com/matthewlein/Ceaser

	window.EaseDic = {
		'linear'            : 'linear',
	    'ease'              : 'ease',
	    'easeIn'            : 'ease-in',
	    'easeOut'           : 'ease-out',
	    'easeInOut'         : 'ease-in-out',

	    'easeInCubic'       : 'cubic-bezier(.55,.055,.675,.19)',
	    'easeOutCubic'      : 'cubic-bezier(.215,.61,.355,1)',
	    'easeInOutCubic'    : 'cubic-bezier(.645,.045,.355,1)',
	    'easeInCirc'        : 'cubic-bezier(.6,.04,.98,.335)',
	    'easeOutCirc'       : 'cubic-bezier(.075,.82,.165,1)',
	    'easeInOutCirc'     : 'cubic-bezier(.785,.135,.15,.86)',
	    'easeInExpo'        : 'cubic-bezier(.95,.05,.795,.035)',
	    'easeOutExpo'       : 'cubic-bezier(.19,1,.22,1)',
	    'easeInOutExpo'     : 'cubic-bezier(1,0,0,1)',
	    'easeInQuad'        : 'cubic-bezier(.55,.085,.68,.53)',
	    'easeOutQuad'       : 'cubic-bezier(.25,.46,.45,.94)',
	    'easeInOutQuad'     : 'cubic-bezier(.455,.03,.515,.955)',
	    'easeInQuart'       : 'cubic-bezier(.895,.03,.685,.22)',
	    'easeOutQuart'      : 'cubic-bezier(.165,.84,.44,1)',
	    'easeInOutQuart'    : 'cubic-bezier(.77,0,.175,1)',
	    'easeInQuint'       : 'cubic-bezier(.755,.05,.855,.06)',
	    'easeOutQuint'      : 'cubic-bezier(.23,1,.32,1)',
	    'easeInOutQuint'    : 'cubic-bezier(.86,0,.07,1)',
	    'easeInSine'        : 'cubic-bezier(.47,0,.745,.715)',
	    'easeOutSine'       : 'cubic-bezier(.39,.575,.565,1)',
	    'easeInOutSine'     : 'cubic-bezier(.445,.05,.55,.95)',
	    'easeInBack'        : 'cubic-bezier(.6,-.28,.735,.045)',
	    'easeOutBack'       : 'cubic-bezier(.175, .885,.32,1.275)',
	    'easeInOutBack'     : 'cubic-bezier(.68,-.55,.265,1.55)'
	};
})();

/* ================== bin-debug/js/pro/tools/Aligner.js =================== */
;(function(){

	"use strict";

	window.MSAligner = function(type , $container , $img ){

		this.$container = $container;
		this.$img	    = $img;

		this.type 		= type || 'stretch'; // fill , fit , stretch , tile , center

		this.widthOnly = false;
		this.heightOnly = false;
	};

	var p = MSAligner.prototype;

	/*-------------- METHODS --------------*/

	p.init = function(w , h){

		this.baseWidth = w;
		this.baseHeight = h;
		this.imgRatio = w / h;
		this.imgRatio2 = h / w;

		switch(this.type){
			case 'tile':
				this.$container.css('background-image' , 'url('+ this.$img.attr('src') +')');
				this.$img.remove();
			break;
			case 'center':
				this.$container.css('background-image' , 'url('+ this.$img.attr('src') +')');
				this.$container.css({
					backgroundPosition 	: 'center center',
					backgroundRepeat	: 'no-repeat'
				});
				this.$img.remove();
			break;
			case 'stretch':
				this.$img.css({
					width	: 	'100%',
					height	: 	'100%'
				});
			break;
			case 'fill':
			case 'fit' :
				this.needAlign = true;
				this.align();
			break;
		}

	};

	p.align = function(){
		if(!this.needAlign) return;

		var cont_w = this.$container.width();
		var cont_h = this.$container.height();

		var contRatio = cont_w / cont_h;

		if(this.type == 'fill'){
			if(this.imgRatio < contRatio ){
				this.$img.width(cont_w);
				this.$img.height(cont_w * this.imgRatio2);
			}else{
				this.$img.height(cont_h);
				this.$img.width(cont_h * this.imgRatio);
			}

		}else if(this.type == 'fit'){

			if(this.imgRatio < contRatio){
				this.$img.height(cont_h);
				this.$img.width(cont_h * this.imgRatio);
			}else{
				this.$img.width(cont_w);
				this.$img.height(cont_w * this.imgRatio2);
			}
		}

		this.setMargin();

	};

	p.setMargin = function(){

		var cont_w = this.$container.width();
		var cont_h = this.$container.height();

		this.$img.css('margin-top' , (cont_h - this.$img[0].offsetHeight) / 2 + 'px');
		this.$img.css('margin-left', (cont_w - this.$img[0].offsetWidth ) / 2 + 'px');
	}

})();

/* ================== bin-debug/js/pro/tools/pointer-events-polyfill.js =================== */
/**
 * CSS pointer-events polyfill
 * Adds support for `pointer-events: none;` for browsers not supporting this property
 * Requires jQuery@~1.9
 *
 * @copyright Sebastian Langer 2016
 * @license MIT
 * @author Sebastian Langer <sl@scn.cx>
 */
(function($){
    /**
     * Polyfill main-method
     * @param  {object} userOptions override default options
     */
    var Polyfill = function(userOptions){
        this.options = $.extend({}, Polyfill.defaultOptions, userOptions);

        this.isEnabled = false;

        if(this.options.forcePolyfill || !this.supportsPointerEvents()){
            this.registerEvents();
            this.isEnabled = true;
        }
    };

    Polyfill.defaultOptions = {
        forcePolyfill: false,
        selector: '*',
        listenOn: ['click', 'dblclick', 'mousedown', 'mouseup'],
        pointerEventsNoneClass: null,
        pointerEventsAllClass: null,
        eventNamespace: 'pointer-events-polyfill'
    };

    /**
     * registers events needed for the polyfill to work properly
     */
    Polyfill.prototype.registerEvents = function(){
        $(document).on(this.getEventNames(), this.options.selector, $.proxy(this.onElementClick, this));
    };

    /**
     * get all events as a jquery-compatible event string
     * @return {String} namespaced jquery-events
     */
    Polyfill.prototype.getEventNames = function(){
        var eventNamespace = this.options.eventNamespace ? '.' + this.options.eventNamespace : '';
        return this.options.listenOn.join(eventNamespace + ' ') + eventNamespace;
    };

    /**
     * detects support for css pointer-events
     * stolen from modernizr - https://github.com/Modernizr/Modernizr/blob/1f8af59/feature-detects/css/pointerevents.js
     * @return {boolean} indicates support
     */
    Polyfill.prototype.supportsPointerEvents = function(){
        var style = document.createElement('a').style;
        style.cssText = 'pointer-events:auto';
        return style.pointerEvents === 'auto';
    };

    /**
     * recursively checks parent nodes if they have a pointer-events css-property
     * @param  {jQuery} $el element to test
     * @return {boolean}    indicates click-through-ability of the given element
     */
    Polyfill.prototype.isClickThrough = function($el){
        var elPointerEventsCss = $el.css('pointer-events');
        if($el.length === 0 || elPointerEventsCss === 'all' || $el.is(':root') || $el.hasClass(this.options.pointerEventsAllClass)){
            return false;
        }
        if(elPointerEventsCss === 'none' || $el.hasClass(this.options.pointerEventsNoneClass) || this.isClickThrough($el.parent())){
            return true;
        }
        return false;
    };

    /**
     * proxies click-through to underlying element if necessary
     * @param  {Event} e click-event
     * @return {boolean} preventDefault
     */
    Polyfill.prototype.onElementClick = function(e){
        var $elOrg = $(e.target);

        if(!this.isClickThrough($elOrg)){
            return true;
        }

        // retrieve element below the clicked one
        $elOrg.hide();
        var elBelow = document.elementFromPoint(e.clientX, e.clientY);

        // trigger the original element on the one below
        e.target = elBelow;
        $(elBelow).trigger(e);

        // open links
        if(elBelow.tagName === 'A') {
            // middle click (sometimes the browser blocks it as popup)
            if(e.which === 2) {
                window.open(elBelow.getAttribute('href'), '_blank');
            } else {
                elBelow.click();
            }
        }

        // restore clicked element
        $elOrg.show();

        return false;
    };

    /**
     * destroys the plugin - removes listeners and data
     */
    Polyfill.prototype.destroy = function(){
        $(document).off(this.getEventNames());
        this.isEnabled = false;
    };

    /**
     * make polyfill available globally
     * @param  {object} userOptions override default options
     * @return {Polyfill}           polyfill-object
     */
    window.pointerEventsPolyfill = function(userOptions){
        return new Polyfill(userOptions);
    };
})(jQuery);

/* ================== bin-debug/js/pro/controls/controller.js =================== */
/**
 *  Touch List Control
 * 	version 1.1.2
 *
 * 	Copyright (C) 2014, Averta Ltd. All rights reserved.
 */

;(function(){

	"use strict";

	var _options = {
		bouncing 			: true,
		snapping			: false,
		snapsize			: null,
		friction			: 0.05,
		outFriction			: 0.05,
		outAcceleration		: 0.09,
		minValidDist		: 0.3,
		snappingMinSpeed	: 2,
		paging				: false,
		endless				: false,
		maxSpeed			: 160
	};


	var Controller = function(min , max , options){

		if(max === null || min === null) {
			throw new Error('Max and Min values are required.');
		}

		this.options = options || {};

		for(var key in _options){
			if(!(key in this.options))
				this.options[key] = _options[key];
		}

		this._max_value 	= max;
		this._min_value 	= min;

		this.value 			= min;
		this.end_loc 		= min;

		this.current_snap	= this.getSnapNum(min);

		this.__extrStep 	= 0;
		this.__extraMove 	= 0;

		this.__animID	 	= -1;

	};

	var p = Controller.prototype;

	/*
	---------------------------------------------------
		PUBLIC METHODS
	----------------------------------------------------
	*/


	p.changeTo = function(value , animate , speed , snap_num , dispatch) {
		this.stopped = false;
		this._internalStop();
		value = this._checkLimits(value);
		speed = Math.abs(speed || 0);

		if(this.options.snapping){
			snap_num = snap_num || this.getSnapNum(value);
			if( dispatch !== false )this._callsnapChange(snap_num);
			this.current_snap = snap_num;
		}

		if(animate){
			this.animating = true;

			var self = this,
				active_id = ++self.__animID,
				amplitude = value - self.value,
				timeStep = 0,
				targetPosition = value,
				animFrict = 1 - self.options.friction,
				timeconst = animFrict + (speed - 20)  * animFrict * 1.3 / self.options.maxSpeed;

			var tick = function(){

				if(active_id !== self.__animID) return;

				var dis =  value - self.value;

				if( Math.abs(dis) > self.options.minValidDist && self.animating ){
					window.requestAnimationFrame(tick);
				} else {

					if( self.animating ){
						self.value = value;
						self._callrenderer();
					}

					self.animating = false;

					if( active_id !== self.__animID ){
						self.__animID = -1;
					}

					self._callonComplete('anim');

					return;
				}

				//self.value += dis * timeconst
				self.value = targetPosition - amplitude * Math.exp(-++timeStep * timeconst);

				self._callrenderer();
			};

			tick();

			return;
		}

		this.value = value;
		this._callrenderer();
	};

	p.drag = function(move){

		if(this.start_drag){
			this.drag_start_loc  = this.value;
			this.start_drag = false;
		}

		this.animating 		= false;
		this._deceleration 	= false;

		this.value -= move;

		if ( !this.options.endless && (this.value > this._max_value || this.value < 0)) {
			if (this.options.bouncing) {
				this.__isout = true;
				this.value += move * 0.6;
			} else if (this.value > this._max_value) {
				this.value = this._max_value;
			} else {
				this.value = 0;
			}
		}else if(!this.options.endless && this.options.bouncing){
				this.__isout = false;
		}

		this._callrenderer();

	};

	p.push = function(speed){
		this.stopped = false;
		if(this.options.snapping && Math.abs(speed) <= this.options.snappingMinSpeed){
			this.cancel();
			return;
		}

		this.__speed = speed;
		this.__startSpeed = speed;

		this.end_loc = this._calculateEnd();

		if(this.options.snapping){

			var snap_loc = this.getSnapNum(this.value),
				end_snap = this.getSnapNum(this.end_loc);

			if(this.options.paging){
				snap_loc = this.getSnapNum(this.drag_start_loc);

				this.__isout = false;
				if(speed > 0){
					this.gotoSnap(snap_loc + 1 , true , speed);
				}else{
					this.gotoSnap(snap_loc - 1 , true , speed);
				}
				return;
			}else if(snap_loc === end_snap){
				this.cancel();
				return;
			}

			this._callsnapChange(end_snap);
			this.current_snap = end_snap;

		}

		this.animating = false;

		this.__needsSnap = this.options.endless || (this.end_loc > this._min_value && this.end_loc < this._max_value) ;

		if(this.options.snapping && this.__needsSnap)
			this.__extraMove = this._calculateExtraMove(this.end_loc);


		this._startDecelaration();
	};

	p.bounce = function(speed){
		if(this.animating) return;
		this.stopped = false;
		this.animating = false;

		this.__speed = speed;
		this.__startSpeed = speed;

		this.end_loc = this._calculateEnd();

		//if(this.options.paging){}

		this._startDecelaration();
	};

	p.stop = function(){
		this.stopped = true;
		this._internalStop();
	};

	p.cancel = function(){
		this.start_drag = true; // reset flag for next drag
		if(this.__isout){
			this.__speed = 0.0004;
			this._startDecelaration();
		}else if(this.options.snapping){
			this.gotoSnap(this.getSnapNum(this.value) , true);
		}

	};

	p.renderCallback = function(listener , ref){
		this.__renderHook = {fun:listener , ref:ref};
	};

	p.snappingCallback = function(listener , ref){
		this.__snapHook = {fun:listener , ref:ref};
	};

	p.snapCompleteCallback = function(listener , ref){
		this.__compHook = {fun:listener , ref:ref};
	};

	p.getSnapNum = function(value){
		return Math.floor(( value + this.options.snapsize / 2 ) / this.options.snapsize);
	};

	p.nextSnap = function(){
		this._internalStop();

		var curr_snap = this.getSnapNum(this.value);

		if(!this.options.endless && (curr_snap + 1) * this.options.snapsize > this._max_value){
			this.__speed = 8;
			this.__needsSnap = false;
			this._startDecelaration();
		}else{
			this.gotoSnap(curr_snap + 1 , true);
		}

	};

	p.prevSnap = function(){
		this._internalStop();

		var curr_snap = this.getSnapNum(this.value);

		if(!this.options.endless && (curr_snap - 1) * this.options.snapsize < this._min_value){
			this.__speed = -8;
			this.__needsSnap = false;
			this._startDecelaration();
		}else{
			this.gotoSnap(curr_snap - 1 , true);
		}

	};

	p.gotoSnap = function(snap_num , animate , speed){
		this.changeTo(snap_num * this.options.snapsize , animate , speed , snap_num);
	};

	p.destroy = function(){
		this._internalStop();
		this.__renderHook = null;
		this.__snapHook = null;
		this.__compHook = null;
	};

	/*
	---------------------------------------------------
		PRIVATE METHODS
	----------------------------------------------------
	*/

	p._internalStop = function(){
		this.start_drag = true; // reset flag for next drag
		this.animating = false;
		this._deceleration = false;
		this.__extrStep = 0;
	};

	p._calculateExtraMove = function(value){
		var m = value % this.options.snapsize;
		return m < this.options.snapsize / 2  ? -m : this.options.snapsize - m;
	};

	p._calculateEnd = function(step){
		var temp_speed = this.__speed;
		var temp_value = this.value;
		var i = 0;
		while(Math.abs(temp_speed) > this.options.minValidDist){
			temp_value += temp_speed;
			temp_speed *= this.options.friction;
			i++;
		}
		if(step) return i;
		return temp_value;
	};

	p._checkLimits = function(value){
		if(this.options.endless) 	return value;
		if(value < this._min_value) return this._min_value;
		if(value > this._max_value) return this._max_value;
		return value;
	};

	p._callrenderer = function(){
		if(this.__renderHook) this.__renderHook.fun.call(this.__renderHook.ref , this , this.value);
	};

	p._callsnapChange = function(targetSnap){
		if(!this.__snapHook || targetSnap === this.current_snap) return;
		this.__snapHook.fun.call(this.__snapHook.ref , this , targetSnap , targetSnap - this.current_snap);
	};

	p._callonComplete = function(type){
		if(this.__compHook && !this.stopped){
			this.__compHook.fun.call(this.__compHook.ref , this , this.current_snap , type);
		}

	};

	p._computeDeceleration = function(){

		if(this.options.snapping && this.__needsSnap){
			var xtr_move = (this.__startSpeed - this.__speed) / this.__startSpeed * this.__extraMove;
			this.value += this.__speed + xtr_move - this.__extrStep;
			this.__extrStep = xtr_move;
		}else{
			this.value += this.__speed;
		}

		this.__speed *= this.options.friction; //* 10;

		if(!this.options.endless && !this.options.bouncing){
			if(this.value <= this._min_value){
				this.value = this._min_value;
				this.__speed = 0;
			}else if(this.value >= this._max_value){
				this.value = this._max_value;
				this.__speed = 0;
			}
		}

		this._callrenderer();

		if(!this.options.endless && this.options.bouncing){

			var out_value = 0;

			if(this.value < this._min_value){
				out_value = this._min_value - this.value;
			}else if(this.value > this._max_value){
				out_value = this._max_value - this.value;
			}

			this.__isout =  Math.abs(out_value) >= this.options.minValidDist;

			if(this.__isout){
				if(this.__speed * out_value <= 0){
					this.__speed += out_value * this.options.outFriction;
				}else {
					this.__speed = out_value * this.options.outAcceleration;
				}
			}
		}
	};

	p._startDecelaration = function(){
		if(this._deceleration) return;
		this._deceleration = true;

		var self = this;

		var tick = function (){

			if(!self._deceleration) return;

			self._computeDeceleration();

			if(Math.abs(self.__speed) > self.options.minValidDist || self.__isout){
				window.requestAnimationFrame(tick);
			}else{
				self._deceleration = false;
				self.__isout = false;

				if(self.__needsSnap && self.options.snapping && !self.options.paging){
					self.value = self._checkLimits(self.end_loc + self.__extraMove);
				}else{
					self.value = Math.round(self.value);
				}

				self._callrenderer();
				self._callonComplete('decel');
			}
		};

		tick();
	};

	window.Controller = Controller;

})();

/* ================== bin-debug/js/pro/layers/LayerController.js =================== */
/**
 * Master Slider Layer Controller
 * @author averta
 * @package Master Slider jQuery PRO
 * @since 2.11.1
 */
;(function(window, document, $){

	/**
	 * Layer Controller constructor
	 * @param {MSSlide} slide layer controller's slide.
	 */
	window.MSLayerController = function (slide) {
		this.slide = slide;
		this.slider = slide.slider;
		this.layers = [];
		this.layersCount = 0;
		this.preloadCount = 0;
		this.$layers = $('<div></div>').addClass('ms-slide-layers');
		this.$staticLayers = $('<div></div>').addClass('ms-static-layers');
		this.$fixedLayers = $('<div></div>').addClass('ms-fixed-layers');
		this.$animLayers = $('<div></div>').addClass('ms-anim-layers');

	};

	var p = MSLayerController.prototype;


	/*-----------------------------------------*\
		Public Methods
	\*-----------------------------------------*/

	/**
	 * Adds new layer to the controller and slide
	 * @param {MSLayerElement} layer
	 */
	p.addLayer = function (layer) {
		layer.slide = this.slide;
		layer.controller = this;

		// append layer element to the layers container based on `data-position` attribute.
		switch ( layer.$element.data('position') ) {
			case 'static':
				this.hasStaticLayer = true;
				layer.$element.appendTo(this.$staticLayers);
				break;
			case 'fixed':
				this.hasFixedLayer = true;
				layer.$element.appendTo(this.$fixedLayers);
				break;
			default:
				layer.$element.appendTo(this.$animLayers);
				break;
		}

		layer.create();
		this.layers.push(layer);
		this.layersCount ++;

		// @since 1.7.0
		if( layer.parallax ){
			this.hasParallaxLayer = true;
		}

		if ( layer.needPreload ) {
			this.preloadCount ++;
		}
	};

	/**
	 * add layers over slide
	 * it calls after addLayer
	 */
	p.create = function () {
		this.slide.$element.append(this.$layers);
		this.$layers.append(this.$animLayers);

		if ( this.hasStaticLayer ) {
			this.$layers.append(this.$staticLayers);
		}

		if(this.slider.options.layersMode == 'center'){
			this.$layers.css('max-width' , this.slider.options.width + 'px');

			if ( this.hasFixedLayer ) {
				this.$fixedLayers.css('max-width' , this.slider.options.width + 'px');
			}
		}
	};

	/**
	 * load layers that requires preloading
	 * @param {Function} callback onload callback function
	 */
	p.loadLayers = function (callback) {
		this._onReadyCallback = callback;

		if ( this.preloadCount === 0 ) {
			this._onlayersReady();
			return;
		}

		for(var i = 0 ; i !== this.layersCount; ++i){
			if(this.layers[i].needPreload) {
				this.layers[i].loadImage();
			}
		}
	};

	/**
	 * prepare layers to show over slide, this method will be called via `prepareToSelect` method of slide.
	 */
	p.prepareToShow = function () {
		if ( this.hasParallaxLayer ) {
			this._enableParallaxEffect();
		}

		if ( this.hasFixedLayer ) {
			this.$fixedLayers.prependTo(this.slide.view.$element);
		}
	};

	/**
	 * show layers over slide
	 */
	p.showLayers = function(){
		if ( this.layersHideTween ) {
			this.layersHideTween.stop(true);
		}

		if ( this.fixedLayersHideTween ) {
			this.fixedLayersHideTween.stop(true);
		}

		this._resetLayers();
		this.$animLayers.css('opacity', '').css('display', '');

		if ( this.hasFixedLayer ){
			this.$fixedLayers.css('opacity', '').css('display', '');
		}

		if ( this.ready ) {
			this._initLayers();
			this._locateLayers();
			this._startLayers();
		}
	};

	/**
	 * hideLayers this method will be called via slide class.
	 */
	p.hideLayers = function () {

		if( this.slide.selected || this.slider.options.instantStartLayers ){
			var that = this;
			that.layersHideTween = CTween.animate(this.$animLayers, 500, {opacity: 0}, {
				complete:function(){
					that._resetLayers();
				}
			});

			if ( this.hasFixedLayer ) {
				this.fixedLayersHideTween = CTween.animate(this.$fixedLayers, 500, {opacity: 0}, {
					complete:function(){
						that.$fixedLayers.detach();
					}
				});
			}

			// disables parallax effect
			// @since 1.6.0
			if ( this.hasParallaxLayer ) {
				this._disableParallaxEffect();
			}
		}
	};

	/**
	 * hide layers from slide
	 */
	p.animHideLayers = function(){
		if ( !this.ready ) {
			return;
		}

		for(var i = 0; i !== this.layersCount; ++i){
			this.layers[i].hide();
		}
	};

	/**
	 * calculate new size of layers containers and locate layers
	 * @param {Number} width  slider width
	 * @param {Number} height slider height
	 * @param {Boolean} hard  whether call init layers.
	 */
	p.setSize = function (width, height, hard) {

		if ( this.ready && (this.slide.selected || this.hasStaticLayer) ) {
			if ( hard ) {
				this._initLayers(true);
			}
			this._locateLayers(!this.slide.selected);
		}

		if ( this.slider.options.autoHeight ) {
			this.updateHeight();
		}

		if ( this.slider.options.layersMode == 'center' ) {
			var left = Math.max( 0 ,  (width - this.slider.options.width) / 2 ) + 'px';
			this.$layers[0].style.left = left;
			this.$fixedLayers[0].style.left = left;
		}

	};

	/**
	 * updates layers container height
	 */
	p.updateHeight = function () {
		// var h = this.slide.getHeight() + 'px';
		// this.$layers[0].style.height = h;
		// this.$fixedLayers[0].style.height = h;
	};

	/**
	 * This method will be called by the last layer after loading all of layers.
	 */
	p._onlayersReady = function(){
		this.ready = true;

		if ( this.hasStaticLayer && !this.slide.isSleeping ) {
			this._initLayers(false, true);
		}

		this._onReadyCallback.call(this.slide);
	};

	/**
	 * this method will be called by slide when it starts sleeping
	 */
	p.onSlideSleep = function () {

	};

	/**
	 * this method will be called by slide after waking up
	 */
	p.onSlideWakeup = function () {
		if ( this.hasStaticLayer && this.ready ) {
			this._initLayers(false, true);
		}
	};

    /**
     * get the layer object by the id attribute
     */
    p.getLayerById = function( layerId ) {
        if ( !layerId ) {
            return null;
        }

        for(var i = 0; i < this.layersCount; ++i){
            if ( this.layers[i].id === layerId ) {
                return this.layers[i];
            }
        }

        return null;
    };

	/**
	 * destroy layer controller and stop layer animations
	 */
	p.destroy = function () {
		if ( this.slide.selected && this.hasParallaxLayer ) {
			this._disableParallaxEffect();
		}

		for(var i = 0; i < this.layersCount; ++i){
			this.layers[i].$element.stop(true).remove();
		}

		this.$layers.remove();
		this.$staticLayers.remove();
		this.$fixedLayers.remove();
		this.$animLayers.remove();
	};


	/*-----------------------------------------*\
		Private Methods
	\*-----------------------------------------*/

	/**
	 * start layer effect
	 */
	p._startLayers = function(){
		for(var i = 0; i !== this.layersCount; ++i){
            var layer = this.layers[i];
            if ( !layer.waitForAction ) {
			    layer.start();
            }
		}
	};

	/**
	 * call init method of all layers
	 * @param  {Boolean} force
	 */
	p._initLayers = function(force, onlyStatics){

		if ( this.init && !force || this.slider.init_safemode ) {
			return;
		}

		this.init = onlyStatics !== true;

		var i = 0;
		if ( onlyStatics && !this.staticsInit ) {  // init only static layers
			this.staticsInit = true;
			for ( ;i !== this.layersCount; ++i ) {
				if ( this.layers[i].staticLayer ) {
					this.layers[i].init();
				}
			}
		} else if ( this.staticsInit && !force ) { // statics are already initiated, init dynamics
			for ( ;i !== this.layersCount; ++i ) {
				if ( !this.layers[i].staticLayer ){
					this.layers[i].init();
				}
			}
		} else {	 // init all
			for ( ;i !== this.layersCount; ++i ) {
				this.layers[i].init();
			}
		}
	};

	/**
	 * locate layers over slide
	 */
	p._locateLayers = function (onlyStatics){
		var i = 0;
		if ( onlyStatics ) {
			for ( ;i !== this.layersCount; ++i ) {
				if ( this.layers[i].staticLayer ) {
					this.layers[i].locate();
				}
			}
		} else {
			for ( ;i !== this.layersCount; ++i ) {
				this.layers[i].locate();
			}
		}
	};

	/**
	 * rest layers
	 */
	p._resetLayers = function(){
		this.$animLayers.css('display', 'none').css('opacity',  1);
		for ( var i = 0; i !== this.layersCount; ++i ) {
			this.layers[i].reset();
		}
	};

	/**
	 * moves layers based on x and y
	 * @param  {Number} x
	 * @param  {Number} y
	 * @param  {Boolean} fast whether animate or not
	 */
	p._applyParallax = function(x, y, fast){
		for(var i = 0 ; i !== this.layersCount; ++i){
			if( this.layers[i].parallax != null ){
				this.layers[i].moveParallax(x, y, fast);
			}
		}
	};

	/**
	 * enable parallax moving layers
	 */
	p._enableParallaxEffect = function(){
		if( this.slider.options.parallaxMode === 'swipe' ){
			this.slide.view.addEventListener(MSViewEvents.SCROLL, this._swipeParallaxMove, this);
		} else {
			this.slide.$element.on('mousemove' , {that:this}, this._mouseParallaxMove)
						 .on('mouseleave', {that:this}, this._resetParalax);
			/**
			 * Calculates new position of parallax based on device orintation gamma and beta
			 * @param  {Event} e
			 * @since 1.6.0
			 */
			/*if( window._mobile && window.DeviceOrientationEvent ){

				var that = this;
				this.orientationParallaxMove = function(e){
					var beta = Math.round(e.beta),
						gamma = Math.round(e.gamma);

					that._applyParallax(beta * that.__width / 360 , -gamma * that.__height / 360);
				};

				window.addEventListener('deviceorientation', this.orientationParallaxMove, false);
			}*/
		}
	};

	/**
	 * disable parallax effect
	 */
	p._disableParallaxEffect = function(){
		if( this.slider.options.parallaxMode === 'swipe' ){
			this.slide.view.removeEventListener(MSViewEvents.SCROLL, this._swipeParallaxMove, this);
		} else {
			this.slide.$element.off('mousemove', this._mouseParallaxMove)
						 .off('mouseleave', this._resetParalax);

			/*if( window._mobile && window.DeviceOrientationEvent ){
				window.removeEventListener('deviceorientation', this.orientationParallaxMove);
			}*/
		}
	};

	/**
	 * reset layers parallax position to 0, 0
	 */
	p._resetParalax = function(e){
		var that = e.data.that;
		that._applyParallax(0,0);
	};

	/**
	 * Calculates new mouse position over slide and moves layers
	 * @since 1.6.0
	 */
	p._mouseParallaxMove = function(e){
		var that = e.data.that,
			os = that.slide.$element.offset(),
			slider = that.slider;

			if( slider.options.parallaxMode !== 'mouse:y-only' ){
				var x = e.pageX - os.left - that.slide.__width  / 2;
			} else {
				var x = 0;
			}

			if( slider.options.parallaxMode !== 'mouse:x-only' ){
				var y = e.pageY - os.top  - that.slide.__height / 2;
			} else {
				var y = 0;
			}

		that._applyParallax(-x, -y);
	};


	/**
	 * Calculates new position of parallax based on slide position
	 * @param  {Event} e
	 * @since 1.6.0
	 */
	p._swipeParallaxMove = function(e){
		var value = this.slide.position - this.slide.view.__contPos;

		if ( this.slider.options.dir === 'v' ) {
			this._applyParallax(0, value, true);
		} else {
			this._applyParallax(value, 0, true);
		}
	};


})(window, document, jQuery);

/* ================== bin-debug/js/pro/layers/OverlayLayerController.js =================== */
/**
 * Overlaye layer controller extends layer controller
 * @since 2.50.0
 */
;(function ( $, window, document, undefined ) {
    "use strict";


    window.MSOverlayLayerController = function( slide ){
        MSLayerController.apply( this, arguments );
    }

    /* ------------------------------------------------------------------------------ */
    MSOverlayLayerController.extend(MSLayerController);
    var p = MSOverlayLayerController.prototype;
    var _super = MSLayerController.prototype;
    /* ------------------------------------------------------------------------------ */

    /**
     * @override
     */
    p.addLayer = function (layer) {
        var showOnSlides = layer.$element.data('show-on'),
            hideOnSlides = layer.$element.data('hide-on');

        if (hideOnSlides ) {
            layer.hideOnSlides = hideOnSlides.replace(/\s+/g, '').split(',');
        }

        if (showOnSlides ) {
            layer.showOnSlides = showOnSlides.replace(/\s+/g, '').split(',');
        }

        _super.addLayer.apply( this, arguments );
    };

    /**
     * @override
     */
    p.create = function () {
        _super.create.apply( this, arguments );
        this.slider.api.addEventListener( MSSliderEvent.CHANGE_START, this.checkLayers.bind(this) );
    };

    p.checkLayers = function(){
        if ( !this.ready ) {
            return;
        }

        for(var i = 0; i !== this.layersCount; ++i){
            var layer = this.layers[i];
            if ( !layer.waitForAction ) {
                if ( this._checkForShow( layer ) ) {
                    layer.start();
                } else {
                    layer.hide();
                }
            }
        }
    };

    /**
     * enable parallax effect, overlay layars doesn't support swipe parallax
     */
    p._enableParallaxEffect = function(){
        this.slider.view.$element.on('mousemove' , {that:this}, this._mouseParallaxMove)
                                 .on('mouseleave', {that:this}, this._resetParalax);
    };

    /**
     * disable parallax effect
     * overlay layers doesn't support swipe parallax
     */
    p._disableParallaxEffect = function(){
        this.slider.view.$element.off('mousemove', this._mouseParallaxMove)
                                 .off('mouseleave', this._resetParalax);
    };

    /* ------------------------------------------------------------------------------ */
    /**
     * start layer effect
     */
    p._startLayers = function(){
        for(var i = 0; i !== this.layersCount; ++i){
            var layer = this.layers[i];

            if ( this._checkForShow( layer ) && !layer.waitForAction ) {
                layer.start();
            }
        }
    };

    p._checkForShow = function( layer ) {
        var slideId = this.slider.api.currentSlide.id,
            layerHideOn = layer.hideOnSlides,
            layerShowOn = layer.showOnSlides;

        if ( layerShowOn ) {
            return !!slideId && layerShowOn.indexOf( slideId ) !== -1;
        }

        return !slideId || !layerHideOn || ( layerHideOn.length && layerHideOn.indexOf( slideId ) === -1 );
    };

})(jQuery, window, document);

/* ================== bin-debug/js/pro/layers/OverlayLayers.js =================== */
/**
 * Master Slider overlay layers
 *
 */
;(function ( $, window, document, undefined ) {
    "use strict";

    window.MSOverlayLayers = function( slider ){
        this.slider = slider;
    };

    /* ------------------------------------------------------------------------------ */
    var p = MSOverlayLayers.prototype;

    p.setupLayerController = function(){
        this.layerController = new MSOverlayLayerController(this);
        this.slider.api.addEventListener( MSSliderEvent.RESIZE, this.setSize.bind(this) );
        this.slider.api.addEventListener( MSSliderEvent.CHANGE_START, this.setSize.bind(this) );
        this.setSize();
    };

    p.setSize = function(){
        this.__width = this.$element.width();
        this.__height = this.$element.height();

        this.layerController.setSize( this.__width, this.__height );
    };

    p.create = function(){
        this.layerController.create();
        this.layerController.loadLayers(this._onLayersLoad);
        this.layerController.prepareToShow();

        if ( window.pointerEventsPolyfill ) {
            window.pointerEventsPolyfill( {selector: '#' + this.slider.$element.attr('id') + ' ' + '.ms-overlay-layers', forcePolyfill:false } );
        }
    };

    p.getHeight = function() {
        return this.slider.api.currentSlide.getHeight();
    };

    p.destroy = function(){
        this.layerController.destroy();
    };

    /* ------------------------------------------------------------------------------ */

    p._onLayersLoad = function () {
        this.ready = true;
        this.selected = true;
        this.layersLoaded = true;
        this.setSize();
        this.layerController.showLayers();
    };

})(jQuery, window, document);

/* ================== bin-debug/js/pro/layers/LayerEffects.js =================== */
;(function($){

	window.MSLayerEffects = {};

	var installed,
		_fade = {opacity:0};

	MSLayerEffects.setup = function(){

		if(installed) return;
		installed = true;

		var st 					= MSLayerEffects,
			transform_css 		= window._jcsspfx + 'Transform',
			transform_orig_css  = window._jcsspfx + 'TransformOrigin',
			o					= $.browser.opera; // Opera sucks :|
			_2d					= window._css2d && window._cssanim && !o;

		st.defaultValues = {left : 0 , top: 0 , opacity:(isMSIE('<=9')?1:'') , right:0 , bottom:0};
		st.defaultValues[transform_css] 	 = '';
		//st.defaultValues[transform_orig_css] = '';
		st.rf = 1;

		st.presetEffParams = {
			random: '30|300',
			long 	: 300,
			short	: 30,
			'false'	:false,
			'true'	:true,
			tl	 : 'top left'	,	bl: 'bottom left',
			tr   : 'top right'	,   br: 'bottom right',
			rt   : 'top right'	,	lb: 'bottom left',
			lt   : 'top left'	,	rb: 'bottom right',
			t	 : 'top'		,	b : 'bottom',
			r	 : 'right'		,	l : 'left',
			c	 : 'center'
		};


		/*
		 ----------------------------------------
		 				2D Effects
		 ----------------------------------------
		 */

		st.fade = function(){
			return _fade;
		};

		st.left = (_2d)? function(dist , fade){
			var r = fade === false ? {} : {opacity:0};
			r[transform_css] = 'translateX(' + -dist*st.rf + 'px)';
			return r;
		} : function (dist, fade){
			var r = fade === false ? {} : {opacity:0};
			r.left = -dist*st.rf + 'px';
			return r;
		};

		st.right = (_2d)? function(dist , fade){
			var r = fade === false ? {} : {opacity:0};
			r[transform_css] = 'translateX(' + dist*st.rf + 'px)';
			return r;
		} : function (dist, fade){
			var r = fade === false ? {} : {opacity:0};
			r.left = dist*st.rf + 'px';
			return r;
		};

		st.top = (_2d)? function(dist , fade){
			var r = fade === false ? {} : {opacity:0};
			r[transform_css] = 'translateY(' + -dist*st.rf + 'px)';
			return r;
		} : function (dist, fade){
			var r = fade === false ? {} : {opacity:0};
			r.top = -dist*st.rf + 'px';
			return r;
		};

		st.bottom = (_2d)? function(dist , fade){
			var r = fade === false ? {} : {opacity:0};
			r[transform_css] = 'translateY(' + dist*st.rf + 'px)';
			return r;
		} : function (dist, fade){
			var r = fade === false ? {} : {opacity:0};
			r.top = dist*st.rf + 'px';
			return r;
		};

		st.from = (_2d)? function(leftdis , topdis , fade){
			var r = fade === false ? {} : {opacity:0};
			r[transform_css] = 'translateX('+leftdis*st.rf+'px) translateY(' + topdis*st.rf + 'px)';
			return r;
		} : function (leftdis , topdis, fade){
			var r = fade === false ? {} : {opacity:0};
			r.top = topdis*st.rf + 'px';
			r.left = leftdis*st.rf + 'px';
			return r;
		};


		// --------------------------------------------------------------------

		st.rotate = (_2d)? function(deg , orig ){
			var r = {opacity: 0};
			r[transform_css] = ' rotate('+deg+'deg)';
			if(orig) r[transform_orig_css] = orig;
			return r;
		} : function (deg, orig){
			return _fade;
		};

		st.rotateleft = (_2d)? function(deg , dist , orig , fade){
			var r = st.left(dist , fade);
			r[transform_css] += ' rotate('+deg+'deg)';
			if(orig) r[transform_orig_css] = orig;
			return r;
		} : function (deg , dist , orig , fade){
			return st.left(dist , fade);
		};

		st.rotateright = (_2d)? function(deg , dist , orig , fade){
			var r = st.right(dist , fade);
			r[transform_css] += ' rotate('+deg+'deg)';
			if(orig) r[transform_orig_css] = orig;
			return r;
		} : function (deg , dist , orig , fade){
			return st.right(dist , fade);
		};

		st.rotatetop = (_2d)? function(deg , dist , orig , fade){
			var r = st.top(dist , fade);
			r[transform_css] += ' rotate('+deg+'deg)';
			if(orig) r[transform_orig_css] = orig;
			return r;
		} : function (deg , dist , orig , fade){
			return st.top(dist , fade);
		};

		st.rotatebottom = (_2d)? function(deg , dist , orig , fade){
			var r = st.bottom(dist , fade);
			r[transform_css] += ' rotate('+deg+'deg)';
			if(orig) r[transform_orig_css] = orig;
			return r;
		} : function (deg , dist , orig , fade){
			return st.bottom(dist , fade);
		};

		st.rotatefrom = (_2d)? function(deg , leftdis , topdis , orig , fade){
			var r = st.from(leftdis , topdis , fade);
			r[transform_css] += ' rotate('+deg+'deg)';
			if(orig) r[transform_orig_css] = orig;
			return r;
		} : function (deg , leftdis , topdis , orig , fade){
			return st.from(leftdis , topdis , fade);
		};

		st.skewleft = (_2d)? function(deg , dist , fade){
			var r = st.left(dist , fade);
			r[transform_css] += ' skewX(' + deg + 'deg)';
			return r;
		} : function (deg , dist , fade){
			return st.left(dist , fade);
		};

		st.skewright = (_2d)? function(deg , dist , fade){
			var r = st.right(dist , fade);
			r[transform_css] += ' skewX(' + -deg + 'deg)';
			return r;
		} : function (deg , dist , fade){
			return st.right(dist , fade);
		};

		st.skewtop = (_2d)? function(deg , dist , fade){
			var r = st.top(dist , fade);
			r[transform_css] += ' skewY(' + deg + 'deg)';
			return r;
		} : function (deg , dist , fade){
			return st.top(dist , fade);
		};

		st.skewbottom = (_2d)? function(deg , dist , fade){
			var r = st.bottom(dist , fade);
			r[transform_css] += ' skewY(' + -deg + 'deg)';
			return r;
		} : function (deg , dist , fade){
			return st.bottom(dist , fade);
		};


		st.scale = (_2d)? function(x , y , orig , fade){
			var r = fade === false ? {} : {opacity:0};
			r[transform_css] = ' scaleX('+x+') scaleY('+y+')';
			if(orig) r[transform_orig_css] = orig;
			return r;
		} : function (x , y , orig , fade){
			return fade === false ? {} : {opacity:0};
		};

		st.scaleleft = (_2d)? function(x , y  , dist , orig , fade){
			var r = st.left(dist , fade);
			r[transform_css] = ' scaleX('+x+') scaleY('+y+')';
			if(orig) r[transform_orig_css] = orig;
			return r;
		} : function (x , y  , dist , orig , fade){
			return st.left(dist , fade);
		};

		st.scaleright = (_2d)? function(x , y  , dist , orig , fade){
			var r = st.right(dist , fade);
			r[transform_css] = ' scaleX('+x+') scaleY('+y+')';
			if(orig) r[transform_orig_css] = orig;
			return r;
		} : function (x , y  , dist , orig , fade){
			return st.right(dist , fade);
		};

		st.scaletop = (_2d)? function(x , y  , dist , orig , fade){
			var r = st.top(dist , fade);
			r[transform_css] = ' scaleX('+x+') scaleY('+y+')';
			if(orig) r[transform_orig_css] = orig;
			return r;
		} : function (x , y  , dist , orig , fade){
			return st.top(dist , fade);
		};

		st.scalebottom = (_2d)? function(x , y  , dist , orig , fade){
			var r = st.bottom(dist , fade);
			r[transform_css] = ' scaleX('+x+') scaleY('+y+')';
			if(orig) r[transform_orig_css] = orig;
			return r;
		} : function (x , y  , dist , orig , fade){
			return st.bottom(dist , fade);
		};

		st.scalefrom = (_2d)? function(x , y  , leftdis , topdis , orig , fade){
			var r = st.from(leftdis , topdis , fade);
			r[transform_css] += ' scaleX('+x+') scaleY('+y+')';
			if(orig) r[transform_orig_css] = orig;
			return r;
		} : function (x , y  , leftdis , topdis , orig , fade){
			return st.from(leftdis , topdis , fade);
		};

		st.rotatescale = (_2d)? function(deg , x , y  ,  orig , fade){
			var r = st.scale(x , y , orig , fade);
			r[transform_css] += ' rotate('+deg+'deg)';
			if(orig) r[transform_orig_css] = orig;
			return r;
		} : function (deg , x , y  ,  orig , fade){
			return st.scale(x , y , orig , fade);
		};


		/*
		 ----------------------------------------
		 				3D Effects
		 ----------------------------------------
		 */

		st.front = (window._css3d)? function(dist , fade){
			var r = fade === false ? {} : {opacity:0};
			r[transform_css] = 'perspective(2000px) translate3d(0 , 0 ,' + dist + 'px ) rotate(0.001deg)';
			return r;
		} : function (dist){
			return _fade;
		};

		st.back = (window._css3d)? function(dist, fade){
			var r = fade === false ? {} : {opacity:0};
			r[transform_css] = 'perspective(2000px) translate3d(0 , 0 ,' + -dist + 'px ) rotate(0.001deg)';
			return r;
		} : function (dist){
			return _fade;
		};

		st.rotatefront = (window._css3d)? function(deg , dist , orig , fade ){
			var r = fade === false ? {} : {opacity:0};
			r[transform_css] = 'perspective(2000px) translate3d(0 , 0 ,' + dist + 'px ) rotate('+ (deg || 0.001) +'deg)';
			if(orig) r[transform_orig_css] = orig;
			return r;
		} : function (deg , dist , orig , fade ){
			return _fade;
		};

		st.rotateback = (window._css3d)? function(deg , dist , orig , fade ){
			var r = fade === false ? {} : {opacity:0};
			r[transform_css] = 'perspective(2000px) translate3d(0 , 0 ,' + -dist + 'px ) rotate('+ (deg || 0.001) +'deg)';
			if(orig) r[transform_orig_css] = orig;
			return r;
		} : function (deg , dist , orig , fade ){
			return _fade;
		};

		st.rotate3dleft = (window._css3d)? function(x , y , z , dist , orig , fade){
			var r = st.left(dist , fade);
			r[transform_css] += (x?' rotateX('+x+'deg)' : ' ')+(y?' rotateY('+y+'deg)' : '')+(z?' rotateZ('+z+'deg)' : '');
			if(orig) r[transform_orig_css] = orig;
			return r;

		} : function (x , y , z , dist , orig , fade){
			return st.left(dist , fade);;
		};

		st.rotate3dright = (window._css3d)? function(x , y , z , dist , orig , fade){
			var r = st.right(dist , fade);
			r[transform_css] += (x?' rotateX('+x+'deg)' : ' ')+(y?' rotateY('+y+'deg)' : '')+(z?' rotateZ('+z+'deg)' : '');
			if(orig) r[transform_orig_css] = orig;
			return r;
		} : function (x , y , z , dist , orig , fade){
			return st.right(dist , fade);;
		};

		st.rotate3dtop = (window._css3d)? function(x , y , z , dist , orig , fade){
			var r = st.top(dist , fade);
			r[transform_css] += (x?' rotateX('+x+'deg)' : ' ')+(y?' rotateY('+y+'deg)' : '')+(z?' rotateZ('+z+'deg)' : '');
			if(orig) r[transform_orig_css] = orig;
			return r;
		} : function (x , y , z , dist , orig , fade){
			return st.top(dist , fade);;
		};

		st.rotate3dbottom = (window._css3d)? function(x , y , z , dist , orig , fade){
			var r = st.bottom(dist , fade);
			r[transform_css] += (x?' rotateX('+x+'deg)' : ' ')+(y?' rotateY('+y+'deg)' : '')+(z?' rotateZ('+z+'deg)' : '');
			if(orig) r[transform_orig_css] = orig;
			return r;
		} : function (x , y , z , dist , orig , fade){
			return st.bottom(dist , fade);
		};

		st.rotate3dfront = (window._css3d)? function(x , y , z , dist , orig , fade){
			var r = st.front(dist , fade);
			r[transform_css] += (x?' rotateX('+x+'deg)' : ' ')+(y?' rotateY('+y+'deg)' : '')+(z?' rotateZ('+z+'deg)' : '');
			if(orig) r[transform_orig_css] = orig;
			return r;
		} : function (x , y , z , dist , orig , fade){
			return st.front(dist , fade);
		};

		st.rotate3dback = (window._css3d)? function(x , y , z , dist , orig , fade){
			var r = st.back(dist , fade);
			r[transform_css] += (x?' rotateX('+x+'deg)' : ' ')+(y?' rotateY('+y+'deg)' : '')+(z?' rotateZ('+z+'deg)' : '');
			if(orig) r[transform_orig_css] = orig;
			return r;
		} : function (x , y , z , dist , orig , fade){
			return st.back(dist , fade);
		};

		// transform effect
		st.t = (window._css3d)? function(fade,tx,ty,tz,r,rx,ry,rz,scx,scy,skx,sky,ox,oy,oz){
			var _r = fade === false ? {} : {opacity:0};
			var transform = 'perspective(2000px) ';

			tx  !== 'n' && (transform += 'translateX(' + tx * st.rf + 'px) ');
			ty  !== 'n' && (transform += 'translateY(' + ty * st.rf + 'px) ');
			tz  !== 'n' && (transform += 'translateZ(' + tz * st.rf + 'px) ');
			r   !== 'n' && (transform += 'rotate(' + r + 'deg) ');
			rx  !== 'n' && (transform += 'rotateX(' + rx + 'deg) ');
			ry  !== 'n' && (transform += 'rotateY(' + ry + 'deg) ');
			rz  !== 'n' && (transform += 'rotateZ(' + rz + 'deg) ');
			skx !== 'n' && (transform += 'skewX(' + skx + 'deg) ');
			sky !== 'n' && (transform += 'skewY(' + sky + 'deg) ');
			scx !== 'n' && (transform += 'scaleX(' + scx + ') ');
			scy !== 'n' && (transform += 'scaleY(' + scy + ')');

			_r[transform_css] = transform;

			var trans_origin = '';

			trans_origin += (ox !== 'n' ? ox + '% ' : '50% ');
			trans_origin += (oy !== 'n' ? oy + '% ' : '50% ');
			trans_origin += (oz !== 'n' ? oz + 'px' : '');

			_r[transform_orig_css] = trans_origin;

			return _r;

		} : function(fade,tx,ty,tz,r,rx,ry,rz,scx,scy,skx,sky,ox,oy,oz) {

			var r = fade === false ? {} : {opacity:0};
			tx  !== 'n' && (r.left = tx * st.rf + 'px');
			ty  !== 'n' && (r.top  = ty * st.rf + 'px');
			return r;
		}
	};
})(jQuery);

/* ================== bin-debug/js/pro/layers/LayerElement.js =================== */
/**
 * Master Slider Layer Element
 * @author Averta
 * @package Master Slider jQuery
 */

;(function($){

	/**
	 * master slider layer element constructor
	 */
	window.MSLayerElement = function(){

		// default layer start animation
		this.start_anim = {
			name		: 'fade',
			duration	: 1000,
			ease 		: 'linear',
			delay		: 0
		};

		// default layer end animation
		this.end_anim = {
			duration	: 1000,
			ease 		: 'linear'
		};

		// default layer type
		this.type = 'text'; // video , image

		//this.swipe 		= true;
		this.resizable 	= true;
		this.minWidth 	= -1;
		this.isVisible  = true;

		// list of styles which should stores initial values and changes based on screen size for resizable layers
		this.__cssConfig = [
			'margin-top' 	,      'padding-top'	,
			'margin-bottom'	,      'padding-left'	,
			'margin-right'	,      'padding-right'	,
			'margin-left'	,      'padding-bottom' ,


			'font-size' 	,  		'line-height'	,
			/*'height'		, */	'width'			,
			'left'			,       'right'			,
			'top'			,       'bottom'
		];

		this.baseStyle = {};
	};

	var p = MSLayerElement.prototype;

	/*--------------------------------------------------*\
		Public Methods
	\*--------------------------------------------------*/

	/**
	 * determine start animation for the layer
	 * @param {Objec} anim
	 */
	p.setStartAnim = function(anim){
		$.extend(this.start_anim , anim); $.extend(this.start_anim, this._parseEff(this.start_anim.name));
		this.$element.css('visibility' , 'hidden');
	};

	/**
	 * determine end/hide animation for the layer
	 * @param {Object} anim
	 */
	p.setEndAnim = function(anim){
		$.extend(this.end_anim, anim);
	};

	/**
	 * create layer object from layer element
	 */
	p.create = function(){
		this.$element.css('display', 'none');

		// resizable layer
		this.resizable = this.$element.data('resize') !== false;

		// fixed positioning
		this.fixed = this.$element.data('fixed') === true;

		// hide under parameter
		if( this.$element.data('widthlimit') !== undefined ) {
			this.minWidth = this.$element.data('widthlimit');
		}

		if( !this.end_anim.name ) {
			this.end_anim.name = this.start_anim.name;
		}

		if( this.end_anim.time ) {
			this.autoHide = true;//this.end_anim.delay = this.slide.delay * 1000 - this.end_anim.duration;
		}

		// is this layer static?
		this.staticLayer = this.$element.data('position') === 'static';
		this.fixedLayer = this.$element.data('position') === 'fixed';
		this.layersCont = this.controller.$layers;

		// make it visible if it's static
		if ( this.staticLayer ) {
			this.$element.css('display', '')
						 .css('visibility', '');
		}

		// create action event
		// @since v1.7.2
		if( this.$element.data('action') !== undefined ) {
			var slideController = this.slide.slider.slideController;
			this.$element.on( this.$element.data('action-event') || 'click' , function(event){
				slideController.runAction($(this).data('action'));
				event.preventDefault();
			}).addClass('ms-action-layer');
		}

		$.extend(this.end_anim  , this._parseEff(this.end_anim.name));
		this.slider = this.slide.slider;

        // masked layer
        if ( this.masked ) {
            this.$mask = $('<div></div>').addClass('ms-layer-mask');

            if ( this.link ) {
                this.link.wrap(this.$mask);
                this.$mask = this.link.parent();
            } else {
                this.$element.wrap(this.$mask);
                this.$mask = this.$element.parent();
            }

            if ( this.maskWidth ) {
                this.$mask.width(this.maskWidth);
            }

            if ( this.maskHeight ) {
                this.$mask.height(this.maskHeight);

                // add height to css check
                if ( this.__cssConfig.indexOf('height') === -1 ) {
                    this.__cssConfig.push('height');
                }
            }
        }

        // new alignment method
        // @since v1.6.1
        var layerOrigin = this.layerOrigin = this.$element.data('origin');

        if ( layerOrigin ){

            var vOrigin  = layerOrigin.charAt(0),
                hOrigin  = layerOrigin.charAt(1),
                offsetX  = this.$element.data('offset-x'),
                offsetY  = this.$element.data('offset-y'),
                layerEle = this.masked ? this.$mask[0] : this.$element[0];

            if( offsetY === undefined ){
                offsetY = 0;
            }

            switch ( vOrigin ){
                case 't':
                    layerEle.style.top = offsetY + 'px';
                    break;
                case 'b':
                    layerEle.style.bottom = offsetY + 'px';
                    break;
                case 'm':
                    layerEle.style.top = offsetY + 'px';
                    this.middleAlign = true;
            }

            if( offsetX === undefined ){
                offsetX = 0;
            }


            switch ( hOrigin ){
                case 'l':
                    layerEle.style.left = offsetX + 'px';
                    break;
                case 'r':
                    layerEle.style.right = offsetX + 'px';
                    break;
                case 'c':
                    layerEle.style.left = offsetX + 'px';
                    this.centerAlign = true;
            }
        }

        // parallax effect
        // @since v1.6.0
        this.parallax = this.$element.data('parallax')
        if( this.parallax != null ) {
            this.parallax /= 100;
            this.$parallaxElement = $('<div></div>').addClass('ms-parallax-layer');

            if( this.masked ) {
                this.$mask.wrap(this.$parallaxElement);
                this.$parallaxElement = this.$mask.parent();
            } else if( this.link ) { // only for image layer
                this.link.wrap(this.$parallaxElement);
                this.$parallaxElement = this.link.parent();
            } else {
                this.$element.wrap(this.$parallaxElement);
                this.$parallaxElement = this.$element.parent();
            }

            this._lastParaX = 0;
            this._lastParaY = 0;
            this._paraX = 0;
            this._paraY = 0;


            // add bottom 0 to the parallax element if layer origin specified to the bottom
            this.alignedToBot = this.layerOrigin && this.layerOrigin.indexOf('b') !== -1;
            if( this.alignedToBot ) {
                this.$parallaxElement.css('bottom', 0);
            }

            if( window._css3d ){
                this.parallaxRender = this._parallaxCSS3DRenderer;
            } else if ( window._css2d ){
                this.parallaxRender = this._parallaxCSS2DRenderer;
            } else {
                this.parallaxRender = this._parallax2DRenderer;
            }

            if( this.slider.options.parallaxMode !== 'swipe' ){ // mouse mode
                averta.Ticker.add(this.parallaxRender, this);
            }
        }

        // remove all data- attributes excluding data-src
        $.removeDataAttrs(this.$element, ['data-src']);
    };

    /**
     * initialize layer
     */
    p.init = function(){
        //if(this.initialized) return;
        this.initialized = true;

        var value;

        this.$element.css('visibility' , '');
        // store initial layer styles
        for(var i = 0 , l = this.__cssConfig.length; i < l ; i ++){
            var key = this.__cssConfig[i];
            if ( this._isPosition(key) && this.masked ) {
                value = this.$mask.css(key);
            } else if( this.type === 'text' && key === 'width' && !this.masked && !this.maskWidth ){ // in some browsers using computed style for width in text layer causes unexpected word wrapping
                value = this.$element[0].style.width;
            } else {

                value = this.$element.css(key);
                var isSize = key === 'width' || key === 'height';

                if ( isSize && this.masked ){
                    if ( this.maskWidth && key === 'width' ) {
                        value = this.maskWidth + 'px';
                    } else if ( this.maskHeight && key === 'height') {
                        value = this.maskHeight + 'px';
                    }
                }

                // fix for Google Chrome in ios, sometimes image layers over first slide not showing correctly.
                if ( isSize && value === '0px' ) {
                    value = this.$element.data(key) + 'px';
                }
            }

            // skip unnecessary positioning styles
            if ( this.layerOrigin && (
                 ( key === 'top'    && this.layerOrigin.indexOf('t') === -1 && this.layerOrigin.indexOf('m') === -1 ) ||
                 ( key === 'bottom' && this.layerOrigin.indexOf('b') === -1 ) ||
                 ( key === 'left'   && this.layerOrigin.indexOf('l') === -1 && this.layerOrigin.indexOf('c') === -1 ) ||
                 ( key === 'right'  && this.layerOrigin.indexOf('r') === -1 )  )
            ) {
                continue;
            }

            if( value != 'auto' && value != "" && value != "normal" ) {
                this.baseStyle[key] = parseInt(value);
            }
        }

        // @since v1.6.0
        if ( this.middleAlign ){
            this.baseHeight = this.$element.outerHeight(false);//this.$element.height();
        }

        if ( this.centerAlign ){
            // in some browsers using computed style for width in text layer causes unexpected word wrapping
            //if ( this.type === 'text' ){
            //  this.baseWidth = parseInt(this.$element[0].style.width);
            //} else {
                this.baseWidth = this.$element.outerWidth(false);
            //}
        }

    };

    /**
     * locate layer over slider
     */
    p.locate = function(){

        // is slide ready?
        if ( !this.slide.ready ) {
            return;
        }

        var width       = parseFloat(this.layersCont.css('width')),
            height      = parseFloat(this.layersCont.css('height')),
            factor, isPosition, isSize;

        if( !this.staticLayer && this.$element.css('display') === 'none' && this.isVisible) {
            this.$element.css('display', '')
                         .css('visibility', 'hidden');
        }

        if ( this.staticLayer ) {
            this.$element.addClass('ms-hover-active');
        }

        factor = this.resizeFactor  = width / this.slide.slider.options.width;

        var $layerEle = this.masked ? this.$mask : this.$element;

        // updated @since v1.6.1
        for (var key in this.baseStyle) {

            isPosition = this._isPosition(key);
            isSize = key === 'width' || key === 'height';

            //switch resize/position factor
            if( this.fixed && isPosition ){
                factor = 1;
            } else {
                factor = this.resizeFactor;
            }

            if( !this.resizable && !isPosition ){
                continue;
            }

            if ( key === 'top' && this.middleAlign ){
                $layerEle[0].style.top = '0px';
                this.baseHeight = $layerEle.outerHeight(false);
                $layerEle[0].style.top = this.baseStyle['top'] * factor + (height - this.baseHeight) / 2  + 'px';
            } else if ( key === 'left' && this.centerAlign ){
                $layerEle[0].style.left = '0px';
                this.baseWidth = $layerEle.outerWidth(false);
                $layerEle[0].style.left = this.baseStyle['left'] * factor + (width - this.baseWidth) / 2  + 'px';
            } else if ( isPosition && this.masked ) {
                $layerEle[0].style[key] = this.baseStyle[key] * factor + 'px';
            } else if ( isSize && ( (key === 'width' && this.maskWidth) || (key === 'height' && this.maskHeight) ) ) {
                $layerEle[0].style[key] = this.baseStyle[key] * factor + 'px';
            } else {
                this.$element.css(key , this.baseStyle[key] * factor + 'px');
            }
        }


		this.visible(this.minWidth < width);
	};

	/**
	 * start layer animation
	 */
	p.start = function(){

		// is it already showing or is it a static layer?
		if ( this.isShowing || this.staticLayer ) {
			return;
		}

		this.isShowing = true;
        this.$element.removeClass('ms-hover-active');

        var key , base;

        // reads css value form LayerEffects
        MSLayerEffects.rf = this.resizeFactor;
        var effect_css = MSLayerEffects[this.start_anim.eff_name].apply(null , this._parseEffParams(this.start_anim.eff_params));

        // checkes effect css and defines TO css values
        var start_css_eff = {};

        // set from position
        for(key in effect_css){

            // check the position key (top, left, right or bottom) for animatin
            // It mostly will be used in old browsers
            // In effect left:100, layer base style right:300 -> effect changes to right:100
            if( this._checkPosKey(key , effect_css) ){
                continue;
            }

            // set default value from Layer Effects Class
            if( MSLayerEffects.defaultValues[key] != null ){
                start_css_eff[key] = MSLayerEffects.defaultValues[key];
            }

            if( key in this.baseStyle ){
                base = this.baseStyle[key];

                // updated @since v1.6.1
                if ( this.middleAlign && key === 'top' ){
                    base += (parseInt(this.layersCont.height()) - this.$element.outerHeight(false)) / 2;
                }

                if ( this.centerAlign && key === 'left' ){
                    base += (parseInt(this.layersCont.width()) - this.$element.outerWidth(false)) / 2;
                }
                //----------------------

                effect_css[key] = base + parseFloat(effect_css[key]) + 'px';
                start_css_eff[key] = base + 'px';
            }

            this.$element.css(key , effect_css[key]);
        }

        var that = this;

        clearTimeout(this.to);
        clearTimeout(this.clHide);
        this.to = setTimeout(function(){
            //that.locate();
            that.$element.css('visibility', '');
            that._playAnimation(that.start_anim , start_css_eff);
        } , that.start_anim.delay || 0.01);


        this.clTo = setTimeout(function(){
            that.show_cl = true;
            that.$element.addClass('ms-hover-active');
        },(this.start_anim.delay || 0.01) + this.start_anim.duration + 1);

        if( this.autoHide ){
            clearTimeout(this.hto);
            this.hto = setTimeout(function(){that.hide();} , that.end_anim.time );
        }

    };

    /**
     * starts hide animation
     */
    p.hide = function(){

        // static layers doesn't support animations
        if ( this.staticLayer ) {
            return;
        }

        this.$element.removeClass('ms-hover-active');

        this.isShowing = false;

        // reads css value form LayerEffects
        var effect_css = MSLayerEffects[this.end_anim.eff_name].apply(null , this._parseEffParams(this.end_anim.eff_params));

        for(key in effect_css){

            if(this._checkPosKey(key , effect_css)) continue;

            if( key === window._jcsspfx + 'TransformOrigin' ){
                this.$element.css(key , effect_css[key]);
            }

            if(key in this.baseStyle){
                effect_css[key] = this.baseStyle[key] + parseFloat(effect_css[key]) +  'px';
            }

        }

        this._playAnimation(this.end_anim , effect_css);

        clearTimeout(this.clHide);

        if ( effect_css.opacity === 0 ) {
            this.clHide = setTimeout( function(){ this.$element.css('visibility', 'hidden'); }.bind(this), this.end_anim.duration + 1 );
        }

		clearTimeout(this.to);
		clearTimeout(this.hto);
		clearTimeout(this.clTo);
	};

	/**
	 * reset layer
	 */
	p.reset = function(){
		if ( this.staticLayer ) {
			return;
		}

		this.isShowing = false;
		//this.$element.css(window._csspfx + 'animation-name', ''	);
		this.$element[0].style.display = 'none';
		this.$element.css('opacity', '');
		this.$element[0].style['transitionDuration'] = '';

		if(this.show_tween)
			this.show_tween.stop(true);

		clearTimeout(this.to);
		clearTimeout(this.hto);
	};

	/**
	 * destroy layer
	 */
	p.destroy = function(){
		this.reset();
		this.$element.remove();
	};

	/**
	 * change the visibility status
	 * @param  {Boolean} value
	 */
	p.visible = function(value){
		if(this.isVisible == value) return;

		this.isVisible = value;

		this.$element.css('display' , (value ? '' : 'none'));
	};

	/**
	 * Change the detestation of parallax position
	 * @param  {Number} x
	 * @param  {Number} y
	 * @since  1.6.0
	 */
	p.moveParallax = function(x, y , fast){
		this._paraX = x;
		this._paraY = y;
		if( fast ){
			this._lastParaX = x;
			this._lastParaY = y;
			this.parallaxRender();
		}
	};

	/*------------------------------------*\
		Private Methods
	\*------------------------------------*/

	/**
	 * play layer animation
	 * @param  {Obeject} animation layer animation object
	 * @param  {Object} css       animation css object
	 */
	p._playAnimation = function(animation , css){
		var options = {};

		if(animation.ease){
			options.ease = animation.ease;
		}

		options.transProperty = window._csspfx + 'transform,opacity';

        if( this.show_tween ) {
            this.show_tween.stop(true);
        }

		this.show_tween = CTween.animate(this.$element, animation.duration , css , options);
	};

	/**
	 * generate random value
	 * @param  {String} value the pattern value min|max
	 * @return {Number}
	 */
	p._randomParam = function(value){
		var min = Number(value.slice(0,value.indexOf('|')));
		var max = Number(value.slice(value.indexOf('|')+1));

		return min + Math.random() * (max - min);
	};

	/**
	 * parse effect function
	 * @param  {String} eff_name effect function
	 * @return {Object}
	 */
	p._parseEff = function(eff_name){

		var eff_params = [];

		if ( eff_name.indexOf('(') !== -1 ) {
			var temp   = eff_name.slice(0 , eff_name.indexOf('(')).toLowerCase();
			var	value;

			eff_params = eff_name.slice(eff_name.indexOf('(') + 1 , -1).replace(/\"|\'|\s/g , '').split(',');
			eff_name   = temp;

			for ( var i = 0, l = eff_params.length; i < l; ++i) {
				value = eff_params[i];

				if ( value in MSLayerEffects.presetEffParams) {
					value = MSLayerEffects.presetEffParams[value];
				}

				eff_params[i] = value;
			}
		}

		return {eff_name:eff_name , eff_params:eff_params};
	};

	/**
	 * parse effect function parameters
	 * @param  {Aarray} params effect parameters
	 * @return {Array}
	 */
	p._parseEffParams = function(params){
		var eff_params = [];
		for(var i = 0 , l = params.length; i < l ; ++i){
			var value = params[i];
			if(typeof value === 'string' && value.indexOf('|') !== -1) value = this._randomParam(value);

			eff_params[i] = value;
		}

		return eff_params;
	};

	/**
	 * calculates layer position based on initial positioning style and layer effect
	 * @param  {string} key   positioning key
	 * @param  {Object} style style object
	 * @return {Boolean}
	 */
	p._checkPosKey = function(key , style){
		if(key === 'left' && !(key in this.baseStyle) && 'right' in this.baseStyle){
			 style.right = -parseInt(style.left) + 'px';
			 delete style.left;
			 return true;
		}

		if(key === 'top'  && !(key in this.baseStyle) && 'bottom' in this.baseStyle){
			style.bottom = -parseInt(style.top) + 'px';
			delete style.top;
			return true;
		}

		return false;
	};

    /**
     * checks for position key
     * @param  {String}  key
     * @return {Boolean}     [description]
     */
    p._isPosition = function( key ) {
        return  key === 'top' || key === 'left' || key === 'bottom' || key === 'right';
    };

	/**
	 * calculate parallax position
	 */
	p._parallaxCalc = function(){
		var x_def = this._paraX - this._lastParaX,
			y_def = this._paraY - this._lastParaY;

		this._lastParaX += x_def / 12;
		this._lastParaY += y_def / 12;

		if( Math.abs( x_def ) < 0.019 ) {
			this._lastParaX = this._paraX;
		}

		if( Math.abs( y_def ) < 0.019 ) {
			this._lastParaY = this._paraY;
		}

	}

	/**
	 * Parallax move ticker function
	 */
	p._parallaxCSS3DRenderer = function(){
		this._parallaxCalc();
		this.$parallaxElement[0].style[window._jcsspfx + 'Transform'] = 'translateX(' + this._lastParaX * this.parallax + 'px) translateY(' + this._lastParaY * this.parallax + 'px) translateZ(0)';
	};

	/**
	 * parallax move ticker for CSS2 browsers
	 * @return {[type]} [description]
	 */
	p._parallaxCSS2DRenderer = function(){
		this._parallaxCalc();
		this.$parallaxElement[0].style[window._jcsspfx + 'Transform'] = 'translateX(' + this._lastParaX * this.parallax + 'px) translateY(' + this._lastParaY * this.parallax + 'px)';
	};

	/**
	 * parallax move ticker for zombie browsers
	 */
	p._parallax2DRenderer = function(){
		this._parallaxCalc();

		// change bottom instead of top if layer aligned to the bottom (origin)
		if( this.alignedToBot ) {
			this.$parallaxElement[0].style.bottom  = this._lastParaY * this.parallax + 'px';
		} else {
			this.$parallaxElement[0].style.top  = this._lastParaY * this.parallax + 'px';
		}

		this.$parallaxElement[0].style.left = this._lastParaX * this.parallax + 'px';
	};

})(jQuery);

/* ================== bin-debug/js/pro/layers/ImageLayerElement.js =================== */
;(function($){

	window.MSImageLayerElement = function(){
		MSLayerElement.call(this);
		this.needPreload = true;

		this.__cssConfig = [
			'width'			,		'height'		,
			'margin-top' 	,      'padding-top'	,
			'margin-bottom'	,      'padding-left'	,
			'margin-right'	,      'padding-right'	,
			'margin-left'	,      'padding-bottom' ,

			'left'			,       'right'			,
			'top'			,       'bottom'
		];

		this.type = 'image';
	};

	MSImageLayerElement.extend(MSLayerElement);

	var p = MSImageLayerElement.prototype;
	var _super = MSLayerElement.prototype;

	/*-------------- METHODS --------------*/

	p.create = function(){

		if(this.link){
			var p = this.$element.parent();
			p.append(this.link);
			this.link.append(this.$element);
			this.link.removeClass('ms-layer');
			this.$element.addClass('ms-layer');
			p = null;
		}

		_super.create.call(this);

		if(this.$element.data('src') != undefined){
			this.img_src = this.$element.data('src');
			this.$element.removeAttr('data-src');
		}else{
			var that = this;
			this.$element.on('load', function(event){
				that.controller.preloadCount--;
				if(that.controller.preloadCount === 0)
					that.controller._onlayersReady();
			}).each($.jqLoadFix);
		}

		if($.browser.msie)
			this.$element.on('dragstart', function(event) { event.preventDefault(); }); // disable native dragging
	};

	p.loadImage = function(){
		var that = this;

		this.$element.preloadImg(this.img_src , function(event){
			//this.$element.width(event.width).height(event.height);
			that.controller.preloadCount--;
			if(that.controller.preloadCount === 0) that.controller._onlayersReady();
		});
	};

})(jQuery);

/* ================== bin-debug/js/pro/layers/VideoLayerElement.js =================== */
;(function($){

	window.MSVideoLayerElement = function(){
		MSLayerElement.call(this);

		this.__cssConfig.push(
				'height'
		);

		this.type = 'video';
	};

	MSVideoLayerElement.extend(MSLayerElement);

	var p  = MSVideoLayerElement.prototype;
	var _super  = MSLayerElement.prototype;

	/*-------------- METHODS --------------*/
	p.__playVideo = function(){
		if(this.img)CTween.fadeOut(this.img , 500 , 2);
		CTween.fadeOut(this.video_btn , 500 , 2);
		this.video_frame.attr('src' , 'about:blank').css('display' , 'block');
		if(this.video_url.indexOf('?') == -1) this.video_url += '?';
		this.video_frame.attr('src' , this.video_url + '&autoplay=1');
	};

	p.start = function(){
		_super.start.call(this);

		if ( this.$element.data('autoplay') ) {
			this.__playVideo();
		}
	};

	p.reset = function(){
		_super.reset.call(this);

		if(this.needPreload || this.$element.data('btn')){
			this.video_btn.css('opacity' , 1).css('display', 'block');
			this.video_frame.attr('src' , 'about:blank').css('display' , 'none');
		}

		if(this.needPreload){
			this.img.css('opacity' , 1).css('display', 'block');
			return;
		}

		this.video_frame.attr('src' , this.video_url);
	};

	p.create = function(){
		_super.create.call(this);

		this.video_frame = this.$element.find('iframe').css({width:'100%' , height:'100%'});
		this.video_url   = this.video_frame.attr('src');

		var has_img = this.$element.has('img').length != 0;

		if(!has_img && !this.$element.data('btn')) return;

		this.video_frame.attr('src' , 'about:blank').css('display' , 'none');

		var that = this;

		this.video_btn = $('<div></div>').appendTo(this.$element).addClass('ms-video-btn').click(function() {
			that.__playVideo();
		});

		//this.video_frame.attr('src' , 'about:blank');

		if(!has_img) return;

		this.needPreload = true;
		this.img = this.$element.find('img:first').addClass('ms-video-img');

		if(this.img.data('src') !== undefined){
			this.img_src = this.img.data('src');
			this.img.removeAttr('data-src');
		}else{
			var that = this;
			this.img.attr('src' , this.img_src).on('load', function(event) {
				that.controller.preloadCount--;
				if(that.controller.preloadCount === 0)
					that.controller._onlayersReady();
			}).each($.jqLoadFix);
		}

		if($.browser.msie)
			this.img.on('dragstart', function(event) { event.preventDefault(); }); // disables native dragging
	};

	p.loadImage = function(){
		var that = this;
		this.img.preloadImg(this.img_src, function(event) {
			that.controller.preloadCount--;
			if(that.controller.preloadCount === 0) that.controller._onlayersReady();
		});
	};

})(jQuery);

/* ================== bin-debug/js/pro/layers/HotspotLayer.js =================== */
;(function($){

	"use strict";

	window.MSHotspotLayer = function(){
		MSLayerElement.call(this);

		this.__cssConfig = [
			'margin-top' 	,      'padding-top'	,
			'margin-bottom'	,      'padding-left'	,
			'margin-right'	,      'padding-right'	,
			'margin-left'	,      'padding-bottom' ,

			'left'			,       'right'			,
			'top'			,       'bottom'
		];


		this.ease = 'Expo';
		this.hide_start = true;
		this.type = 'hotspot';
	};

	MSHotspotLayer.extend(MSLayerElement);

	var p = MSHotspotLayer.prototype;
	var _super = MSLayerElement.prototype;

	/*-------------- METHODS --------------*/

	p._showTT = function(){
		if(!this.show_cl)  return;

		clearTimeout(this.hto);
		if(this._tween)	this._tween.stop(true);

		if( this.hide_start ){
			this.align = this._orgAlign;
			this._locateTT();

			this.tt.css({display:'block'});
			this._tween = CTween.animate(this.tt , 900 , this.to , {ease:'easeOut'+this.ease});
			this.hide_start = false;
		}

	};

	p._hideTT = function(){
		if(!this.show_cl)  return;
		if(this._tween)	this._tween.stop(true);

		var that = this;

		clearTimeout(this.hto);
		this.hto = setTimeout(function(){
			that.hide_start = true;
			that._tween = CTween.animate(that.tt , 900 , that.from , {ease:'easeOut'+that.ease , complete:function(){that.tt.css('display' , 'none');}} );
		} , 200);
	};

	p._updateClassName = function(name){
		if(this._lastClass)	this.tt.removeClass(this._lastClass);
		this.tt.addClass(name);
		this._lastClass = name;
	}

	p._alignPolicy = function(){
		var h = this.tt.outerHeight(false),
		    w = Math.max(this.tt.outerWidth(false) , parseInt(this.tt.css('max-width'))),
		 	ww = window.innerWidth,
		 	wh = window.innerHeight;

		switch(this.align){
			case 'top':
				if(this.base_t < 0 )
					return 'bottom';
			break;
			case 'right':
				if(this.base_l + w > ww || this.base_t < 0)
					return 'bottom';
			break;
			case 'left':
				if(this.base_l < 0 || this.base_t < 0)
					return 'bottom';
			break;
		}

		return null;
	};

	p._locateTT = function(){
		var os = this.$element.offset(),
		os2 = this.slide.slider.$element.offset();

		var dist = 50,
			space = 15 //* this.factor;

		this.pos_x = os.left - os2.left - this.slide.slider.$element.scrollLeft();
		this.pos_y = os.top - os2.top - this.slide.slider.$element.scrollTop();

		this.from = {opacity:0};
		this.to = {opacity:1};

		this._updateClassName('ms-tooltip-'+this.align);
		this.tt_arrow.css('margin-left' , '');

		var arrow_w = 15,//parseInt(this.tt_arrow.css('border-left')) + parseInt(this.tt_arrow.css('border-right')),
			arrow_h = 15;//parseInt(this.tt_arrow.css('border-top'))  + parseInt(this.tt_arrow.css('border-bottom'));

			//console.log(arrow_h,arrow_w);
		//
		switch(this.align){
			case 'top':
				var w = Math.min(this.tt.outerWidth(false) , parseInt(this.tt.css('max-width')));
				this.base_t = this.pos_y - this.tt.outerHeight(false) - arrow_h - space;
				this.base_l = this.pos_x - w/2;

				if(this.base_l + w > window.innerWidth){
					this.tt_arrow.css('margin-left' , -arrow_w/2 + this.base_l + w -window.innerWidth + 'px');
					this.base_l = window.innerWidth - w;
				}

				if(this.base_l < 0){
					this.base_l = 0;
					this.tt_arrow.css('margin-left' , -arrow_w/2 + this.pos_x - this.tt.outerWidth(false) / 2 + 'px');
				}

				if(window._css3d){
					this.from[window._jcsspfx+'Transform'] = 'translateY(-'+dist+'px)';
					this.to[window._jcsspfx+'Transform']   = '';
				}else{
					this.from.top = (this.base_t - dist) + 'px';
					this.to.top = this.base_t + 'px';
				}

			break;
			case 'bottom':
				var w = Math.min(this.tt.outerWidth(false) , parseInt(this.tt.css('max-width')));

				this.base_t = this.pos_y + arrow_h + space;
				this.base_l = this.pos_x - w/2;

				if(this.base_l + w > window.innerWidth){
					this.tt_arrow.css('margin-left' , -arrow_w/2 + this.base_l + w -window.innerWidth + 'px');
					this.base_l = window.innerWidth - w;
				}

				if(this.base_l < 0){
					this.base_l = 0;
					this.tt_arrow.css('margin-left' , -arrow_w/2 + this.pos_x - this.tt.outerWidth(false) / 2 + 'px');
				}

				if(window._css3d){
					this.from[window._jcsspfx+'Transform'] = 'translateY('+dist+'px)';
					this.to[window._jcsspfx+'Transform'] = '';
				}else{
					this.from.top = (this.base_t + dist) + 'px';
					this.to.top = this.base_t + 'px';
				}

			break;

			case 'right':
				this.base_l = this.pos_x + arrow_w + space;
				this.base_t = this.pos_y - this.tt.outerHeight(false) / 2;

				if(window._css3d){
					this.from[window._jcsspfx+'Transform'] = 'translateX('+dist+'px)';
					this.to[window._jcsspfx+'Transform'] = '';
				}else{
					this.from.left = (this.base_l + dist) + 'px';
					this.to.left = this.base_l + 'px';
				}

			break;
			case 'left':
				this.base_l = this.pos_x - arrow_w - this.tt.outerWidth(false) - space;
				this.base_t = this.pos_y - this.tt.outerHeight(false) / 2;

				if(window._css3d){
					this.from[window._jcsspfx+'Transform'] = 'translateX(-'+dist+'px)';
					this.to[window._jcsspfx+'Transform'] = '';
				}else{
					this.from.left = (this.base_l - dist) + 'px';
					this.to.left = this.base_l + 'px';
				}

			break;
		}



		var policyAlign = this._alignPolicy();
		if(policyAlign !== null){
			this.align = policyAlign;
			this._locateTT();
			return;
		}

		this.tt.css('top'  ,parseInt(this.base_t)+'px').
				css('left' ,parseInt(this.base_l)+'px');

		this.tt.css(this.from);

	};

	p.start = function(){
		_super.start.call(this);
		this.tt.appendTo(this.slide.slider.$element);
		//this._locateTT();
		this.tt.css('display' , 'none');
	};

	p.reset = function(){
		_super.reset.call(this);
		this.tt.detach();
	};

	/**
	 * locate hotspot over slide
	 * @override LayerElement.locate
	 * @since 2.2.0
	 */
/*	p.locate = function(){
		_super.locate.call(this);

		if ( this.relativeToBG ) {
			console.log(this.baseOffsetX , this.slide.$bg_img.width()  , this.slide.bgWidth)
			this.$element[0].style.left = this.baseOffsetX * this.slide.$bg_img.width()  / this.slide.bgWidth + 'px';
			this.$element[0].style.top  = this.baseOffsetY * this.slide.$bg_img.height() / this.slide.bgHeight + 'px';
		}

	};
*/
	p.create = function(){
		var that = this;

		//@since 2.2.0
		//chnage offset progin to top left
	/*	this.relativeToBG = this.$element.data('relative') && (this.slide.fillMode === 'fill' || this.slide.fillMode === 'fit');
		if ( this.relativeToBG ) {

			var origin = this.$element.data('origin'),
				osy = this.$element.data('offset-y'),
				osx = this.$element.data('offset-x');

			if ( origin ) {
				if ( origin.charAt(0) === 'b' ){
					osy = this.slide.slider.options.height - this.$element.data('offset-y');
					this.$element.data('offset-y',  osy);
				}

				if ( origin.charAt(1) === 'r' ){
					osx = this.slide.slider.options.width - this.$element.data('offset-x');
					this.$element.data('offset-x', osx);
				}

			}

			this.$element.data('origin', 'tl');

			this.baseOffsetX = osx;
			this.baseOffsetY = osy;
		}*/


		this._orgAlign = this.align = this.$element.data('align') !== undefined ? this.$element.data('align') : 'top';

		this.data = this.$element.html();

		this.$element.html('').on('mouseenter' , function(){that._showTT();}).on('mouseleave',function(){that._hideTT();});

		this.point = $('<div><div class="ms-point-center"></div><div class="ms-point-border"></div></div>')
					.addClass('ms-tooltip-point')
					.appendTo(this.$element);

		var link = this.$element.data('link'),
			target = this.$element.data('target');

		if( link ){
			this.point.on('click', function(){window.open(link , target || '_self');});
		}

		this.tt =  $('<div></div>')
					.addClass('ms-tooltip')
					//.addClass('ms-tooltip-'+this.align)
					.css('display','hidden')
					.css('opacity' , 0);

		// @since v1.6.1
		if( this.$element.data('width') !== undefined ){
			this.tt.css('width', this.$element.data('width'))
				   .css('max-width', this.$element.data('width'));
		}

		this.tt_arrow = $('<div></div>')
						.addClass('ms-tooltip-arrow')
						.appendTo(this.tt);

		this._updateClassName('ms-tooltip-'+this.align);

		this.ttcont = $('<div></div>')
					  .addClass('ms-tooltip-cont')
					  .html(this.data)
					  .appendTo(this.tt)


		if( this.$element.data('stay-hover') === true ) {
			this.tt.on('mouseenter' , function(){
				if( that.hide_start ){
					return
				}
				clearTimeout(that.hto);
				that._tween.stop(true);
				that._showTT();
			}).on('mouseleave', function(){
				that._hideTT();
			});
		}

		_super.create.call(this);
	};

})(jQuery);

/* ================== bin-debug/js/pro/layers/ButtonLayer.js =================== */
/**
 * Master Slider Button Layer
 * @author Averta
 * @since 1.7.2
 * @extends {MSLayerElement}
 */
(function($){

	window.MSButtonLayer = function(){
		MSLayerElement.call(this);

		this.type = 'button';
	};

	MSButtonLayer.extend(MSLayerElement);

	var p = MSButtonLayer.prototype;
	var _super = MSLayerElement.prototype;

	var positionKies = ['top', 'left', 'bottom', 'right'];

	/*-------------- METHODS --------------*/

	p.create = function(){
		_super.create.call(this);
		this.$element.wrap('<div class="ms-btn-container"></div>').css('position', 'relative');
		this.$container = this.$element.parent();
	};

	p.locate = function(){
		_super.locate.call(this);
		var key, tempValue;

		for (var i=0; i<4; i++){
			key = positionKies[i];
			if ( key in this.baseStyle ) {
				tempValue = this.$element.css(key);
				this.$element.css(key, '');
				this.$container.css(key, tempValue);
			}
		}

		this.$container.width(this.$element.outerWidth(true))
					   .height(this.$element.outerHeight(true));
	};

})(jQuery);

/* ================== bin-debug/js/pro/controls/SliderEvent.js =================== */
window.MSSliderEvent = function (type){
	this.type = type;
};

MSSliderEvent.CHANGE_START      	= 'ms_changestart';
MSSliderEvent.CHANGE_END       		= 'ms_changeend';
MSSliderEvent.WAITING		      	= 'ms_waiting';
MSSliderEvent.AUTOPLAY_CHANGE   	= 'ms_autoplaychange';
MSSliderEvent.VIDEO_PLAY		   	= 'ms_videoPlay';
MSSliderEvent.VIDEO_CLOSE		   	= 'ms_videoclose';
MSSliderEvent.INIT					= 'ms_init';
MSSliderEvent.HARD_UPDATE			= 'ms_hard_update';
MSSliderEvent.RESIZE				= 'ms_resize';
MSSliderEvent.RESERVED_SPACE_CHANGE = 'ms_rsc'; // internal use
MSSliderEvent.DESTROY				= 'ms_destroy';

/* ================== bin-debug/js/pro/controls/Slide.js =================== */
/**
 * Master Slider Slide Class
 * @author averta
 * @package Master Slider jQuery
 */
;(function(window, document, $){

    "use strict";

    window.MSSlide = function(){

        this.$element = null;
        this.$loading = $('<div></div>').addClass('ms-slide-loading');

        this.view       = null;
        this.index      = -1;

        this.__width    = 0;
        this.__height   = 0;

        this.fillMode = 'fill'; // fill , fit , stretch , tile , center

        this.selected = false;
        this.pselected = false;
        this.autoAppend = true;
        this.isSleeping = true;

        this.moz = $.browser.mozilla;
    };

    var p = MSSlide.prototype;

    /**
     * on swipe start handler
     */
    p.onSwipeStart = function(){
        //this.$layers.css(window._csspfx + 'transition-duration' , '0ms');
        if ( this.link ) {
            this.linkdis = true;
        }

        if ( this.video ) {
            this.videodis = true;
        }
    };

    /**
     * on swipe move handler
     */
    p.onSwipeMove = function (e) {
        var move = Math.max(Math.abs(e.data.distanceX), Math.abs(e.data.distanceY));
        this.swipeMoved = move > 4;
    };

    /**
     * on swipe cancel handler
     */
    p.onSwipeCancel = function(e){
        if ( this.swipeMoved ) {
            this.swipeMoved = false;
            return;
        }

        if ( this.link ) {
            this.linkdis = false;
        }

        if ( this.video ) {
            this.videodis = false;
        }
        //this.$layers.css(window._csspfx + 'transition-duration' , this.view.__slideDuration + 'ms');
    };

    /**
     * setup layer controller for the slide
     * @since 2.11.0
     */
    p.setupLayerController = function () {
        this.hasLayers = true;
        this.layerController = new MSLayerController(this);
    };
    /**
     * this method called after loading all assets related to this slide
     */
    p.assetsLoaded = function(){
        this.ready = true;
        this.slider.api._startTimer();

        if( this.selected || (this.pselected && this.slider.options.instantStartLayers) ){

            if ( this.hasLayers ) {
                this.layerController.showLayers();
            }

            if(this.vinit){
                this.bgvideo.play();
                if( !this.autoPauseBgVid ) {
                    this.bgvideo.currentTime = 0;
                }
            }

        }
        if ( !this.isSleeping ) {
            this.setupBG();
        }

        CTween.fadeOut(this.$loading , 300 , true);

        //sequence loading
        if ( (this.slider.options.preload === 0 || this.slider.options.preload === 'all') && this.index < this.view.slideList.length - 1 ) {
            this.view.slideList[this.index + 1].loadImages();
        } else if ( this.slider.options.preload === 'all' && this.index === this.view.slideList.length - 1 ){
            this.slider._removeLoading();
        }

    };

    /**
     * adds backgroun image to the slider
     * @param {Element} img slide image element
     */
    p.setBG = function(img){
        this.hasBG = true;
        var that = this;

        this.$imgcont = $('<div></div>').addClass('ms-slide-bgcont');

        this.$element.append(this.$loading)
                     .append(this.$imgcont);

        this.$bg_img = $(img).css('visibility' , 'hidden');
        this.$imgcont.append(this.$bg_img);

        this.bgAligner = new MSAligner(that.fillMode , that.$imgcont, that.$bg_img );
        this.bgAligner.widthOnly = this.slider.options.autoHeight;

        if ( that.slider.options.autoHeight && (that.pselected || that.selected) ) {
            that.slider.setHeight(that.slider.options.height);
        }

        if ( this.$bg_img.data('src') !== undefined ) {
            this.bg_src = this.$bg_img.data('src');
            this.$bg_img.removeAttr('data-src');
        } else {
            this.$bg_img.one('load', function(event) {that._onBGLoad(event);})
                        .each($.jqLoadFix);
        }

    };

    /**
     * align and resize backgrund image over slide
     */
    p.setupBG = function(){

        //if(this.isSettedup) return;
        //this.isSettedup = true;

        if ( !this.initBG && this.bgLoaded ) {
            this.initBG = true;
            this.$bg_img.css('visibility' , '');
            this.bgWidth  = this.bgNatrualWidth  || this.$bg_img.width();
            this.bgHeight = this.bgNatrualHeight || this.$bg_img.height();

            CTween.fadeIn(this.$imgcont , 300);

            if(this.slider.options.autoHeight){
                this.$imgcont.height(this.bgHeight * this.ratio);
            }

            this.bgAligner.init(this.bgWidth  , this.bgHeight);
            this.setSize(this.__width , this.__height);

            if(this.slider.options.autoHeight && (this.pselected || this.selected))
                this.slider.setHeight(this.getHeight());
        }

    };



    /**
     * start loading images
     */
    p.loadImages = function(){
        if ( this.ls ) {
            return;
        }

        this.ls = true;

        if ( this.bgvideo ) {
            this.bgvideo.load();
        }
        if ( this.hasBG && this.bg_src ) {
            var that = this;
            this.$bg_img.preloadImg(this.bg_src , function(event) {that._onBGLoad(event);});
        }

        if ( this.hasLayers ) {
            this.layerController.loadLayers(this._onLayersLoad);
        }
        // There is nothing to preload? so slide is ready to show.
        if( !this.hasBG && !this.hasLayers ) {
            this.assetsLoaded();
        }

    };

    /**
     * layerController on assets load callback
     */
    p._onLayersLoad = function () {
        this.layersLoaded = true;
        if ( !this.hasBG || this.bgLoaded ) {
            this.assetsLoaded();
        }
    };
    /**
     * on background image loaded
     * @param  {Event} event
     */
    p._onBGLoad = function(event){
        this.bgNatrualWidth = event.width;
        this.bgNatrualHeight = event.height;

        this.bgLoaded = true;

        if ( $.browser.msie ) {
            this.$bg_img.on('dragstart', function(event) { event.preventDefault(); }); // disables native dragging
        }

        if ( !this.hasLayers || this.layerController.ready ) {
            this.assetsLoaded();
        }
    };

    /* -----------------------------------------------------*/

    /**
     * add video background to the slide
     * @param {jQuery Element} $video
     */
    p.setBGVideo = function($video){

        if ( !$video[0].play ) {
            return;
        }

        // disables video in mobile devices
        if ( window._mobile && !this.slider.options.mobileBGVideo) {
            $video.remove();
            return;
        }

        this.bgvideo  = $video[0];
        var that = this;

        $video.addClass('ms-slide-bgvideo');

        if ( $video.data('loop') !== false ) {
            this.bgvideo.addEventListener('ended' , function(){
                //that.bgvideo.currentTime = -1;
                that.bgvideo.play();
            });
        }

        if ( $video.data('mute') !== false ) {
            this.bgvideo.muted = true;
        }

        if ( $video.data('autopause') === true ) {
            this.autoPauseBgVid = true;
        }

        this.bgvideo_fillmode = $video.data('fill-mode') || 'fill'; // fill , fit , none

        if ( this.bgvideo_fillmode !== 'none' ) {
            this.bgVideoAligner = new MSAligner(this.bgvideo_fillmode , this.$element, $video );

            this.bgvideo.addEventListener('loadedmetadata' , function(){
                if(that.vinit) return;

                that.vinit = true;
                that.video_aspect = that.bgVideoAligner.baseHeight/that.bgVideoAligner.baseWidth;
                that.bgVideoAligner.init(that.bgvideo.videoWidth , that.bgvideo.videoHeight);
                that._alignBGVideo();
                CTween.fadeIn($(that.bgvideo) , 200);

                if ( that.selected ) {
                    that.bgvideo.play();
                }
            });
        }

        $video.css('opacity' , 0);

        this.$bgvideocont = $('<div></div>').addClass('ms-slide-bgvideocont').append($video);

        if ( this.hasBG ) {
            this.$imgcont.before(this.$bgvideocont);
        } else {
            this.$bgvideocont.appendTo(this.$element);
        }
    };

    /**
     * align video in slide
     */
    p._alignBGVideo = function () {
        if ( !this.bgvideo_fillmode || this.bgvideo_fillmode === 'none' ) {
            return;
        }
        this.bgVideoAligner.align();
    };

    /* -----------------------------------------------------*/

    /**
     * resize slide
     * @param {Number} width
     * @param {Number} height
     * @param {Boolean} hard   after resizing reinitializes layers
     */
    p.setSize = function(width, height, hard) {

        this.__width  = width;

        if ( this.slider.options.autoHeight ) {
            if ( this.bgLoaded ) {
                this.ratio = this.__width / this.bgWidth;
                height = Math.floor(this.ratio * this.bgHeight);
                this.$imgcont.height(height);
            } else {
                this.ratio = width / this.slider.options.width;
                height = this.slider.options.height * this.ratio;
            }
        }

        this.__height = height;
        this.$element.width(width).height(height);

        if(this.hasBG && this.bgLoaded)this.bgAligner.align();

        this._alignBGVideo();

        if ( this.hasLayers ) {
            this.layerController.setSize(width, height, hard);
        }
    };

    /**
     * calculates slide height
     * @return {Number} slide height
     */
    p.getHeight = function(){

        if ( this.hasBG && this.bgLoaded ) {
            return this.bgHeight * this.ratio;
        }

        return Math.max(this.$element[0].clientHeight, this.slider.options.height * this.ratio);
    };

    /* -----------------------------------------------------*/
    // YouTube and Vimeo videos

    /**
     * playe embeded video
     */
    p.__playVideo = function (){

        if ( this.vplayed || this.videodis ) {
            return;
        }

        this.vplayed = true;

        if ( !this.slider.api.paused ) {
            this.slider.api.pause();
            this.roc = true; // resume on close;
        }

        this.vcbtn.css('display' , '');
        CTween.fadeOut(this.vpbtn   , 500 , false);
        CTween.fadeIn(this.vcbtn    , 500);
        CTween.fadeIn(this.vframe   , 500);
        this.vframe.css('display' , 'block').attr('src' , this.video + '&autoplay=1');
        this.view.$element.addClass('ms-def-cursor');

        // remove perspective style from view if it's Firefox.
        // it fixes video fullscreen issue in Firefox
        if ( this.moz ) {
            this.view.$element.css('perspective', 'none');
        }

        // if swipe navigation enabled
        if ( this.view.swipeControl ) {
            this.view.swipeControl.disable();
        }

        this.slider.slideController.dispatchEvent(new MSSliderEvent(MSSliderEvent.VIDEO_PLAY));
    };

    /**
     * close embeded video
     */
    p.__closeVideo = function(){

        if ( !this.vplayed ) {
            return;
        }

        this.vplayed = false;

        if(this.roc){
            this.slider.api.resume();
        }

        var that = this;

        CTween.fadeIn(this.vpbtn    , 500);
        CTween.animate(this.vcbtn   , 500 , {opacity:0} , {complete:function(){ that.vcbtn.css  ('display'  , 'none'); }});
        CTween.animate(this.vframe  , 500 , {opacity:0} , {complete:function(){ that.vframe.attr('src'  , 'about:blank').css('display'  , 'none');}});

        //  video fullscreen issue in Firefox
        if ( this.moz ) {
            this.view.$element.css('perspective', '');
        }

        // if swipe navigation enabled
        if ( this.view.swipeControl ) {
            this.view.swipeControl.enable();
        }

        this.view.$element.removeClass('ms-def-cursor');
        this.slider.slideController.dispatchEvent(new MSSliderEvent(MSSliderEvent.VIDEO_CLOSE));
    };

    /* -----------------------------------------------------*/

    /**
     * create slide - it adds requierd elements over slide
     */
    p.create = function(){
        var that = this;

        if ( this.hasLayers ) {
            this.layerController.create();
        }
        if ( this.link ) {
            this.link.addClass('ms-slide-link').html('').click(function(e){
                if ( that.linkdis ) {
                    e.preventDefault();
                }
            });

            // this.$element.css('cursor' , 'pointer')
            //           .click(function(){ if(!that.linkdis) window.open(that.link , that.link_targ || '_self'); });
        }

        if ( this.video ) {

            if ( this.video.indexOf('?') === -1 ) {
                this.video += '?';
            }

            this.vframe = $('<iframe></iframe>')
                          .addClass('ms-slide-video')
                          .css({width:'100%' , height:'100%' , display:'none'})
                          .attr('src' , 'about:blank')
                          .attr('allowfullscreen', 'true')
                          .appendTo(this.$element);

            this.vpbtn = $('<div></div>')
                        .addClass('ms-slide-vpbtn')
                        .click(function(){that.__playVideo();})
                        .appendTo(this.$element);

            this.vcbtn = $('<div></div>')
                        .addClass('ms-slide-vcbtn')
                        .click(function(){that.__closeVideo();})
                        .appendTo(this.$element)
                        .css('display','none');

            if ( window._touch ) {
                this.vcbtn.removeClass('ms-slide-vcbtn')
                          .addClass('ms-slide-vcbtn-mobile')
                          .append('<div class="ms-vcbtn-txt">Close video</div>')
                          .appendTo(this.view.$element.parent());
            }
        }

        if ( !this.slider.options.autoHeight && this.hasBG ) {
            this.$imgcont.css('height' , '100%');

            if ( this.fillMode === 'center' || this.fillMode === 'stretch' ){
                this.fillMode = 'fill';
            }
        }

        if ( this.slider.options.autoHeight ) {
            this.$element.addClass('ms-slide-auto-height');
        }

        this.sleep(true);
    };

    /**
     * destory the slide
     */
    p.destroy = function(){
        if ( this.hasLayers ) {
            this.layerController.destroy();
            this.layerController = null;
        }
        this.$element.remove();
        this.$element = null;
    };

    /**
     * everything require to do before selecting slide
     */
    p.prepareToSelect = function(){

        if ( this.pselected || this.selected ) {
            return;
        }

        this.pselected = true;

        if ( this.link || this.video ) {
            this.view.addEventListener(MSViewEvents.SWIPE_START  , this.onSwipeStart  , this);
            this.view.addEventListener(MSViewEvents.SWIPE_MOVE  , this.onSwipeMove  , this);
            this.view.addEventListener(MSViewEvents.SWIPE_CANCEL , this.onSwipeCancel , this);
            this.linkdis = false;
            this.swipeMoved = false;
        }

        this.loadImages();

        if ( this.hasLayers ) {
            this.layerController.prepareToShow();
        }

        if ( this.ready ) {
            if( this.bgvideo ){
                this.bgvideo.play();
            }

            if ( this.hasLayers && this.slider.options.instantStartLayers ){
                this.layerController.showLayers();
            }
        }
        if( this.moz ){
            this.$element.css('margin-top' , '');
        }


    };

    /*p.prepareToUnselect = function(){
        if(!this.pselected || !this.selected) return;

        this.pselected = false;

    };*/

    /**
     * select slide
     */
    p.select = function(){
        if ( this.selected ) {
            return;
        }

        this.selected = true;
        this.pselected = false;
        this.$element.addClass('ms-sl-selected');

        if(this.hasLayers){

            if ( this.slider.options.autoHeight ) {
                this.layerController.updateHeight();
            }

            if( !this.slider.options.instantStartLayers ) {
                this.layerController.showLayers();
            }

            //this.view.addEventListener(MSViewEvents.SCROLL        , this.updateLayers  , this)
        }


        if( this.ready && this.bgvideo ) {
            this.bgvideo.play();
        }
        // @since 1.8.0
        // Autoplay iframe video
        if ( this.videoAutoPlay ) {
            this.videodis = false;
            this.vpbtn.trigger('click');
        }

    };

    /**
     * remove selected status
     */
    p.unselect = function(){
        this.pselected = false;

        if ( this.moz ) {
            this.$element.css('margin-top' , '0.1px');
        }

        if ( this.link || this.video ) {
            this.view.removeEventListener(MSViewEvents.SWIPE_START   , this.onSwipeStart  , this);
            this.view.removeEventListener(MSViewEvents.SWIPE_MOVE  , this.onSwipeMove  , this);
            this.view.removeEventListener(MSViewEvents.SWIPE_CANCEL  , this.onSwipeCancel , this);
        }

        if (this.bgvideo ) {
            this.bgvideo.pause();
            if(!this.autoPauseBgVid && this.vinit)
                this.bgvideo.currentTime = 0;
        }

        // hide layers
        if ( this.hasLayers ) {
            this.layerController.hideLayers();
        }
        if ( !this.selected ) {
            return;
        }

        this.selected = false;

        this.$element.removeClass('ms-sl-selected');
        if(this.video && this.vplayed){
            this.__closeVideo();
            this.roc = false;
        }

    };

    /**
     * remove slide from DOM
     */
    p.sleep = function(force){
        if ( this.isSleeping && !force ) {
            return;
        }

        this.isSleeping = true;

        if ( this.autoAppend ) {
            this.$element.detach();
        }

        if ( this.hasLayers ) {
            this.layerController.onSlideSleep();
        }
    };

    /**
     * add slide to the DOM
     */
    p.wakeup = function(){
        if ( !this.isSleeping ) {
            return;
        }

        this.isSleeping = false;

        if ( this.autoAppend ) {
            this.view.$slideCont.append(this.$element);
        }

        if ( this.moz ){
            this.$element.css('margin-top' , '0.1px');
        }

        this.setupBG();

        // aling bg
        if ( this.hasBG ){
            this.bgAligner.align();
        }

        if ( this.hasLayers ) {
            this.layerController.onSlideWakeup();
        }
    };

})(window, document, jQuery);

/* ================== bin-debug/js/pro/controls/SlideController.js =================== */
;(function($){

	"use strict";

	var SliderViewList = {};

	window.MSSlideController = function(slider){

		this._delayProgress		= 0;

		this._timer 			= new averta.Timer(100);
		this._timer.onTimer 	= this.onTimer;
		this._timer.refrence 	= this;

		this.currentSlide		= null;

		this.slider 	= slider;
		this.so 		= slider.options;

		averta.EventDispatcher.call(this);

	};

	MSSlideController.registerView = function(name , _class){
		if(name in SliderViewList){
			 throw new Error( name + ', is already registered.');
			 return;
		}

		SliderViewList[name] = _class;
	};

	MSSlideController.SliderControlList = {};
	MSSlideController.registerControl = function(name , _class){
		if(name in MSSlideController.SliderControlList){
			 throw new Error( name + ', is already registered.');
			 return;
		}

		MSSlideController.SliderControlList[name] = _class;
	};

	var p = MSSlideController.prototype;

	/*-------------- METHODS --------------*/


	p.setupView = function(){

		var that = this;
		this.resize_listener = function(){that.__resize();};

		// in @version 1.5.7 it will be added in Masterslider.js _setupSliderLayout function
		//$(window).bind('resize', this.resize_listener);

		//if(this.so.smoothHeight) this.so.autoHeight = true;

		var viewOptions = {
			spacing: 		this.so.space,
			mouseSwipe:		this.so.mouse,
			loop:			this.so.loop,
			autoHeight:		this.so.autoHeight,
			swipe:			this.so.swipe,
			speed:			this.so.speed,
			dir:			this.so.dir,
			viewNum: 		this.so.inView,
			critMargin: 	this.so.critMargin
		};

		if(this.so.viewOptions)
			$.extend(viewOptions , this.so.viewOptions);

		if(this.so.autoHeight) this.so.heightLimit = false;

		//this.view.slideDuration = this.so.duration;

		var viewClass = SliderViewList[this.slider.options.view] || MSBasicView;
		if(viewClass._3dreq && (!window._css3d || $.browser.msie) ) viewClass = viewClass._fallback || MSBasicView;

		this.view = new viewClass(viewOptions);

		if(this.so.overPause) {
			var that = this;
			this.slider.$element.mouseenter(function(){
				that.is_over = true;
				that._stopTimer();
			}).mouseleave(function(){
				that.is_over = false;
				that._startTimer();
			});
		}
	};

	p.onChangeStart = function(){

		this.change_started = true;

		if(this.currentSlide) this.currentSlide.unselect();
		this.currentSlide = this.view.currentSlide;
		this.currentSlide.prepareToSelect();
		//this.__appendSlides();
		if(this.so.endPause && this.currentSlide.index === this.slider.slides.length - 1){
			this.pause();
			//this._timer.reset();
			this.skipTimer();
		}

		if(this.so.autoHeight){
			this.slider.setHeight(this.currentSlide.getHeight());
		}

		if ( this.so.deepLink ) {
			this.__updateWindowHash();
		}

		this.dispatchEvent(new MSSliderEvent(MSSliderEvent.CHANGE_START));
	};

	p.onChangeEnd = function(){
		//if(!this.currentSlide.selected)
		//	this._timer.reset();
		this.change_started = false;

		this._startTimer();
		this.currentSlide.select();

		if(this.so.preload > 1){
			var loc ,i , l = this.so.preload - 1, slide;

			// next slides
			for(i=1;i<=l;++i){
				loc = this.view.index + i;

				if(loc >= this.view.slideList.length) {
					if(this.so.loop){
						loc = loc - this.view.slideList.length;
					}else{
						i = l;
						continue;
					}
				}

				slide = this.view.slideList[loc];
				if ( slide ) {
					slide.loadImages();
				}

			}

			// previous slides
			if(l > this.view.slideList.length/2)
				l = Math.floor(this.view.slideList.length/2);

			for(i=1;i<=l;++i){

				loc = this.view.index - i;

				if(loc < 0){
					if(this.so.loop){
						loc = this.view.slideList.length + loc;
					}else{
						i = l;
						continue;
					}
				}

				slide = this.view.slideList[loc];
				if ( slide ) {
					slide.loadImages();
				}

			}
		}

		this.dispatchEvent(new MSSliderEvent(MSSliderEvent.CHANGE_END));

	};

	p.onSwipeStart = function(){
		//this._timer.reset();
		this.skipTimer();
	};

	p.skipTimer = function(){
		this._timer.reset();
		this._delayProgress  = 0;
		this.dispatchEvent(new MSSliderEvent(MSSliderEvent.WAITING));
	};

	p.onTimer = function(time) {

		if(this._timer.getTime() >= this.view.currentSlide.delay * 1000){
			//this._timer.reset();
			this.skipTimer();
			this.view.next();
			this.hideCalled = false;
		}
		this._delayProgress = this._timer.getTime() / (this.view.currentSlide.delay * 10);

		if(this.so.hideLayers && !this.hideCalled && this.view.currentSlide.delay * 1000 - this._timer.getTime() <= 300){
			var currentSlide = this.view.currentSlide;
			if ( currentSlide.hasLayers ) {
				currentSlide.layerController.animHideLayers();
			}
			this.hideCalled = true;
		}

		this.dispatchEvent(new MSSliderEvent(MSSliderEvent.WAITING));
	};

	p._stopTimer = function(){
		if(this._timer)
			this._timer.stop();
	};

	p._startTimer = function(){
		if(!this.paused && !this.is_over && this.currentSlide && this.currentSlide.ready && !this.change_started)
			this._timer.start();
	};

	p.__appendSlides = function(){
		var slide , loc , i = 0 , l = this.view.slideList.length -1;

		// detach all
		for ( i ; i < l ; ++i){
			slide = this.view.slideList[i];
			if(!slide.detached){
			 	slide.$element.detach();
			 	slide.detached = true;
			}
		}

		// append current slide
		this.view.appendSlide(this.view.slideList[this.view.index]);

		l = 3;

		// next slides
		for(i=1;i<=l;++i){
			loc = this.view.index + i;

			if(loc >= this.view.slideList.length) {
				if(this.so.loop){
					loc = loc - this.view.slideList.length;
				}else{
					i = l;
					continue;
				}
			}

			slide = this.view.slideList[loc];
			slide.detached = false;
			this.view.appendSlide(slide);

		}

		// previous slides
		if(l > this.view.slideList.length/2)
			l = Math.floor(this.view.slideList.length/2);

		for(i=1;i<=l;++i){

			loc = this.view.index - i;

			if(loc < 0){
				if(this.so.loop){
					loc = this.view.slideList.length + loc;
				}else{
					i = l;
					continue;
				}
			}

			slide = this.view.slideList[loc];
			slide.detached = false;
			this.view.appendSlide(slide);
		}

	}

	p.__resize = function(hard){
		if(!this.created) return;

		this.width = this.slider.$element[0].clientWidth || this.so.width;

		if(!this.so.fullwidth){
			this.width = Math.min(this.width , this.so.width);
			//this.view.$element.css('left' , (this.slider.$element[0].clientWidth - this.width) / 2 + 'px');
		}

		if( this.so.fullheight ){
			this.so.heightLimit = false;
			this.so.autoHeight = false;
			this.height = this.slider.$element[0].clientHeight;
		} else {
			this.height = this.width / this.slider.aspect;
		}
		if( this.so.autoHeight ){
			this.currentSlide.setSize(this.width , null , hard);
			this.view.setSize(this.width , this.currentSlide.getHeight() , hard);
		} else {
			this.view.setSize(this.width , ( Math.max( this.so.minHeight, ( this.so.heightLimit ? Math.min(this.height , this.so.height) :  this.height ) ) ) , hard);
		}

		if(this.slider.$controlsCont){
			if(this.so.centerControls && this.so.fullwidth) {
				this.view.$element.css('left' , Math.min(0,-(this.slider.$element[0].clientWidth - this.so.width) / 2) + 'px');
			}
		}

		this.dispatchEvent(new MSSliderEvent(MSSliderEvent.RESIZE));
	};

	p.__dispatchInit = function(){
		this.dispatchEvent(new MSSliderEvent(MSSliderEvent.INIT));
	};

	/**
	 * used by deep link feature, uptades window hash value on slide changes
	 * @since 2.1.0
	 */
	p.__updateWindowHash = function(){
		var hash = window.location.hash,
			dl = this.so.deepLink,
			dlt = this.so.deepLinkType,
			eq = dlt === 'path' ? '\/' : '=',
			sep = dlt === 'path' ? '\/' : '&',
			sliderHash = dl + eq + (this.view.index + 1),
			regTest = new RegExp( dl + eq + '[0-9]+', 'g');

		if ( hash === '' ) {
			window.location.hash = sep + sliderHash;
		} else if( regTest.test(hash) ) {
			window.location.hash = hash.replace(regTest, sliderHash);
		} else {
			window.location.hash = hash + sep + sliderHash;
		}
	};

	p.__curentSlideInHash = function(){
		var hash = window.location.hash,
			dl = this.so.deepLink,
			dlt = this.so.deepLinkType,
			eq = dlt === 'path' ? '\/' : '=',
			regTest = new RegExp( dl + eq + '[0-9]+', 'g' );

		if ( regTest.test(hash) ) {
			var index = Number(hash.match(regTest)[0].match(/[0-9]+/g).pop());
			if ( !isNaN(index) ) {
				return index - 1;
			}
		}

		return -1;
	};

	p.__onHashChanged = function(){
		var index = this.__curentSlideInHash();
		if ( index !== -1 ){
			this.gotoSlide(index);
		}
	};

    p.__findLayerById = function( layerId ) {

        if ( !this.currentSlide) {
            return null;
        }
        var layer;

        if ( this.currentSlide.layerController ) {
            layer = this.currentSlide.layerController.getLayerById( layerId );
        }

        if ( !layer && this.slider.overlayLayers ) {
            return this.slider.overlayLayers.layerController.getLayerById( layerId );
        }

        return layer;
    };

	p.setup = function(){

		this.created = true;
		this.paused = !this.so.autoplay;

		//this.slider.$element.append(this.view.$element);
		this.view.addEventListener(MSViewEvents.CHANGE_START , this.onChangeStart , this);
		this.view.addEventListener(MSViewEvents.CHANGE_END   , this.onChangeEnd   , this);
		this.view.addEventListener(MSViewEvents.SWIPE_START  , this.onSwipeStart  , this);

		//this.currentSlide = this.view.slides[this.so.start - 1];
		this.currentSlide = this.view.slideList[this.so.start - 1];
		this.__resize();

		var slideInHash = this.__curentSlideInHash(),
			startSlide = slideInHash !== -1 ? slideInHash : this.so.start - 1;
		this.view.create(startSlide);

		if(this.so.preload === 0){
			this.view.slideList[0].loadImages();
		}

		this.scroller = this.view.controller;

		if(this.so.wheel){
			var that = this;
			var last_time = new Date().getTime();
			this.wheellistener = function(event){

				var e = window.event || event.orginalEvent || event;
				e.preventDefault();

				var current_time = new Date().getTime();
				if(current_time - last_time < 400) return;
				last_time = current_time;

				var delta = Math.abs(e.detail || e.wheelDelta);

				if ( $.browser.mozilla ) {
					delta *= 100;
				}

				var scrollThreshold = 15;

				// --- Scrolling up ---
				if (e.detail < 0 || e.wheelDelta > 0) {
					if ( delta >= scrollThreshold) {
						that.previous(true);
					}
				}
				// --- Scrolling down ---
				else {
					if (delta >= scrollThreshold) {
						that.next(true);
					}
				}

				return false;
			};

			if($.browser.mozilla) this.slider.$element[0].addEventListener('DOMMouseScroll' , this.wheellistener);
			else this.slider.$element.bind('mousewheel', this.wheellistener);
		}

		// if(this.so.wheel){
		// 	var that = this;
		// 	var last_time = new Date().getTime();
		// 	this.wheellistener = function(event){
		// 		var current_time = new Date().getTime();
		// 		if(current_time - last_time < 550) return;
		// 		last_time = current_time;
		// 		var e = window.event || event.orginalEvent || event;
		// 		var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
		// 		if(delta < 0)		that.next();
		// 		else if(delta > 0)	that.previous();
		// 		return false;
		// 	};

		// 	if($.browser.mozilla) this.slider.$element[0].addEventListener('DOMMouseScroll' , this.wheellistener);
		// 	else this.slider.$element.bind('mousewheel', this.wheellistener);
		// }

		if(this.slider.$element[0].clientWidth === 0)
			this.slider.init_safemode = true;

		this.__resize();

		var that = this;
		if( this.so.deepLink ) {
			$(window).on('hashchange', function() {
			  that.__onHashChanged();
			});
		}
	};

	p.index = function(){
		return this.view.index;
	};

	p.count = function(){
		return this.view.slidesCount;
	};

	p.next = function(checkLoop){
		this.skipTimer();
		this.view.next(checkLoop);
	};

	p.previous = function(checkLoop){
		this.skipTimer();
		this.view.previous(checkLoop);
	};

	p.gotoSlide = function(index) {
		index = Math.min(index, this.count()-1);
		this.skipTimer();
		this.view.gotoSlide(index);
	};

	p.destroy = function(reset){
		this.dispatchEvent(new MSSliderEvent(MSSliderEvent.DESTROY));
		this.slider.destroy(reset);
	};

	p._destroy = function(){
		this._timer.reset();
		this._timer = null;

		$(window).unbind('resize', this.resize_listener);
		this.view.destroy();
		this.view = null;

		if(this.so.wheel){
			if($.browser.mozilla) this.slider.$element[0].removeEventListener('DOMMouseScroll' , this.wheellistener);
			else this.slider.$element.unbind('mousewheel', this.wheellistener);
			this.wheellistener = null;
		}

		this.so = null;
	};

	/**
	 * run layer actions like next, previous,...
	 * @param  {String} action
	 * @since v1.7.2
	 */
	p.runAction = function(action){
		var actionParams = [];

		if( action.indexOf('(') !== -1 ){
			var temp = action.slice(0 , action.indexOf('('));
			actionParams = action.slice(action.indexOf('(') + 1 , -1).replace(/\"|\'|\s/g , '').split(',');
			action   = temp;
		}

		if ( action in this ){
			this[action].apply(this, actionParams);
		} else if ( console ){
			console.log('Master Slider Error: Action "'+action+'" not found.');
		}
	};

	p.update = function(hard){
		if(this.slider.init_safemode && hard)
			this.slider.init_safemode = false;
		this.__resize(hard);

		if ( hard ) {
			this.dispatchEvent(new MSSliderEvent(MSSliderEvent.HARD_UPDATE));
		}

	};

	p.locate = function(){
		this.__resize();
	};

	p.resume = function(){
		if(!this.paused) return;
		this.paused = false;
		this._startTimer();
	};

	p.pause = function(){
		if(this.paused) return;
		this.paused = true;
		this._stopTimer();
	};

	p.currentTime = function(){
		return this._delayProgress;
	};


    p.showLayer = function( layerId, delay ) {
        var layer = this.__findLayerById( layerId );
        if ( layer ) {
            if ( !delay ) {
                    layer.start();
            } else {
                clearTimeout( layer.actionTimeout );
                layer.actionTimeout = setTimeout( this.showLayer, delay , layerId , 0 );
            }
        }
    };

    p.hideLayer = function( layerId, delay ) {
        var layer = this.__findLayerById( layerId );
        if ( layer ) {
            if ( !delay ) {
                    layer.hide();
            } else {
                clearTimeout( layer.actionTimeout );
                layer.actionTimeout = setTimeout( this.hideLayer, delay , layerId , 0 );
            }
        }
    }

    p.toggleLayer = function( layerId, delay ) {
        var layer = this.__findLayerById( layerId );
        if ( layer ) {
            if ( !delay ) {
                    layer.isShowing ? layer.hide() : layer.start();
            } else {
                clearTimeout( layer.actionTimeout );
                layer.actionTimeout = setTimeout( this.toggleLayer, delay , layerId , 0 );
            }
        }
    }

    p.showLayers = function( layerIds, delay ) {
        var self = this;
        $.each( layerIds.replace( /\s+/g , '' ).split('|'), function( index, layerId ) {
            self.showLayer(layerId, delay);
        });
    };


    p.hideLayers = function( layerIds, delay ) {
        var self = this;
        $.each( layerIds.replace( /\s+/g , '' ).split('|'), function( index, layerId ) {
            self.hideLayer(layerId, delay);
        });
    };

    p.toggleLayers = function( layerIds, delay ) {
        var self = this;
        $.each( layerIds.replace( /\s+/g , '' ).split('|'), function( index, layerId ) {
            self.toggleLayer(layerId, delay);
        });
    };

	averta.EventDispatcher.extend(p);
})(jQuery);

/* ================== bin-debug/js/pro/MasterSlider.js =================== */
/**
 * Master Slider Main JavaScript File
 */

;(function($){

	"use strict";

	var LayerTypes = {
		'image' 	: MSImageLayerElement,
		'text'  	: MSLayerElement,
		'video' 	: MSVideoLayerElement,
		'hotspot'	: MSHotspotLayer,
		'button'	: MSButtonLayer
	};
	window.MasterSlider = function(){

		// Default Options
		this.options = {
            forceInit           : true,       // Force calling init even an error occurs in jQuery's dom ready method.
			autoplay 			: false,      // Enables the autoplay slideshow.
			loop 				: false,	  // Enables the continuous sliding mode.
			mouse				: true,		  // Whether the user can use mouse drag navigation.
			swipe				: true,		  // Whether the drag/swipe navigation is enabled.
			grabCursor			: true,		  // Whether the slider uses grab mouse cursor.
			space  				: 0,		  // The spacing value between slides in pixels.
			fillMode			: 'fill',  	  // Specifies the slide background scaling method. Its acceptable values are "fill", "fit", "stretch", "center" and "tile".
			start				: 1,		  // The slider starting slide number.
			view				: 'basic',	  // The slide changing transition.
			width				: 300,		  // The base width of slides. It helps the slider to resize in correct ratio.
			height				: 150,		  // The base height of slides, It helps the slider to resize in correct ratio.
			inView				: 15, 		  // Specifies number of slides which will be added at a same time in DOM.
            critMargin          : 1,          //
			mobileBGVideo       : false,	  // Whether show background videos in mobile devices.
			heightLimit			: true,		  // It force the slide to use max height value as its base specified height value.
			smoothHeight		: true,		  // Whether the slider uses smooth animation while its height changes.
			autoHeight			: false,      // Whether the slider adapts its height to each slide height or not. It overrides heightLimit option.
			minHeight 			: -1,		  // @since 2.13.0, Specifies min height value for the slider, it prevents slider to shows too narrow in small screens.
			fullwidth			: false,	  // It enables the slider to adapt width to its parent element. It's very useful for creating full-width sliders. In default it takes max width as its base width value.
			fullheight			: false,	  // It enables the slider to adapt height to its parent element.
			autofill			: false,	  // It enables the slider to adapt width and height to its parent element, It's very useful for creating fullscreen or fullwindow slider.
			layersMode			: 'center',	  // It accepts two values "center" and "full". The "center" value indicates that the slider aligns layers to the center. This option is only effective in full width mode.
			hideLayers			: false,	  // Whether the slider hides all layers before changing slide.
			endPause			: false,	  // Whether the slider pauses slideshow when it stays at the last slide.
			centerControls 		: true,		  // Whether the slider aligns UI controls to center. This option is only effective in full width mode.
			overPause			: true,		  // Whether the slider pauses slideshow on hover.
			shuffle				: false,	  // Enables the shuffle slide order.
			speed				: 17, 		  // Specifies slide changing speed. It accepts float values between 0 and 100.
			dir					: 'h',		  // Specifies slide changing direction. It accepts two values "h" (horizontal) and "v" (vertical).
			preload				: 0,		  // Specifies number of slides which will be loaded by slider. 0 value means the slider loads slides in sequence.
			wheel				: false,	  // Whether slider uses mouse wheel for navigation.
			layout				: 'boxed',	  // It accepts 'fullwidth', 'fullscreen', 'fillwidth', 'autofill', 'partialview', 'boxed'. It overrides 'fullwidth' and 'autofill' (added in v1.5.6)
			autofillTarget 		: null,		  // @since 2.13.0, Specifies the parent element of slider width jQuery selector, it used for sizing slider with autofill layout. Default value is the first parent element of slider.
			fullscreenMargin	: 0,		  // Specifies margin amount to the bottom of slider, it's only effective on fullscreen slider.
			instantStartLayers	: false, 	  // @since 1.5.0, Whether instantly shows slide layers.
			parallaxMode 		: 'mouse',	  // @since 1.6.0, Specifies mode of parallax effect accepts: "mouse", "mouse:x-only", "mouse:y-only" and "swipe"
			rtl 				: false,	  // @since 1.8.0, Whether Right-to-left direction slider.
			deepLink			: null,       // @since 2.1.0, null value disables slider deep-linking any string values identifies the slider in page's url like /#msslider-1
			deepLinkType 		: 'path', 	  // @since 2.1.0, type of hash value in page's url possible values, path and query (  #gallery/1 || #gallery=4 )
			disablePlugins      : []		  // @since 2.9.6, list of disabled Master Slider plugin names for this instance.
		};

		this.slides = [];
		this.activePlugins = [];
		this.$element = null;

		// used by new layout method. to force fullwidth or fullscreen
		this.lastMargin = 0;

		// Reserved side spaces of slider
		this.leftSpace = 0;
		this.topSpace = 0;
		this.rightSpace = 0;
		this.bottomSpace = 0;

		// hold on stack
		this._holdOn = 0;

		var that = this;
		this.resize_listener = function(){that._resize();};
		$(window).bind('resize', this.resize_listener);

	};

	MasterSlider.author  		= 'Averta Ltd. (www.averta.net)';
	MasterSlider.version 		= '2.50.0';
	MasterSlider.releaseDate 	= 'Aug 2016';

	// Master Slider plugins.
	MasterSlider._plugins = []
	var MS = MasterSlider;
	MS.registerPlugin = function ( plugin ) {
		if ( MS._plugins.indexOf(plugin) === -1 ) {
			MS._plugins.push(plugin);
		}
	};

	var p = MasterSlider.prototype;

	/*-------------- METHODS --------------*/

	/**
	 * create one slide object for each slide and add it to slide controller
	 * @since 1.0
	 * @private
	 */
	p.__setupSlides = function(){
		var that = this,
			new_slide,
			ind = 0;

		this.$element.children('.ms-slide').each(function(index) {

			var $slide_ele = $(this);

			new_slide 			= new MSSlide();
			new_slide.$element 	= $slide_ele;
			new_slide.slider 	= that;
			new_slide.delay  	= $slide_ele.data('delay') 		!== undefined ? $slide_ele.data('delay') 		: 3;
			new_slide.fillMode 	= $slide_ele.data('fill-mode')	!== undefined ? $slide_ele.data('fill-mode') 	: that.options.fillMode;
			new_slide.index 	= ind++;
            new_slide.id        = $slide_ele.data('id');

			// Slide Background Image
			var slide_img = $slide_ele.children('img:not(.ms-layer)');
			if( slide_img.length > 0 ){
				new_slide.setBG(slide_img[0]);
			}

			// Slide Video Background
			var slide_video = $slide_ele.children('video');
			if( slide_video.length > 0 ) new_slide.setBGVideo(slide_video);
			// controls
			if(that.controls){
				for(var i = 0 , l = that.controls.length; i<l ; ++i)
					that.controls[i].slideAction(new_slide);
			}

			// Slide Link and Video
			var slide_link = $slide_ele.children('a').each(function(index) {
			  var $this = $(this);
			  if(this.getAttribute('data-type') === 'video'){
				new_slide.video = this.getAttribute('href');

				new_slide.videoAutoPlay = $this.data('autoplay');

				$this.remove();
			  }else if(!$this.hasClass('ms-layer')) {
				new_slide.link  = $(this);
				//new_slide.link_targ = this.getAttribute('target');
				//$this.remove();
			  }
			});//.remove();

			// Slide Layers
            that.__createSlideLayers(new_slide , $slide_ele.find('.ms-layer'));
            that.slides.push(new_slide);
            that.slideController.view.addSlide(new_slide);

        });
    };

    /**
     * Setups the overlay layers to the slider
     * @since 2.50
     */
    p._setupOverlayLayers = function() {
        var self = this,
            $ollayers = this.$element.children( '.ms-overlay-layers' ).eq(0);

        if ( !$ollayers.length ) {
            return;
        }

        var overlayLayers = new MSOverlayLayers( this );
        overlayLayers.$element = $ollayers;
        self.__createSlideLayers(overlayLayers , $ollayers.find('.ms-layer'));

        this.view.$element.prepend( $ollayers );
        this.overlayLayers = overlayLayers;
        overlayLayers.create();
    };

	/**
	 * Creates layers of specified layer
	 * @param  {MSSlide} slide
	 * @param  {Array} layers
	 * @since 1.0
	 * @private
	 */
	p.__createSlideLayers = function(slide , layers) {
		if(layers.length == 0) return;
		slide.setupLayerController();

		layers.each(function(index , domEle){
			var $layer_element = $(this),
				$parent_ele;

			if( domEle.nodeName === 'A' && $layer_element.find('>img').data('type') === 'image' ) {
				$parent_ele = $(this);
				$layer_element = $parent_ele.find('img');
			}

			var layer = new (LayerTypes[$layer_element.data('type') || 'text']) ();
			layer.$element      = $layer_element;
			layer.link          = $parent_ele;
            layer.id            = layer.$element.data('id');
            layer.waitForAction = layer.$element.data('wait');
            layer.masked        = layer.$element.data('masked');
            layer.maskWidth     = layer.$element.data('mask-width');
            layer.maskHeight    = layer.$element.data('mask-height');

            var eff_parameters = {},
                end_eff_parameters = {};

            if($layer_element.data('effect')    !== undefined)      eff_parameters.name             = $layer_element.data('effect');
            if($layer_element.data('ease')      !== undefined)      eff_parameters.ease             = $layer_element.data('ease');
            if($layer_element.data('duration')  !== undefined)      eff_parameters.duration         = $layer_element.data('duration');
            if($layer_element.data('delay')     !== undefined)      eff_parameters.delay            = $layer_element.data('delay');

            if($layer_element.data('hide-effect'))                  end_eff_parameters.name         = $layer_element.data('hide-effect');
            if($layer_element.data('hide-ease'))                    end_eff_parameters.ease         = $layer_element.data('hide-ease');
            if($layer_element.data('hide-duration') !== undefined)  end_eff_parameters.duration     = $layer_element.data('hide-duration');
            if($layer_element.data('hide-time')     !== undefined)  end_eff_parameters.time         = $layer_element.data('hide-time');


			layer.setStartAnim(eff_parameters);
			layer.setEndAnim(end_eff_parameters);

			slide.layerController.addLayer(layer);

		});

	};
	/**
	 * remove slider initialize loading
	 * @since 1.0
	 * @private
	 */
	p._removeLoading = function(){
		$(window).unbind('resize', this.resize_listener);
		this.$element.removeClass('before-init')
					.css('visibility', 'visible')
					.css('height','')
					.css('opacity' , 0);
		CTween.fadeIn(this.$element);
		this.$loading.remove();

		if(this.slideController)
			this.slideController.__resize();
	};

	/**
	 * resize listener, it only used for aligning slider loading and after slider init it will be removed
	 * @param  {Event} e
	 * @since 1.0
	 * @private
	 */
	p._resize = function(e){
		if(this.$loading){
			var h = this.$loading[0].clientWidth / this.aspect;
			h = this.options.heightLimit ? Math.min(h , this.options.height) : h;

			this.$loading.height(h);
			this.$element.height(h);
		}
	};

	/**
	 * changes the order of slides element before setup slides
	 * @since 1.0
	 * @private
	 */
	p._shuffleSlides = function(){
		var slides = this.$element.children('.ms-slide') , r;

		for(var i = 0 , l = slides.length; i < l ; ++i){
			r = Math.floor(Math.random() * (l - 1));
			if(i != r){
				this.$element[0].insertBefore(slides[i] , slides[r]);
				slides = this.$element.children('.ms-slide');
			}
		}
	};

	/**
	 * New method of setting up the layout of slider
	 * @since 1.5.6
	 */
	p._setupSliderLayout = function(){

		// create side spaces
		this._updateSideMargins();
		this.lastMargin = this.leftSpace;

		var lo = this.options.layout;


		if( lo !== 'boxed' && lo !== 'partialview' ){
			this.options.fullwidth = true;  // enable slider fullscreen for fullwidth, fillwidth, autofill and fullscreen layouts.
		}
		if( lo === 'fullscreen' || lo === 'autofill' ){
			this.options.fullheight = true;

			if ( lo === 'autofill' ) {
				this.$autofillTarget = $(this.options.autofillTarget);
				if ( this.$autofillTarget.length === 0 ) {
					this.$autofillTarget = this.$element.parent();
				}
			}

		}

		// partial view
		if ( lo === 'partialview' ){
			this.$element.addClass('ms-layout-partialview');
		}
		if( lo === 'fullscreen' ||  lo === 'fullwidth' || lo === 'autofill' ){
			$(window).bind('resize', {that:this}, this._updateLayout);
			this._updateLayout();
		}

		// bind resize handler of slidecontroller __resize
		$(window).bind('resize', this.slideController.resize_listener);
	};

	/**
	 * updates layout of slider based on window size
	 * @param  {Event} event
	 * @since 1.5.6
	 */
	p._updateLayout = function(event){
		var that = event? event.data.that : this,
			lo = that.options.layout,
			$element = that.$element,
			$win = $(window);

		// height
		if( lo === 'fullscreen' ){
			document.body.style.overflow = 'hidden';
			$element.height( $win.height() - that.options.fullscreenMargin - that.topSpace - that.bottomSpace);
			document.body.style.overflow = '';
		} else if ( lo === 'autofill' ) {
			$element.height(that.$autofillTarget.height() - that.options.fullscreenMargin - that.topSpace - that.bottomSpace)
					.width(that.$autofillTarget.width() - that.leftSpace - that.rightSpace);
			return;
		}
		// width
		$element.width($win.width() - that.leftSpace - that.rightSpace);
		var margin = -$element.offset().left + that.leftSpace + that.lastMargin;
		$element.css('margin-left', margin );
		that.lastMargin = margin;
//
	};


	/**
	 * initialize the slider, called by document ready
	 * <code>holdOn</code> property prevents auto initialize slider after document ready it used by plugins of slider like Flickr
	 * @since 1.0
	 * @protected
	 */
	p._init = function(){

		if ( this._holdOn > 0 || !this._docReady ) {
			return;
		}

		this.initialized = true;

		if(this.options.preload !== 'all'){
			this._removeLoading();
		}
		//else
		//	this.$element.css('width' , this.$loading[0].clientWidth);

		if(this.options.shuffle) 	this._shuffleSlides();

		MSLayerEffects.setup();
		this.slideController.setupView();
		this.view = this.slideController.view;

		this.$controlsCont = $('<div></div>').addClass('ms-inner-controls-cont');//.appendTo(this.$element);
		if(this.options.centerControls){
			this.$controlsCont.css('max-width' , this.options.width + 'px');
		}

		this.$controlsCont.prepend(this.view.$element);

		this.$msContainer = $('<div></div>').addClass('ms-container').prependTo(this.$element).append(this.$controlsCont);

		if(this.controls){
			for(var i = 0 , l = this.controls.length; i<l ; ++i){
				this.controls[i].setup();
			}
		}
		/*else{
			this.$element.append(this.view.$element);
		}*/

		this._setupSliderLayout();
		this.__setupSlides();
		this.slideController.setup();
        this._setupOverlayLayers();

		if(this.controls){
			for(i = 0 , l = this.controls.length; i<l ; ++i)
				this.controls[i].create();
		}

		if(this.options.autoHeight){
			this.slideController.view.$element.height(this.slideController.currentSlide.getHeight());
		}

		// add grab cursor
		if(this.options.swipe && !window._touch && this.options.grabCursor && this.options.mouse){
			var $view = this.view.$element;

			$view.mousedown(function(){
				$view.removeClass('ms-grab-cursor');
				$view.addClass('ms-grabbing-cursor');

				if ( $.browser.msie && window.ms_grabbing_curosr ) {
					$view[0].style.cursor = 'url(' + window.ms_grabbing_curosr + '), move';
				}

			}).addClass('ms-grab-cursor');

			$(document).mouseup(function(){
				$view.removeClass('ms-grabbing-cursor');
				$view.addClass('ms-grab-cursor');

				if ( $.browser.msie && window.ms_grab_curosr ) {
					$view[0].style.cursor = 'url(' + window.ms_grab_curosr + '), move';
				}

			});
		}

		this.slideController.__dispatchInit();
	};

	/**
	 * changes the height of slider, it used in autoheight slider
	 * @param {Number} value
	 * @since 1.0
	 * @public
	 */
	p.setHeight = function(value){
		if(this.options.smoothHeight){
			if(this.htween){
				if(this.htween.reset)this.htween.reset();
				else	 			 this.htween.stop(true);
			}
			this.htween = CTween.animate(this.slideController.view.$element , 500 , {height:value} , {ease:'easeOutQuart'});
		}else
			this.slideController.view.$element.height(value);
	};

	/**
	 * reserves white space in sides of slider, it used by controls
	 * @param  {String} side  left|right|top|bottom
	 * @param  {Number} space
	 * @returns {Number} start position in space.
	 * @since 1.5.7
	 * @public
	 */
	p.reserveSpace = function(side, space){
		var sideSpace = side+'Space',
			pos = this[sideSpace];

		this[sideSpace] += space;

		this._updateSideMargins();

		return pos;
	};

	/**
	 * returns the reserved space, it used by controls and called when aligned control hides
	 * @param  {String} side
	 * @param  {Number} space
	 * @since 1.5.7
	 * @public
	 */
	/*p.returnSpace = function(side, space){
		var sideSpace = side+'Space';
		this[sideSpace] = Math.max(0 , this[sideSpace] - space);

		this.api.dispatchEvent(new MSSliderEvent(MSSliderEvent.RESERVED_SPACE_CHANGE));
		this._updateSideMargins();
	};*/

	p._updateSideMargins = function(){
		this.$element.css('margin', this.topSpace + 'px ' + this.rightSpace + 'px ' + this.bottomSpace + 'px ' + this.leftSpace + 'px');
	}

	p._realignControls = function(){
		this.rightSpace = this.leftSpace = this.topSpace = this.bottomSpace = 0;
		this._updateSideMargins();
		this.api.dispatchEvent(new MSSliderEvent(MSSliderEvent.RESERVED_SPACE_CHANGE));
	};

	/*------------------------- Public Methods -----------------------*/

	/**
	 * Adds new control to the slider
	 * @param  {String} control
	 * @param  {Object} options [description]
	 * @since 1.0
	 * @public
	 */
	p.control = function(control , options){
		if(!(control in MSSlideController.SliderControlList)) return;
		if(!this.controls) this.controls = [];
		var ins = new MSSlideController.SliderControlList[control](options);
		ins.slider = this;
		this.controls.push(ins);

		return this;
	};

	/**
	 * Hold on slider from initialization
	 * @since 2.9.6
	 * @public
	 */
	p.holdOn = function () {
		this._holdOn ++;
	};

	/**
	 * Let the slider to initialize
	 * @since 2.9.6
	 */
	p.release = function () {
		this._holdOn --;
		this._init();
	};

	/**
	 * setup slider
	 * @param  {String|jQuery object} id
	 * @param  {Object} options
	 * @since 1.0
	 * @public
	 */
	p.setup = function(target , options){
		if(typeof target === 'string'){
			this.$element = $('#' + target);
		} else {
			this.$element = target.eq(0);
		}

		//create a copy from slider markup, it will be used in destroy method.
		this.setupMarkup = this.$element.html();

		if( this.$element.length === 0 ){
			//if(console) console.log('Master Slider Error: #'+id+' not found.');
			return;
		}

		this.$element.addClass('master-slider').addClass('before-init');

		// IE prefix class
		// add browser prefix class name
		if($.browser.msie){
			this.$element.addClass('ms-ie')
						 .addClass('ms-ie' + $.browser.version.slice(0 , $.browser.version.indexOf('.')));
		} else if ( $.browser.webkit ) {
			this.$element.addClass('ms-wk');
		} else if ( $.browser.mozilla ) {
			this.$element.addClass('ms-moz');
		}


		// Android prefix class
		var ua = navigator.userAgent.toLowerCase();
		var isAndroid = ua.indexOf("android") > -1;
		if(isAndroid) {
		  this.$element.addClass('ms-android');
		}

		var that = this;
		$.extend(this.options, options);

		this.aspect = this.options.width / this.options.height;

		this.$loading = $('<div></div>').
						addClass('ms-loading-container').
						insertBefore(this.$element).
						append($('<div></div>').addClass('ms-loading'));

		this.$loading.parent().css('position' , 'relative');

		// old methods
		if(this.options.autofill){
			this.options.fullwidth = true;
			this.options.fullheight = true;
		}

		if(this.options.fullheight){
			this.$element.addClass('ms-fullheight');
		}

		//this._setupSliderLayout();
		this._resize();

		// define slide controller and api
		this.slideController = new MSSlideController(this);
		this.api = this.slideController;

		// setup plugins
		for ( var i = 0, l = MS._plugins.length; i !== l; i++ ) {
			var plugin = MS._plugins[i];

			if ( this.options.disablePlugins.indexOf(plugin.name) === -1 ) {
				this.activePlugins.push(new plugin(this));
			}
		}

        if ( this.options.forceInit ) {
            MasterSlider.addJQReadyErrorCheck( this );
        }

		$(document).ready(function(){
            if ( !that.initialized ) {
    			that._docReady = true;
    			that._init();
            }
		});

		return this;
	};

	/**
	 * destroy the slider instance
	 * @param  {Boolean} insertMarkup	 whether add slider markup after destroy.
	 * @since 1.4
	 * @public
	 */
	p.destroy = function(insertMarkup){

		// destroy active plugins
		for ( var i = 0, l = this.activePlugins.length; i !== l; i++ ) {
			this.activePlugins[i].destroy();
		}

		if(this.controls){
			for( i = 0, l = this.controls.length; i !== l; i++ )
				this.controls[i].destroy();
		}

		if(this.slideController) this.slideController._destroy();

		if(this.$loading) this.$loading.remove();

		if ( insertMarkup ) {
			this.$element.html(this.setupMarkup).css('visibility' , 'hidden');
		} else {
			this.$element.remove();
		}

		var lo = this.options.layout;
		if( lo === 'fullscreen' ||  lo === 'fullwidth' ){
			$(window).unbind('resize', this._updateLayout);
		}

		this.view = null;
		this.slides = null;
		this.options = null;
		this.slideController = null;
		this.api = null;
		this.resize_listener = null;


		this.activePlugins = null;
	};

})(jQuery);

/**
 * Master Slider jQuery Plugin
 * @author Averta
 */
(function ( $, window, document, undefined ) {

		var pluginName = "masterslider",
			defaults = {
				controls:{}
			};

		function MasterSliderPlugin ( element, options ) {
			this.element = element;
			this.$element = $(element);
			this.settings = $.extend( {}, defaults, options );
			this._defaults = defaults;
			this._name = pluginName;
			this.init();
		}

		$.extend(MasterSliderPlugin.prototype, {
			init : function () {

				var self = this;

				// create new instance form Master Slider
				this._slider = new MasterSlider();

				// add controls
				for ( var control in this.settings.controls ){
					this._slider.control(control, this.settings.controls[control]);
				}

				this._slider.setup(this.$element, this.settings);

				// override api eventdisaptcher method
				var _superDispatch = this._slider.api.dispatchEvent;
				this._slider.api.dispatchEvent = function(event){
					self.$element.trigger(event.type);
					_superDispatch.call(this, event);
				};

			},

			api : function() {
				return this._slider.api;
			},

			slider : function() {
				return this._slider;
			}

		});

		$.fn[pluginName] = function ( options ) {
			var args = arguments,
				plugin = 'plugin_' + pluginName;

			// Is the first parameter an object (options), or was omitted,
			// instantiate a new instance of the plugin.
			if (options === undefined || typeof options === 'object') {
				return this.each(function () {

					// Only allow the plugin to be instantiated once,
					// so we check that the element has no plugin instantiation yet
					if (!$.data(this, plugin)) {
						$.data(this, plugin, new MasterSliderPlugin( this, options ));
					}
				});

			// If the first parameter is a string and it doesn't start
			// with an underscore or "contains" the `init`-function,
			// treat this as a call to a public method.
			} else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {

				// Cache the method call
				// to make it possible
				// to return a value
				var returns;

				this.each(function () {
					var instance = $.data(this, plugin);

					// Tests that there's already a plugin-instance
					// and checks that the requested public method exists
					if (instance instanceof MasterSliderPlugin && typeof instance[options] === 'function') {

						// Call the method of our plugin instance,
						// and pass it the supplied arguments.
						returns = instance[options].apply( instance, Array.prototype.slice.call( args, 1 ) );
					}

					// Map slider api functions to slider jq plugin
					if ( instance instanceof MasterSliderPlugin && typeof instance._slider.api[options] === 'function' ) {
						returns = instance._slider.api[options].apply( instance._slider.api, Array.prototype.slice.call( args, 1 ) );
					}

					// Allow instances to be destroyed via the 'destroy' method
					if (options === 'destroy') {
					  $.data(this, plugin, null);
					}
				});

				// If the earlier cached method
				// gives a value back return the value,
				// otherwise return this to preserve chainability.
				return returns !== undefined ? returns : this;
			}
		};

})( jQuery, window, document );

;(function ( $, window, document, undefined ) {
    "use strict";

    /* ------------------------------------------------------------------------------ */

    var sliderInstances = [];
    MasterSlider.addJQReadyErrorCheck = function ( slider ) {
        sliderInstances.push( slider );
    };

    var _ready = $.fn.ready,
        _onerror = window.onerror;

    // override jQuery ready
    $.fn.ready = function() {

        // override window on load event
        window.onerror = function() {

            if ( sliderInstances.length !== 0 ) {
                for ( var i = 0, l = sliderInstances.length; i !== l; i++ ) {
                    var slider = sliderInstances[i];
                    if ( !slider.initialized ) {
                        slider._docReady = true;
                        slider._init();
                    }
                }
            }

            if ( _onerror ) {
                return _onerror.apply( this, arguments );
            }

            return false;
        }

        return _ready.apply( this, arguments );
    };

})(jQuery, window, document);

/* ================== bin-debug/js/pro/views/ViewEvents.js =================== */
window.MSViewEvents = function (type, data){
	this.type = type;
	this.data = data;
};

MSViewEvents.SWIPE_START      	= 'swipeStart';
MSViewEvents.SWIPE_END       	= 'swipeEnd';
MSViewEvents.SWIPE_MOVE			= 'swipeMove';
MSViewEvents.SWIPE_CANCEL   	= 'swipeCancel';
MSViewEvents.SCROLL 			= 'scroll';
MSViewEvents.CHANGE_START   	= 'slideChangeStart';
MSViewEvents.CHANGE_END	     	= 'slideChangeEnd';

/* ================== bin-debug/js/pro/views/BasicView.js =================== */
;(function($){

	"use strict";

	window.MSBasicView = function(options){

		this.options = {
			loop 			: false,
			dir  			: 'h',
			autoHeight 		: false,
			spacing			: 5,
			mouseSwipe		: true,
			swipe			: true,
			speed			: 17,
			minSlideSpeed	: 2,
			viewNum			: 20,
			critMargin		: 1
		};

		$.extend(this.options , options);

		this.dir		= this.options.dir;
		this.loop   	= this.options.loop;
		this.spacing	= this.options.spacing;

		this.__width  = 0;
		this.__height = 0;

		this.__cssProb 		= this.dir === 'h' ? 'left'    : 'top';
		this.__offset 		= this.dir === 'h' ? 'offsetLeft' : 'offsetTop';
		this.__dimension    = this.dir === 'h' ? '__width' : '__height';

		this.__translate_end	= window._css3d ? ' translateZ(0px)' : '';

		this.$slideCont	= $('<div></div>').addClass('ms-slide-container');
		this.$element 	= $('<div></div>').addClass('ms-view').addClass('ms-basic-view').append(this.$slideCont);

		this.currentSlide 	= null;
		this.index 			= -1;
		this.slidesCount	= 0;

		this.slides			= [];
		this.slideList		= []; // All of slides with added priority sort;
		this.viewSlidesList = [];

		this.css3 			= window._cssanim;
		this.start_buffer = 0;
		this.firstslide_snap = 0;

		this.slideChanged 	= false;

		this.controller 	 = new Controller(0 , 0 , {
			snapping	     : true,
			snapsize		 : 100,
			paging			 : true,
			snappingMinSpeed : this.options.minSlideSpeed,
			friction		 : (100 - this.options.speed * 0.5) / 100,
			endless			 : this.loop
		});

		this.controller.renderCallback(this.dir === 'h'? this._horizUpdate : this._vertiUpdate , this);
		this.controller.snappingCallback(this.__snapUpdate , this);
		this.controller.snapCompleteCallback(this.__snapCompelet , this);

		averta.EventDispatcher.call(this);
	};

	var p = MSBasicView.prototype;

	/*-------------- METHODS --------------*/

	p.__snapCompelet = function(snap , type){
		// if(this.loop && Math.abs(this.__contPos) > 20000){
		// 	this.__locateSlides();
		// 	this.gotoSlide(this.index , true);
		// }
		//

		if ( !this.slideChanged ) {
			return;
		}

		this.slideChanged = false;

		this.__locateSlides();
		this.start_buffer = 0;
		this.dispatchEvent(new MSViewEvents(MSViewEvents.CHANGE_END));
	};

	p.__snapUpdate = function(controller , snap , change){

		if(this.loop){
			var target_index = this.index + change;
			this.updateLoop(target_index);

			if(target_index >= this.slidesCount)	target_index = target_index - this.slidesCount;
			if(target_index <  0)					target_index = this.slidesCount + target_index;

			this.index = target_index;
		}else{
			if(snap < 0 ||  snap >= this.slidesCount) return
			this.index = snap;
		}

		this._checkCritMargins();

		if($.browser.mozilla){
			this.slideList[this.index].$element[0].style.marginTop 	= '0.1px';
			if(this.currentSlide){
				this.currentSlide.$element[0].style.marginTop 	= '';
			}
		}
		var new_slide = this.slideList[this.index];
		if(new_slide === this.currentSlide)return;
		this.currentSlide = new_slide;

		if ( this.autoUpdateZIndex ) {
			this.__updateSlidesZindex();
		}

		this.slideChanged = true;
		this.dispatchEvent(new MSViewEvents(MSViewEvents.CHANGE_START));
	};


	p._checkCritMargins = function(){
		if(this.normalMode) return;

		var hlf 	= Math.floor(this.options.viewNum / 2),
			inView 	= this.viewSlidesList.indexOf(this.slideList[this.index]),
			size 	= (this[this.__dimension] + this.spacing),
			cm 		= this.options.critMargin;

		if(this.loop){
			if(inView <= cm || inView >= this.viewSlidesList.length - cm){
				size *= (inView - hlf);
				this.__locateSlides(false ,  size + this.start_buffer );
				this.start_buffer += size;
			}

			return;
		}

		if( (inView < cm && this.index >= cm ) || (inView >= this.viewSlidesList.length - cm && this.index < this.slidesCount - cm)){
			this.__locateSlides(false);
		}

	};


	p._vertiUpdate = function(controller , value){

		this.__contPos = value;
		this.dispatchEvent(new MSViewEvents(MSViewEvents.SCROLL));

		if(this.css3){
			this.$slideCont[0].style[window._jcsspfx + 'Transform'] = 'translateY('+-value+'px)' + this.__translate_end;
			return;
		}

		this.$slideCont[0].style.top = -value + 'px';

	};

	p._horizUpdate = function(controller , value){

		this.__contPos = value;
		this.dispatchEvent(new MSViewEvents(MSViewEvents.SCROLL));

		if(this.css3) {
			this.$slideCont[0].style[window._jcsspfx + 'Transform'] = 'translateX('+-value+'px)'+ this.__translate_end;
			return;
		}

		this.$slideCont[0].style.left = -value + 'px';

	};


	p.__updateViewList = function(){

		if(this.normalMode) {
			this.viewSlidesList = this.slides;
			return;
		}

		var temp = this.viewSlidesList.slice();

		// update view list
		this.viewSlidesList = [];
		var i = 0 , hlf = Math.floor(this.options.viewNum / 2) , l;

		if(this.loop){
			for(; i !== this.options.viewNum ; i++)
				this.viewSlidesList.push(this.slides[this.currentSlideLoc - hlf + i]);
		}else{
			// before
			for(i = 0 ; i !== hlf && this.index - i !== -1 ; i++)
				this.viewSlidesList.unshift(this.slideList[this.index - i]);
			// after
			for(i = 1; i !== hlf && this.index + i !== this.slidesCount; i++)
				this.viewSlidesList.push(this.slideList[this.index + i]);
		}

		for (i = 0 , l = temp.length ; i !== l ; i++)
			if( this.viewSlidesList.indexOf(temp[i]) === -1)
				temp[i].sleep();

		temp = null;

		if( this.currentSlide ) {
			this.__updateSlidesZindex();
		}
	};

	p.__locateSlides = function(move , start){

		this.__updateViewList();

		start = !this.loop ? this.slides.indexOf(this.viewSlidesList[0]) * (this[this.__dimension] + this.spacing ) : start || 0;

		// old method
		/*for(i = 0; i < this.slidesCount ; ++i){
			var pos =  i * (this[this.__dimension] + this.spacing);

			this.slides[i].position = pos;
			this.slides[i].$element[0].style[this.__cssProb] =  pos + 'px';
		}*/

		var l = this.viewSlidesList.length , slide;

		for(var i = 0; i !== l ; i++){
			var pos =  start + i * (this[this.__dimension] + this.spacing );
			slide = this.viewSlidesList[i];
			slide.wakeup();
			slide.position = pos;
			slide.$element[0].style[this.__cssProb] =  pos + 'px';
		}

		if(move !== false)this.controller.changeTo( this.slideList[this.index].position , false , null , null , false);

	};

	p.__createLoopList = function(){
		var return_arr = [];
		var i = 0,
			count = this.slidesCount / 2;

		var before_count  = (this.slidesCount % 2 === 0)? count - 1	: Math.floor(count);
		var after_count	  = (this.slidesCount % 2 === 0)? count 	: Math.floor(count);

		this.currentSlideLoc = before_count;

		// before
		for(i = 1 ; i <= before_count ; ++i)
			return_arr.unshift(this.slideList[(this.index - i < 0)? this.slidesCount -  i + this.index: this.index - i]);

		// current
		return_arr.push(this.slideList[this.index]);

		// after
		for(i = 1; i <= after_count; ++i)
			return_arr.push(this.slideList[(this.index + i >= this.slidesCount)? this.index + i - this.slidesCount : this.index + i]);

		return return_arr;

	};

	/*
	 * Calculate shortest distance from index to target.
	 * It will used in loop gesture.
	 *
	 * Negative values means left direction.
	 */

	p.__getSteps = function(index , target){
		var right = (target < index)?  this.slidesCount - index + target : target - index;
		var left  = Math.abs(this.slidesCount - right);

		return (right < left)? right : -left;
	};

	p.__pushEnd = function(){
		var first_slide = this.slides.shift();
		var last_slide = this.slides[this.slidesCount - 2];

		this.slides.push(first_slide);

		if(!this.normalMode) return;

		var pos = last_slide.$element[0][this.__offset] + this.spacing + this[this.__dimension];
		first_slide.$element[0].style[this.__cssProb] = pos + 'px';
		first_slide.position = pos;
	};

	p.__pushStart = function(){
		var last_slide =  this.slides.pop();
		var first_slide = this.slides[0];

		this.slides.unshift(last_slide);

		if(!this.normalMode) return;

		var pos = first_slide.$element[0][this.__offset] - this.spacing - this[this.__dimension];
		last_slide.$element[0].style[this.__cssProb] = pos + 'px';
		last_slide.position = pos;
	};

	// @since 1.7.0
	// adds z-index to slides
	p.__updateSlidesZindex = function(){


		var slide,
			l = this.viewSlidesList.length,
			hlf = Math.floor( l/2 );

		if( this.loop ){
			var loc = this.viewSlidesList.indexOf(this.currentSlide);
			for ( var i = 0; i!==l; i++ ){
				slide = this.viewSlidesList[i];
				this.viewSlidesList[i].$element.css('z-index', i<=loc ? i+1 : l-i);
			}
		} else {

			var beforeNum = this.currentSlide.index - this.viewSlidesList[0].index,
				afterNum = l - beforeNum,
				diff = beforeNum - afterNum;

			for ( var i = 0; i!==l; i++ ){
				this.viewSlidesList[i].$element.css('z-index', i<=beforeNum ? i+1 : l-i);
			}

			this.currentSlide.$element.css('z-index', l);
		}

	};

	p.addSlide = function(slide){
		slide.view = this;
		this.slides.push(slide);
		this.slideList.push(slide);
		this.slidesCount++;
	};

	p.appendSlide = function(slide){
		this.$slideCont.append(slide.$element);
	};

	p.updateLoop = function(index){
		if(this.loop){
			var steps = this.__getSteps(this.index , index);

			for(var i = 0 , l = Math.abs(steps) ; i < l ; ++ i){
				if(steps < 0) 	this.__pushStart();
				else			this.__pushEnd();
			}
		}
	};

	p.gotoSlide = function(index , fast){
		this.updateLoop(index);
		this.index = index;

		var target_slide = this.slideList[index];

		this._checkCritMargins();

		this.controller.changeTo( target_slide.position , !fast , null , null , false);
		if(target_slide === this.currentSlide) return;
		this.slideChanged = true;
		this.currentSlide = target_slide;

		if ( this.autoUpdateZIndex ) {
			this.__updateSlidesZindex();
		}

		this.dispatchEvent(new MSViewEvents(MSViewEvents.CHANGE_START));
		if(fast)this.dispatchEvent(new MSViewEvents(MSViewEvents.CHANGE_END));
	};

	p.next = function(checkLoop){
		if ( checkLoop && !this.loop && this.index + 1 >= this.slidesCount ) {
			this.controller.bounce(10);
			return;
		}

		this.gotoSlide((this.index + 1 >= this.slidesCount)? 0 : this.index + 1);
	};

	p.previous = function(checkLoop){
		if ( checkLoop && !this.loop && this.index - 1 < 0 ) {
			this.controller.bounce(-10);
			return;
		}

		this.gotoSlide((this.index - 1 < 0)? this.slidesCount - 1 : this.index - 1);
	};

	/* --------------- Swipe control ------------------*/

	p.setupSwipe = function(){

		this.swipeControl = new averta.TouchSwipe(this.$element);
		this.swipeControl.swipeType = this.dir === 'h'? 'horizontal' : 'vertical';
		var that = this;

		if(this.dir === 'h'){
			this.swipeControl.onSwipe = function(status){
				that.horizSwipeMove(status);
			};
		}else{
			this.swipeControl.onSwipe = function(status){
				that.vertSwipeMove(status);
			};
		}

	};

	p.vertSwipeMove = function(status){
		var phase = status.phase;
		if(phase === 'start'){
			this.controller.stop();
			this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_START, status));
		}else if(phase === 'move' && (!this.loop || Math.abs(this.currentSlide.position - this.controller.value + status.moveY ) < this.cont_size / 2)){
			this.controller.drag(status.moveY);
			this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_MOVE, status));
		}else if(phase === 'end' || phase === 'cancel'){

            var speed = status.distanceY / status.duration * 50/3,
			    speedh = Math.abs( status.distanceY / status.duration * 50/3 );

			if ( Math.abs(speed) > 0.1 && Math.abs(speed) >= speedh ){
				this.controller.push(-speed);
				if(speed > this.controller.options.snappingMinSpeed)
				this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_END, status));
			}else {
				this.controller.cancel();
				this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_CANCEL, status));
			}

		}
	};

	p.horizSwipeMove = function(status){
		var phase = status.phase;

		if(phase === 'start'){
			this.controller.stop();
			this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_START, status));
		}else if(phase === 'move' && (!this.loop || Math.abs(this.currentSlide.position - this.controller.value + status.moveX ) < this.cont_size / 2)){
			this.controller.drag(status.moveX);
			this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_MOVE, status));
		}else if(phase === 'end' || phase === 'cancel'){

			var speed = status.distanceX / status.duration * 50/3,
                speedv = Math.abs( status.distanceY / status.duration * 50/3 );

			if ( Math.abs(speed) > 0.1 && Math.abs(speed) >= speedv ) {
				this.controller.push(-speed );
				if(speed > this.controller.options.snappingMinSpeed)
				this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_END, status));
			}else{
				this.controller.cancel();
				this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_CANCEL, status));
			}

		}
	};

	/* ------------------------------------------------*/

	p.setSize = function(width , height , hard){
		if(this.lastWidth === width && height === this.lastHeight && !hard) return;

		this.$element.width(width).height(height);

		for(var i = 0; i < this.slidesCount ; ++i)
				this.slides[i].setSize(width , height , hard);

		this.__width 	= width;
		this.__height 	= height;

		if(this.__created){
			this.__locateSlides();

			this.cont_size = (this.slidesCount - 1) * (this[this.__dimension] + this.spacing);
			if(!this.loop) 	this.controller._max_value = this.cont_size;

			this.controller.options.snapsize = this[this.__dimension] + this.spacing;
			this.controller.changeTo(this.currentSlide.position , false , null , null , false );
			this.controller.cancel();

			this.lastWidth = width;
			this.lastHeight = height;
		}
	};

	p.create = function(index){

		this.__created = true;

		this.index = Math.min((index || 0), this.slidesCount - 1);
		this.lastSnap = this.index; // it will be used to check snap changed or not on snap complete

		if(this.loop)
			this.slides = this.__createLoopList();

		this.normalMode = this.slidesCount <= this.options.viewNum;

		for(var i = 0; i < this.slidesCount ; ++i)
			this.slides[i].create();

		this.__locateSlides();

		this.controller.options.snapsize = this[this.__dimension] + this.spacing;
		if(!this.loop)	this.controller._max_value = (this.slidesCount - 1) * (this[this.__dimension] + this.spacing);

		this.gotoSlide(this.index , true);

		if(this.options.swipe && (window._touch || this.options.mouseSwipe))
			this.setupSwipe();

	};

	p.destroy = function(){
		if(!this.__created) return;

		for(var i = 0; i < this.slidesCount ; ++i)
			this.slides[i].destroy();

		this.slides = null;
		this.slideList = null;
		this.$element.remove();

		this.controller.destroy();
		this.controller = null;
	};

	averta.EventDispatcher.extend(p);

	MSSlideController.registerView('basic' , MSBasicView);

})(jQuery);

/* ================== bin-debug/js/pro/views/WaveView.js =================== */
;(function($){

	"use strict";

	window.MSWaveView = function(options){
		MSBasicView.call(this , options);
		this.$element.removeClass('ms-basic-view').addClass('ms-wave-view');
		this.$slideCont.css(window._csspfx + 'transform-style' , 'preserve-3d');

		// Auto update z index of slides
		// @since 1.7
		this.autoUpdateZIndex = true;
	};

	MSWaveView.extend(MSBasicView);
	MSWaveView._3dreq = true;
	MSWaveView._fallback = MSBasicView;

	var p  = MSWaveView.prototype;
	var _super  = MSBasicView.prototype;

	/*-------------- METHODS --------------*/

	/*p.__setSlideTransDuration = function(value){
		for(var i=0; i<this.slidesCount; ++i)
			this.slides[i].$element.css(window._csspfx + 'transition-duration' , value + 'ms');
	};*/

	p._horizUpdate = function(controller , value){

		_super._horizUpdate.call(this, controller , value);

		var cont_scroll = -value;
		var slide_pos , slide , distance;

		for(var i = 0; i < this.slidesCount; ++i){
			slide = this.slideList[i];
			//slide_pos = parseInt(slide.$element.css('left'));
			distance = -cont_scroll - slide.position;
			this.__updateSlidesHoriz(slide , distance);
		}

	};

	p._vertiUpdate = function(controller , value){

		_super._vertiUpdate.call(this, controller , value);

		var cont_scroll = -value;
		var slide_pos , slide , distance;

		for(var i = 0; i < this.slidesCount; ++i){
			slide = this.slideList[i];
			//slide_pos = parseInt(slide.$element.css('left'));
			distance = -cont_scroll - slide.position;
			this.__updateSlidesVertic(slide , distance);
		}

	};


	p.__updateSlidesHoriz = function(slide , distance){
		var value =  Math.abs(distance * 100 / this.__width);
		//var value2 = Math.min(value , 100);
	//	var sp = Math.min(100 , )
		//slide.$bg_img.css('opacity' , (100 -  Math.abs(distance * 120 / this.__width / 3)) / 100);
		slide.$element.css(window._csspfx + 'transform' , 'translateZ('+ -value * 3 +'px) rotateY(0.01deg)'/* translateX('+(distance < 0 ? 1 : -1) * -value * 5+'px)'*/);
	};

	p.__updateSlidesVertic = function(slide , distance){
		this.__updateSlidesHoriz(slide , distance);
	};

	/*
	p.swipeMove = function(status){

		if(status.phase == 'start'){
			this.__setSlideTransDuration(0);
		}else if(status.phase == 'end'){
			this.__setSlideTransDuration(this.__slideDuration);
		}

		_super.swipeMove.call(this , status);
	};

	p.create = function(index){
		_super.create.call(this , index);

		for(var i = 0; i<this.slidesCount ; ++i){
			this.slides[i].$element.css(window._csspfx + 'transition-property' , window._csspfx 		+ 'transform');
			this.slides[i].$element.css(window._csspfx + 'transition-duration' , this.slideDuration + 'ms');
		}
	};
	*/
	MSSlideController.registerView('wave' , MSWaveView);
})(jQuery);

/* ================== bin-debug/js/pro/views/FadeBasicView.js =================== */
/**
 * Master Slider Fade Basic view
 * @author averta
 * @version 1.1
 * @package MS
 */

;(function(){

	window.MSFadeBasicView = function(options){
		MSWaveView.call(this , options);
		this.$element.removeClass('ms-wave-view').addClass('ms-fade-basic-view');
	};

	MSFadeBasicView.extend(MSWaveView);

	var p = MSFadeBasicView.prototype;
	var _super = MSFadeBasicView.prototype;

	/*-------------- METHODS --------------*/

	p.__updateSlidesHoriz = function(slide , distance){
		var value =  Math.abs(distance * 0.6 / this.__width);
		value = 1 - Math.min(value , 0.6);
		slide.$element.css('opacity' , value);
	};

	p.__updateSlidesVertic = function(slide , distance){
		this.__updateSlidesHoriz(slide , distance);
	};

	MSSlideController.registerView('fadeBasic' , MSFadeBasicView);
	MSWaveView._fallback = MSFadeBasicView;
})();

/* ================== bin-debug/js/pro/views/FadeWaveView.js =================== */
/**
 * Master Slider Fade Wave View
 * @author averta
 * @version 1.0
 * @extends {MSWaveView}
 */
;(function(){

	window.MSFadeWaveView = function(options){
		MSWaveView.call(this , options);
		this.$element.removeClass('ms-wave-view').addClass('ms-fade-wave-view');
	};

	MSFadeWaveView.extend(MSWaveView);
	MSFadeWaveView._3dreq = true;
	MSFadeWaveView._fallback = MSFadeBasicView;

	var p = MSFadeWaveView.prototype;
	var _super = MSWaveView.prototype;

	/*-------------- METHODS --------------*/

	p.__updateSlidesHoriz = function(slide , distance){
		var value =  Math.abs(distance * 100 / this.__width);
		 value = Math.min(value , 100);
		slide.$element.css('opacity' , 1-value/300);
		slide.$element[0].style[window._jcsspfx + 'Transform'] = 'scale('+ (1 - value/800) +') rotateY(0.01deg) ';
	};

	p.__updateSlidesVertic = function(slide , distance){
		this.__updateSlidesHoriz(slide , distance);
	};

	MSSlideController.registerView('fadeWave' , MSFadeWaveView);

})();

/* ================== bin-debug/js/pro/views/FlowView.js =================== */
;(function($){

	"use strict";

	window.MSFlowView = function(options){
		MSWaveView.call(this , options);
		this.$element.removeClass('ms-wave-view').addClass('ms-flow-view');
		//this.$slideCont.css(window._csspfx + 'transform-style' , 'preserve-3d');
	};

	MSFlowView.extend(MSWaveView);
	MSFlowView._3dreq = true;
	MSFlowView._fallback = MSFadeBasicView;

	var p  = MSFlowView.prototype;
	var _super  = MSWaveView.prototype;

	/*-------------- METHODS --------------*/


	p.__updateSlidesHoriz = function(slide , distance){
		var value  =  Math.abs(distance * 100 / this.__width);
		var rvalue =  Math.min(value * 0.3 , 30) * (distance < 0 ? -1 : 1);
		var zvalue = value * 1.2;
		slide.$element[0].style[window._jcsspfx + 'Transform'] = 'translateZ('+ -zvalue*5 +'px) rotateY(' + rvalue + 'deg) ';
	};

	p.__updateSlidesVertic  = function(slide , distance){
		var value  =  Math.abs(distance * 100 / this.__width);
		var rvalue =  Math.min(value * 0.3 , 30) * (distance < 0 ? -1 : 1);
		var zvalue = value * 1.2;
		slide.$element[0].style[window._jcsspfx + 'Transform'] = 'translateZ('+ -zvalue*5 +'px) rotateX(' + -rvalue + 'deg) ';
	};


	MSSlideController.registerView('flow' , MSFlowView);
})(jQuery);

/* ================== bin-debug/js/pro/views/FadeFlowView.js =================== */
/**
 * Master Slider Fade Flow View
 * @author averta
 * @extends {MSWaveView}
 * @version 1.0
 */
;(function(){

	window.MSFadeFlowView = function(options){
		MSWaveView.call(this , options);
		this.$element.removeClass('ms-wave-view').addClass('ms-fade-flow-view');
	};

	MSFadeFlowView.extend(MSWaveView);
	MSFadeFlowView._3dreq = true;

	var p = MSFadeFlowView.prototype;
	var _super = MSWaveView.prototype;

	/*-------------- METHODS --------------*/

	p.__calculate = function(distance){
		var value = Math.min(Math.abs(distance * 100 / this.__width) , 100);
		var rvalue =  Math.min(value * 0.5 , 50) * (distance < 0 ? -1 : 1);
		return {value: value, rvalue: rvalue};
	};

	p.__updateSlidesHoriz = function(slide , distance){
		var clc = this.__calculate(distance);
		slide.$element.css('opacity' , 1-clc.value/300);
		console.log(window._jcsspfx + 'transform','translateZ('+ -clc.value +'px) rotateY(' + clc.rvalue + 'deg) ')
		slide.$element[0].style[window._jcsspfx + 'Transform'] = 'translateZ('+ -clc.value +'px) rotateY(' + clc.rvalue + 'deg) ';
	};

	p.__updateSlidesVertic = function(slide , distance){
		var clc = this.__calculate(distance);
		slide.$element.css('opacity' , 1-clc.value/300);
		slide.$element[0].style[window._jcsspfx + 'Transform'] = 'translateZ('+ -clc.value +'px) rotateX(' + -clc.rvalue + 'deg) ';
	};

	MSSlideController.registerView('fadeFlow' , MSFadeFlowView);

})();

/* ================== bin-debug/js/pro/views/MaskView.js =================== */
;(function($){

	"use strict";

	window.MSMaskView = function(options){
		MSBasicView.call(this , options);
		this.$element.removeClass('ms-basic-view').addClass('ms-mask-view');

	};

	MSMaskView.extend(MSBasicView);

	var p  = MSMaskView.prototype;
	var _super  = MSBasicView.prototype;

	/*-------------- METHODS --------------*/

	p.addSlide = function(slide){ // OK
		slide.view = this;

		slide.$frame = $('<div></div>').addClass('ms-mask-frame').append(slide.$element);
		slide.$element[0].style.position = 'relative';
		//this.$slideCont.append(slide.$frame);
		slide.autoAppend = false;

		this.slides.push(slide);
		this.slideList.push(slide);

		this.slidesCount++;
	};

	p.setSize = function(width , height){
		var slider = this.slides[0].slider;

		for(var i = 0; i < this.slidesCount ; ++i){
			this.slides[i].$frame[0].style.width  = width  + 'px';
			if(!slider.options.autoHeight)
				this.slides[i].$frame[0].style.height = height + 'px';
		}

		_super.setSize.call(this , width , height);
	};

	// p.__snapUpdate = function(controller , snap , change){

	// 	if(this.loop){
	// 		var target_index = this.index + change;
	// 		this.updateLoop(target_index);

	// 		if(target_index >= this.slidesCount)	target_index = target_index - this.slidesCount;
	// 		if(target_index <  0)					target_index = this.slidesCount + target_index;

	// 		this.index = target_index;
	// 	}else{
	// 		if(snap < 0 ||  snap >= this.slidesCount) return
	// 		this.index = snap;
	// 	}


	// 	this._checkCritMargins();

	// 	if($.browser.mozilla){

	// 		this.slideList[this.index].$frame[0].style.marginTop 	= '0.1px';
	// 		this.slideList[this.index].$element[0].style.marginTop 	= '0.1px';

	// 		if(this.currentSlide){
	// 			this.currentSlide.$frame[0].style.marginTop 	= '';
	// 			this.currentSlide.$element[0].style.marginTop 	= '';
	// 		}
	// 	}

	// 		var new_slide = this.slideList[this.index];
	// 	if(new_slide === this.currentSlide)return;

	// 	this.currentSlide = new_slide;
	// 	this.dispatchEvent(new MSViewEvents(MSViewEvents.CHANGE_START));
	// };

	p._horizUpdate = function(controller , value){

		_super._horizUpdate.call(this , controller , value);

		var i = 0;

		if(this.css3) {
			for(i = 0 ; i < this.slidesCount ; ++i){
				this.slideList[i].$element[0].style[window._jcsspfx + 'Transform'] = 'translateX('+(value - this.slideList[i].position)+'px)'+ this.__translate_end;
			}
			return;
		}

		for(i = 0 ; i < this.slidesCount ; ++i){
			this.slideList[i].$element[0].style.left = (value - this.slideList[i].position) + 'px';
		}

	};

	p._vertiUpdate = function(controller , value){

		_super._vertiUpdate.call(this , controller , value);

		var i = 0;

		if(this.css3) {
			for(i = 0 ; i < this.slidesCount ; ++i){
				this.slideList[i].$element[0].style[window._jcsspfx + 'Transform'] = 'translateY('+(value - this.slideList[i].position)+'px)'+ this.__translate_end;
			}
			return;
		}

		for(i = 0 ; i < this.slidesCount ; ++i){
			this.slideList[i].$element[0].style.top = (value - this.slideList[i].position) + 'px';
		}

	};

	p.__pushEnd = function(){ // OK
		var first_slide = this.slides.shift();
		var last_slide = this.slides[this.slidesCount - 2];

		this.slides.push(first_slide);
		if(!this.normalMode) return;

		var pos = last_slide.$frame[0][this.__offset] + this.spacing + this[this.__dimension];
		first_slide.$frame[0].style[this.__cssProb] = pos + 'px';
		first_slide.position = pos;
	};

	p.__pushStart = function(){ // OK

		var last_slide =  this.slides.pop();
		var first_slide = this.slides[0];

		this.slides.unshift(last_slide);

		if(!this.normalMode) return;

		var pos = first_slide.$frame[0][this.__offset] - this.spacing - this[this.__dimension];
		last_slide.$frame[0].style[this.__cssProb] = pos + 'px';
		last_slide.position = pos;
	};

	p.__updateViewList = function(){

			if(this.normalMode) {
			this.viewSlidesList = this.slides;
			return;
		}

		var temp = this.viewSlidesList.slice();

		// update view list
		this.viewSlidesList = [];
		var i = 0 , hlf = Math.floor(this.options.viewNum / 2) , l;

		if(this.loop){
			for(; i !== this.options.viewNum ; i++)
				this.viewSlidesList.push(this.slides[this.currentSlideLoc - hlf + i]);
		}else{
			// before
			for(i = 0 ; i !== hlf && this.index - i !== -1 ; i++)
				this.viewSlidesList.unshift(this.slideList[this.index - i]);
			// after
			for(i = 1; i !== hlf && this.index + i !== this.slidesCount; i++)
				this.viewSlidesList.push(this.slideList[this.index + i]);
		}

		for (i = 0 , l = temp.length ; i !== l ; i++){
			if( this.viewSlidesList.indexOf(temp[i]) === -1){
				temp[i].sleep();
				temp[i].$frame.detach();
			}
		}

		temp = null;
	};


	p.__locateSlides = function(move , start){ // OK

		this.__updateViewList();

		start = !this.loop ? this.slides.indexOf(this.viewSlidesList[0]) * (this[this.__dimension] + this.spacing ) : start || 0;

		// Old method
		// for(var i = 0; i < this.slidesCount ; ++i){
		// 	var pos =  i * (this[this.__dimension] + this.spacing);

		// 	this.slides[i].position = pos;
		// 	this.slides[i].$frame[0].style[this.__cssProb] =  pos + 'px';
		// }

		var l = this.viewSlidesList.length , slide;

		for(var i = 0; i !== l ; i++){
			var pos =  start + i * (this[this.__dimension] + this.spacing );
			slide = this.viewSlidesList[i];

			this.$slideCont.append(slide.$frame);
			slide.wakeup(false);
			slide.position = pos;

			if ( slide.selected && slide.bgvideo ) {
				try{
					slide.bgvideo.play();
				} catch (e) {}
			}

			slide.$frame[0].style[this.__cssProb] =  pos + 'px';
		}

		if(move !== false)this.controller.changeTo( this.slideList[this.index].position , false , null , null , false);

	};

	MSSlideController.registerView('mask' , MSMaskView);
})(jQuery);

/* ================== bin-debug/js/pro/views/ParallaxMaskView.js =================== */
;(function($){

	"use strict";

	window.MSParallaxMaskView = function(options){
		MSMaskView.call(this , options);
		this.$element.removeClass('ms-basic-view').addClass('ms-parallax-mask-view');

	};

	MSParallaxMaskView.extend(MSMaskView);
	MSParallaxMaskView.parallaxAmount = 0.5;

	var p  = MSParallaxMaskView.prototype;
	var _super  = MSBasicView.prototype;

	/*-------------- METHODS --------------*/

	p._horizUpdate = function(controller , value){
		_super._horizUpdate.call(this , controller , value);

		var i = 0;

		if(this.css3) {
			for(i = 0 ; i < this.slidesCount ; ++i){
				this.slideList[i].$element[0].style[window._jcsspfx + 'Transform'] = 'translateX('+(value - this.slideList[i].position) * MSParallaxMaskView.parallaxAmount +'px)'+ this.__translate_end;
			}
			return;
		}

		for(i = 0 ; i < this.slidesCount ; ++i){
			this.slideList[i].$element[0].style.left = (value - this.slideList[i].position) * MSParallaxMaskView.parallaxAmount  + 'px';
		}

	};

	p._vertiUpdate = function(controller , value){

		_super._vertiUpdate.call(this , controller , value);

		var i = 0;

		if(this.css3) {
			for(i = 0 ; i < this.slidesCount ; ++i){
				this.slideList[i].$element[0].style[window._jcsspfx + 'Transform'] = 'translateY('+(value - this.slideList[i].position) * MSParallaxMaskView.parallaxAmount +'px)'+ this.__translate_end;
			}
			return;
		}

		for(i = 0 ; i < this.slidesCount ; ++i){
			this.slideList[i].$element[0].style.top = (value - this.slideList[i].position) * MSParallaxMaskView.parallaxAmount  + 'px';
		}

	};


	MSSlideController.registerView('parallaxMask' , MSParallaxMaskView);
})(jQuery);

/* ================== bin-debug/js/pro/views/FadeView.js =================== */
;(function($){

	"use strict";

	window.MSFadeView = function(options){
		MSBasicView.call(this , options);
		this.$element.removeClass('ms-basic-view').addClass('ms-fade-view');
		this.controller.renderCallback(this.__update , this);
	};

	MSFadeView.extend(MSBasicView);

	var p  = MSFadeView.prototype;
	var _super  = MSBasicView.prototype;

	/*-------------- METHODS --------------*/

	p.__update = function(controller , value){
		var cont_scroll = -value;
		var slide_pos , slide , distance;

		for(var i = 0; i < this.slidesCount; ++i){
			slide = this.slideList[i];
			distance = -cont_scroll - slide.position;
			this.__updateSlides(slide , distance);
		}
	};

	p.__updateSlides = function(slide , distance){
		var value =  Math.abs(distance / this[this.__dimension]);
		if(1 - value <= 0){
			slide.$element.fadeTo(0 , 0).css('visibility' , 'hidden');
		}else{
			slide.$element.fadeTo(0 , 1 - value).css('visibility' , '');
		}
	};

	p.__locateSlides = function(move , start){

		this.__updateViewList();

		// Old method
		// for(var i = 0; i < this.slidesCount ; ++i){
		// 	this.slides[i].position = i * this[this.__dimension];
		// }

		start = !this.loop ? this.slides.indexOf(this.viewSlidesList[0]) * (this[this.__dimension] + this.spacing ) : start || 0;

		var l = this.viewSlidesList.length , slide;

		for(var i = 0; i !== l ; i++){
			var pos =  start + i * this[this.__dimension];
			slide = this.viewSlidesList[i];
			slide.wakeup();
			slide.position = pos;
		}

		if(move !== false)this.controller.changeTo( this.slideList[this.index].position , false , null , null , false);

	};

	p.__pushEnd = function(){
		var first_slide = this.slides.shift();
		var last_slide = this.slides[this.slidesCount - 2];
		this.slides.push(first_slide);
		first_slide.position = last_slide.position + this[this.__dimension];
	};

	p.__pushStart = function(){
		var last_slide =  this.slides.pop();
		var first_slide = this.slides[0];
		this.slides.unshift(last_slide);
		last_slide.position = first_slide.position - this[this.__dimension];
	};

	p.create = function(index){
		_super.create.call(this , index);
		this.spacing = 0;
		this.controller.options.minValidDist = 10;
	};

	MSSlideController.registerView('fade' , MSFadeView);
})(jQuery);

/* ================== bin-debug/js/pro/views/ScaleView.js =================== */
;(function($){

	"use strict";

	window.MSScaleView = function(options){
		MSBasicView.call(this , options);
		this.$element.removeClass('ms-basic-view').addClass('ms-scale-view');
		this.controller.renderCallback(this.__update , this);
	};

	MSScaleView.extend(MSFadeView);

	var p  = MSScaleView.prototype;
	var _super  = MSFadeView.prototype;

	/*-------------- METHODS --------------*/

	p.__updateSlides = function(slide , distance){
		var value =  Math.abs(distance / this[this.__dimension]),
			element = slide.$element[0];

		if(1 - value <= 0){
			element.style.opacity = 0;
			element.style.visibility = 'hidden';
			element.style[window._jcsspfx + 'Transform'] = '';
		}else{
			element.style.opacity = 1 - value;
			element.style.visibility = '';
			element.style[window._jcsspfx + 'Transform'] = 'perspective(2000px) translateZ('+(value* (distance < 0 ? -0.5 : 0.5)) * 300+'px)';
		}

	};

	p.create = function(index){
		_super.create.call(this , index);
		this.controller.options.minValidDist = 0.03;
	};

	MSSlideController.registerView('scale' , MSScaleView);
})(jQuery);

/* ================== bin-debug/js/pro/views/StackView.js =================== */
/**
 * Master Slider Stack View
 * @package Master Slider jQuery
 * @author Averta
 */

;(function($){

	"use strict";

	window.MSStackView = function(options){
		MSBasicView.call(this , options);
		this.$element.removeClass('ms-basic-view').addClass('ms-stack-view');
		this.controller.renderCallback(this.__update , this);
		this.autoUpdateZIndex = true;
	};

	MSStackView.extend(MSFadeView);
	MSStackView._3dreq = true;
	MSStackView._fallback = MSFadeView;

	var p  = MSStackView.prototype;
	var _super  = MSFadeView.prototype;

	/*-------------- METHODS --------------*/

	/**
	 * Updates slides z index
	 */
	p.__updateSlidesZindex = function () {
		var slide,
			l = this.viewSlidesList.length;

		for ( var i = 0; i!==l; i++ ){
			slide = this.viewSlidesList[i];
			this.viewSlidesList[i].$element.css('z-index', l-i);
		}

	};


	p.__updateSlides = function(slide , distance){
		var value =  Math.abs(distance / this[this.__dimension]),
			element = slide.$element[0];

		if(1 - value <= 0){
			element.style.opacity = 1;
			element.style.visibility = 'hidden';
			element.style[window._jcsspfx + 'Transform'] = '';
		}else{
			element.style.visibility = '';

			if ( distance < 0 ) {
				element.style[window._jcsspfx + 'Transform'] = 'perspective(2000px) translateZ('+ (value * -300) +'px)';
			} else {
				element.style[window._jcsspfx + 'Transform'] = this.__translate + '(' + ( -value * this[this.__dimension] ) +'px)';
			}

		}

	};


	p.create = function(index){
		_super.create.call(this , index);
		this.controller.options.minValidDist = 0.03;
		this.__translate = this.dir === 'h' ? 'translateX' : 'translateY';
	};


	MSSlideController.registerView('stack' , MSStackView);
})(jQuery);

/* ================== bin-debug/js/pro/views/FocusView.js =================== */
/**
 * Master Slider Focus View
 * @version 1.1
 * @author averta
 * @package MS
 * @extends {MSFadeBasicView}
 */

;(function(){

	'use strict';

	var perspective = 2000;

	window.MSFocusView = function(options){
		MSWaveView.call(this , options);
		this.$element.removeClass('ms-wave-view').addClass('ms-focus-view');
		this.options.centerSpace = this.options.centerSpace  || 1;
	};

	MSFocusView.extend(MSWaveView);
	MSFocusView._3dreq = true;
	MSFocusView._fallback = MSFadeBasicView;

	var p = MSFocusView.prototype;
	var _super = MSWaveView.prototype;

	/*-------------- METHODS --------------*/

	p.__calcview = function(z , w){
		var a =  w / 2 * z / (z + perspective);
		return a * (z + perspective) / perspective;
	};

	p.__updateSlidesHoriz = function(slide , distance){
		var value =  Math.abs(distance * 100 / this.__width);
		value = -Math.min(value , 100)* 15;
		slide.$element.css(window._csspfx + 'transform' , 'translateZ('+ (value + 1) +'px) rotateY(0.01deg) translateX('+ (distance < 0 ? 1 : -1) * (-this.__calcview(value, this.__width) * this.options.centerSpace )+'px)');
	};

	p.__updateSlidesVertic = function(slide , distance){
		var value =  Math.abs(distance * 100 / this.__width);
		value = -Math.min(value , 100)* 15;
		slide.$element.css(window._csspfx + 'transform' , 'translateZ('+ (value + 1) +'px) rotateY(0.01deg) translateY('+ (distance < 0 ? 1 : -1) * (-this.__calcview(value, this.__width) * this.options.centerSpace )+'px)');
	};

	MSSlideController.registerView('focus' , MSFocusView);

})();

/* ================== bin-debug/js/pro/views/PartialWaveView.js =================== */
/**
 * Master Slider Partial Wave View
 * @version 1.0
 * @author averta
 * @extends {MSWaveView}
 */

;(function(){

	window.MSPartialWaveView = function(options){
		MSWaveView.call(this , options);
		this.$element.removeClass('ms-wave-view').addClass('ms-partial-wave-view');
	};

	MSPartialWaveView.extend(MSWaveView);
	MSPartialWaveView._3dreq = true;
	MSPartialWaveView._fallback = MSFadeBasicView;

	var p = MSPartialWaveView.prototype;
	var _super = MSWaveView.prototype;

	/*-------------- METHODS --------------*/

	p.__updateSlidesHoriz = function(slide , distance){
		var value =  Math.abs(distance * 100 / this.__width);
		if( slide.hasBG ){
			slide.$bg_img.css('opacity' , (100 -  Math.abs(distance * 120 / this.__width / 3)) / 100);
		}
		slide.$element.css(window._csspfx + 'transform' , 'translateZ('+ -value * 3 +'px) rotateY(0.01deg) translateX('+distance*0.75+'px)');
	};

	p.__updateSlidesVertic = function(slide , distance){
		var value =  Math.abs(distance * 100 / this.__width);
		if( slide.hasBG ){
			slide.$bg_img.css('opacity' , (100 -  Math.abs(distance * 120 / this.__width / 3)) / 100);
		}
		slide.$element.css(window._csspfx + 'transform' , 'translateZ('+ -value * 3 +'px) rotateY(0.01deg) translateY('+distance*0.75+'px)');
	};

	MSSlideController.registerView('partialWave' , MSPartialWaveView);

})();

/* ================== bin-debug/js/pro/views/BoxView.js =================== */
;(function($){

    "use strict";

    window.MSBoxView = function(options){
        MSBasicView.call(this , options);
        this.$element.removeClass('ms-basic-view').addClass('ms-box-view');
        this.controller.renderCallback(this.__update , this);
    };

    MSBoxView.extend(MSFadeView);
    MSBoxView._3dreq = true;

    var p  = MSBoxView.prototype;
    var _super  = MSFadeView.prototype;

    /*-------------- METHODS --------------*/

    p.__updateSlides = function(slide , distance){
        var value =  Math.abs(distance / this[this.__dimension]),
            element = slide.$element[0];

        if(1 - value <= 0){
            //element.style.opacity = 0.5;
            element.style.visibility = 'hidden';
            element.style[window._jcsspfx + 'Transform'] = '';
        }else{
            //element.style.opacity = 0.5 + (1 - value) * 0.5;
            element.style.visibility = '';
            element.style[window._jcsspfx + 'Transform'] = 'rotate' + this._rotateDir + '('+(value* (distance < 0 ? 1 : -1)) * 90 * this._calcFactor +'deg)';
            element.style[window._jcsspfx + 'TransformOrigin'] = '50% 50% -' + ( slide[this.__dimension] / 2 ) + 'px' ;
            element.style.zIndex = Math.ceil((1 - value) * 2);
        }
    };

    p.create = function(index){
        _super.create.call(this , index);
        this.controller.options.minValidDist = 0.03;
        this._rotateDir = this.options.dir === 'h' ? 'Y' : 'X';
        this._calcFactor = this.options.dir === 'h' ? 1 :  -1;

    };

    MSSlideController.registerView('box' , MSBoxView);
})(jQuery);

/* ================== bin-debug/js/pro/uicontrols/BaseControl.js =================== */
;(function($){

	"use strict";

	var BaseControl = function(){
		this.options = {
			prefix:'ms-',
			autohide:true,
			overVideo:true,
			customClass: null
		};
	};

	var p = BaseControl.prototype;

	/* -------------------------------- */

	p.slideAction = function(slide){

	};

	p.setup = function(){
		this.cont = this.options.insertTo ? $(this.options.insertTo) : this.slider.$controlsCont;
		if(!this.options.overVideo) this._hideOnvideoStarts();

	};

	p.checkHideUnder = function(){
		if(this.options.hideUnder){
			//this.slider.api.addEventListener(MSSliderEvent.RESIZE, this.onSliderResize, this);
			this.needsRealign = !this.options.insetTo && (this.options.align === 'left' || this.options.align === 'right') && this.options.inset === false;
			$(window).bind('resize', {that:this}, this.onResize);
			this.onResize();

		}
	};

	/**
	 * hide control if width of slider changes to lower that specified value [hideUnder]
	 * @since 1.5.7
	 * @protected
	 */
	p.onResize = function(event){
		var that = (event && event.data.that) || this;
		var w = window.innerWidth;
		if( w <= that.options.hideUnder && !that.detached ){
			that.hide(true);
			that.detached = true;
			that.onDetach();
		}else if( w >= that.options.hideUnder && that.detached ){
			that.detached = false;
			that.visible();
			that.onAppend();
		}
	};

	p.create = function(){
		var that = this;
		if(this.options.autohide ){

			this.hide(true);

			this.slider.$controlsCont.mouseenter($.proxy(this._onMouseEnter, this))
									 .mouseleave($.proxy(this._onMouseLeave, this))
									 .mousedown($.proxy(this._onMouseDown, this));

			if ( this.$element ) {
				this.$element.mouseenter($.proxy(this._onMouseEnter, this))
							 .mouseleave($.proxy(this._onMouseLeave, this))
							 .mousedown($.proxy(this._onMouseDown, this));
			}

			$(document).mouseup($.proxy(this._onMouseUp, this));
		}

		if ( this.options.align ) {
			this.$element.addClass('ms-align-' + this.options.align);
		}

		// add custom class to control
		if ( this.options.customClass && this.$element ) {
			this.$element.addClass(this.options.customClass);
		}
	};

	/**
	 * Mouse Enter Listener
	 * @since 2.2
	 */
	p._onMouseEnter = function(){
		if ( !this._disableAH && !this.mdown ){
			this.visible();
		}

		this.mleave = false;
	};

	/**
	 * Mouse Leave Listener
	 * @since 2.2
	 */
	p._onMouseLeave = function(){
		if ( !this.mdown ){
			this.hide();
		}

		this.mleave = true;
	};

	/**
	 * Mouse Down Listener
	 * @since 2.2
	 */
	p._onMouseDown = function(){
		this.mdown = true;
	};

	/**
	 * Mouse Up Listener
	 * @since 2.2
	 */
	p._onMouseUp = function(){
		if ( this.mdown && this.mleave ) {
			this.hide();
		}

		this.mdown = false;
	};

	/**
	 * calls by the parent class [MSBaseControl] when the control element visibles [hideUnder option]
	 * @since 1.5.7
	 */
	p.onAppend = function(){
		if( this.needsRealign ){
			this.slider._realignControls();
		}
	};

	/**
	 * calls by the parent class [MSBaseControl] when the control element visibles [hideUnder option]
	 * @since 1.5.7
	 */
	p.onDetach = function(){
		if( this.needsRealign ){
			this.slider._realignControls();
		}
	};

	p._hideOnvideoStarts = function(){
		var that = this;
		this.slider.api.addEventListener(MSSliderEvent.VIDEO_PLAY , function(){
   			 that._disableAH = true;
   			 that.hide();
		});

		this.slider.api.addEventListener(MSSliderEvent.VIDEO_CLOSE , function(){
		     that._disableAH = false;
   			 that.visible();
		});
	};

	p.hide = function(fast){
		if(fast){
			this.$element.css('opacity' , 0);
			this.$element.css('display' , 'none');
		} else {
			clearTimeout(this.hideTo);
			var $element = this.$element;
			this.hideTo = setTimeout(function(){
				CTween.fadeOut($element , 400 , false);
			}, 20);
		}

		this.$element.addClass('ms-ctrl-hide');
	};

	p.visible = function(){
		if(this.detached) return;
		clearTimeout(this.hideTo);
		this.$element.css('display' , '');
		CTween.fadeIn(this.$element , 400 , false);
		this.$element.removeClass('ms-ctrl-hide');
	};

	p.destroy = function(){

		if(this.options && this.options.hideUnder){
			//this.slider.api.removeEventListener(MSSliderEvent.RESIZE, this.onResize, this);
			$(window).unbind('resize', this.onResize);
		}
	};

	window.BaseControl = BaseControl;

})(jQuery);

/* ================== bin-debug/js/pro/uicontrols/Arrows.js =================== */
;(function($){

	"use strict";

	var MSArrows = function(options){
		BaseControl.call(this);
		$.extend(this.options , options);
	};

	MSArrows.extend(BaseControl);

	var p = MSArrows.prototype;
	var _super = BaseControl.prototype;

	/* -------------------------------- */

	p.setup = function(){
		var that = this;

		this.$next = $('<div></div>')
					.addClass(this.options.prefix + 'nav-next')
					//.appendTo(this.cont)
					.bind('click' , function(){
							that.slider.api.next(true);
					});


		this.$prev = $('<div></div>')
					.addClass(this.options.prefix + 'nav-prev')
					//.appendTo(this.cont)
					.bind('click' , function(){
						that.slider.api.previous(true);
					});

		_super.setup.call(this);

		this.cont.append(this.$next);
		this.cont.append(this.$prev);

		this.checkHideUnder(); // super method
	};

	p.hide = function(fast){
		if(fast){
			this.$prev.css('opacity' , 0).css('display', 'none');
			this.$next.css('opacity' , 0).css('display', 'none');
			return;
		}

		CTween.fadeOut(this.$prev , 400 , false);
		CTween.fadeOut(this.$next , 400 , false);

		this.$prev.addClass('ms-ctrl-hide');
		this.$next.addClass('ms-ctrl-hide');
	};

	p.visible = function(){
		if(this.detached) return;
		CTween.fadeIn(this.$prev , 400 );
		CTween.fadeIn(this.$next , 400 );
		this.$prev.removeClass('ms-ctrl-hide').css('display', '');
		this.$next.removeClass('ms-ctrl-hide').css('display', '');
	};

	p.destroy = function(){
		_super.destroy();
		this.$next.remove();
		this.$prev.remove();
	};

	window.MSArrows = MSArrows;
	MSSlideController.registerControl('arrows' , MSArrows);
})(jQuery);

/* ================== bin-debug/js/pro/uicontrols/Thumblist.js =================== */
;(function($){

	"use strict";

	var MSThumblist = function(options){
		BaseControl.call(this);

		// default options
		this.options.dir 	= 'h';
		this.options.wheel	= options.dir === 'v';
		this.options.arrows = false;
		this.options.speed  = 17;
		this.options.align  = null;
		this.options.inset = false;
		this.options.margin = 10;
		this.options.space = 10;
		this.options.width = 100;
		this.options.height = 100;
		this.options.type = 'thumbs'; // tabs
		this.options.hover = false;


		$.extend(this.options , options);

		this.thumbs = [];
		this.index_count = 0;

		this.__dimen    		= this.options.dir === 'h' ? 'width' : 'height';
		this.__alignsize 		= this.options.dir === 'h' ? 'height' : 'width';
		this.__jdimen    		= this.options.dir === 'h' ? 'outerWidth' : 'outerHeight';
		this.__pos				= this.options.dir === 'h' ? 'left'	 : 'top';

		this.click_enable = true;

	};

	MSThumblist.extend(BaseControl);

	var p = MSThumblist.prototype;
	var _super = BaseControl.prototype;

	/* -------------------------------- */

	p.setup = function(){
		this.$element = $('<div></div>')
						.addClass(this.options.prefix + 'thumb-list');

		if(this.options.type === 'tabs'){
			this.$element.addClass(this.options.prefix + 'tabs');
		}

		this.$element.addClass('ms-dir-' + this.options.dir);

		_super.setup.call(this);


		if( this.slider.$controlsCont === this.cont ){
			this.$element.appendTo(this.slider.$element);
		}else{
			this.$element.appendTo(this.cont);
		}

		this.$thumbscont = $('<div></div>')
						.addClass('ms-thumbs-cont')
						.appendTo(this.$element);

		if(this.options.arrows){
			var that = this;
			this.$fwd = $('<div></div>').addClass('ms-thumblist-fwd').appendTo(this.$element).click(function(){that.controller.push(-15);});
			this.$bwd = $('<div></div>').addClass('ms-thumblist-bwd').appendTo(this.$element).click(function(){that.controller.push(15);});
		}

		// align control
		if( !this.options.insetTo && this.options.align ){
			var align = this.options.align;
			if( this.options.inset ){
				this.$element.css(align, this.options.margin );
			}else if( align === 'top' ){
				this.$element.detach().prependTo(this.slider.$element).css({
					'margin-bottom': this.options.margin,
					'position': 'relative'
				});
			}else if( align === 'bottom' ){
				this.$element.css({
					'margin-top': this.options.margin,
					'position': 'relative'
				});
			}else{
				this.slider.api.addEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this);
				this.align();
			}

			if( this.options.dir === 'v' ){
				this.$element.width(this.options.width);
			}else{
				this.$element.height(this.options.height);
			}
		}

		this.checkHideUnder(); // super method

	};

	/**
	 * calls by "RESERVED_SPACE_CHANGE" realigns the control in slider
	 * @since 1.5.7
	 */
	p.align = function(event){
		if( this.detached ){
			return;
		}
		var align = this.options.align;
		var pos = this.slider.reserveSpace(align, this.options[this.__alignsize] + this.options.margin * 2);
		this.$element.css(align, -pos - this.options[this.__alignsize] - this.options.margin);
	};

	p.slideAction = function(slide){
		var thumb_ele = slide.$element.find('.ms-thumb');
		var that = this;
		var thumb_frame = $('<div></div>')
					.addClass('ms-thumb-frame')
					.append(thumb_ele)
					.append($('<div class="ms-thumb-ol"></div>'))
					.bind(this.options.hover? 'hover' : 'click' , function(){that.changeSlide(thumb_frame);});

		if( this.options.align ){
			thumb_frame.width(this.options.width - (this.options.dir === 'v' && this.options.type === 'tabs' ? 12 : 0))  // less arrow size 12px
					.height(this.options.height)
					.css('margin-'+(this.options.dir === 'v' ? 'bottom' : 'right'), this.options.space);
		}

		thumb_frame[0].index =  this.index_count ++;

		this.$thumbscont.append(thumb_frame);

		// Added Fillmode support to thumblist
		// @since 1.6.0
		if( this.options.fillMode && thumb_ele.is('img') ){
			var aligner = new window.MSAligner(this.options.fillMode, thumb_frame, thumb_ele);
			thumb_ele[0].aligner = aligner;
			thumb_ele.one('load', function(e){
				var $this = $(this);
				$this[0].aligner.init($this.width(), $this.height());
				$this[0].aligner.align();
			}).each($.jqLoadFix);
		}

		if($.browser.msie)
				thumb_ele.on('dragstart', function(event) { event.preventDefault(); }); // disable native dragging

		this.thumbs.push(thumb_frame);
	};

	p.create = function(){
		_super.create.call(this);

		this.__translate_end	= window._css3d ? ' translateZ(0px)' : '';
		this.controller 	 = new Controller(0 , 0 , {
			//snapping	     : true,
			snappingMinSpeed : 2,
			friction		 : (100 - this.options.speed * 0.5) / 100
		});

		this.controller.renderCallback(this.options.dir === 'h'? this._hMove : this._vMove , this);
		//this.controller.snappingCallback(this.__snapUpdate , this);
		//this.controller.snapCompleteCallback(this.__snapCompelet , this);

		var that = this;
		this.resize_listener = function(){that.__resize();};
		$(window).bind('resize', this.resize_listener);

		this.thumbSize = this.thumbs[0][this.__jdimen](true);

		this.setupSwipe();
		this.__resize();

		var that = this;
		if(this.options.wheel){

			this.wheellistener = function(event){
				var e = window.event || event.orginalEvent || event;
				var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
				that.controller.push(-delta*10);
				return false;
			};

			if($.browser.mozilla) this.$element[0].addEventListener('DOMMouseScroll' , this.wheellistener);
			else this.$element.bind('mousewheel', this.wheellistener);
		}

		this.slider.api.addEventListener(MSSliderEvent.CHANGE_START , this.update , this);
		this.slider.api.addEventListener(MSSliderEvent.HARD_UPDATE, this.realignThumbs, this);
		this.cindex =  this.slider.api.index();
		this.select(this.thumbs[this.cindex]);


	};

	p._hMove = function(controller , value){
		this.__contPos = value;
		if(window._cssanim) {
			this.$thumbscont[0].style[window._jcsspfx + 'Transform'] = 'translateX('+-value+'px)'+ this.__translate_end;
			return;
		}
		this.$thumbscont[0].style.left = -value + 'px';
	};

	p._vMove = function(controller , value){
		this.__contPos = value;
		if(window._cssanim) {
			this.$thumbscont[0].style[window._jcsspfx + 'Transform'] = 'translateY('+-value+'px)'+ this.__translate_end;
			return;
		}
		this.$thumbscont[0].style.top = -value + 'px';
	};

	p.setupSwipe = function(){
		this.swipeControl = new averta.TouchSwipe(this.$element);
		this.swipeControl.swipeType = this.options.dir === 'h'? 'horizontal' : 'vertical';

		var that = this;
		if(this.options.dir === 'h')
			this.swipeControl.onSwipe = function(status){that.horizSwipeMove(status);};
		else
			this.swipeControl.onSwipe = function(status){that.vertSwipeMove(status);};
	};

	p.vertSwipeMove = function(status){
		if(this.dTouch) return;
		var phase = status.phase;
		if(phase === 'start')
			this.controller.stop();
		else if(phase === 'move')
			this.controller.drag(status.moveY);
		else if(phase === 'end' || phase === 'cancel'){
			var speed = Math.abs(status.distanceY / status.duration * 50/3);
			if(speed > 0.1){
				this.controller.push(-status.distanceY / status.duration * 50/3 );
			}else{
				this.click_enable = true;
				this.controller.cancel();
			}
		}
	};

	p.horizSwipeMove = function(status){
		if(this.dTouch) return;
		var phase = status.phase;
		if(phase === 'start'){
			this.controller.stop();
			this.click_enable = false;
		}else if(phase === 'move')
			this.controller.drag(status.moveX);
		else if(phase === 'end' || phase === 'cancel'){
			var speed = Math.abs(status.distanceX / status.duration * 50/3);
			if(speed > 0.1){
				 this.controller.push(-status.distanceX / status.duration * 50/3 );
			}else {
				this.click_enable = true;
				this.controller.cancel();
			}
		}
	};

	p.update = function(){
		var nindex = this.slider.api.index();
		if(this.cindex === nindex) return;

		if(this.cindex != null)this.unselect(this.thumbs[this.cindex]);
		this.cindex = nindex;
		this.select(this.thumbs[this.cindex]);

		if(!this.dTouch)this.updateThumbscroll();
	};

	p.realignThumbs = function () {
		this.$element.find('.ms-thumb').each( function (index, thumb) {
			if ( thumb.aligner ) {
				thumb.aligner.align();
			}
		} );
	};

	p.updateThumbscroll = function(){
		var thumb_size;

		var pos = this.thumbSize * this.cindex;

		if(this.controller.value == NaN) this.controller.value = 0;

		if(pos -  this.controller.value < 0){
			this.controller.gotoSnap(this.cindex , true);
			return;
		}

		if(pos + this.thumbSize - this.controller.value > this.$element[this.__dimen]()){
			var first_snap = this.cindex - Math.floor(this.$element[this.__dimen]() / this.thumbSize) + 1;
			this.controller.gotoSnap(first_snap , true);
			return;
		}
	};

	p.changeSlide = function(thumb){
		if(!this.click_enable || this.cindex === thumb[0].index) return;
		this.slider.api.gotoSlide(thumb[0].index);
	};

	p.unselect = function(ele){
		ele.removeClass('ms-thumb-frame-selected');
	};

	p.select = function(ele){
		ele.addClass('ms-thumb-frame-selected');
	};

	p.__resize = function(){
		var size = this.$element[this.__dimen]();

		if(this.ls === size) return;

		this.ls = size;

		this.thumbSize = this.thumbs[0][this.__jdimen](true);
		var len = this.slider.api.count() * this.thumbSize;
		this.$thumbscont[0].style[this.__dimen] = len + 'px';

		if(len <= size){
			this.dTouch = true;
			this.controller.stop();
			this.$thumbscont[0].style[this.__pos] = (size - len)*.5 + 'px';
			this.$thumbscont[0].style[window._jcsspfx + 'Transform'] = '';
		}else{
			this.dTouch = false;
			this.click_enable = true;
			this.$thumbscont[0].style[this.__pos] = '';
			this.controller._max_value = len - size;
			this.controller.options.snapsize = this.thumbSize;
			this.updateThumbscroll();
		}

	};

	p.destroy = function(){
		_super.destroy();

		if(this.options.wheel){
			if($.browser.mozilla) this.$element[0].removeEventListener('DOMMouseScroll' , this.wheellistener);
			else this.$element.unbind('mousewheel', this.wheellistener);
			this.wheellistener = null;
		}

		$(window).unbind('resize', this.resize_listener);

		this.$element.remove();

		this.slider.api.removeEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this);
		this.slider.api.removeEventListener(MSSliderEvent.CHANGE_START , this.update , this);
	};

	window.MSThumblist = MSThumblist;
	MSSlideController.registerControl('thumblist' , MSThumblist);

})(jQuery);

/* ================== bin-debug/js/pro/uicontrols/Bullets.js =================== */
;(function($){

	"use strict";

	var MSBulltes = function(options){
		BaseControl.call(this);

		this.options.dir 	= 'h';
		this.options.inset  = true;
		this.options.margin = 10;
		this.options.space = 10;


		$.extend(this.options , options);

		this.bullets = [];

	};

	MSBulltes.extend(BaseControl);

	var p = MSBulltes.prototype;
	var _super = BaseControl.prototype;

	/* -------------------------------- */

	p.setup = function(){
		_super.setup.call(this);

		this.$element = $('<div></div>')
						.addClass(this.options.prefix + 'bullets')
						.addClass('ms-dir-' + this.options.dir)
						.appendTo(this.cont);

		this.$bullet_cont = $('<div></div>')
						.addClass('ms-bullets-count')
						.appendTo(this.$element);

		if( !this.options.insetTo && this.options.align ){

			var align = this.options.align;
			if( this.options.inset ){
				this.$element.css(align, this.options.margin);
			}

		}

		this.checkHideUnder(); // super method
	};

	p.create = function(){
		_super.create.call(this);
		var that = this;

		this.slider.api.addEventListener(MSSliderEvent.CHANGE_START , this.update , this);
		this.cindex =  this.slider.api.index();
		for(var i = 0; i < this.slider.api.count(); ++i){
			var bullet = $('<div></div>').addClass('ms-bullet');
			bullet[0].index = i;
			bullet.on('click', function(){that.changeSlide(this.index);});
			this.$bullet_cont.append(bullet);
			this.bullets.push(bullet);
			if( this.options.dir === 'h' ) {
				bullet.css('margin', this.options.space/2);
			}else {
				bullet.css('margin', this.options.space);
			}
		}

		if(this.options.dir === 'h') {
			this.$element.width(bullet.outerWidth(true) * this.slider.api.count());
		} else {
			this.$element.css('margin-top', -this.$element.outerHeight(true)/2);
		}

		this.select(this.bullets[this.cindex]);
	};

	p.update = function(){
		var nindex = this.slider.api.index();
		if(this.cindex === nindex) return;

		if(this.cindex != null)this.unselect(this.bullets[this.cindex]);
		this.cindex = nindex;
		this.select(this.bullets[this.cindex]);
	};

	p.changeSlide = function(index){
		if(this.cindex === index) return;
		this.slider.api.gotoSlide(index);
	};

	p.unselect = function(ele){
		ele.removeClass('ms-bullet-selected');
	};

	p.select = function(ele){
		ele.addClass('ms-bullet-selected');
	};

	p.destroy = function(){
		_super.destroy();
		this.slider.api.removeEventListener(MSSliderEvent.CHANGE_START , this.update , this);
		this.$element.remove();
	};

	window.MSBulltes = MSBulltes;

	MSSlideController.registerControl('bullets' , MSBulltes);

})(jQuery);

/* ================== bin-debug/js/pro/uicontrols/Scrollbar.js =================== */
;(function($){

	"use strict";

	var MSScrollbar = function(options){
		BaseControl.call(this);

		this.options.dir 		= 'h';
		this.options.autohide	= true;
		this.options.width 		= 4;
		this.options.color 		= '#3D3D3D';
		this.options.margin		= 10;

		$.extend(this.options , options);
		this.__dimen    		= this.options.dir === 'h' ? 'width' : 'height';
		this.__jdimen    		= this.options.dir === 'h' ? 'outerWidth' : 'outerHeight';
		this.__pos				= this.options.dir === 'h' ? 'left'	 : 'top';
		this.__translate_end	= window._css3d ? ' translateZ(0px)' : '';
		this.__translate_start	= this.options.dir === 'h' ? ' translateX(' : 'translateY(';
	};

	MSScrollbar.extend(BaseControl);

	var p = MSScrollbar.prototype;
	var _super = BaseControl.prototype;

	/* -------------------------------- */

	p.setup = function(){

		this.$element = $('<div></div>')
						.addClass(this.options.prefix + 'sbar')
						.addClass('ms-dir-' + this.options.dir);

		_super.setup.call(this);

		if( this.slider.$controlsCont === this.cont ){
			this.$element.appendTo(this.slider.$element);
		}else{
			this.$element.appendTo(this.cont);
		}

		this.$bar = $('<div></div>')
					.addClass(this.options.prefix + 'bar')
					.appendTo(this.$element);

		if(this.slider.options.loop){
			console.log('WARNING, MSScrollbar cannot work with looped slider.');
			this.disable = true;
			this.$element.remove();
		}

		/**
		 * align control
		 * @since 1.5.7
		 */
		// change width
		if( this.options.dir === 'v' ){
			this.$bar.width(this.options.width);
		} else {
			this.$bar.height(this.options.width);
		}

		// change color
		this.$bar.css('background-color', this.options.color);

		if( !this.options.insetTo && this.options.align ){

			// reset old versions styles
			if( this.options.dir === 'v' ){
				this.$element.css({
					right:'auto',
					left:'auto'
				});
			} else {
				this.$element.css({
					top:'auto',
					bottom:'auto'
				});
			}

			var align = this.options.align;
			if( this.options.inset ){
				this.$element.css(align, this.options.margin );
			}else if( align === 'top' ){
				this.$element.prependTo(this.slider.$element).css({
					'margin-bottom': this.options.margin,
					'position': 'relative'
				});
			}else if( align === 'bottom' ){
				this.$element.css({
					'margin-top': this.options.margin,
					'position': 'relative'
				});
			}else{
				this.slider.api.addEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this);
				this.align();
			}
		}

		this.checkHideUnder(); // super method
	};

	/**
	 * calls by "RESERVED_SPACE_CHGANE" realigns the control in slider
	 * @since 1.5.7
	 */
	p.align = function(event){
		if( this.detached ){
			return;
		}

		var align = this.options.align;
		var pos = this.slider.reserveSpace(align, this.options.margin * 2 + this.options.width);
		this.$element.css(align, -pos - this.options.margin - this.options.width);
	};

	p.create = function(){

		if(this.disable) return;

		//_super.create.call(this);
		var that = this;

		this.scroller = this.slider.api.scroller;

		this.slider.api.view.addEventListener(MSViewEvents.SCROLL , this._update , this);
		this.slider.api.addEventListener(MSSliderEvent.RESIZE , this._resize , this);

		this._resize();

		if(this.options.autohide){
			this.$bar.css('opacity' , '0');
		}
	};

	p._resize = function(){
		this.vdimen = this.$element[this.__dimen]();
		this.bar_dimen = this.slider.api.view[ '__' + this.__dimen] * this.vdimen / this.scroller._max_value;
		this.$bar[this.__dimen](this.bar_dimen );
	};

	p._update = function(){
		var value = this.scroller.value * (this.vdimen - this.bar_dimen) / this.scroller._max_value;
		if(this.lvalue === value) return;
		this.lvalue = value;

		if(this.options.autohide){
			clearTimeout(this.hto);
			this.$bar.css('opacity' , '1');

			var that = this;
			this.hto = setTimeout(function(){
				//if(!that.slider.api.view.swipeControl.touchStarted)
				that.$bar.css('opacity' , '0');
			} , 150);
		}

		if(value < 0){
			this.$bar[0].style[this.__dimen] = this.bar_dimen + value + 'px';
			return;
		}

		if(value > this.vdimen - this.bar_dimen)
			this.$bar[0].style[this.__dimen] = this.vdimen - value + 'px';

		if(window._cssanim) {
			this.$bar[0].style[window._jcsspfx + 'Transform'] = this.__translate_start +value+'px)'+ this.__translate_end;
			return;
		}

		this.$bar[0].style[this.__pos] = value + 'px';

	};

	p.destroy = function(){
		_super.destroy();
		this.slider.api.view.removeEventListener(MSViewEvents.SCROLL , this._update , this);
		this.slider.api.removeEventListener(MSSliderEvent.RESIZE , this._resize , this);
		this.slider.api.removeEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this);

		this.$element.remove();
	};

	window.MSScrollbar = MSScrollbar;
	MSSlideController.registerControl('scrollbar' , MSScrollbar);
})(jQuery);

/* ================== bin-debug/js/pro/uicontrols/Timebar.js =================== */
;(function($){

	"use strict";

	var MSTimerbar = function(options){
		BaseControl.call(this);

		this.options.autohide = false;
		this.options.width 		= 4;
		this.options.color 		= '#FFFFFF';
		this.options.inset 		= true;
		this.options.margin 	= 0;

		$.extend(this.options , options);
	};

	MSTimerbar.extend(BaseControl);

	var p = MSTimerbar.prototype;
	var _super = BaseControl.prototype;

	/* -------------------------------- */

	p.setup = function(){
		var that = this;
		_super.setup.call(this);

		this.$element = $('<div></div>')
					.addClass(this.options.prefix + 'timerbar');

		_super.setup.call(this);

		if( this.slider.$controlsCont === this.cont ){
			this.$element.appendTo(this.slider.$element);
		}else{
			this.$element.appendTo(this.cont);
		}

		this.$bar = $('<div></div>')
					.addClass('ms-time-bar')
					.appendTo(this.$element);

		// change width
		if( this.options.dir === 'v' ){
			this.$bar.width(this.options.width);
			this.$element.width(this.options.width);
		} else {
			this.$bar.height(this.options.width);
			this.$element.height(this.options.width);
		}

		// change color
		this.$bar.css('background-color', this.options.color);

		if( !this.options.insetTo && this.options.align ){

			this.$element.css({
				top:'auto',
				bottom:'auto'
			});

			var align = this.options.align;
			if( this.options.inset ){
				this.$element.css(align, this.options.margin );
			}else if( align === 'top' ){
				this.$element.prependTo(this.slider.$element).css({
					'margin-bottom': this.options.margin,
					'position': 'relative'
				});
			}else if( align === 'bottom' ){
				this.$element.css({
					'margin-top': this.options.margin,
					'position': 'relative'
				});
			}else{
				this.slider.api.addEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this);
				this.align();
			}
		}

		this.checkHideUnder(); // super method

	};

	/**
	 * calls by "RESERVED_SPACE_CHGANE" realigns the control in slider
	 * @since 1.5.7
	 */
	p.align = function(event){
		if( this.detached ){
			return;
		}

		var align = this.options.align;
		var pos = this.slider.reserveSpace(align, this.options.margin * 2 + this.options.width);
		this.$element.css(align, -pos - this.options.margin - this.options.width);
	};

	p.create = function(){
		_super.create.call(this);
		this.slider.api.addEventListener(MSSliderEvent.WAITING , this._update , this);
		this._update();
	};

	p._update = function(){
		this.$bar[0].style.width = this.slider.api._delayProgress  + '%';
	};

	p.destroy = function(){
		_super.destroy();
		this.slider.api.removeEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this);
		this.slider.api.removeEventListener(MSSliderEvent.WAITING , this._update , this);
		this.$element.remove();
	};

	window.MSTimerbar = MSTimerbar;
	MSSlideController.registerControl('timebar' , MSTimerbar);
})(jQuery);

/* ================== bin-debug/js/pro/uicontrols/CircleTimer.js =================== */
;(function($){

	"use strict";

	var MSCircleTimer = function(options){
		BaseControl.call(this);

		this.options.color 	= '#A2A2A2';
		this.options.stroke = 10;
		this.options.radius	= 4;

		this.options.autohide = false;
		$.extend(this.options , options);
	};

	MSCircleTimer.extend(BaseControl);

	var p = MSCircleTimer.prototype;
	var _super = BaseControl.prototype;

	/* -------------------------------- */

	p.setup = function(){
		var that = this;
		_super.setup.call(this);

		this.$element = $('<div></div>')
					.addClass(this.options.prefix + 'ctimer')
					.appendTo(this.cont);

		this.$canvas = 	$('<canvas></canvas>')
					.addClass('ms-ctimer-canvas')
					.appendTo(this.$element);

		this.$bar = $('<div></div>')
					.addClass('ms-ctimer-bullet')
					.appendTo(this.$element);

		if(!this.$canvas[0].getContext){
			this.destroy();
			this.disable = true;
			return;
		}


		this.ctx		= this.$canvas[0].getContext('2d');
		this.prog		= 0;

		this.__w = (this.options.radius + this.options.stroke/2) * 2;
		this.$canvas[0].width  = this.__w;
		this.$canvas[0].height = this.__w;

		this.checkHideUnder(); // super method
	};

	p.create = function(){
		if(this.disable) return;
		_super.create.call(this);
		this.slider.api.addEventListener(MSSliderEvent.WAITING , this._update , this);

		var that = this;
		this.$element.click(function(){
			if(that.slider.api.paused)
				that.slider.api.resume();
			else
				that.slider.api.pause();
		});

		this._update();
	};

	p._update = function(){
		var that = this;
		$(this).stop(true).animate({prog:this.slider.api._delayProgress * 0.01} ,
					 	{duration:200 , step:function(){that._draw();}});
		//this.$bar[0].style.width = this.slider.api._delayProgress/100 * this.$element.width() + 'px';
	};

	p._draw = function(){
		this.ctx.clearRect(0 , 0,  this.__w ,  this.__w);
		this.ctx.beginPath();
		this.ctx.arc(this.__w * .5 , this.__w * .5 ,this.options.radius , Math.PI * 1.5 , Math.PI * 1.5 + 2 * Math.PI * this.prog, false);
		this.ctx.strokeStyle = this.options.color;
		this.ctx.lineWidth = this.options.stroke;
		this.ctx.stroke();
	};

	p.destroy = function(){
		_super.destroy();
		if(this.disable) return;
		$(this).stop(true);
		this.slider.api.removeEventListener(MSSliderEvent.WAITING , this._update , this);
		this.$element.remove();
	};

	window.MSCircleTimer = MSCircleTimer;
		MSSlideController.registerControl('circletimer' , MSCircleTimer);
})(jQuery);

/* ================== bin-debug/js/pro/uicontrols/Lightbox.js =================== */
;(function($){

	"use strict";

	window.MSLightbox = function(options){
		BaseControl.call(this , options);

		this.options.autohide	= false;
		$.extend(this.options , options);

		this.data_list = [];
	};
	MSLightbox.fadeDuratation = 400;
	MSLightbox.extend(BaseControl);

	var p = MSLightbox.prototype;
	var _super = BaseControl.prototype;

	/* -------------------------------- */
	p.setup = function(){
		_super.setup.call(this);

		this.$element = $('<div></div>')
						.addClass(this.options.prefix + 'lightbox-btn')
						.appendTo(this.cont);

		this.checkHideUnder(); // super method
	};

	p.slideAction = function(slide){
		 $('<div></div>')
						.addClass(this.options.prefix + 'lightbox-btn')
						.appendTo(slide.$element)
						.append($(slide.$element.find('.ms-lightbox')));

	};

	p.create = function(){
		_super.create.call(this);

	};


	MSSlideController.registerControl('lightbox' , MSLightbox);
})(jQuery);

/* ================== bin-debug/js/pro/uicontrols/SlideInfo.js =================== */
;(function($){

	"use strict";

	window.MSSlideInfo = function(options){
		BaseControl.call(this , options);

		this.options.autohide	= false;
		this.options.align  = null;
		this.options.inset = false;
		this.options.margin = 10;
		this.options.size = 100;
		this.options.dir = 'h';

		$.extend(this.options , options);

		this.data_list = [];
	};
	MSSlideInfo.fadeDuratation = 400;
	MSSlideInfo.extend(BaseControl);

	var p = MSSlideInfo.prototype;
	var _super = BaseControl.prototype;

	/* -------------------------------- */
	p.setup = function(){
		this.$element = $('<div></div>')
						.addClass(this.options.prefix + 'slide-info')
						.addClass('ms-dir-' + this.options.dir);

		_super.setup.call(this);

		if( this.slider.$controlsCont === this.cont ){
			this.$element.appendTo(this.slider.$element); // insert in outer container out of overflow hidden
		}else{
			this.$element.appendTo(this.cont);
		}

		// align control
		if( !this.options.insetTo && this.options.align ){
			var align = this.options.align;
			if( this.options.inset ){
				this.$element.css(align, this.options.margin );
			}else if( align === 'top' ){
				this.$element.prependTo(this.slider.$element).css({
					'margin-bottom': this.options.margin,
					'position': 'relative'
				});
			}else if( align === 'bottom' ){
				this.$element.css({
					'margin-top': this.options.margin,
					'position': 'relative'
				});
			}else{
				this.slider.api.addEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this);
				this.align();
			}

			if( this.options.dir === 'v' ){
				this.$element.width(this.options.size);
			}else{
				this.$element.css('min-height', this.options.size);
			}
		}

		this.checkHideUnder(); // super method
	};

	/**
	 * calls by "RESERVED_SPACE_CHGANE" realigns the control in slider
	 * @since 1.5.7
	 */
	p.align = function(event){
		if( this.detached ){
			return;
		}
		var align = this.options.align;
		var pos = this.slider.reserveSpace(align, this.options.size + this.options.margin * 2);
		this.$element.css(align, -pos - this.options.size - this.options.margin);
	};

	p.slideAction = function(slide){
		var info_ele = $(slide.$element.find('.ms-info'));
		var that = this;
		info_ele.detach();

		this.data_list[slide.index] = info_ele;
	};

	p.create = function(){
		_super.create.call(this);
		this.slider.api.addEventListener(MSSliderEvent.CHANGE_START , this.update , this);
		this.cindex =  this.slider.api.index();
		this.switchEle(this.data_list[this.cindex]);
	};

	p.update = function(){
		var nindex = this.slider.api.index();
		this.switchEle(this.data_list[nindex]);
		this.cindex = nindex;
	};

	p.switchEle = function(ele){
		if(this.current_ele){
			var that = this;

			if(this.current_ele[0].tween)this.current_ele[0].tween.stop(true);
			this.current_ele[0].tween = CTween.animate(this.current_ele , MSSlideInfo.fadeDuratation  , {opacity:0} , {complete:function(){
				this.detach();
				this[0].tween = null;
				ele.css('position', 'relative');
			} , target:this.current_ele });

			//this.current_ele.css('position', 'absolute');
			ele.css('position', 'absolute');
		}

		this.__show(ele);
	};

	p.__show = function(ele){
		ele.appendTo(this.$element).css('opacity','0');///.css('position', 'relative');

		// calculate max height
		if ( this.current_ele ){
			ele.height( Math.max( ele.height(), this.current_ele.height() ) );
		}

		clearTimeout(this.tou);
		this.tou = setTimeout(function(){
			CTween.fadeIn(ele , MSSlideInfo.fadeDuratation );
			ele.css('height', '');
		}, MSSlideInfo.fadeDuratation);


		if(ele[0].tween)ele[0].tween.stop(true);
		this.current_ele = ele;
	};

	p.destroy = function(){
		_super.destroy();
		clearTimeout(this.tou);
		if(this.current_ele && this.current_ele[0].tween){
			this.current_ele[0].tween.stop('true');
		}
		this.$element.remove();
		this.slider.api.removeEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this);
		this.slider.api.removeEventListener(MSSliderEvent.CHANGE_START , this.update , this);
	};

	MSSlideController.registerControl('slideinfo' , MSSlideInfo);
})(jQuery);

/* ================== bin-debug/js/pro/plugins/MSGallery.js =================== */
/**
 *	Master Slider, Gallery Template v1.0
 * 	@author: Averta Ltd.
 */

;(function($){

	window.MSGallery = function(id , slider){
		this.id = id;
		this.slider = slider;

		this.telement = $('#'+id);

		this.botcont = $('<div></div>').addClass('ms-gallery-botcont').appendTo(this.telement);
		this.thumbcont = $('<div></div>').addClass('ms-gal-thumbcont hide-thumbs').appendTo(this.botcont);
		this.playbtn  = $('<div></div>').addClass('ms-gal-playbtn').appendTo(this.botcont);
		this.thumbtoggle  = $('<div></div>').addClass('ms-gal-thumbtoggle').appendTo(this.botcont);

		// adds required controls to slider
		slider.control('thumblist' , {insertTo:this.thumbcont , autohide:false , dir:'h'});
		slider.control('slidenum'  , {insertTo:this.botcont , autohide:false});
		slider.control('slideinfo' , {insertTo:this.botcont , autohide:false});
		slider.control('timebar'   , {insertTo:this.botcont , autohide:false});
		slider.control('bullets'   , {insertTo:this.botcont , autohide:false});
	};

	var p = MSGallery.prototype;

	p._init = function(){
		var that = this;

		if(!this.slider.api.paused)
			 this.playbtn.addClass('btn-pause');

		this.playbtn.click(function(){
			if(that.slider.api.paused){
				 that.slider.api.resume();
				 that.playbtn.addClass('btn-pause');
			}else{
				 that.slider.api.pause();
				 that.playbtn.removeClass('btn-pause');
			}
		});


		this.thumbtoggle.click(function(){

			if(that.vthumbs){
				//that.hideThumbs();
				that.thumbtoggle.removeClass('btn-hide');
				that.vthumbs = false;
				that.thumbcont.addClass('hide-thumbs');
			}else{
				//that.showThumbs();
				that.thumbtoggle.addClass('btn-hide');
				that.thumbcont.removeClass('hide-thumbs');
				that.vthumbs = true;
			}
		});

	};

	p.setup = function(){
		var that = this;
		$(document).ready(function(){that._init();});
	};


})(jQuery);

/* ================== bin-debug/js/pro/plugins/MSFlickrV2.js =================== */
/**
 * Master Slider Flickr Plugin Version 2
 * @version 2.0.0
 * @author Averta Ltd.
 */
;(function($){

	/**
	 * Generate Flickr photoset url
	 * @param  {String} key   api key
	 * @param  {String} id    photoset id
	 * @param  {Number} count number of images
	 * @return {String}
	 */
	var getPhotosetURL = function(key , id , count){
		return 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=' + key + '&photoset_id='+ id +'&per_page='+ count +'&extras=url_o,description,date_taken,owner_name,views&format=json&jsoncallback=?';
	};

	/**
	 * Generate Flickr user public images url
	 * @param  {String} key   api key
	 * @param  {String} id    user id
	 * @param  {Number} count number of images
	 * @return {String}
	 */
	var getUserPublicURL = function(key , id , count){
		return 'https://api.flickr.com/services/rest/?&method=flickr.people.getPublicPhotos&api_key=' + key + '&user_id='+ id +'&per_page='+ count +'&extras=url_o,description,date_taken,owner_name,views&format=json&jsoncallback=?';
	};

	/**
	 * Generates image path
	 * @param  {String} fid
	 * @param  {String} server
	 * @param  {String} id
	 * @param  {String} secret
	 * @param  {String} size
	 * @return {String}
	 */
	var getImageSource = function(fid , server , id , secret , size, data){
		if ( size === '_o' && data ) {
			return data.url_o;
		}

		return 'https://farm' + fid + '.staticflickr.com/'+ server + '/' + id + '_' + secret + size + '.jpg';
	};

	window.MSFlickrV2 = function(slider,options){
		var _options = {
			count			:10,
			type			:'photoset',
			/*
			 * s small square 75x75
			 * q large square 150x150
			 * t thumbnail, 100 on longest side
			 */
			thumbSize	:'q',

			/*
			 * -	medium, 500 on longest side
			 * z	medium 640, 640 on longest side
			 * c	medium 800, 800 on longest side
			 * b	large, 1024 on longest side
			 * o	original image, either a jpg, gif or png, depending on source format
			 */
			imgSize		: 'c'
		};

		this.slider = slider;
		this.slider.holdOn();

		if( !options.key ){
			this.errMsg('Flickr API Key required. Please add it in settings.');
			return;
		}

		$.extend(_options , options);
		this.options = _options;

		var that = this;

		if(this.options.type === 'photoset'){
			$.getJSON(getPhotosetURL(this.options.key , this.options.id , this.options.count) , function(data){
				that._photosData(data);
			});
		}else{
			$.getJSON(getUserPublicURL(this.options.key , this.options.id , this.options.count) , function(data){
				that.options.type = 'photos';
				that._photosData(data);
			});
		}

		if(this.options.imgSize !== '' && this.options.imgSize !== '-')
			this.options.imgSize = '_' + this.options.imgSize;

		this.options.thumbSize = '_' + this.options.thumbSize;

		// grab slide template from slider markup
		this.slideTemplate = this.slider.$element.find('.ms-slide')[0].outerHTML;
		this.slider.$element.find('.ms-slide').remove(); // remove all slides from slider markup
	};

	var p = MSFlickrV2.prototype;

	p._photosData = function(data){

		if(data.stat === 'fail'){
			this.errMsg('Flickr API ERROR#' + data.code + ': ' + data.message);
			return;
		}

		var that = this;
		var getInfo = this.options.author || this.options.desc;
		$.each(data[this.options.type].photo, function(i,item){

			var slide_cont = that.slideTemplate.replace(/{{[\w-]+}}/g, function(match){
				match = match.replace(/{{|}}/g, '');
				if( shortCodes[match] ) {
					return shortCodes[match](item, that);
				} else {
					return '{{'+match+'}}';
				}

			});

			$(slide_cont).appendTo(that.slider.$element);

		});

		that._initSlider();
	};

	p.errMsg = function(msg){
		this.slider.$element.css('display', 'block');
		if(!this.errEle)
			this.errEle = $('<div style="font-family:Arial; color:red; font-size:12px; position:absolute; top:10px; left:10px"></div>').appendTo(this.slider.$loading);

		this.errEle.html(msg);
	};

	p._initSlider = function(){
		this.slider.release();
	};

	// a list of functions that generates data from short codes
	var shortCodes = {
		'image': function(data, that){
			return getImageSource(data.farm , data.server , data.id , data.secret , that.options.imgSize, data);
		},

		'thumb': function(data, that){
			return getImageSource(data.farm , data.server , data.id , data.secret , that.options.thumbSize);
		},

		'title': function(data, that){
			return data.title;
		},

		'owner-name': function(data, that){
			return data.ownername;
		},

		'date-taken': function(data, that){
			return data.datetaken;
		},

		'views': function(data, that){
			return data.views;
		},

		'description': function(data, that){
			return data.description._content;
		}
	};

})(jQuery);

/* ================== bin-debug/js/pro/plugins/MSFacebookGallery.js =================== */
/**
 * Master Slider Facebook Gallery plugin
 * @author Averta Ltd.
 * @version 1.0.0
 */
;(function($){


	window.MSFacebookGallery = function(slider, options){
		var _options = {
			count			:10,
			type			:'photostream', // album
 			/*
 			orginal/960/720/600/480/320/130
 			 */
			thumbSize	:'320',

			/*
 			orginal/960/720/600/480/320/130
 			 */
			imgSize		: 'orginal',

			https: false,
            token: ''
		};

		this.slider = slider;
		this.slider.holdOn();

		$.extend(_options , options);
		this.options = _options;

        //this.graph = this.options.https ? 'https://graph.facebook.com' : 'http://graph.facebook.com';
		this.graph = 'https://graph.facebook.com';

		var that = this;

		if(this.options.type === 'photostream'){
			$.getJSON(this.graph + '/' + this.options.username + '/photos/uploaded/?fields=source,name,link,images,from&limit=' + this.options.count + '&access_token=' + this.options.token , function(data){
				that._photosData(data);
			});
		}else{
			$.getJSON(this.graph + '/' + this.options.albumId + '/photos?fields=source,name,link,images,from&limit=' + this.options.count + '&access_token=' + this.options.token , function(data){
				that._photosData(data);
			});
		}

		// grab slide template from slider markup
		this.slideTemplate = this.slider.$element.find('.ms-slide')[0].outerHTML;
		this.slider.$element.find('.ms-slide').remove(); // remove all slides from slider markup
	};

	var p = MSFacebookGallery.prototype;

	p._photosData = function(content){

		if(content.error){
			this.errMsg('Facebook API ERROR#' + content.error.code + '(' + content.error.type + ')' + ': ' + content.error.message);
			return;
		}

		var that = this;
		var getInfo = this.options.author || this.options.desc;

		for(var i=0,l=content.data.length;i!==l;i++){

			var slide_cont = that.slideTemplate.replace(/{{[\w-]+}}/g, function(match){
				match = match.replace(/{{|}}/g, '');
				if( shortCodes[match] ) {
					return shortCodes[match](content.data[i], that);
				} else {
					return '{{'+match+'}}';
				}

			});

			$(slide_cont).appendTo(that.slider.$element);
		}

		that._initSlider();
	};

	p.errMsg = function(msg){
		this.slider.$element.css('display', 'block');
		if(!this.errEle)
			this.errEle = $('<div style="font-family:Arial; color:red; font-size:12px; position:absolute; top:10px; left:10px"></div>').appendTo(this.slider.$loading);

		this.errEle.html(msg);
	};

	p._initSlider = function(){
		this.slider.release();
	};

	var getImageSource = function(images, size){

		if( size === 'orginal' ) {
			return images[0].source;
		}

		for(var i = 0, l = images.length; i !== l; i++){
			if( images[i].source.indexOf(size + 'x' + size) !== -1 )
				return images[i].source;
		}
      //  console.log(images)
		return images[0].source;
	};

	// a list of functions that generates data from short codes
	var shortCodes = {
		'image': function(data, that){

			return getImageSource(data.images, that.options.imgSize);
		},

		'thumb': function(data, that){
			return getImageSource(data.images, that.options.thumbSize);
		},

		'name': function(data, that){
			return data.name;
		},

		'owner-name': function(data, that){
			return data.from.name;
		},

		'link': function(data, that){
			return data.link;
		}
	};

})(jQuery);

/* ================== bin-debug/js/pro/plugins/MSScrollParallax.js =================== */
/**
 * Master Slider Parallax Layers Fade
 * @description Moves and fades layers of current slide while scrolling window.
 * @package MasterSlider
 * @author Averta
 * @since v1.8.0
 */

(function($){

	'use strict';

	window.MSScrollParallax = function (slider, parallax, bgparallax, fade) {
		this.fade = fade;
		this.slider = slider;
		this.parallax = parallax/100;
		this.bgparallax = bgparallax/100;

		slider.api.addEventListener(MSSliderEvent.INIT, this.init, this);
		slider.api.addEventListener(MSSliderEvent.DESTROY, this.destory, this);
		slider.api.addEventListener(MSSliderEvent.CHANGE_END, this.resetLayers, this);
		slider.api.addEventListener(MSSliderEvent.CHANGE_START, this.updateCurrentSlide, this);
	};

	window.MSScrollParallax.setup = function(slider, parallax, bgparallax, fade){
		// disable in mobile devices
		if ( window._mobile ) {
			return;
		}

		if( parallax == null ) {
			parallax = 50;
		}

		if( bgparallax == null ){
			bgparallax = 40;
		}

		return new MSScrollParallax(slider, parallax, bgparallax, fade);
	};

	var p = window.MSScrollParallax.prototype;

	p.init = function (e) {
		this.slider.$element.addClass('ms-scroll-parallax');
		this.sliderOffset = this.slider.$element.offset().top;
		this.updateCurrentSlide();
		// wrap layers element
		var slides = this.slider.api.view.slideList,
			slide;
		for(var i = 0, l = slides.length; i!==l ; i++) {
			slide = slides[i];
			if( slide.hasLayers ) {
				slide.layerController.$layers.wrap('<div class="ms-scroll-parallax-cont"></div>');
				slide.$scrollParallaxCont = slide.layerController.$layers.parent();
			}
		}

		$(window).on('scroll', {that:this}, this.moveParallax).trigger('scroll');
	};

	p.resetLayers = function (e) {
		if( !this.lastSlide ) {
			return;
		}

		var layers = this.lastSlide.$scrollParallaxCont;

		if ( window._css2d ) {
			if( layers ){
				layers[0].style[window._jcsspfx + 'Transform'] = '';
			}

			if ( this.lastSlide.hasBG ) {
				this.lastSlide.$imgcont[0].style[window._jcsspfx + 'Transform'] = '';
			}

		} else {
			if( layers ){
				layers[0].style.top = '';
			}

			if ( this.lastSlide.hasBG ) {
				this.lastSlide.$imgcont[0].style.top = '0px';
			}
		}
	};

	p.updateCurrentSlide = function (e) {
		this.lastSlide = this.currentSlide;

		this.currentSlide = this.slider.api.currentSlide;
		this.moveParallax({data:{that:this}});
	};

	p.moveParallax = function (e) {
		var that = e.data.that,
			slider = that.slider,
			offset = that.sliderOffset,
			scrollTop = $(window).scrollTop(),
			layers = that.currentSlide.$scrollParallaxCont,
			out = offset - scrollTop;

		if( out <= 0 ) {

			if( layers ){
				if ( window._css3d ) {
					layers[0].style[window._jcsspfx + 'Transform'] = 'translateY(' + -out * that.parallax + 'px) translateZ(0.4px)';
				} else if ( window._css2d ){
					layers[0].style[window._jcsspfx + 'Transform'] = 'translateY(' + -out * that.parallax + 'px)';
				} else {
					layers[0].style.top =  -out * that.parallax + 'px';
				}
			}

			that.updateSlidesBG(-out * that.bgparallax + 'px', true);

			if ( layers && that.fade ) {
				layers.css('opacity',  (1 - Math.min(1, -out / slider.api.height)) );
			}

		} else {
			if( layers ){
				if ( window._css2d ) {
					layers[0].style[window._jcsspfx + 'Transform'] = '';
				} else {
					layers[0].style.top = '';
				}
			}

			that.updateSlidesBG('0px', false);

			if ( layers && that.fade ) {
				layers.css('opacity',  1 );
			}

		}

	};

	p.updateSlidesBG = function(pos, fixed) {
		var slides = this.slider.api.view.slideList,
			position = ( fixed &&  !$.browser.msie && !$.browser.opera ? 'fixed' : '');

		for(var i = 0, l = slides.length; i!==l ; i++) {
			if ( slides[i].hasBG ) {
				slides[i].$imgcont[0].style.position = position;
				slides[i].$imgcont[0].style.top = pos;
			}

			if ( slides[i].$bgvideocont ){
				slides[i].$bgvideocont[0].style.position = position;
				slides[i].$bgvideocont[0].style.top = pos;
			}
		}

	};

	p.destory = function () {
		slider.api.removeEventListener(MSSliderEvent.INIT, this.init, this);
		slider.api.removeEventListener(MSSliderEvent.DESTROY, this.destory, this);
		slider.api.removeEventListener(MSSliderEvent.CHANGE_END, this.resetLayers, this);
		slider.api.removeEventListener(MSSliderEvent.CHANGE_START, this.updateCurrentSlide, this);
		$(window).off('scroll', this.moveParallax);
	};

})(jQuery);

/* ================== bin-debug/js/pro/plugins/MSKeyboardNav.js =================== */
/**
 * Keyboard navigation plugin for Master Slider.
 * @version  1.0.0
 * @author Averta
 * @package MasterSlider jQuery
 */
;(function($, document, window){
	var PId = 0;

	// check if master slider is available
	if ( !window.MasterSlider ) {
		return;
	}

	var KeyboardNav = function ( slider ) {
		this.slider = slider;
		this.PId = PId++;

		if ( this.slider.options.keyboard ) {
			slider.api.addEventListener(MSSliderEvent.INIT, this.init, this);
		}
	};

	KeyboardNav.name = 'MSKeyboardNav';
	var p = KeyboardNav.prototype;

	/**
	 * initiate the plugin
	 */
	p.init = function (){
		var api = this.slider.api;

		$(document).on('keydown.kbnav' + this.PId , function(event){
			var which = event.which;

			if ( which === 37 || which === 40 ) {
				api.previous(true);
			} else if ( which === 38 || which === 39 ) {
				api.next(true);
			}

		});

	};

	/**
	 * destroy the plugin
	 */
	p.destroy = function(){
		$(document).off('keydown.kbnav' + this.PId);
		this.slider.api.removeEventListener(MSSliderEvent.INIT, this.init, this);
	};

	// install plugin to master slider
	MasterSlider.registerPlugin( KeyboardNav );

})(jQuery, document, window);

/* ================== bin-debug/js/pro/plugins/MSStartOnAppear.js =================== */
/**
 * Start on appear plugin for Master Slider.
 *
 * @description This plugin prevents slider automatically initialization and inits slider when it appears inside of the browser window.
 * @version  1.0.0
 * @author Averta
 * @package MasterSlider jQuery
 */

;(function($, document, window){
	var PId = 0,
		$window = $(window),
		$doc = $(document);

	// check if master slider is available
	if ( !window.MasterSlider ) {
		return;
	}

	var StartOnAppear = function ( slider ) {
		this.PId = PId++;
		this.slider = slider;
		this.$slider = slider.$element;

		if ( this.slider.options.startOnAppear ) {
			// hold on slider
			slider.holdOn();
			$doc.ready($.proxy(this.init, this));
		}
	};

	StartOnAppear.name = 'MSStartOnAppear';
	var p = StartOnAppear.prototype;

	/**
	 * initiate the plugin
	 */
	p.init = function (){
		var api = this.slider.api;
		$window.on('scroll.soa' + this.PId , $.proxy(this._onScroll, this)).trigger('scroll');
	};

	p._onScroll = function () {
		// check slider position
		var vpBottom = $window.scrollTop() + $window.height(),
			top = this.$slider.offset().top ;

		if ( top < vpBottom ) {
			$window.off('scroll.soa' + this.PId);
			this.slider.release();
		}
	};

	/**
	 * destroy the plugin
	 */
	p.destroy = function(){};

	// install plugin to master slider
	MasterSlider.registerPlugin( StartOnAppear );

})(jQuery, document, window);

/* ================== bin-debug/js/pro/plugins/MSFilters.js =================== */
/**
 * Master Slider Filters Plugin
 * This plugin adds CSS3 filters to the slides, like brightness, grayscale, sepia, ... It works in major browser and devices but in IE `opacity` only supported.
 *
 * @package Master Slider jQuery
 * @author Averta
 * @version  1.0.0a
 */

;(function (document, window, jQuery){

	var filterUnits = {
		'hue-rotate' 	: 'deg',
		'blur' 			: 'px'
	}, initialValues = {
		'opacity' 		: 1,
		'contrast'		: 1,
		'brightness'	: 1,
		'saturate'		: 1,
		'hue-rotate'	: 0,
		'invert'		: 0,
		'sepia'			: 0,
		'blur'			: 0,
		'grayscale'		: 0
	}

	// check if master slider is available
	if ( !window.MasterSlider ) {
		return;
	}

	var Filters = function ( slider ) {
		this.slider = slider;

		if ( this.slider.options.filters ) {
			slider.api.addEventListener(MSSliderEvent.INIT, this.init, this);
		}
	};

	Filters.name = 'MSFilters';
	var p = Filters.prototype;

	/**
	 * initiate the plugin
	 */
	p.init = function (){
		var api = this.slider.api,
			view = api.view;

		this.filters 		= this.slider.options.filters;
		this.slideList 		= view.slideList;
		this.slidesCount 	= view.slidesCount;
		this.dimension 		= view[view.__dimension];
		this.target 		= this.slider.options.filterTarget === 'slide' ? '$element' : '$bg_img';
		this.filterName 	= $.browser.webkit ? 'WebkitFilter' : 'filter';

		// override controller update callback
		var superFun = view.controller.__renderHook.fun,
			superRef = view.controller.__renderHook.ref;
		view.controller.renderCallback( function (controller, value) {
			superFun.call(superRef, controller, value);
			this.applyEffect(value);
		} , this);
		this.applyEffect(view.controller.value);

	};

	/**
	 * Apply css effect to slides based on slide position.
	 * @param  {Number} value Current position of slider controller
	 */
	p.applyEffect = function (value) {
		var factor, slide;

		for( var i = 0; i < this.slidesCount; ++i ) {
			slide = this.slideList[i];
			factor = Math.min(1 , Math.abs(value - slide.position) / this.dimension);

			if ( slide[this.target] ) {
				if ( !$.browser.msie ) {
					slide[this.target][0].style[this.filterName] = this.generateStyle(factor);
				} else if ( this.filters.opacity != null ) {
					slide[this.target].opacity( 1 - this.filters.opacity * factor);
				}
			}
		}
	};

	/**
	 * Generate filter style based on slide distance factor
	 * @param  {Number} factor
	 * @return {String} CSS style
	 */
	p.generateStyle = function (factor) {
		var style = '',
			unit;

		for ( var filter in this.filters ) {
			unit = filterUnits[filter] || '';
			style += filter + '(' + ( initialValues[filter] + (this.filters[filter] - initialValues[filter]) * factor) + ') ';
		}

		return style;
	};

	/**
	 * destroy the plugin
	 */
	p.destroy = function(){
		this.slider.api.removeEventListener(MSSliderEvent.INIT, this.init, this);
	};

	// install plugin to master slider
	MasterSlider.registerPlugin( Filters );


})(document, window, jQuery);

/* ================== bin-debug/js/pro/plugins/MSScrollToAction.js =================== */
/**
 * Master Slider Scroll To Action Plugin.
 *
 * @description This plugins adds page scrolling actions to the layer actions list.
 * @version  1.0.0
 * @author Averta
 * @package MasterSlider jQuery
 */

;(function($, document, window){

	// check if master slider is available
	if ( !window.MasterSlider ) {
		return;
	}

	var ScrollToAction = function ( slider ) {
		this.slider = slider;
		slider.api.addEventListener(MSSliderEvent.INIT, this.init, this);
	};

	ScrollToAction.name = 'MSScrollToAction';
	var p = ScrollToAction.prototype;

	/**
	 * initiate the plugin
	 */
	p.init = function (){
		var api = this.slider.api;

		// define actions
		api.scrollToEnd = _scrollToEnd;
		api.scrollTo = _scrollTo;
	};

	/**
	 * destroy the plugin
	 */
	p.destroy = function(){};

	/**
	 * Scroll window to the target element in page
	 * @param {Number} duration animation duration (seconds)
	 */
	var _scrollTo = function ( target, duration ) {
		var sliderEle = this.slider.$element,
			target = $(target).eq(0);

		if ( target.length === 0 ) {
			return;
		}
		console.log(target.offset().top, duration )

		if( duration == null ) {
			duration = 1.4;
		}

		$('html, body').animate({
			scrollTop: target.offset().top
		}, duration * 1000, 'easeInOutQuad');
	};

	/**
	 * Scroll window to the bottom of slider
	 * @param {Number} duration animation duration (seconds)
	 */
	var _scrollToEnd = function ( duration ) {
		var sliderEle = this.slider.$element;

		if( duration == null ) {
			duration = 1.4;
		}

		$('html, body').animate({
			scrollTop: sliderEle.offset().top + sliderEle.outerHeight(false)
		}, duration * 1000, 'easeInOutQuad');
	}

	// install plugin to master slider
	MasterSlider.registerPlugin( ScrollToAction );

})(jQuery, document, window);

/* ================== bin-debug/js/pro/plugins/MSReadyCheck.js =================== */
;(function ( $, window, document, undefined ) {
    "use strict";

    // sample of using MSReady
    // ( window.MSReady = MSReady || [] ).push( function( jQuery ) {

    // });

    if ( window.MSReady ) {
        for ( var i = 0, l = MSReady.length; i !== l; i++ ) {
            MSReady[i].call( null, $ );
        }
    }
})(jQuery, window, document);
/*
 * Toastr
 * Copyright 2012-2015
 * Authors: John Papa, Hans Fjällemark, and Tim Ferrell.
 * All Rights Reserved.
 * Use, reproduction, distribution, and modification of this code is subject to the terms and
 * conditions of the MIT license, available at http://www.opensource.org/licenses/mit-license.php
 *
 * ARIA Support: Greta Krafsig
 *
 * Project: https://github.com/CodeSeven/toastr
 */
/* global define */
; (function (define) {
    define(['jquery'], function ($) {
        return (function () {
            var $container;
            var listener;
            var toastId = 0;
            var toastType = {
                error: 'error',
                info: 'info',
                success: 'success',
                warning: 'warning'
            };

            var toastr = {
                clear: clear,
                remove: remove,
                error: error,
                getContainer: getContainer,
                info: info,
                options: {},
                subscribe: subscribe,
                success: success,
                version: '2.1.2',
                warning: warning
            };

            var previousToast;

            return toastr;

            ////////////////

            function error(message, title, optionsOverride) {
                return notify({
                    type: toastType.error,
                    iconClass: getOptions().iconClasses.error,
                    message: message,
                    optionsOverride: optionsOverride,
                    title: title
                });
            }

            function getContainer(options, create) {
                if (!options) { options = getOptions(); }
                $container = $('#' + options.containerId);
                if ($container.length) {
                    return $container;
                }
                if (create) {
                    $container = createContainer(options);
                }
                return $container;
            }

            function info(message, title, optionsOverride) {
                return notify({
                    type: toastType.info,
                    iconClass: getOptions().iconClasses.info,
                    message: message,
                    optionsOverride: optionsOverride,
                    title: title
                });
            }

            function subscribe(callback) {
                listener = callback;
            }

            function success(message, title, optionsOverride) {
                return notify({
                    type: toastType.success,
                    iconClass: getOptions().iconClasses.success,
                    message: message,
                    optionsOverride: optionsOverride,
                    title: title
                });
            }

            function warning(message, title, optionsOverride) {
                return notify({
                    type: toastType.warning,
                    iconClass: getOptions().iconClasses.warning,
                    message: message,
                    optionsOverride: optionsOverride,
                    title: title
                });
            }

            function clear($toastElement, clearOptions) {
                var options = getOptions();
                if (!$container) { getContainer(options); }
                if (!clearToast($toastElement, options, clearOptions)) {
                    clearContainer(options);
                }
            }

            function remove($toastElement) {
                var options = getOptions();
                if (!$container) { getContainer(options); }
                if ($toastElement && $(':focus', $toastElement).length === 0) {
                    removeToast($toastElement);
                    return;
                }
                if ($container.children().length) {
                    $container.remove();
                }
            }

            // internal functions

            function clearContainer (options) {
                var toastsToClear = $container.children();
                for (var i = toastsToClear.length - 1; i >= 0; i--) {
                    clearToast($(toastsToClear[i]), options);
                }
            }

            function clearToast ($toastElement, options, clearOptions) {
                var force = clearOptions && clearOptions.force ? clearOptions.force : false;
                if ($toastElement && (force || $(':focus', $toastElement).length === 0)) {
                    $toastElement[options.hideMethod]({
                        duration: options.hideDuration,
                        easing: options.hideEasing,
                        complete: function () { removeToast($toastElement); }
                    });
                    return true;
                }
                return false;
            }

            function createContainer(options) {
                $container = $('<div/>')
                    .attr('id', options.containerId)
                    .addClass(options.positionClass)
                    .attr('aria-live', 'polite')
                    .attr('role', 'alert');

                $container.appendTo($(options.target));
                return $container;
            }

            function getDefaults() {
                return {
                    tapToDismiss: true,
                    toastClass: 'toast',
                    containerId: 'toast-container',
                    debug: false,

                    showMethod: 'fadeIn', //fadeIn, slideDown, and show are built into jQuery
                    showDuration: 300,
                    showEasing: 'swing', //swing and linear are built into jQuery
                    onShown: undefined,
                    hideMethod: 'fadeOut',
                    hideDuration: 1000,
                    hideEasing: 'swing',
                    onHidden: undefined,
                    closeMethod: false,
                    closeDuration: false,
                    closeEasing: false,

                    extendedTimeOut: 1000,
                    iconClasses: {
                        error: 'toast-error',
                        info: 'toast-info',
                        success: 'toast-success',
                        warning: 'toast-warning'
                    },
                    iconClass: 'toast-info',
                    positionClass: 'toast-top-right',
                    timeOut: 5000, // Set timeOut and extendedTimeOut to 0 to make it sticky
                    titleClass: 'toast-title',
                    messageClass: 'toast-message',
                    escapeHtml: false,
                    target: 'body',
                    closeHtml: '<button type="button">&times;</button>',
                    newestOnTop: true,
                    preventDuplicates: false,
                    progressBar: false
                };
            }

            function publish(args) {
                if (!listener) { return; }
                listener(args);
            }

            function notify(map) {
                var options = getOptions();
                var iconClass = map.iconClass || options.iconClass;

                if (typeof (map.optionsOverride) !== 'undefined') {
                    options = $.extend(options, map.optionsOverride);
                    iconClass = map.optionsOverride.iconClass || iconClass;
                }

                if (shouldExit(options, map)) { return; }

                toastId++;

                $container = getContainer(options, true);

                var intervalId = null;
                var $toastElement = $('<div/>');
                var $titleElement = $('<div/>');
                var $messageElement = $('<div/>');
                var $progressElement = $('<div/>');
                var $closeElement = $(options.closeHtml);
                var progressBar = {
                    intervalId: null,
                    hideEta: null,
                    maxHideTime: null
                };
                var response = {
                    toastId: toastId,
                    state: 'visible',
                    startTime: new Date(),
                    options: options,
                    map: map
                };

                personalizeToast();

                displayToast();

                handleEvents();

                publish(response);

                if (options.debug && console) {
                    console.log(response);
                }

                return $toastElement;

                function escapeHtml(source) {
                    if (source == null)
                        source = "";

                    return new String(source)
                        .replace(/&/g, '&amp;')
                        .replace(/"/g, '&quot;')
                        .replace(/'/g, '&#39;')
                        .replace(/</g, '&lt;')
                        .replace(/>/g, '&gt;');
                }

                function personalizeToast() {
                    setIcon();
                    setTitle();
                    setMessage();
                    setCloseButton();
                    setProgressBar();
                    setSequence();
                }

                function handleEvents() {
                    $toastElement.hover(stickAround, delayedHideToast);
                    if (!options.onclick && options.tapToDismiss) {
                        $toastElement.click(hideToast);
                    }

                    if (options.closeButton && $closeElement) {
                        $closeElement.click(function (event) {
                            if (event.stopPropagation) {
                                event.stopPropagation();
                            } else if (event.cancelBubble !== undefined && event.cancelBubble !== true) {
                                event.cancelBubble = true;
                            }
                            hideToast(true);
                        });
                    }

                    if (options.onclick) {
                        $toastElement.click(function (event) {
                            options.onclick(event);
                            hideToast();
                        });
                    }
                }

                function displayToast() {
                    $toastElement.hide();

                    $toastElement[options.showMethod](
                        {duration: options.showDuration, easing: options.showEasing, complete: options.onShown}
                    );

                    if (options.timeOut > 0) {
                        intervalId = setTimeout(hideToast, options.timeOut);
                        progressBar.maxHideTime = parseFloat(options.timeOut);
                        progressBar.hideEta = new Date().getTime() + progressBar.maxHideTime;
                        if (options.progressBar) {
                            progressBar.intervalId = setInterval(updateProgress, 10);
                        }
                    }
                }

                function setIcon() {
                    if (map.iconClass) {
                        $toastElement.addClass(options.toastClass).addClass(iconClass);
                    }
                }

                function setSequence() {
                    if (options.newestOnTop) {
                        $container.prepend($toastElement);
                    } else {
                        $container.append($toastElement);
                    }
                }

                function setTitle() {
                    if (map.title) {
                        $titleElement.append(!options.escapeHtml ? map.title : escapeHtml(map.title)).addClass(options.titleClass);
                        $toastElement.append($titleElement);
                    }
                }

                function setMessage() {
                    if (map.message) {
                        $messageElement.append(!options.escapeHtml ? map.message : escapeHtml(map.message)).addClass(options.messageClass);
                        $toastElement.append($messageElement);
                    }
                }

                function setCloseButton() {
                    if (options.closeButton) {
                        $closeElement.addClass('toast-close-button').attr('role', 'button');
                        $toastElement.prepend($closeElement);
                    }
                }

                function setProgressBar() {
                    if (options.progressBar) {
                        $progressElement.addClass('toast-progress');
                        $toastElement.prepend($progressElement);
                    }
                }

                function shouldExit(options, map) {
                    if (options.preventDuplicates) {
                        if (map.message === previousToast) {
                            return true;
                        } else {
                            previousToast = map.message;
                        }
                    }
                    return false;
                }

                function hideToast(override) {
                    var method = override && options.closeMethod !== false ? options.closeMethod : options.hideMethod;
                    var duration = override && options.closeDuration !== false ?
                        options.closeDuration : options.hideDuration;
                    var easing = override && options.closeEasing !== false ? options.closeEasing : options.hideEasing;
                    if ($(':focus', $toastElement).length && !override) {
                        return;
                    }
                    clearTimeout(progressBar.intervalId);
                    return $toastElement[method]({
                        duration: duration,
                        easing: easing,
                        complete: function () {
                            removeToast($toastElement);
                            if (options.onHidden && response.state !== 'hidden') {
                                options.onHidden();
                            }
                            response.state = 'hidden';
                            response.endTime = new Date();
                            publish(response);
                        }
                    });
                }

                function delayedHideToast() {
                    if (options.timeOut > 0 || options.extendedTimeOut > 0) {
                        intervalId = setTimeout(hideToast, options.extendedTimeOut);
                        progressBar.maxHideTime = parseFloat(options.extendedTimeOut);
                        progressBar.hideEta = new Date().getTime() + progressBar.maxHideTime;
                    }
                }

                function stickAround() {
                    clearTimeout(intervalId);
                    progressBar.hideEta = 0;
                    $toastElement.stop(true, true)[options.showMethod](
                        {duration: options.showDuration, easing: options.showEasing}
                    );
                }

                function updateProgress() {
                    var percentage = ((progressBar.hideEta - (new Date().getTime())) / progressBar.maxHideTime) * 100;
                    $progressElement.width(percentage + '%');
                }
            }

            function getOptions() {
                return $.extend({}, getDefaults(), toastr.options);
            }

            function removeToast($toastElement) {
                if (!$container) { $container = getContainer(); }
                if ($toastElement.is(':visible')) {
                    return;
                }
                $toastElement.remove();
                $toastElement = null;
                if ($container.children().length === 0) {
                    $container.remove();
                    previousToast = undefined;
                }
            }

        })();
    });
}(typeof define === 'function' && define.amd ? define : function (deps, factory) {
    if (typeof module !== 'undefined' && module.exports) { //Node
        module.exports = factory(require('jquery'));
    } else {
        window.toastr = factory(window.jQuery);
    }
}));

//# sourceMappingURL=plugins.js.map

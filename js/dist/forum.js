module.exports=function(t){var e={};function o(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=t,o.c=e,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=8)}([,function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["components/UserCard"]},function(t,e){t.exports=flarum.core.compat["models/User"]},function(t,e){t.exports=flarum.core.compat.Model},function(t,e){t.exports=flarum.core.compat.Component},function(t,e){t.exports=flarum.core.compat["components/LoadingIndicator"]},function(t,e){(function(){var t=[].slice;String.prototype.autoLink=function(){var e,o,r,n,a,s;return a=/(^|[\s\n]|<[A-Za-z]*\/?>)((?:https?|ftp):\/\/[\-A-Z0-9+\u0026\u2019@#\/%?=()~_|!:,.;]*[\-A-Z0-9+\u0026@#\/%=~()_|])/gi,0<(n=1<=arguments.length?t.call(arguments,0):[]).length?(r=n[0],o=function(){var t;for(e in t=[],r)s=r[e],"callback"!==e&&t.push(" "+e+"='"+s+"'");return t}().join(""),this.replace(a,(function(t,e,n){return""+e+(("function"==typeof r.callback?r.callback(n):void 0)||"<a href='"+n+"'"+o+">"+n+"</a>")}))):this.replace(a,"$1<a href='$2'>$2</a>")}}).call(this)},function(t,e,o){"use strict";o.r(e);var r=o(1),n=(o(7),o(2)),a=o.n(n),s=o(3),i=o.n(s),c=o(4),u=o.n(c);var p=o(5),l=o.n(p),f=o(6),d=o.n(f),v=function(t){var e,o;function r(){return t.apply(this,arguments)||this}o=t,(e=r).prototype=Object.create(o.prototype),e.prototype.constructor=e,e.__proto__=o;var n=r.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.editing=!1,this.loading=!1},n.view=function(){var t,e,o=this.attrs.user;return e=this.loading?m("p",{className:"EdorasCromos-placeholder"},d.a.component({size:"tiny"})):Object.values(o.cromos).map((function(t){return m("div",{className:"EdorasCromosListItem"},m("div",{className:"EdorasCromosListItem-content"},m("img",{className:"EdorasCromosList-image",src:"https://edoras.es/img/cromos/"+t.url,alt:t.nombre}),m("span",{className:"EdorasCromosList-title"},t.nombre)))})),t=m("div",{className:"EdorasCromosList"},e),m("div",{className:"EdorasCromos-widget"},t)},r}(l.a);app.initializers.add("edoras-cromos",(function(){i.a.prototype.cromos=u.a.attribute("cromos"),Object(r.extend)(a.a.prototype,"infoItems",(function(t){var e=this.attrs.user;e.attribute("canViewCromos")&&(!function(t){var e=new XMLHttpRequest;e.open("GET","https://edoras.es/api/cromos/user/"+t.attribute("displayName"),!0),e.onreadystatechange=function(o){if(4===e.readyState&&200===e.status){var r=JSON.parse(e.response);r.success&&(t.cromos=r.result)}},e.send(null)}(e),t.add("cromos",v.component({user:e})))}))}))}]);
//# sourceMappingURL=forum.js.map
(()=>{var o={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return o.d(r,{a:r}),r},d:(t,r)=>{for(var e in r)o.o(r,e)&&!o.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:r[e]})},o:(o,t)=>Object.prototype.hasOwnProperty.call(o,t),r:o=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})}},t={};(()=>{"use strict";o.r(t);const r=flarum.core.compat.extend,e=flarum.core.compat["components/UserCard"];var n=o.n(e);const s=flarum.core.compat["models/User"];var a=o.n(s);const i=flarum.core.compat.Model;var c=o.n(i);function l(o,t){return l=Object.setPrototypeOf||function(o,t){return o.__proto__=t,o},l(o,t)}function u(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,l(o,t)}const p=flarum.core.compat.Component;var d=o.n(p);const f=flarum.core.compat["components/LoadingIndicator"];var h=o.n(f);const v=flarum.core.compat["common/components/Tooltip"];var y=o.n(v);const b=flarum.core.compat["components/Modal"];var g=o.n(b);const C=flarum.core.compat["utils/ItemList"];var N=o.n(C);const L=flarum.core.compat["common/components/Link"];var I=o.n(L),M=function(o){function t(){return o.apply(this,arguments)||this}u(t,o);var r=t.prototype;return r.oninit=function(t){o.prototype.oninit.call(this,t),this.loading=!1},r.className=function(){return"Modal--small"},r.title=function(){return"Información del cromo"},r.content=function(){return m("div",null,m("div",{className:"Modal-body"},this.data().toArray()),m("div",{className:"Modal-footer"},m(I(),{href:"https://edoras.es/cromos.php?cromo="+this.attrs.cromo.id,external:!0,className:"Button",style:{margin:"0 10px"},"aria-label":"Detalles del cromo en la web"},"Detalles del cromo en la web")))},r.data=function(){var o=new(N()),t=this.attrs.cromo;return o.add("name",m("div",{className:"CromoModalListItem"},m("p",null,m("b",null,"Nombre:")," ",t.nombre))),o.add("type",m("div",{className:"CromoModalListItem"},m("p",null,m("b",null,"Tipo:")," ",t.tipo))),o.add("otorgado",m("div",{className:"CromoModalListItem"},m("p",null,m("b",null,"Otorgado el ")," ",t.fecha_otorgado," por ",m(I(),{href:app.route("user",{username:t.staff})},t.staff)))),o.add("description",m("div",{className:"CromoModalListItem"},m("p",null,m("b",null,"Descripción: ")),m("p",null,t.descripcion))),o.add("evidencies",m("div",{className:"CromoModalListItem"},m("p",null,m("b",null,"Requisitos: ")),m("p",null,t.evidencias))),t.retroactividad&&o.add("retroactividad",m("div",{className:"CromoModalListItem"},m("p",null,m("b",null,"Retroactividad: ")),m("p",null,t.retroactividad_tiempo))),o},t}(g()),w=function(o){function t(){return o.apply(this,arguments)||this}u(t,o);var r=t.prototype;return r.oninit=function(t){o.prototype.oninit.call(this,t),this.loading=!1},r.view=function(){var o,t,r=this.attrs.user;return t=this.loading?m("p",{className:"EdorasCromos-placeholder"},h().component({size:"tiny"})):Object.values(r.cromosVisibles).map((function(o){return m(y(),{text:o.nombre},m("div",{className:"EdorasCromosListItem",onclick:function(){return app.modal.show(M,{cromo:o})}},m("div",{className:"EdorasCromosListItem-content"},m("img",{className:"EdorasCromosList-image",src:"https://edoras.es/img/cromos/"+o.url,alt:o.nombre}))))})),o=m("div",{className:"EdorasCromosList"},t),m("div",{className:"EdorasCromos-widget"},o)},t}(d());const E=flarum.core.compat["common/components/LinkButton"];var j=o.n(E);const O=flarum.core.compat["forum/components/UserPage"];var _=o.n(O);const x=flarum.core.compat["components/UserPage"];var P=o.n(x);const U=flarum.core.compat["common/Component"];var A=o.n(U),S=function(o){function t(){return o.apply(this,arguments)||this}u(t,o);var r=t.prototype;return r.oninit=function(t){o.prototype.oninit.call(this,t)},r.view=function(){var o=this.attrs.cromo;return m("div",{className:"EdorasCromosListAllItem",onclick:function(){return app.modal.show(M,{cromo:o})}},m("img",{className:"EdorasCromosListAllItem-image",src:"https://edoras.es/img/cromos/"+o.url,alt:o.nombre}),m("p",{className:"EdorasCromosListAllItem-name"},o.nombre))},t}(A()),k=function(o){function t(){return o.apply(this,arguments)||this}return u(t,o),t.prototype.view=function(){var o=[];return this.attrs.user.cromos.map((function(t){if(!t)return null;o.push(t)})),m("div",{className:"UserCromos"},m("h3",null,"Lista completa de Cromos"),o.length>=1&&m("div",{className:"EdorasCromosListAll"},o.map((function(o){return m(S,{cromo:o})}))),o.length<1&&m("p",null,"Este usuario no tiene cromos"))},t}(A()),T=function(o){function t(){return o.apply(this,arguments)||this}u(t,o);var r=t.prototype;return r.oninit=function(t){o.prototype.oninit.call(this,t),this.user=null,this.loading=!0,this.loadUser(m.route.param("username"))},r.content=function(){return!this.user||this.loading?m(h(),{size:46}):k.component({user:this.user})},r.show=function(t){o.prototype.show.call(this,t),this.user=t;var r=null==t?void 0:t.attribute("displayName");if(!r)return null;var e=this;fetch("https://edoras.es/api/cromos/user/"+r,{}).then((function(o){return o.json()})).then((function(o){null!=o&&o.success&&(t.cromos=o.result,e.loading=!1,m.redraw())})).catch((function(o){return console.error(o)}))},t}(P());app.initializers.add("edoras-cromos",(function(){a().prototype.cromos=c().attribute("cromos"),a().prototype.cromosVisibles=c().attribute("cromosVisibles"),a().prototype.cantidadCromos=0,(0,r.extend)(n().prototype,"infoItems",(function(o){var t=this.attrs.user;!function(o){var t=null==o?void 0:o.attribute("displayName");if(!t)return null;var r="https://edoras.es/",e="api/cromos/user/";fetch(""+r+e+t+"/visible",{}).then((function(o){return o.json()})).then((function(t){null!=t&&t.success&&(o.cromosVisibles=t.result)})).catch((function(o){return console.error(o)})),fetch(""+r+e+t+"/amount",{}).then((function(o){return o.json()})).then((function(t){null!=t&&t.success&&(o.cantidadCromos=t.result)})).catch((function(o){return console.error(o)}))}(t),o.add("cromos",w.component({user:t}),-10)})),app.routes["user.cromos"]={path:"/u/:username/cromos",component:T},(0,r.extend)(_().prototype,"navItems",(function(o){o.add("badges",j().component({href:app.route("user.cromos",{username:this.user.username()}),name:"badges",icon:"fas fa-user-tag"},["Cromos",m("span",{className:"Button-badge"},this.user.cantidadCromos)]),90)}))}))})(),module.exports=t})();
//# sourceMappingURL=forum.js.map
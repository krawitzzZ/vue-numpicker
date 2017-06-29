webpackJsonp([1],{100:function(t,e,n){"use strict";function u(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(162),a=u(o),s=n(163),i=u(s),l=n(164),r=u(l);e.default={login:a.default,logout:i.default,register:r.default}},101:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var u=e.CHECK="CHECK",o=e.LOGIN="LOGIN",a=e.LOGOUT="LOGOUT";e.default={CHECK:u,LOGIN:o,LOGOUT:a}},137:function(t,e,n){"use strict";var u=n(41),o=function(t){return t&&t.__esModule?t:{default:t}}(u),a=n(396),s=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(a);n(99),new o.default(s).$mount("#app")},157:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var u=n(411),o=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(u);e.default={auth:o}},158:function(t,e,n){"use strict";function u(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(157),a=u(o),s=n(159),i=u(s);e.default={en:a.default,nl:i.default}},159:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var u=n(412),o=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(u);e.default={auth:o}},160:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{hasSlot:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default";return!!this.$slots[t]}}}},161:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=[{path:"/numpicker",name:"numpicker.index",component:n(400),meta:{guest:!0}},{path:"/",redirect:"/numpicker"},{path:"/*",redirect:"/numpicker"}]},162:function(t,e,n){"use strict";function u(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(41),a=u(o),s=n(47),i=u(s),l=function(t){i.default.dispatch("auth/login",t),a.default.router.push({name:"home.index"})};e.default=function(t){t.email&&t.password&&l("RandomGeneratedToken")}},163:function(t,e,n){"use strict";function u(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(41),a=u(o),s=n(47),i=u(s);e.default=function(){i.default.dispatch("auth/logout"),a.default.router.push({name:"login.index"})}},164:function(t,e,n){"use strict";function u(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(41),a=u(o),s=n(47),i=u(s),l=function(t){i.default.dispatch("auth/login",t),a.default.router.push({name:"home.index"})};e.default=function(t){t.email&&t.password&&t.passwordConfirm&&t.firstName&&t.lastName&&(t.password!==t.passwordConfirm||l("RandomGeneratedToken"))}},165:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.logout=e.login=e.check=void 0;var u=n(101),o=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(u),a=e.check=function(t){(0,t.commit)(o.CHECK)},s=e.login=function(t,e){(0,t.commit)(o.LOGIN,e)},i=e.logout=function(t){(0,t.commit)(o.LOGOUT)};e.default={check:a,login:s,logout:i}},166:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},167:function(t,e,n){"use strict";function u(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(165),a=u(o),s=n(166),i=u(s),l=n(168),r=u(l),c=n(169),d=u(c);e.default={namespaced:!0,actions:a.default,getters:i.default,mutations:r.default,state:d.default}},168:function(t,e,n){"use strict";function u(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o,a=n(177),s=u(a),i=n(41),l=u(i),r=n(101);e.default=(o={},(0,s.default)(o,r.CHECK,function(t){t.authenticated=!!localStorage.getItem("id_token"),t.authenticated&&(l.default.$http.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("id_token"))}),(0,s.default)(o,r.LOGIN,function(t,e){t.authenticated=!0,localStorage.setItem("id_token",e),l.default.$http.defaults.headers.common.Authorization="Bearer "+e}),(0,s.default)(o,r.LOGOUT,function(t){t.authenticated=!1,localStorage.removeItem("id_token"),l.default.$http.defaults.headers.common.Authorization=""}),o)},169:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={authenticated:!1}},170:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var u=n(47),o=function(t){return t&&t.__esModule?t:{default:t}}(u),a=n(99);e.default={store:o.default,router:a.router,i18n:a.i18n,mounted:function(){this.$store.state.auth.authenticated&&window.console.log("User authenticated")}}},171:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var u=n(175),o=function(t){return t&&t.__esModule?t:{default:t}}(u);e.default={props:{value:{type:Number,required:!1},options:{type:Array,required:!0,default:[]}},data:function(){return{allowCustomOptionInput:!1,customOption:""}},methods:{onCustomOptionChange:function(t){var e=Number(t);if(isNaN(e)||t.includes(" "))return void(this.$refs.customOption.value=this.customOption);this.customOption=e},onCustomOptionClick:function(){if((0,o.default)(this.customOption))return this.$emit("input",this.customOption);this.allowCustomOptionInput=!0},onCustomOptionClose:function(){this.allowCustomOptionInput=!1,(0,o.default)(this.customOption)&&this.$emit("input",this.customOption)},resetCustomInputValue:function(){this.customOption=""}}}},172:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var u=n(160),o=function(t){return t&&t.__esModule?t:{default:t}}(u);e.default={mixins:[o.default],props:{contextualStyle:{type:String,required:!1}},computed:{classNames:function t(){var t=["panel"];return this.contextualStyle?t.push("panel-"+this.contextualStyle):t.push("panel-default"),t}}}},173:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var u=n(100),o=function(t){return t&&t.__esModule?t:{default:t}}(u);e.default={methods:{logout:function(){o.default.logout()}}}},174:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var u=n(135),o=function(t){return t&&t.__esModule?t:{default:t}}(u),a=[2,4,6,8,10];e.default={mounted:function(){(0,o.default)('[data-toggle="tooltip"]').tooltip()},data:function(){return{selectedOption:null,options:a}},methods:{resetNumPickerValues:function(){this.selectedOption=null,this.options=a,this.$refs.numpicker.resetCustomInputValue()}},components:{VLayout:n(399),VPanel:n(398),VNumPicker:n(397)}}},386:function(t,e){},387:function(t,e){},388:function(t,e){},389:function(t,e){},390:function(t,e){},391:function(t,e){},396:function(t,e,n){var u=n(51)(n(170),n(404),null,null);t.exports=u.exports},397:function(t,e,n){n(389);var u=n(51)(n(171),n(402),null,null);t.exports=u.exports},398:function(t,e,n){var u=n(51)(n(172),n(401),null,null);t.exports=u.exports},399:function(t,e,n){n(391);var u=n(51)(n(173),n(405),null,null);t.exports=u.exports},400:function(t,e,n){n(390);var u=n(51)(n(174),n(403),null,null);t.exports=u.exports},401:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.classNames},[t.hasSlot("heading")?n("div",{staticClass:"panel-heading"},[t._t("heading")],2):t._e(),t._v(" "),t.hasSlot("body")?n("div",{staticClass:"panel-body"},[t._t("body")],2):t._e(),t._v(" "),t.hasSlot("footer")?n("div",{staticClass:"panel-footer"},[t._t("footer")],2):t._e()])},staticRenderFns:[]}},402:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.allowCustomOptionInput?n("div",{staticClass:"input-group numpicker-body"},[n("div",{staticClass:"w-full"},[n("span",{staticClass:"close-custom-option-input",attrs:{"data-toggle":"tooltip",title:"Save and close input"},on:{click:t.onCustomOptionClose}},[n("i",{staticClass:"fa fa-close"})]),t._v(" "),n("input",{ref:"customOption",staticClass:"form-control",attrs:{autofocus:"",type:"text",placeholder:"Input your own quantity of players"},domProps:{value:t.customOption},on:{input:function(e){e.preventDefault(),t.onCustomOptionChange(e.target.value)}}})])]):n("ul",{staticClass:"nav nav-pills numpicker-body"},[t._l(t.options,function(e,u){return n("li",{key:u,staticClass:"option",class:{selected:e===t.value},attrs:{role:"presentation"},on:{click:function(n){t.$emit("input",e)}}},[n("a",[t._v(t._s(e))])])}),t._v(" "),n("li",{staticClass:"option",class:{selected:t.customOption===t.value},attrs:{role:"presentation"},on:{click:t.onCustomOptionClick}},[n("a",[t._v(t._s(t.customOption||"..."))])])],2)},staticRenderFns:[]}},403:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",[n("v-panel",{attrs:{"contextual-style":"primary"}},[n("h1",{staticClass:"panel-title text-center",slot:"heading"},[t._v("\n      How many players?\n      "),n("span",{staticClass:"reset-numpicker",attrs:{"data-toggle":"tooltip",title:"Reset numpicker values"},on:{click:t.resetNumPickerValues}},[n("i",{staticClass:"fa fa-close"})])]),t._v(" "),n("div",{slot:"body"},[n("v-num-picker",{ref:"numpicker",attrs:{options:t.options},model:{value:t.selectedOption,callback:function(e){t.selectedOption=e},expression:"selectedOption"}})],1)])],1)},staticRenderFns:[]}},404:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},405:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-8 col-md-offset-2"},[t._t("default")],2)])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-default"},[n("div",{staticClass:"container"},[n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbar"}},[n("h2",{staticClass:"text-bold text-center h2"},[t._v("Welcome to the NumPicker example!")])])])])}]}},411:function(t,e){t.exports={failed:"Login failed",success:"Login successful"}},412:function(t,e){t.exports={failed:"Het inloggen is mislukt",success:"Het inloggen is geslaagd"}},413:function(t,e,n){n(138),t.exports=n(137)},47:function(t,e,n){"use strict";function u(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(41),a=u(o),s=n(410),i=u(s),l=n(409),r=(u(l),n(167)),c=u(r);a.default.use(i.default);e.default=new i.default.Store({modules:{auth:c.default},strict:!1,plugins:[]})},99:function(t,e,n){"use strict";function u(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.i18n=e.router=void 0;var o=n(41),a=u(o),s=n(139),i=u(s),l=n(100),r=u(l),c=n(408),d=u(c),f=n(47),p=u(f),_=n(406),m=u(_),v=n(161),h=u(v),O=n(395),y=u(O),g=n(158),C=u(g),b=n(135),M=u(b);a.default.config.debug=!1,i.default.defaults.baseURL="http://example.com/api/v1",i.default.defaults.headers.common.Accept="application/json",i.default.interceptors.response.use(function(t){return t},function(t){401===t.response.status&&r.default.logout()}),a.default.$http=i.default,Object.defineProperty(a.default.prototype,"$http",{get:function(){return i.default}}),p.default.dispatch("auth/check"),a.default.use(m.default);var k=e.router=new m.default({routes:h.default});k.beforeEach(function(t,e,n){n()}),d.default.sync(p.default,k),a.default.router=k,a.default.use(y.default);var x=e.i18n=new y.default({locale:"en",fallbackLocale:"en",messages:C.default});window.$=window.jQuery=M.default,n(179),n(387),n(388),n(386),e.default={router:k,i18n:x}}},[413]);
//# sourceMappingURL=app.7c7004410b09aea20256.js.map
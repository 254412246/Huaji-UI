(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{499:function(t,o,e){},501:function(t,o,e){"use strict";var n=e(6),s=e(4),i=e(94),a=e(11),l=e(7),c=e(18),u=e(502),r=e(44),f=e(2),p=e(29),d=e(67).f,m=e(25).f,h=e(9).f,v=e(497).trim,C=s.Number,b=C.prototype,_="Number"==c(p(b)),g=function(t){var o,e,n,s,i,a,l,c,u=r(t,!1);if("string"==typeof u&&u.length>2)if(43===(o=(u=v(u)).charCodeAt(0))||45===o){if(88===(e=u.charCodeAt(2))||120===e)return NaN}else if(48===o){switch(u.charCodeAt(1)){case 66:case 98:n=2,s=49;break;case 79:case 111:n=8,s=55;break;default:return+u}for(a=(i=u.slice(2)).length,l=0;l<a;l++)if((c=i.charCodeAt(l))<48||c>s)return NaN;return parseInt(i,n)}return+u};if(i("Number",!C(" 0o1")||!C("0b1")||C("+0x1"))){for(var y,B=function(t){var o=arguments.length<1?0:t,e=this;return e instanceof B&&(_?f((function(){b.valueOf.call(e)})):"Number"!=c(e))?u(new C(g(o)),e,B):g(o)},N=n?d(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),$=0;N.length>$;$++)l(C,y=N[$])&&!l(B,y)&&h(B,y,m(C,y));B.prototype=b,b.constructor=B,a(s,"Number",B)}},502:function(t,o,e){var n=e(5),s=e(95);t.exports=function(t,o,e){var i,a;return s&&"function"==typeof(i=o.constructor)&&i!==e&&n(a=i.prototype)&&a!==e.prototype&&s(t,a),t}},505:function(t,o,e){},506:function(t,o,e){"use strict";var n=e(0),s=e(509);n.a.component("lm-icon",s.a);var i={name:"LemonButton",props:{icon:{},loading:{type:Boolean,default:!1},iconPosition:{type:String,default:"left",validator:function(t){return"left"===t||"right"===t}}}},a=(e(507),e(43)),l=Object(a.a)(i,(function(){var t,o=this,e=o.$createElement,n=o._self._c||e;return n("button",{staticClass:"lm-button test",class:(t={},t["icon-"+o.iconPosition]=!0,t),on:{click:function(t){return o.$emit("click")}}},[o.icon&&!o.loading?n("lm-icon",{attrs:{name:o.icon}}):o._e(),o._v(" "),o.loading?n("lm-icon",{staticClass:"loading icon",attrs:{name:"loading"}}):o._e(),o._v(" "),n("div",{staticClass:"content"},[o._t("default")],2)],1)}),[],!1,null,"6fd77335",null);o.a=l.exports},507:function(t,o,e){"use strict";var n=e(499);e.n(n).a},513:function(t,o,e){"use strict";var n=e(505);e.n(n).a},514:function(t,o,e){"use strict";e(167),e(501),e(515),e(171);e(0).a.prototype.$toast=function(){console.log("我是 toast")};var n,s={name:"LemonToast",props:{autoClose:{type:[Boolean,Number],default:5,validator:function(t){return!1===t||"number"==typeof t}},isCloseButton:{type:Boolean,default:function(){return!1}},closeButton:{type:Object,default:function(){return{text:"关闭",callback:void 0}}},enableHtml:{type:Boolean,default:!1},position:{type:String,default:"top",validator:function(t){return["top","middle","bottom"].indexOf(t)>=0}}},mounted:function(){this.delayClose(),this.updateStyle()},computed:{toastClasses:function(){return t={},o="position-".concat(this.position),e=!0,o in t?Object.defineProperty(t,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[o]=e,t;var t,o,e}},methods:{updateStyle:function(){var t=this;this.$nextTick((function(){t.$refs.line&&(t.$refs.line.style.height=t.$refs.toast.getBoundingClientRect().height+"px")}))},delayClose:function(){var t=this;setTimeout((function(){t.autoClose&&t.close()}),1e3*this.autoClose)},close:function(){this.$el.remove(),this.$emit("close"),this.$destroy()},onClickClose:function(){this.close(),this.closeButton&&"function"==typeof this.closeButton.callback&&this.closeButton.callback()}}},i=(e(513),e(43)),a=Object(i.a)(s,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"wrapper",class:t.toastClasses},[e("div",{ref:"toast",staticClass:"toast"},[e("div",{staticClass:"message"},[t.enableHtml?e("div",{domProps:{innerHTML:t._s(t.$slots.default[0])}}):t._t("default")],2),t._v(" "),t.isCloseButton?e("div",{staticClass:"closeWrapper"},[e("div",{ref:"line",staticClass:"line"}),t._v(" "),t.closeButton?e("span",{staticClass:"close",on:{click:t.onClickClose}},[t._v("\n        "+t._s(t.closeButton.text)+"\n      ")]):t._e()]):t._e()])])}),[],!1,null,"8f76347a",null).exports;o.a={install:function(t,o){t.prototype.$toast=function(o,e){n&&n.close(),n=function(t){var o=t.Vue,e=t.message,n=t.propsData,s=t.onClose,i=new(o.extend(a))({propsData:n});return i.$slots.default=[e],i.$mount(),i.$on("close",s),document.body.appendChild(i.$el),i}({Vue:t,message:o,propsData:e,onClose:function(){n=null}})}}}},626:function(t,o,e){"use strict";e.r(o);var n=e(514),s=e(500),i=e(506);e(0).a.use(n.a);var a={name:"collapse-demos",components:{templateDemos:s.default,Button:i.a},mounted:function(){},methods:{showToast1:function(){this.$toast("顶部信息",{isCloseButton:!0})},showToast2:function(){this.$toast("中部信息",{position:"middle",isCloseButton:!0})},showToast3:function(){this.$toast("底部信息",{position:"bottom",isCloseButton:!0})}},data:function(){return{code:"\nthis.$toast('顶部信息', { isCloseButton: true });\nthis.$toast('中部信息', { position: \"middle\", isCloseButton: true });\nthis.$toast('底部信息', { position: \"bottom\", isCloseButton: true });\n "}}},l=e(43),c=Object(l.a)(a,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("templateDemos",{attrs:{title:"手动关闭",code:t.code}},[e("Button",{on:{click:t.showToast1}},[t._v("顶部信息")]),t._v(" "),e("Button",{on:{click:t.showToast2}},[t._v("中部信息")]),t._v(" "),e("Button",{on:{click:t.showToast3}},[t._v("底部信息")])],1)}),[],!1,null,"912b6cce",null);o.default=c.exports}}]);
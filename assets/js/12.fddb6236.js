(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{499:function(t,n,o){},506:function(t,n,o){"use strict";var i=o(0),a=o(509);i.a.component("lm-icon",a.a);var c={name:"LemonButton",props:{icon:{},loading:{type:Boolean,default:!1},iconPosition:{type:String,default:"left",validator:function(t){return"left"===t||"right"===t}}}},s=(o(507),o(43)),e=Object(s.a)(c,(function(){var t,n=this,o=n.$createElement,i=n._self._c||o;return i("button",{staticClass:"lm-button test",class:(t={},t["icon-"+n.iconPosition]=!0,t),on:{click:function(t){return n.$emit("click")}}},[n.icon&&!n.loading?i("lm-icon",{attrs:{name:n.icon}}):n._e(),n._v(" "),n.loading?i("lm-icon",{staticClass:"loading icon",attrs:{name:"loading"}}):n._e(),n._v(" "),i("div",{staticClass:"content"},[n._t("default")],2)],1)}),[],!1,null,"6fd77335",null);n.a=e.exports},507:function(t,n,o){"use strict";var i=o(499);o.n(i).a},531:function(t,n,o){},592:function(t,n,o){"use strict";var i=o(531);o.n(i).a},619:function(t,n,o){"use strict";o.r(n);var i=o(506),a=o(500),c={name:"button-simple-demos",components:{Button:i.a,templateDemos:a.default},data:function(){return{isLoading:!1,code:'<div>\n  <Button>默认按钮</Button>\n  <Button disabled>禁用按钮</Button>\n  <Button :loading="isLoading" @click="isLoading=!isLoading">点击加载</Button>\n</div>\n<div>\n  <Button icon="shezhi">设置按钮</Button>\n  <Button icon="dianzan">点赞按钮</Button>\n  <Button icon="shoucang">收藏按钮</Button>\n  <Button icon="shanchu">删除按钮</Button>\n</div>'}}},s=(o(592),o(43)),e=Object(s.a)(c,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("templateDemos",{attrs:{title:"基本用法",code:t.code}},[o("div",{staticClass:"wrapper"},[o("Button",[t._v("默认按钮")]),t._v(" "),o("Button",{attrs:{disabled:""}},[t._v("禁用按钮")]),t._v(" "),o("Button",{attrs:{loading:t.isLoading},on:{click:function(n){t.isLoading=!t.isLoading}}},[t._v("点击加载")])],1),t._v(" "),o("div",{staticClass:"wrapper"},[o("Button",{attrs:{icon:"shezhi"}},[t._v("设置按钮")]),t._v(" "),o("Button",{attrs:{icon:"dianzan"}},[t._v("点赞按钮")]),t._v(" "),o("Button",{attrs:{icon:"shoucang"}},[t._v("收藏按钮")]),t._v(" "),o("Button",{attrs:{icon:"shanchu"}},[t._v("删除按钮")])],1)])}),[],!1,null,"06934cb7",null);n.default=e.exports}}]);
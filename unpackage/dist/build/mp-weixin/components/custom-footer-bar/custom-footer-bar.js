(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/custom-footer-bar/custom-footer-bar"],{"0079":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e("ae66"),o={name:"cus-footer-bar",props:{cusFooterBarIsShow:{type:Boolean,default:!1},isOpenAdaptation:{type:Boolean,default:!1}},data:function(){return{staticUrl:a.config.staticUrl,footerbarAni:""}},methods:{jumpFun:function(n){1==n?t.switchTab({url:"/pages/index/index"}):2==n?t.switchTab({url:"/pages/openScan/openScan"}):3==n&&t.switchTab({url:"/pages/personalCenter/personalCenter"})},startAnimation:function(){console.log(3);var t=this,n=wx.createAnimation({duration:1e3,timingFunction:"ease",delay:1500});n.opacity(1).step(),t.footerbarAni=n.export()},isStartAnimationFun:function(t){this.startAnimation()}}};n.default=o}).call(this,e("543d")["default"])},"00b9":function(t,n,e){},"76a9":function(t,n,e){"use strict";var a,o=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return a}))},a04b:function(t,n,e){"use strict";e.r(n);var a=e("76a9"),o=e("dce2");for(var r in o)"default"!==r&&function(t){e.d(n,t,(function(){return o[t]}))}(r);e("bbd3");var i,u=e("f0c5"),c=Object(u["a"])(o["default"],a["b"],a["c"],!1,null,"7ba679e4",null,!1,a["a"],i);n["default"]=c.exports},bbd3:function(t,n,e){"use strict";var a=e("00b9"),o=e.n(a);o.a},dce2:function(t,n,e){"use strict";e.r(n);var a=e("0079"),o=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);n["default"]=o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/custom-footer-bar/custom-footer-bar-create-component',
    {
        'components/custom-footer-bar/custom-footer-bar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("a04b"))
        })
    },
    [['components/custom-footer-bar/custom-footer-bar-create-component']]
]);

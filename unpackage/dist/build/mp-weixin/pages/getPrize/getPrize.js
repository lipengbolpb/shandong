(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/getPrize/getPrize"],{"4ee8":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e("ae66"),a={name:"getPrize",data:function(){return{staticUrl:i.config.staticUrl,isStartAnimation:!0,getPrizeAni:"",lijilingquAni:"",diAni:"",guangAni:"",qianAni:"",fontMesAni:"",gaiAni:"",isGetPrize:!1}},onShow:function(){this.startAnimation()},onLoad:function(t){console.log(t),console.log(t.isGetPrize),this.isGetPrize=t.isGetPrize||!1},methods:{startAnimation:function(){console.log(3);var t=this,n=wx.createAnimation({duration:500,timingFunction:"ease",delay:500});n.scale(1).step(),t.diAni=n.export();var e=wx.createAnimation({duration:500,timingFunction:"ease",delay:500});e.scale(1).step(),t.qianAni=e.export();var i=wx.createAnimation({duration:500,timingFunction:"ease",delay:500});i.scale(1).step(),t.guangAni=i.export();var a=wx.createAnimation({duration:500,timingFunction:"ease",delay:500});a.scale(1).step(),t.fontMesAni=a.export();var o=wx.createAnimation({duration:500,timingFunction:"ease",delay:500});o.scale(1).step(),t.gaiAni=o.export();var r=wx.createAnimation({duration:500,timingFunction:"ease",delay:1e3});r.opacity(1).translateY(0).step(),t.lijilingquAni=r.export()},toGetPrize:function(){t.redirectTo({url:"../submitUserInformation/submitUserInformation?isGetPrize="+this.isGetPrize})}}};n.default=a}).call(this,e("543d")["default"])},"52eb":function(t,n,e){"use strict";var i,a=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}))},"62bd":function(t,n,e){},"9c16":function(t,n,e){"use strict";(function(t){e("8d82");i(e("66fd"));var n=i(e("d243"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},a03e:function(t,n,e){"use strict";var i=e("62bd"),a=e.n(i);a.a},b580:function(t,n,e){"use strict";e.r(n);var i=e("4ee8"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},d243:function(t,n,e){"use strict";e.r(n);var i=e("52eb"),a=e("b580");for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("a03e");var r,u=e("f0c5"),c=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"583204a4",null,!1,i["a"],r);n["default"]=c.exports}},[["9c16","common/runtime","common/vendor"]]]);
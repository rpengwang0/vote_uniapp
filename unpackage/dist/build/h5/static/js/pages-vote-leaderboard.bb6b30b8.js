(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-vote-leaderboard"],{"0882":function(e,t,i){"use strict";i.r(t);var a=i("c7de"),n=i("afc5");for(var r in n)"default"!==r&&function(e){i.d(t,e,(function(){return n[e]}))}(r);i("dd03");var o,d=i("f0c5"),c=Object(d["a"])(n["default"],a["b"],a["c"],!1,null,"1009c249",null,!1,a["a"],o);t["default"]=c.exports},"0f2f":function(e,t,i){"use strict";i.r(t);var a=i("b626"),n=i.n(a);for(var r in a)"default"!==r&&function(e){i.d(t,e,(function(){return a[e]}))}(r);t["default"]=n.a},"14e6":function(e,t,i){"use strict";i.r(t);var a=i("9b67"),n=i("cdec");for(var r in n)"default"!==r&&function(e){i.d(t,e,(function(){return n[e]}))}(r);i("7f5c");var o,d=i("f0c5"),c=Object(d["a"])(n["default"],a["b"],a["c"],!1,null,"7da789c4",null,!1,a["a"],o);t["default"]=c.exports},4876:function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */uni-page-body[data-v-7e4ebd3d]{background-color:#f5f5f5;height:100vh}.container .flex-center[data-v-7e4ebd3d]{display:flex;text-align:center;align-content:center;justify-content:center;align-items:center}.container .head-bg[data-v-7e4ebd3d]{position:fixed;top:0;width:100%;height:%?200?%;background-image:linear-gradient(#f96770,#fc587d);border-radius:0 0 20% 20%;z-index:-1}.container .head[data-v-7e4ebd3d]{padding:%?30?%}.container .head uni-text[data-v-7e4ebd3d]{color:#fff;font-size:%?30?%;padding-left:%?20?%}.container .list[data-v-7e4ebd3d]{background-color:#fff;border-radius:%?15?%;margin:0 %?30?% %?30?% %?30?%;box-shadow:0 0 2px #ddd}.container .table[data-v-7e4ebd3d]{padding:%?30?% 0;flex-wrap:wrap}.container .table .leaderboard[data-v-7e4ebd3d]{flex-basis:20%;display:flex;align-content:center;justify-content:center}.container .table .name[data-v-7e4ebd3d]{justify-content:flex-start;text-align:left;flex-basis:60%}.container .table .name .name-text[data-v-7e4ebd3d]{padding-left:%?20?%;padding-right:%?10?%;word-break:break-all;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;overflow:hidden}.container .table .vote[data-v-7e4ebd3d]{flex-basis:20%}body.?%PAGE?%[data-v-7e4ebd3d]{background-color:#f5f5f5}',""]),e.exports=t},"5c2d":function(e,t,i){var a=i("4876");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("25360b9a",a,!0,{sourceMap:!1,shadowMode:!1})},"60ac":function(e,t,i){"use strict";i.r(t);var a=i("6e0e"),n=i("6f6f");for(var r in n)"default"!==r&&function(e){i.d(t,e,(function(){return n[e]}))}(r);i("fcee");var o,d=i("f0c5"),c=Object(d["a"])(n["default"],a["b"],a["c"],!1,null,"1cb4f18a",null,!1,a["a"],o);t["default"]=c.exports},"6ba2":function(e,t,i){"use strict";i("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"u-image",props:{src:{type:String,default:""},mode:{type:String,default:"aspectFill"},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:"auto"},shape:{type:String,default:"square"},borderRadius:{type:[String,Number],default:0},lazyLoad:{type:Boolean,default:!0},showMenuByLongpress:{type:Boolean,default:!0},loadingIcon:{type:String,default:"photo"},errorIcon:{type:String,default:"error-circle"},showLoading:{type:Boolean,default:!0},showError:{type:Boolean,default:!0},fade:{type:Boolean,default:!0},webp:{type:Boolean,default:!1},duration:{type:[String,Number],default:500},bgColor:{type:String,default:"#f3f4f6"}},data:function(){return{isError:!1,loading:!0,opacity:1,durationTime:this.duration,backgroundStyle:{}}},watch:{src:{immediate:!0,handler:function(e){e?this.isError=!1:(this.isError=!0,this.loading=!1)}}},computed:{wrapStyle:function(){var e={};return e.width=this.$u.addUnit(this.width),e.height=this.$u.addUnit(this.height),e.borderRadius="circle"==this.shape?"50%":this.$u.addUnit(this.borderRadius),e.overflow=this.borderRadius>0?"hidden":"visible",this.fade&&(e.opacity=this.opacity,e.transition="opacity ".concat(Number(this.durationTime)/1e3,"s ease-in-out")),e}},methods:{onClick:function(){this.$emit("click")},onErrorHandler:function(e){this.loading=!1,this.isError=!0,this.$emit("error",e)},onLoadHandler:function(){var e=this;if(this.loading=!1,this.isError=!1,this.$emit("load"),!this.fade)return this.removeBgColor();this.opacity=0,this.durationTime=0,setTimeout((function(){e.durationTime=e.duration,e.opacity=1,setTimeout((function(){e.removeBgColor()}),e.durationTime)}),50)},removeBgColor:function(){this.backgroundStyle={backgroundColor:"transparent"}}}};t.default=a},"6e0e":function(e,t,i){"use strict";var a;i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return a}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.show?i("v-uni-view",{staticClass:"u-loading",class:"circle"==e.mode?"u-loading-circle":"u-loading-flower",style:[e.cricleStyle]}):e._e()},r=[]},"6f6f":function(e,t,i){"use strict";i.r(t);var a=i("9b52"),n=i.n(a);for(var r in a)"default"!==r&&function(e){i.d(t,e,(function(){return a[e]}))}(r);t["default"]=n.a},"7f5c":function(e,t,i){"use strict";var a=i("aabf"),n=i.n(a);n.a},"86d9":function(e,t,i){var a=i("f459");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("51aa627b",a,!0,{sourceMap:!1,shadowMode:!1})},"876d":function(e,t,i){"use strict";i("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"u-empty",props:{src:{type:String,default:""},text:{type:String,default:""},color:{type:String,default:"#c0c4cc"},iconColor:{type:String,default:"#c0c4cc"},iconSize:{type:[String,Number],default:120},fontSize:{type:[String,Number],default:26},mode:{type:String,default:"data"},imgWidth:{type:[String,Number],default:120},imgHeight:{type:[String,Number],default:"auto"},show:{type:Boolean,default:!0},marginTop:{type:[String,Number],default:0},iconStyle:{type:Object,default:function(){return{}}}},data:function(){return{icons:{car:"购物车为空",page:"页面不存在",search:"没有搜索结果",address:"没有收货地址",wifi:"没有WiFi",order:"订单为空",coupon:"没有优惠券",favor:"暂无收藏",permission:"无权限",history:"无历史记录",news:"无新闻列表",message:"消息列表为空",list:"列表为空",data:"数据为空"}}}};t.default=a},"9b52":function(e,t,i){"use strict";i("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"u-loading",props:{mode:{type:String,default:"circle"},color:{type:String,default:"#c7c7c7"},size:{type:[String,Number],default:"34"},show:{type:Boolean,default:!0}},computed:{cricleStyle:function(){var e={};return e.width=this.size+"rpx",e.height=this.size+"rpx","circle"==this.mode&&(e.borderColor="#e4e4e4 #e4e4e4 #e4e4e4 ".concat(this.color?this.color:"#c7c7c7")),e}}};t.default=a},"9b67":function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return a}));var a={uIcon:i("cd19").default},n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"u-image",style:[e.wrapStyle,e.backgroundStyle],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick.apply(void 0,arguments)}}},[e.isError?e._e():i("v-uni-image",{staticClass:"u-image__image",style:{borderRadius:"circle"==e.shape?"50%":e.$u.addUnit(e.borderRadius)},attrs:{src:e.src,mode:e.mode,"lazy-load":e.lazyLoad,"show-menu-by-longpress":e.showMenuByLongpress},on:{error:function(t){arguments[0]=t=e.$handleEvent(t),e.onErrorHandler.apply(void 0,arguments)},load:function(t){arguments[0]=t=e.$handleEvent(t),e.onLoadHandler.apply(void 0,arguments)}}}),e.showLoading&&e.loading?i("v-uni-view",{staticClass:"u-image__loading",style:{borderRadius:"circle"==e.shape?"50%":e.$u.addUnit(e.borderRadius),backgroundColor:this.bgColor}},[e.$slots.loading?e._t("loading"):i("u-icon",{attrs:{name:e.loadingIcon,width:e.width,height:e.height}})],2):e._e(),e.showError&&e.isError&&!e.loading?i("v-uni-view",{staticClass:"u-image__error",style:{borderRadius:"circle"==e.shape?"50%":e.$u.addUnit(e.borderRadius)}},[e.$slots.error?e._t("error"):i("u-icon",{attrs:{name:e.errorIcon,width:e.width,height:e.height}})],2):e._e()],1)},r=[]},"9f2a":function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-image[data-v-7da789c4]{position:relative;transition:opacity .5s ease-in-out}.u-image__image[data-v-7da789c4]{width:100%;height:100%}.u-image__loading[data-v-7da789c4], .u-image__error[data-v-7da789c4]{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:row;align-items:center;justify-content:center;background-color:#f3f4f6;color:#909399;font-size:%?46?%}',""]),e.exports=t},aabf:function(e,t,i){var a=i("9f2a");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("0f1106db",a,!0,{sourceMap:!1,shadowMode:!1})},afc5:function(e,t,i){"use strict";i.r(t);var a=i("876d"),n=i.n(a);for(var r in a)"default"!==r&&function(e){i.d(t,e,(function(){return a[e]}))}(r);t["default"]=n.a},b626:function(e,t,i){"use strict";i("99af"),i("ac1f"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{id:0,data:[],scrollViewHeight:600,bodyHeight:600,page:1}},onReady:function(){this.common.hidePageNavInWechatBrowser()},onLoad:function(e){var t=this;this.id=e.id||0,this.getLeaderboard(),this.bodyHeight=this.$u.sys().windowHeight,console.log("===bodyHeight===",this.bodyHeight);var i=uni.createSelectorQuery(),a=60,n=50;setTimeout((function(){i.select(".head").boundingClientRect(),i.select(".table-head").boundingClientRect(),i.exec((function(e){a=e[0].height,n=e[1].height,t.scrollViewHeight=t.bodyHeight-a-n-20}))}),100)},methods:{getLeaderboard:function(){var e=this,t=uni.getStorageSync("activity");console.log("-----------------",t),e.$u.api.sys.getActivityPlayerList({activity_id:t.activity_id,order:1,page:e.page}).then((function(t){1==e.page?e.data=t.data:e.data=e.data.concat(t.data)}))},scrolltolower:function(){console.log("more"),this.nomore||(this.page++,this.getLeaderboard())}}};t.default=a},bc74:function(e,t,i){var a=i("ff65");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("47c75aaa",a,!0,{sourceMap:!1,shadowMode:!1})},c7de:function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return a}));var a={uIcon:i("cd19").default},n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.show?i("v-uni-view",{staticClass:"u-empty",style:{marginTop:e.marginTop+"rpx"}},[i("u-icon",{attrs:{name:e.src?e.src:"empty-"+e.mode,"custom-style":e.iconStyle,label:e.text?e.text:e.icons[e.mode],"label-pos":"bottom","label-color":e.color,"label-size":e.fontSize,size:e.iconSize,color:e.iconColor,"margin-top":"14"}}),i("v-uni-view",{staticClass:"u-slot-wrap"},[e._t("bottom")],2)],1):e._e()},r=[]},cdec:function(e,t,i){"use strict";i.r(t);var a=i("6ba2"),n=i.n(a);for(var r in a)"default"!==r&&function(e){i.d(t,e,(function(){return a[e]}))}(r);t["default"]=n.a},dd03:function(e,t,i){"use strict";var a=i("bc74"),n=i.n(a);n.a},de94:function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return a}));var a={uImage:i("14e6").default,uLoading:i("60ac").default,uEmpty:i("0882").default},n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"head-bg"}),i("v-uni-view",{staticClass:"head flex-center"},[i("u-image",{attrs:{src:"/static/image/jiangbei.png","loading-icon":"/static/image/jiangbei.png",width:"60",height:"60","lazy-load":!1,fade:!1}}),i("v-uni-text",[e._v("排行榜")])],1),i("v-uni-view",{staticClass:"list"},[i("v-uni-view",{staticClass:"table flex-center table-head"},[i("v-uni-view",{staticClass:"leaderboard"},[e._v("排名")]),i("v-uni-view",{staticClass:"name"},[e._v("名称")]),i("v-uni-view",{staticClass:"vote"},[e._v("票数")])],1),i("v-uni-scroll-view",{style:{height:e.scrollViewHeight+"px"},attrs:{"scroll-y":"true","enable-back-to-top":!0},on:{scrolltolower:function(t){arguments[0]=t=e.$handleEvent(t),e.scrolltolower.apply(void 0,arguments)}}},e._l(e.data,(function(t,a){return e.data.length>0?i("v-uni-view",{key:a,staticClass:"table flex-center"},[i("v-uni-view",{staticClass:"leaderboard"},[a+1==1?i("u-image",{attrs:{src:"/static/image/1.png","loading-icon":"/static/image/1.png",width:"60",height:"60","lazy-load":!1,fade:!1}}):e._e(),a+1==2?i("u-image",{attrs:{src:"/static/image/2.png","loading-icon":"/static/image/2.png",width:"60",height:"60","lazy-load":!1,fade:!1}}):e._e(),a+1==3?i("u-image",{attrs:{src:"/static/image/3.png","loading-icon":"/static/image/3.png",width:"60",height:"60","lazy-load":!1,fade:!1}}):e._e(),a+1>3?i("v-uni-text",[e._v(e._s(a+1))]):e._e()],1),i("v-uni-view",{staticClass:"name flex-center"},[i("u-image",{attrs:{src:t.player_head_img,width:"80",height:"80","border-radius":"50%",shape:"aspectFill"}},[i("u-loading",{attrs:{slot:"loading"},slot:"loading"})],1),i("v-uni-text",{staticClass:"name-text"},[e._v(e._s(t.player_name))])],1),i("v-uni-view",{staticClass:"vote"},[e._v(e._s(t.ticket_num))])],1):i("v-uni-view",{staticStyle:{padding:"30rpx"}},[i("u-empty",{attrs:{text:"还没有选手",mode:"data"}})],1)})),1)],1)],1)},r=[]},e95c:function(e,t,i){"use strict";i.r(t);var a=i("de94"),n=i("0f2f");for(var r in n)"default"!==r&&function(e){i.d(t,e,(function(){return n[e]}))}(r);i("ed7f");var o,d=i("f0c5"),c=Object(d["a"])(n["default"],a["b"],a["c"],!1,null,"7e4ebd3d",null,!1,a["a"],o);t["default"]=c.exports},ed7f:function(e,t,i){"use strict";var a=i("5c2d"),n=i.n(a);n.a},f459:function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-loading-circle[data-v-1cb4f18a]{display:inline-flex;vertical-align:middle;width:%?28?%;height:%?28?%;background:0 0;border-radius:50%;border:2px solid;border-color:#e5e5e5 #e5e5e5 #e5e5e5 #8f8d8e;-webkit-animation:u-circle-data-v-1cb4f18a 1s linear infinite;animation:u-circle-data-v-1cb4f18a 1s linear infinite}.u-loading-flower[data-v-1cb4f18a]{width:20px;height:20px;display:inline-block;vertical-align:middle;-webkit-animation:a 1s steps(12) infinite;animation:u-flower-data-v-1cb4f18a 1s steps(12) infinite;background:transparent url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=) no-repeat;background-size:100%}@-webkit-keyframes u-flower-data-v-1cb4f18a{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes u-flower-data-v-1cb4f18a{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes u-circle-data-v-1cb4f18a{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}',""]),e.exports=t},fcee:function(e,t,i){"use strict";var a=i("86d9"),n=i.n(a);n.a},ff65:function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-empty[data-v-1009c249]{display:flex;flex-direction:row;flex-direction:column;justify-content:center;align-items:center;height:100%}.u-image[data-v-1009c249]{margin-bottom:%?20?%}.u-slot-wrap[data-v-1009c249]{display:flex;flex-direction:row;justify-content:center;align-items:center;margin-top:%?20?%}',""]),e.exports=t}}]);
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/vote/show"],{"11b2":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var a={uCountDown:function(){return n.e("node-modules/uview-ui/components/u-count-down/u-count-down").then(n.bind(null,"fb24"))},uSearch:function(){return n.e("node-modules/uview-ui/components/u-search/u-search").then(n.bind(null,"5011"))},uWaterfall:function(){return Promise.all([n.e("common/vendor"),n.e("node-modules/uview-ui/components/u-waterfall/u-waterfall")]).then(n.bind(null,"c11e"))},uLazyLoad:function(){return n.e("node-modules/uview-ui/components/u-lazy-load/u-lazy-load").then(n.bind(null,"a900"))},uEmpty:function(){return n.e("node-modules/uview-ui/components/u-empty/u-empty").then(n.bind(null,"bdf2"))},uIcon:function(){return n.e("node-modules/uview-ui/components/u-icon/u-icon").then(n.bind(null,"6a9b"))}},i=function(){var t=this,e=t.$createElement;t._self._c},o=[]},2078:function(t,e,n){"use strict";n.r(e);var a=n("a94a"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"4e03":function(t,e,n){"use strict";var a=n("da40"),i=n.n(a);i.a},"806e":function(t,e,n){"use strict";(function(t){n("98bb");a(n("66fd"));var e=a(n("8365"));function a(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},8365:function(t,e,n){"use strict";n.r(e);var a=n("11b2"),i=n("2078");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("4e03");var u,r=n("f0c5"),s=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);e["default"]=s.exports},a94a:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{id:0,banners:{},data:{},keyword:"",searchActionStyle:{border:"1px solid #f96770",color:"#f96770",width:"130rpx",height:"70rpx",lineHeight:"64rpx",borderRadius:"50px",marginLeft:"30rpx"},orderType:"new",list:[],flowList:[],page:1,order:1,where_str:"",nomore:!1}},onLoad:function(t){this.id=t.id||0,this.activityInfoFun(this.id),this.getUserList(),this.activityBanner(this.id)},onReachBottom:function(){console.log("more"),this.nomore||(this.page++,this.getUserList())},methods:{search:function(t){this.page=1,this.where_str=t,this.getUserList()},activityInfoFun:function(e){var n=this;n.$u.api.sys.getActivityInfo({activity_id:e}).then((function(e){if(1==e.code){n.data=e.data;var a=(new Date).getTime()/1e3;a<e.data.ticket_start_time&&(n.data.timestamp=e.data.ticket_start_time,n.data.status="距开始"),a>e.data.ticket_start_time&&a<e.data.ticket_end_time&&(n.data.timestamp=e.data.ticket_start_time,n.data.status="距结束"),a>e.data.ticket_end_time&&(n.data.timestamp=a,n.data.status="已结束"),t.setStorage({key:"activity",data:n.data,success:function(){console.log("success")}}),t.setStorageSync("aaa",n.data)}else t.showToast({title:e.data.msg,icon:"none",duration:2e3})}))},activityBanner:function(t){var e=this;e.$u.api.sys.getActivityBannerList({activity_id:t}).then((function(t){1==t.code&&(e.banners=t.data)}))},getUserList:function(){var t=this,e=this;1==e.page&&(e.list={}),e.$u.api.sys.getActivityPlayerList({activity_id:e.id,page:e.page,order:e.order,where_str:e.where_str}).then((function(n){if(0!=n.data.length)return console.log("page",e.page),1==e.page?e.list=n.data:e.list=e.list.concat(n.data),t;e.nomore=!0}))},numberConvert:function(t){return t>=1e6?parseInt(t/1e4)+"W+":t},chageOrderType:function(t){this.orderType=t},toExplain:function(){var e=this;t.navigateTo({url:"/pages/vote/explain",success:function(t){t.eventChannel.emit("acceptDataFromOpenerPage",e.data)}})},toLeaderboard:function(){var e=this;t.navigateTo({url:"/pages/vote/leaderboard",success:function(t){t.eventChannel.emit("acceptDataFromOpenerPage",e.data)}})},toUserVote:function(e){t.navigateTo({url:"/pages/vote/user?id="+e.player_id})}}};e.default=n}).call(this,n("543d")["default"])},da40:function(t,e,n){}},[["806e","common/runtime","common/vendor"]]]);
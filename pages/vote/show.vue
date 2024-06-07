<template>
	<view class="container">
		<scroll-view @scrolltolower="loadData" scrollWithAnimation="true" lower-threshold="50" scroll-y :style="{'height':screenHeight+'px'}">
		<view class="uni-margin-wrap header">
			<swiper class="swiper"  :autoplay="true" :interval="5000" >
				<swiper-item v-for="(item, index) in banners" :key="index" >
					<view class="swiper-item uni-bg-red">
						<image :src="item.thumb_img"></image>
					</view>
				</swiper-item>
		
			</swiper>
		</view>
		
		<view class="body">
			<view class="title">
				<text>{{data.activity_title}}</text>
			</view>
			
			<view class="downBox">
				<view class="status">{{data.status}}</view>
				<view class="udown">
					<u-count-down 
					:timestamp="data.timestamp"
					separator="zh" 
					color="#f96770" 
					bg-color="#f5f5f5"
					font-size="40" 
					separator-color="#909399"
					></u-count-down>
				</view>
			</view>
			
			<!--
			<view class="numberBox">
				<view>
					<view class="number">{{numberConvert(data.sum_player)}}</view>
					<view class="numberText">已报名</view>
				</view>
				<view>
					<view class="number">{{numberConvert(data.sum_ticket_num)}}</view>
					<view class="numberText">累计投票</view>
				</view>
				<view>
					<view class="number">{{numberConvert(data.hits_count)}}</view>
					<view class="numberText">访问量</view>
				</view>
			</view>-->
			
			<view class="searchBox">
				<u-search 
					border-color="#f96770"
					bg-color="#fff"
					placeholder="请输入编号或名称" 
					v-model="keyword"
					height="70"
					:action-style="searchActionStyle"
					@search="search"
					@custom="search"
				></u-search>
			</view>
			
			<!-- <view class="orderBox">
				<view :class="[ orderType == 'new' ? 'thisOrder' : '' ]"  @click="chageOrderType('new')">活动详情</view>
				<view :class="[ orderType == 'hits' ? 'thisOrder' : '' ]" @click="chageOrderType('hits')">参赛选手</view>
			</view>
			 -->
				<view class="list">
					<view v-if="list.length > 0" class="list-box">
					   <view class="warter left-warter" v-for="(item, index) in list" :key="index" @click="toUserVote(item)">
						<u-lazy-load threshold="100" border-radius="10" :image="item.player_person_img" :index="index"></u-lazy-load>
						<view class="list-id">
							{{item.player_num}}
						</view>
						<view class="list-pm">
							<view class="list-name">
								第 {{index+1}} 名
							</view>
						</view>
						<view class="list-bottom">
							<view class="list-name">
								{{item.player_name}}
							</view>
							<view class="list-vote">
								{{item.ticket_num}}票
							</view>
						</view>
					   </view>
						<!-- <u-waterfall v-model="list" ref="uWaterfall">
							<template v-slot:left="{leftList}">
								<view class="warter left-warter" v-for="(item, index) in leftList" :key="index" @click="toUserVote(item)">
									
									<u-lazy-load threshold="100" border-radius="10" :image="item.player_person_img" :index="index"></u-lazy-load>
									
									<view class="list-id">
										{{item.player_num}}
									</view>
									
									<view class="list-pm">
										<view class="list-name">
											第 {{index+1}} 名
										</view>
									</view>
									<view class="list-bottom">
										<view class="list-name">
											{{item.player_name}}
										</view>
										<view class="list-vote">
											{{item.ticket_num}}票
										</view>
									</view>
								</view>
							</template>
							<template v-slot:right="{rightList}">
								<view class="warter right-warter" v-for="(item, index) in rightList" :key="index" @click="toUserVote(item)">
									<u-lazy-load threshold="100" border-radius="10" :image="item.player_person_img" :index="index"></u-lazy-load>
									
									<view class="list-id">
										{{item.player_num}}
									</view>
									<view class="list-pm">
										<view class="list-name">
											第 {{index+1}} 名
										</view>
									</view>
									<view class="list-bottom">
										<view class="list-name">
											{{item.player_name}}
										</view>
										<view class="list-vote">
											{{item.ticket_num}}票
										</view>
									</view>
								</view>
							</template>
						</u-waterfall> -->
					</view>
					
					<view v-else>
						<u-empty text="还没有选手" mode="data"></u-empty>
					</view>
				</view>
				
		</view>
		<u-loadmore :status="loadStatus" :loading-text="loadingText" ></u-loadmore>
		</scroll-view>
		<!-- 底部操作菜单 -->
		<view class="page-bottom">
			<view class="btn-left" @click="toExplain()">
				<u-icon name="question-circle" size="32"></u-icon>
				<text style="padding-left: 10rpx;">活动说明</text>
			</view>
			<view class="btn-right" @click="toLeaderboard(data.id)">
				<u-icon name="star" size="32"></u-icon>
				<text style="padding-left: 10rpx;">查看排行榜</text>
			</view>
		</view>
	</view>
</template>

<script>

	export default {
		data() {
			return {
				id: 0,
				banners:{},
				data: {},
				keyword: '',
				searchActionStyle: {
					border: '1px solid #f96770',
					color: '#f96770',
					width: '130rpx',
					height: '70rpx',
					lineHeight: '64rpx',
					borderRadius: '50px',
					marginLeft: '30rpx',
				},
				
				orderType: 'new',
				list:[],
				flowList: [],
				//排序方式
				order:1,
				//搜索条件
				where_str:'',
				//是否有下一页
				nomore:false,
				timestamp: 2592000,
				page: 1,
				last_page:'-1',
				pageSize:10,
				total:0,
				loadStatus: 'loadmore',
				loadmoreText: '加载更多',
				loadingText: '努力加载中',
				nomoreText: '没有更多了',
				screenHeight:0,
			};
		},
		onReady() {
			//微信浏览器环境下隐藏导航
			this.common.hidePageNavInWechatBrowser();
		},
		onLoad(options) {
			this.id = options.id || 0;	
			this.handleScreenHeight();
			this.activityInfoFun(this.id);
			this.getUserList();
			//读取banner
			this.activityBanner(this.id);
			//配置转发
			//this.getShareFun();
		},
		
		onHide(){
			
		},
		// onReachBottom(){
		// 	console.log('more');
		// 	//加载下一页
		// 	if(!this.nomore){
		// 		this.page++;
		// 		this.getUserList();
		// 	}
			
		// },
		methods:{
			getShareFun(callback){
				var that = this;
				var url=getApp().globalData.url;
				let obj = {
					url:url
				}
				that.$u.api.sys.getConfigJson(obj).then(res=>{
					var data = JSON.parse(res.data.config)
					if(res.code==1){
						wx.config({
							debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
							appId: data.appId, // 必填，公众号的唯一标识
							timestamp: data.timestamp, // 必填，生成签名的时间戳
							nonceStr: data.nonceStr, // 必填，生成签名的随机串
							signature: data.signature, // 必填，签名
							jsApiList: [
								'checkJsApi',
								 'updateAppMessageShareData',
								 'updateTimelineShareData',
				
							], 
						});
						wx.ready(function(){
							wx.checkJsApi({
								jsApiList: [
									 'updateAppMessageShareData',
									 'updateTimelineShareData',
									 
								],
								success:function(res){
									console.log('检测接口是否可用====')
									console.log(res)
								},
								fail:function(err){
									console.log('检测接口是否错误===')
								}
							})
						
							wx.updateTimelineShareData({ 
							    title: '第五届“梅雅奖”网络十大人气评选活动！',
							    link: getApp().globalData.url,
							    imgUrl: that.data.share_img, 
							    success: function () {
							      // 设置成功
							    }
							});
							wx.updateAppMessageShareData({ 
							  title: '第五届“梅雅奖”网络十大人气评选活动！',
							  
							  desc: '感谢大家支持', // 分享描述
							  link: getApp().globalData.url,
							  imgUrl: that.data.share_img, 
							  success: function () {
								that.modelShow = false;
								console.log('success')//点击分享后
							  }
							});
							
						})
				
			
					}
				})
			},
			//搜索
			search: function (e) {
				this.page = 1;
				this.where_str=e;
			    this.getUserList();
			},
					
			//获取活动信息
			activityInfoFun: function (activity_id) {
			    var that = this;
				that.$u.api.sys.getActivityInfo({
			            activity_id: activity_id
			        }).then(res => {
					
						if (res.code == 1) {
							that.data = res.data;
							//var nowtime = new Date().getTime()/1000;
							var nowtime = Math.round(new Date() / 1000);
							if(nowtime<res.data.ticket_start_time){
								var date = Number(nowtime) - Number(res.data.ticket_start_time)
								that.data.timestamp = Math.abs(date);
								that.data.status = '距开始';
							}
							if(nowtime>res.data.ticket_start_time&&nowtime<res.data.ticket_end_time){
								var date = Number(res.data.ticket_end_time) - Number(nowtime)
								that.data.timestamp = date;
								that.data.status = '距结束';
							}
							if(nowtime>res.data.ticket_end_time){
								that.data.timestamp = 0;
								that.data.status = '已结束';
							}
							//console.log(that.data.timestamp)
							//设置一些缓存						
							uni.setStorage({
								key: 'activity',
								data: that.data,
								success: function () {
									console.log('success');
								}
							});
							uni.setStorageSync('aaa',that.data);
						
				
						} else {
						    uni.showToast({
						        title: res.data.msg,
						        icon: 'none',
						        duration: 2000
						    });
						}
					
				
				});
				
			 
			},
			
			//获取活动banner
			activityBanner: function (activity_id) {
			    var that = this;
			    that.$u.api.sys.getActivityBannerList({
			            activity_id: activity_id
			        }).then(res => {		
						if(res.code == 1){
							that.banners = res.data;
						
						}			    
			    });
			},
			loadData() {
				if(this.nomore){return;}
				this.loadStatus = 'loading';
				this.page++;
				this.getUserList()
				if(this.nomore){
					this.loadStatus = 'nomore';
				}else{
					this.loadStatus = 'loading';
				}
			},
			handleScreenHeight: function() {
				var e = this;
				uni.getSystemInfo({
					success: function(t) {
						var a = t.windowWidth, r = t.windowHeight;
						if(t.windowHeight>600){
							e.pageSize=15;
						}
						e.screenHeight = r - 10;
					}
				});
			},
			//读取选手
			getUserList(){
				var that = this;
				if(that.page == 1){that.list = [];}
				that.$u.api.sys.getActivityPlayerList({
				        activity_id: that.id,page:that.page,order:that.order,where_str:that.where_str
				    }).then(res => {
						if(res.data.length == 0){
							 //没有下一页
							that.nomore = true;
							return;
						}
						console.log('page',that.page);
						if(that.page ==1){
							that.list = res.data;
						}else{
							that.list = that.list.concat(res.data);		
						}		
						return this;
				});
		
			},
			numberConvert(number){
				if(number >= 1000000){
					return parseInt(number / 10000) + 'W+';
				}
				
				return number;
			},
			chageOrderType(type){
				this.orderType = type;
			},
			toExplain(){
				let that = this;
				uni.navigateTo({
					url: "/pages/vote/explain",
					success: function(res) {
						res.eventChannel.emit('acceptDataFromOpenerPage', that.data)
					}
				})
			},
			//排行榜
			toLeaderboard(){
				let that = this;
				uni.navigateTo({
					url: "/pages/vote/leaderboard",
					success: function(res) {
						res.eventChannel.emit('acceptDataFromOpenerPage', that.data)
					}
				})
			},
	
			toUserVote(data){
				uni.navigateTo({
					url: "/pages/vote/user?id=" + data.player_id
				})
			},
		
		},
	}
</script>

<style lang="scss">
	.container{
		.title{
			padding: 50rpx 0 30rpx 0;
			text-align: center;
			color: #f96770;
			font-size: 36rpx;
			font-weight: bold;
		}
		.uni-margin-wrap{
			.swiper{
				height: 400rpx;
				.swiper-item,.swiper-item image{
					width:100%;
					height: 100%;
				}
			}
		}
		.enrollBox{
			display: flex;
			text-align: center;
			align-content: center;
			justify-content: center;
			
			.enroll-btn{
				width: 250rpx;
				height: 60rpx;
				line-height: 60rpx;
				color: #fff;
				background-color: #f96770;
				border-radius: 50rpx;
				margin-top: 30rpx;
			}
		}
		
		.downBox{
			background-color: #f5f5f5;
			display: flex;
			text-align: center;
			flex-wrap: wrap;
			align-content: center;
			margin: 0 50rpx;
			border-radius: 15rpx;
			
			view{
				flex-basis: 100%;
			}
			
			.status{
				color: #f96770;
				padding: 20rpx 0;
				letter-spacing: 4rpx;
				font-weight: 500;
			}
			.udown{
				padding: 10rpx 0 20rpx 0;
			}
		}
		
		.numberBox, .orderBox{
			display: flex;
			justify-content: center;
			padding: 50rpx;
			align-content: center;
			text-align: center;
			
			view{
				flex: 1;
			}
			
			.number{
				color: #f96770;
				font-size: 50rpx;
				font-weight: bold;
				padding-bottom: 10rpx;
			}
			
			.numberText{
				color: #909399;
			}
		}
		
		.searchBox{
			padding: 10rpx 50rpx;
		}
		
		.orderBox{
			padding: 30rpx;
			font-size: 30rpx;
			
			.thisOrder{
				font-size: 34rpx;
				color: #f96770;
			}
		}
		
		.list{
			.list-box{
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;
				padding:0 20rpx;
			}
			.warter{
				border-radius: 16rpx;
				background-color: #ffffff;
				position: relative;
				
				.list-id{
					position: absolute;
					top: 20rpx;
					right: 0rpx;
					background: rgba(143, 143, 143, 0.4);
					border-radius: 0 16rpx 0 40px;
					color: #fff;
					min-width: 60rpx;
					text-align: center;
					padding: 4rpx;
				}
				.list-pm{
					position: absolute;
					color: #fff;
					bottom: 80rpx;
					left: 0rpx;
					right: 0rpx;
					display: flex;
					flex-wrap: nowrap;
					justify-content: space-between;
					padding: 10rpx 20rpx;
					
					border-radius:0 0 16rpx 16rpx;
					background: linear-gradient(to bottom, rgba(0,0,0,0.01), rgba(0,0,0,0.3));
				}
				.list-bottom{
					color: #333;
					display: flex;
					flex-wrap: nowrap;
					justify-content: space-between;
					padding: 10rpx 20rpx;
				}
				.list-name{
					flex-basis: 60%;
					
					word-break: break-all;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 1;
					overflow: hidden;
				}
			}
			.left-warter{
				padding: 20rpx 0;
				width: 48.5%;
			}
			.right-warter{
				padding: 20rpx 20rpx 20rpx 10rpx;
				
				.list-id{
					right: 20rpx;
				}
				.list-bottom{
					left: 10rpx;
					right: 20rpx;
				}
			}
		}
		
		.page-bottom{
			position:fixed;
			bottom: 0;
			left: 0;
			right: 0;
			z-index: 95;
			display: flex;
			justify-content: space-between;
			align-items: flex-end;
			
			background-color: #fff;
			border-top: 1px solid #f5f5f5;
			
			.btn-left{
				border: 1px solid #f96770;
				color: #f96770;
				text-align: center;
				height: 80rpx;
				line-height: 80rpx;
				border-radius: 50rpx;
				flex: 1;
				margin: 20rpx 20rpx 30rpx 20rpx;
			}
			.btn-right{
				color: #fff;
				background-image: linear-gradient(#f96770, #fc587d);
				text-align: center;
				height: 80rpx;
				line-height: 80rpx;
				border-radius: 50rpx;
				flex: 1;
				margin: 20rpx 20rpx 30rpx 20rpx;
			}
		}
	}
	
	.body{
		padding-bottom: 120rpx;
	}
	
	.udown .u-countdown .u-countdown-colon{
		padding-right: 20rpx;
	}
</style>

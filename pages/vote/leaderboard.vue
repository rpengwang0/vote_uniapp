<template>
	<view class="container">
		<view class="head-bg"></view>
		
		<view class="head flex-center">
			<u-image src="/static/image/jiangbei.png" loading-icon="/static/image/jiangbei.png" width="60" height="60" :lazy-load="false" :fade="false">
			</u-image>
			<text>排行榜</text>
		</view>
		
		<view class="list">
			<view class="table flex-center table-head">
				<view class="leaderboard">排名</view>
				<view class="name">名称</view>
				<view class="vote">票数</view>
			</view>
		
			<scroll-view 
				scroll-y="true"
				:enable-back-to-top="true"
				@scrolltolower="scrolltolower"
				:style="{height:scrollViewHeight+'px'}"
			>
				<view v-if="data.length > 0" v-for="(item,index) in data" :key="index" class="table flex-center">
					<view class="leaderboard">
						
						<u-image v-if="index+1 == 1" src="/static/image/1.png" loading-icon="/static/image/1.png" width="60" height="60" :lazy-load="false" :fade="false"></u-image>
						<u-image v-if="index+1 == 2" src="/static/image/2.png" loading-icon="/static/image/2.png" width="60" height="60" :lazy-load="false" :fade="false"></u-image>
						<u-image v-if="index+1 == 3" src="/static/image/3.png" loading-icon="/static/image/3.png" width="60" height="60" :lazy-load="false" :fade="false"></u-image>
						
						<text v-if="index+1 > 3">{{index+1}}</text>
					</view>
					<view class="name flex-center">
						<u-image :src="item.player_head_img" width="80" height="80" border-radius="50%" shape="aspectFill">
							<u-loading slot="loading"></u-loading>
						</u-image>
						<text class="name-text">{{item.player_name}}</text>
					</view>
					<view class="vote">
						{{item.ticket_num}}
					</view>
				</view>
				
				<view v-else style="padding: 30rpx;">
					<u-empty text="还没有选手" mode="data"></u-empty>
				</view>
			</scroll-view>
		</view>	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: 0,
				data: [],
				scrollViewHeight: 600,
				bodyHeight: 600,
				page:1,
			};
		},
		onReady() {
			//微信浏览器环境下隐藏导航
			this.common.hidePageNavInWechatBrowser();
		},
		onLoad(options) {
			this.id = options.id || 0;
			this.getLeaderboard();
			
			this.bodyHeight = this.$u.sys().windowHeight;
			console.log("===bodyHeight===",this.bodyHeight);
			
			let query = uni.createSelectorQuery();
			let headerHeight = 60;
			let tableHeaderHeight = 50;
			setTimeout(()=>{
				query.select(".head").boundingClientRect()
				query.select(".table-head").boundingClientRect()
				query.exec((res) => {
					headerHeight = res[0].height;
					tableHeaderHeight = res[1].height;
					
					this.scrollViewHeight = this.bodyHeight - headerHeight - tableHeaderHeight - 20;
				})
				
			},100);
		},
		
		methods:{
			getLeaderboard(){
				let data = [];
				var that = this;
				var act = uni.getStorageSync('activity');
				console.log('-----------------',act);
				//读取选手
				that.$u.api.sys.getActivityPlayerList({
				        activity_id: act.activity_id,order:1,page:that.page
				    }).then(res => {
						if(that.page ==1){
							
							that.data = res.data;
						}else{
							that.data = that.data.concat(res.data);		
						}	
						
				});
			},
			scrolltolower(){
				console.log('more');
				//加载下一页
				if(!this.nomore){
					this.page++;
					this.getLeaderboard();
				}
			}
		},
	}
</script>

<style lang="scss">
	page{
		background-color: #f5f5f5;
		height: 100vh;
	}
	.container{
		.flex-center{
			display: flex;
			text-align: center;
			align-content: center;
			justify-content: center;
			align-items: center;
		}
		.head-bg{
			position: fixed;
			top: 0;
			width: 100%;
			height: 200rpx;
			background-image: linear-gradient(#f96770, #fc587d);
			border-radius: 0 0 20% 20%;
			z-index: -1;
		}
		
		.head{
			padding:30rpx;
			
			text{
				color: #fff;
				font-size: 30rpx;
				padding-left: 20rpx;
			}
		}
		
		.list{
			background-color: #fff;
			border-radius: 15rpx;
			margin:0 30rpx 30rpx 30rpx;
			box-shadow: 0 0 2px rgb(221, 221, 221);
		}
		
		.table{
			padding: 30rpx 0;
			flex-wrap: wrap;
			
			.leaderboard{
				flex-basis: 20%;
				display: flex;
				align-content: center;
				justify-content: center;
			}
			.name{
				justify-content: flex-start;
				text-align: left;
				flex-basis: 60%;
				
				.name-text{
					padding-left: 20rpx;
					padding-right: 10rpx;
					
					word-break: break-all; 
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 1;
					overflow: hidden;
				}
			}
			.vote{
				flex-basis: 20%;
			}
		}
	}
</style>

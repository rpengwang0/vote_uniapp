<template>
	<view class="container">
		<view class="head-bg"></view>
		
		<view class="list">
			<view v-for="(item,index) in data" :key="index" class="list-box" @click="toDetail(item.activity_id)">
				<u-image :src="item.poster_img" width="100%" height="300" border-radius="5" shape="aspectFill">
					<u-loading slot="loading"></u-loading>
				</u-image>
				<view class="desc">
					<view class="title u-line-1">{{item.activity_title}}</view>
					<view class="info">
						<u-image src="/static/image/hot.png" loading-icon="/static/image/hot.png" width="40" height="40" :lazy-load="false" :fade="false">
						</u-image>
						{{item.sum_player}}人参与
					</view>
					<view class="time">{{item.ticket_end_time}} 结束</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>

	export default {
		data() {
			return {
				data: [],
			};
		},
		onReady() {
			//微信浏览器环境下隐藏导航
			this.common.hidePageNavInWechatBrowser();
		},
		onLoad() {
			console.log('come in index');
			//uni.setStorageSync('uid','VYBvqyPmzx');
			this.activityListFun();
		},
		methods:{
			  
			//活动列表
			activityListFun: function () {
			    var that = this;
				
				that.$u.api.sys.getActivityList().then(res => {
					
					if(res.code === 0){
						return false;
					}
					 that.data = res.data;
					 console.log(that.data);
				});
				
			  
			},
			toDetail(id){
				uni.navigateTo({
					url: '/pages/vote/show?id=' + id
				})
			}
		},
		onPullDownRefresh() {
			console.log('refresh');
			setTimeout(function () {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		onReachBottom(){
			console.log('more');
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		position: relative;
			
		.head-bg{
			position: fixed;
			top: 0;
			width: 100%;
			height: 200rpx;
			background-image: linear-gradient(#f96770, #fc587d);
			border-radius: 0 0 20% 20%;
			z-index: -1;
		}
			
		.list{
			z-index: 99;
			padding: 20rpx 30rpx;
			
			.list-box{
				background-color: #fff;
				border-radius: 15rpx;
				margin-top: 30rpx;
				box-shadow: 0 0 2px rgb(221, 221, 221);
				.desc{
					padding: 20rpx 30rpx;
					font-size: 30rpx;
					.info{
						padding: 15rpx 0;
						display: flex;
						align-items: center;
					}
					.time{
						color: #909399;
						font-size: 25rpx;
					}
				}
			}
			.list-box:first-child{
				margin-top: 0px;
			}
		}
	}
</style>

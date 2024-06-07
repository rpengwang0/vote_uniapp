<template>
	<view class="container">
		<view class="item">
			<view class="title">
				<text>活动介绍</text>
			</view>
			
			<view class="li">
				<rich-text :nodes="data.activity_rule_content"></rich-text>
			</view>
		</view>
		<!--
		<view class="item">
			<view class="title">
				<text>奖项设置</text>
			</view>
			<view class="li">
				<text>{{activity_prize_content}}</text>
				<rich-text :nodes="data.activity_prize_content"></rich-text>
			</view>
		</view>
	
		<view class="item">
			<view class="title">
				<text>投票规则</text>
			</view>
			
			<view class="li">
				<text>每位用户每天可投1票</text>
			</view>
			
			<view class="li">
				<text>可重复投票</text>
			</view>
			
			<view class="li">
				<text>不限制地区</text>
			</view>
		</view>
		-->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data: {}
			};
		},
		onReady() {
			//微信浏览器环境下隐藏导航
			this.common.hidePageNavInWechatBrowser();
		},
		onLoad() {
			let that = this;
			// #ifdef APP-NVUE
			const eventChannel = this.$scope.eventChannel; // 兼容APP-NVUE
			// #endif
			// #ifndef APP-NVUE
			const eventChannel = this.getOpenerEventChannel();
			// #endif
			this.activityInfoFun();
			eventChannel.on('acceptDataFromOpenerPage', function(data) {
				that.data = data;
			})
		},
		methods:{
			copy(t){
				this.globalUtil.copy(t,false);
			},
			activityInfoFun: function () {
				this.data = uni.getStorageSync('activity');
			 
				
			 
			},
		},
	}
</script>

<style lang="scss">
	.container{
		padding: 30rpx;
		
		.title{
			padding-bottom: 20rpx;
			padding-top: 20rpx;
			font-size: 35rpx;
			font-weight: 600;
			color: #f96770;
		}
		
		.li{
			padding-bottom: 10rpx;
			padding-top: 10rpx;
			color: #909399;
			
		}
		.li img{
			max-width: 100%;
		}
		
	}
</style>

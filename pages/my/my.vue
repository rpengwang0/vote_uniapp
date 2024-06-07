<template>
	<view class="container" :style="{height:phone_height+'px'}">
		<view class="user-section">
			<view class="bg"></view>
			<view class="user-info-box">
				<u-image mode="aspectFill"  width="130rpx" height="130rpx" bg-color="#ffffff" border-radius="50%" :src="vuex_userInfo.avatar || ''">
					<u-loading slot="loading"></u-loading>
					<view slot="error" style="width: 130rpx;height: 130rpx;">
						<u-image src="@/static/image/missing-face.png" width="130rpx" bg-color="#ffffff" height="130rpx" border-radius="50%" mode="aspectFill"></u-image>
					</view>
				</u-image>
				
				<view class="info-box">
					<view v-if="isLogin == true">
						<text class="username">{{vuex_userInfo.nickname || '游客'}}</text>
					</view>
					<view v-if="isLogin == false">
						<text class="username" @click="tologin()" >点击登录</text>
					</view>
				</view>
			</view>
			<view class="vip-card-box">
				<view class="card-bg"></view>
				<view class="tit">
					<text class="yticon icon-iLinkapp-"></text>
				</view>
				<text class="e-m"></text>
				<text class="e-b"></text>
			</view>
		</view>
		
		<view class="cover-container"
			:style="[{
				transform: coverTransform,
				transition: coverTransition
			}]"
			@touchstart="coverTouchstart"
			@touchmove="coverTouchmove"
			@touchend="coverTouchend"
		>
			<image class="arc" src="/static/image/arc.png"></image>
			
			<view class="tj-sction">
				<view class="tj-item">
					<text class="num">{{userData.sign_in_day || 0}}</text>
					<text>今日投票</text>
				</view>
				<view class="tj-item">
					<text class="num">{{userData.all_bill_day || 0}}</text>
					<text>累计投票</text>
				</view>
		
			</view>
			
			<view class="user-list">
				<u-cell-group>
					<!--
					<u-cell-item :titleStyle="{fontWeight: 500}" title="浏览历史">	
						<u-icon slot="icon" :size="iconSize" name="clock-fill" :custom-style="iconCustomStyle"></u-icon>
					</u-cell-item>
					
					<u-cell-item :titleStyle="{fontWeight: 500}" title="常见问题">
						<u-icon slot="icon" :size="iconSize" name="question-circle-fill" :custom-style="iconCustomStyle"></u-icon>
					</u-cell-item>
					
					<u-cell-item :titleStyle="{fontWeight: 500}" title="关联公众号">
						<u-icon slot="icon" :size="iconSize" name="weixin-fill" :custom-style="iconCustomStyle"></u-icon>
					</u-cell-item>
					-->
					<button type="default" open-type="feedback" class="list-item">
						<u-cell-item :titleStyle="{fontWeight: 500}" title="建议反馈">
							<u-icon slot="icon" :size="iconSize" name="info-circle-fill" :custom-style="iconCustomStyle"></u-icon>
						</u-cell-item>
					</button>
					<button type="default" open-type="contact" class="list-item">
						<u-cell-item :titleStyle="{fontWeight: 500}" title="联系客服">
							<u-icon slot="icon" :size="iconSize" name="server-man" :custom-style="iconCustomStyle"></u-icon>
						</u-cell-item>
					</button>
				</u-cell-group>
			</view>
			
			<view class="share-box">
				<!-- #ifdef MP-WEIXIN || MP-ALIPAY -->
					<u-button type="success" :ripple="true" shape="circle" open-type="share" class="share-button" :custom-style="customStyle">推荐给好友</u-button>
				<!-- #endif -->
			</view>
			
		</view>
	</view>
</template>

<script>
	let startY = 0, moveY = 0, pageAtTop = true;
	export default {
		data() {
			return {
				isLogin: false,
				isCheckLogin : true,
				providerList: [],
				coverTransform: 'translateY(0px)',
				coverTransition: '0s',
				moving: false,
				phone_height: 657,
				scroll_view_height: "100",
				
				lazy_load: true,
				customStyle: {
					backgroundColor: '#f96770'
				},
				iconCustomStyle: {
					marginRight: '10rpx',
					color: '#f96770'
				},
				iconSize: 50,
				updateUserInfoTime: 0,
				userData:{}
			}
		},
		onReady() {
			//微信浏览器环境下隐藏导航
			this.common.hidePageNavInWechatBrowser();
		},
		methods: {
			checkLogin(){
				let is_login = this.globalUtil.checkIsLogin(this);
				console.log('loging:',is_login);
				this.isLogin = is_login;
			},
			checkRefresh(){
				console.log(this.vuex_isRefreshUserPage)
				if(this.vuex_isRefreshUserPage === true){
					this.getUserInfo();
				}
			},
			getUserInfo(){
				let that = this;
				that.$u.vuex('vuex_isRefreshUserPage', false);
				
				that.$u.api.sys.userInfo().then(res => {
					console.log('userInfo接口返回值:',res);
					if(res.code === 0){
						return false;
					}
					that.userData = res.data
					// 保存userinfo
					that.$u.vuex('vuex_userInfo', res.data);
				});
				
			},
			tologin() {
				this.globalUtil.toLogin();
			},
			share(){
				console.log('非小程序分享')
			},
			onShareAppMessage(res) {
				return {
					title : '',
					imageUrl : '',
					//desc : "这是分享描述",
					// #ifndef MP-QQ
					path: '/pages/index/index?shareId=' + user_id
					// #endif
				}
			},
			
			/**
			 *  下拉和回弹
			 *  1.关闭bounce避免ios端下拉冲突
			 *  2.由于touchmove事件的缺陷（以前做小程序就遇到，比如20跳到40，h5反而好很多），下拉的时候会有掉帧的感觉
			 *    transition设置0.1秒延迟，让css来过渡这段空窗期
			 *  3.回弹效果可修改曲线值来调整效果，推荐一个好用的bezier生成工具 http://cubic-bezier.com/
			 */
			coverTouchstart(e){
				if(pageAtTop === false){
					return;
				}
				this.coverTransition = 'transform .1s linear';
				startY = e.touches[0].clientY;
			},
			coverTouchmove(e){
				moveY = e.touches[0].clientY;
				let moveDistance = moveY - startY;
				if(moveDistance < 0){
					this.moving = false;
					return;
				}
				this.moving = true;
				if(moveDistance >= 80 && moveDistance < 100){
					moveDistance = 80;
				}
					
				if(moveDistance > 0 && moveDistance <= 80){
					this.coverTransform = `translateY(${moveDistance}px)`;
				}
			},
			coverTouchend(){
				if(this.moving === false){
					return;
				}
				this.moving = false;
				this.coverTransition = 'transform 0.3s cubic-bezier(.21,1.93,.53,.64)';
				this.coverTransform = 'translateY(0px)';
				
				// 可以重新获取用户数据，替代下拉刷新功能
				
				// 超过60s才可以刷新
				let time = parseInt(new Date().getTime() / 1000);
				
				if((time - this.updateUserInfoTime) > 60){
					this.getUserInfo();
					this.updateUserInfoTime = time;
				}
			}
		},
		onLoad(options){
			this.$u.vuex('vuex_isRefreshUserPage', true);
			this.isCheckLogin = options.isCheckLogin || true;
			
			// 计算scroll-view高度
			let _this = this;
			uni.getSystemInfo({
				success(res) {
					_this.phone_height = res.windowHeight
				}
			})
			
			console.log('当前shareId=>',this.shareId);
		},
		onShow() {
			this.checkRefresh();
			this.checkLogin();
		}
	}
</script>

<style lang="scss">
	.container{
		background-color: #f5f5f5;
	}
	%flex-center {
	 display:flex;
	 flex-direction: column;
	 justify-content: center;
	 align-items: center;
	}
	%section {
	  display:flex;
	  justify-content: space-around;
	  align-content: center;
	  background: #fff;
	  border-radius: 10upx;
	}
	
	.user-section{
		height: 480upx;
		/* #ifdef MP */
		padding: 100upx 30upx 0;
		/* #ifdef MP-ALIPAY */
		padding: 120upx 30upx 0;
		/* #endif */
		/* #endif */
		/* #ifndef MP */
		padding: 50upx 30upx 0;
		/* #endif */
		position:relative;
		.bg{
			position:absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			filter: blur(1px);
			//opacity: .7;
			background-color: #f96770;
		}
	}
	.user-info-box{
		height: 180upx;
		display:flex;
		align-items:center;
		position:relative;
		z-index: 1;
		
		.username{
			font-size: 30rpx;
			color: #fff;
			margin-left: 20rpx;
		}
	}
	.vip-card-box{
		display:flex;
		flex-direction: column;
		color: #f7d680;
		height: 240upx;
		
		background: linear-gradient(rgba(249, 103, 112, 0.7), rgba(252, 88, 125, 0.8));
		border-radius: 16upx 16upx 0 0;
		overflow: hidden;
		position: relative;
		padding: 20upx 24upx;
		.card-bg{
			position:absolute;
			top: 20upx;
			right: 0;
			width: 380upx;
			height: 260upx;
		}
		.tit{
			font-size: 30upx;
			color: #fc587d;
			margin-bottom: 28upx;
			.yticon{
				color: #fc587d;
				margin-right: 16upx;
			}
		}
		.e-b{
			font-size: 24upx;
			color: #d8cba9;
			margin-top: 10upx;
		}
	}
	.cover-container{
		background-color: #f5f5f5;
		margin-top: -200rpx;
		position:relative;
		padding-bottom: 20rpx;
		.arc{
			position:absolute;
			left: 0;
			top: 120rpx;
			width: 100%;
			height: 36rpx;
		}
	}
	
	.tj-sction{
		@extend %section;
		border-radius: 0;
		background-color: #f96770;
		.tj-item{
			@extend %flex-center;
			flex-direction: column;
			height: 140upx;
			font-size: 24upx;
			color: #fff;
		}
		.num{
			font-size: 40rpx;
			color: #fff;
			margin-bottom: 8upx;
		}
	}
	
	.user-list{
		margin-top: 30upx;
		background: #fff;
		border-radius:10upx;
		switch{
			transform: scale(0.7,0.7)
		}
	}
	.list-item{
		width: 100%;
		padding: 0rpx;
		background-color: #FFFFFF !important;
		border: initial;
		text-align: initial;
	}
	.list-item::after{
		border: initial;
	}
	.share-box{
		width: 70%;
		margin: auto;
		padding-top: 30rpx;
		/* #ifndef MP */
		padding-bottom: 100rpx;
		/* #endif */
	}
	.share-button{
		background-color: #FD6A6C !important;
		color: #fff !important;
		font-size: 30rpx !important;
	}
</style>

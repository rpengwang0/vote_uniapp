<template>
	<view class="container">
		<view class="wechatapp">
			<view class="header">
				<image src="../../static/image/missing-face.png" mode="aspectFit" class="image"></image>
			</view>
		</view>
		<view class="auth-title">申请获取以下权限</view>
		<view class="auth-subtitle">获得你的公开信息（昵称、头像等）</view>
		<view class="login-btn">
			<u-button :custom-style="customStyle" :ripple="true" lang="zh_CN" @click="bindGetUserInfo()" throttle-time ="1000" shape="circle" type="primary">授权登录</u-button>
		</view>
		<view class="no-login-btn">
			<u-button lang="zh_CN" @click="onNotLogin()" throttle-time ="1000" shape="circle">暂不登录</u-button>
		</view>
	</view>
</template>

<script>
	import {  
	    mapState,  
	    mapMutations 
	} from 'vuex';
	
	export default {
		data() {
			return {
				options: {},
				customStyle: {
					backgroundColor: '#f96770'
				},
				//用户基本信息
				userinfo:{},
			}
		},
		onLoad(e) {
			this.options = e;
			//console.log(e)
			var token = uni.getStorageSync('uid');
			if(token){
				var code = option.code;
			}else{
				this.checkWeChatCode()
			}
		},
		onReady(){
			uni.setNavigationBarColor({
				frontColor : '#000000',
			    backgroundColor: 'rgba(0,0,0,0)',
			});			
		},
		methods: {
			onNotLogin() {
				let url = this.options.delta;
				url = decodeURIComponent(url);
				//console.log(url);
				// 如果包含?则直接拼接
				if(url.indexOf("?") != -1 ){
					url += "isCheckLogin=false";
				}else{
					url += "?isCheckLogin=false";
				}
				uni.reLaunch ({
					url : url
				});
			},
			getUrlCode(name) {
				return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ''])[1]
					.replace(/\+/g, '%20')) || null
			},
			checkWeChatCode() {
				let code = this.getUrlCode('code')
				if (code) {
					this.getOpenidAndUserinfo(code)
				}
			},
			getOpenidAndUserinfo(code){
				var that = this;
				this.$u.api.sys.mph5login({
				        code: code
				    }).then(res => {
						console.log("h5登录：")
						console.log(res)
						if(res.code == 1){
							that.data = res.data;
							uni.setStorageSync('uid',res.data.uid);
							that.$u.vuex('vuex_token', res.data.uid);
							that.$u.vuex('vuex_isRefreshUserPage', true);
							this.globalUtil.utilAlert(res.msg);
							
							// uni.navigateBack({
							// 	delta: 2
							// });
							setTimeout(function(){
								uni.switchTab({
									url:'/pages/index/index'
								})
							},500)
							return;
						
						}else{
							this.globalUtil.utilAlert(res.msg);
						}			    
				});
			},
			bindGetUserInfo(){
				let that = this;
				let shareId = that.vuex_shareId;
				/*
				var tto = Math.floor(Math.random()*10000000000+1);
				that.userinfo = {
					phone:tto
				};
				//生成一个用户
				that.$u.api.sys.wechatAppLogin(that.userinfo).then(res => {
						console.log(res);
						if(res.code == 1){
							that.data = res.data;
							
							that.$u.vuex('vuex_token', res.data.uid);
							that.$u.vuex('vuex_isRefreshUserPage', true);
							uni.setStorageSync('uid',res.data.uid);
							uni.navigateBack({
								delta: 1
							});
						}
				
				});
				console.log(tto);return;*/
				//如果当前是h5
				
				//H5
				/*#ifdef H5*/
				//console.log(getApp().globalData.h5appid);
				var appid = getApp().globalData.h5appid
				let local = encodeURIComponent(getApp().globalData.REDIRECT_URI); //获取当前页面地址作为回调地址
				var url = "https://open.weixin.qq.com/connect/oauth2/authorize?appid="+
				appid+
				"&redirect_uri="+
				local+
				"&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect";
			
				window.location.href = url;
				return false;
				
				/*#endif*/
				
				
				/*#ifdef MP*/
			
				// 获取用户信息
				uni.getUserInfo({
				  provider: 'weixin',
				  success: function (infoRes) {
					  console.log(infoRes);
					  
					  that.userinfo = {
						  country: infoRes.userInfo.country,
							avatarUrl: infoRes.userInfo.avatarUrl,
							province: infoRes.userInfo.province,
							city: infoRes.userInfo.city,
							avatarUrl: infoRes.userInfo.avatarUrl,
							gender: infoRes.userInfo.gender,
							nickName: infoRes.userInfo.nickName,
							iv: infoRes.iv,
							encryptedData: infoRes.encryptedData
					  };

					uni.login({
					  provider: 'weixin',
					  success: function (loginRes) {
					    console.log(loginRes);
						//用code获取用户信息
						that.userinfo.code = loginRes.code;

						that.$u.api.sys.wechatMinLogin(that.userinfo).then(res => {
								console.log(res);
								if(res.code == 1){
									that.data = res.data;
									
									that.$u.vuex('vuex_token', res.data.uid);
									that.$u.vuex('vuex_isRefreshUserPage', true);
									uni.setStorageSync('uid',res.data.uid);
									if(that.options != ''){
										console.log('准备跳转回去的页面:',that.options.delta);
										
										let delat = that.options.delta || '';
										delat = decodeURIComponent(delat);
										
										if(delat.indexOf("/pages/my/my") != -1){
											uni.reLaunch ({
												url : delat
											});
											return;
										}
										
										uni.navigateBack({
											delta: 1
										});
									}
								}
						
						});
					    
					  }
					});
				  }
				});

				/*#endif*/
				
			}
		}
	}
</script>

<style>
	page {
	  background: #fff;
	  font-size: 32rpx;
	}
	.container {
	  padding: 0 60rpx;
	}
	
	.wechatapp {
	  padding: 80rpx 0 48rpx;
	  border-bottom: 1rpx solid #e3e3e3;
	  margin-bottom: 72rpx;
	  text-align: center;
	}
	
	.wechatapp .header .image {
	  width: 200upx;
	  height: 200upx;
	  padding: 1rpx;
	}
	
	.auth-title {
	  color: #585858;
	  font-size: 34rpx;
	  margin-bottom: 40rpx;
	}
	
	.auth-subtitle {
	  color: #888;
	  margin-bottom: 88rpx;
	  font-size: 28rpx;
	}
	
	.login-btn {
	  padding: 0 20rpx;
	}
	
	.login-btn button {
	  height: 88rpx;
	  line-height: 88rpx;
	  background: #2979ff;
	  color: #fff;
	  font-size: 30rpx;
	  border-radius: 40rpx;
	  text-align: center;
	}
	
	.no-login-btn {
	  margin-top: 20rpx;
	  padding: 0 20rpx;
	}
	
	.no-login-btn button {
	  height: 88rpx;
	  line-height: 88rpx;
	  background: #ebebeb;
	  color: #fff;
	  font-size: 30rpx;
	  border-radius: 40rpx;
	  text-align: center;
	}

</style>
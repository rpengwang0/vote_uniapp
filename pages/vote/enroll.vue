<template>
	<view class="container">
		<view class="form-item">
			<view class="title-text">参赛名称</view>
			<view class="title-input">
				<u-input v-model="form.user_name"  placeholder="请输入参赛名称" maxlength="20"/>
			</view>
		</view>
		<u-gap height="1" bg-color="#eee"></u-gap>
		<view class="form-item">
			<view class="desc-text">
				<view>参赛介绍</view>
				<view @click="chooseImg('user_img')">
					<u-icon name="photo-fill" color="#f96770" size="32"></u-icon>
					<span style="padding-left: 10rpx;">参赛图片</span>
				</view>
			</view>
			<view class="desc-input">
				<u-input type="textarea" v-model="form.user_desc" placeholder="请输入参赛介绍" maxlength="1024" :custom-style="customStyle"/>
			</view>
		</view>
		
		<view class="img-list flex-center">
			<view v-for="(item,index) in form.user_img" :key="index" class="p-20 position-r img-item">
				<view class="position-a" @click="deleteImg('user_img',item)">
					<u-icon name="close-circle-fill" color="#f96770" size="50"></u-icon>
				</view>
				
				<u-image :src="item" width="170" height="170" border-radius="5" mode="aspectFit" @click="previewImg(item)"></u-image>
			</view>
		</view>
		
		<u-gap height="30" bg-color="#eee"></u-gap>
		<view class="form-item form-item-line">
			<view >自定义分享图片</view>
			<view @click="chooseImg('user_share_img')">
				<u-image :src="form.user_share_img" width="100" height="100" border-radius="5" shape="aspectFill"></u-image>
			</view>
		</view>
		<u-gap height="150" bg-color="#eee"></u-gap>
		
		<view class="page-bottom">
			<view class="btn-right" @click="submit()">
				<text>立即报名</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: 0,
				form: {
					user_name: '',
					user_desc: '',
					user_img: [],
					user_share_img: '',
				}
			};
		},
		onReady() {
			//微信浏览器环境下隐藏导航
			this.common.hidePageNavInWechatBrowser();
		},
		onShow(){
			
		},
		onLoad(options) {
			this.id = options.id || 0;
		},
		onUnload() {
			
		},
		methods: {
			chooseImg(type){
				let that = this;
				uni.chooseImage({
					count: 1, // 默认9
					sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'],
					success: function(res) {
						let tempImagePath = res.tempFilePaths[0];
						
						uni.compressImage({
							src: tempImagePath,
							quality: 80,
							success: res1 => {
								if(type == 'user_share_img'){
									that.form.user_share_img = res1.tempFilePath;
								}else if(type == 'user_img'){
									if(that.form.user_img.length >= 10){
										that.globalUtil.utilAlert('最少上传10张图片')
										return false;
									}
									
									that.form.user_img.push(res1.tempFilePath);
								}
							}
						})
						
					}
				});
			},
			deleteImg(type,path){
				let that = this;
				if(type == 'user_img'){
					let user_img = that.form.user_img;
					 
					for(var i=0;i<user_img.length;i++){
						if(user_img[i] == path){
							user_img.splice(i,1);
							break;
						}
					}
					that.form.user_img = user_img;
				}
			},
			previewImg(url){
				uni.previewImage({
					urls: [url],
					longPressActions: {
						itemList: ['发送给朋友', '保存图片', '收藏'],
					}
				});
			},
			checkParam(){
				
				if(this.form.user_name == ''){
					that.globalUtil.utilAlert('请输入参赛名称')
					return false;
				}
				
				if(this.form.user_desc == ''){
					that.globalUtil.utilAlert('请输入参赛介绍')
					return false;
				}
				
				return true;
			},
			submit(){
				let r = this.checkParam();
				if(r == false){
					return false;
				}
				
				console.log('开始报名')
			},
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		background-color: #eee;
		height: 100vh;
		
		.form-item{
			padding: 30rpx;
			background-color: #fff;
			
			.title-text,.desc-text{
				padding: 20rpx 0;
			}
			
			.desc-text{
				display: flex;
				justify-content: space-between;
			}
		}
		
		.form-item-line{
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		
		.flex-center{
			display: flex;
			align-content: center;
			justify-content: flex-start;
			flex-wrap: wrap;
		}
		
		.img-list{
			background-color: #fff;
			padding: 20rpx;
			
			.img-item{
				border-radius: 15rpx;
				border: 1px solid #eee;
				margin: 10rpx;
			}
			
			.p-20{
				padding: 20rpx;
			}
			.p-t-20{
				padding-top: 20rpx;
			}
			.p-b-20{
				padding-bottom: 20rpx;
			}
			.position-r{
				position: relative;
			}
			.position-a{
				position: absolute;
				right: -20rpx;
				top: -20rpx;
			}
		}
		
		.page-bottom{
			position:fixed;
			bottom: 0;
			left: 0;
			right: 0;
			z-index: 95;
			
			.btn-right{
				color: #fff;
				background-image: linear-gradient(#f96770, #fc587d);
				text-align: center;
				height: 80rpx;
				line-height: 80rpx;
				border-radius: 50rpx;
				flex: 1;
				margin: 30rpx 50rpx;
			}
		}
		
	}
</style>

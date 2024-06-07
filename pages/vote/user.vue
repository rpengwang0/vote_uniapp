<template>
	<view class="container">
		<view class="user-avatar">
			<image :src="data.player_person_img"></image>
		</view>
		<view class="user-name">
			<text>{{data.player_num}} 号选手 {{data.player_name}}</text>
		</view>
		
		<!-- <view class="title">
			<text>正在参加 {{activity_title}}</text>
		</view> -->
		<u-gap height="1" bg-color="#eee"></u-gap>
		<view class="numberBox">
			<view>
				<view class="number">{{data.player_num}}</view>
				<view class="numberText">编号</view>
			</view>
			<view>
				<view class="number">{{data.ticket_num}}</view>
				<view class="numberText">票数</view>
			</view>
			<view>
				<view class="number">{{data.row_num}}</view>
				<view class="numberText">排名</view>
			</view>
		</view>
		<u-gap height="1" bg-color="#eee"></u-gap>
		<!-- <view class="user-url">		
			<u-lazy-load :image="data.player_person_img" threshold="0" :class="[ 'img' + index ]" height="600" img-mode="aspectFill" border-radius="100"></u-lazy-load>
		</view> -->
		<u-gap height="1" bg-color="#eee"></u-gap>
		<view class="user-desc-title">感谢您支持我</view>
		<view class="user-desc">
			<swiper indicator-active-color="#1e81f7" style="padding: 16rpx" class="swiper-container">
				  <block>
					  <swiper-item class="gift">
					  
						  <view
							  @click="giftTab(index)"
							  :class="'gift-item ' + (index == giftData.currentIndex ? 'gift-item-selected' : '')"
							  :data-index="index"
							  v-for="(item, index) in giftList"
							  :key="index"
						  >
							  <view class="gen">
								  <image class="item-img" :src="item.gift_img" />
								   
							  </view>

							  <view class="gift_text">{{ item.gift_name }}({{ item.gift_ticket_num }}人气)</view>

							  <view class="gift_text">{{ item.gift_price }}</view>
						  </view>
						 
					  </swiper-item>
				  </block>
			</swiper>
			  <view class="pay_view">
				  <text>请选择数量</text>
				  <view class="stepper">
					  <!-- 减号 -->
					  <text :class="'sign ' + (num <= 1 ? 'disabled' : 'normal')" @tap="delCount" :data-index="index">-</text>
					  <!-- 数值 -->
					  <input class="number" type="number" @change="bindManual" :value="giftData.num" disabled="disabled" />
					  <!-- 加号 -->
					  <text class="sign" @tap="addCount" :data-index="index">+</text>
				  </view>
			  </view>
			          
			  <view class="agree" @tap="giftService">
				  <icon type="success" size="16" color="#f96770;"></icon>
				  <text class="ty">
					  我同意
					  <text style="color: #f96770;">《投票协议》</text>
				  </text>
				  
			  </view>
			 <view @click="closeewm" style="position:absolute;top:50%;width:100%:#cc0b69 solid 8rpx;padding: 5rpx;background-color: antiquewhite;" z-index="999999" v-show="modelShow">
			 	<text>请使用微信扫码,点击可关闭</text>
			 	<canvas canvas-id="qrcode" style="width:200px;height:200px;align-self: center;"/>
				<text>支付方式：
1、用另一部手机打开【微信】→【扫一扫】进行支付。
2、截屏保存至【相册】→打开【微信】→【扫一扫】→选择右下角【相册】→选择保存好的图片进行支付。</text>
			 </view>
			      
		</view>
		<u-gap height="1" bg-color="#eee"></u-gap>
		
		<view style="height: 200rpx;">
			
		</view>
		
		<!-- 底部操作菜单 -->
		<view class="page-bottom">
			<view >
					<peter-dianzan :count="count" :longPress="longPress" :class="biubiushow"></peter-dianzan>
			</view>
			<view class="btn-leaderboard" @click="gohome">
				<u-icon name="home" size="50"></u-icon>
			</view>
			<view @click="toPay(e)" class="btn-vote">
				<text>立即支持</text>
			</view>
			
			<view class="btn-leaderboard" @click="shareFun">
				<u-icon name="clock-fill" size="50"></u-icon>
			</view>
		</view>
		
		<u-popup   mode="center" z-index="999999">
			<view class="share-img">
				<image src="../../static/image/share.gif"></image>
			</view>
			<!-- <view class="share-box">
				<view class="share-icon" @click="shareFriend">
					<u-icon name="weixin-circle-fill" size="94" color="#15b628"></u-icon>
					<view class="text">转发给朋友</view>
				</view>
				<view class="share-icon" @click="shareComents">
					<u-icon name="moments-circel-fill" size="94" color="#15b628"></u-icon>
					<view class="text">分享到朋友圈</view>
				</view>
			</view> -->
		</u-popup> 
	
		
	</view>
</template>

<script>
	import wx from "jweixin-module";
	import uQrCode from "@/util/uQrCode.js"
	export default {
		
		data() {
			return {
				player_id: 0,
				activity_id:0,	
				activity_title:'',
				data: {},
				swiperHeight: 350,
				//礼物列表
				giftList:[],
				//送礼数据
				giftData:{'num':10,'currentIndex':0},
				time:10,
				longPress:true,
				count:0,
				//当前选中的礼物
				selectedGiftId:0,
				biubiushow:'hide',
				index:0,
				num:0,
				//设置默认的分享参数
				share:{
				    title:'',
				    path:'',
				    imageUrl:'',
				    desc:'感谢您支持我',
				    content:''
				},
				modelShow:false,
				//二维码相关参数
				modal_qr: false,
				url: 'https://pixabay.com/images/search/?order=ec', // 要生成的二维码值
				paystr:'',
			};
		},
		onReady() {
			//微信浏览器环境下隐藏导航
			this.common.hidePageNavInWechatBrowser();
		},
		onLoad(options) {
			this.player_id = options.id || 0;
			this.getData();
			//this.getShareFun();
			var that = this;
			var activity_data = uni.getStorageSync('activity');
			that.activity_id = activity_data.activity_id;
			that.activity_title = activity_data.activity_title;
			
			//读取礼物列表
			that.$u.api.sys.getGiftList({
			        activity_id: that.activity_id
			    }).then(res => {
					if(res.code == 1){
						var obj = {
							activity_id: 1,
							gift_img: "https://tp.guomei.work/giftimg/dianzan.jpg",
							gift_name: "点赞",
							gift_price: 0,
							// gift_ticket_num: that.data.zan_num,
							gift_ticket_num: 1,
							id: 1
						}
						res.data.unshift(obj);
						that.giftList = res.data;
					}
			
			});		
		},
		methods:{
			shareFun(){
				//this.modelShow=true
				//this.getShareFun()
				//刷新当前
				location.reload();
			},
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
							var shareData = {
								title: that.data.player_num+' 号选手 '+that.data.player_name, // 分享标题
								link: getApp().globalData.url+'pages/vote/user?id='+that.player_id, // 分享链接，该链接域名或路径必须与当前页面对应的公众号 JS 安全域名一致
								imgUrl: that.data.player_person_img, // 分享图标
								desc:that.share.desc
								// success:function(res){
								// 	that.modelShow = false;
								// 	console.log('success')//点击分享后
								// }
							};
							wx.updateTimelineShareData({ 
							    title: '我正在参加第五届“梅雅奖”网络十大人气评选活动，请帮我投票谢谢！',
							    link: getApp().globalData.url+'pages/vote/user?id='+that.player_id,
							    imgUrl: that.data.player_person_img, 
							    success: function () {
							      // 设置成功
							    }
							});
							wx.updateAppMessageShareData({ 
							  title: that.data.player_num+' 号选手 '+that.data.player_name,
							  desc: '我正在参加第五届“梅雅奖”网络十大人气评选活动，请帮我投票谢谢！', // 分享描述
							  link: getApp().globalData.url+'pages/vote/user?id='+that.player_id,
							  imgUrl: that.data.player_person_img, 
							  success: function () {
								that.modelShow = false;
								console.log('success')//点击分享后
							  }
							});
							
						})
				
			
					}
				})
			},
			
			//判断是否在微信中  
			isWechat:function(){  
				var ua = window.navigator.userAgent.toLowerCase();  
				if(ua.match(/micromessenger/i) == 'micromessenger'){  
					return true;  
				}else{  
					return false;  
				}  
			},  
			/**
			 * 单次点赞
			 */
			zan(count) {
				this.count += count;
			},
			
			/**
			 * 回到首页
			 */
			gohome(){
				console.log('gohome---------------');
				uni.redirectTo({
					url: "/pages/vote/show?id=4",
				})
			},
			/**
			 * 关闭二维码
			 */
			closeewm(){
				this.modelShow = false;
				//location.reload();
			},
			
			        
			getData(){
				
				let data = {
					id: 1,
					title: '这是测试投票',
					user_name: '快投我',
					vote_count: 99,
					leaderboard: 1,
					user_url: [
						{'url': '/static/image/user1.jpeg'},
						{'url': '/static/image/user2.png'},
						{'url': '/static/image/user3.png'},
						{'url': '/static/image/user4.jpeg'},
					],
					user_desc: '我是大美女 ',
				};
				
				this.data = data;
				/*
				uni.setNavigationBarTitle({
					title: data.id + "号选手 " +data.user_name
				});
				*/
			   var that = this;
			   
			   //读取选手信息
			   that.$u.api.sys.getPlayerInfo({
			           activity_id: that.activity_id,player_id:that.player_id
			       }).then(res => {
				
					if(res.code == 1){
						that.data = res.data;
					}
			   
			   });
			
				
			},
			swiperChange(e){
				let curr = e.detail.current;
				
				this.setSwiperHeight(curr);
			},
			setSwiperHeight(curr){
				let that = this;
				let query = uni.createSelectorQuery();
				query.select(".img"+curr).boundingClientRect()
				query.exec((res) => {
					that.swiperHeight = res[0].height;
				})
			},
			
			//为选手投票
			toPay: function (e) {
				
				var that = this;
				uni.showLoading({
					title: '加载中',
				})
				// 查看是否授权
				if (uni.getStorageSync('uid')) {
					
					//如果免费的礼物
					if (that.giftData.currentIndex == 0) {
						//数据处理
						var pdata = that.activity_id+'|'+uni.getStorageSync("uid")+'|'+that.data.player_id+'|'+that.giftData.num;
						
						const Encrypt  = require('../../util/jsencrypt.min.js');
						let cryptFirst = new Encrypt.JSEncrypt();
		
						cryptFirst.setPrivateKey('MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqxUGcj8TZ+827OdLxGc56MwTALFi3XR4x0eY9Qx/gSzjqSmvLmWuwtT7YaA3RQ6xihSfqAVzGXnc+nk7YI9tcfBG6PSr5qmGpqcNCtwx28t60qVa6L/uuhe/jtcSH+iqmq9t4vx2UXTxvoFnyS+Sx11QOe7KgaCRzWhM98/Iase0GZaZHCNDUGUTmJP2nOuM+8rvTkR9fV5mrj8/K+1qLPpYftbkLZ+g3fsoxiUN0fV/jDhXulH3wgZ40T6VPw3HR1i99cLyGtrim8SGxcnlplHTGz9+TxyG5FdNtDuRTQ0RaeTUv0KdGeMNxLwMo3wrW6DzcuuCcnP/0Yh05oQrMQIDAQAB');
						var esign = cryptFirst.encrypt(pdata);
						//,{'Content-Type':'application/x-www-form-urlencoded','actoken': uni.getStorageSync("uid"),}
						//投票
						that.$u.api.sys.clickPlayerTicket({
						        activity_id: that.activity_id,
								player_id:that.player_id,
								uid: uni.getStorageSync("uid"),
								num: that.giftData.num,
								esign:esign
						    },{
								'Content-Type':'application/x-www-form-urlencoded',
								'actoken': uni.getStorageSync("uid")
							}).then(res => {
								console.log(res);
								if(res.code ==1){	
									//that.biubiushow = 'show';
									//that.zan(res.data.addnum);
									this.globalUtil.utilAlert('投票成功，感谢您的支持');
									setTimeout(function(){that.biubiushow = 'hide';},3000)
									//投完票重新加载一下数据
									that.getData();
								}else{
									this.globalUtil.utilAlert(res.msg);
									return false;
								}								
						
						});
						
					} else {
						
						//付费投票
						that.$u.api.sys.createOrder({
						        activity_id: that.activity_id,
								player_id:that.player_id,
								gift_id:that.giftData.gift_id,
								num:that.giftData.num,
								uid:uni.getStorageSync("uid")
						    }).then(res => {
								if (res.code == 1) {
									/*#ifdef H5*/
									that.wechatpayh5(res.data.order_id);
									//that.wechatpaynu(res.data.order_id);
									//that.createAlipay(res.data.order_id);
									/*#endif*/
									/*#ifdef MP*/
									that.wechatpay(res.data.order_id);
									/*#endif*/
								} else {
									this.globalUtil.utilAlert(res.msg);
									return false;
								}						
						});
						
					}
					
				} else {
					uni.hideLoading()
				
					uni.navigateTo({
						url: "/pages/index/login",
					})
				}
				e.preventDefault();
			},
			//微信支付
			wechatpay: function (order_id) {
					
			    var that = this;					
				that.$u.api.sys.createMiniWeChatPay2({
					   order_id: order_id
					}).then(res => {
						if (res.code == 1) {
							//调用支付
							uni.requestPayment({
								provider: 'wxpay',
								'appId': res.data.appId,
								'nonceStr': res.data.nonceStr,
								'package': res.data.package,
								'timeStamp': res.data.timeStamp,
								'signType': 'MD5',
								'paySign': res.data.paySign,							
								success: function (res) {
									//支付成功，庆祝一下、
								
									that.biubiushow = 'show';
									that.zan(100);
									setTimeout(function(){that.biubiushow = 'hide';},3000)
									//投完票重新加载一下数据
									that.getData();
									console.log('success:' + JSON.stringify(res));
								},
								fail: function (err) {
									console.log('fail:' + JSON.stringify(err));
								}
							});
						} else {
							this.globalUtil.utilAlert(res.msg);
							return false;
						}
					
				});
					
			        
			    },
				
				//微信支付  公众号
				wechatpayh5: function (order_id) {
						
				var that = this;					
				that.$u.api.sys.createWxPay({
					   order_id: order_id
					}).then(res => {
						if (res.code == 1) {
							var data = res.data.optionjson
							//调用支付
							WeixinJSBridge.invoke('getBrandWCPayRequest', {
								"appId": data.appId,     //公众号ID，由商户传入     
								"timeStamp": data.timeStamp,
								"nonceStr": data.nonceStr,
								"package": data.package,
								"signType": data.signType, 
								"paySign": data.paySign, 
							},
							function(res) {
								if (res.err_msg == "get_brand_wcpay_request:ok") {
									// 使用以上方式判断前端返回,微信团队郑重提示：
									//res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
									this.globalUtil.utilAlert('感谢您的支持！');
									
								}
							});
							
							
						} else {
							this.globalUtil.utilAlert(res.msg);
							return false;
						}
					
				});
					
					
				},
				//微信支付  Native下单API
				wechatpaynu: function (order_id) {
						
				var that = this;					
				that.$u.api.sys.createWxPayNative({
					   order_id: order_id
					}).then(res => {
						console.log(res);
						if (res.code == 1) {
							//跳转去支付
							//window.open(res.data.openlink);
							window.location.href = res.data.openlink;
							return false;
							/*
							that.modelShow = true;
							//生成二维码
							uQrCode.make({
								canvasId: 'qrcode',
								componentInstance: this,
								text: res.data.optionjson,
								size: 200,
								margin: 0,
								backgroundColor: '#ffffff',
								foregroundColor: '#000000',
								fileType: 'jpg',
								errorCorrectLevel: uQrCode.errorCorrectLevel.H,
								success: res => {}
							})*/
							
							
						} else {
							this.globalUtil.utilAlert(res.msg);
							return false;
						}
					
				});
					
					
				},
				//支付宝付款
				createAlipay: function (order_id) {						
					var that = this;					
					that.$u.api.sys.createAlipay({
						   order_id: order_id
						}).then(res => {
							console.log(res);
							if (res.code == 1) {
								//跳转去支付
								//window.open(res.data.openlink);
								//window.location.href = res.data.openlink;
								//that.paystr = res.data.pay;
								//将接口返回的Form表单显示到页面
								document.querySelector('body').innerHTML = res.data.pay;
							   //调用submit 方法
								document.forms[0].submit()
								return false;			
								
							} else {
								this.globalUtil.utilAlert(res.msg);
								return false;
							}						
					});				
					
				},
			    closeGif:function(){
			        that.setData({
			            gifShow:false
			        })
			    },
			    giftService: function () {
			        uni.showModal({
			            title: '提示',
			            content: ' 1、赠送礼物是个人自愿行为。\r\n    2、为了防止恶意刷票，每个选手单日最高可获得1000票免费票。\r\n             3、承办方东方华服有最终解释权。\r\n      4、非法手段投票系统会做拉黑处理，并取消参赛资格！',
			            showCancel: false
			        })
			    },
			    /* 加数 */
			    addCount: function (e) {
			        var num = this.giftData.num;
			        // 总数量+1  
			        //免费礼物
			        if(this.giftData.currentIndex==0&&num>=10){
			            return false;
			        }
			        if (num < 1000) {
			            this.giftData.num++;
			        }
			        // 将数值与状态写回 
			        
			        this.giftData.priceAll=Number(this.giftData.num) * this.giftData.price;
			    },
			    /* 减数 */
			    delCount: function (e) {
			        var num = this.giftData.num;
			        if (num > 1) {
			            this.giftData.num--;
			        }
			        // 将数值与状态写回  
			   
					this.giftData.priceAll=Number(this.giftData.num) * this.giftData.price;
			    },
			    //选中礼物
			    giftTab: function (index) {
					console.log(index);
			        var that = this;
			        if (index == 0) {
			            that.giftData = {
			                // num: wx.getStorageSync('topMax') || 1,
			                num: 10,
			                currentIndex: index,
			                price: that.giftList[index].gift_price,
			                priceAll: that.giftList[index].gift_price,
			                gift_id: that.giftList[index].id
			            };
			        } else {
			            that.giftData = {
			                num: 1,
			                currentIndex: index,
			                price: that.giftList[index].gift_price,
			                priceAll: that.giftList[index].gift_price,
			                gift_id: that.giftList[index].id,
			                gift_blind:that.giftList[index].is_acciden
			            };
			            
			        }
					console.log(that.giftData);
			    },
		},
	}
</script>

<style lang="scss">
	.show{display: block;}
	.hide{display: none;}
	.container{
		padding: 30rpx;
		.user-avatar{
			width: 200rpx;
			height: 200rpx;
			margin:auto;
			overflow: hidden;
			border-radius: 50%;
			image{
				display: block;
				width: 100%;
				height: 100%;
			}
		}
		.swiper-container{
			height: 740rpx;
		}
		.user-name{
			text-align: center;
			color: #f96770;
			font-size: 36rpx;
			font-weight: bold;
			padding:10upx 0;
		}
		.share-img{
			width:670rpx;
			height: 240upx;
			image{
				display: block;
				width: 100%;
				height: 100%;
			}
		}
		.title{
			padding: 30rpx 20rpx;
			text-align: center;
			color: #909399;
			letter-spacing: 4px;
		}
		.numberBox{
			display: flex;
			justify-content: space-between;
			align-content: center;
			text-align: center;
			padding: 30rpx;
			
			.number{
				color: #f96770;
				font-size: 40rpx;
				font-weight: bold;
				padding-bottom: 10rpx;
			}
			
			.numberText{
				color: #909399;
				font-weight: bold;
			}
		}
		
		.user-desc-title{
			color: #f96770;
			text-align: center;
			padding: 20rpx 0;
			font-size: 30rpx;
			font-weight: bold;
		}
		
		.user-desc{
			color: #909399;
			padding-bottom: 20rpx;
		}
		
		.user-url{
			padding: 20rpx;
		}
		
		.page-bottom{
			background-color: #eee;
			width: 90%;
			position:fixed;
			bottom: 0;
			left: 5%;
			right: 0;
			z-index: 99999;
			display: flex;
			justify-content: space-between;
			align-items: flex-end;
			
			.btn-zhuan, .btn-leaderboard,.btn-vote{
				background-color: #f96770;
				color: #fff;
				text-align: center;
				width: 80rpx;
				height: 80rpx;
				line-height: 80rpx;
				border-radius: 50%;
				margin: 20rpx 20rpx 30rpx 20rpx;
				
				display: flex;
				justify-content: center;
				align-content: center;
			}
			.btn-vote{
				background-image: linear-gradient(#f96770, #fc587d);
				width: 250rpx;
				border-radius: 50rpx;
			}
		}
	}
	
	
	.gift {
	  display: flex;
	  flex-direction: row;
	  flex-wrap: wrap;
	  /* justify-content: space-between; */
	}
	.gift-item {
	  width: 33%;
	  height: 240rpx;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  flex-direction: column;
	  color: #999;
	}
	.gen{position: relative;}
	.gift-item-selected {border: 2rpx solid #ccab69;}
	.piaoshu {
	  position: absolute;
	  top: 20rpx;
	  right: 0;
	  background: #888;
	  padding: 4rpx 0 4rpx 16rpx;
	  border-top-left-radius: 50rpx;
	  border-bottom-left-radius: 50rpx;
	  color: #fff;
	  font-weight: bold;
	  font-size: 22rpx;
	}
	.item-img {width: 140rpx;}
	.item-img {width: 162rpx;height: 162rpx;margin-bottom: 10rpx;}
	.pay-money {border-bottom: 2rpx solid #eee;padding:24rpx 20rpx;color: #999;margin: 0 20rpx;}
	.deal {align-items: center;padding-left: 20rpx;margin-top: 30rpx;}
	.gift-btn {background: #ccab69;color: #fff;margin-top: 20rpx;font-size: 30rpx;}
	.agree {display: flex;height: 40rpx;margin: 24rpx 0 24rpx 24rpx;font-size: 28rpx;color: #666;position: relative;}
	.agree icon {position: absolute;top: 0;left: 0;}
	.agree .ty {position: absolute;font-size: 26rpx;top: -1rpx;left: 40rpx;}
	.gift-item .gift_text{color:#333;font-size:24rpx;}
	.gift-item .gift_text:nth-child(3){color:#ccc;}
	.pay_view{display: flex;justify-content: space-between;height:120rpx;border-top:1rpx solid #eee;border-bottom:1rpx solid #eee;
	margin:0 20rpx;align-items: center;padding:0 20rpx;z-index:2666;}
	.stepper {width:250rpx;height: 72rpx;border-radius: 3rpx;-webkit-border-radius: 3rpx;background: #fff;}   
	.stepper .sign {width: 74rpx;line-height: 72rpx;text-align: center;float: left;color:#fff;background:#f96770;font-size:40rpx;}   
	.stepper .number {width: 102rpx;  height: 68rpx;float: left;  margin: 0 auto; text-align: center;font-size: 28rpx;color: #ccab69;
	background:#fff;border-top:2rpx solid #ccab69;border-bottom:2rpx solid #ccab69;} 
	.stepper .disabled{color: #ccc;}  
	.pay-money text{color:#ccab69;font-size:34rpx;padding-right: 10rpx;}
	.gift_top text{padding-left:15rpx;}
	
	
	/***开奖结果**/
	.gifModel{width:100%;height:100%;position: fixed;left:0;top:0rpx;background: rgba(0, 0, 0, 0.3);display: flex;justify-content: center;align-items: center;
	  z-index: 100;}
	.gifModel .gif_bg{width:100%;height:97vh;margin:0 33rpx;}
	.gifContent{width:70%;position: absolute;top:40%;}
	.gif_list{max-height: 465rpx;}
	.prize_li{display: flex;align-items: center;padding:0 30rpx;}
	.prize_li .prize_img{width:80rpx;height: 80rpx;flex-shrink: 0;margin-right:20rpx;}
	.prize_li .prize_text{color:#333;font-size: 28rpx;}
	.gifModel .prize_btn{width:350rpx;height:82rpx;background:#a81800;color:#fdf1a7;font-size:32rpx;text-align: center;line-height:82rpx;margin:30rpx auto 20rpx;
	border-radius:8rpx;}

	/*********点赞**********/
	.logo {
	    height: 200rpx;
	    width: 200rpx;
	    margin-top: 200rpx;
	    margin-left: auto;
	    margin-right: auto;
	    margin-bottom: 50rpx;
	}
	
	.text-area {
	    display: flex;
	    justify-content: center;
	}
	
	.title {
	    font-size: 36rpx;
	    color: #8f8f94;
	}
	.dianzan {
	    position: fixed;
	    bottom: 30rpx;
	}
	.like-effect-wrap .like-canvas{
		z-index:0 !important;
	}
	.share-box{
		display: flex;
		justify-content: space-between;
		padding:20upx 0;
		.share-icon{
			width: 48%;
			text-align: center;
			.text{
				color:#333;
				font-size: 12px;
			}
		}
	}
</style>

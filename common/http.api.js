/*
接口统一管理配置
*/

import config from '@/common/environment.js';
const  BASE_API = config.BASE_API;
const  multipartUrl = config.MULTIPART_API;
const install = (Vue, vm) => {
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	const sys={
		login: (params = {}) => vm.$u.post(BASE_API + 'user/login', params),
		userInfo: (params = {}) => vm.$u.post(BASE_API + 'user/getUserInfo', params),
		//获取活动列表
		getActivityList: (params = {}) => vm.$u.post(BASE_API + 'ticket/activity_api/getActivityList', params, {'Content-Type':'application/x-www-form-urlencoded'}),
		//获取活动信息
		getActivityInfo: (params = {}) => vm.$u.post(BASE_API + 'ticket/activity_api/getActivityInfo', params, {'Content-Type':'application/x-www-form-urlencoded'}),
		//获取选手列表
		getActivityPlayerList:(params = {}) => vm.$u.post(BASE_API + 'ticket/activity_api/getActivityPlayerList', params, {'Content-Type':'application/x-www-form-urlencoded'}),
		//获取banner
		getActivityBannerList:(params = {}) => vm.$u.post(BASE_API + 'ticket/activity_api/getActivityBannerList', params, {'Content-Type':'application/x-www-form-urlencoded'}),
		//获取选手
		getPlayerInfo:(params = {}) => vm.$u.post(BASE_API + 'ticket/activity_api/getPlayerInfo', params, {'Content-Type':'application/x-www-form-urlencoded'}),
		//获取礼物列表
		getGiftList:(params = {}) => vm.$u.post(BASE_API + 'ticket/activity_api/getGiftList', params, {'Content-Type':'application/x-www-form-urlencoded'}),
		//给选手投票
		clickPlayerTicket:(params = {},header={}) => vm.$u.post(BASE_API + 'ticket/activity_api/clickPlayerTicket', params, header),
		//付费礼物
		createOrder:(params = {},header={'Content-Type':'application/x-www-form-urlencoded'}) => vm.$u.post(BASE_API + 'ticket/order/createOrder', params, header),
		//微信支付 
		createMiniWeChatPay2:(params = {},header={'Content-Type':'application/x-www-form-urlencoded'}) => vm.$u.post(BASE_API + 'ticket/order/createMiniWeChatPay2', params, header),
		//微信支付  公众号
		createWxPay:(params = {},header={'Content-Type':'application/x-www-form-urlencoded'}) => vm.$u.post(BASE_API + 'ticket/order/createWxPay', params, header),
		//微信支付  公众号Native
		createWxPayNative:(params = {},header={'Content-Type':'application/x-www-form-urlencoded'}) => vm.$u.post(BASE_API + 'ticket/order/createWxPayNative', params, header),
		//支付宝支付
		createAlipay:(params = {},header={'Content-Type':'application/x-www-form-urlencoded'}) => vm.$u.post(BASE_API + 'ticket/order/createAlipay', params, header),
		
		
		//授权登录
		wechatMinLogin:(params = {}) => vm.$u.post(BASE_API + 'ticket/wechat/wechatMinLogin', params, {'Content-Type':'application/x-www-form-urlencoded'}),
		//公众号的登录
		mph5login:(params = {}) => vm.$u.post(BASE_API + 'ticket/wechat/mph5login', params),
		//APP的登录
		wechatAppLogin:(params = {}) => vm.$u.post(BASE_API + 'ticket/wechat/wechatAppLogin', params),
		//获取微信参数
		getConfigJson:(params = {}) => vm.$u.post(BASE_API + 'ticket/order/getconfigjson', params),

	}
	
	const multipartAddress={
		'updload': multipartUrl + 'upload',
		'updloads': multipartUrl + 'uploads',
	}
	vm.$u.api = {sys,multipartAddress};
}

export default {
	install
}
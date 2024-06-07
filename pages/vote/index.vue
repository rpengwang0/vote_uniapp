<template>
	<view class="container">
		<view class="steps">
			<u-steps :list="numList" :current="current" active-color="#f96770" mode="number"></u-steps>
		</view>
		
		<view class="content content-0" v-show="current == 0">
			<view class="bg-box">
				<u-image :src="form.bg_url" width="100%" height="300" border-radius="5" mode="aspectFill"></u-image>
				
				<view class="upload-bg" @click="cropBg()">
					<u-icon name="camera-fill" color="#f96770" size="32"></u-icon>
					<span style="padding-left: 10rpx;">自定义封面</span>
				</view>
			</view>
			<view class="form-item">
				<view class="title-text">投票主题</view>
				<view class="title-input">
					<u-input v-model="form.title"  placeholder="请输入投票主题" maxlength="20"/>
				</view>
			</view>
			<u-gap height="1" bg-color="#eee"></u-gap>
			<view class="form-item">
				<view class="desc-text">
					<view>投票介绍</view>
					<view @click="chooseImg('desc_img')">
						<u-icon name="photo-fill" color="#f96770" size="32"></u-icon>
						<span style="padding-left: 10rpx;">添加图片</span>
					</view>
				</view>
				<view class="desc-input">
					<u-input type="textarea" v-model="form.desc" placeholder="请输入投票介绍" maxlength="1024" :custom-style="customStyle"/>
				</view>
			</view>
			
			<view class="img-list flex-center">
				<view v-for="(item,index) in form.desc_img" :key="index" class="p-20 position-r img-item">
					<view class="position-a" @click="deleteImg('desc_img',item)">
						<u-icon name="close-circle-fill" color="#f96770" size="50"></u-icon>
					</view>
					
					<u-image :src="item" width="170" height="170" border-radius="5" mode="aspectFit" @click="previewImg(item)"></u-image>
				</view>
			</view>
		</view>
		
		<view class="content content-1" v-show="current == 1">
			<view class="form-item">
				<view>是否开放报名</view>
				<view>
					<u-switch v-model="form.is_open" active-color="#f96770" @change="isOpenChange"></u-switch>
				</view>
			</view>
			
			<view v-show="form.is_open == true" style="margin-left: 30rpx;">
				<u-gap height="1" bg-color="#eee"></u-gap>
				<view class="form-item">
					<view>报名开始时间</view>
					<view @click="openTimePicker('enroll_start_time')">
						{{form.enroll_start_time}}
					</view>
				</view>
				<u-gap height="1" bg-color="#eee"></u-gap>
				<view class="form-item">
					<view >报名结束时间</view>
					<view @click="openTimePicker('enroll_end_time')">
						{{form.enroll_end_time}}
					</view>
				</view>
				<u-gap height="1" bg-color="#eee"></u-gap>
				<view class="form-item">
					<view>报名者手机号是否必填</view>
					<view>
						<u-switch v-model="form.phone_required" active-color="#f96770"></u-switch>
					</view>
				</view>
				<u-gap height="1" bg-color="#eee"></u-gap>
				<view class="form-item">
					<view>报名者微信号是否必填</view>
					<view>
						<u-switch v-model="form.weixin_required" active-color="#f96770"></u-switch>
					</view>
				</view>
			</view>
			
			<u-gap height="1" bg-color="#eee"></u-gap>
			<view class="form-item">
				<view >主办方信息</view>
				<view >
					<u-switch v-model="form.is_sponsor" active-color="#f96770"></u-switch>
				</view>
			</view>
			
			<view v-show="form.is_sponsor == true" style="margin-left: 30rpx;">
				<u-gap height="1" bg-color="#eee"></u-gap>
				<view class="form-item">
					<view>主办方名称</view>
					<view>
						<u-input v-model="form.sponsor_name" input-align="right" placeholder="请输入主办方名称" maxlength="50"/>
					</view>
				</view>
				<u-gap height="1" bg-color="#eee"></u-gap>
				<view class="form-item">
					<view>主办方电话</view>
					<view>
						<u-input type="number" v-model="form.sponsor_mobile" input-align="right" placeholder="请输入主办方电话" maxlength="11"/>
					</view>
				</view>
			</view>
			
			<u-gap height="1" bg-color="#eee"></u-gap>
			<view class="form-item">
				<view >投票开始时间</view>
				<view @click="openTimePicker('vote_start_time')">
					{{form.vote_start_time}}
				</view>
			</view>
			<u-gap height="1" bg-color="#eee"></u-gap>
			<view class="form-item">
				<view >投票结束时间</view>
				<view @click="openTimePicker('vote_end_time')">
					{{form.vote_end_time}}
				</view>
			</view>
		</view>
		
		<view class="content content-1" v-show="current == 2">
			<view class="form-item">
				<view >投票分享图片</view>
				<view @click="chooseImg('share_url')">
					<u-image :src="form.share_url" width="100" height="100" border-radius="5" shape="aspectFill"></u-image>
				</view>
			</view>
			<u-gap height="1" bg-color="#eee"></u-gap>
			<view class="form-item">
				<view >每日投票次数</view>
				<view @click="openNumberList('day_vote_number')" style="min-width: 100rpx;text-align: right;">
					{{form.day_vote_number}}
				</view>
			</view>
			<u-gap height="1" bg-color="#eee"></u-gap>
			<view class="form-item">
				<view >是否允许重复投票</view>
				<view >
					<u-switch v-model="form.is_repeat_vote" active-color="#f96770"></u-switch>
				</view>
			</view>
			
			<u-gap height="1" bg-color="#eee"></u-gap>
			<view class="form-item">
				<view >地区和IP限制</view>
				<view>
					<u-switch v-model="form.is_ip_region_restrict" active-color="#f96770"></u-switch>
				</view>
			</view>
			
			<view v-show="form.is_ip_region_restrict == true" style="margin-left: 30rpx;">
				<u-gap height="1" bg-color="#eee"></u-gap>
				<view class="form-item">
					<view>限制地区</view>
					<view @click="openRegionPicker()">
						{{form.region}}
					</view>
				</view>
				<u-gap height="1" bg-color="#eee"></u-gap>
				<view class="form-item">
					<view>同一IP可投票微信号数量</view>
					<view @click="openNumberList('ip_number')" style="min-width: 100rpx;text-align: right;">
						{{form.ip_number}}
					</view>
				</view>
			</view>
			
			<u-gap height="1" bg-color="#eee"></u-gap>
			<view class="form-item">
				<view >是否展示在首页列表</view>
				<view >
					<u-switch v-model="form.is_show_index" active-color="#f96770"></u-switch>
				</view>
			</view>
		</view>
		
		<view class="content content-0" v-show="current == 3">
			
			<view class="form-item">
				<view class="desc-text">
					<view>活动奖励</view>
					<view @click="chooseImg('prize_img')">
						<u-icon name="photo-fill" color="#f96770" size="32"></u-icon>
						<span style="padding-left: 10rpx;">添加图片</span>
					</view>
				</view>
				<view class="desc-input">
					<u-input type="textarea" v-model="form.prize" placeholder="请输入活动奖励" maxlength="1024" :custom-style="customStyle"/>
				</view>
			</view>
			
			<view class="img-list flex-center">
				<view v-for="(item,index) in form.prize_img" :key="index" class="p-20 position-r img-item">
					<view class="position-a" @click="deleteImg('prize_img',item)">
						<u-icon name="close-circle-fill" color="#f96770" size="50"></u-icon>
					</view>
					
					<u-image :src="item" width="170" height="170" border-radius="5" mode="aspectFit" @click="previewImg(item)"></u-image>
				</view>
			</view>
		</view>
		
		<!-- 底部操作菜单 -->
		<view class="page-bottom">
			<view class="btn-left" @click="toLast()" :style="{ opacity: getOpacity() }">上一步</view>
			<view class="btn-right" @click="toNext()" v-if="current < 3">下一步</view>
			<view class="btn-right" @click="submit()" v-if="current == 3">立即发起</view>
		</view>
		
		<u-picker v-model="showTimePicker" :start-year="startYear" mode="time" :params="timeParams" confirm-color="#f96770" @confirm="confirmTimePicke" :defaultTime="thisDefaultTime"></u-picker>
		<u-select v-model="showNumberSelect" :list="numberList" confirm-color="#f96770" @confirm="confirmNumberSelect"></u-select>
		<u-select v-model="showRegionSelect" mode="mutil-column-auto" :list="regionList" confirm-color="#f96770" @confirm="confirmRegionSelect"></u-select>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				numList: [
					{name: '活动内容'}, 
					{name: '活动选项'}, 
					{name: '高级选项'}, 
					{name: '活动奖励'}, 
				],
				customStyle: {
					lineHeight: '50rpx',
				},
				
				form: {
					// 活动内容
					bg_url: '',
					title: '',
					desc: '',
					desc_img: [],
					
					// 是否开放报名
					is_open: false,
					enroll_start_time: '',
					enroll_start_timestamp: '',
					enroll_end_time: '',
					enroll_end_timestamp: '',
					phone_required: false,
					weixin_required: false,
					
					// 主办方信息
					is_sponsor: false,
					sponsor_name: '',
					sponsor_mobile: '',
					
					// 投票开始和结束时间
					vote_start_time: '',
					vote_start_timestamp: '',
					vote_end_time: '',
					vote_end_timestamp: '',
					
					share_url: '',
					day_vote_number: 1,
					is_repeat_vote: false,
					is_ip_region_restrict: false,
					region: '全部,全部,全部',
					region_id: '0,0,0',
					ip_number: 1,
					is_show_index: false,
					
					// 奖励
					prize: '',
					prize_img: [],
				},
				
				showTimePicker: false,
				thisTimeType: '',
				thisDefaultTime: '',
				startYear: 2022,
				timeParams:{
					year: true,
					month: true,
					day: true,
					hour: true,
					minute: true,
					second: false,
					// 选择时间的时间戳
					timestamp: true,
				},
				
				showNumberSelect: false,
				thisNumberType: '',
				numberList:[
					{value: '1',label: '1'},
					{value: '2',label: '2'},
					{value: '3',label: '3'},
					{value: '4',label: '4'},
					{value: '5',label: '5'},
					{value: '6',label: '6'},
					{value: '7',label: '7'},
					{value: '8',label: '8'},
					{value: '9',label: '9'},
					{value: '10',label: '10'},
				],
				
				showRegionSelect: false,
				regionList: [
					{
						value: 1,
						label: '中国',
						children: [
							{
								value: 2,
								label: '广东',
								children: [
									{
										value: 3,
										label: '深圳'
									},
									{
										value: 4,
										label: '广州'
									}
								]
							},
							{
								value: 5,
								label: '广西',
								children: [
									{
										value: 6,
										label: '南宁'
									},
									{
										value: 7,
										label: '桂林'
									}
								]
							}
						]
					},
					{
						value: 8,
						label: '美国',
						children: [
							{
								value: 9,
								label: '纽约',
								children: [
									{
										value: 10,
										label: '皇后街区'
									}
								]
							}
						]
					}
				]
			};
		},
		onReady() {
			//微信浏览器环境下隐藏导航
			this.common.hidePageNavInWechatBrowser();
		},
		onShow(){
			this.setDefaultTime();
		},
		onLoad() {
			let that = this;
			uni.$on('crop_img_success', (data)=>{
				console.log('收到crop通讯',data.path);
				that.form.bg_url = data.path;
			});
		},
		onUnload() {
			uni.$off('crop_img_success');
		},
		methods: {
			cropBg(){
				let that = this;
				uni.chooseImage({
					count: 1, // 默认9
					sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'],
					success: function(res) {
						let tempImagePath = res.tempFilePaths[0];
						uni.navigateTo({
							url: '/pages/crop/crop?tempFilePath=' + tempImagePath
						})
					}
				});
			},
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
								if(type == 'desc_img'){
									if(that.form.desc_img.length >= 10){
										that.globalUtil.utilAlert('最少上传10张图片')
										return false;
									}
									
									that.form.desc_img.push(res1.tempFilePath);
								}else if(type == 'share_url'){
									that.form.share_url = res1.tempFilePath;
								}else if(type == 'prize_img'){
									if(that.form.prize_img.length >= 10){
										that.globalUtil.utilAlert('最少上传10张图片')
										return false;
									}
									
									that.form.prize_img.push(res1.tempFilePath);
								}
							}
						})
						
					}
				});
			},
			deleteImg(type,path){
				let that = this;
				if(type == 'desc_img'){
					let desc_img = that.form.desc_img;
					 
					for(var i=0;i<desc_img.length;i++){
						if(desc_img[i] == path){
							desc_img.splice(i,1);
							break;
						}
					}
					that.form.desc_img = desc_img;
				}
				
				if(type == 'prize_img'){
					let prize_img = that.form.prize_img;
					 
					for(var i=0;i<prize_img.length;i++){
						if(prize_img[i] == path){
							prize_img.splice(i,1);
							break;
						}
					}
					that.form.prize_img = prize_img;
				}
			},
			checkParam(curr){
				// 检查必填项
				if(curr == 0){
					if(this.form.bg_url == ''){
						this.globalUtil.utilAlert('请上传投票封面图片');
						return false;
					}
					
					if(this.form.title == ''){
						this.globalUtil.utilAlert('请输入投票主题');
						return false;
					}
					
					if(this.form.desc == ''){
						this.globalUtil.utilAlert('请输入投票介绍');
						return false;
					}
					
				}else if(curr == 1){
					// 是否开放报名
					if(this.form.is_open == true){
						if(this.form.enroll_start_timestamp >= this.form.enroll_end_timestamp){
							this.globalUtil.utilAlert('报名结束时间要大于开始时间');
							return false;
						}
						
						if(this.form.enroll_end_timestamp >= this.form.vote_end_timestamp){
							this.globalUtil.utilAlert('报名结束时间不得大于投票结束时间');
							return false;
						}
					}
					
					if(this.form.is_sponsor == true){
						if(this.form.sponsor_name == '' || this.form.sponsor_name == ' '){
							this.globalUtil.utilAlert('请输入主办方名称');
							return false;
						}
						
						var myreg=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;
						if (!myreg.test(this.form.sponsor_mobile)) {
							this.globalUtil.utilAlert('请输入正确电话');
							return false;
						}
					}
					
					
				}else if(curr == 2){
					// 暂无
				}else if(curr == 3){
					// 暂无
				}
				
				return true;
			},
			toNext(){
				let curr = this.current;
				
				if(curr == 3){
					this.globalUtil.utilAlert('这就是最后一步');
					return false;
				}
				
				let res = this.checkParam(curr);
				
				if(res === false){
					return false;
				}
				
				curr++;
				this.current = curr >= 3 ? 3 : curr;
			},
			toLast(){
				let curr = this.current;
				
				if(curr == 0){
					this.globalUtil.utilAlert('这就是第一步');
					return false;
				}
				curr--;
				this.current = curr <= 0 ? 0 : curr;
			},
			setDefaultTime(){
				let now = parseInt((new Date().getTime() / 1000));
				now += 30*60;
				let now_time = this.$u.timeFormat(now, 'yyyy-mm-dd hh:MM');
				
				if(this.form.enroll_start_time == ''){
					this.form.enroll_start_time = now_time;
					this.form.enroll_start_timestamp = now;
				}
				
				let f_time = now + 5*86400;
				let f_date = this.$u.timeFormat(f_time, 'yyyy-mm-dd hh:MM');
				if(this.form.enroll_end_time == ''){
					this.form.enroll_end_time = f_date
					this.form.enroll_end_timestamp = f_time;
				}
				
				if(this.form.vote_start_time == ''){
					this.form.vote_start_time = f_date
					this.form.vote_start_timestamp = f_time;
				}
				
				let t_time = now + 20*86400;
				let t_date = this.$u.timeFormat(t_time, 'yyyy-mm-dd hh:MM');
				
				if(this.form.vote_end_time == ''){
					this.form.vote_end_time = t_date
					this.form.vote_end_timestamp = t_time;
				}
			},
			// 选择是否开放报名
			isOpenChange(e){
				if(e == true){
					this.setDefaultTime();
				}
			},
			// 打开时间选择器
			openTimePicker(type){
				console.log('type',type);
				this.thisTimeType = type;
				this.thisDefaultTime = this.form[type];
				console.log(this.thisDefaultTime)
				
				this.showTimePicker = true;
			},
			confirmTimePicke(e){
				console.log('confirmTimePicke',e);
				
				let t = e.year + "-" + e.month + "-" + e.day + " " + e.hour + ":" + e.minute;
				let t1 = e.timestamp;
				if(this.thisTimeType == 'enroll_start_time'){
					this.form.enroll_start_time = t
					this.form.enroll_start_timestamp = t1;
				}
				
				if(this.thisTimeType == 'enroll_end_time'){
					this.form.enroll_end_time = t
					this.form.enroll_end_timestamp = t1;
				}
				
				if(this.thisTimeType == 'vote_start_time'){
					this.form.vote_start_time = t
					this.form.vote_start_timestamp = t1;
				}
				
				if(this.thisTimeType == 'vote_end_time'){
					this.form.vote_end_time = t
					this.form.vote_end_timestamp = t1;
				}
			},
			openNumberList(type){
				console.log('type',type);
				
				this.thisNumberType = type;
				this.showNumberSelect = true;
			},
			confirmNumberSelect(e){
				this.form[this.thisNumberType] = e[0].value;
			},
			openRegionPicker(){
				this.showRegionSelect = true;
			},
			confirmRegionSelect(e){
				console.log('confirmRegionSelect',e);
				
				this.form.region = e[0].label + ',' + e[1].label + ',' + e[2].label;
				this.form.region_id = e[0].value + ',' + e[1].value + ',' + e[2].value;
			},
			submit(){
				
			},
			getOpacity(){
				return this.current == 0 ? 0.3 : '';
			},
			previewImg(url){
				uni.previewImage({
					urls: [url],
					longPressActions: {
						itemList: ['发送给朋友', '保存图片', '收藏'],
					}
				});
			},
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		.steps{
			padding:50rpx 30rpx;
		}
		
		.bg-box{
			position: relative;
			.upload-bg{
				display: inline-block;
				border: 1px dashed #f96770;
				border-radius: 30rpx;
				padding: 10rpx;
				font-size: 25rpx;
				
				position: absolute;
				top: 20rpx;
				right: 20rpx;
			}
		}
		.form-item{
			padding: 30rpx;
			
			.title-text,.desc-text{
				padding: 20rpx 0;
			}
			
			.desc-text{
				display: flex;
				justify-content: space-between;
			}
		}
		
		.page-bottom{
			position:fixed;
			bottom: 15rpx;
			left: 0;
			right: 0;
			z-index: 95;
			display: flex;
			justify-content: space-between;
			align-items: flex-end;
		}
		
		.content{
			padding-bottom: 120rpx;
		}
		
		.content-1{
			.form-item{
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
		}
		
		.btn-left{
			border: 1px solid #f96770;
			color: #f96770;
			text-align: center;
			height: 80rpx;
			line-height: 80rpx;
			border-radius: 50rpx;
			flex: 1;
			margin: 5rpx 20rpx;
		}
		.btn-right{
			color: #fff;
			background-image: linear-gradient(#f96770, #fc587d);
			text-align: center;
			height: 80rpx;
			line-height: 80rpx;
			border-radius: 50rpx;
			flex: 1;
			margin: 5rpx 20rpx;
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
	}
</style>

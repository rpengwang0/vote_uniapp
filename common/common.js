module.exports = {	
	//判断是否微信浏览器
	isWechat() {
			return String(navigator.userAgent.toLowerCase().match(/MicroMessenger/i)) === "micromessenger";
	},
	hidePageNavInWechatBrowser(){
		if(this.isWechat()){
			let pageNav = document.getElementsByTagName("uni-page-head");
			    if (pageNav && pageNav[0]) {
			      pageNav[0].style.display = "none";
			    }
		}
	}
}

function utilAlert(msg, iconType) {
    uni.showToast({
        title: msg == null ? "" : msg,
        icon: "none",
        duration: 1500
    });
    return;
};

function utilLoading(tip,mask){
    uni.showLoading({
        title: tip?tip:'加载中',
        mask:mask?mask:false
    });

    setTimeout(function (){
         uni.hideLoading();
    },10000)
};
//  ['vuex_userInfo', 'vuex_token','vuex_deviceMode','vuex_loginParam'];
function clearVuex(that){
	console.log("清除缓存");
	that.$u.vuex('vuex_userInfo',{});
	that.$u.vuex('vuex_token','');
	that.$u.vuex('vuex_loginParam','');
	uni.clearStorageSync();
}
function clearStorageVuex(that){
	utilAlert("清除成功");
}

function toLogin(){
	// 保存当前页面
	let pages = getCurrentPages();
	let res = false;
	let delta = '';
	
	if (pages.length) {
	  let currentPage = pages[pages.length - 1];
	  
	  let options = currentPage.options;
	  let options_keys = Object.keys(options);
	  let q = '';
	  
	  if(options_keys.length){
			q += '?';
			options_keys.map((value)=>{
				q += value + "=" + options[value] + "&"
			})
	  }
	  
	  let nowroute = currentPage.route;
	  res = "pages/index/login" != nowroute;
	  delta = nowroute + encodeURIComponent(q);
	  
	  //console.log('跳转前页面1',delta);
	}
	
	if(res == true){
		// 跳转授权页面
		return	uni.navigateTo({
		  url: "/pages/index/login?delta=/" + (delta || 'pages/index/index')
		});
	}
}

function checkIsLogin(that){
	let token = that.vuex_token;
	
	if(token == '' || token == null || token == undefined){
		return false;
	}
	return true;
}

//字节转换
function byteConvert(bytes) {
      //console.log("字节量"+bytes);
      if (isNaN(bytes)) {
        return '';
      }
      var symbols = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
      var exp = Math.floor(Math.log(bytes)/Math.log(2));
      if (exp < 1) {
        exp = 0;
      }
      var i = Math.floor(exp / 10);
      bytes = bytes / Math.pow(2, 10 * i);
      if (bytes.toString().length > bytes.toFixed(2).toString().length) {
        bytes = bytes.toFixed(2);
      }
      return bytes + ' ' + symbols[i];
}

// 复制方法
function copy(content, display = true){
	// 复制内容，必须字符串，数字需要转换为字符串
	content = typeof content === 'string' ? content : content.toString();
	//#ifndef H5
	uni.setClipboardData({
		data: content,
		success: function() {
			display ? utilAlert(`复制成功 ${content}`) : utilAlert('复制成功');
		},
		fail:function(){
			utilAlert('复制失败');
		}
	});
	//#endif
	// #ifdef H5
	if (!document.queryCommandSupported('copy')) {
		utilAlert('浏览器不支持');
	}
	let textarea = document.createElement("textarea")
	textarea.value = content
	textarea.readOnly = "readOnly"
	document.body.appendChild(textarea)
	textarea.select() // 选择对象
	textarea.setSelectionRange(0, content.length) //核心
	let result = document.execCommand("copy") // 执行浏览器复制命令
	if(result){
		display ? utilAlert(`复制成功 ${content}`) : utilAlert('复制成功');
	}else{
		utilAlert('复制失败');
	}	
	textarea.remove()
	// #endif
}

function uploadFile(obj,that){
	console.log("上传文件的参数", obj);
	let uploadUrl = obj.uploadUrl;
	let filePath = obj.filePath;
	let isSuccess = false;
	let sizeError = 0;
	if (uploadUrl && filePath) {
		let msg = {};
		const uploadTask = uni.uploadFile({
			url: uploadUrl,
			filePath: filePath,
			name: 'fileName',
			header: {
				'Access-Control-Allow-Origin': '*',
				'TOKEN_OA': that.vuex_token,
			},
			success: (uploadFileRes) => {
				if (uploadFileRes.statusCode == 200 && uploadFileRes.data.length > 0) {
					let resObj = JSON.parse(uploadFileRes.data);
					if (resObj.code == 200) {
						let _url = that.$u.api.multipartAddress.getFileByPath + resObj.data;
						 msg.url = _url;
						 let suffix = resObj.data.substring(resObj.data.lastIndexOf('.') + 1, resObj.data.length);
						 msg.fileSuffix = suffix;
						 msg.fileName = resObj.data;
						 isSuccess = true;
						 let result= Object.assign(msg,obj);
						 console.log("图片上传结果",result);
						return result;
					} else {
						return null;
					}
				} else {
					return null;
				}
			},
			fail: function() {
				uni.hideLoading();
				return null;
			}
		});
		uploadTask.onProgressUpdate((res) => {
			if (res.totalBytesExpectedToSend > 314572800) {
				sizeError = 1;
				uploadTask.abort();
				utilAlert("文件大小不能超过300M");
				return null;
			} else {
				msg.fileSize =byteConvert(res.totalBytesExpectedToSend);
			}
		});
	} else {
		return null;
	}
}

module.exports = {
	utilAlert: function (msg, iconType) {
		return utilAlert(msg, iconType);
	},
	utilLoading:function (tip,mask){
	    return utilLoading(tip, mask);
	},
	clearVuex:function(that){
		return clearVuex(that);
	},
	clearStorageVuex:function(that){
		return clearStorageVuex(that);
	},
	
	byteConvert:function(bytes){
		return byteConvert(bytes);
	},
	uploadFile: function(obj,that){
		uploadFile(obj,that);
	},
	toLogin: function(){
		toLogin();
	},
	checkIsLogin: function(that){
		return checkIsLogin(that);
	},
	copy:function(content, display = true){
		copy(content, display);
	}
}	

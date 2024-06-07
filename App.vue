<script>

	export default {
		globalData:{
			'h5appid':'wxa54929ee62568723',
			"REDIRECT_URI":"https://h6.guomei.work/pages/index/login",
			"url":"https://h6.guomei.work/"
			//"REDIRECT_URI":"http://192.168.101.31:8080/pages/index/login/",
		},
		onLaunch: function() {
			//console.log('================App Launch=================');
			let id = "";
			
			this.$u.vuex('vuex_deviceMode', id);
		},
		onShow: function(option) {
			
		},
		onHide: function() {
			console.log('App Hide')
		},
		onLoad:function(option){
			
		},
		created() {
			
		},
	}
</script>

<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "uview-ui/index.scss";
</style>

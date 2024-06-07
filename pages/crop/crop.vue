<template>
    <view>
        
        <gmy-img-cropper
            ref="gmyImgCropper"
            :quality="1"
            cropperType="ratio"
			:ratio="2.3/1"
            fileType="jpg"
            :imgSrc="imgSrc"
            @getImg="getImg"
        ></gmy-img-cropper>
    </view>
</template>

<script>
    import gmyImgCropper from '@/components/gmy-img-cropper/gmy-img-cropper.vue'
    export default {
        components:{
            gmyImgCropper
        },
        data() {
            return {
				imgSrc: '',
            }
        },
		onLoad(option) {
			this.imgSrc = option.tempFilePath;
			
			this.$refs.gmyImgCropper.setImageSrc(this.imgSrc);
			this.$refs.gmyImgCropper.loadImage();
		},
        methods: {
            // 点击完成时，返回截取图片的临时路径
            getImg:function(e){
                console.log(e);
				let that = this;
				uni.navigateBack({
					delta:1,
					success:function(r){
						that.imgCropperShow = false;
						uni.$emit('crop_img_success',{path: e});
					}
				})
                
            },
        }
    }
</script>

<style lang="scss">
</style>
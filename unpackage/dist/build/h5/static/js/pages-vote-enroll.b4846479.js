(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-vote-enroll"],{"4d24":function(e,t,i){var a=i("b714");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("31338cd6",a,!0,{sourceMap:!1,shadowMode:!1})},5117:function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return a}));var a={uInput:i("efa0").default,uGap:i("0bdc").default,uIcon:i("cd19").default,uImage:i("14e6").default},n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"form-item"},[i("v-uni-view",{staticClass:"title-text"},[e._v("参赛名称")]),i("v-uni-view",{staticClass:"title-input"},[i("u-input",{attrs:{placeholder:"请输入参赛名称",maxlength:"20"},model:{value:e.form.user_name,callback:function(t){e.$set(e.form,"user_name",t)},expression:"form.user_name"}})],1)],1),i("u-gap",{attrs:{height:"1","bg-color":"#eee"}}),i("v-uni-view",{staticClass:"form-item"},[i("v-uni-view",{staticClass:"desc-text"},[i("v-uni-view",[e._v("参赛介绍")]),i("v-uni-view",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chooseImg("user_img")}}},[i("u-icon",{attrs:{name:"photo-fill",color:"#f96770",size:"32"}}),i("span",{staticStyle:{"padding-left":"10rpx"}},[e._v("参赛图片")])],1)],1),i("v-uni-view",{staticClass:"desc-input"},[i("u-input",{attrs:{type:"textarea",placeholder:"请输入参赛介绍",maxlength:"1024","custom-style":e.customStyle},model:{value:e.form.user_desc,callback:function(t){e.$set(e.form,"user_desc",t)},expression:"form.user_desc"}})],1)],1),i("v-uni-view",{staticClass:"img-list flex-center"},e._l(e.form.user_img,(function(t,a){return i("v-uni-view",{key:a,staticClass:"p-20 position-r img-item"},[i("v-uni-view",{staticClass:"position-a",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.deleteImg("user_img",t)}}},[i("u-icon",{attrs:{name:"close-circle-fill",color:"#f96770",size:"50"}})],1),i("u-image",{attrs:{src:t,width:"170",height:"170","border-radius":"5",mode:"aspectFit"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.previewImg(t)}}})],1)})),1),i("u-gap",{attrs:{height:"30","bg-color":"#eee"}}),i("v-uni-view",{staticClass:"form-item form-item-line"},[i("v-uni-view",[e._v("自定义分享图片")]),i("v-uni-view",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chooseImg("user_share_img")}}},[i("u-image",{attrs:{src:e.form.user_share_img,width:"100",height:"100","border-radius":"5",shape:"aspectFill"}})],1)],1),i("u-gap",{attrs:{height:"150","bg-color":"#eee"}}),i("v-uni-view",{staticClass:"page-bottom"},[i("v-uni-view",{staticClass:"btn-right",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submit()}}},[i("v-uni-text",[e._v("立即报名")])],1)],1)],1)},r=[]},"54e2":function(e,t,i){"use strict";var a=i("4d24"),n=i.n(a);n.a},"8b5d":function(e,t,i){"use strict";i("a434"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{id:0,form:{user_name:"",user_desc:"",user_img:[],user_share_img:""}}},onReady:function(){this.common.hidePageNavInWechatBrowser()},onShow:function(){},onLoad:function(e){this.id=e.id||0},onUnload:function(){},methods:{chooseImg:function(e){var t=this;uni.chooseImage({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:function(i){var a=i.tempFilePaths[0];uni.compressImage({src:a,quality:80,success:function(i){if("user_share_img"==e)t.form.user_share_img=i.tempFilePath;else if("user_img"==e){if(t.form.user_img.length>=10)return t.globalUtil.utilAlert("最少上传10张图片"),!1;t.form.user_img.push(i.tempFilePath)}}})}})},deleteImg:function(e,t){var i=this;if("user_img"==e){for(var a=i.form.user_img,n=0;n<a.length;n++)if(a[n]==t){a.splice(n,1);break}i.form.user_img=a}},previewImg:function(e){uni.previewImage({urls:[e],longPressActions:{itemList:["发送给朋友","保存图片","收藏"]}})},checkParam:function(){return""==this.form.user_name?(that.globalUtil.utilAlert("请输入参赛名称"),!1):""!=this.form.user_desc||(that.globalUtil.utilAlert("请输入参赛介绍"),!1)},submit:function(){var e=this.checkParam();if(0==e)return!1;console.log("开始报名")}}};t.default=a},b714:function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.container[data-v-6c2cfd0a]{background-color:#eee;height:100vh}.container .form-item[data-v-6c2cfd0a]{padding:%?30?%;background-color:#fff}.container .form-item .title-text[data-v-6c2cfd0a], .container .form-item .desc-text[data-v-6c2cfd0a]{padding:%?20?% 0}.container .form-item .desc-text[data-v-6c2cfd0a]{display:flex;justify-content:space-between}.container .form-item-line[data-v-6c2cfd0a]{display:flex;justify-content:space-between;align-items:center}.container .flex-center[data-v-6c2cfd0a]{display:flex;align-content:center;justify-content:flex-start;flex-wrap:wrap}.container .img-list[data-v-6c2cfd0a]{background-color:#fff;padding:%?20?%}.container .img-list .img-item[data-v-6c2cfd0a]{border-radius:%?15?%;border:1px solid #eee;margin:%?10?%}.container .img-list .p-20[data-v-6c2cfd0a]{padding:%?20?%}.container .img-list .p-t-20[data-v-6c2cfd0a]{padding-top:%?20?%}.container .img-list .p-b-20[data-v-6c2cfd0a]{padding-bottom:%?20?%}.container .img-list .position-r[data-v-6c2cfd0a]{position:relative}.container .img-list .position-a[data-v-6c2cfd0a]{position:absolute;right:%?-20?%;top:%?-20?%}.container .page-bottom[data-v-6c2cfd0a]{position:fixed;bottom:0;left:0;right:0;z-index:95}.container .page-bottom .btn-right[data-v-6c2cfd0a]{color:#fff;background-image:linear-gradient(#f96770,#fc587d);text-align:center;height:%?80?%;line-height:%?80?%;border-radius:%?50?%;flex:1;margin:%?30?% %?50?%}',""]),e.exports=t},f21a:function(e,t,i){"use strict";i.r(t);var a=i("8b5d"),n=i.n(a);for(var r in a)"default"!==r&&function(e){i.d(t,e,(function(){return a[e]}))}(r);t["default"]=n.a},fcf0:function(e,t,i){"use strict";i.r(t);var a=i("5117"),n=i("f21a");for(var r in n)"default"!==r&&function(e){i.d(t,e,(function(){return n[e]}))}(r);i("54e2");var s,c=i("f0c5"),o=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"6c2cfd0a",null,!1,a["a"],s);t["default"]=o.exports}}]);
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/gmy-img-cropper/gmy-img-cropper"],{

/***/ 269:
/*!***************************************************************************************!*\
  !*** C:/Users/Admin/Desktop/vote/vote/components/gmy-img-cropper/gmy-img-cropper.vue ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gmy_img_cropper_vue_vue_type_template_id_da8a03d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gmy-img-cropper.vue?vue&type=template&id=da8a03d0& */ 270);
/* harmony import */ var _gmy_img_cropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gmy-img-cropper.vue?vue&type=script&lang=js& */ 272);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _gmy_img_cropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _gmy_img_cropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _gmy_img_cropper_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gmy-img-cropper.vue?vue&type=style&index=0&lang=css& */ 274);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs





/* normalize component */

var component = Object(_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _gmy_img_cropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _gmy_img_cropper_vue_vue_type_template_id_da8a03d0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _gmy_img_cropper_vue_vue_type_template_id_da8a03d0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _gmy_img_cropper_vue_vue_type_template_id_da8a03d0___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/gmy-img-cropper/gmy-img-cropper.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 270:
/*!**********************************************************************************************************************!*\
  !*** C:/Users/Admin/Desktop/vote/vote/components/gmy-img-cropper/gmy-img-cropper.vue?vue&type=template&id=da8a03d0& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gmy_img_cropper_vue_vue_type_template_id_da8a03d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./gmy-img-cropper.vue?vue&type=template&id=da8a03d0& */ 271);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gmy_img_cropper_vue_vue_type_template_id_da8a03d0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gmy_img_cropper_vue_vue_type_template_id_da8a03d0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gmy_img_cropper_vue_vue_type_template_id_da8a03d0___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gmy_img_cropper_vue_vue_type_template_id_da8a03d0___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 271:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Admin/Desktop/vote/vote/components/gmy-img-cropper/gmy-img-cropper.vue?vue&type=template&id=da8a03d0& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 272:
/*!****************************************************************************************************************!*\
  !*** C:/Users/Admin/Desktop/vote/vote/components/gmy-img-cropper/gmy-img-cropper.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gmy_img_cropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./gmy-img-cropper.vue?vue&type=script&lang=js& */ 273);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gmy_img_cropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gmy_img_cropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gmy_img_cropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gmy_img_cropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gmy_img_cropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 273:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Admin/Desktop/vote/vote/components/gmy-img-cropper/gmy-img-cropper.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var sysInfo = uni.getSystemInfoSync();
var SCREEN_WIDTH = sysInfo.screenWidth;
var SCREEN_HEIGHT = sysInfo.windowHeight + 40;
var PAGE_X, // 手按下的x位置
PAGE_Y, // 手按下y的位置
PR = sysInfo.pixelRatio, // dpi
T_PAGE_X, // 手移动的时候x的位置
T_PAGE_Y, // 手移动的时候Y的位置
CUT_L, // 初始化拖拽元素的left值
CUT_T, // 初始化拖拽元素的top值
CUT_R, // 初始化拖拽元素的
CUT_B, // 初始化拖拽元素的
CUT_W, // 初始化拖拽元素的宽度
CUT_H, //  初始化拖拽元素的高度
IMG_RATIO, // 图片比例
IMG_REAL_W, // 图片实际的宽度
IMG_REAL_H, // 图片实际的高度
DRAFG_MOVE_RATIO = 1, //移动时候的比例,
INIT_DRAG_POSITION = 100, // 初始化屏幕宽度和裁剪区域的宽度之差，用于设置初始化裁剪的宽度
DRAW_IMAGE_W = sysInfo.screenWidth; // 设置生成的图片宽度
var _default = {
  /**
                  * 页面的初始数据
                  */
  data: function data() {
    return {
      imageSrc: "",
      isShow: false,
      isShowImg: false,
      // 初始化的宽高
      cropperInitW: SCREEN_WIDTH,
      cropperInitH: SCREEN_HEIGHT,
      // 动态的宽高
      cropperW: SCREEN_WIDTH,
      cropperH: SCREEN_HEIGHT - 100,
      // 动态的left top值
      cropperL: 0,
      cropperT: 0,
      transL: 0,
      transT: 0,
      // 图片缩放值
      scaleP: 0,
      imageW: 0,
      imageH: 0,
      // 裁剪框 宽高
      cutL: 0,
      cutT: 0,
      cutB: SCREEN_WIDTH,
      cutR: "100%",
      qualityWidth: DRAW_IMAGE_W,
      innerAspectRadio: DRAFG_MOVE_RATIO };

  },
  props: {
    /* 截图质量，压缩比  */
    quality: {
      type: Number | String,
      default: 1 },


    /*
                     * 传入图片路径，将跳过选择图片步骤直接进入截图界面。
                     * 需要特别注意：H5端 Canvas 内绘制的图像需要支持跨域访问才能成功。
                     */
    imgSrc: {
      type: String,
      default: '' },


    /* 输出图片类型：仅支持png格式或jpg格式  */
    fileType: {
      type: String,
      default: "png",
      validator: function validator(t) {
        // 这个值必须匹配下列字符串中的一个
        return t === "png" || t === "jpg";
      } },


    /* 截取类型，自由截取free;固定比例截取（正方形）fixed  */
    cropperType: {
      type: String,
      default: "free",
      validator: function validator(t) {
        // 这个值必须匹配下列字符串中的一个
        return t === "free" || t === "fixed" || t === "ratio";
      } },

    ratio: {
      type: Number,
      default: 1 } },


  created: function created() {
    if (this.imgSrc && this.imageSrc.length > 1) {
      this.imageSrc = this.imgSrc;
      this.loadImage();
      this.isShow = true;
      this.isShowImg = true;
    }
  },
  methods: {
    setData: function setData(obj) {
      var that = this;
      Object.keys(obj).forEach(function (key) {
        that.$set(that.$data, key, obj[key]);
      });
    },
    setImageSrc: function setImageSrc(imgSrc) {
      this.imageSrc = imgSrc;
      this.loadImage();
      this.isShow = true;
      this.isShowImg = true;
    },
    /* 选择图片  */
    chooseImage: function chooseImage() {
      var _this = this;
      uni.chooseImage({
        success: function success(res) {
          _this.setData({
            imageSrc: res.tempFilePaths[0] });

          _this.loadImage();
          _this.isShow = true;
        } });

    },
    /* 将图片加载到画布  */
    loadImage: function loadImage() {
      var _this = this;
      uni.showLoading({
        title: "图片加载中..." });


      /* 获取图片信息  */
      uni.getImageInfo({
        src: _this.imageSrc,
        success: function success(res) {
          var imgH = res.height;
          var imgW = res.width;

          // let IMG_SCR_H_R = SCREEN_HEIGHT / imgH;
          // let IMG_SCR_W_R = SCREEN_WIDTH / imgW;

          /* 图片的宽高比  */
          IMG_RATIO = imgW / imgH;

          /**
                                    * 如果图片更高一些，为确保图片能够完整在视窗内显示需如下处理
                                    * 1. 缩放图片的高为 视窗高度减去底部菜单按钮高度（120）
                                    * 2. 根据图片缩放后的高度，根据图片宽高比计算图片的宽度
                                    * 3. 如果步骤2计算的图片宽度大于屏幕宽度，则需要再次调整图片宽度为视窗宽度-margin(10)
                                    * 4. 根据步骤3的宽度，结合图片宽高比重新计算图片的高度
                                    */
          if (IMG_RATIO < 1 && (SCREEN_HEIGHT - 120) * IMG_RATIO < SCREEN_WIDTH - 10) {
            IMG_REAL_W = (SCREEN_HEIGHT - 120) * IMG_RATIO;
            IMG_REAL_H = SCREEN_HEIGHT - 120;
          } else {
            IMG_REAL_W = SCREEN_WIDTH - 10;
            IMG_REAL_H = IMG_REAL_W / IMG_RATIO;
          }

          /* 初始化裁剪区域的位置和形状  */var _this$initCutArea =
          _this.initCutArea(IMG_RATIO, IMG_REAL_H, IMG_REAL_W),_this$initCutArea2 = _slicedToArray(_this$initCutArea, 4),cutT = _this$initCutArea2[0],cutB = _this$initCutArea2[1],cutL = _this$initCutArea2[2],cutR = _this$initCutArea2[3];

          _this.setData({
            /* 裁剪区域的宽高同图片尺寸  */
            cropperW: IMG_REAL_W,
            cropperH: IMG_REAL_H,

            /* 上下左右各留一定的margin已便更好的拖动裁剪区域  */
            cropperL: Math.ceil((SCREEN_WIDTH - IMG_REAL_W) / 2),

            /* 留出底部操作按钮位置 70  */
            cropperT: Math.ceil((SCREEN_HEIGHT - IMG_REAL_H - 90) / 2),
            cutL: cutL,
            cutT: cutT,
            cutR: cutR,
            cutB: cutB,
            // 图片缩放值
            imageW: IMG_REAL_W,
            imageH: IMG_REAL_H,
            scaleP: IMG_REAL_W / SCREEN_WIDTH,
            qualityWidth: DRAW_IMAGE_W,
            innerAspectRadio: IMG_RATIO });

          _this.setData({
            isShowImg: true });

          uni.hideLoading();
        } });

    },

    initCutArea: function initCutArea(IMG_RATIO, IMG_REAL_H, IMG_REAL_W) {
      var _this = this;
      /* 自由裁剪裁剪区域默认覆盖整个图片  */
      var cutT = 0;
      var cutB = 0;
      var cutL = 0;
      var cutR = 0;

      /* 正方形裁剪，初始化裁剪区域为正方形并居中  */
      if (_this.cropperType == "fixed") {
        if (IMG_RATIO < 1) {
          /* 图片比较高  */
          cutT = (IMG_REAL_H - IMG_REAL_W) / 2;
          cutB = (IMG_REAL_H - IMG_REAL_W) / 2;
        } else {
          /* 图片比较宽  */
          cutL = (IMG_REAL_W - IMG_REAL_H) / 2;
          cutR = (IMG_REAL_W - IMG_REAL_H) / 2;
        }
      }

      /* 固定比例裁剪，初始化裁剪区域比例和设定值相同  */
      if (_this.cropperType == "ratio") {
        var ratio = +_this.ratio;
        if (IMG_RATIO < 1) {
          /* 图片比较高  */
          if (IMG_REAL_W / ratio > IMG_REAL_H) {
            cutT = cutB = 0;
            cutL = cutR = (IMG_REAL_W - IMG_REAL_H * ratio) / 2;
          } else {
            cutR = cutL = 0;
            cutT = cutB = (IMG_REAL_H - IMG_REAL_W / ratio) / 2;
          }
        } else {
          /* 图片比较宽  */
          if (IMG_REAL_H * ratio > IMG_REAL_W) {
            cutL = cutR = 0;
            cutB = cutT = (IMG_REAL_H - IMG_REAL_W / ratio) / 2;
          } else {
            cutT = cutB = 0;
            cutL = cutR = (IMG_REAL_W - IMG_REAL_H * ratio) / 2;
          }
        }
      }

      return [cutT, cutB, cutL, cutR];
    },
    // 拖动时候触发的touchStart事件
    contentStartMove: function contentStartMove(e) {
      PAGE_X = e.touches[0].pageX;
      PAGE_Y = e.touches[0].pageY;
    },
    // 拖动时候触发的touchMove事件
    contentMoveing: function contentMoveing(e) {
      var _this = this;
      var dragLengthX = (PAGE_X - e.touches[0].pageX) * DRAFG_MOVE_RATIO;
      var dragLengthY = (PAGE_Y - e.touches[0].pageY) * DRAFG_MOVE_RATIO;
      // 左移
      if (dragLengthX > 0) {
        if (this.cutL - dragLengthX < 0) dragLengthX = this.cutL;
      } else {
        if (this.cutR + dragLengthX < 0) dragLengthX = -this.cutR;
      }
      if (dragLengthY > 0) {
        if (this.cutT - dragLengthY < 0) dragLengthY = this.cutT;
      } else {
        if (this.cutB + dragLengthY < 0) dragLengthY = -this.cutB;
      }
      this.setData({
        cutL: this.cutL - dragLengthX,
        cutT: this.cutT - dragLengthY,
        cutR: this.cutR + dragLengthX,
        cutB: this.cutB + dragLengthY });

      PAGE_X = e.touches[0].pageX;
      PAGE_Y = e.touches[0].pageY;
    },
    contentTouchEnd: function contentTouchEnd() {},

    // 获取图片尺寸信息
    previewImg: function previewImg() {var _this2 = this;
      try {
        var _this = this;
        uni.showLoading({
          title: "图片生成中..." });

        // 将图片写入画布
        var ctx = uni.createCanvasContext("myCanvas", _this);
        ctx.drawImage(_this.imageSrc, 0, 0, IMG_REAL_W, IMG_REAL_H);
        ctx.draw(true, function () {
          // 获取画布要裁剪的位置和宽度   均为百分比 * 画布中图片的宽度    保证了在微信小程序中裁剪的图片模糊  位置不对的问题 canvasT = (_this.cutT / _this.cropperH) * (_this.imageH / pixelRatio)
          var canvasW = (_this.cropperW - _this.cutL - _this.cutR) / _this.cropperW * IMG_REAL_W;
          var canvasH = (_this.cropperH - _this.cutT - _this.cutB) / _this.cropperH * IMG_REAL_H;
          var canvasL = _this.cutL / _this.cropperW * IMG_REAL_W;
          var canvasT = _this.cutT / _this.cropperH * IMG_REAL_H;
          uni.canvasToTempFilePath(
          {
            x: canvasL,
            y: canvasT,
            width: canvasW,
            height: canvasH,
            // destWidth: canvasW,
            // destHeight: canvasH,
            quality: +_this2.quality,
            fileType: _this2.fileType,
            canvasId: "myCanvas",
            success: function success(res) {
              uni.hideLoading();
              // 成功获得地址的地方
              uni.previewImage({
                current: "", // 当前显示图片的http链接
                urls: [res.tempFilePath] // 需要预览的图片http链接列表
              });
            },
            fail: function fail(err) {
              uni.hideLoading();
              uni.showToast({
                title: "图片截取失败！",
                icon: "none" });

            } },

          _this);

        });
      } catch (e) {}
    },

    /* 完成裁剪，输出裁剪后的图片路径  */
    finish: function finish() {var _this3 = this;
      var _this = this;
      uni.showLoading({
        title: "图片生成中..." });

      // 将图片写入画布
      var ctx = uni.createCanvasContext("myCanvas", _this);
      ctx.drawImage(_this.imageSrc, 0, 0, IMG_REAL_W, IMG_REAL_H);
      ctx.draw(true, function () {
        // 获取画布要裁剪的位置和宽度   均为百分比 * 画布中图片的宽度    保证了在微信小程序中裁剪的图片模糊  位置不对的问题 canvasT = (_this.cutT / _this.cropperH) * (_this.imageH / pixelRatio)
        var canvasW = (_this.cropperW - _this.cutL - _this.cutR) / _this.cropperW * IMG_REAL_W;
        var canvasH = (_this.cropperH - _this.cutT - _this.cutB) / _this.cropperH * IMG_REAL_H;
        var canvasL = _this.cutL / _this.cropperW * IMG_REAL_W;
        var canvasT = _this.cutT / _this.cropperH * IMG_REAL_H;
        uni.canvasToTempFilePath(
        {
          x: canvasL,
          y: canvasT,
          width: canvasW,
          height: canvasH,
          // destWidth: canvasW,
          // destHeight: canvasH,
          quality: +_this3.quality,
          fileType: _this3.fileType,
          canvasId: "myCanvas",
          success: function success(res) {
            uni.hideLoading();
            // 成功获得地址的地方
            _this.$emit("getImg", res.tempFilePath);
            _this.isShow = false;
          },
          fail: function fail(err) {
            uni.hideLoading();
            uni.showToast({
              title: "图片截取失败！",
              icon: "none" });

          } },

        _this);

      });
    },

    // 设置大小的时候触发的touchStart事件
    dragStart: function dragStart(e) {
      T_PAGE_X = e.touches[0].pageX;
      T_PAGE_Y = e.touches[0].pageY;
      CUT_L = this.cutL;
      CUT_R = this.cutR;
      CUT_B = this.cutB;
      CUT_T = this.cutT;
    },

    // 设置大小的时候触发的touchMove事件
    dragMove: function dragMove(e) {
      // this.cropperType == "fixed" ? this.fixedScaleDrag(e) : this.freeDrag(e);
      this[this.cropperType + "Drag"](e);
    },

    /* 固定比例（正方形）截取 ，只有右下角裁剪滑动拖动有效*/
    fixedDrag: function fixedDrag(e) {
      var _this = this;
      var dragType = e.target.dataset.drag;
      switch (dragType) {
        case "rightBottom":
          var dragLengthX = (T_PAGE_X - e.touches[0].pageX) * DRAFG_MOVE_RATIO;
          // var dragLengthY = (T_PAGE_Y - e.touches[0].pageY) * DRAFG_MOVE_RATIO;
          // if (CUT_B + dragLengthY < 0) dragLengthY = -CUT_B;

          if (CUT_R + dragLengthX < 0) dragLengthX = -CUT_R;

          /* 右侧和底部同比变化 */
          var cutB = CUT_B + dragLengthX;
          var cutR = CUT_R + dragLengthX;

          /* 越界判断  */
          if (_this.cutB == 0 && cutB < 0) return;
          if (_this.cutR == 0 && cutR < 0) return;

          (_this.cutB > 0 || CUT_B == 0) &&
          this.setData({
            cutB: cutB < 0 ? 0 : cutB,
            cutR: cutR });

          break;
        default:
          break;}

    },

    /* 等比例截图，只能通过右下角的滑块改变截图区域  */
    ratioDrag: function ratioDrag(e) {
      var _this = this;
      var dragType = e.target.dataset.drag;
      switch (dragType) {
        case "rightBottom":
          var dragLengthX = (T_PAGE_X - e.touches[0].pageX) * DRAFG_MOVE_RATIO;
          // var dragLengthY = (T_PAGE_Y - e.touches[0].pageY) * DRAFG_MOVE_RATIO;
          // if (CUT_B + dragLengthY < 0) dragLengthY = -CUT_B;

          if (CUT_R + dragLengthX < 0) dragLengthX = -CUT_R;

          /* 右侧和底部同比变化 */
          var cutB = CUT_B + dragLengthX / _this.ratio;
          var cutR = CUT_R + dragLengthX;

          /* 越界判断  */
          if (_this.cutB == 0 && cutB < 0) return;
          if (_this.cutR == 0 && cutR < 0) return;

          (_this.cutB > 0 || CUT_B == 0) &&
          this.setData({
            cutB: cutB < 0 ? 0 : cutB,
            cutR: cutR });

          break;
        default:
          break;}

    },

    /* 自由截取,整个裁剪边框均能拖动  */
    freeDrag: function freeDrag(e) {
      var _this = this;
      var dragType = e.target.dataset.drag;
      switch (dragType) {
        case "right":
          var dragLength = (T_PAGE_X - e.touches[0].pageX) * DRAFG_MOVE_RATIO;
          if (CUT_R + dragLength < 0) dragLength = -CUT_R;
          this.setData({
            cutR: CUT_R + dragLength });

          break;
        case "left":
          var dragLength = (T_PAGE_X - e.touches[0].pageX) * DRAFG_MOVE_RATIO;
          if (CUT_L - dragLength < 0) dragLength = CUT_L;
          if (CUT_L - dragLength > this.cropperW - this.cutR)
          dragLength = CUT_L - (this.cropperW - this.cutR);
          this.setData({
            cutL: CUT_L - dragLength });

          break;
        case "top":
          var dragLength = (T_PAGE_Y - e.touches[0].pageY) * DRAFG_MOVE_RATIO;
          if (CUT_T - dragLength < 0) dragLength = CUT_T;
          if (CUT_T - dragLength > this.cropperH - this.cutB)
          dragLength = CUT_T - (this.cropperH - this.cutB);
          this.setData({
            cutT: CUT_T - dragLength });

          break;
        case "bottom":
          var dragLength = (T_PAGE_Y - e.touches[0].pageY) * DRAFG_MOVE_RATIO;
          if (CUT_B + dragLength < 0) dragLength = -CUT_B;
          this.setData({
            cutB: CUT_B + dragLength });

          break;
        case "rightBottom":
          var dragLengthX = (T_PAGE_X - e.touches[0].pageX) * DRAFG_MOVE_RATIO;
          var dragLengthY = (T_PAGE_Y - e.touches[0].pageY) * DRAFG_MOVE_RATIO;
          if (CUT_B + dragLengthY < 0) dragLengthY = -CUT_B;
          if (CUT_R + dragLengthX < 0) dragLengthX = -CUT_R;
          var cutB = CUT_B + dragLengthY;
          var cutR = CUT_R + dragLengthX;
          this.setData({
            cutB: cutB,
            cutR: cutR });

          break;
        default:
          break;}

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 274:
/*!************************************************************************************************************************!*\
  !*** C:/Users/Admin/Desktop/vote/vote/components/gmy-img-cropper/gmy-img-cropper.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gmy_img_cropper_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./gmy-img-cropper.vue?vue&type=style&index=0&lang=css& */ 275);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gmy_img_cropper_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gmy_img_cropper_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gmy_img_cropper_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gmy_img_cropper_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gmy_img_cropper_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 275:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Admin/Desktop/vote/vote/components/gmy-img-cropper/gmy-img-cropper.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-toutiao/components/gmy-img-cropper/gmy-img-cropper.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/gmy-img-cropper/gmy-img-cropper-create-component',
    {
        'components/gmy-img-cropper/gmy-img-cropper-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(269))
        })
    },
    [['components/gmy-img-cropper/gmy-img-cropper-create-component']]
]);

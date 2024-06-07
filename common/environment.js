/*开发环境 */
// 测试网
const dev_home = {
  BASE_API: 'https://tp2.guomei.work/',
  MULTIPART_API: 'https://tp.guomei.work/',
}

/*外网*/
const prod = {
  BASE_API: 'https://tp2.guomei.work',
  MULTIPART_API: 'https://tp2.guomei.work',
}

/*
=================注意根据需要改变环境================
 */
const environment = dev_home;
//const environment = prod;

export default {
  BASE_API: environment.BASE_API,
  MULTIPART_API: environment.MULTIPART_API,
}

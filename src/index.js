//导入vue
import Vue from "vue";

import router from "./router.js"
//导入app组件
import app from './app.vue';
//导入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
import vueResource from 'vue-resource';
//引入vue-resource
Vue.use(vueResource);
//vue使用vue-resource
Vue.http.options.root = 'http://www.liulongbin.top:3005';   
//设置数据根目录
import './css/mui.css';
import './js/mui.js';
import './css/icons-extra.css'
var vm = new Vue({
	el:'#app',
	render:c=>c(app),  //将App组件挂载至vm中
	//挂载路由
	router
})
//全局过滤器
Vue.filter('dataFormat',function (input) {   //定义全局过滤器
	var d = new Date(input);
	var year = d.getFullYear().toString();   //获取年
	var month = (d.getMonth()+1).toString();    //获取月
	var day = d.getDate().toString();    //获取日
	var timer = d.getHours().toString();
	var min = d.getMinutes().toString();
	var sen = d.getSeconds().toString();
	var str =  `
	${year}-${month.padStart(2,'0')}-${day.padStart(2,'0')} ${timer.padStart(2,'0')} :${min.padStart(2,'0')} :${sen.padStart(2,'0')}
	`
	return str;
})
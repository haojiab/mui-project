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
let shopChar = JSON.parse(localStorage.getItem('shopChar')) || [];
import vuex from 'vuex';    //引入vuex
Vue.use(vuex);   //挂载到vue中
var store =new vuex.Store({  //创建vuex的store
	state: {      //存放数据
		num:0,
		shopChar:shopChar       //购物车数据
	},
	mutations: {    //改变数据的方法
		add(state){
			state.num=0;
			state.shopChar.forEach(item => {
				state.num+=item.number
				}
			)
		},
		addChar(state,shopInfo){
			let flag = false;   //默认购物车中没有该商品
			state.shopChar.some(item=>{
				if(item.id == shopInfo.id){
					flag = true;
					return true;
				}
			})
			if (flag) {
				state.shopChar.forEach(item => {
					if(item.id === shopInfo.id){
						item.number +=shopInfo.number
					}
				});
			}else{
				state.shopChar.push(shopInfo);
			}
			localStorage.setItem('shopChar',JSON.stringify(state.shopChar))
		},
		changeSelect(state,info){
			info[1] = 0;
			console.log(info[1])

		},
		removeChar(state,id){
			state.shopChar.forEach((item,index)=>{
				if (parseInt(item.id)==parseInt(id)) {
					state.shopChar.splice(index,1)
				}
			})
			localStorage.setItem('shopChar',JSON.stringify(state.shopChar))
		}
	},
	getters: {       //获取数据的方法
		getnum(state){   
			return state.num
		},
		getlist(state){
			return state.shopChar
		},
		getGoodsCount(state){
			var obj = {};
			state.shopChar.forEach(item=>{
				obj[item.id] = item.number;
			})
			return obj
		},
		allPrice(state){
			let all = 0;
			state.shopChar.forEach(item=>{
				all+= item.price*item.number;
			})
			return all
		}
	}
})
import './css/mui.css';
import './js/mui.js';
import './css/icons-extra.css'
var vm = new Vue({
	el:'#app',
	render:c=>c(app),  //将App组件挂载至vm中
	//挂载路由
	router,
	store  //挂载vuex的store
})
Vue.config.productionTip=false//去除警告?
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
<template>
    <div class="home">
        <swiper :swipList="swipList"></swiper>

	        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <router-link to="/home/supermarket" class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <img  src="../image/menu1.png" alt="">
		                    <div class="mui-media-body">超市</div></a></router-link>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <img src="../image/menu2.png" alt="">
		                    <div class="mui-media-body">海外购</div></a></li>
		            <router-link to="/home/wenzhang" class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <img src="../image/menu3.png" alt="">
		                    <div class="mui-media-body">服饰</div></a></router-link>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <img src="../image/menu4.png" alt="">
		                    <div class="mui-media-body">生鲜</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <img src="../image/menu5.png" alt="">
		                    <div class="mui-media-body">9.9包邮</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <img src="../image/menu6.png" alt="">
		                    <div class="mui-media-body">领劵</div></a></li>
		        
		        </ul> 
		<div class="flag">
		</div>
    </div>
</template>
<script>
import swiper from '../swiper/swiper.vue'
export default {
    data(){
	    return {
		  swipList:[]  
	    }
    },
    methods: {
	    getSwipList(){
            this.$http.get('api/getlunbo').then(result=>{
                if(result.body.status===0){
                    //console.log(result.body.message)
		    this.swipList = result.body.message
		    //console.log(this.swipList)
                }else{
                    console.log("请求失败")
                }
            })
        }
    },
    created () {
	    this.getSwipList()
    },
    components: {
         'swiper':swiper,
    }
}
</script>
<style>
.mint-swipe-items-wrap {
    height: 150px;
}
.mui-table-view-cell img{
    width: 60px;height: 60px;
}
.flag{
	width: 50px;
	height: 43px;
	background: #007aff ;
	position: absolute;
	top: 0px;
	z-index: 11;
}

</style>



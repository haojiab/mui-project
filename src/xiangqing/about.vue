<template>
    <div>
        <header id="header" class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<div class="mui-content">
                <div style="padding: 10px 10px;">
                    <div id="segmentedControl" class="mui-segmented-control">
                        <a class="mui-control-item mui-active" href="#item1">商品</a>
                        <a class="mui-control-item" href="#item2">评价</a>
                        <a class="mui-control-item" href="#item3">详情</a>
                        <a class="mui-control-item" href="#item4">推荐</a>
                    </div>
                </div>
			</div>
		</header>
        <div>
                    <div id="item1" class="mui-control-content mui-active">
                       <div class="mui-card about-in">
				            <div class="mui-card-header">
                                <img v-bind:src="img_url" alt="">
                                <transition
                                        @before-enter="beforeEnter"
                                        @enter="enter"
                                        @after-enter="afterEnter"
                                        
                                    >
                                    <img class="ball" ref="img" v-if="flag"  v-bind:src="img_url" alt="">
                                </transition>
                                
                            </div>
				                <div class="mui-card-content">
					                <div class="mui-card-content-inner">
                                        {{title}}
                                        {{zhaiyao}}
                                        <div class="price">
                                            <span>￥{{market_price}}</span>
                                            <span>￥{{sell_price}}</span>
                                        </div>
					                </div>
				                </div>
				            <div class="mui-card-footer">
                                <div class="xiang">
                                    <p>
                                        已选
                                        <span>1个</span>
                                        <a href="#picture" class="righ mui-btn-outlined">···</a>
                                         
                                    </p>
                                    <p>
                                        送至
                                        <span>山西省临汾市尧都区</span>
                                        <span class="righ">···</span>
                                    </p>
                                    <p>
                                        运费
                                        <span>免运费</span>
                                        <span class="righ">···</span>
                                    </p>
                                </div>
                                <div id="picture" class="mui-popover mui-popover-action mui-popover-bottom">
                                    <ul class="mui-table-view">
                                        <li class="mui-table-view-cell">
                                             <div class="mui-numbox"  data-numbox-min='1' data-numbox-max='999'>
					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					<input id="test" class="mui-input-numbox" type="number" value="1" />
					<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
				</div>
                                        </li>
                                    </ul>
                                    <ul class="mui-table-view">
                                        <li class="mui-table-view-cell">
                                            <a href="#picture"><b>取消</b></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
			            </div>
                    </div>
                    <div id="item2" class="mui-control-content">
                        <div class="mui-card">
				            <div class="mui-card-header">
                                D****c 
                                <span class="star">☆☆☆☆☆</span>
                            </div>
				                <div class="mui-card-content">
					                <div class="mui-card-content-inner">
                                        这次换个地方，物流挺快的，隔天就到了，这个全麦干酪欧包要自己去切开的，味道还挺不错的！
					                </div>
				                </div>
				            <div class="mui-card-footer">
                                <img src="../image/f1.jpg" alt="">
                                <img src="../image/f1.jpg" alt="">
                                <img src="../image/f1.jpg" alt="">
                            </div>
			            </div>
                        <div class="mui-card">
				            <div class="mui-card-header">
                                不****到 
                                <span class="star">☆☆☆☆☆</span>
                            </div>
				                <div class="mui-card-content">
					                <div class="mui-card-content-inner">
                                        首先顺丰真的很给力，隔天就到了，拿到手时顿时感受到盒子的凉意～保鲜做的极好呀～卖家很贴心的送了小礼物，本子上的字也是棒棒的，包装特别好特别卫生，然后我迫不及待的替大家尝了一口，无糖，但是特别美味，满满的幸福感～总之超级大的好评一定会回购，打算尝尝抹茶紫薯，据说也很不错👍
					                </div>
				                </div>
				            <div class="mui-card-footer">
                                <img src="../image/f2.jpg" alt="">
                                <img src="../image/f2.jpg" alt="">
                                <img src="../image/f2.jpg" alt="">
                            </div>
			            </div>
				    </div>
				    <div id="item3" class="mui-control-content">
                        <img class="xi" src="../image/x1.jpg" alt="">
				    </div>
                    <div id="item4" class="mui-control-content">
                        <ul class="mui-table-view mui-grid-view">
		        <li class="mui-table-view-cell mui-media mui-col-xs-6">
		            <router-link to="/home/supermarket/about" href="#">
		                <img class="mui-media-object" src="../image/f1.jpg">
		                <div class="mui-media-body">￥39.9</div></router-link></li>
		        <li class="mui-table-view-cell mui-media mui-col-xs-6">
		            <a href="#">
		                <img class="mui-media-object" src="../image/f2.jpg">
		                <div class="mui-media-body">￥59.9</div></a></li>
		        <li class="mui-table-view-cell mui-media mui-col-xs-6">
		            <a href="#"><img class="mui-media-object" src="../image/f3.jpg">
		                <div class="mui-media-body">￥38.8</div></a></li>
		        <li class="mui-table-view-cell mui-media mui-col-xs-6">
		            <a href="#">
		                <img class="mui-media-object" src="../image/f4.jpg">
		                <div class="mui-media-body">￥29.9</div></a></li>
		    </ul>    
				    </div>
                </div>
            <!-- 底部 -->
            <nav class="mui-bar mui-bar-tab buy">
		            <a class="mui-col-xs-2" href="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">联系客服</div></a>
		            <a class="mui-col-xs-2" href="#">
		                   <span class="mui-icon mui-icon-upload"></span>
		                    <div class="mui-media-body">进店</div></a>
		            <router-link to="/char" class="mui-col-xs-2" id="gouwu" href="#">
		                    <span class="mui-icon-extra mui-icon-extra-cart"></span>
                            <span class="mui-badge items">{{$store.getters.getnum}}</span></span>
		                    <div class="mui-media-body">购物车</div></router-link>
                    <a @click="flag=!flag;addItems()"   href="#" class="mui-col-xs-3">
                        加入购物车
                    </a>
                    <a href="#" class="mui-col-xs-3">
                        立即购买
                    </a>
		    </nav>
    </div>
</template>

<script>
import swiper from '../swiper/swiper.vue';
import mui from '../js/mui.js'
mui(".mui-numbox").numbox
export default {
    data(){
        return {
            id:this.$route.params.id,
            title:this.$route.params.title,
            zhaiyao:this.$route.params.zhaiyao,
            market_price:this.$route.params.market_price,
            sell_price:this.$route.params.sell_price,
            img_url:this.$route.params.img_url,
            swipList:[],
            flag: false,
            goodInfo:{},
            goodsNumber:1
        }
    },
    methods:{
        getGoodsInfo(){
            this.$http.get('api/goods/getinfo/'+this.id).then(result=>{
                if(result.body.status===0){
                    this.goosInfo = result.body;
                    //console.log(this.goodInfo)
                }else{
                    alert("请求失败")
                }
            })
        },
        getGoodsNumber(count){
            this.goodsNumber = count
        },
        getGoodImage(){
            this.$http.get('api/getthumimages/'+this.id).then(result=>{
                if(result.body.status===0){
                    for (var i in result.body.message) {
                        this.swipList[i]={img:result.body.message[i].src}
                    }
                     console.log(this.swipList)
                }else{
                    console.log('失败')
                }
            })
        },
        beforeEnter(el) {
                    // 表示动画入场之前，此时动画还未开始，可以在其中
                    // 设置元素开始动画之前的起始样式
                    // 设置小球开始动画之前的起始位置
                    el.style.transform = 'translate(0,0)';
                },
        enter(el,done) {
                    //没有实际效果，但不可缺少，可以理解为强制动画刷新
                    el.offsetWidth;//offsetHeight、offsetLeft等都可以
                    //表示动画，开始之后的样式，可以设置小球完成动画的结束状态
                    //getBoundingClientRect
                    var imgWei = this.$refs.img.getBoundingClientRect();
                    // 移动图签的起始坐标获取
                    var gouWei = document.getElementById("gouwu").getBoundingClientRect();
                    // 移动图标移动位置终点坐标
                    //var gouHei = document.getElementById("gou").offsetHeight;
                    var x = gouWei.left-imgWei.left;
                    var y = gouWei.top-imgWei.top;
                    //两位置的距离
                    //字符串模板
                    el.style.transform = `translate( ${x}px,${y}px ) scale(0.3)`;
                    el.style.transition = 'all 1s cubic-bezier(0,0,1,1)';
                    
                    // 这里的 done，其实就是 afterEnter 这个函数，
                    // 也就是说：done 是 afterEnter 函数的引用
                    done();
                },
        afterEnter(el) {
                    //表示动画完成之后小球的状态

				    // 使用 flag 标识符，来表示动画的切换；
				    // Vue 把一个完整的动画，使用钩子函数，拆分为了两部分；
				    // 对flag：第一部分 false -> true ;  第二部分 true -> false
				    
				    // 这句话，第一个功能，是控制小球的显示与隐藏
				    // 第二个功能：直接跳过后半场动画，让 flag 标识符直接变为 false
				    // 当第二次再点击按钮的时候，flag = false -> true
                    this.flag = !this.flag;
                    clearTimeout(this.addItems)
                    let shopinfo = {
                        id:this.id,
                        number:this.goodsNumber,
                        price:this.sell_price,
                        seleted:true
                    }
                    this.$store.commit('addChar',shopinfo);
                    console.log(this.$store.getters.getGoodsCount);
                },
                    addItems(){        //延迟执行
                        setTimeout(()=>{
                            this.$store.commit('add')
                        },1000)
                    
                    }

    },
    created(){
        //this.getGoodImage();
        this.getGoodsInfo();
    },
    components: {
         'swiper':swiper,
    },
    

}
</script>

<style scoped>
    .items{
        background: red;
        color: #fff;
    }
    .ball{
        width: 50px;
        height: 50px;
        position: fixed;
        right: 20px;
        z-index: 999;
    }
    .mui-popover{
        left: 0px;
    }
    #item2 .mui-card:nth-child(1){
        margin-top: 70px;
    }
    .mui-action-back{
        touch-action: none;
    }
    #item1 .mui-card{
        margin-top: 70px;
        margin-bottom: 70px;
    }
    .mui-segmented-control{
        border: none;
        touch-action: none;
    }
    .mui-segmented-control .mui-control-item{
        border-left: none;
    }
    .mui-bar{
        height: 50px;
        padding: 0px;
    }
    .mui-bar-nav.mui-bar .mui-icon{
        line-height: 50px;
        margin-left: 5px;
        margin-right: 5px;
    }
    .mui-card-header > img:first-child{
        width: 100%;
        height: 100%;
    }
    .price span:nth-child(1){
        color: #999;
        text-decoration: line-through;
    }
    .price span:nth-child(2){
        color: red;
        font-weight:900; 
        font-size: 18px;
    }
    .xiang{
        width: 100%;
    }
    .xiang span{
        color:#000;
    }
    .righ{
        float: right;
        font-weight: bolder;
    }
    .mui-card-footer img{
        width: 80px;
        height: 80px;
    }
    .star{
        color: yellow;
    }
    .xi{
        width: 100%;
        height: 100%;
        margin-top: 30px;
    }
    .buy{
        position: fixed;
        bottom: 0px;
        z-index: 20;
    }
    .buy a{
        display: inline-block;
        color: #000;
        text-align: center;
        margin: 5px 0px;
    }
    .buy a:nth-child(1) div{
        font-size: 14px;
    }
    .mui-bar .mui-icon{
        padding: 0px;
    }
    .buy a:nth-child(4){
        background: orange;
        color: #fff;
        line-height: 58px;
        position: absolute;
        margin: 0px;
    }
    .buy a:nth-child(5){
        background: red;
        color: #fff;
        line-height: 58px;
        position: absolute;
        right: 0px;
        margin: 0px;
    }
    .mui-pull-left{
        margin-top: 10px;
    }
    .mui-table-view.mui-grid-view{
        margin-top: 70px;
    }
</style>

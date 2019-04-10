<template>
    <div>
        <!-- <header id="header" class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">购物车</h1>
		</header> -->
        <div class="mui-card">
			<div class="mui-card-header">
                 <span>
                     <span class="mui-icon mui-icon-location-filled"></span>山西省临汾市 
                 </span>
                 <a href="#" style="color:red">编辑商品</a>
            </div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner" v-for="(item,index) in list">
                    <div class="mui-input-row mui-checkbox mui-left "  >
						<label class="fenge">自营<span @click="removeList(item.id,index)" style="float:right;color:blue">删除</span></label>
						<!-- <input checked = "false" name="checkbox" value="Item 1" type="checkbox" > -->
                        <div style="font-size:13px;margin-top:10px;">
                            <span style="margin-left:15px;" class="mui-badge mui-badge-danger">优惠</span>
                            已购满一件，享受满30-25优惠 
                        </div>
                        <div class="mui-input-row mui-checkbox mui-left">
                            <label>
                                <ul class="mui-table-view">
				                    <li class="mui-table-view-cell mui-media">
					                    <a href="javascript:;">
						                    <img class="mui-media-object mui-pull-left" :src="item.thumb_path">
						                    <div class="mui-media-body">
                                                {{
                                                    item.title
                                                }}
                                                    <span class="ding">购买数量：</span>
				                                    <div class="mui-numbox"  data-numbox-min='1' data-numbox-max='999'>
					<button class="mui-btn mui-btn-numbox-minus" type="button" @click="">-</button>
					<input id="test" class="mui-input-numbox" type="number" :value="$store.getters.getGoodsCount[item.id]" />
					<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
				</div>
                                                
						                    </div>
					                    </a>
				                    </li>
                                </ul>
                                <p class="price"> <span style="color:#000">单价:</span> {{item.sell_price}}</p>
                            </label>
						    <input  @click="onChange(item.id,$store.getters.getGoodsCount[item.id])" checked class="onee" name="checkbox" value="Item 1" type="checkbox" >  
                        </div>
					</div>
                      
				</div>
			</div>
		</div>
         <nav class="mui-bar mui-bar-tab buy">
		            <a class="mui-col-xs-4" href="#">
                        <div class="mui-input-row mui-checkbox mui-left">
						<label>全选</label>
						<input checked name="checkbox" value="Item 1" type="checkbox" >
					</div>
                    </a>
                    <a href="#" class="mui-col-xs-4">
                       <strong>总计：</strong><span style="color:red">{{$store.getters.allPrice}}</span><br/>
                       <span style="color:#999;font-size:13px">总额50，立减34.5</span>
                    </a>
                    <a href="#" class="mui-col-xs-4">
                        去结算
                    </a>
		    </nav>
    </div>
</template>
<script>
import mui from '../js/mui.js';
mui(".mui-numbox").numbox()
export default {
    data () {
        return {
            info:this.$store.getters.getlist,
            list:[]
        }
    },
    methods: {
        getId(){                  //将购物车中的产品id拼接为字符串
            let idArr = [];
            let str = ''
            this.$store.state.shopChar.forEach((element,index)=>{
                idArr[index] = element.id;
            })
            str=idArr.join(',')
             this.$http.get('api/goods/getshopcarlist/'+str).then(result=>{
                if(result.body.status===0){
                    this.list = result.body.message;
                    console.log(this.list)
                }else{
                    alert("请求失败")
                }
            })
        },
        onChange(id,number){
            //alert()
            this.$store.commit('changeSelect',[id,number])
        },
        removeList(id,index){
            this.list.splice(index,1)   //删除购物车页面的列表
            this.$store.commit('removeChar',id)   //删除购物车仓库的列表(数据)
        }
       
    },
    created () {
        this.getId();
    }
}
</script>
<style scoped>
    .price{
        float:right;
        color:red;
        margin-right: 30px;

    }
    .fenge{
        border: #ccc 1px solid;
        height: 40px;

       
    }
    .mui-card{
        margin-bottom: 70px;
    }
    .mui-card-content-inner{
        padding: 0px;
    }
    .mui-card-header:after, .mui-card-footer:before{
        background-color: #fff
    }
    .ding{
        position: absolute;
        left: 0px;
        top: 50px;
        color: red;
        font-size: 18px;
        line-height: 54px;
    }
    .onee{
    margin-top: 30px;
    }
    .mui-input-row .mui-numbox{
        margin-top: 20px;
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
    
    .buy a:nth-child(3){
        background: red;
        color: #fff;
        line-height: 60px;
        position: absolute;
        right: 0px;
        margin: 0px;
    }
    .mui-pull-left{
        margin-top: 10px;
    }
</style>

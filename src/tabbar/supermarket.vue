<template>
    <div>
		<header id="header" class="mui-bar mui-bar-nav headd">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">超市</h1>
		</header>
        <ul class="mui-table-view mui-grid-view">
		        <li class="mui-table-view-cell mui-media mui-col-xs-6"  v-for="item in marlist"  @click="getId(item.id,item.title,item.zhaiyao,item.market_price,item.sell_price,item.img_url)">
		            <router-link to="" href="#">
		                <img class="mui-media-object" v-bind:src="item.img_url">
		                <div class="mui-media-body">
							<p style="color:#000">{{item.title}}</p>
							<p>
								<span style="text-decoration: line-through;">{{item.market_price}}</span>
								<span style="color:red;">{{item.sell_price}}</span>
							</p>
						</div>
					</router-link>
				</li>		
		</ul>   
		<button class="jiaz mui-btn mui-btn-block mui-btn-danger" @click="getMore()">加载更多</button>
    </div>
</template>
<script>
export default {
    data(){
		return{
			marlist:[],
			pageindex:1,
		}
	},
	methods:{
		get(){
            this.$http.get('api/getgoods?pageindex='+this.pageindex).then(
                result=>{
                    if(result.body.status==0){
                         this.marlist=this.marlist.concat(result.body.message);
                    }else{
                        console.log("失败");
                    }
                }
            )
		},
		getMore(){
			this.pageindex++;
			this.get();
		},
		getId(id,title,zhaiyao,market_price,sell_price,img_url){
			this.$router.push({
				//path: `/home/supermarket/about/${id}`,
					name:'about',
					params:{
						id:id,
						title:title,
						zhaiyao:zhaiyao,
						market_price:market_price,
						sell_price,sell_price,
						img_url:img_url
					}
			})
		}
	},
	created () {
		this.get()
	}
}
</script>
<style scoped lang="scss">
.headd{
	position: fixed;
	top: 0%;
	z-index: 60;
	background: red;
	a{
		color: #fff;
		touch-action: none;
	}
	h1{
		color: #fff;
	}
}
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
	height: 35px;
}
.mui-table-view.mui-grid-view .mui-table-view-cell{
	box-shadow: 0 0 20px #999;
	margin: 5px;
	width: 47%;
}
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-object{
	width: 80%;
}
.mui-table-view.mui-grid-view{
	padding: 0px 10px 10px 10px;
}
.mui-media-body p{
	padding-right: 15px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.jiaz{
	margin-bottom: 70px;
}
</style>



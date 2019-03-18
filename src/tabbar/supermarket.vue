<template>
    <div>
        <ul class="mui-table-view mui-grid-view">
		        <li class="mui-table-view-cell mui-media mui-col-xs-6"  v-for="item in marlist">
		            <router-link v-bind:marid="11223" to="/home/supermarket/about" href="#">
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
		}
	},
	created () {
		this.get()
	}
}
</script>
<style scoped>
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



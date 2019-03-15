<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="(item,index) in this.newsList">
					<router-link :to="'/home/wenzhang/wenzhanginfo/'+item.id">
						<img class="mui-media-object mui-pull-left" v-bind:src='item.img_url'>
						<div class="mui-media-body">
							{{item.title}}
							<p class='mui-ellipsis'>
                                时间:{{item.add_time | dataFormat()}}
                                点击数:{{item.click}}
                            </p>
						</div>
				    </router-link>
		        </li>
		</ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            newsList:[],
        }
    },
    created(){
        this.getNewList();
    },
    methods:{
        getNewList(){
            //请求数据
            this.$http.get('api/getnewsList').then(result =>{
                if(result.body.status ===0){
                    this.newsList = result.body.message;
                    console.log()
                }else{
                    //alert('无响应')
                }
            })
        }
    },


}
</script>

<style>

</style>

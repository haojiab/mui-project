<template>
    <div class="main">
        <textarea v-model="contents"  placeholder="写点什么..." maxlength="150"></textarea>
        <button class="mui-btn mui-btn-block mui-btn-primary" @click="posst()">提交</button>
        <hr/>
        <div class="mui-card"  v-for="(item,index) in commentList">
				            <div class="mui-card-header">
                                第{{index+1}}楼 
                                <span class="star">{{item.user_name}}</span>
                            </div>
				                <div class="mui-card-content">
					                <div class="mui-card-content-inner">
                                        {{item.content=='undefined'||""?"该用户很懒...":item.content}}
					                </div>
				                </div>
				            <div class="mui-card-footer">
                                {{item.add_time|dataFormat()}}
                            </div>
			            </div>
        <button class="mui-btn mui-btn-block mui-btn-danger" @click="getMore()">查看更多</button>
    </div>
</template>
<script>
export default {
    props:["newsid"],
    data(){
        return {
        newid:this.newsid,
        pageindex:1,
        commentList:[],
        contents:""
        }
    },
    methods:{
        get(){
            this.$http.get("api/getcomments/"+this.newid+"?pageindex="+this.pageindex).then(
                result=>{
                    if(result.body.status==0){
                         this.commentList=this.commentList.concat(result.body.message);
 
                    }else{
                        console.log("失败");
                    }
                }
            )
        },
        posst(){
            this.$http.post("api/postcomment/"+this.newid,{content:this.contents,url:"api/postcomment/"+this.newid},).then(
                 result=>{
                    if(result.body.status==0){
                        var obj = {
                            "add_time":new Date(),
                            "content":this.contents,
                            "user_name":"匿名用户"
                        };
                        this.commentList.unshift(obj);
                         this.contents="";
                         //this.get();
                         //this.$router.go(0);
 
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
    created:function(){
        this.get();
        
    },

}
</script>
<style lang="scss" scoped>
ul{margin: 0;padding: 0;}
li{
    margin: 20px 0px;
    background: #edecf2 ;
    list-style: none;
    border-radius: 5px;
    padding: 5px;
    color: dimgray;
     p:nth-of-type(1){
       span{
            display: inline-block;
            margin-right: 10px;
       }
       span:nth-of-type(3){
          float: right;
       }
    }
    p:nth-of-type(2){
        border-radius: 5px;
        border: 1px solid silver;
        padding: 3px;
    }
}
</style>


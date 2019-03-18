<template>
    <div class="info">
        <h3>{{newsInfo.title}}</h3>
        <div v-html="newsInfo.content">

        </div>
        <!-- 评论 -->
        <comment :newsid='id'></comment>
    </div>
</template>

<script>
import comment from '../comment/comment.vue';
export default {
    data(){
        return {
            id:this.$route.params.id,
            newsInfo:{}
        }
    },
    created(){
        this.getNewsInfo()
    },
    methods:{
        getNewsInfo(){
            this.$http.get('api/getnew/'+this.id).then(result =>{
                if(result.body.status ===0){
                    this.newsInfo = result.body.message[0];
                }else{
                    //alert('无响应')
                }
            })
        }
    },
    components: {
         'comment':comment,
    }
    
}
</script>

<style lang="scss" scoped>
    .info{
        padding: 30px;
        background: #fff;
        margin-bottom: 50px;
    }
    .info>h3{
        font-weight: 500;
        font-size: 18px;
        margin: 0px 0px 30px;
        text-align: center;
    }
    .info>div>p{
        text-indent: 2em!important;
    }
</style>

<template>
    <div>
        这是文章内容
        {{id}}
        <h3>{{newsInfo.title}}</h3>
        <div v-html="newsInfo.content">

        </div>
    </div>
</template>

<script>
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
    }
}
</script>

<style lang="scss" scoped>

</style>

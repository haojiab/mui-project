<template>
	<div class="bod">
		<!-- 头部  header -->
		<header id="header" class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<!-- <h1 class="mui-title">导航栏</h1> -->
		</header>

		<!-- 中间内容部分 -->
		<router-view></router-view>
		<!-- tabbar  底部导航 -->
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item mui-active" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">用户</span>
			</router-link>
			<router-link class="mui-tab-item" to="/char">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge">{{$store.getters.getnum}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
	</div>
</template>
<script type="text/javascript">
export default {
	mounted () {
		this.$store.commit('add')
	}
}
</script>
<style type="text/css" lang="scss" scoped>
	img{
		height: 300px;
	}
	.bod{
		margin-top: 40px;
		
	}
	.mint-header.is-fixed{
		background: red;
		color: blue;
	}
	.mui-bar-nav{
		background: #007aff!important;
		a{
			color: #fff;
			touch-action: none;
		}
	}
	.mui-bar-tab .mui-tab-item{
		touch-action: none;
	}
</style>
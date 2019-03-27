<template>
    <mt-swipe :auto="4000" :showIndicators="false">
		<mt-swipe-item  v-for="(item,index) in swipList" :key="index">
			<img class="lunbo" :src="item.img" alt="">
		</mt-swipe-item>
	</mt-swipe>
</template>

<script>
export default {
    props: ['swipList']
}
</script>

<style scoped>

.lunbo{
	width: 100%;
	height: 100%;
}
</style>

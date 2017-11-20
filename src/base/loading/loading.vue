<template>
	<div class="loading">
		<img src="./loading.gif" width="24" height="24">
		<p class="desc">{{desc}}</p>
	</div>
</template>

<script>
	export default {
		props:{
			desc:{
				type:String,
				default:'正在加载...'
			}
		}
	}
</script>

<style lang="less">
	.loading{
		width:100%;
		text-align: center;
		.desc{
			line-height: 24px;
			font-size: 12px;
			color:#fff;
		}
	}
</style>
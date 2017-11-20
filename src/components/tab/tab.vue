<template>
	<div class="tab">
		<router-link class="tab-item" tag="div" to="/wellReceived">
			<span class="tab-link">热映</span>
		</router-link>
		<router-link class="tab-item" tag="div" to="/billboard">
			<span class="tab-link">榜单</span>
		</router-link>
		<router-link class="tab-item" tag="div" to="/search">
			<span class="tab-link">搜索</span>
		</router-link>	
	</div>
</template>

<script>
	export default {

	}
</script>

<style scoped lang="less" rel="stylesheet/less">
	.tab{
		display: flex;
		height:50px;
		line-height: 50px;
		font-size:14px;
		.tab-item{
			flex:1;
			text-align: center;
			.tab-link{
				color:#fff;
			}
			&.router-link-active{
				border-bottom:4px solid #ffe366;
				font-weight: 700;
			}
		}
	}
</style>
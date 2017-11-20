<template>
	<ul class="switches">
		<li class="switch-item" v-for="(item,index) in switches" :class="{'active':currentIndex === index}" @click="switchItem(index)">
			<span>{{item.name}}</span>	
		</li>
	</ul>
</template>

<script>
	export default {
		props:{
			switches:{
				type:Array,
				default:[]
			},
			currentIndex:{
				type:Number,
				default:0
			}
		},
		methods:{
			switchItem(index) {
		        this.$emit('switch', index)
		    }
		}
	}
</script>

<style lang="less" rel="stylesheet/less">
	.switches{
		display: flex;
		align-items:center;
		width:280px;
		margin: 0 auto;
		border:1px solid #222;
		border-radius:5px;
		.switch-item{
			flex:1;
			padding:8px;
			text-align: center;
			font-size: 14px;
			color:#aaa;
			&.active{
				background:#e11;
				color:#fff;
			}
		}
	}
</style>
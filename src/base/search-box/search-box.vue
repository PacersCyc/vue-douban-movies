<template>
	<div class="search-box">
		<i class="icon-search"></i>
		<input ref="query" class="box" v-model="query" :placeholder="placeholder"></input>
		<i class="icon-bin" v-show="query" @click="clear"></i>
	</div>
</template>

<script>
	import {debounce} from 'common/js/util'

	export default {
		props:{
			placeholder:{
				type:String,
				default:'搜索电影、类型'
			}
		},
		data(){
			return {
				query:''
			}
		},
		created(){
			this.$watch('query', debounce((newQuery)=>{
				this.$emit('query', newQuery)
			},200))
		},
		methods:{
			clear(){
				this.query = ''
			},
			setQuery(query) {
	        	this.query = query
	      	},
			blur(){
				this.$refs.query.blur()
			}
		}
	}
</script>

<style lang="less" rel="stylesheet/less">
	.search-box{
		display: flex;
		align-items:center;
		box-sizing: border-box;
		width:100%;
		padding:0 6px;
		height:40px;
		border:1px solid #ccc;
		border-radius: 6px;
		.icon-search{
			font-size: 24px;
			color:#aaa;
		}
		.box{
			flex:1;
			margin:0 5px;
			line-height:20px;
			font-size: 16px;
			&::placeholder{
				color:#333;
			}
		}
		.icon-bin{
			font-size: 16px;
			color:#aaa;
		}
	}
</style>
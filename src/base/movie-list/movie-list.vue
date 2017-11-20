<template>
	<div class="movie-list">
		<ul>
			<li class="movie-item" v-for="(item,index) in movies" @click="selectItem(item)">
				<div class="rank">
					<span class="text">{{index+1}}</span>
				</div>				
				<div class="img-w">
					<img :src="item.images.small" width="100">
				</div>
				<div class="info">
					<h2 class="title">{{item.title}}</h2>
					<div class="score-w">
						<span class="score" v-text="getScore(item)"></span>
					</div>
					<p class="directors">导演：<span v-text="getDirectors(item)"></span></p>
					<p class="actors">主演：<span v-text="getActors(item)"></span></p>
				</div>
			</li>
		</ul>
		<div class="loading-w" v-show="!movies.length">
			<loading></loading>
		</div>
	</div>
</template>

<script>
	import Loading from 'base/loading/loading'

	export default {
		props:{
			movies:{
				type:Array,
				default:[]
			}
		},
		methods:{
			selectItem(item){
				this.$emit('select', item)
			},
			getScore(item){
				return item.rating.average?this._correctScore(item.rating.average):'暂无评分'
			},			
			getDirectors(item){
				let ret = ''
				item.directors.forEach((p)=>{
					ret = ret+' / '+p.name
				})
				ret = ret.slice(3)
				return ret
			},
			getActors(item){
				let ret = ''
				item.casts.forEach((p)=>{
					ret = ret+' / '+p.name
				})
				ret = ret.slice(3)
				return ret
			},
			_correctScore(num){
				return Math.floor(num) === num?num+'.0':num
			},
		},
		components:{
			Loading
		}
	}
</script>

<style lang="less" rel="stylesheet/less">
	.movie-list{
		width:100%;
		margin-top:10px;
		.movie-item{
			display: flex;
			align-items:flex-start;
			padding:8px;
			.rank{
				flex:0 0 30px;
				width:30px;
				text-align: center
			}
			.img-w{
				flex:0 0 100px;
				width: 100px;
			}
			.info{
				flex:1;
				margin-left:10px;
				font-size: 10px;
				color:#666;
				.title{
					font-weight: bold;
					color:#000;
				}
				.score-w{
					padding:8px 0;
				}
				.directors{
					margin-bottom:4px;
				}
			}
		}
	}
</style>
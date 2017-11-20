<template>
	<div class="well-received">
		<div class="theaters-w">
			<div class="theaters-header">
				<span class="title">影院热映</span>
				<span class="count" v-text="`全部${theaters.length}`"></span>
			</div>
			<ul class="theaters-list">
				<li class="theaters-item" v-for="item in showTheaters" @click="selectItem(item)">
					<img :src="item.images.small" width="80" height="120">
					<h2 class="title">{{item.title}}</h2>
					<div class="score-w">
						<span class="score" v-text="getScore(item)"></span>
					</div>				
				</li>
			</ul>
			<div class="loading-w" v-show="!showTheaters.length">
				<loading></loading>
			</div>
		</div>
		<div class="comingSoonMovies-w">
			<h1 class="title">院线即将上映</h1>
			<span class="more">查看全部</span>
			<ul class="comingSoonMovies-list">
				<li class="comingSoonMovies-item" v-for="item in comingSoonMovies" @click="selectItem(item)">
					<div class="img-w">
						<img :src="item.images.small" width="100">
					</div>
					<div class="info">
						<h1 class="titleName">{{item.title}}</h1>
						<div class="directors" v-show="item.directors.length">
							导演：<span v-text="getDirectors(item)"></span>
						</div>
						<div class="actors" v-show="item.casts.length">
							主演：<span v-text="getActors(item)"></span>
						</div>
					</div>
				</li>
			</ul>
			<div class="loading-w" v-show="!comingSoonMovies.length">
				<loading></loading>
			</div>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	import Scroll from 'base/scroll/scroll'
	import Loading from 'base/loading/loading'
	import {getHotMovies, getComingSoonMovies} from 'api/well-received'
	import {getMovieSubject, getMovieCelebrity, getMoviePhotos} from 'api/movie-detail'

	export default {
		data(){
			return {
				theaters:[],
				showTheaters:[],
				comingSoonMovies:[]
			}
		},
		created(){
			this._getHotMovies()
			this._getComingSoonMovies()
			//console.log(this.$router,this.$route)
		},
		methods:{
			getScore(item){
				return item.rating.average?this._correctScore(item.rating.average):'暂无评分'
			},
			_correctScore(num){
				return Math.floor(num) === num?num+'.0':num
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
			selectItem(item){
				this.$router.push({
					path:`/wellReceived/${item.id}`
				})
			},
			_getHotMovies(){
				getHotMovies().then((res)=>{
					this.theaters = res.subjects
					//console.log(this.theaters)
					this.showTheaters = this.theaters.slice(0,10)
					//console.log(this.showTheaters)
				})
			},
			_getComingSoonMovies(){
				getComingSoonMovies().then((res)=>{
					this.comingSoonMovies = res.subjects
					//console.log(this.comingSoonMovies)
				})
			}
		},
		components:{
			Scroll,
			Loading
		}
	}
</script>

<style scoped lang="less" rel="stylesheet/less">
	.well-received{
		position: fixed;
		width:100%;
		top:50px;
		bottom:0;
		overflow:auto;
		.theaters-w{
			border-bottom: 1px solid #ddd;
			.theaters-header{
				position: relative;
				padding:6px 0;
				.title{
					margin-left:12px;
				}
				.count{
					position: absolute;
					right:12px;
					top:10px;
					font-size: 10px;
					color:#bbb;
				}
			}
			.theaters-list{
				display: flex;
				align-items:center;
				width:100%;
				overflow:auto;
				.theaters-item{
					width:80px;
					padding:12px;
					.title{
						margin-top:4px;
						overflow: hidden;
						text-overflow:ellipsis;
						white-space: nowrap;
					}
					.score-w{
						margin-top:4px;
						.score{
							font-size: 12px;
							color:#aaa;
						}
					}					
				}
			}
		}
		.comingSoonMovies-w{
			position: relative;
			.title{
				height:40px;
				line-height: 40px;
				border-bottom:1px solid #ddd;
				text-align: center;
			}
			.more{
				position: absolute;
				right:10px;
				top:14px;
				font-size: 10px;
				color:#bbb;
			}
			.comingSoonMovies-list{
				overflow: auto;
				.comingSoonMovies-item{
					display: flex;
					align-items:flex-start;
					padding:12px;
					.img-w{
						flex:0 0 100px;
						width:100px;
					}
					.info{
						flex:1;
						padding:0 12px;
						font-size: 10px;
						color:#333;
						.titleName{
							font-size: 18px;
							font-weight: bold;
						}
						.directors{
							margin-top:8px;
							font-size: 12px;
						}
						.actors{
							margin-top:4px;
						}
					}
				}
			}
		}
	}
</style>
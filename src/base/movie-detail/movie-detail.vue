<template>
	<transition name="slide">
		<div class="movie-detail">
			<div class="back" @click="back">
				<i class="icon-arrow-left"></i>
			</div>
			<div class="img-w">
				<img v-lazy="subject.images.medium" width="150" v-if="subject.images">
			</div>
			<div class="content">
				<div class="info">
					<h1 class="title">{{subject.title}}</h1>
					<p class="desc">
						<span v-text="getYearAndGenres"></span>
					</p>
					<p class="desc" v-if="subject.original_title">
						原名：{{subject.original_title}}
					</p>
					<p class="desc">
						国家：<span v-text="geCountries"></span>		
					</p>
				</div>
				<div class="rating">
					<span>豆瓣评分</span>
					<span class="score" v-text="getScore"></span>
					<span class="count">{{subject.ratings_count}}人</span>
				</div>
			</div>
			<div class="summary">
				<h3 class="title">简介</h3>
				<p class="desc">{{subject.summary}}</p>
			</div>
			<div class="producers">
				<h3 class="title">影人</h3>
				<ul class="producers-list">
					<li class="producer-item" v-for="(item, index) in producers" v-if="producers.length">
						<img :src="item.avatars.small" width="80">
						<div class="name">{{item.name}}</div>
						<div class="role" v-text="getRole(index)"></div>
					</li>
				</ul>
			</div>
		</div>
	</transition>	
</template>

<script>
	export default {
		props:{
			subject:{
				type:Object,
				default:{}
			},
			producers:{
				type:Array,
				default:[]
			},
			directors:{
				type:Array,
				default:[]
			}
		},
		computed:{
			getYearAndGenres(){
				let ret = this.subject.year
				this.subject.genres.forEach((item)=>{
					ret += ' / '+item
				})
				return ret
			},
			geCountries(){
				let ret = ''
				this.subject.countries.forEach((item)=>{
					ret += ' / '+item
				})
				ret = ret.slice(3)
				return ret
			},
			getScore(){
				return this.subject.rating.average?this.correctScore(this.subject.rating.average):'暂无评分'
			},
			
		},
		methods:{
			back(){
				this.$router.back()
			},
			correctScore(num){
				return Math.floor(num) === num?num+'.0':num
			},
			getRole(index){
				return index<this.directors.length?'导演':'主演'
			}
		}
	}
</script>

<style lang="less" rel="stylesheet">
	.movie-detail{
		position: fixed;
		top:0;
		bottom:0;
		left:0;
		right: 0;
		overflow:auto;
		background: #eee;
		transform:translate3d(0,0,0);
		&.slide-enter-active,&.slide-leave-active{
			transition:all .4s;
		}
		&.slide-enter,&.slide-leave-to{
			transform:translate3d(-100%,0,0);
		}
		.back{
			position: absolute;
			z-index:100;
			top:12px;
			left:8px;
			padding:10px;
			.icon-arrow-left{
				font-size: 16px;
				color:#222;
			}
		}
		.img-w{
			position: relative;
			height:60%;
			background:rgb(0,100,280);
			img{
				position: absolute;
				top:60%;
				left:50%;
				transform:translate3d(-50%,-50%,0);
			}
		}
		.content{
			display: flex;
			align-items:flex-start;
			justify-content:space-around;
			padding:12px 8px;
			border-bottom: 1px solid #ccc;
				.info{
					font-size: 10px;
					color:#222;
					.title{
						margin-bottom:16px;
						font-size: 24px;
						color:#000;
						font-weight: bold;
					}
					.desc{
						margin-top:4px;
					}
				}
				.rating{
					display: flex;
					flex-direction:column;
					text-align: center;
					padding:10px 12px;
					background:#fff;
					font-size: 10px;
					color:#666;
					.score{
						margin-top:6px;
						font-size: 20px;
						color:#000;
						font-weight: bold;
					}
					.count{
						margin-top:8px;
						color:#333;
					}
				}
		}
		.summary{
			padding:10px 12px;
			.title{
				margin-bottom:20px;
				font-size: 12px;
				color:#666;
			}
			.desc{
				font-size: 14px;
				color:#000;
				overflow:hidden;
				//text-overflow:ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 3;
				-webkit-box-orient: vertical;
			}
		}
		.producers{
			padding: 10px 12px;
			.title{
				margin-bottom:20px;
				font-size: 12px;
				color:#666;
			}
			.producers-list{
				display: flex;
				align-items:center;
				width:100%;
				overflow: auto;
				.producer-item{
					flex:1;
					margin-right:10px;
					text-align: center;
					.name{
						margin-top:8px;
						font-size: 14px;
						color:#333;
					}
					.role{
						margin-top:4px;
						font-size: 10px;
						color:#999;
					}
				}
			}
		}
	}
</style>
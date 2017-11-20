<template>
	<div class="billboard">
		<div class="switches-w">
			<switches :switches="switches" :currentIndex="currentIndex" @switch="toggleList"></switches>
		</div>
		<div class="top250" v-if="currentIndex === 0">
			<movie-list :movies="top250" @select="select"></movie-list>
		</div>
		<div class="USBox" v-if="currentIndex === 1">
			<movie-list :movies="USBox" @select="select"></movie-list>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	import Switches from 'base/switches/switches' 
	import MovieList from 'base/movie-list/movie-list'
	import {getTop250, getUSBox} from 'api/billboard'

	export default {
		data(){
			return {
				top250:[],
				USBox:[],
				currentIndex:0,
				switches:[
					{name:'top250'},
					{name:'北美票房榜'}
				]
			}
		},
		created(){
			this._getTop250()
			this._getUSBox()
		},
		methods:{
			select(item){
				this.$router.push({
					path:`/billboard/${item.id}`
				})
			},
			toggleList(index){
				this.currentIndex = index
			},
			_getTop250(){
				getTop250().then((res)=>{
					this.top250 = res.subjects
					console.log(this.top250)
				})
			},
			_getUSBox(){
				getUSBox().then((res)=>{
					this.USBox = res.subjects
					this.USBox = this._correctMovies(this.USBox)
					console.log(this.USBox)
				})
			},
			_correctMovies(movies){
				if(!movies.length){
					return
				}
				let ret = []
				movies.forEach((movie)=>{
					movie.subject && ret.push(movie.subject)
				})
				return ret
			}	
		},
		components:{
			Switches,
			MovieList
		}
	}
</script>

<style lang="less" rel="stylesheet/less">
	.billboard{
		position: fixed;
		top:50px;
		bottom:0;
		left:0;
		right:0;
		width:100%;
		overflow: auto;
		.switches-w{
			margin-top:10px;
		}
	}
</style>
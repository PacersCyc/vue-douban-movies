<template>
	<div class="search">
		<div class="search-box-w">
			<search-box @query="onQueryChange"></search-box>
		</div>
		<div class="search-result" v-show="query">
			<movie-list :movies="result" @select="select"></movie-list>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	import SearchBox from 'base/search-box/search-box'
	import MovieList from 'base/movie-list/movie-list'
	import {getSearchMovies} from 'api/search'

	export default {
		data(){
			return {
				result:[],
				query:''
			}
		},
		methods:{
			select(item){
				this.$router.push({
					path:`/search/${item.id}`
				})
			},
			onQueryChange(query){
				this.query = query
				getSearchMovies(query).then((res)=>{
					this.result = res.subjects
				})
			}
		},
		components:{
			SearchBox,
			MovieList
		}
	}
</script>

<style scoped lang="less" rel="stylesheet/less">
	.search{
		position:fixed;
		top:50px;
		left:0;
		right: 0;
		bottom:0;
		width:100%;
		overflow:auto;
	}
</style>
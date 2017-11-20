<template>
	<div class="theater-list">
		<movie-detail :subject="subject" :producers="producers" :directors="directors" v-if="subject.title && producers.length"></movie-detail>
	</div>
</template>

<script>
	import MovieDetail from 'base/movie-detail/movie-detail'
	import {getMovieSubject, getMovieCelebrity} from 'api/movie-detail'

	export default {
		data(){
			return {
				subject:{},
				id:0,
				producers:[],
				directors:[]
			}
		},
		created(){
			//子路由id
			//console.log(this.$route)
			//console.log(this.$route.params)
			this.id = this.$route.params.id
			this._getMovieDetail(this.id)
		},
		methods:{
			_getMovieDetail(id){
				getMovieSubject(id).then((res)=>{
					this.subject = res
					console.log(this.subject)
					this._getProducers(this.subject)
					console.log(this.producers)
					this._getDirectors(this.subject)
					console.log(this.directors)
				})
			},
			_getProducers(item){
				this.producers = item.directors.concat(item.casts)
			},
			_getDirectors(item){
				item.directors.forEach((director)=>{
					this.directors.push(director.name)
				})
			}
		},
		components:{
			MovieDetail
		}
	}
</script>

<style lang="less" rel="stylesheet/less">
	
</style>
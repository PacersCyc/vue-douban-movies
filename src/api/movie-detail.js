
import jsonp from 'common/js/jsonp'
import axios from 'axios'

export function getMovieSubject(id){
	const url = `https://api.douban.com/v2/movie/subject/${id}`

	return jsonp(url)
}

export function getMovieCelebrity(id){
	const url = `https://api.douban.com/v2/movie/celebrity/${id}`

	return jsonp(url)
}

export function getMoviePhotos(id){
	const url = `https://api.douban.com/v2/movie/subject/${id}/photos`
	/*
	const data = {
		headers:{
			'Access-Control-Allow-Origin':'*'
		}
	}
	*/
	return jsonp(url)
	/*
	return axios.get(url,data).then((res)=>{
		return Promise.resolve(res.data)
	})
	*/
}
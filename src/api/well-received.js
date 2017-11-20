
import jsonp from 'common/js/jsonp'
import axios from 'axios'

export function getHotMovies(){
	//const url = '/api/theaters'
	const url = 'https://api.douban.com/v2/movie/in_theaters'
	/*
	return axios.get(url).then((res)=>{
		return Promise.resolve(res.data)
	})
	*/
	return jsonp(url)
}

export function getComingSoonMovies(){
	const url = 'https://api.douban.com/v2/movie/coming_soon'

	const data = {
		start:0,
		count:20
	}

	return jsonp(url,data)
}
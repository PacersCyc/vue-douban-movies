
import jsonp from 'common/js/jsonp'
import axios from 'axios'

export function getTop250(){
	const url = 'https://api.douban.com/v2/movie/top250'
	const data = {
		start:0,
		count:20
	}
	return jsonp(url,data)
}

export function getUSBox(){
	const url = 'https://api.douban.com/v2/movie/us_box'

	return jsonp(url)
}
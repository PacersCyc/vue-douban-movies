
import jsonp from 'common/js/jsonp'

export function getSearchMovies(query){
	const url = 'https://api.douban.com/v2/movie/search'
	const data = {
		q:query
	}

	return jsonp(url,data)
}
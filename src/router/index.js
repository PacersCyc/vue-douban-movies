import Vue from 'vue'
import Router from 'vue-router'
import WellReceived from 'components/well-received/well-received'
import Billboard from 'components/billboard/billboard'
import Search from 'components/search/search'
import MovieDetail from 'base/movie-detail/movie-detail'
import TheaterList from 'components/theater-list/theater-list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WellReceived',
      component: WellReceived
    },
    {
    	path:'/wellReceived',
    	component:WellReceived,
    	children:[
      	{
	      	path:':id',
	      	component:TheaterList
	      }
      ]
    },
    {
    	path:'/billboard',
    	component:Billboard,
    	children:[
    		{
    			path:':id',
    			component:TheaterList
    		}
    	]
    },
    {
    	path:'/search',
    	component:Search,
    	children:[
      	{
	      	path:':id',
	      	component:TheaterList
	      }
      ]
    }
  ]
})

import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import Schoolhome from '../views/Schoolhome.vue'
import inform from '../views/Inform.vue'
import DownLoadFile from '../views/DownLoadFile.vue'
import showcourse from '../views/ShowCourse.vue'
import myselfpage from '../views/Myselfpage.vue'
import findpassword from '../views/FindPassword.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'LoginView',
		component: LoginView
	},
	{
		path: '/Schoolhome',
		name: 'Schoolhome',
		component: Schoolhome
	},
	{
		path: '/DownLoadFile',
		name: 'DownLoadFile',
		component: DownLoadFile
	},
	{
		path: '/inform',
		name: 'inform',
		component: inform
	},
	{
		path: '/showcourse',
		name: 'showcourse',
		component: showcourse
	},
	{
		path: '/myselfpage',
		name: 'myselfpage',
		component: myselfpage
	},
	{
		path: '/findpassword',
		name: 'findpassword',
		component: findpassword
	}
]
const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

//使用 router.beforeEach 注册一个全局前置守卫：
router.beforeEach((to, from, next) => {
	var userInfo = localStorage.getItem('userinfo')
	if ((to.path != '/' && to.path != '/findpassword') && (userInfo == "" || userInfo == null)) {
		next("/");
	}
	next()
})
export default router

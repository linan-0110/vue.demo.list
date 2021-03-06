import Vue from "vue";
import VueRouter from "vue-router";
import App from '../App.vue'
import login from "../views/login/Login.vue";
import home from "../views/home/Home.vue";

import basicLine from "../views/basicLine/basicLine.vue";
import pie from "../views/pie/pie.vue";
import test from "../views/test/test.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		component: App,
		children: [
			{
				path: '',
				redirect: '/login'
			},
		]
	},
	{
		path: '/login',
		name: 'login',
		component: login
	},
	{
		path: '/home',
		component: home,
		children: [
			{
				path: 'test',
				name: 'test',
				component: test
			},
			{
				path: 'basicLine',
				name: 'basicLine',
				component: basicLine
			},
			{
				path: 'pie',
				name: 'pie',
				component: pie
			},
		]
	},
	{
		path: '*',
		name: '*',
		component: login
	},
];

const router = new VueRouter({
	routes
});

export default router;

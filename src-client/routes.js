import Login from './components/login/Login.vue'

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }


export default [
	{ path: '/login', component: Login },
	{ path: '/foo', component: Foo },
	{ path: '/bar', component: Bar }
]

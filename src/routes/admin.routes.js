import VueRouter from 'vue-router';
import AdminMaster from '../views/admin/layouts/master.vue';
import Dashboard from '../views/admin/modules/dashboard.vue';
import UserList from '../views/admin/modules/users/list.vue';
import UserAdd from '../views/admin/modules/users/add.vue';

const routes = [
	{ path: '/admin', component: AdminMaster, children: [
		{ path: 'dashboard', component: Dashboard },
		{ path: 'users', component: UserList },
		{ path: 'users/add', component: UserAdd }
	]}
];

const router = new VueRouter({
	mode: 'history',
	routes
})

export default router;

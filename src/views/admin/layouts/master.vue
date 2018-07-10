<template>
	<div class="wrapper">
		<app-header />
		<app-sidebar />
			<div class="content-wrapper">
				<router-view></router-view>
			</div>
		<app-footer />
	</div>
</template>

<script>
import Header from './header.vue';
import Footer from './footer.vue';
import Sidebar from './sidebar.vue';
export default {
	components: {
		'app-header': Header,
		'app-footer': Footer,
		'app-sidebar': Sidebar
	}
}
</script>


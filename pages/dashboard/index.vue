<template>
	<div class="flex bg-gray-200 h-screen items-stretch">
        <div class="container">
			<Header />
			<Content />
		</div>
	</div>
</template>
<style lang="css" scoped>
    .container {
		margin: 20px 35px;
		background: #fff;
		box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.175);
        border-radius: 8px;
		border: 1px solid rgba(204,204,204, 0.6);
		padding: 20px 35px;
	}
</style>
<script>
	import Header from '~/components/Modules/Dashboard/DashboardHeader';
	import Content from '~/components/Modules/Dashboard/DashboardContent';

	export default {
		components: {
			Header,
			Content,
		},
		data() {
			return {
			}
		},
		mounted(){
		},
		methods: {

		}
	}
</script>
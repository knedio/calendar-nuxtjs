<template>
	<div id="dashboard-content-component"
        class="w-full flex md:flex-row"
    >
        <Sidebar 
            class="w-full md:w-p28"
        />
        <MainContent 
            class="w-full md:w-p72"
        />
	</div>
</template>
<style lang="css" scoped>
</style>
<script>
    import MainContent from './MainContent/';
    import Sidebar from './Sidebar/';

	export default {
        components: {
            MainContent,
            Sidebar,
        },
		props: [],
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
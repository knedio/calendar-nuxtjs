<template>
	<div id="sidebar-component"
		class="p-2"
	>
		<FilterForm />
        <br />
		<CalendarForm />
	</div>
</template>
<style lang="css" scoped>
    
</style>
<script>
	import FilterForm from './FilterForm';
	import CalendarForm from './CalendarForm';

	export default {
		components: {
			FilterForm,
			CalendarForm,
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